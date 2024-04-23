const express = require("express");
const router = express.Router();

router.get("/users/:id", (req, res, next) => {
  res.send("사용자 정보 가져오기");
});

router.post("/users", (req, res, next) => {
  res.send("회원가입");
});

router.put("/users/:id", (req, res, next) => {
  res.send("사용자 정보 수정");
});

router.delete("/users/:id", (req, res, next) => {
  res.send("회원탈퇴");
});

module.exports = router;
