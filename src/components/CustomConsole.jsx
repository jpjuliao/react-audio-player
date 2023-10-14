import React, { useState, useEffect } from 'react';

function CustomConsole() {
		const [logs, setLogs] = useState([]);

		useEffect(() => {
					const originalConsoleLog = console.log;
					console.log = (...args) => {
									originalConsoleLog(...args);
									setLogs((prevLogs) => [...prevLogs, { type: 'log', message: args }]);
								};

					const originalConsoleError = console.error;
					console.error = (...args) => {
									originalConsoleError(...args);
									setLogs((prevLogs) => [...prevLogs, { type: 'error', message: args }]);
								};
				}, []);

		return (
					<div className="custom-console">
						<h2>Custom Console</h2>
						<div className="log-container">
							{logs.map((log, index) => (
													<div key={index} className={`log-${log.type}`}>
														{JSON.stringify(log.message)}
													</div>
												))}
						</div>
					</div>
				);
}

export default CustomConsole;
