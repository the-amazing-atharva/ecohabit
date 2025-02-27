import mongoose from "mongoose";
import Answer from "../models/answerModel.js";

const createAnswer = async (req, res) => {
  try {
    const answer = await Answer.create({
      answer: req.body.answer,
      user: req.body.user,
      habit: req.body.habit,
    });

    res.status(201).json(answer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getAnswer = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Bad Request" });
  }

  const answer = await Answer.findById(id);

  if (!answer) {
    return res.status(404).json({ error: "answer not found" });
  }

  res.status(200).json(answer);
};

const updateAnswer = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Bad Request" });
  }

  const answer = await Answer.findOneAndUpdate({ _id: id }, { ...req.body });

  if (!answer) {
    return res.status(404).json({ error: "answer not found" });
  }

  res.status(201).json(answer);
};

const deleteAnswer = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Bad Request" });
  }

  const answer = await Answer.findOneAndDelete({ _id: id });

  if (!answer) {
    return res.status(404).json({ error: "answer not found" });
  }

  res.status(200).json(answer);
};

export { createAnswer, getAnswer, updateAnswer, deleteAnswer };
