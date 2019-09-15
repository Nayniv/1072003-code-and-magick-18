'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 20;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var BAR_X = 40;
var BAR_Y = CLOUD_HEIGHT - GAP - FONT_GAP - BAR_HEIGHT;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + FONT_GAP, CLOUD_Y + FONT_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + FONT_GAP, CLOUD_Y + (FONT_GAP * 2));

  var maxTime = getMaxElement(times);

  var getBarHeight = function (arr, index) {
    return BAR_HEIGHT * arr[index] / maxTime;
  };

  for (var i = 0; i < names.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(240, 55%, ' + Math.floor(Math.random() * 100) + '%)';
    }
    ctx.fillRect(CLOUD_X + BAR_X + (BAR_WIDTH + BAR_GAP) * i, BAR_Y + (BAR_HEIGHT - getBarHeight(times, i)), BAR_WIDTH, getBarHeight(times, i));
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], CLOUD_X + BAR_X + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - GAP);
    ctx.fillText(Math.round(times[i]), CLOUD_X + BAR_X + (BAR_WIDTH + BAR_GAP) * i, BAR_Y + (BAR_HEIGHT - getBarHeight(times, i) - GAP));
  }
};
