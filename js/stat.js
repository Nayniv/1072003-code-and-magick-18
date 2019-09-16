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
  var maxElement = Math.max.apply(Math,arr);

  return maxElement;
}

window.renderStatistics = function (ctx, names, times) {
  var maxTime = getMaxElement(times);

  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + FONT_GAP, CLOUD_Y + FONT_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + FONT_GAP, CLOUD_Y + (FONT_GAP * 2));

  for (var i = 0; i < names.length; i++) {
    var barHeight = BAR_HEIGHT * times[i] / maxTime;
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgb(255, 0, 0)';
    } else {
      ctx.fillStyle = 'hsl(240, 55%, ' + Math.floor(Math.random() * 100) + '%)';
    }
    ctx.fillRect(CLOUD_X + BAR_X + (BAR_WIDTH + BAR_GAP) * i, BAR_Y + (BAR_HEIGHT - barHeight), BAR_WIDTH, barHeight);
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], CLOUD_X + BAR_X + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - GAP);
    ctx.fillText(Math.round(times[i]), CLOUD_X + BAR_X + (BAR_WIDTH + BAR_GAP) * i, BAR_Y + (BAR_HEIGHT - barHeight - GAP));
  }
};
