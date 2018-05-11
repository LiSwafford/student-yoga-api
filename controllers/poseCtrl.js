const poses = require('../yoga.json');

const getPoses = (req, res) => {
  const { name } = req.query;
  if (name) {
    const selected = poses.filter(
      pose =>
        pose.english_name.toLowerCase() === name.toLowerCase() ||
        pose.sanskrit_name.toLowerCase() === name.toLowerCase()
    );
    return res.status(200).json(selected);
  }
  res.status(200).json(poses);
};

const getPose = (req, res) => {
  const selected = poses.filter(pose => pose.id == req.params.id)[0];
  selected
    ? res.status(200).json(selected)
    : res.status(400).json({ message: `Doesn't Exist` });
};

module.exports = {
  getPoses,
  getPose
};
