import Blockly from "blockly";
import "blockly/javascript";
import "blockly/python";

//React Blockly Wrapper Not needed
/* 1. String Length */
/* 1.A. String Length - Block Definition   */
Blockly.Blocks["string_length"] = {
	init: function () {
		this.appendValueInput("VALUE")
			.setCheck("String")
			.appendField("length of");
		this.setOutput(true, "Number");
		this.setColour(160);
		this.setTooltip("Returns number of letters in the provided text.");
		this.setHelpUrl(
			"http://www.w3schools.com/jsref/jsref_length_string.asp",
		);
	},
};
/* 1.B. String Length - Add ToolBox Ref.  */
/* 1.C. String Length - Add Generator Function */
Blockly.JavaScript["string_length"] = function(block){
    var argument0 = Blockly.JavaScript.valueToCode(block, 'VALUE',
    Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
    return [argument0 + '.length', Blockly.JavaScript.ORDER_MEMBER];
}; 


/* 2. Contract When */
/* 1.A. Contract When - Block Definition   */
Blockly.Blocks['contracts_when'] = {
    init: function() {
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_CENTRE)
          .appendField("When");
      this.appendStatementInput("NAME")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("after slot")
          .appendField(new Blockly.FieldDropdown([["parameter","1"], ["number","2"]]), "asdadsasd")
          .appendField(new Blockly.FieldTextInput("0"), "number");
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_CENTRE)
          .appendField("continue as");
      this.appendStatementInput("NAME")
          .setCheck(null);
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setColour(290);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };/* 1.B. Contract When - Add ToolBox Ref.  */
/* 1.C. Contract When - Add Generator Function */
Blockly.JavaScript['contracts_when'] = function(block) {
    var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    var dropdown_asdadsasd = block.getFieldValue('asdadsasd');
    var text_number = block.getFieldValue('number');
    var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };
/* 
Blockly.Blocks["new_boundary_function"] = {
	init: function () {
		this.appendDummyInput().appendField(
			new Blockly.FieldTextInput("Boundary Function Name"),
			"Name",
		);
		this.appendStatementInput("Content").setCheck(null);
		this.setInputsInline(true);
		this.setColour(315);
		this.setTooltip("");
		this.setHelpUrl("");
	},
};

Blockly.Python["new_boundary_function"] = function (block) {
	var text_name = block.getFieldValue("Name");
	var statements_content = Blockly.Python.statementToCode(block, "Content");
	// TODO: Assemble Python into code variable.
	var code =
		"def " +
		text_name +
		"(_object,**kwargs):\n" +
		statements_content +
		"\n";
	return code;
};

Blockly.Blocks["return"] = {
	init: function () {
		this.appendValueInput("NAME").setCheck(null).appendField("return");
		this.setInputsInline(false);
		this.setPreviousStatement(true, null);
		this.setColour(330);
		this.setTooltip("");
		this.setHelpUrl("");
	},
};

Blockly.Python["return"] = function (block) {
	var value_name = Blockly.Python.valueToCode(
		block,
		"NAME",
		Blockly.Python.ORDER_ATOMIC,
	);
	// TODO: Assemble Python into code variable.
	var code = "return " + value_name + "\n";
	return code;
};
  */