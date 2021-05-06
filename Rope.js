class Rope{
    constructor( bodyA,pointB)
    {
    var options = {
        bodyA:bodyA,
        pointB:pointB,

        stiffness : 1.2,
        length : 250,

    }
    this.pointB = pointB;
    this.rope = Constraint.create(options);
    World.add(mywold,this.rope);
    }
}