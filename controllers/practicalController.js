const Practical = require('../models/Practical');

exports.createPractical = async (req, res) => {
  try {
    const practical = new Practical(req.body);
    await practical.save();
    res.status(201).send({ message: 'Practical created successfully', practical });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

exports.getPracticals = async (req, res) => {
  try {
    const practicals = await Practical.find()
      .populate('subjectId', 'name code')
      .populate('enrolledStudents', 'name email');
    res.status(200).send(practicals);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

exports.enrollPractical = async (req, res) => {
  const { practicalId, studentId } = req.body;
  try {
    const practical = await Practical.findById(practicalId);
    if (!practical) return res.status(404).send({ message: 'Practical not found' });

    practical.enrolledStudents.push(studentId);
    await practical.save();
    res.status(200).send({ message: 'Enrolled successfully', practical });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
