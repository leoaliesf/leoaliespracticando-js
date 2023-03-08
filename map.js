const emojis = {
    '-': ' ',
    'O': '🚪',
    'X': '🍔',
    'I': '🌳',
    'PLAYER': '🐌',
    'BOMB_COLLISION': '🔥',
    'GAME_OVER': '👎',
    'WIN': '🏆',
  };
  
  const maps = [];
  maps.push(`
    IXXXXXXXXX
    -X-X-XXXXX
    -X---XXXXX
    -X-X-XXXXX
    ---X-XXXXX
    --XX-XXXXX
    -X---XXXXX
    X--XXXXXXX
    --XXXXXXXX
    OXXXXXXXXX
  `);
  maps.push(`
    O--XXXXXXX
    X--XXXXXXX
    XX----XXXX
    X--XX-XXXX
    X-XXX--XXX
    X-XXXX-XXX
    XX--XX--XX
    XX--XXX-XX
    XXXX---IXX
    XXXXXXXXXX
    `);
  maps.push(`
    I-----XXXX
    XXXXX-XXXX
    XX----XXXX
    XX-XXXXXXX
    XX-----XXX
    XXXXXX-XXX
    XX-----XXX
    XX-XXXXXXX
    XX-----OXX
    XXXXXXXXXX
  `);
  maps.push(`
    O-----XXXX
    -XXX-XXXXX
    -XXX---XXX
    XX-XXX-XXX
    XXXXX--XXX
    -----X-XXX
    -XXX---XXX
    -XXXXXXXXX
    -X-------X
    ---XXXXXIX
`);

maps.push(`
    XXXX--XXXX
    IXX--XXXXX
    -X-X---XXX
    ---XXX-XXX
    XX-XX--XXX
    ---XXX-XXX
    -XXXXXXXXX
    -X-------X
    -X-XXXXX-X
    ---XXXXXOX
`);