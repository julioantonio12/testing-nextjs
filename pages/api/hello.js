import { StatusCodes } from "http-status-codes";

export default function handler(req, res) {
  res.status(StatusCodes.OK).json({ text: "Hello" })
}