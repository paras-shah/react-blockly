import './App.css'
/* eslint-disable import/no-extraneous-dependencies */

import React, { useState } from 'react'
import Blockly from 'blockly'

import { BlocklyWorkspace } from 'react-blockly'
import ConfigFiles from './initContent/content';
import "./customBlocks";

const TestEditor = () => {
	const [xml, setXml] = useState('');
	const [javascriptCode, setJavascriptCode] = useState('');

	const onWorkspaceChange = React.useCallback((workspace) => {
		workspace.registerButtonCallback('myFirstButtonPressed', () => {
			alert('button is pressed');
		});

		/* const newXml = Blockly.Xml.domToText(
			Blockly.Xml.workspaceToDom(workspace)
		); */

		const code = Blockly.JavaScript.workspaceToCode(workspace)
		setJavascriptCode(code);
	}, []);

	const onXmlChange = React.useCallback((newXml) => {
		setXml(newXml);
	}, []);

	return (
		<>
			<BlocklyWorkspace
				toolboxConfiguration={ConfigFiles.INITIAL_TOOLBOX_JSON}
				workspaceConfiguration={{
					grid: {
						spacing: 20,
						length: 3,
						colour: '#ccc',
						snap: true,
					},
				}}
				initialXml={ConfigFiles.INITIAL_XML}
				className="fill-height"
				onWorkspaceChange={onWorkspaceChange}
				onXmlChange={onXmlChange}
			/>

			<table with="100%">
				<tbody>
					<tr>
						<td>JS</td>
						<td>XML</td>
					</tr>

					<tr>
						<td>
							<textarea
								id="code"
								style={{ height: '200px', width: '400px' }}
								value={javascriptCode}
								readOnly
							></textarea>
						</td>
						<td>
							<textarea
								id="generated-xml"
								style={{ height: '200px', width: '400px' }}
								value={xml}
								readOnly
							></textarea>
						</td>
					</tr>
				</tbody>
			</table>
		</>
	)
}

export default TestEditor

// window.addEventListener("load", () => {
//   const editor = React.createElement(TestEditor);
//   ReactDOM.render(editor, document.getElementById("blockly"));
// });
