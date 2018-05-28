'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { toggleSelectedKeyword } from './textManipulation';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('vscode-latex-utilities have been activated');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let makeBold = vscode.commands.registerCommand('latex-utils.makeBold', () => {

        toggleSelectedKeyword('textbf');

    });
    context.subscriptions.push(makeBold);

    let makeItalic = vscode.commands.registerCommand('latex-utils.makeItalic', () => {

        toggleSelectedKeyword('textit');

    });
    context.subscriptions.push(makeItalic);
}

// this method is called when your extension is deactivated
export function deactivate() {
}