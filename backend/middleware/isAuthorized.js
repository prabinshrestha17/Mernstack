import { User } from "../schema/user.schema.js";

// export const isAuthorized = async (req, res, next) => {
//   try {
//     const id = req.userId;

//     const user = await User.findById(id);

//     console.log(user);

//     if (user.role !== "admin") {
//       res.status(403).json({
//         message: "You are not authorized",
//       });
//     }

//     next();
//   } catch (error) {
//     res.status(500).json({
//       message: "Internal Server Error",
//       error: error.message,
//     });
//   }
// };

// RBAC => Role Based Access Control
export const isAuthorized = (role) => {
  return async (req, res, next) => {
    try {
      const id = req.userId;
      const user = await User.findById(id);

      if (!role.includes(user.role)) {
        res.status(403).json({
          message: "You are not authorized",
        });
      } else {
        next();
      }
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
        error: error.message,
      });
    }
  };
};
