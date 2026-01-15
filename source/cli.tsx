#!/usr/bin/env node
import React from 'react';
import {render} from 'ink';
import meow from 'meow';
import App from './app.js';

meow(
	`
	Usage
	  $ app

	SaaS Product Builder - View and manage user stories
`,
	{
		importMeta: import.meta,
	},
);

render(<App />);
