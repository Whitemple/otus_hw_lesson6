/* eslint-disable no-useless-escape */

const cheackDate = () => {
  const userValue = prompt("Enter date: ");
  const reg = /[0-3][0-9]\.[0-1][0-9]\.[1-2][0-9][0-9][0-9]/gm;
  return reg.test(userValue);
};

const cheackEmail = () => {
  const userValue = prompt("Enter email: ");
  const reg = /^[a-zA-z_\.0-9]+@[a-z]+\.[a-z0-9]{2,5}$/gm;
  return reg.test(userValue);
};

export { cheackDate, cheackEmail };
