import React, { useState, useEffect } from "react";
import "./header.scss";

const Header = () => {
	const [width, setWidth] = useState(window.innerWidth);
	const [scrolled, setScrolled] = useState(false);
	const [openMenuHamburguer, setOpenMenuHamburguer] = useState(false);

	const isMobile = width <= 920;

	const menuOpen = () => {
		const menuHamburguer = document.querySelector(".hamburguer");
		menuHamburguer.classList.toggle("active");
		setOpenMenuHamburguer(!openMenuHamburguer);

		if (openMenuHamburguer) {
			document.body.style.overflow = "auto";
		} else {
			document.body.style.overflow = "hidden";
		}
	};

	const openHash = (hash) => {
		const element = document.getElementById(hash);
		element.scrollIntoView({ behavior: "smooth" });
	};

	useEffect(() => {
		const handleResize = () => {
			setWidth(window.innerWidth);
		};

		const handleScroll = () => {
			setScrolled(window.scrollY > 0);
		};

		window.addEventListener("resize", handleResize);
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("resize", handleResize);
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			<ul className={`header ${scrolled ? "header-scrolled" : ""}`}>
				<div className="logo">JA</div>
				{isMobile ? (
					<div className="hamburguer" onClick={() => menuOpen()}>
						<div className="bar1"></div>
						<div className="bar2"></div>
						<div className="bar3"></div>
					</div>
				) : (
					<div className="items">
						<li>sobre</li>
						<li>projetos</li>
						<li>criador de conteúdo</li>
						<li>contato</li>
					</div>
				)}
			</ul>
			{openMenuHamburguer && isMobile ? (
				<div className="menu-hamburguer-container">
					<ul className="menu-hamburguer-items">
						<li>sobre</li>
						<li>projetos</li>
						<li>criador de conteúdo</li>
						<li>contato</li>
					</ul>
				</div>
			) : null}
		</>
	);
};

export default Header;
