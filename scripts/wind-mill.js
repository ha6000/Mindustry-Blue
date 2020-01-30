const updateEffectChance = 0.02;
const efficiency = getPowerEfficiency(30);

function getPowerEfficiency(powerPerSecond) {
	return powerPerSecond / 60;
};

const windMill = extendContent(SolarGenerator, 'wind-mill', {
	update(tile) {
		const entity = tile.ent();
		Effects.effect(Fx.smoke);
	}
});