export default function (req, res) {
  console.log(req);
  res.status(200).json({ name: 'John Doe' });
}
