// Code your solution here:
function driversWithRevenueOver(obj, revenue) {
  return obj.filter(function (driver) {
    return driver.revenue > revenue;
  });
};

function driverNamesWithRevenueOver(obj, revenue) {
  return driversWithRevenueOver(obj, revenue).map(function(driver) {
    return driver.name;
  })
}
