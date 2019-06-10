// Code your solution here:
function driversWithRevenueOver(obj, revenue) {
  return obj.filter(function (driver) {
    return driver.revenue > revenue;
  });
};

function driverNamesWithRevenueOver(obj, revenue) {
  return driversWithRevenueOver(obj, revenue).map(function(driver) {
    return driver.name;
  });
};

function exactMatch(obj, attribute) {
  return obj.filter(function(driver) {
    return for (const key in attribute) {
      driver[key] === attribute[key];
    }
  })
};
