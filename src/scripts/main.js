'use strict';

// write code here
const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const spiderWidth = spider.offsetWidth;
const wallWidth = wall.offsetWidth;

const centerPos = wallWidth / 2 - spiderWidth / 2;

spider.style.top = `${centerPos}px `;
spider.style.left = `${centerPos}px `;
