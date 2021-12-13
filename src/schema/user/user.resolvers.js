import argon2 from "argon2";
import { getUserByEmail } from "../../models/User";
import jwt from "jsonwebtoken";
import { createToken, verifyToken } from "../../utils/token";
import { sendPasswordResetEmail } from "../../utils/sendPasswordResetEmail";
import initMailer from "../../utils/nodemailerConnection";
import { getCoach } from "../../models/Coach";
import { getSportsground } from "../../models/Sportsground";
import { getSportsman } from "../../models/Sportsman";

const resolvers = {
  Query: {
    userSignIn: async (_, args, { db }) => {
      const { email, password, accType = "sportsman" } = args;

      const user = await getUserByEmail(email, db);

      if (!user) {
        throw new Error("User not found");
      }

      if (!user[`${accType}_id`]) {
        throw new Error(`User does not have account type of '${accType}'`);
      }

      if (!user.verified) {
        throw new Error("Unable to sign in. Please verify your email.");
      }

      const isValidPassword = await argon2.verify(user.password, password);

      if (!isValidPassword) {
        throw new Error("Invalid password");
      }

      const token = createToken({
        id: user.id,
        email: user.email,
        sportsman: user.sportsman_id,
        coach: user.coach_id,
        sportsground: user.sports_ground_id,
      });
      return {
        token: token,
        user: { ...user },
      };
    },
    getUser: async (_, args, { db }) => {
      const { email } = args;
      const user = await getUserByEmail(email, db);

      const sportsman = await getSportsman(user.sportsman_id, db);
      const coach = await getCoach(user.coach_id, db);
      const sportsground = await getSportsground(user.sports_ground_id, db);

      return {
        ...user,
        sportsman: {
          ...sportsman,
          address: {
            ...sportsmanAddress,
          },
        },
        coach: {
          ...coach,
        },
        sportsground: {
          ...sportsground,
        },
      };
    },
  },
  Mutation: {
    forgotenPassword: async (_, args, { db }) => {
      const { email } = args;
      const user = await getUserByEmail(email, db);
      console.log(user.email);
      if (!user) {
        throw Error("User does not exist.");
      }

      const lostPasswordHash = (Math.random() + 1).toString(36).substring(2);

      await db
        .query(`UPDATE user SET password_reset_hash = ? WHERE id = ?`, [lostPasswordHash, user.id])
        .catch((err) => {
          throw new Error(err);
        });

      sendPasswordResetEmail(email, lostPasswordHash);

      console.log(true);
      return true;
    },
    resetPassword: async (_, args, { db }) => {
      const { newPassword, passwordResetHash } = args;
      let user = (
        await db.query(`SELECT * FROM user WHERE password_reset_hash = ?`, [passwordResetHash])
      )[0];
      console.log(user);

      if (!user) {
        throw Error("User with given hash does not exist.");
      }

      let argonHash = await argon2.hash(newPassword);
      await db.query(`UPDATE user SET password = ?, password_reset_hash = ? WHERE id = ?`, [
        argonHash,
        null,
        user.id,
      ]);

      return true;
    },
    changePassword: async (_, args, { db, auth }) => {
      const { oldPassword, newPassword } = args;
      const decoded = verifyToken(auth);

      const user = await getUserByEmail(decoded.email, db);
      if (!user) {
        throw new Error("User not found");
      }

      const isValidPassword = await argon2.verify(user.password, oldPassword);
      if (!isValidPassword) {
        throw new Error("Invalid password");
      }

      const argonHash = await argon2.hash(newPassword);
      await db.query(`UPDATE user SET password = ? WHERE id = ?`, [argonHash, user.id]);
    },
  },
};

export default resolvers;
