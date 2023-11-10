const validat = require('../helpers/validate.ts');

const saveStudent = (req, res, next) => {
  const validationRule = {
    firstName: 'required|string',
    lastName: 'required|string',
    age: 'required|integer|between:4,12',
    grade: 'required|integer|between:1,6',
    disabilities: 'required|array',
    disability: 'string',
    observations: 'string'
  };
  validat(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  });
};

const saveDisability = (req, res, next) => {
  const validationRule = {
    disability: 'required|string',
    description: 'required|string'
  };
  validat(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  });
};

const saveTeacher = (req, res, next) => {
  const validationRule = {
    firstName: 'required|string',
    lastName: 'required|string',
    email: 'required|email'/*,
    password: 'required|min:8'*/
  };
  validat(req.body, validationRule, {}, (err, status) => {
    var passpatt=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    var passStatus = false;
    var passError = [
      "The password should be at least 8 characters long.",
      "The password should contain at least one uppercase letter.",
      "The password should contain one lowercase leter.",
      "The password should contain one number."
    ];

    if (req.body.password.match(passpatt)) {
      passStatus = true;
      if (!status) {
        res.status(412).send({
          success: false,
          message: 'Validation failed',
          data: err
        });
      } else {
        next();
      }
    } else {
      passStatus = false;
      if (!status) {
        err.errors["password"]=passError;
        res.status(412).send({
          success: false,
          message: 'Validation failed',
          data: err
        });
      } else {
        var terr = {
          errors: [
            {
            "password": passError
            }
          ]
        };
        
        res.status(412).send({
          success: false,
          message: 'Validation failed',
          data: terr
        });
      }
    }
    
});

}

module.exports = {
  saveStudent, saveDisability, saveTeacher
};
