const updateEffectChance = 0.02;
const efficiency = getPowerEfficiency(30);

function getPowerEfficiency(powerPerSecond) {
	return powerPerSecond / 60;
};

const powerEffect = newEffect(20, e => {
	Draw.color(Color.red, Color.blue, e.fin()); //color goes from white to light gray
	Lines.stroke(e.fout() * 2); //line thickness goes from 3 to 01
	Lines.circle(e.x, e.y, e.fin() * 100); //draw a circle whose radius goes from 0 to 100
});

const windMill = extendContent(SolarGenerator, 'wind-mill', {
	update(tile) {
		const doEffect = Mathf.chance(Time.delta() * updateEffectChance);
		if (doEffect) {
			Effects.effect(powerEffect, tile);
		};
		tile.entity.productionEfficiency = efficiency;
	}
});