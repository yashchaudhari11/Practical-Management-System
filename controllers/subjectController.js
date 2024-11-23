const Subject = require('../models/Subject');

exports.createSubject = async (req, res) => {
  try {
    const subject = new Subject(req.body);
    await subject.save();
    res.status(201).send({ message: 'Subject created successfully', subject });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

exports.getSubjects = async (req, res) => {
  try {
    const subjects = await Subject.find().populate('createdBy', 'name email');
    res.status(200).send(subjects);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
