// // const cloudinary = require("cloudinary").v2;
// // const fs = require("fs");

const PendingWork = require("./models/pendingThesisModel");
const User = require("./models/userModel");

// // // Configure Cloudinary with your credentials
// // cloudinary.config({
// //   cloud_name: "dnkhiub4n", // Replace with your Cloudinary cloud name
// //   api_key: "468266744748937", // Replace with your Cloudinary API key
// //   api_secret: "Ngv99eg4xR2iL3LQEcJHo7tjibE", // Replace with your Clo
// // });

// // // Define the path to your local PDF file
// // const localFilePath =
// //   "C:/Users/Adwait/OneDrive/Desktop/builds/sih/server/output.pdf";

// // // Upload the PDF file to Cloudinary
// // cloudinary.uploader.upload(
// //   localFilePath,
// //   { resource_type: "raw" },
// //   (error, result) => {
// //     if (error) {
// //       console.error("Error uploading file:", error);
// //     } else {
// //       console.log("File uploaded successfully.");
// //       console.log("Public URL:", result.secure_url);
// //     }
// //   }
// // );

// // const cloudinary = require("cloudinary").v2;
// // const fs = require("fs");

// // // Configure Cloudinary with your credentials
// // cloudinary.config({
// //   cloud_name: "dnkhiub4n", // Replace with your Cloudinary cloud name
// //   api_key: "468266744748937", // Replace with your Cloudinary API key
// //   api_secret: "Ngv99eg4xR2iL3LQEcJHo7tjibE", // Replace with your Cloudinary API secret
// // });

// // // Define a function to upload a PDF file to Cloudinary
// // async function uploadPdfToCloudinary(localFilePath) {
// //   return new Promise((resolve, reject) => {
// //     cloudinary.uploader.upload(
// //       localFilePath,
// //       { resource_type: "raw" },
// //       (error, result) => {
// //         if (error) {
// //           reject(error);
// //         } else {
// //           resolve(result.secure_url);
// //         }
// //       }
// //     );
// //   });
// // }

// // // Usage example:
// // async function main() {
// //   const localPdfPath =
// //     "C:/Users/Adwait/OneDrive/Desktop/builds/sih/server/output.pdf";

// //   try {
// //     const publicUrl = await uploadPdfToCloudinary(localPdfPath);
// //     console.log("File uploaded successfully.");
// //     console.log("Public URL:", publicUrl);
// //   } catch (error) {
// //     console.error("Error uploading file:", error);
// //   }
// // }

// // // Call the main function to upload the PDF and retrieve the URL
// // main();

// const axios = require("axios");

// const config = {
//   headers: {
//     "x-api-key": "sec_gxkDpDyDqYF6qQZzgWrJZ1OIKUecpt0r",
//     "Content-Type": "application/json",
//   },
// };

// const data = {
//   sourceId: "src_Rz2kFK4Ks9kd0ZUhuO35Q",
//   messages: [
//     {
//       role: "user",
//       content: "Summarise this document in 600 words",
//     },
//   ],
// };

// axios
//   .post("https://api.chatpdf.com/v1/chats/message", data, config)
//   .then((response) => {
//     console.log("Result:", response.data.content);
//   })
//   .catch((error) => {
//     console.error("Error:", error.message);
//     console.log("Response:", error.response.data);
//   });

const updateDescription = async () => {
  const userExists = await User.find({ email: "adwaitmandge@gmail.com" });
  console.log(userExists);
};

updateDescription();
