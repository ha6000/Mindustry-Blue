const updateEffectChance = 0.5;

const powerEffect = newEffect(20, e => {
	Draw.color(Color.red, Color.lightGray, e.fin()); //color goes from white to light gray
	Lines.stroke(e.fout() * 2); //line thickness goes from 3 to 01
	Lines.circle(e.x, e.y, e.fin() * 500); //draw a circle whose radius goes from 0 to 100
});

const windMill = extendContent(PowerGenerator, 'wind-mill', {
	update(tile) {
		if (Mathf.chance(Time.delta() * updateEffectChance)) {
			Effects.effect(powerEffect, tile);
		}
		tile.entity.productionEfficiency = 1.0;
	}
});
print('Im loaded');