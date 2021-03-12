let parabola = function(t) {
  let x = -4 + 8*t;
  let y = -2 - (x - 1)**2;
  let result = new complex(x, y);
  let scl = new complex(1/16, 0);
  return cMult(result, scl);
};

let step = function(t) {
  let result;
  if (t - floor(t) <= 0.5) {
    result = new complex(1, 0);
  } else {
    result = new complex(-1, 0);
  }
  let scl = new complex(1/2, 0);
  return cMult(result, scl);
};

let heart = function(t) {
  let x, y;
  if (t < 0.5) {
    x = 2 - 8*t;
    y = sqrt(1 - (abs(x) - 1)**2);
  } else {
    x = -2 + 8*(t - 0.5);
    y = acos(1 - abs(x)) - PI;
  }

  let result = new complex(x, y);
  let scl = new complex(1/4, 0);
  return cMult(result, scl);
};

let batman = function(t) {
  let x, y;
  if (t < 0.1) {
    x = 7 - 40*t;
    y = 3*sqrt(1 - (x/7)**2);
  } else if (t < 0.15) {
    x = 3 - 40*(t - 0.1);
    y = 1.5 - 0.5*x - (6*sqrt(10)/14)*(sqrt(3 - x**2 + 2*x) - 2);
  } else if (t < 0.20) {
    x = 1 - 5*(t - 0.15);
    y = 9 - 8*x;
  } else if (t < 0.25) {
    x = 0.75 - 5*(t - 0.20);
    y = 3*x + 0.75;
  } else if (t < 0.35) {
    x = 0.5 - 10*(t - 0.25);
    y = 2.25;
  } else if (t < 0.40) {
    x = -0.5 - 5*(t - 0.35);
    y = -3*x + 0.75;
  } else if (t < 0.45) {
    x = -0.75 - 5*(t - 0.40);
    y = 9 + 8*x;
  } else if (t < 0.50) {
    x = -1 - 40*(t - 0.45);
    y = 1.5 + 0.5*x - (6*sqrt(10)/14)*(sqrt(3 - x**2 - 2*x) - 2);
  } else if (t < 0.60) {
    x = -3 - 40*(t - 0.50);
    y = 3*sqrt(1 - (x/7)**2);
  } else if (t < 0.70) {
    x = -7 + 30*(t - 0.60);
    y = -3*sqrt(1 - (x/7)**2);
  } else if (t < 0.90) {
    x = -4 + 40*(t - 0.70);
    y = abs(x/2) - ((3*sqrt(33)-7)/112)*(x**2) + sqrt(1 - (abs(abs(x) - 2) - 1)**2) - 3;
  } else if (t < 1.00) {
    x = 4 + 30*(t - 0.90);
    y = -3*sqrt(1 - (x/7)**2);
  }

  let result = new complex(x, y);
  let scl = new complex(1/9, 0);
  return cMult(result, scl);
}

function drawn(t) {
  let x, y;
  let i = t*path.length;
  let prop = i - floor(i);
  if (i < path.length - 1) {
    x = lerp(path[floor(i)].x, path[ceil(i)].x, prop);
    y = lerp(path[floor(i)].y, path[ceil(i)].y, prop);
  } else {
    x = lerp(path[floor(i)].x, path[0].x, prop);
    y = lerp(path[floor(i)].y, path[0].y, prop);
  }
  return new complex(x, y);
}