const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence') (mongoose)
const StudentsSchema = new mongoose. Schema(
    {
        "candidate-name": {
          "type": String,
          "required": true
        },
        "father-name": {
          "type": String,
          "required": true
        },
        "mother-name": {
          "type": String,
          "required": true
        },
        "profile-picture": {
          "type": String,
          "required": true
        },
        "dob": {
          "date-of-birth": {
            "type": String,
            "required": true
          },
          "age": {
            "type": Number,
            "required": true
          },
          "place-of-birth": {
            "type": String,
            "required": true
          }
        },
        "background-information": {
          "nationality": {
            "type": String,
            "required": true
          },
          "religion": {
            "type": String,
            "required": true
          },
          "mother-tongue": {
            "type": String,
            "required": true
          }
        },
        "profession-of-parent": {
          "profession": {
            "type": String,
            "required": true
          },
          "income": {
            "type": String,
            "required": true
          },
          "place-of-work": {
            "type": String,
            "required": true
          }
        },
        "address": {
          "present-address": {
            "type": String,
            "required": true
          },
          "pincode": {
            "type": String,
            "required": true
          },
          "father-phone": {
            "type": String,
            "required": true
          }
        },
        "identification-marks": {
          "mark1": {
            "type": String,
            "required": true
          },
          "mark2": {
            "type": String,
            "required": true
          }
        },
        "student-aadhar": {
          "type": String,
          "required": true
        },
        "eamcet-details": {
          "hall-ticket-number": {
            "type": String,
            "required": true
          },
          "marks-obtained": {
            "type": String,
            "required": true
          },
          "rank-secured": {
            "type": String,
            "required": true
          }
        },
        "intermediate-details": {
          "college1": {
            "type": String,
            "required": true
          },
          "grade1": {
            "type": String,
            "required": true
          },
          "total-marks-languages1": {
            "type": String,
            "required": true
          },
          "total-marks-optionals1": {
            "type": String,
            "required": true
          },
          "overall-percentage1": {
            "type": String,
            "required": true
          },
          "percentage-optionals1": {
            "type": String,
            "required": true
          },
          "year-of-passing1": {
            "type": String,
            "required": true
          },
          "roll-no1": {
            "type": String,
            "required": true
          }
        },
        "polytechnic-details": {
          "college2": {
            "type": String,
            "required": true
          },
          "grade2": {
            "type": String,
            "required": true
          },
          "total-marks-languages2": {
            "type": String,
            "required": true
          },
          "total-marks-optionals2": {
            "type": String,
            "required": true
          },
          "overall-percentage2": {
            "type": String,
            "required": true
          },
          "percentage-optionals2": {
            "type": String,
            "required": true
          },
          "year-of-passing2": {
            "type": String,
            "required": true
          },
          "roll-no2": {
            "type": String,
            "required": true
          }
        },
        "do-you-belong-to": {
          "type": [String],
          "required": true
        },
        "minority-certificate": {
          "headmaster-name": {
            "type": String,
            "required": true
          },
          "school-name": {
            "type": String,
            "required": true
          },
          "school-location": {
            "type": String,
            "required": true
          },
          "student-name": {
            "type": String,
            "required": true
          },
          "student-father-name": {
            "type": String,
            "required": true
          },
          "admission-number": {
            "type": String,
            "required": true
          },
          "academic-year": {
            "type": String,
            "required": true
          }
        }
      }      
  )
StudentsSchema.plugin(
    AutoIncrement,{
    inc_field:'ticket',
    id :'ticketNums',
    start_seq:500
    }
    )
module.exports = mongoose.model('Students',StudentsSchema)