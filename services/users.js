'use strict';
const axios = require('axios')

const { ZOOM_API_URL, ZOOM_TOKEN } = require('../constants/app');
const logger = require('../util/logger');

exports.addUsers = async (res, body) => {
  try {
    logger.debug('users service : addUsers : start');
    const { action, user_info } = body;

    const config = {
      headers: { Authorization: `Bearer ${ZOOM_TOKEN}` }
    };
    let result = await axios.post(`${ZOOM_API_URL}/users`, body, config);

    logger.info('users service : addUsers: result %o', result);
    res.status(201);
    res.json({
      status: true,
      code: 'ok',
      message: 'User created successfully.'
    });
  } catch (error) {
    logger.error('users service : addUsers: catch %o', error);
    res.status(500);
    res.json({
      success: false,
      code: 'internal_error',
      message: "The request didn't went through. Please try after sometime.",
      data: {
        error: error.toString(),
      },
    });
  }
};

exports.listUsers = async (res, query) => {
  try {
    logger.debug('users service : listUsers : start');

    const config = {
      headers: { Authorization: `Bearer ${ZOOM_TOKEN}` },
      params: query
    };
    let result = await axios.get(`${ZOOM_API_URL}/users`, config);

    logger.info('users service : listUsers: result %o', result);
    res.status(201);
    res.json({
      status: true,
      code: 'ok',
      result: result.data
    });
  } catch (error) {
    logger.error('users service : listUsers: catch %o', error);
    res.status(500);
    res.json({
      success: false,
      code: 'internal_error',
      message: "The request didn't went through. Please try after sometime.",
      data: {
        error: error.toString(),
      },
    });
  }
};

exports.getUser = async (res, userId) => {
  try {
    logger.debug('users service : getUser : start');

    const config = {
      headers: { Authorization: `Bearer ${ZOOM_TOKEN}` }
    };
    let result = await axios.get(`${ZOOM_API_URL}/users/${userId}`, config);

    logger.info('users service : listUsers: result %o', result);
    res.status(201);
    res.json({
      status: true,
      code: 'ok',
      result: result.data
    });
  } catch (error) {
    logger.error('users service : listUsers: catch %o', error);
    res.status(500);
    res.json({
      success: false,
      code: 'internal_error',
      message: "The request didn't went through. Please try after sometime.",
      data: {
        error: error.toString(),
      },
    });
  }
};

exports.deleteUser = async (res, userId) => {
  try {
    logger.debug('users service : deleteUser : start');

    const config = {
      headers: { Authorization: `Bearer ${ZOOM_TOKEN}` }
    };
    let result = await axios.delete(`${ZOOM_API_URL}/users/${userId}`, config);

    logger.info('users service : deleteUser: result %o', result);
    res.status(201);
    res.json({
      status: true,
      code: 'ok',
      result: result.data
    });
  } catch (error) {
    logger.error('users service : listUsers: catch %o', error);
    res.status(500);
    res.json({
      success: false,
      code: 'internal_error',
      message: "The request didn't went through. Please try after sometime.",
      data: {
        error: error.toString(),
      },
    });
  }
};

exports.editUser = async (res, userId, body) => {
  try {
    logger.debug('users service : deleteUser : start');

    const config = {
      headers: { Authorization: `Bearer ${ZOOM_TOKEN}` }
    };
    let result = await axios.patch(`${ZOOM_API_URL}/users/${userId}`, body, config);

    logger.info('users service : deleteUser: result %o', result);
    res.status(201);
    res.json({
      status: true,
      code: 'ok',
      result: result.data
    });
  } catch (error) {
    logger.error('users service : listUsers: catch %o', error);
    res.status(500);
    res.json({
      success: false,
      code: 'internal_error',
      message: "The request didn't went through. Please try after sometime.",
      data: {
        error: error.toString(),
      },
    });
  }
};