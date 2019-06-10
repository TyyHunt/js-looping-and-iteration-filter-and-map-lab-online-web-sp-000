// Code your solution here:
function driversWithRevenueOver(obj, revenue) {
  return obj.filter(function (driver) { return driver.revenue > revenue; })
}
