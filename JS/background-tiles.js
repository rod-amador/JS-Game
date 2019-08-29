var ctx = null;
var gameMap = [
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 	0, 0, 0, 0, 0, 0, 0, 0, 0,  0,  0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 	1, 3, 1, 2, 1, 2, 1, 3, 1,  4, 	2, 2, 2, 2, 2, 2, 2, 2, 0,
	0, 3, 3, 3, 3, 3, 3, 3, 3, 2, 4, 	2, 3, 3, 3, 2, 3, 3, 3, 2,  4, 	0, 0, 5, 5, 5, 5, 5, 0, 0,
	0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 	1, 3, 1, 2, 1, 2, 1, 3, 1,  4, 	5, 5, 5, 5, 5, 5, 5, 5, 0,
	0, 2, 3, 3, 3, 3, 3, 3, 2, 3, 4, 	3, 3, 3, 3, 3, 3, 3, 3, 3,  4, 	5, 0, 5, 5, 5, 5, 5, 5, 0,
	0, 2, 3, 2, 2, 2, 3, 3, 2, 2, 4, 	2, 2, 2, 3, 3, 3, 2, 2, 2,  4, 	5, 0, 0, 0, 0, 0, 0, 5, 0,
	0, 2, 3, 2, 3, 2, 2, 2, 3, 2, 2, 	2, 3, 2, 3, 3, 3, 2, 3, 2,  4, 	5, 0, 5, 5, 5, 5, 5, 0, 0,
	0, 2, 3, 2, 3, 3, 2, 3, 2, 2, 4, 	2, 3, 2, 3, 3, 3, 2, 3, 2,  4, 	5, 5, 5, 0, 0, 5, 5, 5, 0,
	0, 2, 3, 2, 3, 2, 2, 3, 2, 3, 4, 	2, 3, 2, 2, 1, 2, 2, 3, 2,  4, 	5, 5, 0, 5, 5, 5, 5, 5, 0,
	0, 2, 2, 2, 3, 2, 3, 3, 2, 2, 4, 	2, 3, 3, 3, 3, 3, 3, 3, 2,  4, 	5, 5, 0, 5, 5, 0, 5, 5, 0,

	0, 4, 4, 4, 4, 1, 4, 4, 4, 4, 4, 	2, 2, 2, 2, 1,  2, 2, 2, 2, 4, 	0, 0, 0, 2, 2, 0, 0, 0, 0,
	0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 	4, 4, 4, 4, 4,  4, 4, 4, 4, 4, 	2, 2, 2, 2, 2, 2, 2, 2, 0,

	0, 8, 7, 7, 8, 8, 8, 9, 9, 9, 4, 	1, 2, 2, 2, 1,  2, 2, 2, 1, 4, 	2, 2, 2, 2, 2, 2, 2, 2, 0,

	0, 8, 8, 6, 6, 8, 8, 9, 6, 9, 4, 	4, 4, 4, 4, 4, 	4, 4, 4, 4, 4,	2, 2, 2, 2, 2, 2, 2, 2, 0,
	0, 8, 7, 8, 6, 8, 2, 2, 7, 9, 4, 	1, 2, 2, 1, 4, 	1, 2, 2, 1, 4, 	2, 2, 2, 2, 2, 2, 2, 2, 0,
	0, 8, 2, 8, 7, 7, 7, 9, 2, 9, 4, 	2, 2, 2, 2, 4, 	2, 2, 2, 2, 4, 	2, 2, 2, 2, 2, 2, 2, 2, 0,
	0, 2, 2, 7, 7, 8, 2, 8, 7, 9, 4, 	1, 2, 2, 1, 4, 	1, 2, 2, 1, 4, 	2, 2, 2, 2, 2, 2, 2, 2, 0,

	0, 2, 6, 6, 7, 7, 2, 8, 6, 9, 4, 	4, 4, 4, 4, 4, 	4, 4, 4, 4, 4, 	2, 2, 2, 2, 2, 2, 2, 2, 0,
	0, 8, 2, 2, 9, 8, 2, 7, 7, 9, 4, 	1, 2, 2, 1, 4, 	1, 2, 2, 1, 4, 	2, 2, 2, 2, 2, 2, 2, 2, 0,
	0, 8, 2, 2, 2, 2, 7, 8, 7, 9, 4, 	2, 2, 2, 2, 4, 	2, 2, 2, 2, 4, 	2, 2, 2, 2, 2, 2, 2, 2, 0,
	0, 8, 7, 7, 9, 2, 8, 6, 2, 9, 4, 	1, 2, 2, 1, 4, 	1, 2, 2, 1, 4, 	2, 2, 2, 2, 2, 2, 2, 2, 0,

	0, 8, 9, 8, 6, 6, 6, 2, 8, 2, 4, 	4, 4, 4, 4, 4, 	4, 4, 4, 4, 4, 	2, 2, 2, 2, 2, 2, 2, 2, 0,
	0, 8, 2, 7, 8, 2, 2, 9, 7, 2, 4, 	1, 2, 2, 1, 4,	1, 2, 2, 1, 4, 	2, 2, 2, 2, 2, 2, 2, 2, 0,
	0, 8, 9, 8, 6, 2, 9, 2, 9, 9, 4, 	2, 2, 2, 2, 4, 	2, 2, 2, 2, 4, 	2, 2, 2, 2, 2, 2, 2, 2, 0,
	0, 8, 9, 8, 2, 7, 2, 7, 8, 9, 4, 	1, 2, 2, 1, 4, 	1, 2, 2, 1, 4, 	2, 2, 2, 2, 2, 2, 2, 2, 0,

	0, 8, 9, 7, 7, 9, 2, 2, 8, 9, 4,	4, 4, 4, 4, 4, 	4, 4, 4, 4, 4, 	2, 2, 2, 2, 2, 2, 2, 2, 0,
	0, 8, 9, 2, 6, 2, 6, 8, 8, 9, 4, 	1, 2, 2, 1, 4, 	1, 2, 2, 1, 4, 	2, 2, 2, 2, 2, 2, 2, 2, 0,
	0, 8, 9, 6, 6, 6, 2, 8, 2, 9, 4, 	2, 2, 2, 2, 4, 	2, 2, 2, 2, 4, 	2, 2, 2, 2, 2, 2, 2, 2, 0,
	0, 7, 7, 7, 7, 9, 2, 6, 7, 7, 7, 	2, 2, 2, 1, 4, 	1, 2, 2, 1, 4, 	2, 2, 2, 2, 2, 2, 2, 2, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 	0, 0, 0, 0, 0, 	0, 0, 0, 0, 0, 	0, 0, 0, 0, 0, 0, 0, 0, 0
];

// pixeles de cada Width y Height
var tileW = 40, tileH = 40;
// cuanto abarca el array por cuadros
var mapW = 30, mapH = 30;
// el tiempo en frames, y el tiempo actual
var currentSecond = 0, frameCount = 0, framesLastSecond = 0, lastFrameTime = 0;

// var para crear eventos al tocar el TILE y transportar al player
var tileEvents = {
	// zona bosque y transportadores
	41 : function(c) { c.placeAt(14,1);  },
	43 : function(c) { c.placeAt(15,2);  },
	45 : function(c) { c.placeAt(11,2);  },
	47 : function(c) { c.placeAt(15,2);  },
	49 : function(c) { c.placeAt(16,1);  },

	101 : function(c) { c.placeAt(14,3);  },
	103 : function(c) { c.placeAt(15,2);  },
	105 : function(c) { c.placeAt(19,2);  },
	107 : function(c) { c.placeAt(21,1);  },
	109 : function(c) { c.placeAt(16,3);  },

	255 : function(c) { c.placeAt(15,2);  },

///////////////////////////////////////////////////

	// transportador siguiente zona
	371 : function(c) { c.placeAt(15,10); },
	379 : function(c) { c.placeAt(17,15); },


	// teletransportador zona 4  izquierda
	431 : function(c) { c.placeAt(12,19); },
	434 : function(c) { c.placeAt(17,15); },
	491 : function(c) { c.placeAt(15,12); },
	494 : function(c) { c.placeAt(17,19); },

	// teletransportador zona 4 derecha
	436 : function(c) { c.placeAt(17,19); },
	439 : function(c) { c.placeAt(15,12); },
	496 : function(c) { c.placeAt(17,12); },
	499 : function(c) { c.placeAt(12,19); },


	// teletransportador zona 3 izquierda
	551 : function(c) { c.placeAt(12,23); },
	554 : function(c) { c.placeAt(17,15); },
	611 : function(c) { c.placeAt(12,15); },
	614 : function(c) { c.placeAt(17,19); },

	// teletransportador zona 3 derecha
	556 : function(c) { c.placeAt(12,15); },
	559 : function(c) { c.placeAt(12,19); },
	616 : function(c) { c.placeAt(17,23); },
	619 : function(c) { c.placeAt(17,15); },

	//  teletransportador zona 2 izquierda
	671 : function(c) { c.placeAt(12,19); },
	674 : function(c) { c.placeAt(12,23); },
	731 : function(c) { c.placeAt(17,19); },
	734 : function(c) { c.placeAt(17,23); },

	//  teletransportador zona 2 derecha
	676 : function(c) { c.placeAt(12,19); },
	679 : function(c) { c.placeAt(17,27); },
	736 : function(c) { c.placeAt(12,23); },
	739 : function(c) { c.placeAt(17,19); },

	//  teletransportador zona 1 izquierda
	791 : function(c) { c.placeAt(17,27); },
	794 : function(c) { c.placeAt(12,23); },
	854 : function(c) { c.placeAt(17,23); },

	//  teletransportador zona 1 derecha
	796 : function(c) { c.placeAt(12,23); },
	799 : function(c) { c.placeAt(12,27); },
	856 : function(c) { c.placeAt(17,23); },
	859 : function(c) { c.placeAt(17,19); }

}
 


// de aqui se estan obteniendo los sprites
var tileset = null, tilesetURL = "./img/tileset.png", tilesetLoaded = false;

// tipos de Tiles, hasta ahora son 9, vere si agrego mas en un futuro
var floorTypes = {
	solid		: 0,
	grass		: 1,
	path		: 2,
	grass		: 3,
	water		: 4,
	ice 		: 5,
	conveyorL	: 6,
	conveyorR	: 7,
	conveyorD	: 8,
	conveyorU	: 9,

};
// primero se hicieron los tiles por color, después se les agrego un sprite de la img y sus coordenadas
// cada sprite y tile estan ligados a un número, para modificar al gusto
var tileTypes = {
	0 : { colour:"#685b48", floor:floorTypes.solid, sprite:[{x:0,y:0,w:40,h:40}]	},
	1 : { colour:"#5aa457", floor:floorTypes.grass,	sprite:[{x:40,y:0,w:40,h:40}]	},
	2 : { colour:"#e8bd7a", floor:floorTypes.path,	sprite:[{x:80,y:0,w:40,h:40}]	},
	3 : { colour:"#286625", floor:floorTypes.solid,	sprite:[{x:120,y:0,w:40,h:40}]	},
	4 : { colour:"#678fd9", floor:floorTypes.water,	sprite:[
			{x:160,y:0,w:40,h:40,d:200}, {x:200,y:0,w:40,h:40,d:200},
			{x:160,y:40,w:40,h:40,d:200}, {x:200,y:40,w:40,h:40,d:200},
			{x:160,y:40,w:40,h:40,d:200}, {x:200,y:0,w:40,h:40,d:200}
		]},
	5 : { colour:"#eeeeff", floor:floorTypes.ice,	sprite:[{x:120,y:120,w:40,h:40}]},
	6 : { colour:"#cccccc", floor:floorTypes.conveyorL,	sprite:[
			{x:0,y:40,w:40,h:40,d:200}, {x:40,y:40,w:40,h:40,d:200},
			{x:80,y:40,w:40,h:40,d:200}, {x:120,y:40,w:40,h:40,d:200}
		]},
	7 : { colour:"#cccccc", floor:floorTypes.conveyorR,	sprite:[
			{x:120,y:80,w:40,h:40,d:200}, {x:80,y:80,w:40,h:40,d:200},
			{x:40,y:80,w:40,h:40,d:200}, {x:0,y:80,w:40,h:40,d:200}
		]},
	8 : { colour:"#cccccc", floor:floorTypes.conveyorD,	sprite:[
			{x:160,y:200,w:40,h:40,d:200}, {x:160,y:160,w:40,h:40,d:200},
			{x:160,y:120,w:40,h:40,d:200}, {x:160,y:80,w:40,h:40,d:200}
		]},
	9 : { colour:"#cccccc", floor:floorTypes.conveyorU,	sprite:[
			{x:200,y:80,w:40,h:40,d:200}, {x:200,y:120,w:40,h:40,d:200},
			{x:200,y:160,w:40,h:40,d:200}, {x:200,y:200,w:40,h:40,d:200}
		]}
};

// variable que permitirá escoger la dirección general
var directions = {
	up		: 0,
	right	: 1,
	down	: 2,
	left	: 3
};
// todas las teclas se ponen en falso al apretarse y en true al soltarse
var keysDown = {
	37 : false,
	38 : false,
	39 : false,
	40 : false
};

// esto hace que el juego tenga scroll
var viewport = {
	screen		: [0,0],
	startTile	: [0,0],
	endTile		: [0,0],
	offset		: [0,0],
	update		: function(px, py) {
		this.offset[0] = Math.floor((this.screen[0]/2) - px);
		this.offset[1] = Math.floor((this.screen[1]/2) - py);

		var tile = [ Math.floor(px/tileW), Math.floor(py/tileH) ];

		this.startTile[0] = tile[0] - 1 - Math.ceil((this.screen[0]/2) / tileW);
		this.startTile[1] = tile[1] - 1 - Math.ceil((this.screen[1]/2) / tileH);

		if(this.startTile[0] < 0) { this.startTile[0] = 0; }
		if(this.startTile[1] < 0) { this.startTile[1] = 0; }

		this.endTile[0] = tile[0] + 1 + Math.ceil((this.screen[0]/2) / tileW);
		this.endTile[1] = tile[1] + 1 + Math.ceil((this.screen[1]/2) / tileH);

		if(this.endTile[0] >= mapW) { this.endTile[0] = mapW-1; }
		if(this.endTile[1] >= mapH) { this.endTile[1] = mapH-1; }
	}
};
///////////////////////////////////////////////////////////
///////////function del jugador, despues si da tiempo se agregara 2do jugador
var player = new Character();

function Character()
{
	this.tileFrom	= [1,1];
	this.tileTo		= [1,1];
	this.timeMoved	= 0;
	this.dimensions	= [30,30];
	this.position	= [45,45];

	this.delayMove	= {};
	this.delayMove[floorTypes.path]			= 400;
	this.delayMove[floorTypes.grass]		= 800;
	this.delayMove[floorTypes.ice]			= 300;
	this.delayMove[floorTypes.conveyorU]	= 200;
	this.delayMove[floorTypes.conveyorD]	= 200;
	this.delayMove[floorTypes.conveyorL]	= 200;
	this.delayMove[floorTypes.conveyorR]	= 200;

	this.direction	= directions.up;
	this.sprites = {};
	this.sprites[directions.up]		= [{x:0,y:120,w:30,h:30}];
	this.sprites[directions.right]	= [{x:0,y:150,w:30,h:30}];
	this.sprites[directions.down]	= [{x:0,y:180,w:30,h:30}];
	this.sprites[directions.left]	= [{x:0,y:210,w:30,h:30}];
}
/// nos dice de que tile esta y a cual va, esto permite poder hacer después colisiones

Character.prototype.placeAt = function(x, y)
{
	this.tileFrom	= [x,y];
	this.tileTo		= [x,y];
	this.position	= [	((tileW*x)+( (tileW-this.dimensions[0])/2	)),
					   	((tileH*y)+( (tileH-this.dimensions[1])/2	))	];
};

// procesa el movimiento dentro del array, y le agrega la función tiempo (para despues variar velocidad)
Character.prototype.processMovement = function(t)
{
	if(this.tileFrom[0]==this.tileTo[0] && this.tileFrom[1]==this.tileTo[1]) { return false; }

	var moveSpeed = this.delayMove[tileTypes[gameMap[toIndex(this.tileFrom[0],this.tileFrom[1])]].floor];

	if((t-this.timeMoved)>=moveSpeed)
	{



		this.placeAt(this.tileTo[0], this.tileTo[1]);

		// cambio al movimiento a la hora de tocar el tile
		if(typeof tileEvents[toIndex(this.tileTo[0], this.tileTo[1])]!='undefined')
		{
			tileEvents[toIndex(this.tileTo[0], this.tileTo[1])](this);
		}

		var tileFloor = tileTypes[gameMap[toIndex(this.tileFrom[0], this.tileFrom[1])]].floor;

		if(tileFloor==floorTypes.ice)
		{
			if(this.canMoveDirection(this.direction))
			{
				this.moveDirection(this.direction, t);
			}
		}
		// la direccion en que el tile obligara a moverse
		else if(tileFloor==floorTypes.conveyorL && this.canMoveLeft())	{ this.moveLeft(t); }
		else if(tileFloor==floorTypes.conveyorR && this.canMoveRight()) { this.moveRight(t); }
		else if(tileFloor==floorTypes.conveyorU && this.canMoveUp())	{ this.moveUp(t); }
		else if(tileFloor==floorTypes.conveyorD && this.canMoveDown())	{ this.moveDown(t); }
	}
	else
	{
		this.position[0] = (this.tileFrom[0] * tileW) + ((tileW-this.dimensions[0])/2);
		this.position[1] = (this.tileFrom[1] * tileH) + ((tileH-this.dimensions[1])/2);

		if(this.tileTo[0] != this.tileFrom[0])
		{
			var diff = (tileW / moveSpeed) * (t-this.timeMoved);
			this.position[0]+= (this.tileTo[0]<this.tileFrom[0] ? 0 - diff : diff);
		}
		if(this.tileTo[1] != this.tileFrom[1])
		{
			var diff = (tileH / moveSpeed) * (t-this.timeMoved);
			this.position[1]+= (this.tileTo[1]<this.tileFrom[1] ? 0 - diff : diff);
		}

		this.position[0] = Math.round(this.position[0]);
		this.position[1] = Math.round(this.position[1]);
	}

	return true;
}

// determinar si el camino se puede atravesar o no estará permitido de acuerdo al tile
Character.prototype.canMoveTo = function(x, y)
{
	if(x < 0 || x >= mapW || y < 0 || y >= mapH) { return false; }
	if(typeof this.delayMove[tileTypes[gameMap[toIndex(x,y)]].floor]=='undefined') { return false; }
	return true;
};
Character.prototype.canMoveUp		= function() { return this.canMoveTo(this.tileFrom[0], this.tileFrom[1]-1); };
Character.prototype.canMoveDown 	= function() { return this.canMoveTo(this.tileFrom[0], this.tileFrom[1]+1); };
Character.prototype.canMoveLeft 	= function() { return this.canMoveTo(this.tileFrom[0]-1, this.tileFrom[1]); };
Character.prototype.canMoveRight 	= function() { return this.canMoveTo(this.tileFrom[0]+1, this.tileFrom[1]); };
Character.prototype.canMoveDirection = function(d) {
	switch(d)
	{
		case directions.up: 	return this.canMoveUp();
		case directions.down:	return this.canMoveDown();
		case directions.left:	return this.canMoveLeft();
		default:				return this.canMoveRight();
	}
};

Character.prototype.moveLeft	= function(t) { this.tileTo[0]-=1; this.timeMoved = t; this.direction = directions.left; };
Character.prototype.moveRight	= function(t) { this.tileTo[0]+=1; this.timeMoved = t; this.direction = directions.right; };
Character.prototype.moveUp		= function(t) { this.tileTo[1]-=1; this.timeMoved = t; this.direction = directions.up; };
Character.prototype.moveDown	= function(t) { this.tileTo[1]+=1; this.timeMoved = t; this.direction = directions.down; };
Character.prototype.moveDirection = function(d, t) {
	switch(d)
	{
		case directions.up:		return this.moveUp(t);
		case directions.down:	return this.moveDown(t);
		case directions.left:	return this.moveLeft(t);
		default:				return this.moveRight(t);
	}
};

// determina que parte del array...
function toIndex(x, y)	{return((y * mapW) + x);}

// permitira el uso de sprites despues //
function getFrame(sprite, duration, time, animated)
{
	if(!animated) { return sprite[0]; }
	time = time % duration;

	for(x in sprite)
	{
		if(sprite[x].end>=time) { return sprite[x]; }
	}
}
/////////////////////////////
//funcion que pre-cargara todo antes de empezar
window.onload = function()
{
	ctx = document.getElementById('game').getContext("2d");
	requestAnimationFrame(drawGame);
	ctx.font = "bold 10pt sans-serif";

	/// eventos de teclado
	window.addEventListener("keydown", function(e) {
		if(e.keyCode>=37 && e.keyCode<=40) { keysDown[e.keyCode] = true; }	});
	window.addEventListener("keyup", function(e) {
		if(e.keyCode>=37 && e.keyCode<=40) { keysDown[e.keyCode] = false; }	});


	viewport.screen = [document.getElementById('game').width,
		document.getElementById('game').height];

		// si las tiles no cargan avisará que hubo pedos
	tileset = new Image();
	tileset.onerror = function()
	{
		ctx = null;
		alert("Failed loading tileset.");
	};
	tileset.onload = function() { tilesetLoaded = true; };
	tileset.src = tilesetURL;

	// animacion a futuro si da tiempo
	for(x in tileTypes)
	{
		tileTypes[x]['animated'] = tileTypes[x].sprite.length > 1 ? true : false;

		if(tileTypes[x].animated)
		{
			var t = 0;
			
			for(s in tileTypes[x].sprite)
			{
				tileTypes[x].sprite[s]['start'] = t;
				t+= tileTypes[x].sprite[s].d;
				tileTypes[x].sprite[s]['end'] = t;
			}

			tileTypes[x]['spriteDuration'] = t;
		}
	}
};

//// funcion que dibujara el juego
////////////////////////////////////////////////
function drawGame()
{
	if(ctx==null) { return; }
	if(!tilesetLoaded) { requestAnimationFrame(drawGame); return; }

	var currentFrameTime = Date.now();
	var timeElapsed = currentFrameTime - lastFrameTime;

	var sec = Math.floor(Date.now()/1000);
	if(sec!=currentSecond)
	{
		currentSecond = sec;
		framesLastSecond = frameCount;
		frameCount = 1;
	}
	else { frameCount++; }

	////////////////////////////////////////////////////
	// dibuje movimiento del jugador de acuerdo a frames
	if(!player.processMovement(currentFrameTime))
	{
		if(keysDown[38] && player.canMoveUp())			{ player.moveUp(currentFrameTime); }
		else if(keysDown[40] && player.canMoveDown())	{ player.moveDown(currentFrameTime); }
		else if(keysDown[37] && player.canMoveLeft())	{ player.moveLeft(currentFrameTime); }
		else if(keysDown[39] && player.canMoveRight())	{ player.moveRight(currentFrameTime); }
	}
//// dibuje la vista conforme el jugador se mueve
	viewport.update(player.position[0] + (player.dimensions[0]/2),
		player.position[1] + (player.dimensions[1]/2));

	ctx.fillStyle = "#000000";
	ctx.fillRect(0, 0, viewport.screen[0], viewport.screen[1]);

	for(var y = viewport.startTile[1]; y <= viewport.endTile[1]; ++y)
	{
		for(var x = viewport.startTile[0]; x <= viewport.endTile[0]; ++x)
		{
			var tile = tileTypes[gameMap[toIndex(x,y)]];
			var sprite = getFrame(tile.sprite, tile.spriteDuration,
				currentFrameTime, tile.animated);
			ctx.drawImage(tileset,
				sprite.x, sprite.y, sprite.w, sprite.h,
				viewport.offset[0] + (x*tileW), viewport.offset[1] + (y*tileH),
				tileW, tileH);
		}
	}
// dibuje sprites y tiles
	var sprite = player.sprites[player.direction];
	ctx.drawImage(tileset,
		sprite[0].x, sprite[0].y, sprite[0].w, sprite[0].h,
		viewport.offset[0] + player.position[0], viewport.offset[1] + player.position[1],
		player.dimensions[0], player.dimensions[1]);

	ctx.fillStyle = "#ff0000";
	ctx.fillText("FPS: " + framesLastSecond, 10, 20);

	lastFrameTime = currentFrameTime;
	requestAnimationFrame(drawGame);
}