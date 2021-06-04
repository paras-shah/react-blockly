import React, { useRef } from 'react'

import BlocklyComponent from './components/BlocklyComponents'
import BlocklyJS from 'blockly/javascript'
import './blocks/customblocks'
import './generator/generator'
import "./style.css";

const defaultWorkspaceConfiguration = {
	collapse: true,
	comments: true,
	css: true,
	move:{
		scrollbars: true,
		drag: true,
		wheel: true,
	},
	readOnly: false,
	trashcan: true
};

const ReactBlocklyWrapper = (props) => {
	const { workspaceConfiguration = defaultWorkspaceConfiguration , onChange } = props;

	const blockyWorkspace = useRef(null)

	const generateCode = () => {
		var code = BlocklyJS.workspaceToCode(blockyWorkspace.current.workspace)
		console.log(code);
		if(onChange)
		 	onChange(code);
	}

	return (
		<div >
			<div className={"wrapper"}>
			<BlocklyComponent
				ref={blockyWorkspace}
				{...defaultWorkspaceConfiguration}
				{...workspaceConfiguration}
			>
				
			</BlocklyComponent>
			</div>

			<button onClick={generateCode}>Generate</button>
		</div>
	)
}

export default ReactBlocklyWrapper
