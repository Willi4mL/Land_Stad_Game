import { useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { useEffect } from "react";

function CategryPoints() {
	const [isPointModal, setIsPointModal] = useState(false)
	const pointsModalRef = useRef(null)

	useEffect(() => {
		function handleClickOutside(event) {
			if (
				pointsModalRef.current &&
				!pointsModalRef.current.contains(event.target)
			) {
				setTimeout(() => {
					setIsPointModal(false)
				}, 0)
			}
		}
		document.addEventListener('click', handleClickOutside, true)
		return () => {
			document.removeEventListener('click', handleClickOutside, true)
		}
	}, [pointsModalRef])


	return (
		<main>
			<label
				className="category-points-heading"
				onClick={() => setIsPointModal(!isPointModal)}
			>
				<p className="category-points-link">Poäng per kategori</p>
				<IoIosArrowDown className="player-arrow-icon" />
			</label>
			{isPointModal &&
				<section className="result-modal-container">
					<div
						className="result-content-modal-container"
						ref={pointsModalRef}
					>
						<div className="result-content-modal">
							<div className="result-profile">
								<div className="result-container-modal">
									<CgProfile className="result-profile-image-modal" />
								</div>
								<p className="result-name-modal">Kalle Johansson</p>
							</div>
						</div>
						<div className="result-content-modal">
							<div className="result-profile">
								<div className="result-container-modal">
									<CgProfile className="result-profile-image-modal" />
								</div>
								<p className="result-name-modal">Frida Bengtsson</p>
							</div>
						</div>
					</div>
				</section>
			}
		</main>
	)
}

export default CategryPoints