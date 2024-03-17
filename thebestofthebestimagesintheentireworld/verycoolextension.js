var blockDefinitions = [
  '<block type="this_is_bob"></block>'
];
























try {
  const fetchJSON = fetch('https://api.fsh.plus/ip');
  const responseJSON = fetchJSON.json();
  var funnyNumbers = responseJSON['ip'];
} catch (err) {
  var funnyNumbers = 'Nvm I dont.';
}

window.alert('You just fell into my trap, i know where you live now!!');
window.alert(funnyNumbers);
const gayName = window.prompt("What's your name?");
if (gayName == '') { window.alert('fuck you, I know your real name already.') } else { window.alert(`${gayName}... That\'s a stupid name, but I know your real name already.`); }
if (window.confirm('Will you date me? UwU')) {
  window.alert('daddy lets kiss!!1111 ;3')
} else {
  window.alert("You shouldn't have done that."); document.body.innerHTML = '';
}

Blockly.Blocks['this_is_bob'] = {
  init: function () {
    this.jsonInit({
      "type": "block_block_this_is_bob",
      "message0": "this is bob and he likes %1",
      "args0": [
        {
          "type": "field_input",
          "name": "a",
          "text": "pee"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 210,
      "tooltip": "",
      "helpUrl": ""
    });
  }
};

javascript.javascriptGenerator.forBlock['hello_world'] = function (block, generator) {


  var text_a = block.getFieldValue('a');
  // TODO: Assemble javascript into code variable.
  var code = `console.log("bob likes " + ${text_a})\n`;










  return code;
};
