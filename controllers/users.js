'user strict';
const Joi = require('@hapi/joi');

const usersService = require('../services/users');
const logger = require('../util/logger');

exports.addUser = async (req, res) => {
  try {
    logger.debug('recommendations controller : addUser : start');
    usersService.addUsers(res, req.body);
    logger.debug('category controller : addUser :end');
  } catch (error) {
    logger.error('category controller : addUser: catch %o', error);
    res.status(500);
    res.json({
      code: 'internal_error',
      message: "The request didn't went through. Please try after sometime.",
    });
  }
};

exports.listUsers = async (req, res) => {
  try {
    logger.debug('recommendations controller : addUser : start');
    const query = req.query;
    // const query = { status: status};
    console.log("req.query", query);
    usersService.listUsers(res, query);
    logger.debug('category controller : addUser :end');
  } catch (error) {
    logger.error('category controller : addUser: catch %o', error);
    res.status(500);
    res.json({
      code: 'internal_error',
      message: "The request didn't went through. Please try after sometime.",
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    logger.debug('recommendations controller : getUser : start');
    const {userId} = req.params;
    console.log("req.params", userId);
    usersService.getUser(res, userId);
    logger.debug('category controller : getUser :end');
  } catch (error) {
    logger.error('category controller : getUser: catch %o', error);
    res.status(500);
    res.json({
      code: 'internal_error',
      message: "The request didn't went through. Please try after sometime.",
    });
  }
};

exports.deleteUser = async (req, res) => {
  logger.debug('users controller : upvoteShow : start');

  try {
    logger.debug('recommendations controller : deleteUser : start');
    const {userId} = req.params;
    usersService.deleteUser(res, userId);

    logger.debug('users controller : deleteUser :end');
  } catch (error) {
    logger.error('users controller : deleteUser: catch %o', error);
    res.status(500);
    res.json({
      code: 'internal_error',
      message: "The request didn't went through. Please try after sometime.",
    });
  }
};

exports.editUser = async (req, res) => {
  logger.debug('users controller : upvoteShow : start');

  try {
    logger.debug('recommendations controller : deleteUser : start');
    const {userId} = req.params;
    const body = req.body
    usersService.editUser(res, userId, body);

    logger.debug('users controller : deleteUser :end');
  } catch (error) {
    logger.error('users controller : deleteUser: catch %o', error);
    res.status(500);
    res.json({
      code: 'internal_error',
      message: "The request didn't went through. Please try after sometime.",
    });
  }
};