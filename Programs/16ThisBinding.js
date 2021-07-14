const nishant = {
  firstName: "Nishant",
  lastName: "Patil",
  role: "Admin",
  courseCount: 3,
  getInfo: function () {
    console.log(`
        First name is ${this.firstName}
        Last name is ${this.lastName}
        His role is ${this.role}
        and he is studying ${this.courseCount} courses
        `);
  },
};

const dj = {
  firstName: "Rock",
  lastName: "DJ",
  role: "Sub-Admin",
  courseCount: 4,
};

// nishant.getInfo();
// dj.getInfo();

// var djInfo = nishant.getInfo.bind(dj);
// djInfo();

nishant.getInfo.call(dj);
