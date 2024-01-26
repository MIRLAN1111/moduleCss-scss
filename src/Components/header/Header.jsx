import css from "./Header.module.css";
export const Header = () => {
	return (
		<div className={css.container}>
			<div>
				<div className={css.con2}>
					<div>
						<p>Каталог</p>
					</div>
					<div>
						<p>Моё кино</p>
					</div>
					<div>
						<p>Фальмы</p>
					</div>
					<div>
						<p>Сериалы</p>
					</div>
					<div>
						<p>Спорт</p>
					</div>
				</div>
			</div>
		</div>
	);
};
