import React from "react";
import { useState } from "react";


const Semaforo = () => {


	const [color, setColor] = useState("red");


	return (
		<div>

			<div className="container-fluid p-0">
				<div className="btn-group position-absolute top-0 start-50 translate-middle-x mt-2"
					role="group">
				</div>

				<div className="paloSemaforo bg-black"></div>
				<div className="semaforo bg-black rounded d-flex flex-column">
					<div
						className={`${color === "red" ? "luzEncendidaRoja" : ""
							} luces bg-danger m-auto`}
						onClick={() => setColor("red")}></div>
					<div
						className={`${color === "yellow" ? "luzEncendidaAmarilla" : ""
							} luces bg-warning m-auto`}
						onClick={() => setColor("yellow")}></div>
					<div
						className={`${color === "green" ? "luzEncendidaVerde" : ""
							} luces bg-success m-auto`}
						onClick={() => setColor("green")}></div>

				</div>
			</div>

		</div>
	);
};

export default Semaforo;