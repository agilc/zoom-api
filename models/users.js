const mongoose = require('mongoose');

const schemaOptions = {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
};

const isDeletedOptions = {
  timestamps: { isDeleted: 'created_at' },
}

const User = mongoose.model(
  'User',
  new mongoose.Schema(
    {
      action: { type: String, require: true },
      email: { type: String, require: true },
      first_name: { type: String },
      last_name: { type: String },
      type: { type: String, require: true }
    },
    schemaOptions,
    isDeletedOptions
  )
);

exports.User = User;
