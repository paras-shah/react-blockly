/* jshint esversion: 11 */
import React, { useRef } from 'react';
import Blockly from 'blockly/core';
import 'blockly/blocks';
import 'blockly/msg/en';

import './base.css';

const BlocklyComponent = (props) => {
	const {
		xml = 'https://developers.google.com/blockly/xml',
		initialXml,
        locale = 'en',
		children,
		...rest
	} = props;

	console.log([props]);
	console.log(rest);

	/* const localePathObject = { en: 'blockly/msg/en' }

	import(localePathObject[locale]).then((locale) => {
		Blockly.setLocale(locale);
	});
 */
	const blocklyDiv = useRef(null);
    const toolbox = useRef(null);
    let primaryWorkspace;

	React.useEffect(() => {
		// eslint-disable-next-line react-hooks/exhaustive-deps
		primaryWorkspace = Blockly.inject(
			blocklyDiv.current,
			{
				toolbox: toolbox.current,
				...rest
			},
		);	
		
		if (initialXml) {
			Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(initialXml), primaryWorkspace);
		}
	}, []);
	  


    return (
		<div>
			<div ref={blocklyDiv} className="blocklyDiv" />
			<xml
				xmlns={xml}
				is="blockly"
				style={{ display: 'none' }}
				ref={toolbox}
			>
				{children}
			</xml>
		</div>
	)
}

export default BlocklyComponent;

const Block = (p) => {
    const { children, ...props } = p;
    props.is = "blockly";
    return React.createElement("block", props, children);
};

const Category = (p) => {
    const { children, ...props } = p;
    props.is = "blockly";
    return React.createElement("category", props, children);
};

const Value = (p) => {
    const { children, ...props } = p;
    props.is = "blockly";
    return React.createElement("value", props, children);
};

const Field = (p) => {
    const { children, ...props } = p;
    props.is = "blockly";
    return React.createElement("field", props, children);
};

const Shadow = (p) => {
    const { children, ...props } = p;
    props.is = "blockly";
    return React.createElement("shadow", props, children);
};

export { Block, Category, Value, Field, Shadow };