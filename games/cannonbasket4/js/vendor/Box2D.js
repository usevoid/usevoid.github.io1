var Box2D = {};
!(function (t, o) {
  function i() {}
  !(Object.prototype.defineProperty instanceof Function) &&
    Object.prototype.__defineGetter__ instanceof Function &&
    Object.prototype.__defineSetter__ instanceof Function &&
    (Object.defineProperty = function (t, o, i) {
      i.get instanceof Function && t.__defineGetter__(o, i.get),
        i.set instanceof Function && t.__defineSetter__(o, i.set);
    }),
    (t.inherit = function (t, o) {
      var e = t;
      (i.prototype = o.prototype),
        (t.prototype = new i()),
        (t.prototype.constructor = e);
    }),
    (t.generateCallback = function (t, o) {
      return function () {
        o.apply(t, arguments);
      };
    }),
    (t.NVector = function (t) {
      t === o && (t = 0);
      for (var i = new Array(t || 0), e = 0; e < t; ++e) i[e] = 0;
      return i;
    }),
    (t.is = function (t, i) {
      return (
        null !== t &&
        ((i instanceof Function && t instanceof i) ||
          !(t.constructor.__implements == o || !t.constructor.__implements[i]))
      );
    }),
    (t.parseUInt = function (t) {
      return Math.abs(parseInt(t));
    });
})(Box2D);
var Vector = Array,
  Vector_a2j_Number = Box2D.NVector;
"undefined" == typeof Box2D && (Box2D = {}),
  "undefined" == typeof Box2D.Collision && (Box2D.Collision = {}),
  "undefined" == typeof Box2D.Collision.Shapes && (Box2D.Collision.Shapes = {}),
  "undefined" == typeof Box2D.Common && (Box2D.Common = {}),
  "undefined" == typeof Box2D.Common.Math && (Box2D.Common.Math = {}),
  "undefined" == typeof Box2D.Dynamics && (Box2D.Dynamics = {}),
  "undefined" == typeof Box2D.Dynamics.Contacts &&
    (Box2D.Dynamics.Contacts = {}),
  "undefined" == typeof Box2D.Dynamics.Controllers &&
    (Box2D.Dynamics.Controllers = {}),
  "undefined" == typeof Box2D.Dynamics.Joints && (Box2D.Dynamics.Joints = {}),
  (function () {
    function t() {
      t.b2AABB.apply(this, arguments);
    }
    function o() {
      o.b2Bound.apply(this, arguments);
    }
    function i() {
      i.b2BoundValues.apply(this, arguments),
        this.constructor === i && this.b2BoundValues.apply(this, arguments);
    }
    function e() {
      e.b2Collision.apply(this, arguments);
    }
    function n() {
      n.b2ContactID.apply(this, arguments),
        this.constructor === n && this.b2ContactID.apply(this, arguments);
    }
    function s() {
      s.b2ContactPoint.apply(this, arguments);
    }
    function r() {
      r.b2Distance.apply(this, arguments);
    }
    function a() {
      a.b2DistanceInput.apply(this, arguments);
    }
    function l() {
      l.b2DistanceOutput.apply(this, arguments);
    }
    function m() {
      m.b2DistanceProxy.apply(this, arguments);
    }
    function c() {
      c.b2DynamicTree.apply(this, arguments),
        this.constructor === c && this.b2DynamicTree.apply(this, arguments);
    }
    function _() {
      _.b2DynamicTreeBroadPhase.apply(this, arguments);
    }
    function h() {
      h.b2DynamicTreeNode.apply(this, arguments);
    }
    function p() {
      p.b2DynamicTreePair.apply(this, arguments);
    }
    function y() {
      y.b2Manifold.apply(this, arguments),
        this.constructor === y && this.b2Manifold.apply(this, arguments);
    }
    function u() {
      u.b2ManifoldPoint.apply(this, arguments),
        this.constructor === u && this.b2ManifoldPoint.apply(this, arguments);
    }
    function x() {
      x.b2Point.apply(this, arguments);
    }
    function f() {
      f.b2RayCastInput.apply(this, arguments),
        this.constructor === f && this.b2RayCastInput.apply(this, arguments);
    }
    function d() {
      d.b2RayCastOutput.apply(this, arguments);
    }
    function b() {
      b.b2Segment.apply(this, arguments);
    }
    function v() {
      v.b2SeparationFunction.apply(this, arguments);
    }
    function D() {
      D.b2Simplex.apply(this, arguments),
        this.constructor === D && this.b2Simplex.apply(this, arguments);
    }
    function B() {
      B.b2SimplexCache.apply(this, arguments);
    }
    function C() {
      C.b2SimplexVertex.apply(this, arguments);
    }
    function A() {
      A.b2TimeOfImpact.apply(this, arguments);
    }
    function S() {
      S.b2TOIInput.apply(this, arguments);
    }
    function w() {
      w.b2WorldManifold.apply(this, arguments),
        this.constructor === w && this.b2WorldManifold.apply(this, arguments);
    }
    function g() {
      g.ClipVertex.apply(this, arguments);
    }
    function M() {
      M.Features.apply(this, arguments);
    }
    function V() {
      V.b2CircleShape.apply(this, arguments),
        this.constructor === V && this.b2CircleShape.apply(this, arguments);
    }
    function I() {
      I.b2EdgeChainDef.apply(this, arguments),
        this.constructor === I && this.b2EdgeChainDef.apply(this, arguments);
    }
    function G() {
      G.b2EdgeShape.apply(this, arguments),
        this.constructor === G && this.b2EdgeShape.apply(this, arguments);
    }
    function L() {
      L.b2MassData.apply(this, arguments);
    }
    function J() {
      J.b2PolygonShape.apply(this, arguments),
        this.constructor === J && this.b2PolygonShape.apply(this, arguments);
    }
    function F() {
      F.b2Shape.apply(this, arguments),
        this.constructor === F && this.b2Shape.apply(this, arguments);
    }
    function P() {
      P.b2Color.apply(this, arguments),
        this.constructor === P && this.b2Color.apply(this, arguments);
    }
    function R() {
      R.b2Settings.apply(this, arguments);
    }
    function T() {
      T.b2Mat22.apply(this, arguments),
        this.constructor === T && this.b2Mat22.apply(this, arguments);
    }
    function k() {
      k.b2Mat33.apply(this, arguments),
        this.constructor === k && this.b2Mat33.apply(this, arguments);
    }
    function N() {
      N.b2Math.apply(this, arguments);
    }
    function z() {
      z.b2Sweep.apply(this, arguments);
    }
    function E() {
      E.b2Transform.apply(this, arguments),
        this.constructor === E && this.b2Transform.apply(this, arguments);
    }
    function j() {
      j.b2Vec2.apply(this, arguments),
        this.constructor === j && this.b2Vec2.apply(this, arguments);
    }
    function O() {
      O.b2Vec3.apply(this, arguments),
        this.constructor === O && this.b2Vec3.apply(this, arguments);
    }
    function U() {
      U.b2Body.apply(this, arguments),
        this.constructor === U && this.b2Body.apply(this, arguments);
    }
    function q() {
      q.b2BodyDef.apply(this, arguments),
        this.constructor === q && this.b2BodyDef.apply(this, arguments);
    }
    function K() {
      K.b2ContactFilter.apply(this, arguments);
    }
    function W() {
      W.b2ContactImpulse.apply(this, arguments);
    }
    function X() {
      X.b2ContactListener.apply(this, arguments);
    }
    function Z() {
      Z.b2ContactManager.apply(this, arguments),
        this.constructor === Z && this.b2ContactManager.apply(this, arguments);
    }
    function H() {
      H.b2DebugDraw.apply(this, arguments),
        this.constructor === H && this.b2DebugDraw.apply(this, arguments);
    }
    function Y() {
      Y.b2DestructionListener.apply(this, arguments);
    }
    function Q() {
      Q.b2FilterData.apply(this, arguments);
    }
    function $() {
      $.b2Fixture.apply(this, arguments),
        this.constructor === $ && this.b2Fixture.apply(this, arguments);
    }
    function tt() {
      tt.b2FixtureDef.apply(this, arguments),
        this.constructor === tt && this.b2FixtureDef.apply(this, arguments);
    }
    function ot() {
      ot.b2Island.apply(this, arguments),
        this.constructor === ot && this.b2Island.apply(this, arguments);
    }
    function it() {
      it.b2TimeStep.apply(this, arguments);
    }
    function et() {
      et.b2World.apply(this, arguments),
        this.constructor === et && this.b2World.apply(this, arguments);
    }
    function nt() {
      nt.b2CircleContact.apply(this, arguments);
    }
    function st() {
      st.b2Contact.apply(this, arguments),
        this.constructor === st && this.b2Contact.apply(this, arguments);
    }
    function rt() {
      rt.b2ContactConstraint.apply(this, arguments),
        this.constructor === rt &&
          this.b2ContactConstraint.apply(this, arguments);
    }
    function at() {
      at.b2ContactConstraintPoint.apply(this, arguments);
    }
    function lt() {
      lt.b2ContactEdge.apply(this, arguments);
    }
    function mt() {
      mt.b2ContactFactory.apply(this, arguments),
        this.constructor === mt && this.b2ContactFactory.apply(this, arguments);
    }
    function ct() {
      ct.b2ContactRegister.apply(this, arguments);
    }
    function _t() {
      _t.b2ContactResult.apply(this, arguments);
    }
    function ht() {
      ht.b2ContactSolver.apply(this, arguments),
        this.constructor === ht && this.b2ContactSolver.apply(this, arguments);
    }
    function pt() {
      pt.b2EdgeAndCircleContact.apply(this, arguments);
    }
    function yt() {
      yt.b2NullContact.apply(this, arguments),
        this.constructor === yt && this.b2NullContact.apply(this, arguments);
    }
    function ut() {
      ut.b2PolyAndCircleContact.apply(this, arguments);
    }
    function xt() {
      xt.b2PolyAndEdgeContact.apply(this, arguments);
    }
    function ft() {
      ft.b2PolygonContact.apply(this, arguments);
    }
    function dt() {
      dt.b2PositionSolverManifold.apply(this, arguments),
        this.constructor === dt &&
          this.b2PositionSolverManifold.apply(this, arguments);
    }
    function bt() {
      bt.b2BuoyancyController.apply(this, arguments);
    }
    function vt() {
      vt.b2ConstantAccelController.apply(this, arguments);
    }
    function Dt() {
      Dt.b2ConstantForceController.apply(this, arguments);
    }
    function Bt() {
      Bt.b2Controller.apply(this, arguments);
    }
    function Ct() {
      Ct.b2ControllerEdge.apply(this, arguments);
    }
    function At() {
      At.b2GravityController.apply(this, arguments);
    }
    function St() {
      St.b2TensorDampingController.apply(this, arguments);
    }
    function wt() {
      wt.b2DistanceJoint.apply(this, arguments),
        this.constructor === wt && this.b2DistanceJoint.apply(this, arguments);
    }
    function gt() {
      gt.b2DistanceJointDef.apply(this, arguments),
        this.constructor === gt &&
          this.b2DistanceJointDef.apply(this, arguments);
    }
    function Mt() {
      Mt.b2FrictionJoint.apply(this, arguments),
        this.constructor === Mt && this.b2FrictionJoint.apply(this, arguments);
    }
    function Vt() {
      Vt.b2FrictionJointDef.apply(this, arguments),
        this.constructor === Vt &&
          this.b2FrictionJointDef.apply(this, arguments);
    }
    function It() {
      It.b2GearJoint.apply(this, arguments),
        this.constructor === It && this.b2GearJoint.apply(this, arguments);
    }
    function Gt() {
      Gt.b2GearJointDef.apply(this, arguments),
        this.constructor === Gt && this.b2GearJointDef.apply(this, arguments);
    }
    function Lt() {
      Lt.b2Jacobian.apply(this, arguments);
    }
    function Jt() {
      Jt.b2Joint.apply(this, arguments),
        this.constructor === Jt && this.b2Joint.apply(this, arguments);
    }
    function Ft() {
      Ft.b2JointDef.apply(this, arguments),
        this.constructor === Ft && this.b2JointDef.apply(this, arguments);
    }
    function Pt() {
      Pt.b2JointEdge.apply(this, arguments);
    }
    function Rt() {
      Rt.b2LineJoint.apply(this, arguments),
        this.constructor === Rt && this.b2LineJoint.apply(this, arguments);
    }
    function Tt() {
      Tt.b2LineJointDef.apply(this, arguments),
        this.constructor === Tt && this.b2LineJointDef.apply(this, arguments);
    }
    function kt() {
      kt.b2MouseJoint.apply(this, arguments),
        this.constructor === kt && this.b2MouseJoint.apply(this, arguments);
    }
    function Nt() {
      Nt.b2MouseJointDef.apply(this, arguments),
        this.constructor === Nt && this.b2MouseJointDef.apply(this, arguments);
    }
    function zt() {
      zt.b2PrismaticJoint.apply(this, arguments),
        this.constructor === zt && this.b2PrismaticJoint.apply(this, arguments);
    }
    function Et() {
      Et.b2PrismaticJointDef.apply(this, arguments),
        this.constructor === Et &&
          this.b2PrismaticJointDef.apply(this, arguments);
    }
    function jt() {
      jt.b2PulleyJoint.apply(this, arguments),
        this.constructor === jt && this.b2PulleyJoint.apply(this, arguments);
    }
    function Ot() {
      Ot.b2PulleyJointDef.apply(this, arguments),
        this.constructor === Ot && this.b2PulleyJointDef.apply(this, arguments);
    }
    function Ut() {
      Ut.b2RevoluteJoint.apply(this, arguments),
        this.constructor === Ut && this.b2RevoluteJoint.apply(this, arguments);
    }
    function qt() {
      qt.b2RevoluteJointDef.apply(this, arguments),
        this.constructor === qt &&
          this.b2RevoluteJointDef.apply(this, arguments);
    }
    function Kt() {
      Kt.b2WeldJoint.apply(this, arguments),
        this.constructor === Kt && this.b2WeldJoint.apply(this, arguments);
    }
    function Wt() {
      Wt.b2WeldJointDef.apply(this, arguments),
        this.constructor === Wt && this.b2WeldJointDef.apply(this, arguments);
    }
    (Box2D.Collision.IBroadPhase = "Box2D.Collision.IBroadPhase"),
      (Box2D.Collision.b2AABB = t),
      (Box2D.Collision.b2Bound = o),
      (Box2D.Collision.b2BoundValues = i),
      (Box2D.Collision.b2Collision = e),
      (Box2D.Collision.b2ContactID = n),
      (Box2D.Collision.b2ContactPoint = s),
      (Box2D.Collision.b2Distance = r),
      (Box2D.Collision.b2DistanceInput = a),
      (Box2D.Collision.b2DistanceOutput = l),
      (Box2D.Collision.b2DistanceProxy = m),
      (Box2D.Collision.b2DynamicTree = c),
      (Box2D.Collision.b2DynamicTreeBroadPhase = _),
      (Box2D.Collision.b2DynamicTreeNode = h),
      (Box2D.Collision.b2DynamicTreePair = p),
      (Box2D.Collision.b2Manifold = y),
      (Box2D.Collision.b2ManifoldPoint = u),
      (Box2D.Collision.b2Point = x),
      (Box2D.Collision.b2RayCastInput = f),
      (Box2D.Collision.b2RayCastOutput = d),
      (Box2D.Collision.b2Segment = b),
      (Box2D.Collision.b2SeparationFunction = v),
      (Box2D.Collision.b2Simplex = D),
      (Box2D.Collision.b2SimplexCache = B),
      (Box2D.Collision.b2SimplexVertex = C),
      (Box2D.Collision.b2TimeOfImpact = A),
      (Box2D.Collision.b2TOIInput = S),
      (Box2D.Collision.b2WorldManifold = w),
      (Box2D.Collision.ClipVertex = g),
      (Box2D.Collision.Features = M),
      (Box2D.Collision.Shapes.b2CircleShape = V),
      (Box2D.Collision.Shapes.b2EdgeChainDef = I),
      (Box2D.Collision.Shapes.b2EdgeShape = G),
      (Box2D.Collision.Shapes.b2MassData = L),
      (Box2D.Collision.Shapes.b2PolygonShape = J),
      (Box2D.Collision.Shapes.b2Shape = F),
      (Box2D.Common.b2internal = "Box2D.Common.b2internal"),
      (Box2D.Common.b2Color = P),
      (Box2D.Common.b2Settings = R),
      (Box2D.Common.Math.b2Mat22 = T),
      (Box2D.Common.Math.b2Mat33 = k),
      (Box2D.Common.Math.b2Math = N),
      (Box2D.Common.Math.b2Sweep = z),
      (Box2D.Common.Math.b2Transform = E),
      (Box2D.Common.Math.b2Vec2 = j),
      (Box2D.Common.Math.b2Vec3 = O),
      (Box2D.Dynamics.b2Body = U),
      (Box2D.Dynamics.b2BodyDef = q),
      (Box2D.Dynamics.b2ContactFilter = K),
      (Box2D.Dynamics.b2ContactImpulse = W),
      (Box2D.Dynamics.b2ContactListener = X),
      (Box2D.Dynamics.b2ContactManager = Z),
      (Box2D.Dynamics.b2DebugDraw = H),
      (Box2D.Dynamics.b2DestructionListener = Y),
      (Box2D.Dynamics.b2FilterData = Q),
      (Box2D.Dynamics.b2Fixture = $),
      (Box2D.Dynamics.b2FixtureDef = tt),
      (Box2D.Dynamics.b2Island = ot),
      (Box2D.Dynamics.b2TimeStep = it),
      (Box2D.Dynamics.b2World = et),
      (Box2D.Dynamics.Contacts.b2CircleContact = nt),
      (Box2D.Dynamics.Contacts.b2Contact = st),
      (Box2D.Dynamics.Contacts.b2ContactConstraint = rt),
      (Box2D.Dynamics.Contacts.b2ContactConstraintPoint = at),
      (Box2D.Dynamics.Contacts.b2ContactEdge = lt),
      (Box2D.Dynamics.Contacts.b2ContactFactory = mt),
      (Box2D.Dynamics.Contacts.b2ContactRegister = ct),
      (Box2D.Dynamics.Contacts.b2ContactResult = _t),
      (Box2D.Dynamics.Contacts.b2ContactSolver = ht),
      (Box2D.Dynamics.Contacts.b2EdgeAndCircleContact = pt),
      (Box2D.Dynamics.Contacts.b2NullContact = yt),
      (Box2D.Dynamics.Contacts.b2PolyAndCircleContact = ut),
      (Box2D.Dynamics.Contacts.b2PolyAndEdgeContact = xt),
      (Box2D.Dynamics.Contacts.b2PolygonContact = ft),
      (Box2D.Dynamics.Contacts.b2PositionSolverManifold = dt),
      (Box2D.Dynamics.Controllers.b2BuoyancyController = bt),
      (Box2D.Dynamics.Controllers.b2ConstantAccelController = vt),
      (Box2D.Dynamics.Controllers.b2ConstantForceController = Dt),
      (Box2D.Dynamics.Controllers.b2Controller = Bt),
      (Box2D.Dynamics.Controllers.b2ControllerEdge = Ct),
      (Box2D.Dynamics.Controllers.b2GravityController = At),
      (Box2D.Dynamics.Controllers.b2TensorDampingController = St),
      (Box2D.Dynamics.Joints.b2DistanceJoint = wt),
      (Box2D.Dynamics.Joints.b2DistanceJointDef = gt),
      (Box2D.Dynamics.Joints.b2FrictionJoint = Mt),
      (Box2D.Dynamics.Joints.b2FrictionJointDef = Vt),
      (Box2D.Dynamics.Joints.b2GearJoint = It),
      (Box2D.Dynamics.Joints.b2GearJointDef = Gt),
      (Box2D.Dynamics.Joints.b2Jacobian = Lt),
      (Box2D.Dynamics.Joints.b2Joint = Jt),
      (Box2D.Dynamics.Joints.b2JointDef = Ft),
      (Box2D.Dynamics.Joints.b2JointEdge = Pt),
      (Box2D.Dynamics.Joints.b2LineJoint = Rt),
      (Box2D.Dynamics.Joints.b2LineJointDef = Tt),
      (Box2D.Dynamics.Joints.b2MouseJoint = kt),
      (Box2D.Dynamics.Joints.b2MouseJointDef = Nt),
      (Box2D.Dynamics.Joints.b2PrismaticJoint = zt),
      (Box2D.Dynamics.Joints.b2PrismaticJointDef = Et),
      (Box2D.Dynamics.Joints.b2PulleyJoint = jt),
      (Box2D.Dynamics.Joints.b2PulleyJointDef = Ot),
      (Box2D.Dynamics.Joints.b2RevoluteJoint = Ut),
      (Box2D.Dynamics.Joints.b2RevoluteJointDef = qt),
      (Box2D.Dynamics.Joints.b2WeldJoint = Kt),
      (Box2D.Dynamics.Joints.b2WeldJointDef = Wt);
  })(),
  (Box2D.postDefs = []),
  (function () {
    var t = Box2D.Collision.Shapes.b2CircleShape,
      o =
        (Box2D.Collision.Shapes.b2EdgeChainDef,
        Box2D.Collision.Shapes.b2EdgeShape,
        Box2D.Collision.Shapes.b2MassData,
        Box2D.Collision.Shapes.b2PolygonShape),
      i = Box2D.Collision.Shapes.b2Shape,
      e =
        (Box2D.Common.b2Color,
        Box2D.Common.b2internal,
        Box2D.Common.b2Settings),
      n =
        (Box2D.Common.Math.b2Mat22,
        Box2D.Common.Math.b2Mat33,
        Box2D.Common.Math.b2Math),
      s = Box2D.Common.Math.b2Sweep,
      r = Box2D.Common.Math.b2Transform,
      a = Box2D.Common.Math.b2Vec2,
      l = (Box2D.Common.Math.b2Vec3, Box2D.Collision.b2AABB),
      m = Box2D.Collision.b2Bound,
      c = Box2D.Collision.b2BoundValues,
      _ = Box2D.Collision.b2Collision,
      h = Box2D.Collision.b2ContactID,
      p = Box2D.Collision.b2ContactPoint,
      y = Box2D.Collision.b2Distance,
      u = Box2D.Collision.b2DistanceInput,
      x = Box2D.Collision.b2DistanceOutput,
      f = Box2D.Collision.b2DistanceProxy,
      d = Box2D.Collision.b2DynamicTree,
      b = Box2D.Collision.b2DynamicTreeBroadPhase,
      v = Box2D.Collision.b2DynamicTreeNode,
      D = Box2D.Collision.b2DynamicTreePair,
      B = Box2D.Collision.b2Manifold,
      C = Box2D.Collision.b2ManifoldPoint,
      A = Box2D.Collision.b2Point,
      S = Box2D.Collision.b2RayCastInput,
      w = Box2D.Collision.b2RayCastOutput,
      g = Box2D.Collision.b2Segment,
      M = Box2D.Collision.b2SeparationFunction,
      V = Box2D.Collision.b2Simplex,
      I = Box2D.Collision.b2SimplexCache,
      G = Box2D.Collision.b2SimplexVertex,
      L = Box2D.Collision.b2TimeOfImpact,
      J = Box2D.Collision.b2TOIInput,
      F = Box2D.Collision.b2WorldManifold,
      P = Box2D.Collision.ClipVertex,
      R = Box2D.Collision.Features,
      T = Box2D.Collision.IBroadPhase;
    (l.b2AABB = function () {
      (this.lowerBound = new a()), (this.upperBound = new a());
    }),
      (l.prototype.IsValid = function () {
        var t = this.upperBound.x - this.lowerBound.x,
          o = this.upperBound.y - this.lowerBound.y,
          i = t >= 0 && o >= 0;
        return (i =
          i && this.lowerBound.IsValid() && this.upperBound.IsValid());
      }),
      (l.prototype.GetCenter = function () {
        return new a(
          (this.lowerBound.x + this.upperBound.x) / 2,
          (this.lowerBound.y + this.upperBound.y) / 2,
        );
      }),
      (l.prototype.GetExtents = function () {
        return new a(
          (this.upperBound.x - this.lowerBound.x) / 2,
          (this.upperBound.y - this.lowerBound.y) / 2,
        );
      }),
      (l.prototype.Contains = function (t) {
        var o = !0;
        return (
          (o = o && this.lowerBound.x <= t.lowerBound.x),
          (o = o && this.lowerBound.y <= t.lowerBound.y),
          (o = o && t.upperBound.x <= this.upperBound.x),
          (o = o && t.upperBound.y <= this.upperBound.y)
        );
      }),
      (l.prototype.RayCast = function (t, o) {
        var i = -Number.MAX_VALUE,
          e = Number.MAX_VALUE,
          n = o.p1.x,
          s = o.p1.y,
          r = o.p2.x - o.p1.x,
          a = o.p2.y - o.p1.y,
          l = Math.abs(r),
          m = Math.abs(a),
          c = t.normal,
          _ = 0,
          h = 0,
          p = 0,
          y = 0,
          u = 0;
        if (l < Number.MIN_VALUE) {
          if (n < this.lowerBound.x || this.upperBound.x < n) return !1;
        } else if (
          ((_ = 1 / r),
          (h = (this.lowerBound.x - n) * _),
          (p = (this.upperBound.x - n) * _),
          (u = -1),
          h > p && ((y = h), (h = p), (p = y), (u = 1)),
          h > i && ((c.x = u), (c.y = 0), (i = h)),
          (e = Math.min(e, p)),
          i > e)
        )
          return !1;
        if (m < Number.MIN_VALUE) {
          if (s < this.lowerBound.y || this.upperBound.y < s) return !1;
        } else if (
          ((_ = 1 / a),
          (h = (this.lowerBound.y - s) * _),
          (p = (this.upperBound.y - s) * _),
          (u = -1),
          h > p && ((y = h), (h = p), (p = y), (u = 1)),
          h > i && ((c.y = u), (c.x = 0), (i = h)),
          (e = Math.min(e, p)),
          i > e)
        )
          return !1;
        return (t.fraction = i), !0;
      }),
      (l.prototype.TestOverlap = function (t) {
        var o = t.lowerBound.x - this.upperBound.x,
          i = t.lowerBound.y - this.upperBound.y,
          e = this.lowerBound.x - t.upperBound.x,
          n = this.lowerBound.y - t.upperBound.y;
        return !(o > 0 || i > 0) && !(e > 0 || n > 0);
      }),
      (l.Combine = function (t, o) {
        var i = new l();
        return i.Combine(t, o), i;
      }),
      (l.prototype.Combine = function (t, o) {
        (this.lowerBound.x = Math.min(t.lowerBound.x, o.lowerBound.x)),
          (this.lowerBound.y = Math.min(t.lowerBound.y, o.lowerBound.y)),
          (this.upperBound.x = Math.max(t.upperBound.x, o.upperBound.x)),
          (this.upperBound.y = Math.max(t.upperBound.y, o.upperBound.y));
      }),
      (m.b2Bound = function () {}),
      (m.prototype.IsLower = function () {
        return 0 == (1 & this.value);
      }),
      (m.prototype.IsUpper = function () {
        return 1 == (1 & this.value);
      }),
      (m.prototype.Swap = function (t) {
        var o = this.value,
          i = this.proxy,
          e = this.stabbingCount;
        (this.value = t.value),
          (this.proxy = t.proxy),
          (this.stabbingCount = t.stabbingCount),
          (t.value = o),
          (t.proxy = i),
          (t.stabbingCount = e);
      }),
      (c.b2BoundValues = function () {}),
      (c.prototype.b2BoundValues = function () {
        (this.lowerValues = new Vector_a2j_Number()),
          (this.lowerValues[0] = 0),
          (this.lowerValues[1] = 0),
          (this.upperValues = new Vector_a2j_Number()),
          (this.upperValues[0] = 0),
          (this.upperValues[1] = 0);
      }),
      (_.b2Collision = function () {}),
      (_.ClipSegmentToLine = function (t, o, i, e) {
        void 0 === e && (e = 0);
        var n,
          s = 0;
        n = o[0];
        var r = n.v;
        n = o[1];
        var a = n.v,
          l = i.x * r.x + i.y * r.y - e,
          m = i.x * a.x + i.y * a.y - e;
        if (
          (l <= 0 && t[s++].Set(o[0]), m <= 0 && t[s++].Set(o[1]), l * m < 0)
        ) {
          var c = l / (l - m);
          n = t[s];
          var _ = n.v;
          (_.x = r.x + c * (a.x - r.x)),
            (_.y = r.y + c * (a.y - r.y)),
            (n = t[s]);
          var h;
          l > 0 ? ((h = o[0]), (n.id = h.id)) : ((h = o[1]), (n.id = h.id)),
            ++s;
        }
        return s;
      }),
      (_.EdgeSeparation = function (t, o, i, e, n) {
        void 0 === i && (i = 0);
        var s,
          r,
          a = (parseInt(t.m_vertexCount), t.m_vertices),
          l = t.m_normals,
          m = parseInt(e.m_vertexCount),
          c = e.m_vertices;
        (s = o.R), (r = l[i]);
        var _ = s.col1.x * r.x + s.col2.x * r.y,
          h = s.col1.y * r.x + s.col2.y * r.y;
        s = n.R;
        for (
          var p = s.col1.x * _ + s.col1.y * h,
            y = s.col2.x * _ + s.col2.y * h,
            u = 0,
            x = Number.MAX_VALUE,
            f = 0;
          f < m;
          ++f
        ) {
          r = c[f];
          var d = r.x * p + r.y * y;
          d < x && ((x = d), (u = f));
        }
        (r = a[i]), (s = o.R);
        var b = o.position.x + (s.col1.x * r.x + s.col2.x * r.y),
          v = o.position.y + (s.col1.y * r.x + s.col2.y * r.y);
        (r = c[u]), (s = n.R);
        var D = n.position.x + (s.col1.x * r.x + s.col2.x * r.y),
          B = n.position.y + (s.col1.y * r.x + s.col2.y * r.y);
        (D -= b), (B -= v);
        var C = D * _ + B * h;
        return C;
      }),
      (_.FindMaxSeparation = function (t, o, i, e, n) {
        var s,
          r,
          a = parseInt(o.m_vertexCount),
          l = o.m_normals;
        (r = n.R), (s = e.m_centroid);
        var m = n.position.x + (r.col1.x * s.x + r.col2.x * s.y),
          c = n.position.y + (r.col1.y * s.x + r.col2.y * s.y);
        (r = i.R),
          (s = o.m_centroid),
          (m -= i.position.x + (r.col1.x * s.x + r.col2.x * s.y)),
          (c -= i.position.y + (r.col1.y * s.x + r.col2.y * s.y));
        for (
          var h = m * i.R.col1.x + c * i.R.col1.y,
            p = m * i.R.col2.x + c * i.R.col2.y,
            y = 0,
            u = -Number.MAX_VALUE,
            x = 0;
          x < a;
          ++x
        ) {
          s = l[x];
          var f = s.x * h + s.y * p;
          f > u && ((u = f), (y = x));
        }
        var d = _.EdgeSeparation(o, i, y, e, n),
          b = parseInt(y - 1 >= 0 ? y - 1 : a - 1),
          v = _.EdgeSeparation(o, i, b, e, n),
          D = parseInt(y + 1 < a ? y + 1 : 0),
          B = _.EdgeSeparation(o, i, D, e, n),
          C = 0,
          A = 0,
          S = 0;
        if (v > d && v > B) (S = -1), (C = b), (A = v);
        else {
          if (!(B > d)) return (t[0] = y), d;
          (S = 1), (C = D), (A = B);
        }
        for (;;) {
          if (
            ((y =
              S == -1 ? (C - 1 >= 0 ? C - 1 : a - 1) : C + 1 < a ? C + 1 : 0),
            (d = _.EdgeSeparation(o, i, y, e, n)),
            !(d > A))
          )
            break;
          (C = y), (A = d);
        }
        return (t[0] = C), A;
      }),
      (_.FindIncidentEdge = function (t, o, i, e, n, s) {
        void 0 === e && (e = 0);
        var r,
          a,
          l = (parseInt(o.m_vertexCount), o.m_normals),
          m = parseInt(n.m_vertexCount),
          c = n.m_vertices,
          _ = n.m_normals;
        (r = i.R), (a = l[e]);
        var h = r.col1.x * a.x + r.col2.x * a.y,
          p = r.col1.y * a.x + r.col2.y * a.y;
        r = s.R;
        var y = r.col1.x * h + r.col1.y * p;
        (p = r.col2.x * h + r.col2.y * p), (h = y);
        for (var u = 0, x = Number.MAX_VALUE, f = 0; f < m; ++f) {
          a = _[f];
          var d = h * a.x + p * a.y;
          d < x && ((x = d), (u = f));
        }
        var b,
          v = parseInt(u),
          D = parseInt(v + 1 < m ? v + 1 : 0);
        (b = t[0]),
          (a = c[v]),
          (r = s.R),
          (b.v.x = s.position.x + (r.col1.x * a.x + r.col2.x * a.y)),
          (b.v.y = s.position.y + (r.col1.y * a.x + r.col2.y * a.y)),
          (b.id.features.referenceEdge = e),
          (b.id.features.incidentEdge = v),
          (b.id.features.incidentVertex = 0),
          (b = t[1]),
          (a = c[D]),
          (r = s.R),
          (b.v.x = s.position.x + (r.col1.x * a.x + r.col2.x * a.y)),
          (b.v.y = s.position.y + (r.col1.y * a.x + r.col2.y * a.y)),
          (b.id.features.referenceEdge = e),
          (b.id.features.incidentEdge = D),
          (b.id.features.incidentVertex = 1);
      }),
      (_.MakeClipPointVector = function () {
        var t = new Vector(2);
        return (t[0] = new P()), (t[1] = new P()), t;
      }),
      (_.CollidePolygons = function (t, o, i, n, s) {
        var r;
        t.m_pointCount = 0;
        var a = o.m_radius + n.m_radius,
          l = 0;
        _.s_edgeAO[0] = l;
        var m = _.FindMaxSeparation(_.s_edgeAO, o, i, n, s);
        if (((l = _.s_edgeAO[0]), !(m > a))) {
          var c = 0;
          _.s_edgeBO[0] = c;
          var h = _.FindMaxSeparation(_.s_edgeBO, n, s, o, i);
          if (((c = _.s_edgeBO[0]), !(h > a))) {
            var p,
              y,
              u,
              x,
              f,
              d = 0,
              b = 0,
              v = 0.98,
              D = 0.001;
            h > v * m + D
              ? ((p = n),
                (y = o),
                (u = s),
                (x = i),
                (d = c),
                (t.m_type = B.e_faceB),
                (b = 1))
              : ((p = o),
                (y = n),
                (u = i),
                (x = s),
                (d = l),
                (t.m_type = B.e_faceA),
                (b = 0));
            var C = _.s_incidentEdge;
            _.FindIncidentEdge(C, p, u, d, y, x);
            var A,
              S = parseInt(p.m_vertexCount),
              w = p.m_vertices,
              g = w[d];
            A = d + 1 < S ? w[parseInt(d + 1)] : w[0];
            var M = _.s_localTangent;
            M.Set(A.x - g.x, A.y - g.y), M.Normalize();
            var V = _.s_localNormal;
            (V.x = M.y), (V.y = -M.x);
            var I = _.s_planePoint;
            I.Set(0.5 * (g.x + A.x), 0.5 * (g.y + A.y));
            var G = _.s_tangent;
            (f = u.R),
              (G.x = f.col1.x * M.x + f.col2.x * M.y),
              (G.y = f.col1.y * M.x + f.col2.y * M.y);
            var L = _.s_tangent2;
            (L.x = -G.x), (L.y = -G.y);
            var J = _.s_normal;
            (J.x = G.y), (J.y = -G.x);
            var F = _.s_v11,
              P = _.s_v12;
            (F.x = u.position.x + (f.col1.x * g.x + f.col2.x * g.y)),
              (F.y = u.position.y + (f.col1.y * g.x + f.col2.y * g.y)),
              (P.x = u.position.x + (f.col1.x * A.x + f.col2.x * A.y)),
              (P.y = u.position.y + (f.col1.y * A.x + f.col2.y * A.y));
            var R = J.x * F.x + J.y * F.y,
              T = -G.x * F.x - G.y * F.y + a,
              k = G.x * P.x + G.y * P.y + a,
              N = _.s_clipPoints1,
              z = _.s_clipPoints2,
              E = 0;
            if (
              ((E = _.ClipSegmentToLine(N, C, L, T)),
              !(E < 2 || ((E = _.ClipSegmentToLine(z, N, G, k)), E < 2)))
            ) {
              t.m_localPlaneNormal.SetV(V), t.m_localPoint.SetV(I);
              for (var j = 0, O = 0; O < e.b2_maxManifoldPoints; ++O) {
                r = z[O];
                var U = J.x * r.v.x + J.y * r.v.y - R;
                if (U <= a) {
                  var q = t.m_points[j];
                  f = x.R;
                  var K = r.v.x - x.position.x,
                    W = r.v.y - x.position.y;
                  (q.m_localPoint.x = K * f.col1.x + W * f.col1.y),
                    (q.m_localPoint.y = K * f.col2.x + W * f.col2.y),
                    q.m_id.Set(r.id),
                    (q.m_id.features.flip = b),
                    ++j;
                }
              }
              t.m_pointCount = j;
            }
          }
        }
      }),
      (_.CollideCircles = function (t, o, i, e, n) {
        t.m_pointCount = 0;
        var s, r;
        (s = i.R), (r = o.m_p);
        var a = i.position.x + (s.col1.x * r.x + s.col2.x * r.y),
          l = i.position.y + (s.col1.y * r.x + s.col2.y * r.y);
        (s = n.R), (r = e.m_p);
        var m = n.position.x + (s.col1.x * r.x + s.col2.x * r.y),
          c = n.position.y + (s.col1.y * r.x + s.col2.y * r.y),
          _ = m - a,
          h = c - l,
          p = _ * _ + h * h,
          y = o.m_radius + e.m_radius;
        p > y * y ||
          ((t.m_type = B.e_circles),
          t.m_localPoint.SetV(o.m_p),
          t.m_localPlaneNormal.SetZero(),
          (t.m_pointCount = 1),
          t.m_points[0].m_localPoint.SetV(e.m_p),
          (t.m_points[0].m_id.key = 0));
      }),
      (_.CollidePolygonAndCircle = function (t, o, i, e, n) {
        t.m_pointCount = 0;
        var s,
          r,
          a = 0,
          l = 0;
        (r = n.R), (s = e.m_p);
        var m = n.position.x + (r.col1.x * s.x + r.col2.x * s.y),
          c = n.position.y + (r.col1.y * s.x + r.col2.y * s.y);
        (a = m - i.position.x), (l = c - i.position.y), (r = i.R);
        for (
          var _ = a * r.col1.x + l * r.col1.y,
            h = a * r.col2.x + l * r.col2.y,
            p = 0,
            y = -Number.MAX_VALUE,
            u = o.m_radius + e.m_radius,
            x = parseInt(o.m_vertexCount),
            f = o.m_vertices,
            d = o.m_normals,
            b = 0;
          b < x;
          ++b
        ) {
          (s = f[b]), (a = _ - s.x), (l = h - s.y), (s = d[b]);
          var v = s.x * a + s.y * l;
          if (v > u) return;
          v > y && ((y = v), (p = b));
        }
        var D = parseInt(p),
          C = parseInt(D + 1 < x ? D + 1 : 0),
          A = f[D],
          S = f[C];
        if (y < Number.MIN_VALUE)
          return (
            (t.m_pointCount = 1),
            (t.m_type = B.e_faceA),
            t.m_localPlaneNormal.SetV(d[p]),
            (t.m_localPoint.x = 0.5 * (A.x + S.x)),
            (t.m_localPoint.y = 0.5 * (A.y + S.y)),
            t.m_points[0].m_localPoint.SetV(e.m_p),
            void (t.m_points[0].m_id.key = 0)
          );
        var w = (_ - A.x) * (S.x - A.x) + (h - A.y) * (S.y - A.y),
          g = (_ - S.x) * (A.x - S.x) + (h - S.y) * (A.y - S.y);
        if (w <= 0) {
          if ((_ - A.x) * (_ - A.x) + (h - A.y) * (h - A.y) > u * u) return;
          (t.m_pointCount = 1),
            (t.m_type = B.e_faceA),
            (t.m_localPlaneNormal.x = _ - A.x),
            (t.m_localPlaneNormal.y = h - A.y),
            t.m_localPlaneNormal.Normalize(),
            t.m_localPoint.SetV(A),
            t.m_points[0].m_localPoint.SetV(e.m_p),
            (t.m_points[0].m_id.key = 0);
        } else if (g <= 0) {
          if ((_ - S.x) * (_ - S.x) + (h - S.y) * (h - S.y) > u * u) return;
          (t.m_pointCount = 1),
            (t.m_type = B.e_faceA),
            (t.m_localPlaneNormal.x = _ - S.x),
            (t.m_localPlaneNormal.y = h - S.y),
            t.m_localPlaneNormal.Normalize(),
            t.m_localPoint.SetV(S),
            t.m_points[0].m_localPoint.SetV(e.m_p),
            (t.m_points[0].m_id.key = 0);
        } else {
          var M = 0.5 * (A.x + S.x),
            V = 0.5 * (A.y + S.y);
          if (((y = (_ - M) * d[D].x + (h - V) * d[D].y), y > u)) return;
          (t.m_pointCount = 1),
            (t.m_type = B.e_faceA),
            (t.m_localPlaneNormal.x = d[D].x),
            (t.m_localPlaneNormal.y = d[D].y),
            t.m_localPlaneNormal.Normalize(),
            t.m_localPoint.Set(M, V),
            t.m_points[0].m_localPoint.SetV(e.m_p),
            (t.m_points[0].m_id.key = 0);
        }
      }),
      (_.TestOverlap = function (t, o) {
        var i = o.lowerBound,
          e = t.upperBound,
          n = i.x - e.x,
          s = i.y - e.y;
        (i = t.lowerBound), (e = o.upperBound);
        var r = i.x - e.x,
          a = i.y - e.y;
        return !(n > 0 || s > 0) && !(r > 0 || a > 0);
      }),
      Box2D.postDefs.push(function () {
        (Box2D.Collision.b2Collision.s_incidentEdge = _.MakeClipPointVector()),
          (Box2D.Collision.b2Collision.s_clipPoints1 = _.MakeClipPointVector()),
          (Box2D.Collision.b2Collision.s_clipPoints2 = _.MakeClipPointVector()),
          (Box2D.Collision.b2Collision.s_edgeAO = new Vector_a2j_Number(1)),
          (Box2D.Collision.b2Collision.s_edgeBO = new Vector_a2j_Number(1)),
          (Box2D.Collision.b2Collision.s_localTangent = new a()),
          (Box2D.Collision.b2Collision.s_localNormal = new a()),
          (Box2D.Collision.b2Collision.s_planePoint = new a()),
          (Box2D.Collision.b2Collision.s_normal = new a()),
          (Box2D.Collision.b2Collision.s_tangent = new a()),
          (Box2D.Collision.b2Collision.s_tangent2 = new a()),
          (Box2D.Collision.b2Collision.s_v11 = new a()),
          (Box2D.Collision.b2Collision.s_v12 = new a()),
          (Box2D.Collision.b2Collision.b2CollidePolyTempVec = new a()),
          (Box2D.Collision.b2Collision.b2_nullFeature = 255);
      }),
      (h.b2ContactID = function () {
        this.features = new R();
      }),
      (h.prototype.b2ContactID = function () {
        this.features._m_id = this;
      }),
      (h.prototype.Set = function (t) {
        this.key = t._key;
      }),
      (h.prototype.Copy = function () {
        var t = new h();
        return (t.key = this.key), t;
      }),
      Object.defineProperty(h.prototype, "key", {
        enumerable: !1,
        configurable: !0,
        get: function () {
          return this._key;
        },
      }),
      Object.defineProperty(h.prototype, "key", {
        enumerable: !1,
        configurable: !0,
        set: function (t) {
          void 0 === t && (t = 0),
            (this._key = t),
            (this.features._referenceEdge = 255 & this._key),
            (this.features._incidentEdge = ((65280 & this._key) >> 8) & 255),
            (this.features._incidentVertex =
              ((16711680 & this._key) >> 16) & 255),
            (this.features._flip = ((4278190080 & this._key) >> 24) & 255);
        },
      }),
      (p.b2ContactPoint = function () {
        (this.position = new a()),
          (this.velocity = new a()),
          (this.normal = new a()),
          (this.id = new h());
      }),
      (y.b2Distance = function () {}),
      (y.Distance = function (t, o, i) {
        ++y.b2_gjkCalls;
        var s = i.proxyA,
          r = i.proxyB,
          l = i.transformA,
          m = i.transformB,
          c = y.s_simplex;
        c.ReadCache(o, s, l, r, m);
        for (
          var _,
            h = c.m_vertices,
            p = 20,
            u = y.s_saveA,
            x = y.s_saveB,
            f = 0,
            d = c.GetClosestPoint(),
            b = d.LengthSquared(),
            v = b,
            D = 0,
            B = 0;
          B < p;

        ) {
          for (f = c.m_count, D = 0; D < f; D++)
            (u[D] = h[D].indexA), (x[D] = h[D].indexB);
          switch (c.m_count) {
            case 1:
              break;
            case 2:
              c.Solve2();
              break;
            case 3:
              c.Solve3();
              break;
            default:
              e.b2Assert(!1);
          }
          if (3 == c.m_count) break;
          (_ = c.GetClosestPoint()), (v = _.LengthSquared()), (b = v);
          var C = c.GetSearchDirection();
          if (C.LengthSquared() < Number.MIN_VALUE * Number.MIN_VALUE) break;
          var A = h[c.m_count];
          (A.indexA = s.GetSupport(n.MulTMV(l.R, C.GetNegative()))),
            (A.wA = n.MulX(l, s.GetVertex(A.indexA))),
            (A.indexB = r.GetSupport(n.MulTMV(m.R, C))),
            (A.wB = n.MulX(m, r.GetVertex(A.indexB))),
            (A.w = n.SubtractVV(A.wB, A.wA)),
            ++B,
            ++y.b2_gjkIters;
          var S = !1;
          for (D = 0; D < f; D++)
            if (A.indexA == u[D] && A.indexB == x[D]) {
              S = !0;
              break;
            }
          if (S) break;
          ++c.m_count;
        }
        if (
          ((y.b2_gjkMaxIters = n.Max(y.b2_gjkMaxIters, B)),
          c.GetWitnessPoints(t.pointA, t.pointB),
          (t.distance = n.SubtractVV(t.pointA, t.pointB).Length()),
          (t.iterations = B),
          c.WriteCache(o),
          i.useRadii)
        ) {
          var w = s.m_radius,
            g = r.m_radius;
          if (t.distance > w + g && t.distance > Number.MIN_VALUE) {
            t.distance -= w + g;
            var M = n.SubtractVV(t.pointB, t.pointA);
            M.Normalize(),
              (t.pointA.x += w * M.x),
              (t.pointA.y += w * M.y),
              (t.pointB.x -= g * M.x),
              (t.pointB.y -= g * M.y);
          } else
            (_ = new a()),
              (_.x = 0.5 * (t.pointA.x + t.pointB.x)),
              (_.y = 0.5 * (t.pointA.y + t.pointB.y)),
              (t.pointA.x = t.pointB.x = _.x),
              (t.pointA.y = t.pointB.y = _.y),
              (t.distance = 0);
        }
      }),
      Box2D.postDefs.push(function () {
        (Box2D.Collision.b2Distance.s_simplex = new V()),
          (Box2D.Collision.b2Distance.s_saveA = new Vector_a2j_Number(3)),
          (Box2D.Collision.b2Distance.s_saveB = new Vector_a2j_Number(3));
      }),
      (u.b2DistanceInput = function () {}),
      (x.b2DistanceOutput = function () {
        (this.pointA = new a()), (this.pointB = new a());
      }),
      (f.b2DistanceProxy = function () {}),
      (f.prototype.Set = function (n) {
        switch (n.GetType()) {
          case i.e_circleShape:
            var s = n instanceof t ? n : null;
            (this.m_vertices = new Vector(1, !0)),
              (this.m_vertices[0] = s.m_p),
              (this.m_count = 1),
              (this.m_radius = s.m_radius);
            break;
          case i.e_polygonShape:
            var r = n instanceof o ? n : null;
            (this.m_vertices = r.m_vertices),
              (this.m_count = r.m_vertexCount),
              (this.m_radius = r.m_radius);
            break;
          default:
            e.b2Assert(!1);
        }
      }),
      (f.prototype.GetSupport = function (t) {
        for (
          var o = 0,
            i = this.m_vertices[0].x * t.x + this.m_vertices[0].y * t.y,
            e = 1;
          e < this.m_count;
          ++e
        ) {
          var n = this.m_vertices[e].x * t.x + this.m_vertices[e].y * t.y;
          n > i && ((o = e), (i = n));
        }
        return o;
      }),
      (f.prototype.GetSupportVertex = function (t) {
        for (
          var o = 0,
            i = this.m_vertices[0].x * t.x + this.m_vertices[0].y * t.y,
            e = 1;
          e < this.m_count;
          ++e
        ) {
          var n = this.m_vertices[e].x * t.x + this.m_vertices[e].y * t.y;
          n > i && ((o = e), (i = n));
        }
        return this.m_vertices[o];
      }),
      (f.prototype.GetVertexCount = function () {
        return this.m_count;
      }),
      (f.prototype.GetVertex = function (t) {
        return (
          void 0 === t && (t = 0),
          e.b2Assert(0 <= t && t < this.m_count),
          this.m_vertices[t]
        );
      }),
      (d.b2DynamicTree = function () {}),
      (d.prototype.b2DynamicTree = function () {
        (this.m_root = null),
          (this.m_freeList = null),
          (this.m_path = 0),
          (this.m_insertionCount = 0);
      }),
      (d.prototype.CreateProxy = function (t, o) {
        var i = this.AllocateNode(),
          n = e.b2_aabbExtension,
          s = e.b2_aabbExtension;
        return (
          (i.aabb.lowerBound.x = t.lowerBound.x - n),
          (i.aabb.lowerBound.y = t.lowerBound.y - s),
          (i.aabb.upperBound.x = t.upperBound.x + n),
          (i.aabb.upperBound.y = t.upperBound.y + s),
          (i.userData = o),
          this.InsertLeaf(i),
          i
        );
      }),
      (d.prototype.DestroyProxy = function (t) {
        this.RemoveLeaf(t), this.FreeNode(t);
      }),
      (d.prototype.MoveProxy = function (t, o, i) {
        if ((e.b2Assert(t.IsLeaf()), t.aabb.Contains(o))) return !1;
        this.RemoveLeaf(t);
        var n =
            e.b2_aabbExtension + e.b2_aabbMultiplier * (i.x > 0 ? i.x : -i.x),
          s = e.b2_aabbExtension + e.b2_aabbMultiplier * (i.y > 0 ? i.y : -i.y);
        return (
          (t.aabb.lowerBound.x = o.lowerBound.x - n),
          (t.aabb.lowerBound.y = o.lowerBound.y - s),
          (t.aabb.upperBound.x = o.upperBound.x + n),
          (t.aabb.upperBound.y = o.upperBound.y + s),
          this.InsertLeaf(t),
          !0
        );
      }),
      (d.prototype.Rebalance = function (t) {
        if ((void 0 === t && (t = 0), null != this.m_root))
          for (var o = 0; o < t; o++) {
            for (var i = this.m_root, e = 0; 0 == i.IsLeaf(); )
              (i = (this.m_path >> e) & 1 ? i.child2 : i.child1),
                (e = (e + 1) & 31);
            ++this.m_path, this.RemoveLeaf(i), this.InsertLeaf(i);
          }
      }),
      (d.prototype.GetFatAABB = function (t) {
        return t.aabb;
      }),
      (d.prototype.GetUserData = function (t) {
        return t.userData;
      }),
      (d.prototype.Query = function (t, o) {
        if (null != this.m_root) {
          var i = new Vector(),
            e = 0;
          for (i[e++] = this.m_root; e > 0; ) {
            var n = i[--e];
            if (n.aabb.TestOverlap(o))
              if (n.IsLeaf()) {
                var s = t(n);
                if (!s) return;
              } else (i[e++] = n.child1), (i[e++] = n.child2);
          }
        }
      }),
      (d.prototype.RayCast = function (t, o) {
        if (null != this.m_root) {
          var i = o.p1,
            e = o.p2,
            s = n.SubtractVV(i, e);
          s.Normalize();
          var r = n.CrossFV(1, s),
            a = n.AbsV(r),
            m = o.maxFraction,
            c = new l(),
            _ = 0,
            h = 0;
          (_ = i.x + m * (e.x - i.x)),
            (h = i.y + m * (e.y - i.y)),
            (c.lowerBound.x = Math.min(i.x, _)),
            (c.lowerBound.y = Math.min(i.y, h)),
            (c.upperBound.x = Math.max(i.x, _)),
            (c.upperBound.y = Math.max(i.y, h));
          var p = new Vector(),
            y = 0;
          for (p[y++] = this.m_root; y > 0; ) {
            var u = p[--y];
            if (0 != u.aabb.TestOverlap(c)) {
              var x = u.aabb.GetCenter(),
                f = u.aabb.GetExtents(),
                d =
                  Math.abs(r.x * (i.x - x.x) + r.y * (i.y - x.y)) -
                  a.x * f.x -
                  a.y * f.y;
              if (!(d > 0))
                if (u.IsLeaf()) {
                  var b = new S();
                  if (
                    ((b.p1 = o.p1),
                    (b.p2 = o.p2),
                    (b.maxFraction = o.maxFraction),
                    (m = t(b, u)),
                    0 == m)
                  )
                    return;
                  m > 0 &&
                    ((_ = i.x + m * (e.x - i.x)),
                    (h = i.y + m * (e.y - i.y)),
                    (c.lowerBound.x = Math.min(i.x, _)),
                    (c.lowerBound.y = Math.min(i.y, h)),
                    (c.upperBound.x = Math.max(i.x, _)),
                    (c.upperBound.y = Math.max(i.y, h)));
                } else (p[y++] = u.child1), (p[y++] = u.child2);
            }
          }
        }
      }),
      (d.prototype.AllocateNode = function () {
        if (this.m_freeList) {
          var t = this.m_freeList;
          return (
            (this.m_freeList = t.parent),
            (t.parent = null),
            (t.child1 = null),
            (t.child2 = null),
            t
          );
        }
        return new v();
      }),
      (d.prototype.FreeNode = function (t) {
        (t.parent = this.m_freeList), (this.m_freeList = t);
      }),
      (d.prototype.InsertLeaf = function (t) {
        if ((++this.m_insertionCount, null == this.m_root))
          return (this.m_root = t), void (this.m_root.parent = null);
        var o = t.aabb.GetCenter(),
          i = this.m_root;
        if (0 == i.IsLeaf())
          do {
            var e = i.child1,
              n = i.child2,
              s =
                Math.abs(
                  (e.aabb.lowerBound.x + e.aabb.upperBound.x) / 2 - o.x,
                ) +
                Math.abs((e.aabb.lowerBound.y + e.aabb.upperBound.y) / 2 - o.y),
              r =
                Math.abs(
                  (n.aabb.lowerBound.x + n.aabb.upperBound.x) / 2 - o.x,
                ) +
                Math.abs((n.aabb.lowerBound.y + n.aabb.upperBound.y) / 2 - o.y);
            i = s < r ? e : n;
          } while (0 == i.IsLeaf());
        var a = i.parent,
          l = this.AllocateNode();
        if (
          ((l.parent = a),
          (l.userData = null),
          l.aabb.Combine(t.aabb, i.aabb),
          a)
        ) {
          i.parent.child1 == i ? (a.child1 = l) : (a.child2 = l),
            (l.child1 = i),
            (l.child2 = t),
            (i.parent = l),
            (t.parent = l);
          do {
            if (a.aabb.Contains(l.aabb)) break;
            a.aabb.Combine(a.child1.aabb, a.child2.aabb),
              (l = a),
              (a = a.parent);
          } while (a);
        } else
          (l.child1 = i),
            (l.child2 = t),
            (i.parent = l),
            (t.parent = l),
            (this.m_root = l);
      }),
      (d.prototype.RemoveLeaf = function (t) {
        if (t == this.m_root) return void (this.m_root = null);
        var o,
          i = t.parent,
          e = i.parent;
        if (((o = i.child1 == t ? i.child2 : i.child1), e))
          for (
            e.child1 == i ? (e.child1 = o) : (e.child2 = o),
              o.parent = e,
              this.FreeNode(i);
            e;

          ) {
            var n = e.aabb;
            if (
              ((e.aabb = l.Combine(e.child1.aabb, e.child2.aabb)),
              n.Contains(e.aabb))
            )
              break;
            e = e.parent;
          }
        else (this.m_root = o), (o.parent = null), this.FreeNode(i);
      }),
      (b.b2DynamicTreeBroadPhase = function () {
        (this.m_tree = new d()),
          (this.m_moveBuffer = new Vector()),
          (this.m_pairBuffer = new Vector()),
          (this.m_pairCount = 0);
      }),
      (b.prototype.CreateProxy = function (t, o) {
        var i = this.m_tree.CreateProxy(t, o);
        return ++this.m_proxyCount, this.BufferMove(i), i;
      }),
      (b.prototype.DestroyProxy = function (t) {
        this.UnBufferMove(t), --this.m_proxyCount, this.m_tree.DestroyProxy(t);
      }),
      (b.prototype.MoveProxy = function (t, o, i) {
        var e = this.m_tree.MoveProxy(t, o, i);
        e && this.BufferMove(t);
      }),
      (b.prototype.TestOverlap = function (t, o) {
        var i = this.m_tree.GetFatAABB(t),
          e = this.m_tree.GetFatAABB(o);
        return i.TestOverlap(e);
      }),
      (b.prototype.GetUserData = function (t) {
        return this.m_tree.GetUserData(t);
      }),
      (b.prototype.GetFatAABB = function (t) {
        return this.m_tree.GetFatAABB(t);
      }),
      (b.prototype.GetProxyCount = function () {
        return this.m_proxyCount;
      }),
      (b.prototype.UpdatePairs = function (t) {
        function o(t) {
          if (t == e) return !0;
          i.m_pairCount == i.m_pairBuffer.length &&
            (i.m_pairBuffer[i.m_pairCount] = new D());
          var o = i.m_pairBuffer[i.m_pairCount];
          return (
            (o.proxyA = t < e ? t : e),
            (o.proxyB = t >= e ? t : e),
            ++i.m_pairCount,
            !0
          );
        }
        var i = this;
        i.m_pairCount = 0;
        var e,
          n = 0;
        for (n = 0; n < i.m_moveBuffer.length; ++n) {
          e = i.m_moveBuffer[n];
          var s = i.m_tree.GetFatAABB(e);
          i.m_tree.Query(o, s);
        }
        i.m_moveBuffer.length = 0;
        for (var n = 0; n < i.m_pairCount; ) {
          var r = i.m_pairBuffer[n],
            a = i.m_tree.GetUserData(r.proxyA),
            l = i.m_tree.GetUserData(r.proxyB);
          for (t(a, l), ++n; n < i.m_pairCount; ) {
            var m = i.m_pairBuffer[n];
            if (m.proxyA != r.proxyA || m.proxyB != r.proxyB) break;
            ++n;
          }
        }
      }),
      (b.prototype.Query = function (t, o) {
        this.m_tree.Query(t, o);
      }),
      (b.prototype.RayCast = function (t, o) {
        this.m_tree.RayCast(t, o);
      }),
      (b.prototype.Validate = function () {}),
      (b.prototype.Rebalance = function (t) {
        void 0 === t && (t = 0), this.m_tree.Rebalance(t);
      }),
      (b.prototype.BufferMove = function (t) {
        this.m_moveBuffer[this.m_moveBuffer.length] = t;
      }),
      (b.prototype.UnBufferMove = function (t) {
        var o = parseInt(this.m_moveBuffer.indexOf(t));
        this.m_moveBuffer.splice(o, 1);
      }),
      (b.prototype.ComparePairs = function (t, o) {
        return 0;
      }),
      (b.__implements = {}),
      (b.__implements[T] = !0),
      (v.b2DynamicTreeNode = function () {
        this.aabb = new l();
      }),
      (v.prototype.IsLeaf = function () {
        return null == this.child1;
      }),
      (D.b2DynamicTreePair = function () {}),
      (B.b2Manifold = function () {
        this.m_pointCount = 0;
      }),
      (B.prototype.b2Manifold = function () {
        this.m_points = new Vector(e.b2_maxManifoldPoints);
        for (var t = 0; t < e.b2_maxManifoldPoints; t++)
          this.m_points[t] = new C();
        (this.m_localPlaneNormal = new a()), (this.m_localPoint = new a());
      }),
      (B.prototype.Reset = function () {
        for (var t = 0; t < e.b2_maxManifoldPoints; t++)
          (this.m_points[t] instanceof C ? this.m_points[t] : null).Reset();
        this.m_localPlaneNormal.SetZero(),
          this.m_localPoint.SetZero(),
          (this.m_type = 0),
          (this.m_pointCount = 0);
      }),
      (B.prototype.Set = function (t) {
        this.m_pointCount = t.m_pointCount;
        for (var o = 0; o < e.b2_maxManifoldPoints; o++)
          (this.m_points[o] instanceof C ? this.m_points[o] : null).Set(
            t.m_points[o],
          );
        this.m_localPlaneNormal.SetV(t.m_localPlaneNormal),
          this.m_localPoint.SetV(t.m_localPoint),
          (this.m_type = t.m_type);
      }),
      (B.prototype.Copy = function () {
        var t = new B();
        return t.Set(this), t;
      }),
      Box2D.postDefs.push(function () {
        (Box2D.Collision.b2Manifold.e_circles = 1),
          (Box2D.Collision.b2Manifold.e_faceA = 2),
          (Box2D.Collision.b2Manifold.e_faceB = 4);
      }),
      (C.b2ManifoldPoint = function () {
        (this.m_localPoint = new a()), (this.m_id = new h());
      }),
      (C.prototype.b2ManifoldPoint = function () {
        this.Reset();
      }),
      (C.prototype.Reset = function () {
        this.m_localPoint.SetZero(),
          (this.m_normalImpulse = 0),
          (this.m_tangentImpulse = 0),
          (this.m_id.key = 0);
      }),
      (C.prototype.Set = function (t) {
        this.m_localPoint.SetV(t.m_localPoint),
          (this.m_normalImpulse = t.m_normalImpulse),
          (this.m_tangentImpulse = t.m_tangentImpulse),
          this.m_id.Set(t.m_id);
      }),
      (A.b2Point = function () {
        this.p = new a();
      }),
      (A.prototype.Support = function (t, o, i) {
        return void 0 === o && (o = 0), void 0 === i && (i = 0), this.p;
      }),
      (A.prototype.GetFirstVertex = function (t) {
        return this.p;
      }),
      (S.b2RayCastInput = function () {
        (this.p1 = new a()), (this.p2 = new a());
      }),
      (S.prototype.b2RayCastInput = function (t, o, i) {
        void 0 === t && (t = null),
          void 0 === o && (o = null),
          void 0 === i && (i = 1),
          t && this.p1.SetV(t),
          o && this.p2.SetV(o),
          (this.maxFraction = i);
      }),
      (w.b2RayCastOutput = function () {
        this.normal = new a();
      }),
      (g.b2Segment = function () {
        (this.p1 = new a()), (this.p2 = new a());
      }),
      (g.prototype.TestSegment = function (t, o, i, e) {
        void 0 === e && (e = 0);
        var n = i.p1,
          s = i.p2.x - n.x,
          r = i.p2.y - n.y,
          a = this.p2.x - this.p1.x,
          l = this.p2.y - this.p1.y,
          m = l,
          c = -a,
          _ = 100 * Number.MIN_VALUE,
          h = -(s * m + r * c);
        if (h > _) {
          var p = n.x - this.p1.x,
            y = n.y - this.p1.y,
            u = p * m + y * c;
          if (0 <= u && u <= e * h) {
            var x = -s * y + r * p;
            if (-_ * h <= x && x <= h * (1 + _)) {
              u /= h;
              var f = Math.sqrt(m * m + c * c);
              return (m /= f), (c /= f), (t[0] = u), o.Set(m, c), !0;
            }
          }
        }
        return !1;
      }),
      (g.prototype.Extend = function (t) {
        this.ExtendForward(t), this.ExtendBackward(t);
      }),
      (g.prototype.ExtendForward = function (t) {
        var o = this.p2.x - this.p1.x,
          i = this.p2.y - this.p1.y,
          e = Math.min(
            o > 0
              ? (t.upperBound.x - this.p1.x) / o
              : o < 0
                ? (t.lowerBound.x - this.p1.x) / o
                : Number.POSITIVE_INFINITY,
            i > 0
              ? (t.upperBound.y - this.p1.y) / i
              : i < 0
                ? (t.lowerBound.y - this.p1.y) / i
                : Number.POSITIVE_INFINITY,
          );
        (this.p2.x = this.p1.x + o * e), (this.p2.y = this.p1.y + i * e);
      }),
      (g.prototype.ExtendBackward = function (t) {
        var o = -this.p2.x + this.p1.x,
          i = -this.p2.y + this.p1.y,
          e = Math.min(
            o > 0
              ? (t.upperBound.x - this.p2.x) / o
              : o < 0
                ? (t.lowerBound.x - this.p2.x) / o
                : Number.POSITIVE_INFINITY,
            i > 0
              ? (t.upperBound.y - this.p2.y) / i
              : i < 0
                ? (t.lowerBound.y - this.p2.y) / i
                : Number.POSITIVE_INFINITY,
          );
        (this.p1.x = this.p2.x + o * e), (this.p1.y = this.p2.y + i * e);
      }),
      (M.b2SeparationFunction = function () {
        (this.m_localPoint = new a()), (this.m_axis = new a());
      }),
      (M.prototype.Initialize = function (t, o, i, s, r) {
        (this.m_proxyA = o), (this.m_proxyB = s);
        var l = parseInt(t.count);
        e.b2Assert(0 < l && l < 3);
        var m,
          c,
          _,
          h,
          p,
          y,
          u,
          x,
          f = 0,
          d = 0,
          b = 0,
          v = 0,
          D = 0,
          B = 0,
          C = 0,
          A = 0;
        if (1 == l)
          (this.m_type = M.e_points),
            (m = this.m_proxyA.GetVertex(t.indexA[0])),
            (h = this.m_proxyB.GetVertex(t.indexB[0])),
            (x = m),
            (u = i.R),
            (f = i.position.x + (u.col1.x * x.x + u.col2.x * x.y)),
            (d = i.position.y + (u.col1.y * x.x + u.col2.y * x.y)),
            (x = h),
            (u = r.R),
            (b = r.position.x + (u.col1.x * x.x + u.col2.x * x.y)),
            (v = r.position.y + (u.col1.y * x.x + u.col2.y * x.y)),
            (this.m_axis.x = b - f),
            (this.m_axis.y = v - d),
            this.m_axis.Normalize();
        else if (t.indexB[0] == t.indexB[1])
          (this.m_type = M.e_faceA),
            (c = this.m_proxyA.GetVertex(t.indexA[0])),
            (_ = this.m_proxyA.GetVertex(t.indexA[1])),
            (h = this.m_proxyB.GetVertex(t.indexB[0])),
            (this.m_localPoint.x = 0.5 * (c.x + _.x)),
            (this.m_localPoint.y = 0.5 * (c.y + _.y)),
            (this.m_axis = n.CrossVF(n.SubtractVV(_, c), 1)),
            this.m_axis.Normalize(),
            (x = this.m_axis),
            (u = i.R),
            (D = u.col1.x * x.x + u.col2.x * x.y),
            (B = u.col1.y * x.x + u.col2.y * x.y),
            (x = this.m_localPoint),
            (u = i.R),
            (f = i.position.x + (u.col1.x * x.x + u.col2.x * x.y)),
            (d = i.position.y + (u.col1.y * x.x + u.col2.y * x.y)),
            (x = h),
            (u = r.R),
            (b = r.position.x + (u.col1.x * x.x + u.col2.x * x.y)),
            (v = r.position.y + (u.col1.y * x.x + u.col2.y * x.y)),
            (C = (b - f) * D + (v - d) * B),
            C < 0 && this.m_axis.NegativeSelf();
        else if (t.indexA[0] == t.indexA[0])
          (this.m_type = M.e_faceB),
            (p = this.m_proxyB.GetVertex(t.indexB[0])),
            (y = this.m_proxyB.GetVertex(t.indexB[1])),
            (m = this.m_proxyA.GetVertex(t.indexA[0])),
            (this.m_localPoint.x = 0.5 * (p.x + y.x)),
            (this.m_localPoint.y = 0.5 * (p.y + y.y)),
            (this.m_axis = n.CrossVF(n.SubtractVV(y, p), 1)),
            this.m_axis.Normalize(),
            (x = this.m_axis),
            (u = r.R),
            (D = u.col1.x * x.x + u.col2.x * x.y),
            (B = u.col1.y * x.x + u.col2.y * x.y),
            (x = this.m_localPoint),
            (u = r.R),
            (b = r.position.x + (u.col1.x * x.x + u.col2.x * x.y)),
            (v = r.position.y + (u.col1.y * x.x + u.col2.y * x.y)),
            (x = m),
            (u = i.R),
            (f = i.position.x + (u.col1.x * x.x + u.col2.x * x.y)),
            (d = i.position.y + (u.col1.y * x.x + u.col2.y * x.y)),
            (C = (f - b) * D + (d - v) * B),
            C < 0 && this.m_axis.NegativeSelf();
        else {
          (c = this.m_proxyA.GetVertex(t.indexA[0])),
            (_ = this.m_proxyA.GetVertex(t.indexA[1])),
            (p = this.m_proxyB.GetVertex(t.indexB[0])),
            (y = this.m_proxyB.GetVertex(t.indexB[1]));
          var S = (n.MulX(i, m), n.MulMV(i.R, n.SubtractVV(_, c))),
            w = (n.MulX(r, h), n.MulMV(r.R, n.SubtractVV(y, p))),
            g = S.x * S.x + S.y * S.y,
            V = w.x * w.x + w.y * w.y,
            I = n.SubtractVV(w, S),
            G = S.x * I.x + S.y * I.y,
            L = w.x * I.x + w.y * I.y,
            J = S.x * w.x + S.y * w.y,
            F = g * V - J * J;
          (C = 0), 0 != F && (C = n.Clamp((J * L - G * V) / F, 0, 1));
          var P = (J * C + L) / V;
          P < 0 && ((P = 0), (C = n.Clamp((J - G) / g, 0, 1))),
            (m = new a()),
            (m.x = c.x + C * (_.x - c.x)),
            (m.y = c.y + C * (_.y - c.y)),
            (h = new a()),
            (h.x = p.x + C * (y.x - p.x)),
            (h.y = p.y + C * (y.y - p.y)),
            0 == C || 1 == C
              ? ((this.m_type = M.e_faceB),
                (this.m_axis = n.CrossVF(n.SubtractVV(y, p), 1)),
                this.m_axis.Normalize(),
                (this.m_localPoint = h),
                (x = this.m_axis),
                (u = r.R),
                (D = u.col1.x * x.x + u.col2.x * x.y),
                (B = u.col1.y * x.x + u.col2.y * x.y),
                (x = this.m_localPoint),
                (u = r.R),
                (b = r.position.x + (u.col1.x * x.x + u.col2.x * x.y)),
                (v = r.position.y + (u.col1.y * x.x + u.col2.y * x.y)),
                (x = m),
                (u = i.R),
                (f = i.position.x + (u.col1.x * x.x + u.col2.x * x.y)),
                (d = i.position.y + (u.col1.y * x.x + u.col2.y * x.y)),
                (A = (f - b) * D + (d - v) * B),
                C < 0 && this.m_axis.NegativeSelf())
              : ((this.m_type = M.e_faceA),
                (this.m_axis = n.CrossVF(n.SubtractVV(_, c), 1)),
                (this.m_localPoint = m),
                (x = this.m_axis),
                (u = i.R),
                (D = u.col1.x * x.x + u.col2.x * x.y),
                (B = u.col1.y * x.x + u.col2.y * x.y),
                (x = this.m_localPoint),
                (u = i.R),
                (f = i.position.x + (u.col1.x * x.x + u.col2.x * x.y)),
                (d = i.position.y + (u.col1.y * x.x + u.col2.y * x.y)),
                (x = h),
                (u = r.R),
                (b = r.position.x + (u.col1.x * x.x + u.col2.x * x.y)),
                (v = r.position.y + (u.col1.y * x.x + u.col2.y * x.y)),
                (A = (b - f) * D + (v - d) * B),
                C < 0 && this.m_axis.NegativeSelf());
        }
      }),
      (M.prototype.Evaluate = function (t, o) {
        var i,
          s,
          r,
          a,
          l,
          m,
          c,
          _ = 0;
        switch (this.m_type) {
          case M.e_points:
            return (
              (i = n.MulTMV(t.R, this.m_axis)),
              (s = n.MulTMV(o.R, this.m_axis.GetNegative())),
              (r = this.m_proxyA.GetSupportVertex(i)),
              (a = this.m_proxyB.GetSupportVertex(s)),
              (l = n.MulX(t, r)),
              (m = n.MulX(o, a)),
              (_ = (m.x - l.x) * this.m_axis.x + (m.y - l.y) * this.m_axis.y)
            );
          case M.e_faceA:
            return (
              (c = n.MulMV(t.R, this.m_axis)),
              (l = n.MulX(t, this.m_localPoint)),
              (s = n.MulTMV(o.R, c.GetNegative())),
              (a = this.m_proxyB.GetSupportVertex(s)),
              (m = n.MulX(o, a)),
              (_ = (m.x - l.x) * c.x + (m.y - l.y) * c.y)
            );
          case M.e_faceB:
            return (
              (c = n.MulMV(o.R, this.m_axis)),
              (m = n.MulX(o, this.m_localPoint)),
              (i = n.MulTMV(t.R, c.GetNegative())),
              (r = this.m_proxyA.GetSupportVertex(i)),
              (l = n.MulX(t, r)),
              (_ = (l.x - m.x) * c.x + (l.y - m.y) * c.y)
            );
          default:
            return e.b2Assert(!1), 0;
        }
      }),
      Box2D.postDefs.push(function () {
        (Box2D.Collision.b2SeparationFunction.e_points = 1),
          (Box2D.Collision.b2SeparationFunction.e_faceA = 2),
          (Box2D.Collision.b2SeparationFunction.e_faceB = 4);
      }),
      (V.b2Simplex = function () {
        (this.m_v1 = new G()),
          (this.m_v2 = new G()),
          (this.m_v3 = new G()),
          (this.m_vertices = new Vector(3));
      }),
      (V.prototype.b2Simplex = function () {
        (this.m_vertices[0] = this.m_v1),
          (this.m_vertices[1] = this.m_v2),
          (this.m_vertices[2] = this.m_v3);
      }),
      (V.prototype.ReadCache = function (t, o, i, s, r) {
        e.b2Assert(0 <= t.count && t.count <= 3);
        var a, l;
        this.m_count = t.count;
        for (var m = this.m_vertices, c = 0; c < this.m_count; c++) {
          var _ = m[c];
          (_.indexA = t.indexA[c]),
            (_.indexB = t.indexB[c]),
            (a = o.GetVertex(_.indexA)),
            (l = s.GetVertex(_.indexB)),
            (_.wA = n.MulX(i, a)),
            (_.wB = n.MulX(r, l)),
            (_.w = n.SubtractVV(_.wB, _.wA)),
            (_.a = 0);
        }
        if (this.m_count > 1) {
          var h = t.metric,
            p = this.GetMetric();
          (p < 0.5 * h || 2 * h < p || p < Number.MIN_VALUE) &&
            (this.m_count = 0);
        }
        0 == this.m_count &&
          ((_ = m[0]),
          (_.indexA = 0),
          (_.indexB = 0),
          (a = o.GetVertex(0)),
          (l = s.GetVertex(0)),
          (_.wA = n.MulX(i, a)),
          (_.wB = n.MulX(r, l)),
          (_.w = n.SubtractVV(_.wB, _.wA)),
          (this.m_count = 1));
      }),
      (V.prototype.WriteCache = function (t) {
        (t.metric = this.GetMetric()),
          (t.count = Box2D.parseUInt(this.m_count));
        for (var o = this.m_vertices, i = 0; i < this.m_count; i++)
          (t.indexA[i] = Box2D.parseUInt(o[i].indexA)),
            (t.indexB[i] = Box2D.parseUInt(o[i].indexB));
      }),
      (V.prototype.GetSearchDirection = function () {
        switch (this.m_count) {
          case 1:
            return this.m_v1.w.GetNegative();
          case 2:
            var t = n.SubtractVV(this.m_v2.w, this.m_v1.w),
              o = n.CrossVV(t, this.m_v1.w.GetNegative());
            return o > 0 ? n.CrossFV(1, t) : n.CrossVF(t, 1);
          default:
            return e.b2Assert(!1), new a();
        }
      }),
      (V.prototype.GetClosestPoint = function () {
        switch (this.m_count) {
          case 0:
            return e.b2Assert(!1), new a();
          case 1:
            return this.m_v1.w;
          case 2:
            return new a(
              this.m_v1.a * this.m_v1.w.x + this.m_v2.a * this.m_v2.w.x,
              this.m_v1.a * this.m_v1.w.y + this.m_v2.a * this.m_v2.w.y,
            );
          default:
            return e.b2Assert(!1), new a();
        }
      }),
      (V.prototype.GetWitnessPoints = function (t, o) {
        switch (this.m_count) {
          case 0:
            e.b2Assert(!1);
            break;
          case 1:
            t.SetV(this.m_v1.wA), o.SetV(this.m_v1.wB);
            break;
          case 2:
            (t.x = this.m_v1.a * this.m_v1.wA.x + this.m_v2.a * this.m_v2.wA.x),
              (t.y =
                this.m_v1.a * this.m_v1.wA.y + this.m_v2.a * this.m_v2.wA.y),
              (o.x =
                this.m_v1.a * this.m_v1.wB.x + this.m_v2.a * this.m_v2.wB.x),
              (o.y =
                this.m_v1.a * this.m_v1.wB.y + this.m_v2.a * this.m_v2.wB.y);
            break;
          case 3:
            (o.x = t.x =
              this.m_v1.a * this.m_v1.wA.x +
              this.m_v2.a * this.m_v2.wA.x +
              this.m_v3.a * this.m_v3.wA.x),
              (o.y = t.y =
                this.m_v1.a * this.m_v1.wA.y +
                this.m_v2.a * this.m_v2.wA.y +
                this.m_v3.a * this.m_v3.wA.y);
            break;
          default:
            e.b2Assert(!1);
        }
      }),
      (V.prototype.GetMetric = function () {
        switch (this.m_count) {
          case 0:
            return e.b2Assert(!1), 0;
          case 1:
            return 0;
          case 2:
            return n.SubtractVV(this.m_v1.w, this.m_v2.w).Length();
          case 3:
            return n.CrossVV(
              n.SubtractVV(this.m_v2.w, this.m_v1.w),
              n.SubtractVV(this.m_v3.w, this.m_v1.w),
            );
          default:
            return e.b2Assert(!1), 0;
        }
      }),
      (V.prototype.Solve2 = function () {
        var t = this.m_v1.w,
          o = this.m_v2.w,
          i = n.SubtractVV(o, t),
          e = -(t.x * i.x + t.y * i.y);
        if (e <= 0) return (this.m_v1.a = 1), void (this.m_count = 1);
        var s = o.x * i.x + o.y * i.y;
        if (s <= 0)
          return (
            (this.m_v2.a = 1), (this.m_count = 1), void this.m_v1.Set(this.m_v2)
          );
        var r = 1 / (s + e);
        (this.m_v1.a = s * r), (this.m_v2.a = e * r), (this.m_count = 2);
      }),
      (V.prototype.Solve3 = function () {
        var t = this.m_v1.w,
          o = this.m_v2.w,
          i = this.m_v3.w,
          e = n.SubtractVV(o, t),
          s = n.Dot(t, e),
          r = n.Dot(o, e),
          a = r,
          l = -s,
          m = n.SubtractVV(i, t),
          c = n.Dot(t, m),
          _ = n.Dot(i, m),
          h = _,
          p = -c,
          y = n.SubtractVV(i, o),
          u = n.Dot(o, y),
          x = n.Dot(i, y),
          f = x,
          d = -u,
          b = n.CrossVV(e, m),
          v = b * n.CrossVV(o, i),
          D = b * n.CrossVV(i, t),
          B = b * n.CrossVV(t, o);
        if (l <= 0 && p <= 0) return (this.m_v1.a = 1), void (this.m_count = 1);
        if (a > 0 && l > 0 && B <= 0) {
          var C = 1 / (a + l);
          return (
            (this.m_v1.a = a * C),
            (this.m_v2.a = l * C),
            void (this.m_count = 2)
          );
        }
        if (h > 0 && p > 0 && D <= 0) {
          var A = 1 / (h + p);
          return (
            (this.m_v1.a = h * A),
            (this.m_v3.a = p * A),
            (this.m_count = 2),
            void this.m_v2.Set(this.m_v3)
          );
        }
        if (a <= 0 && d <= 0)
          return (
            (this.m_v2.a = 1), (this.m_count = 1), void this.m_v1.Set(this.m_v2)
          );
        if (h <= 0 && f <= 0)
          return (
            (this.m_v3.a = 1), (this.m_count = 1), void this.m_v1.Set(this.m_v3)
          );
        if (f > 0 && d > 0 && v <= 0) {
          var S = 1 / (f + d);
          return (
            (this.m_v2.a = f * S),
            (this.m_v3.a = d * S),
            (this.m_count = 2),
            void this.m_v1.Set(this.m_v3)
          );
        }
        var w = 1 / (v + D + B);
        (this.m_v1.a = v * w),
          (this.m_v2.a = D * w),
          (this.m_v3.a = B * w),
          (this.m_count = 3);
      }),
      (I.b2SimplexCache = function () {
        (this.indexA = new Vector_a2j_Number(3)),
          (this.indexB = new Vector_a2j_Number(3));
      }),
      (G.b2SimplexVertex = function () {}),
      (G.prototype.Set = function (t) {
        this.wA.SetV(t.wA),
          this.wB.SetV(t.wB),
          this.w.SetV(t.w),
          (this.a = t.a),
          (this.indexA = t.indexA),
          (this.indexB = t.indexB);
      }),
      (L.b2TimeOfImpact = function () {}),
      (L.TimeOfImpact = function (t) {
        ++L.b2_toiCalls;
        var o = t.proxyA,
          i = t.proxyB,
          s = t.sweepA,
          r = t.sweepB;
        e.b2Assert(s.t0 == r.t0), e.b2Assert(1 - s.t0 > Number.MIN_VALUE);
        var a = o.m_radius + i.m_radius,
          l = t.tolerance,
          m = 0,
          c = 1e3,
          _ = 0,
          h = 0;
        for (L.s_cache.count = 0, L.s_distanceInput.useRadii = !1; ; ) {
          if (
            (s.GetTransform(L.s_xfA, m),
            r.GetTransform(L.s_xfB, m),
            (L.s_distanceInput.proxyA = o),
            (L.s_distanceInput.proxyB = i),
            (L.s_distanceInput.transformA = L.s_xfA),
            (L.s_distanceInput.transformB = L.s_xfB),
            y.Distance(L.s_distanceOutput, L.s_cache, L.s_distanceInput),
            L.s_distanceOutput.distance <= 0)
          ) {
            m = 1;
            break;
          }
          L.s_fcn.Initialize(L.s_cache, o, L.s_xfA, i, L.s_xfB);
          var p = L.s_fcn.Evaluate(L.s_xfA, L.s_xfB);
          if (p <= 0) {
            m = 1;
            break;
          }
          if (
            (0 == _ &&
              (h = p > a ? n.Max(a - l, 0.75 * a) : n.Max(p - l, 0.02 * a)),
            p - h < 0.5 * l)
          ) {
            if (0 == _) {
              m = 1;
              break;
            }
            break;
          }
          var u = m,
            x = m,
            f = 1,
            d = p;
          s.GetTransform(L.s_xfA, f), r.GetTransform(L.s_xfB, f);
          var b = L.s_fcn.Evaluate(L.s_xfA, L.s_xfB);
          if (b >= h) {
            m = 1;
            break;
          }
          for (var v = 0; ; ) {
            var D = 0;
            (D = 1 & v ? x + ((h - d) * (f - x)) / (b - d) : 0.5 * (x + f)),
              s.GetTransform(L.s_xfA, D),
              r.GetTransform(L.s_xfB, D);
            var B = L.s_fcn.Evaluate(L.s_xfA, L.s_xfB);
            if (n.Abs(B - h) < 0.025 * l) {
              u = D;
              break;
            }
            if (
              (B > h ? ((x = D), (d = B)) : ((f = D), (b = B)),
              ++v,
              ++L.b2_toiRootIters,
              50 == v)
            )
              break;
          }
          if (
            ((L.b2_toiMaxRootIters = n.Max(L.b2_toiMaxRootIters, v)),
            u < (1 + 100 * Number.MIN_VALUE) * m)
          )
            break;
          if (((m = u), _++, ++L.b2_toiIters, _ == c)) break;
        }
        return (L.b2_toiMaxIters = n.Max(L.b2_toiMaxIters, _)), m;
      }),
      Box2D.postDefs.push(function () {
        (Box2D.Collision.b2TimeOfImpact.b2_toiCalls = 0),
          (Box2D.Collision.b2TimeOfImpact.b2_toiIters = 0),
          (Box2D.Collision.b2TimeOfImpact.b2_toiMaxIters = 0),
          (Box2D.Collision.b2TimeOfImpact.b2_toiRootIters = 0),
          (Box2D.Collision.b2TimeOfImpact.b2_toiMaxRootIters = 0),
          (Box2D.Collision.b2TimeOfImpact.s_cache = new I()),
          (Box2D.Collision.b2TimeOfImpact.s_distanceInput = new u()),
          (Box2D.Collision.b2TimeOfImpact.s_xfA = new r()),
          (Box2D.Collision.b2TimeOfImpact.s_xfB = new r()),
          (Box2D.Collision.b2TimeOfImpact.s_fcn = new M()),
          (Box2D.Collision.b2TimeOfImpact.s_distanceOutput = new x());
      }),
      (J.b2TOIInput = function () {
        (this.proxyA = new f()),
          (this.proxyB = new f()),
          (this.sweepA = new s()),
          (this.sweepB = new s());
      }),
      (F.b2WorldManifold = function () {
        this.m_normal = new a();
      }),
      (F.prototype.b2WorldManifold = function () {
        this.m_points = new Vector(e.b2_maxManifoldPoints);
        for (var t = 0; t < e.b2_maxManifoldPoints; t++)
          this.m_points[t] = new a();
      }),
      (F.prototype.Initialize = function (t, o, i, e, n) {
        if (
          (void 0 === i && (i = 0),
          void 0 === n && (n = 0),
          0 != t.m_pointCount)
        ) {
          var s,
            r,
            a = 0,
            l = 0,
            m = 0,
            c = 0,
            _ = 0,
            h = 0,
            p = 0;
          switch (t.m_type) {
            case B.e_circles:
              (r = o.R), (s = t.m_localPoint);
              var y = o.position.x + r.col1.x * s.x + r.col2.x * s.y,
                u = o.position.y + r.col1.y * s.x + r.col2.y * s.y;
              (r = e.R), (s = t.m_points[0].m_localPoint);
              var x = e.position.x + r.col1.x * s.x + r.col2.x * s.y,
                f = e.position.y + r.col1.y * s.x + r.col2.y * s.y,
                d = x - y,
                b = f - u,
                v = d * d + b * b;
              if (v > Number.MIN_VALUE * Number.MIN_VALUE) {
                var D = Math.sqrt(v);
                (this.m_normal.x = d / D), (this.m_normal.y = b / D);
              } else (this.m_normal.x = 1), (this.m_normal.y = 0);
              var C = y + i * this.m_normal.x,
                A = u + i * this.m_normal.y,
                S = x - n * this.m_normal.x,
                w = f - n * this.m_normal.y;
              (this.m_points[0].x = 0.5 * (C + S)),
                (this.m_points[0].y = 0.5 * (A + w));
              break;
            case B.e_faceA:
              for (
                r = o.R,
                  s = t.m_localPlaneNormal,
                  l = r.col1.x * s.x + r.col2.x * s.y,
                  m = r.col1.y * s.x + r.col2.y * s.y,
                  r = o.R,
                  s = t.m_localPoint,
                  c = o.position.x + r.col1.x * s.x + r.col2.x * s.y,
                  _ = o.position.y + r.col1.y * s.x + r.col2.y * s.y,
                  this.m_normal.x = l,
                  this.m_normal.y = m,
                  a = 0;
                a < t.m_pointCount;
                a++
              )
                (r = e.R),
                  (s = t.m_points[a].m_localPoint),
                  (h = e.position.x + r.col1.x * s.x + r.col2.x * s.y),
                  (p = e.position.y + r.col1.y * s.x + r.col2.y * s.y),
                  (this.m_points[a].x =
                    h + 0.5 * (i - (h - c) * l - (p - _) * m - n) * l),
                  (this.m_points[a].y =
                    p + 0.5 * (i - (h - c) * l - (p - _) * m - n) * m);
              break;
            case B.e_faceB:
              for (
                r = e.R,
                  s = t.m_localPlaneNormal,
                  l = r.col1.x * s.x + r.col2.x * s.y,
                  m = r.col1.y * s.x + r.col2.y * s.y,
                  r = e.R,
                  s = t.m_localPoint,
                  c = e.position.x + r.col1.x * s.x + r.col2.x * s.y,
                  _ = e.position.y + r.col1.y * s.x + r.col2.y * s.y,
                  this.m_normal.x = -l,
                  this.m_normal.y = -m,
                  a = 0;
                a < t.m_pointCount;
                a++
              )
                (r = o.R),
                  (s = t.m_points[a].m_localPoint),
                  (h = o.position.x + r.col1.x * s.x + r.col2.x * s.y),
                  (p = o.position.y + r.col1.y * s.x + r.col2.y * s.y),
                  (this.m_points[a].x =
                    h + 0.5 * (n - (h - c) * l - (p - _) * m - i) * l),
                  (this.m_points[a].y =
                    p + 0.5 * (n - (h - c) * l - (p - _) * m - i) * m);
          }
        }
      }),
      (P.ClipVertex = function () {
        (this.v = new a()), (this.id = new h());
      }),
      (P.prototype.Set = function (t) {
        this.v.SetV(t.v), this.id.Set(t.id);
      }),
      (R.Features = function () {}),
      Object.defineProperty(R.prototype, "referenceEdge", {
        enumerable: !1,
        configurable: !0,
        get: function () {
          return this._referenceEdge;
        },
      }),
      Object.defineProperty(R.prototype, "referenceEdge", {
        enumerable: !1,
        configurable: !0,
        set: function (t) {
          void 0 === t && (t = 0),
            (this._referenceEdge = t),
            (this._m_id._key =
              (4294967040 & this._m_id._key) | (255 & this._referenceEdge));
        },
      }),
      Object.defineProperty(R.prototype, "incidentEdge", {
        enumerable: !1,
        configurable: !0,
        get: function () {
          return this._incidentEdge;
        },
      }),
      Object.defineProperty(R.prototype, "incidentEdge", {
        enumerable: !1,
        configurable: !0,
        set: function (t) {
          void 0 === t && (t = 0),
            (this._incidentEdge = t),
            (this._m_id._key =
              (4294902015 & this._m_id._key) |
              ((this._incidentEdge << 8) & 65280));
        },
      }),
      Object.defineProperty(R.prototype, "incidentVertex", {
        enumerable: !1,
        configurable: !0,
        get: function () {
          return this._incidentVertex;
        },
      }),
      Object.defineProperty(R.prototype, "incidentVertex", {
        enumerable: !1,
        configurable: !0,
        set: function (t) {
          void 0 === t && (t = 0),
            (this._incidentVertex = t),
            (this._m_id._key =
              (4278255615 & this._m_id._key) |
              ((this._incidentVertex << 16) & 16711680));
        },
      }),
      Object.defineProperty(R.prototype, "flip", {
        enumerable: !1,
        configurable: !0,
        get: function () {
          return this._flip;
        },
      }),
      Object.defineProperty(R.prototype, "flip", {
        enumerable: !1,
        configurable: !0,
        set: function (t) {
          void 0 === t && (t = 0),
            (this._flip = t),
            (this._m_id._key =
              (16777215 & this._m_id._key) | ((this._flip << 24) & 4278190080));
        },
      });
  })(),
  (function () {
    var t =
        (Box2D.Common.b2Color,
        Box2D.Common.b2internal,
        Box2D.Common.b2Settings),
      o = Box2D.Collision.Shapes.b2CircleShape,
      i = Box2D.Collision.Shapes.b2EdgeChainDef,
      e = Box2D.Collision.Shapes.b2EdgeShape,
      n = Box2D.Collision.Shapes.b2MassData,
      s = Box2D.Collision.Shapes.b2PolygonShape,
      r = Box2D.Collision.Shapes.b2Shape,
      a = Box2D.Common.Math.b2Mat22,
      l = (Box2D.Common.Math.b2Mat33, Box2D.Common.Math.b2Math),
      m = (Box2D.Common.Math.b2Sweep, Box2D.Common.Math.b2Transform),
      c = Box2D.Common.Math.b2Vec2,
      _ =
        (Box2D.Common.Math.b2Vec3,
        Box2D.Dynamics.b2Body,
        Box2D.Dynamics.b2BodyDef,
        Box2D.Dynamics.b2ContactFilter,
        Box2D.Dynamics.b2ContactImpulse,
        Box2D.Dynamics.b2ContactListener,
        Box2D.Dynamics.b2ContactManager,
        Box2D.Dynamics.b2DebugDraw,
        Box2D.Dynamics.b2DestructionListener,
        Box2D.Dynamics.b2FilterData,
        Box2D.Dynamics.b2Fixture,
        Box2D.Dynamics.b2FixtureDef,
        Box2D.Dynamics.b2Island,
        Box2D.Dynamics.b2TimeStep,
        Box2D.Dynamics.b2World,
        Box2D.Collision.b2AABB,
        Box2D.Collision.b2Bound,
        Box2D.Collision.b2BoundValues,
        Box2D.Collision.b2Collision,
        Box2D.Collision.b2ContactID,
        Box2D.Collision.b2ContactPoint,
        Box2D.Collision.b2Distance),
      h = Box2D.Collision.b2DistanceInput,
      p = Box2D.Collision.b2DistanceOutput,
      y = Box2D.Collision.b2DistanceProxy,
      u =
        (Box2D.Collision.b2DynamicTree,
        Box2D.Collision.b2DynamicTreeBroadPhase,
        Box2D.Collision.b2DynamicTreeNode,
        Box2D.Collision.b2DynamicTreePair,
        Box2D.Collision.b2Manifold,
        Box2D.Collision.b2ManifoldPoint,
        Box2D.Collision.b2Point,
        Box2D.Collision.b2RayCastInput,
        Box2D.Collision.b2RayCastOutput,
        Box2D.Collision.b2Segment,
        Box2D.Collision.b2SeparationFunction,
        Box2D.Collision.b2Simplex,
        Box2D.Collision.b2SimplexCache);
    Box2D.Collision.b2SimplexVertex,
      Box2D.Collision.b2TimeOfImpact,
      Box2D.Collision.b2TOIInput,
      Box2D.Collision.b2WorldManifold,
      Box2D.Collision.ClipVertex,
      Box2D.Collision.Features,
      Box2D.Collision.IBroadPhase;
    Box2D.inherit(o, Box2D.Collision.Shapes.b2Shape),
      (o.prototype.__super = Box2D.Collision.Shapes.b2Shape.prototype),
      (o.b2CircleShape = function () {
        Box2D.Collision.Shapes.b2Shape.b2Shape.apply(this, arguments),
          (this.m_p = new c());
      }),
      (o.prototype.Copy = function () {
        var t = new o();
        return t.Set(this), t;
      }),
      (o.prototype.Set = function (t) {
        if ((this.__super.Set.call(this, t), Box2D.is(t, o))) {
          var i = t instanceof o ? t : null;
          this.m_p.SetV(i.m_p);
        }
      }),
      (o.prototype.TestPoint = function (t, o) {
        var i = t.R,
          e = t.position.x + (i.col1.x * this.m_p.x + i.col2.x * this.m_p.y),
          n = t.position.y + (i.col1.y * this.m_p.x + i.col2.y * this.m_p.y);
        return (
          (e = o.x - e),
          (n = o.y - n),
          e * e + n * n <= this.m_radius * this.m_radius
        );
      }),
      (o.prototype.RayCast = function (t, o, i) {
        var e = i.R,
          n = i.position.x + (e.col1.x * this.m_p.x + e.col2.x * this.m_p.y),
          s = i.position.y + (e.col1.y * this.m_p.x + e.col2.y * this.m_p.y),
          r = o.p1.x - n,
          a = o.p1.y - s,
          l = r * r + a * a - this.m_radius * this.m_radius,
          m = o.p2.x - o.p1.x,
          c = o.p2.y - o.p1.y,
          _ = r * m + a * c,
          h = m * m + c * c,
          p = _ * _ - h * l;
        if (p < 0 || h < Number.MIN_VALUE) return !1;
        var y = -(_ + Math.sqrt(p));
        return (
          0 <= y &&
          y <= o.maxFraction * h &&
          ((y /= h),
          (t.fraction = y),
          (t.normal.x = r + y * m),
          (t.normal.y = a + y * c),
          t.normal.Normalize(),
          !0)
        );
      }),
      (o.prototype.ComputeAABB = function (t, o) {
        var i = o.R,
          e = o.position.x + (i.col1.x * this.m_p.x + i.col2.x * this.m_p.y),
          n = o.position.y + (i.col1.y * this.m_p.x + i.col2.y * this.m_p.y);
        t.lowerBound.Set(e - this.m_radius, n - this.m_radius),
          t.upperBound.Set(e + this.m_radius, n + this.m_radius);
      }),
      (o.prototype.ComputeMass = function (o, i) {
        void 0 === i && (i = 0),
          (o.mass = i * t.b2_pi * this.m_radius * this.m_radius),
          o.center.SetV(this.m_p),
          (o.I =
            o.mass *
            (0.5 * this.m_radius * this.m_radius +
              (this.m_p.x * this.m_p.x + this.m_p.y * this.m_p.y)));
      }),
      (o.prototype.ComputeSubmergedArea = function (t, o, i, e) {
        void 0 === o && (o = 0);
        var n = l.MulX(i, this.m_p),
          s = -(l.Dot(t, n) - o);
        if (s < -this.m_radius + Number.MIN_VALUE) return 0;
        if (s > this.m_radius)
          return e.SetV(n), Math.PI * this.m_radius * this.m_radius;
        var r = this.m_radius * this.m_radius,
          a = s * s,
          m =
            r * (Math.asin(s / this.m_radius) + Math.PI / 2) +
            s * Math.sqrt(r - a),
          c = ((-2 / 3) * Math.pow(r - a, 1.5)) / m;
        return (e.x = n.x + t.x * c), (e.y = n.y + t.y * c), m;
      }),
      (o.prototype.GetLocalPosition = function () {
        return this.m_p;
      }),
      (o.prototype.SetLocalPosition = function (t) {
        this.m_p.SetV(t);
      }),
      (o.prototype.GetRadius = function () {
        return this.m_radius;
      }),
      (o.prototype.SetRadius = function (t) {
        void 0 === t && (t = 0), (this.m_radius = t);
      }),
      (o.prototype.b2CircleShape = function (t) {
        void 0 === t && (t = 0),
          this.__super.b2Shape.call(this),
          (this.m_type = r.e_circleShape),
          (this.m_radius = t);
      }),
      (i.b2EdgeChainDef = function () {}),
      (i.prototype.b2EdgeChainDef = function () {
        (this.vertexCount = 0), (this.isALoop = !0), (this.vertices = []);
      }),
      Box2D.inherit(e, Box2D.Collision.Shapes.b2Shape),
      (e.prototype.__super = Box2D.Collision.Shapes.b2Shape.prototype),
      (e.b2EdgeShape = function () {
        Box2D.Collision.Shapes.b2Shape.b2Shape.apply(this, arguments),
          (this.s_supportVec = new c()),
          (this.m_v1 = new c()),
          (this.m_v2 = new c()),
          (this.m_coreV1 = new c()),
          (this.m_coreV2 = new c()),
          (this.m_normal = new c()),
          (this.m_direction = new c()),
          (this.m_cornerDir1 = new c()),
          (this.m_cornerDir2 = new c());
      }),
      (e.prototype.TestPoint = function (t, o) {
        return !1;
      }),
      (e.prototype.RayCast = function (t, o, i) {
        var e,
          n = o.p2.x - o.p1.x,
          s = o.p2.y - o.p1.y;
        e = i.R;
        var r =
            i.position.x + (e.col1.x * this.m_v1.x + e.col2.x * this.m_v1.y),
          a = i.position.y + (e.col1.y * this.m_v1.x + e.col2.y * this.m_v1.y),
          l =
            i.position.y +
            (e.col1.y * this.m_v2.x + e.col2.y * this.m_v2.y) -
            a,
          m = -(
            i.position.x +
            (e.col1.x * this.m_v2.x + e.col2.x * this.m_v2.y) -
            r
          ),
          c = 100 * Number.MIN_VALUE,
          _ = -(n * l + s * m);
        if (_ > c) {
          var h = o.p1.x - r,
            p = o.p1.y - a,
            y = h * l + p * m;
          if (0 <= y && y <= o.maxFraction * _) {
            var u = -n * p + s * h;
            if (-c * _ <= u && u <= _ * (1 + c)) {
              (y /= _), (t.fraction = y);
              var x = Math.sqrt(l * l + m * m);
              return (t.normal.x = l / x), (t.normal.y = m / x), !0;
            }
          }
        }
        return !1;
      }),
      (e.prototype.ComputeAABB = function (t, o) {
        var i = o.R,
          e = o.position.x + (i.col1.x * this.m_v1.x + i.col2.x * this.m_v1.y),
          n = o.position.y + (i.col1.y * this.m_v1.x + i.col2.y * this.m_v1.y),
          s = o.position.x + (i.col1.x * this.m_v2.x + i.col2.x * this.m_v2.y),
          r = o.position.y + (i.col1.y * this.m_v2.x + i.col2.y * this.m_v2.y);
        e < s
          ? ((t.lowerBound.x = e), (t.upperBound.x = s))
          : ((t.lowerBound.x = s), (t.upperBound.x = e)),
          n < r
            ? ((t.lowerBound.y = n), (t.upperBound.y = r))
            : ((t.lowerBound.y = r), (t.upperBound.y = n));
      }),
      (e.prototype.ComputeMass = function (t, o) {
        void 0 === o && (o = 0),
          (t.mass = 0),
          t.center.SetV(this.m_v1),
          (t.I = 0);
      }),
      (e.prototype.ComputeSubmergedArea = function (t, o, i, e) {
        void 0 === o && (o = 0);
        var n = new c(t.x * o, t.y * o),
          s = l.MulX(i, this.m_v1),
          r = l.MulX(i, this.m_v2),
          a = l.Dot(t, s) - o,
          m = l.Dot(t, r) - o;
        if (a > 0) {
          if (m > 0) return 0;
          (s.x = (-m / (a - m)) * s.x + (a / (a - m)) * r.x),
            (s.y = (-m / (a - m)) * s.y + (a / (a - m)) * r.y);
        } else
          m > 0 &&
            ((r.x = (-m / (a - m)) * s.x + (a / (a - m)) * r.x),
            (r.y = (-m / (a - m)) * s.y + (a / (a - m)) * r.y));
        return (
          (e.x = (n.x + s.x + r.x) / 3),
          (e.y = (n.y + s.y + r.y) / 3),
          0.5 * ((s.x - n.x) * (r.y - n.y) - (s.y - n.y) * (r.x - n.x))
        );
      }),
      (e.prototype.GetLength = function () {
        return this.m_length;
      }),
      (e.prototype.GetVertex1 = function () {
        return this.m_v1;
      }),
      (e.prototype.GetVertex2 = function () {
        return this.m_v2;
      }),
      (e.prototype.GetCoreVertex1 = function () {
        return this.m_coreV1;
      }),
      (e.prototype.GetCoreVertex2 = function () {
        return this.m_coreV2;
      }),
      (e.prototype.GetNormalVector = function () {
        return this.m_normal;
      }),
      (e.prototype.GetDirectionVector = function () {
        return this.m_direction;
      }),
      (e.prototype.GetCorner1Vector = function () {
        return this.m_cornerDir1;
      }),
      (e.prototype.GetCorner2Vector = function () {
        return this.m_cornerDir2;
      }),
      (e.prototype.Corner1IsConvex = function () {
        return this.m_cornerConvex1;
      }),
      (e.prototype.Corner2IsConvex = function () {
        return this.m_cornerConvex2;
      }),
      (e.prototype.GetFirstVertex = function (t) {
        var o = t.R;
        return new c(
          t.position.x +
            (o.col1.x * this.m_coreV1.x + o.col2.x * this.m_coreV1.y),
          t.position.y +
            (o.col1.y * this.m_coreV1.x + o.col2.y * this.m_coreV1.y),
        );
      }),
      (e.prototype.GetNextEdge = function () {
        return this.m_nextEdge;
      }),
      (e.prototype.GetPrevEdge = function () {
        return this.m_prevEdge;
      }),
      (e.prototype.Support = function (t, o, i) {
        void 0 === o && (o = 0), void 0 === i && (i = 0);
        var e = t.R,
          n =
            t.position.x +
            (e.col1.x * this.m_coreV1.x + e.col2.x * this.m_coreV1.y),
          s =
            t.position.y +
            (e.col1.y * this.m_coreV1.x + e.col2.y * this.m_coreV1.y),
          r =
            t.position.x +
            (e.col1.x * this.m_coreV2.x + e.col2.x * this.m_coreV2.y),
          a =
            t.position.y +
            (e.col1.y * this.m_coreV2.x + e.col2.y * this.m_coreV2.y);
        return (
          n * o + s * i > r * o + a * i
            ? ((this.s_supportVec.x = n), (this.s_supportVec.y = s))
            : ((this.s_supportVec.x = r), (this.s_supportVec.y = a)),
          this.s_supportVec
        );
      }),
      (e.prototype.b2EdgeShape = function (o, i) {
        this.__super.b2Shape.call(this),
          (this.m_type = r.e_edgeShape),
          (this.m_prevEdge = null),
          (this.m_nextEdge = null),
          (this.m_v1 = o),
          (this.m_v2 = i),
          this.m_direction.Set(
            this.m_v2.x - this.m_v1.x,
            this.m_v2.y - this.m_v1.y,
          ),
          (this.m_length = this.m_direction.Normalize()),
          this.m_normal.Set(this.m_direction.y, -this.m_direction.x),
          this.m_coreV1.Set(
            -t.b2_toiSlop * (this.m_normal.x - this.m_direction.x) +
              this.m_v1.x,
            -t.b2_toiSlop * (this.m_normal.y - this.m_direction.y) +
              this.m_v1.y,
          ),
          this.m_coreV2.Set(
            -t.b2_toiSlop * (this.m_normal.x + this.m_direction.x) +
              this.m_v2.x,
            -t.b2_toiSlop * (this.m_normal.y + this.m_direction.y) +
              this.m_v2.y,
          ),
          (this.m_cornerDir1 = this.m_normal),
          this.m_cornerDir2.Set(-this.m_normal.x, -this.m_normal.y);
      }),
      (e.prototype.SetPrevEdge = function (t, o, i, e) {
        (this.m_prevEdge = t),
          (this.m_coreV1 = o),
          (this.m_cornerDir1 = i),
          (this.m_cornerConvex1 = e);
      }),
      (e.prototype.SetNextEdge = function (t, o, i, e) {
        (this.m_nextEdge = t),
          (this.m_coreV2 = o),
          (this.m_cornerDir2 = i),
          (this.m_cornerConvex2 = e);
      }),
      (n.b2MassData = function () {
        (this.mass = 0), (this.center = new c(0, 0)), (this.I = 0);
      }),
      Box2D.inherit(s, Box2D.Collision.Shapes.b2Shape),
      (s.prototype.__super = Box2D.Collision.Shapes.b2Shape.prototype),
      (s.b2PolygonShape = function () {
        Box2D.Collision.Shapes.b2Shape.b2Shape.apply(this, arguments);
      }),
      (s.prototype.Copy = function () {
        var t = new s();
        return t.Set(this), t;
      }),
      (s.prototype.Set = function (t) {
        if ((this.__super.Set.call(this, t), Box2D.is(t, s))) {
          var o = t instanceof s ? t : null;
          this.m_centroid.SetV(o.m_centroid),
            (this.m_vertexCount = o.m_vertexCount),
            this.Reserve(this.m_vertexCount);
          for (var i = 0; i < this.m_vertexCount; i++)
            this.m_vertices[i].SetV(o.m_vertices[i]),
              this.m_normals[i].SetV(o.m_normals[i]);
        }
      }),
      (s.prototype.SetAsArray = function (t, o) {
        void 0 === o && (o = 0);
        var i,
          e = new Vector(),
          n = 0;
        for (n = 0; n < t.length; ++n) (i = t[n]), e.push(i);
        this.SetAsVector(e, o);
      }),
      (s.AsArray = function (t, o) {
        void 0 === o && (o = 0);
        var i = new s();
        return i.SetAsArray(t, o), i;
      }),
      (s.prototype.SetAsVector = function (o, i) {
        void 0 === i && (i = 0),
          0 == i && (i = o.length),
          t.b2Assert(2 <= i),
          (this.m_vertexCount = i),
          this.Reserve(i);
        var e = 0;
        for (e = 0; e < this.m_vertexCount; e++) this.m_vertices[e].SetV(o[e]);
        for (e = 0; e < this.m_vertexCount; ++e) {
          var n = parseInt(e),
            r = parseInt(e + 1 < this.m_vertexCount ? e + 1 : 0),
            a = l.SubtractVV(this.m_vertices[r], this.m_vertices[n]);
          t.b2Assert(a.LengthSquared() > Number.MIN_VALUE),
            this.m_normals[e].SetV(l.CrossVF(a, 1)),
            this.m_normals[e].Normalize();
        }
        this.m_centroid = s.ComputeCentroid(
          this.m_vertices,
          this.m_vertexCount,
        );
      }),
      (s.AsVector = function (t, o) {
        void 0 === o && (o = 0);
        var i = new s();
        return i.SetAsVector(t, o), i;
      }),
      (s.prototype.SetAsBox = function (t, o) {
        void 0 === t && (t = 0),
          void 0 === o && (o = 0),
          (this.m_vertexCount = 4),
          this.Reserve(4),
          this.m_vertices[0].Set(-t, -o),
          this.m_vertices[1].Set(t, -o),
          this.m_vertices[2].Set(t, o),
          this.m_vertices[3].Set(-t, o),
          this.m_normals[0].Set(0, -1),
          this.m_normals[1].Set(1, 0),
          this.m_normals[2].Set(0, 1),
          this.m_normals[3].Set(-1, 0),
          this.m_centroid.SetZero();
      }),
      (s.AsBox = function (t, o) {
        void 0 === t && (t = 0), void 0 === o && (o = 0);
        var i = new s();
        return i.SetAsBox(t, o), i;
      }),
      (s.prototype.SetAsOrientedBox = function (t, o, i, e) {
        void 0 === t && (t = 0),
          void 0 === o && (o = 0),
          void 0 === i && (i = null),
          void 0 === e && (e = 0),
          (this.m_vertexCount = 4),
          this.Reserve(4),
          this.m_vertices[0].Set(-t, -o),
          this.m_vertices[1].Set(t, -o),
          this.m_vertices[2].Set(t, o),
          this.m_vertices[3].Set(-t, o),
          this.m_normals[0].Set(0, -1),
          this.m_normals[1].Set(1, 0),
          this.m_normals[2].Set(0, 1),
          this.m_normals[3].Set(-1, 0),
          (this.m_centroid = i);
        var n = new m();
        (n.position = i), n.R.Set(e);
        for (var s = 0; s < this.m_vertexCount; ++s)
          (this.m_vertices[s] = l.MulX(n, this.m_vertices[s])),
            (this.m_normals[s] = l.MulMV(n.R, this.m_normals[s]));
      }),
      (s.AsOrientedBox = function (t, o, i, e) {
        void 0 === t && (t = 0),
          void 0 === o && (o = 0),
          void 0 === i && (i = null),
          void 0 === e && (e = 0);
        var n = new s();
        return n.SetAsOrientedBox(t, o, i, e), n;
      }),
      (s.prototype.SetAsEdge = function (t, o) {
        (this.m_vertexCount = 2),
          this.Reserve(2),
          this.m_vertices[0].SetV(t),
          this.m_vertices[1].SetV(o),
          (this.m_centroid.x = 0.5 * (t.x + o.x)),
          (this.m_centroid.y = 0.5 * (t.y + o.y)),
          (this.m_normals[0] = l.CrossVF(l.SubtractVV(o, t), 1)),
          this.m_normals[0].Normalize(),
          (this.m_normals[1].x = -this.m_normals[0].x),
          (this.m_normals[1].y = -this.m_normals[0].y);
      }),
      (s.AsEdge = function (t, o) {
        var i = new s();
        return i.SetAsEdge(t, o), i;
      }),
      (s.prototype.TestPoint = function (t, o) {
        for (
          var i,
            e = t.R,
            n = o.x - t.position.x,
            s = o.y - t.position.y,
            r = n * e.col1.x + s * e.col1.y,
            a = n * e.col2.x + s * e.col2.y,
            l = 0;
          l < this.m_vertexCount;
          ++l
        ) {
          (i = this.m_vertices[l]),
            (n = r - i.x),
            (s = a - i.y),
            (i = this.m_normals[l]);
          var m = i.x * n + i.y * s;
          if (m > 0) return !1;
        }
        return !0;
      }),
      (s.prototype.RayCast = function (t, o, i) {
        var e,
          n,
          s = 0,
          r = o.maxFraction,
          a = 0,
          l = 0;
        (a = o.p1.x - i.position.x), (l = o.p1.y - i.position.y), (e = i.R);
        var m = a * e.col1.x + l * e.col1.y,
          c = a * e.col2.x + l * e.col2.y;
        (a = o.p2.x - i.position.x), (l = o.p2.y - i.position.y), (e = i.R);
        for (
          var _ = a * e.col1.x + l * e.col1.y,
            h = a * e.col2.x + l * e.col2.y,
            p = _ - m,
            y = h - c,
            u = parseInt(-1),
            x = 0;
          x < this.m_vertexCount;
          ++x
        ) {
          (n = this.m_vertices[x]),
            (a = n.x - m),
            (l = n.y - c),
            (n = this.m_normals[x]);
          var f = n.x * a + n.y * l,
            d = n.x * p + n.y * y;
          if (0 == d) {
            if (f < 0) return !1;
          } else
            d < 0 && f < s * d
              ? ((s = f / d), (u = x))
              : d > 0 && f < r * d && (r = f / d);
          if (r < s - Number.MIN_VALUE) return !1;
        }
        return (
          u >= 0 &&
          ((t.fraction = s),
          (e = i.R),
          (n = this.m_normals[u]),
          (t.normal.x = e.col1.x * n.x + e.col2.x * n.y),
          (t.normal.y = e.col1.y * n.x + e.col2.y * n.y),
          !0)
        );
      }),
      (s.prototype.ComputeAABB = function (t, o) {
        for (
          var i = o.R,
            e = this.m_vertices[0],
            n = o.position.x + (i.col1.x * e.x + i.col2.x * e.y),
            s = o.position.y + (i.col1.y * e.x + i.col2.y * e.y),
            r = n,
            a = s,
            l = 1;
          l < this.m_vertexCount;
          ++l
        ) {
          e = this.m_vertices[l];
          var m = o.position.x + (i.col1.x * e.x + i.col2.x * e.y),
            c = o.position.y + (i.col1.y * e.x + i.col2.y * e.y);
          (n = n < m ? n : m),
            (s = s < c ? s : c),
            (r = r > m ? r : m),
            (a = a > c ? a : c);
        }
        (t.lowerBound.x = n - this.m_radius),
          (t.lowerBound.y = s - this.m_radius),
          (t.upperBound.x = r + this.m_radius),
          (t.upperBound.y = a + this.m_radius);
      }),
      (s.prototype.ComputeMass = function (t, o) {
        if ((void 0 === o && (o = 0), 2 == this.m_vertexCount))
          return (
            (t.center.x = 0.5 * (this.m_vertices[0].x + this.m_vertices[1].x)),
            (t.center.y = 0.5 * (this.m_vertices[0].y + this.m_vertices[1].y)),
            (t.mass = 0),
            void (t.I = 0)
          );
        for (
          var i = 0, e = 0, n = 0, s = 0, r = 0, a = 0, l = 1 / 3, m = 0;
          m < this.m_vertexCount;
          ++m
        ) {
          var c = this.m_vertices[m],
            _ =
              m + 1 < this.m_vertexCount
                ? this.m_vertices[parseInt(m + 1)]
                : this.m_vertices[0],
            h = c.x - r,
            p = c.y - a,
            y = _.x - r,
            u = _.y - a,
            x = h * u - p * y,
            f = 0.5 * x;
          (n += f),
            (i += f * l * (r + c.x + _.x)),
            (e += f * l * (a + c.y + _.y));
          var d = r,
            b = a,
            v = h,
            D = p,
            B = y,
            C = u,
            A =
              l * (0.25 * (v * v + B * v + B * B) + (d * v + d * B)) +
              0.5 * d * d,
            S =
              l * (0.25 * (D * D + C * D + C * C) + (b * D + b * C)) +
              0.5 * b * b;
          s += x * (A + S);
        }
        (t.mass = o * n),
          (i *= 1 / n),
          (e *= 1 / n),
          t.center.Set(i, e),
          (t.I = o * s);
      }),
      (s.prototype.ComputeSubmergedArea = function (t, o, i, e) {
        void 0 === o && (o = 0);
        var s = l.MulTMV(i.R, t),
          r = o - l.Dot(t, i.position),
          a = new Vector_a2j_Number(),
          m = 0,
          _ = parseInt(-1),
          h = parseInt(-1),
          p = !1,
          y = 0;
        for (y = 0; y < this.m_vertexCount; ++y) {
          a[y] = l.Dot(s, this.m_vertices[y]) - r;
          var u = a[y] < -Number.MIN_VALUE;
          y > 0 && (u ? p || ((_ = y - 1), m++) : p && ((h = y - 1), m++)),
            (p = u);
        }
        switch (m) {
          case 0:
            if (p) {
              var x = new n();
              return (
                this.ComputeMass(x, 1), e.SetV(l.MulX(i, x.center)), x.mass
              );
            }
            return 0;
          case 1:
            _ == -1
              ? (_ = this.m_vertexCount - 1)
              : (h = this.m_vertexCount - 1);
        }
        var f,
          d = parseInt((_ + 1) % this.m_vertexCount),
          b = parseInt((h + 1) % this.m_vertexCount),
          v = (0 - a[_]) / (a[d] - a[_]),
          D = (0 - a[h]) / (a[b] - a[h]),
          B = new c(
            this.m_vertices[_].x * (1 - v) + this.m_vertices[d].x * v,
            this.m_vertices[_].y * (1 - v) + this.m_vertices[d].y * v,
          ),
          C = new c(
            this.m_vertices[h].x * (1 - D) + this.m_vertices[b].x * D,
            this.m_vertices[h].y * (1 - D) + this.m_vertices[b].y * D,
          ),
          A = 0,
          S = new c(),
          w = this.m_vertices[d];
        for (y = d; y != b; ) {
          (y = (y + 1) % this.m_vertexCount),
            (f = y == b ? C : this.m_vertices[y]);
          var g = 0.5 * ((w.x - B.x) * (f.y - B.y) - (w.y - B.y) * (f.x - B.x));
          (A += g),
            (S.x += (g * (B.x + w.x + f.x)) / 3),
            (S.y += (g * (B.y + w.y + f.y)) / 3),
            (w = f);
        }
        return S.Multiply(1 / A), e.SetV(l.MulX(i, S)), A;
      }),
      (s.prototype.GetVertexCount = function () {
        return this.m_vertexCount;
      }),
      (s.prototype.GetVertices = function () {
        return this.m_vertices;
      }),
      (s.prototype.GetNormals = function () {
        return this.m_normals;
      }),
      (s.prototype.GetSupport = function (t) {
        for (
          var o = 0,
            i = this.m_vertices[0].x * t.x + this.m_vertices[0].y * t.y,
            e = 1;
          e < this.m_vertexCount;
          ++e
        ) {
          var n = this.m_vertices[e].x * t.x + this.m_vertices[e].y * t.y;
          n > i && ((o = e), (i = n));
        }
        return o;
      }),
      (s.prototype.GetSupportVertex = function (t) {
        for (
          var o = 0,
            i = this.m_vertices[0].x * t.x + this.m_vertices[0].y * t.y,
            e = 1;
          e < this.m_vertexCount;
          ++e
        ) {
          var n = this.m_vertices[e].x * t.x + this.m_vertices[e].y * t.y;
          n > i && ((o = e), (i = n));
        }
        return this.m_vertices[o];
      }),
      (s.prototype.Validate = function () {
        return !1;
      }),
      (s.prototype.b2PolygonShape = function () {
        this.__super.b2Shape.call(this),
          (this.m_type = r.e_polygonShape),
          (this.m_centroid = new c()),
          (this.m_vertices = new Vector()),
          (this.m_normals = new Vector());
      }),
      (s.prototype.Reserve = function (t) {
        void 0 === t && (t = 0);
        for (var o = parseInt(this.m_vertices.length); o < t; o++)
          (this.m_vertices[o] = new c()), (this.m_normals[o] = new c());
      }),
      (s.ComputeCentroid = function (t, o) {
        void 0 === o && (o = 0);
        for (
          var i = new c(), e = 0, n = 0, s = 0, r = 1 / 3, a = 0;
          a < o;
          ++a
        ) {
          var l = t[a],
            m = a + 1 < o ? t[parseInt(a + 1)] : t[0],
            _ = l.x - n,
            h = l.y - s,
            p = m.x - n,
            y = m.y - s,
            u = _ * y - h * p,
            x = 0.5 * u;
          (e += x),
            (i.x += x * r * (n + l.x + m.x)),
            (i.y += x * r * (s + l.y + m.y));
        }
        return (i.x *= 1 / e), (i.y *= 1 / e), i;
      }),
      (s.ComputeOBB = function (t, o, i) {
        void 0 === i && (i = 0);
        var e = 0,
          n = new Vector(i + 1);
        for (e = 0; e < i; ++e) n[e] = o[e];
        n[i] = n[0];
        var s = Number.MAX_VALUE;
        for (e = 1; e <= i; ++e) {
          var r = n[parseInt(e - 1)],
            a = n[e].x - r.x,
            l = n[e].y - r.y,
            m = Math.sqrt(a * a + l * l);
          (a /= m), (l /= m);
          for (
            var c = -l,
              _ = a,
              h = Number.MAX_VALUE,
              p = Number.MAX_VALUE,
              y = -Number.MAX_VALUE,
              u = -Number.MAX_VALUE,
              x = 0;
            x < i;
            ++x
          ) {
            var f = n[x].x - r.x,
              d = n[x].y - r.y,
              b = a * f + l * d,
              v = c * f + _ * d;
            b < h && (h = b),
              v < p && (p = v),
              b > y && (y = b),
              v > u && (u = v);
          }
          var D = (y - h) * (u - p);
          if (D < 0.95 * s) {
            (s = D),
              (t.R.col1.x = a),
              (t.R.col1.y = l),
              (t.R.col2.x = c),
              (t.R.col2.y = _);
            var B = 0.5 * (h + y),
              C = 0.5 * (p + u),
              A = t.R;
            (t.center.x = r.x + (A.col1.x * B + A.col2.x * C)),
              (t.center.y = r.y + (A.col1.y * B + A.col2.y * C)),
              (t.extents.x = 0.5 * (y - h)),
              (t.extents.y = 0.5 * (u - p));
          }
        }
      }),
      Box2D.postDefs.push(function () {
        Box2D.Collision.Shapes.b2PolygonShape.s_mat = new a();
      }),
      (r.b2Shape = function () {}),
      (r.prototype.Copy = function () {
        return null;
      }),
      (r.prototype.Set = function (t) {
        this.m_radius = t.m_radius;
      }),
      (r.prototype.GetType = function () {
        return this.m_type;
      }),
      (r.prototype.TestPoint = function (t, o) {
        return !1;
      }),
      (r.prototype.RayCast = function (t, o, i) {
        return !1;
      }),
      (r.prototype.ComputeAABB = function (t, o) {}),
      (r.prototype.ComputeMass = function (t, o) {
        void 0 === o && (o = 0);
      }),
      (r.prototype.ComputeSubmergedArea = function (t, o, i, e) {
        return void 0 === o && (o = 0), 0;
      }),
      (r.TestOverlap = function (t, o, i, e) {
        var n = new h();
        (n.proxyA = new y()),
          n.proxyA.Set(t),
          (n.proxyB = new y()),
          n.proxyB.Set(i),
          (n.transformA = o),
          (n.transformB = e),
          (n.useRadii = !0);
        var s = new u();
        s.count = 0;
        var r = new p();
        return _.Distance(r, s, n), r.distance < 10 * Number.MIN_VALUE;
      }),
      (r.prototype.b2Shape = function () {
        (this.m_type = r.e_unknownShape), (this.m_radius = t.b2_linearSlop);
      }),
      Box2D.postDefs.push(function () {
        (Box2D.Collision.Shapes.b2Shape.e_unknownShape = parseInt(-1)),
          (Box2D.Collision.Shapes.b2Shape.e_circleShape = 0),
          (Box2D.Collision.Shapes.b2Shape.e_polygonShape = 1),
          (Box2D.Collision.Shapes.b2Shape.e_edgeShape = 2),
          (Box2D.Collision.Shapes.b2Shape.e_shapeTypeCount = 3),
          (Box2D.Collision.Shapes.b2Shape.e_hitCollide = 1),
          (Box2D.Collision.Shapes.b2Shape.e_missCollide = 0),
          (Box2D.Collision.Shapes.b2Shape.e_startsInsideCollide = parseInt(-1));
      });
  })(),
  (function () {
    var t = Box2D.Common.b2Color,
      o = (Box2D.Common.b2internal, Box2D.Common.b2Settings),
      i =
        (Box2D.Common.Math.b2Mat22,
        Box2D.Common.Math.b2Mat33,
        Box2D.Common.Math.b2Math);
    Box2D.Common.Math.b2Sweep,
      Box2D.Common.Math.b2Transform,
      Box2D.Common.Math.b2Vec2,
      Box2D.Common.Math.b2Vec3;
    (t.b2Color = function () {
      (this._r = 0), (this._g = 0), (this._b = 0);
    }),
      (t.prototype.b2Color = function (t, o, e) {
        void 0 === t && (t = 0),
          void 0 === o && (o = 0),
          void 0 === e && (e = 0),
          (this._r = Box2D.parseUInt(255 * i.Clamp(t, 0, 1))),
          (this._g = Box2D.parseUInt(255 * i.Clamp(o, 0, 1))),
          (this._b = Box2D.parseUInt(255 * i.Clamp(e, 0, 1)));
      }),
      (t.prototype.Set = function (t, o, e) {
        void 0 === t && (t = 0),
          void 0 === o && (o = 0),
          void 0 === e && (e = 0),
          (this._r = Box2D.parseUInt(255 * i.Clamp(t, 0, 1))),
          (this._g = Box2D.parseUInt(255 * i.Clamp(o, 0, 1))),
          (this._b = Box2D.parseUInt(255 * i.Clamp(e, 0, 1)));
      }),
      Object.defineProperty(t.prototype, "r", {
        enumerable: !1,
        configurable: !0,
        set: function (t) {
          void 0 === t && (t = 0),
            (this._r = Box2D.parseUInt(255 * i.Clamp(t, 0, 1)));
        },
      }),
      Object.defineProperty(t.prototype, "g", {
        enumerable: !1,
        configurable: !0,
        set: function (t) {
          void 0 === t && (t = 0),
            (this._g = Box2D.parseUInt(255 * i.Clamp(t, 0, 1)));
        },
      }),
      Object.defineProperty(t.prototype, "b", {
        enumerable: !1,
        configurable: !0,
        set: function (t) {
          void 0 === t && (t = 0),
            (this._b = Box2D.parseUInt(255 * i.Clamp(t, 0, 1)));
        },
      }),
      Object.defineProperty(t.prototype, "color", {
        enumerable: !1,
        configurable: !0,
        get: function () {
          return (this._r << 16) | (this._g << 8) | this._b;
        },
      }),
      (o.b2Settings = function () {}),
      (o.b2MixFriction = function (t, o) {
        return (
          void 0 === t && (t = 0), void 0 === o && (o = 0), Math.sqrt(t * o)
        );
      }),
      (o.b2MixRestitution = function (t, o) {
        return void 0 === t && (t = 0), void 0 === o && (o = 0), t > o ? t : o;
      }),
      (o.b2Assert = function (t) {
        if (!t) throw "Assertion Failed";
      }),
      Box2D.postDefs.push(function () {
        (Box2D.Common.b2Settings.VERSION = "2.1alpha"),
          (Box2D.Common.b2Settings.USHRT_MAX = 65535),
          (Box2D.Common.b2Settings.b2_pi = Math.PI),
          (Box2D.Common.b2Settings.b2_maxManifoldPoints = 2),
          (Box2D.Common.b2Settings.b2_aabbExtension = 0.1),
          (Box2D.Common.b2Settings.b2_aabbMultiplier = 2),
          (Box2D.Common.b2Settings.b2_polygonRadius = 2 * o.b2_linearSlop),
          (Box2D.Common.b2Settings.b2_linearSlop = 0.005),
          (Box2D.Common.b2Settings.b2_angularSlop = (2 / 180) * o.b2_pi),
          (Box2D.Common.b2Settings.b2_toiSlop = 8 * o.b2_linearSlop),
          (Box2D.Common.b2Settings.b2_maxTOIContactsPerIsland = 32),
          (Box2D.Common.b2Settings.b2_maxTOIJointsPerIsland = 32),
          (Box2D.Common.b2Settings.b2_velocityThreshold = 1),
          (Box2D.Common.b2Settings.b2_maxLinearCorrection = 0.2),
          (Box2D.Common.b2Settings.b2_maxAngularCorrection =
            (8 / 180) * o.b2_pi),
          (Box2D.Common.b2Settings.b2_maxTranslation = 2),
          (Box2D.Common.b2Settings.b2_maxTranslationSquared =
            o.b2_maxTranslation * o.b2_maxTranslation),
          (Box2D.Common.b2Settings.b2_maxRotation = 0.5 * o.b2_pi),
          (Box2D.Common.b2Settings.b2_maxRotationSquared =
            o.b2_maxRotation * o.b2_maxRotation),
          (Box2D.Common.b2Settings.b2_contactBaumgarte = 0.2),
          (Box2D.Common.b2Settings.b2_timeToSleep = 0.5),
          (Box2D.Common.b2Settings.b2_linearSleepTolerance = 0.01),
          (Box2D.Common.b2Settings.b2_angularSleepTolerance =
            (2 / 180) * o.b2_pi);
      });
  })(),
  (function () {
    var t =
        (Box2D.Collision.b2AABB,
        Box2D.Common.b2Color,
        Box2D.Common.b2internal,
        Box2D.Common.b2Settings,
        Box2D.Common.Math.b2Mat22),
      o = Box2D.Common.Math.b2Mat33,
      i = Box2D.Common.Math.b2Math,
      e = Box2D.Common.Math.b2Sweep,
      n = Box2D.Common.Math.b2Transform,
      s = Box2D.Common.Math.b2Vec2,
      r = Box2D.Common.Math.b2Vec3;
    (t.b2Mat22 = function () {
      (this.col1 = new s()), (this.col2 = new s());
    }),
      (t.prototype.b2Mat22 = function () {
        this.SetIdentity();
      }),
      (t.FromAngle = function (o) {
        void 0 === o && (o = 0);
        var i = new t();
        return i.Set(o), i;
      }),
      (t.FromVV = function (o, i) {
        var e = new t();
        return e.SetVV(o, i), e;
      }),
      (t.prototype.Set = function (t) {
        void 0 === t && (t = 0);
        var o = Math.cos(t),
          i = Math.sin(t);
        (this.col1.x = o),
          (this.col2.x = -i),
          (this.col1.y = i),
          (this.col2.y = o);
      }),
      (t.prototype.SetVV = function (t, o) {
        this.col1.SetV(t), this.col2.SetV(o);
      }),
      (t.prototype.Copy = function () {
        var o = new t();
        return o.SetM(this), o;
      }),
      (t.prototype.SetM = function (t) {
        this.col1.SetV(t.col1), this.col2.SetV(t.col2);
      }),
      (t.prototype.AddM = function (t) {
        (this.col1.x += t.col1.x),
          (this.col1.y += t.col1.y),
          (this.col2.x += t.col2.x),
          (this.col2.y += t.col2.y);
      }),
      (t.prototype.SetIdentity = function () {
        (this.col1.x = 1),
          (this.col2.x = 0),
          (this.col1.y = 0),
          (this.col2.y = 1);
      }),
      (t.prototype.SetZero = function () {
        (this.col1.x = 0),
          (this.col2.x = 0),
          (this.col1.y = 0),
          (this.col2.y = 0);
      }),
      (t.prototype.GetAngle = function () {
        return Math.atan2(this.col1.y, this.col1.x);
      }),
      (t.prototype.GetInverse = function (t) {
        var o = this.col1.x,
          i = this.col2.x,
          e = this.col1.y,
          n = this.col2.y,
          s = o * n - i * e;
        return (
          0 != s && (s = 1 / s),
          (t.col1.x = s * n),
          (t.col2.x = -s * i),
          (t.col1.y = -s * e),
          (t.col2.y = s * o),
          t
        );
      }),
      (t.prototype.Solve = function (t, o, i) {
        void 0 === o && (o = 0), void 0 === i && (i = 0);
        var e = this.col1.x,
          n = this.col2.x,
          s = this.col1.y,
          r = this.col2.y,
          a = e * r - n * s;
        return (
          0 != a && (a = 1 / a),
          (t.x = a * (r * o - n * i)),
          (t.y = a * (e * i - s * o)),
          t
        );
      }),
      (t.prototype.Abs = function () {
        this.col1.Abs(), this.col2.Abs();
      }),
      (o.b2Mat33 = function () {
        (this.col1 = new r()), (this.col2 = new r()), (this.col3 = new r());
      }),
      (o.prototype.b2Mat33 = function (t, o, i) {
        void 0 === t && (t = null),
          void 0 === o && (o = null),
          void 0 === i && (i = null),
          t || o || i
            ? (this.col1.SetV(t), this.col2.SetV(o), this.col3.SetV(i))
            : (this.col1.SetZero(), this.col2.SetZero(), this.col3.SetZero());
      }),
      (o.prototype.SetVVV = function (t, o, i) {
        this.col1.SetV(t), this.col2.SetV(o), this.col3.SetV(i);
      }),
      (o.prototype.Copy = function () {
        return new o(this.col1, this.col2, this.col3);
      }),
      (o.prototype.SetM = function (t) {
        this.col1.SetV(t.col1), this.col2.SetV(t.col2), this.col3.SetV(t.col3);
      }),
      (o.prototype.AddM = function (t) {
        (this.col1.x += t.col1.x),
          (this.col1.y += t.col1.y),
          (this.col1.z += t.col1.z),
          (this.col2.x += t.col2.x),
          (this.col2.y += t.col2.y),
          (this.col2.z += t.col2.z),
          (this.col3.x += t.col3.x),
          (this.col3.y += t.col3.y),
          (this.col3.z += t.col3.z);
      }),
      (o.prototype.SetIdentity = function () {
        (this.col1.x = 1),
          (this.col2.x = 0),
          (this.col3.x = 0),
          (this.col1.y = 0),
          (this.col2.y = 1),
          (this.col3.y = 0),
          (this.col1.z = 0),
          (this.col2.z = 0),
          (this.col3.z = 1);
      }),
      (o.prototype.SetZero = function () {
        (this.col1.x = 0),
          (this.col2.x = 0),
          (this.col3.x = 0),
          (this.col1.y = 0),
          (this.col2.y = 0),
          (this.col3.y = 0),
          (this.col1.z = 0),
          (this.col2.z = 0),
          (this.col3.z = 0);
      }),
      (o.prototype.Solve22 = function (t, o, i) {
        void 0 === o && (o = 0), void 0 === i && (i = 0);
        var e = this.col1.x,
          n = this.col2.x,
          s = this.col1.y,
          r = this.col2.y,
          a = e * r - n * s;
        return (
          0 != a && (a = 1 / a),
          (t.x = a * (r * o - n * i)),
          (t.y = a * (e * i - s * o)),
          t
        );
      }),
      (o.prototype.Solve33 = function (t, o, i, e) {
        void 0 === o && (o = 0),
          void 0 === i && (i = 0),
          void 0 === e && (e = 0);
        var n = this.col1.x,
          s = this.col1.y,
          r = this.col1.z,
          a = this.col2.x,
          l = this.col2.y,
          m = this.col2.z,
          c = this.col3.x,
          _ = this.col3.y,
          h = this.col3.z,
          p = n * (l * h - m * _) + s * (m * c - a * h) + r * (a * _ - l * c);
        return (
          0 != p && (p = 1 / p),
          (t.x =
            p *
            (o * (l * h - m * _) + i * (m * c - a * h) + e * (a * _ - l * c))),
          (t.y =
            p *
            (n * (i * h - e * _) + s * (e * c - o * h) + r * (o * _ - i * c))),
          (t.z =
            p *
            (n * (l * e - m * i) + s * (m * o - a * e) + r * (a * i - l * o))),
          t
        );
      }),
      (i.b2Math = function () {}),
      (i.IsValid = function (t) {
        return void 0 === t && (t = 0), isFinite(t);
      }),
      (i.Dot = function (t, o) {
        return t.x * o.x + t.y * o.y;
      }),
      (i.CrossVV = function (t, o) {
        return t.x * o.y - t.y * o.x;
      }),
      (i.CrossVF = function (t, o) {
        void 0 === o && (o = 0);
        var i = new s(o * t.y, -o * t.x);
        return i;
      }),
      (i.CrossFV = function (t, o) {
        void 0 === t && (t = 0);
        var i = new s(-t * o.y, t * o.x);
        return i;
      }),
      (i.MulMV = function (t, o) {
        var i = new s(
          t.col1.x * o.x + t.col2.x * o.y,
          t.col1.y * o.x + t.col2.y * o.y,
        );
        return i;
      }),
      (i.MulTMV = function (t, o) {
        var e = new s(i.Dot(o, t.col1), i.Dot(o, t.col2));
        return e;
      }),
      (i.MulX = function (t, o) {
        var e = i.MulMV(t.R, o);
        return (e.x += t.position.x), (e.y += t.position.y), e;
      }),
      (i.MulXT = function (t, o) {
        var e = i.SubtractVV(o, t.position),
          n = e.x * t.R.col1.x + e.y * t.R.col1.y;
        return (e.y = e.x * t.R.col2.x + e.y * t.R.col2.y), (e.x = n), e;
      }),
      (i.AddVV = function (t, o) {
        var i = new s(t.x + o.x, t.y + o.y);
        return i;
      }),
      (i.SubtractVV = function (t, o) {
        var i = new s(t.x - o.x, t.y - o.y);
        return i;
      }),
      (i.Distance = function (t, o) {
        var i = t.x - o.x,
          e = t.y - o.y;
        return Math.sqrt(i * i + e * e);
      }),
      (i.DistanceSquared = function (t, o) {
        var i = t.x - o.x,
          e = t.y - o.y;
        return i * i + e * e;
      }),
      (i.MulFV = function (t, o) {
        void 0 === t && (t = 0);
        var i = new s(t * o.x, t * o.y);
        return i;
      }),
      (i.AddMM = function (o, e) {
        var n = t.FromVV(i.AddVV(o.col1, e.col1), i.AddVV(o.col2, e.col2));
        return n;
      }),
      (i.MulMM = function (o, e) {
        var n = t.FromVV(i.MulMV(o, e.col1), i.MulMV(o, e.col2));
        return n;
      }),
      (i.MulTMM = function (o, e) {
        var n = new s(i.Dot(o.col1, e.col1), i.Dot(o.col2, e.col1)),
          r = new s(i.Dot(o.col1, e.col2), i.Dot(o.col2, e.col2)),
          a = t.FromVV(n, r);
        return a;
      }),
      (i.Abs = function (t) {
        return void 0 === t && (t = 0), t > 0 ? t : -t;
      }),
      (i.AbsV = function (t) {
        var o = new s(i.Abs(t.x), i.Abs(t.y));
        return o;
      }),
      (i.AbsM = function (o) {
        var e = t.FromVV(i.AbsV(o.col1), i.AbsV(o.col2));
        return e;
      }),
      (i.Min = function (t, o) {
        return void 0 === t && (t = 0), void 0 === o && (o = 0), t < o ? t : o;
      }),
      (i.MinV = function (t, o) {
        var e = new s(i.Min(t.x, o.x), i.Min(t.y, o.y));
        return e;
      }),
      (i.Max = function (t, o) {
        return void 0 === t && (t = 0), void 0 === o && (o = 0), t > o ? t : o;
      }),
      (i.MaxV = function (t, o) {
        var e = new s(i.Max(t.x, o.x), i.Max(t.y, o.y));
        return e;
      }),
      (i.Clamp = function (t, o, i) {
        return (
          void 0 === t && (t = 0),
          void 0 === o && (o = 0),
          void 0 === i && (i = 0),
          t < o ? o : t > i ? i : t
        );
      }),
      (i.ClampV = function (t, o, e) {
        return i.MaxV(o, i.MinV(t, e));
      }),
      (i.Swap = function (t, o) {
        var i = t[0];
        (t[0] = o[0]), (o[0] = i);
      }),
      (i.Random = function () {
        return 2 * Math.random() - 1;
      }),
      (i.RandomRange = function (t, o) {
        void 0 === t && (t = 0), void 0 === o && (o = 0);
        var i = Math.random();
        return (i = (o - t) * i + t);
      }),
      (i.NextPowerOfTwo = function (t) {
        return (
          void 0 === t && (t = 0),
          (t |= (t >> 1) & 2147483647),
          (t |= (t >> 2) & 1073741823),
          (t |= (t >> 4) & 268435455),
          (t |= (t >> 8) & 16777215),
          (t |= (t >> 16) & 65535),
          t + 1
        );
      }),
      (i.IsPowerOfTwo = function (t) {
        void 0 === t && (t = 0);
        var o = t > 0 && 0 == (t & (t - 1));
        return o;
      }),
      Box2D.postDefs.push(function () {
        (Box2D.Common.Math.b2Math.b2Vec2_zero = new s(0, 0)),
          (Box2D.Common.Math.b2Math.b2Mat22_identity = t.FromVV(
            new s(1, 0),
            new s(0, 1),
          )),
          (Box2D.Common.Math.b2Math.b2Transform_identity = new n(
            i.b2Vec2_zero,
            i.b2Mat22_identity,
          ));
      }),
      (e.b2Sweep = function () {
        (this.localCenter = new s()), (this.c0 = new s()), (this.c = new s());
      }),
      (e.prototype.Set = function (t) {
        this.localCenter.SetV(t.localCenter),
          this.c0.SetV(t.c0),
          this.c.SetV(t.c),
          (this.a0 = t.a0),
          (this.a = t.a),
          (this.t0 = t.t0);
      }),
      (e.prototype.Copy = function () {
        var t = new e();
        return (
          t.localCenter.SetV(this.localCenter),
          t.c0.SetV(this.c0),
          t.c.SetV(this.c),
          (t.a0 = this.a0),
          (t.a = this.a),
          (t.t0 = this.t0),
          t
        );
      }),
      (e.prototype.GetTransform = function (t, o) {
        void 0 === o && (o = 0),
          (t.position.x = (1 - o) * this.c0.x + o * this.c.x),
          (t.position.y = (1 - o) * this.c0.y + o * this.c.y);
        var i = (1 - o) * this.a0 + o * this.a;
        t.R.Set(i);
        var e = t.R;
        (t.position.x -=
          e.col1.x * this.localCenter.x + e.col2.x * this.localCenter.y),
          (t.position.y -=
            e.col1.y * this.localCenter.x + e.col2.y * this.localCenter.y);
      }),
      (e.prototype.Advance = function (t) {
        if (
          (void 0 === t && (t = 0),
          this.t0 < t && 1 - this.t0 > Number.MIN_VALUE)
        ) {
          var o = (t - this.t0) / (1 - this.t0);
          (this.c0.x = (1 - o) * this.c0.x + o * this.c.x),
            (this.c0.y = (1 - o) * this.c0.y + o * this.c.y),
            (this.a0 = (1 - o) * this.a0 + o * this.a),
            (this.t0 = t);
        }
      }),
      (n.b2Transform = function () {
        (this.position = new s()), (this.R = new t());
      }),
      (n.prototype.b2Transform = function (t, o) {
        void 0 === t && (t = null),
          void 0 === o && (o = null),
          t && (this.position.SetV(t), this.R.SetM(o));
      }),
      (n.prototype.Initialize = function (t, o) {
        this.position.SetV(t), this.R.SetM(o);
      }),
      (n.prototype.SetIdentity = function () {
        this.position.SetZero(), this.R.SetIdentity();
      }),
      (n.prototype.Set = function (t) {
        this.position.SetV(t.position), this.R.SetM(t.R);
      }),
      (n.prototype.GetAngle = function () {
        return Math.atan2(this.R.col1.y, this.R.col1.x);
      }),
      (s.b2Vec2 = function () {}),
      (s.prototype.b2Vec2 = function (t, o) {
        void 0 === t && (t = 0),
          void 0 === o && (o = 0),
          (this.x = t),
          (this.y = o);
      }),
      (s.prototype.SetZero = function () {
        (this.x = 0), (this.y = 0);
      }),
      (s.prototype.Set = function (t, o) {
        void 0 === t && (t = 0),
          void 0 === o && (o = 0),
          (this.x = t),
          (this.y = o);
      }),
      (s.prototype.SetV = function (t) {
        (this.x = t.x), (this.y = t.y);
      }),
      (s.prototype.GetNegative = function () {
        return new s(-this.x, -this.y);
      }),
      (s.prototype.NegativeSelf = function () {
        (this.x = -this.x), (this.y = -this.y);
      }),
      (s.Make = function (t, o) {
        return void 0 === t && (t = 0), void 0 === o && (o = 0), new s(t, o);
      }),
      (s.prototype.Copy = function () {
        return new s(this.x, this.y);
      }),
      (s.prototype.Add = function (t) {
        (this.x += t.x), (this.y += t.y);
      }),
      (s.prototype.Subtract = function (t) {
        (this.x -= t.x), (this.y -= t.y);
      }),
      (s.prototype.Multiply = function (t) {
        void 0 === t && (t = 0), (this.x *= t), (this.y *= t);
      }),
      (s.prototype.MulM = function (t) {
        var o = this.x;
        (this.x = t.col1.x * o + t.col2.x * this.y),
          (this.y = t.col1.y * o + t.col2.y * this.y);
      }),
      (s.prototype.MulTM = function (t) {
        var o = i.Dot(this, t.col1);
        (this.y = i.Dot(this, t.col2)), (this.x = o);
      }),
      (s.prototype.CrossVF = function (t) {
        void 0 === t && (t = 0);
        var o = this.x;
        (this.x = t * this.y), (this.y = -t * o);
      }),
      (s.prototype.CrossFV = function (t) {
        void 0 === t && (t = 0);
        var o = this.x;
        (this.x = -t * this.y), (this.y = t * o);
      }),
      (s.prototype.MinV = function (t) {
        (this.x = this.x < t.x ? this.x : t.x),
          (this.y = this.y < t.y ? this.y : t.y);
      }),
      (s.prototype.MaxV = function (t) {
        (this.x = this.x > t.x ? this.x : t.x),
          (this.y = this.y > t.y ? this.y : t.y);
      }),
      (s.prototype.Abs = function () {
        this.x < 0 && (this.x = -this.x), this.y < 0 && (this.y = -this.y);
      }),
      (s.prototype.Length = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
      }),
      (s.prototype.LengthSquared = function () {
        return this.x * this.x + this.y * this.y;
      }),
      (s.prototype.Normalize = function () {
        var t = Math.sqrt(this.x * this.x + this.y * this.y);
        if (t < Number.MIN_VALUE) return 0;
        var o = 1 / t;
        return (this.x *= o), (this.y *= o), t;
      }),
      (s.prototype.IsValid = function () {
        return i.IsValid(this.x) && i.IsValid(this.y);
      }),
      (r.b2Vec3 = function () {}),
      (r.prototype.b2Vec3 = function (t, o, i) {
        void 0 === t && (t = 0),
          void 0 === o && (o = 0),
          void 0 === i && (i = 0),
          (this.x = t),
          (this.y = o),
          (this.z = i);
      }),
      (r.prototype.SetZero = function () {
        this.x = this.y = this.z = 0;
      }),
      (r.prototype.Set = function (t, o, i) {
        void 0 === t && (t = 0),
          void 0 === o && (o = 0),
          void 0 === i && (i = 0),
          (this.x = t),
          (this.y = o),
          (this.z = i);
      }),
      (r.prototype.SetV = function (t) {
        (this.x = t.x), (this.y = t.y), (this.z = t.z);
      }),
      (r.prototype.GetNegative = function () {
        return new r(-this.x, -this.y, -this.z);
      }),
      (r.prototype.NegativeSelf = function () {
        (this.x = -this.x), (this.y = -this.y), (this.z = -this.z);
      }),
      (r.prototype.Copy = function () {
        return new r(this.x, this.y, this.z);
      }),
      (r.prototype.Add = function (t) {
        (this.x += t.x), (this.y += t.y), (this.z += t.z);
      }),
      (r.prototype.Subtract = function (t) {
        (this.x -= t.x), (this.y -= t.y), (this.z -= t.z);
      }),
      (r.prototype.Multiply = function (t) {
        void 0 === t && (t = 0), (this.x *= t), (this.y *= t), (this.z *= t);
      });
  })(),
  (function () {
    var t =
        (Box2D.Dynamics.Controllers.b2ControllerEdge,
        Box2D.Common.Math.b2Mat22,
        Box2D.Common.Math.b2Mat33,
        Box2D.Common.Math.b2Math),
      o = Box2D.Common.Math.b2Sweep,
      i = Box2D.Common.Math.b2Transform,
      e = Box2D.Common.Math.b2Vec2,
      n = (Box2D.Common.Math.b2Vec3, Box2D.Common.b2Color),
      s = (Box2D.Common.b2internal, Box2D.Common.b2Settings),
      r = Box2D.Collision.b2AABB,
      a =
        (Box2D.Collision.b2Bound,
        Box2D.Collision.b2BoundValues,
        Box2D.Collision.b2Collision,
        Box2D.Collision.b2ContactID,
        Box2D.Collision.b2ContactPoint),
      l =
        (Box2D.Collision.b2Distance,
        Box2D.Collision.b2DistanceInput,
        Box2D.Collision.b2DistanceOutput,
        Box2D.Collision.b2DistanceProxy,
        Box2D.Collision.b2DynamicTree,
        Box2D.Collision.b2DynamicTreeBroadPhase),
      m =
        (Box2D.Collision.b2DynamicTreeNode,
        Box2D.Collision.b2DynamicTreePair,
        Box2D.Collision.b2Manifold,
        Box2D.Collision.b2ManifoldPoint,
        Box2D.Collision.b2Point,
        Box2D.Collision.b2RayCastInput),
      c = Box2D.Collision.b2RayCastOutput,
      _ =
        (Box2D.Collision.b2Segment,
        Box2D.Collision.b2SeparationFunction,
        Box2D.Collision.b2Simplex,
        Box2D.Collision.b2SimplexCache,
        Box2D.Collision.b2SimplexVertex,
        Box2D.Collision.b2TimeOfImpact,
        Box2D.Collision.b2TOIInput,
        Box2D.Collision.b2WorldManifold,
        Box2D.Collision.ClipVertex,
        Box2D.Collision.Features,
        Box2D.Collision.IBroadPhase,
        Box2D.Collision.Shapes.b2CircleShape),
      h =
        (Box2D.Collision.Shapes.b2EdgeChainDef,
        Box2D.Collision.Shapes.b2EdgeShape),
      p = Box2D.Collision.Shapes.b2MassData,
      y = Box2D.Collision.Shapes.b2PolygonShape,
      u = Box2D.Collision.Shapes.b2Shape,
      x = Box2D.Dynamics.b2Body,
      f = Box2D.Dynamics.b2BodyDef,
      d = Box2D.Dynamics.b2ContactFilter,
      b = Box2D.Dynamics.b2ContactImpulse,
      v = Box2D.Dynamics.b2ContactListener,
      D = Box2D.Dynamics.b2ContactManager,
      B = Box2D.Dynamics.b2DebugDraw,
      C = Box2D.Dynamics.b2DestructionListener,
      A = Box2D.Dynamics.b2FilterData,
      S = Box2D.Dynamics.b2Fixture,
      w = Box2D.Dynamics.b2FixtureDef,
      g = Box2D.Dynamics.b2Island,
      M = Box2D.Dynamics.b2TimeStep,
      V = Box2D.Dynamics.b2World,
      I =
        (Box2D.Dynamics.Contacts.b2CircleContact,
        Box2D.Dynamics.Contacts.b2Contact),
      G =
        (Box2D.Dynamics.Contacts.b2ContactConstraint,
        Box2D.Dynamics.Contacts.b2ContactConstraintPoint,
        Box2D.Dynamics.Contacts.b2ContactEdge,
        Box2D.Dynamics.Contacts.b2ContactFactory),
      L =
        (Box2D.Dynamics.Contacts.b2ContactRegister,
        Box2D.Dynamics.Contacts.b2ContactResult,
        Box2D.Dynamics.Contacts.b2ContactSolver),
      J =
        (Box2D.Dynamics.Contacts.b2EdgeAndCircleContact,
        Box2D.Dynamics.Contacts.b2NullContact,
        Box2D.Dynamics.Contacts.b2PolyAndCircleContact,
        Box2D.Dynamics.Contacts.b2PolyAndEdgeContact,
        Box2D.Dynamics.Contacts.b2PolygonContact,
        Box2D.Dynamics.Contacts.b2PositionSolverManifold,
        Box2D.Dynamics.Controllers.b2Controller,
        Box2D.Dynamics.Joints.b2DistanceJoint,
        Box2D.Dynamics.Joints.b2DistanceJointDef,
        Box2D.Dynamics.Joints.b2FrictionJoint,
        Box2D.Dynamics.Joints.b2FrictionJointDef,
        Box2D.Dynamics.Joints.b2GearJoint,
        Box2D.Dynamics.Joints.b2GearJointDef,
        Box2D.Dynamics.Joints.b2Jacobian,
        Box2D.Dynamics.Joints.b2Joint),
      F =
        (Box2D.Dynamics.Joints.b2JointDef,
        Box2D.Dynamics.Joints.b2JointEdge,
        Box2D.Dynamics.Joints.b2LineJoint,
        Box2D.Dynamics.Joints.b2LineJointDef,
        Box2D.Dynamics.Joints.b2MouseJoint,
        Box2D.Dynamics.Joints.b2MouseJointDef,
        Box2D.Dynamics.Joints.b2PrismaticJoint,
        Box2D.Dynamics.Joints.b2PrismaticJointDef,
        Box2D.Dynamics.Joints.b2PulleyJoint);
    Box2D.Dynamics.Joints.b2PulleyJointDef,
      Box2D.Dynamics.Joints.b2RevoluteJoint,
      Box2D.Dynamics.Joints.b2RevoluteJointDef,
      Box2D.Dynamics.Joints.b2WeldJoint,
      Box2D.Dynamics.Joints.b2WeldJointDef;
    (x.b2Body = function () {
      (this.m_xf = new i()),
        (this.m_sweep = new o()),
        (this.m_linearVelocity = new e()),
        (this.m_force = new e()),
        (this.m_useOwnGravity = !1),
        (this.m_gravity = new e());
    }),
      (x.prototype.SetUseOwnGravity = function (t) {
        this.m_useOwnGravity = t;
      }),
      (x.prototype.GetGravity = function () {
        return this.m_gravity;
      }),
      (x.prototype.SetGravity = function (t, o) {
        (this.m_gravity.x = t), (this.m_gravity.y = o);
      }),
      (x.prototype.connectEdges = function (o, i, e) {
        void 0 === e && (e = 0);
        var n = Math.atan2(i.GetDirectionVector().y, i.GetDirectionVector().x),
          r = Math.tan(0.5 * (n - e)),
          a = t.MulFV(r, i.GetDirectionVector());
        (a = t.SubtractVV(a, i.GetNormalVector())),
          (a = t.MulFV(s.b2_toiSlop, a)),
          (a = t.AddVV(a, i.GetVertex1()));
        var l = t.AddVV(o.GetDirectionVector(), i.GetDirectionVector());
        l.Normalize();
        var m = t.Dot(o.GetDirectionVector(), i.GetNormalVector()) > 0;
        return o.SetNextEdge(i, a, l, m), i.SetPrevEdge(o, a, l, m), n;
      }),
      (x.prototype.CreateFixture = function (t) {
        if (1 == this.m_world.IsLocked()) return null;
        var o = new S();
        if ((o.Create(this, this.m_xf, t), this.m_flags & x.e_activeFlag)) {
          var i = this.m_world.m_contactManager.m_broadPhase;
          o.CreateProxy(i, this.m_xf);
        }
        return (
          (o.m_next = this.m_fixtureList),
          (this.m_fixtureList = o),
          ++this.m_fixtureCount,
          (o.m_body = this),
          o.m_density > 0 && this.ResetMassData(),
          (this.m_world.m_flags |= V.e_newFixture),
          o
        );
      }),
      (x.prototype.CreateFixture2 = function (t, o) {
        void 0 === o && (o = 0);
        var i = new w();
        return (i.shape = t), (i.density = o), this.CreateFixture(i);
      }),
      (x.prototype.DestroyFixture = function (t) {
        if (1 != this.m_world.IsLocked()) {
          for (var o = this.m_fixtureList, i = null, e = !1; null != o; ) {
            if (o == t) {
              i ? (i.m_next = t.m_next) : (this.m_fixtureList = t.m_next),
                (e = !0);
              break;
            }
            (i = o), (o = o.m_next);
          }
          for (var n = this.m_contactList; n; ) {
            var s = n.contact;
            n = n.next;
            var r = s.GetFixtureA(),
              a = s.GetFixtureB();
            (t != r && t != a) || this.m_world.m_contactManager.Destroy(s);
          }
          if (this.m_flags & x.e_activeFlag) {
            var l = this.m_world.m_contactManager.m_broadPhase;
            t.DestroyProxy(l);
          }
          t.Destroy(),
            (t.m_body = null),
            (t.m_next = null),
            --this.m_fixtureCount,
            this.ResetMassData();
        }
      }),
      (x.prototype.SetPositionAndAngle = function (t, o) {
        void 0 === o && (o = 0);
        var i;
        if (1 != this.m_world.IsLocked()) {
          this.m_xf.R.Set(o), this.m_xf.position.SetV(t);
          var e = this.m_xf.R,
            n = this.m_sweep.localCenter;
          (this.m_sweep.c.x = e.col1.x * n.x + e.col2.x * n.y),
            (this.m_sweep.c.y = e.col1.y * n.x + e.col2.y * n.y),
            (this.m_sweep.c.x += this.m_xf.position.x),
            (this.m_sweep.c.y += this.m_xf.position.y),
            this.m_sweep.c0.SetV(this.m_sweep.c),
            (this.m_sweep.a0 = this.m_sweep.a = o);
          var s = this.m_world.m_contactManager.m_broadPhase;
          for (i = this.m_fixtureList; i; i = i.m_next)
            i.Synchronize(s, this.m_xf, this.m_xf);
          this.m_world.m_contactManager.FindNewContacts();
        }
      }),
      (x.prototype.SetTransform = function (t) {
        this.SetPositionAndAngle(t.position, t.GetAngle());
      }),
      (x.prototype.GetTransform = function () {
        return this.m_xf;
      }),
      (x.prototype.GetPosition = function () {
        return this.m_xf.position;
      }),
      (x.prototype.SetPosition = function (t) {
        this.SetPositionAndAngle(t, this.GetAngle());
      }),
      (x.prototype.GetAngle = function () {
        return this.m_sweep.a;
      }),
      (x.prototype.SetAngle = function (t) {
        void 0 === t && (t = 0),
          this.SetPositionAndAngle(this.GetPosition(), t);
      }),
      (x.prototype.GetWorldCenter = function () {
        return this.m_sweep.c;
      }),
      (x.prototype.GetLocalCenter = function () {
        return this.m_sweep.localCenter;
      }),
      (x.prototype.SetLinearVelocity = function (t) {
        this.m_type != x.b2_staticBody && this.m_linearVelocity.SetV(t);
      }),
      (x.prototype.GetLinearVelocity = function () {
        return this.m_linearVelocity;
      }),
      (x.prototype.SetAngularVelocity = function (t) {
        void 0 === t && (t = 0),
          this.m_type != x.b2_staticBody && (this.m_angularVelocity = t);
      }),
      (x.prototype.GetAngularVelocity = function () {
        return this.m_angularVelocity;
      }),
      (x.prototype.GetDefinition = function () {
        var t = new f();
        return (
          (t.type = this.GetType()),
          (t.allowSleep =
            (this.m_flags & x.e_allowSleepFlag) == x.e_allowSleepFlag),
          (t.angle = this.GetAngle()),
          (t.angularDamping = this.m_angularDamping),
          (t.angularVelocity = this.m_angularVelocity),
          (t.fixedRotation =
            (this.m_flags & x.e_fixedRotationFlag) == x.e_fixedRotationFlag),
          (t.bullet = (this.m_flags & x.e_bulletFlag) == x.e_bulletFlag),
          (t.awake = (this.m_flags & x.e_awakeFlag) == x.e_awakeFlag),
          (t.linearDamping = this.m_linearDamping),
          t.linearVelocity.SetV(this.GetLinearVelocity()),
          (t.position = this.GetPosition()),
          (t.userData = this.GetUserData()),
          t
        );
      }),
      (x.prototype.ApplyForce = function (t, o) {
        this.m_type == x.b2_dynamicBody &&
          (0 == this.IsAwake() && this.SetAwake(!0),
          (this.m_force.x += t.x),
          (this.m_force.y += t.y),
          (this.m_torque +=
            (o.x - this.m_sweep.c.x) * t.y - (o.y - this.m_sweep.c.y) * t.x));
      }),
      (x.prototype.ApplyTorque = function (t) {
        void 0 === t && (t = 0),
          this.m_type == x.b2_dynamicBody &&
            (0 == this.IsAwake() && this.SetAwake(!0), (this.m_torque += t));
      }),
      (x.prototype.ApplyImpulse = function (t, o) {
        this.m_type == x.b2_dynamicBody &&
          (0 == this.IsAwake() && this.SetAwake(!0),
          (this.m_linearVelocity.x += this.m_invMass * t.x),
          (this.m_linearVelocity.y += this.m_invMass * t.y),
          (this.m_angularVelocity +=
            this.m_invI *
            ((o.x - this.m_sweep.c.x) * t.y - (o.y - this.m_sweep.c.y) * t.x)));
      }),
      (x.prototype.Split = function (o) {
        for (
          var i,
            e = this.GetLinearVelocity().Copy(),
            n = this.GetAngularVelocity(),
            s = this.GetWorldCenter(),
            r = this,
            a = this.m_world.CreateBody(this.GetDefinition()),
            l = r.m_fixtureList;
          l;

        )
          if (o(l)) {
            var m = l.m_next;
            i ? (i.m_next = m) : (r.m_fixtureList = m),
              r.m_fixtureCount--,
              (l.m_next = a.m_fixtureList),
              (a.m_fixtureList = l),
              a.m_fixtureCount++,
              (l.m_body = a),
              (l = m);
          } else (i = l), (l = l.m_next);
        r.ResetMassData(), a.ResetMassData();
        var c = r.GetWorldCenter(),
          _ = a.GetWorldCenter(),
          h = t.AddVV(e, t.CrossFV(n, t.SubtractVV(c, s))),
          p = t.AddVV(e, t.CrossFV(n, t.SubtractVV(_, s)));
        return (
          r.SetLinearVelocity(h),
          a.SetLinearVelocity(p),
          r.SetAngularVelocity(n),
          a.SetAngularVelocity(n),
          r.SynchronizeFixtures(),
          a.SynchronizeFixtures(),
          a
        );
      }),
      (x.prototype.Merge = function (t) {
        var o;
        for (o = t.m_fixtureList; o; ) {
          var i = o.m_next;
          t.m_fixtureCount--,
            (o.m_next = this.m_fixtureList),
            (this.m_fixtureList = o),
            this.m_fixtureCount++,
            (o.m_body = n),
            (o = i);
        }
        e.m_fixtureCount = 0;
        var e = this,
          n = t;
        e.GetWorldCenter(),
          n.GetWorldCenter(),
          e.GetLinearVelocity().Copy(),
          n.GetLinearVelocity().Copy(),
          e.GetAngularVelocity(),
          n.GetAngularVelocity();
        e.ResetMassData(), this.SynchronizeFixtures();
      }),
      (x.prototype.GetMass = function () {
        return this.m_mass;
      }),
      (x.prototype.GetInertia = function () {
        return this.m_I;
      }),
      (x.prototype.GetMassData = function (t) {
        (t.mass = this.m_mass),
          (t.I = this.m_I),
          t.center.SetV(this.m_sweep.localCenter);
      }),
      (x.prototype.SetMassData = function (o) {
        if (
          (s.b2Assert(0 == this.m_world.IsLocked()),
          1 != this.m_world.IsLocked() && this.m_type == x.b2_dynamicBody)
        ) {
          (this.m_invMass = 0),
            (this.m_I = 0),
            (this.m_invI = 0),
            (this.m_mass = o.mass),
            this.m_mass <= 0 && (this.m_mass = 1),
            (this.m_invMass = 1 / this.m_mass),
            o.I > 0 &&
              0 == (this.m_flags & x.e_fixedRotationFlag) &&
              ((this.m_I =
                o.I -
                this.m_mass *
                  (o.center.x * o.center.x + o.center.y * o.center.y)),
              (this.m_invI = 1 / this.m_I));
          var i = this.m_sweep.c.Copy();
          this.m_sweep.localCenter.SetV(o.center),
            this.m_sweep.c0.SetV(t.MulX(this.m_xf, this.m_sweep.localCenter)),
            this.m_sweep.c.SetV(this.m_sweep.c0),
            (this.m_linearVelocity.x +=
              this.m_angularVelocity * -(this.m_sweep.c.y - i.y)),
            (this.m_linearVelocity.y +=
              this.m_angularVelocity * +(this.m_sweep.c.x - i.x));
        }
      }),
      (x.prototype.ResetMassData = function () {
        if (
          ((this.m_mass = 0),
          (this.m_invMass = 0),
          (this.m_I = 0),
          (this.m_invI = 0),
          this.m_sweep.localCenter.SetZero(),
          this.m_type != x.b2_staticBody && this.m_type != x.b2_kinematicBody)
        ) {
          for (var o = e.Make(0, 0), i = this.m_fixtureList; i; i = i.m_next)
            if (0 != i.m_density) {
              var n = i.GetMassData();
              (this.m_mass += n.mass),
                (o.x += n.center.x * n.mass),
                (o.y += n.center.y * n.mass),
                (this.m_I += n.I);
            }
          this.m_mass > 0
            ? ((this.m_invMass = 1 / this.m_mass),
              (o.x *= this.m_invMass),
              (o.y *= this.m_invMass))
            : ((this.m_mass = 1), (this.m_invMass = 1)),
            this.m_I > 0 && 0 == (this.m_flags & x.e_fixedRotationFlag)
              ? ((this.m_I -= this.m_mass * (o.x * o.x + o.y * o.y)),
                (this.m_I *= this.m_inertiaScale),
                s.b2Assert(this.m_I > 0),
                (this.m_invI = 1 / this.m_I))
              : ((this.m_I = 0), (this.m_invI = 0));
          var r = this.m_sweep.c.Copy();
          this.m_sweep.localCenter.SetV(o),
            this.m_sweep.c0.SetV(t.MulX(this.m_xf, this.m_sweep.localCenter)),
            this.m_sweep.c.SetV(this.m_sweep.c0),
            (this.m_linearVelocity.x +=
              this.m_angularVelocity * -(this.m_sweep.c.y - r.y)),
            (this.m_linearVelocity.y +=
              this.m_angularVelocity * +(this.m_sweep.c.x - r.x));
        }
      }),
      (x.prototype.GetWorldPoint = function (t) {
        var o = this.m_xf.R,
          i = new e(
            o.col1.x * t.x + o.col2.x * t.y,
            o.col1.y * t.x + o.col2.y * t.y,
          );
        return (i.x += this.m_xf.position.x), (i.y += this.m_xf.position.y), i;
      }),
      (x.prototype.GetWorldVector = function (o) {
        return t.MulMV(this.m_xf.R, o);
      }),
      (x.prototype.GetLocalPoint = function (o) {
        return t.MulXT(this.m_xf, o);
      }),
      (x.prototype.GetLocalVector = function (o) {
        return t.MulTMV(this.m_xf.R, o);
      }),
      (x.prototype.GetLinearVelocityFromWorldPoint = function (t) {
        return new e(
          this.m_linearVelocity.x -
            this.m_angularVelocity * (t.y - this.m_sweep.c.y),
          this.m_linearVelocity.y +
            this.m_angularVelocity * (t.x - this.m_sweep.c.x),
        );
      }),
      (x.prototype.GetLinearVelocityFromLocalPoint = function (t) {
        var o = this.m_xf.R,
          i = new e(
            o.col1.x * t.x + o.col2.x * t.y,
            o.col1.y * t.x + o.col2.y * t.y,
          );
        return (
          (i.x += this.m_xf.position.x),
          (i.y += this.m_xf.position.y),
          new e(
            this.m_linearVelocity.x -
              this.m_angularVelocity * (i.y - this.m_sweep.c.y),
            this.m_linearVelocity.y +
              this.m_angularVelocity * (i.x - this.m_sweep.c.x),
          )
        );
      }),
      (x.prototype.GetLinearDamping = function () {
        return this.m_linearDamping;
      }),
      (x.prototype.SetLinearDamping = function (t) {
        void 0 === t && (t = 0), (this.m_linearDamping = t);
      }),
      (x.prototype.GetAngularDamping = function () {
        return this.m_angularDamping;
      }),
      (x.prototype.SetAngularDamping = function (t) {
        void 0 === t && (t = 0), (this.m_angularDamping = t);
      }),
      (x.prototype.SetType = function (t) {
        if ((void 0 === t && (t = 0), this.m_type != t)) {
          (this.m_type = t),
            this.ResetMassData(),
            this.m_type == x.b2_staticBody &&
              (this.m_linearVelocity.SetZero(), (this.m_angularVelocity = 0)),
            this.SetAwake(!0),
            this.m_force.SetZero(),
            (this.m_torque = 0);
          for (var o = this.m_contactList; o; o = o.next)
            o.contact.FlagForFiltering();
        }
      }),
      (x.prototype.GetType = function () {
        return this.m_type;
      }),
      (x.prototype.SetBullet = function (t) {
        t
          ? (this.m_flags |= x.e_bulletFlag)
          : (this.m_flags &= ~x.e_bulletFlag);
      }),
      (x.prototype.IsBullet = function () {
        return (this.m_flags & x.e_bulletFlag) == x.e_bulletFlag;
      }),
      (x.prototype.SetSleepingAllowed = function (t) {
        t
          ? (this.m_flags |= x.e_allowSleepFlag)
          : ((this.m_flags &= ~x.e_allowSleepFlag), this.SetAwake(!0));
      }),
      (x.prototype.SetAwake = function (t) {
        t
          ? ((this.m_flags |= x.e_awakeFlag), (this.m_sleepTime = 0))
          : ((this.m_flags &= ~x.e_awakeFlag),
            (this.m_sleepTime = 0),
            this.m_linearVelocity.SetZero(),
            (this.m_angularVelocity = 0),
            this.m_force.SetZero(),
            (this.m_torque = 0));
      }),
      (x.prototype.IsAwake = function () {
        return (this.m_flags & x.e_awakeFlag) == x.e_awakeFlag;
      }),
      (x.prototype.SetFixedRotation = function (t) {
        t
          ? (this.m_flags |= x.e_fixedRotationFlag)
          : (this.m_flags &= ~x.e_fixedRotationFlag),
          this.ResetMassData();
      }),
      (x.prototype.IsFixedRotation = function () {
        return (this.m_flags & x.e_fixedRotationFlag) == x.e_fixedRotationFlag;
      }),
      (x.prototype.SetActive = function (t) {
        if (t != this.IsActive()) {
          var o, i;
          if (t)
            for (
              this.m_flags |= x.e_activeFlag,
                o = this.m_world.m_contactManager.m_broadPhase,
                i = this.m_fixtureList;
              i;
              i = i.m_next
            )
              i.CreateProxy(o, this.m_xf);
          else {
            for (
              this.m_flags &= ~x.e_activeFlag,
                o = this.m_world.m_contactManager.m_broadPhase,
                i = this.m_fixtureList;
              i;
              i = i.m_next
            )
              i.DestroyProxy(o);
            for (var e = this.m_contactList; e; ) {
              var n = e;
              (e = e.next), this.m_world.m_contactManager.Destroy(n.contact);
            }
            this.m_contactList = null;
          }
        }
      }),
      (x.prototype.IsActive = function () {
        return (this.m_flags & x.e_activeFlag) == x.e_activeFlag;
      }),
      (x.prototype.IsSleepingAllowed = function () {
        return (this.m_flags & x.e_allowSleepFlag) == x.e_allowSleepFlag;
      }),
      (x.prototype.GetFixtureList = function () {
        return this.m_fixtureList;
      }),
      (x.prototype.GetJointList = function () {
        return this.m_jointList;
      }),
      (x.prototype.GetControllerList = function () {
        return this.m_controllerList;
      }),
      (x.prototype.GetContactList = function () {
        return this.m_contactList;
      }),
      (x.prototype.GetNext = function () {
        return this.m_next;
      }),
      (x.prototype.GetUserData = function () {
        return this.m_userData;
      }),
      (x.prototype.SetUserData = function (t) {
        this.m_userData = t;
      }),
      (x.prototype.GetWorld = function () {
        return this.m_world;
      }),
      (x.prototype.b2Body = function (t, o) {
        (this.m_flags = 0),
          t.bullet && (this.m_flags |= x.e_bulletFlag),
          t.fixedRotation && (this.m_flags |= x.e_fixedRotationFlag),
          t.allowSleep && (this.m_flags |= x.e_allowSleepFlag),
          t.awake && (this.m_flags |= x.e_awakeFlag),
          t.active && (this.m_flags |= x.e_activeFlag),
          (this.m_world = o),
          this.m_xf.position.SetV(t.position),
          this.m_xf.R.Set(t.angle),
          this.m_sweep.localCenter.SetZero(),
          (this.m_sweep.t0 = 1),
          (this.m_sweep.a0 = this.m_sweep.a = t.angle);
        var i = this.m_xf.R,
          e = this.m_sweep.localCenter;
        (this.m_sweep.c.x = i.col1.x * e.x + i.col2.x * e.y),
          (this.m_sweep.c.y = i.col1.y * e.x + i.col2.y * e.y),
          (this.m_sweep.c.x += this.m_xf.position.x),
          (this.m_sweep.c.y += this.m_xf.position.y),
          this.m_sweep.c0.SetV(this.m_sweep.c),
          (this.m_jointList = null),
          (this.m_controllerList = null),
          (this.m_contactList = null),
          (this.m_controllerCount = 0),
          (this.m_prev = null),
          (this.m_next = null),
          this.m_linearVelocity.SetV(t.linearVelocity),
          (this.m_angularVelocity = t.angularVelocity),
          (this.m_linearDamping = t.linearDamping),
          (this.m_angularDamping = t.angularDamping),
          this.m_force.Set(0, 0),
          (this.m_torque = 0),
          (this.m_sleepTime = 0),
          (this.m_type = t.type),
          this.m_type == x.b2_dynamicBody
            ? ((this.m_mass = 1), (this.m_invMass = 1))
            : ((this.m_mass = 0), (this.m_invMass = 0)),
          (this.m_I = 0),
          (this.m_invI = 0),
          (this.m_inertiaScale = t.inertiaScale),
          (this.m_userData = t.userData),
          (this.m_fixtureList = null),
          (this.m_fixtureCount = 0);
      }),
      (x.prototype.SynchronizeFixtures = function () {
        var t = x.s_xf1;
        t.R.Set(this.m_sweep.a0);
        var o = t.R,
          i = this.m_sweep.localCenter;
        (t.position.x = this.m_sweep.c0.x - (o.col1.x * i.x + o.col2.x * i.y)),
          (t.position.y =
            this.m_sweep.c0.y - (o.col1.y * i.x + o.col2.y * i.y));
        var e,
          n = this.m_world.m_contactManager.m_broadPhase;
        for (e = this.m_fixtureList; e; e = e.m_next)
          e.Synchronize(n, t, this.m_xf);
      }),
      (x.prototype.SynchronizeTransform = function () {
        this.m_xf.R.Set(this.m_sweep.a);
        var t = this.m_xf.R,
          o = this.m_sweep.localCenter;
        (this.m_xf.position.x =
          this.m_sweep.c.x - (t.col1.x * o.x + t.col2.x * o.y)),
          (this.m_xf.position.y =
            this.m_sweep.c.y - (t.col1.y * o.x + t.col2.y * o.y));
      }),
      (x.prototype.ShouldCollide = function (t) {
        if (this.m_type != x.b2_dynamicBody && t.m_type != x.b2_dynamicBody)
          return !1;
        for (var o = this.m_jointList; o; o = o.next)
          if (o.other == t && 0 == o.joint.m_collideConnected) return !1;
        return !0;
      }),
      (x.prototype.Advance = function (t) {
        void 0 === t && (t = 0),
          this.m_sweep.Advance(t),
          this.m_sweep.c.SetV(this.m_sweep.c0),
          (this.m_sweep.a = this.m_sweep.a0),
          this.SynchronizeTransform();
      }),
      Box2D.postDefs.push(function () {
        (Box2D.Dynamics.b2Body.s_xf1 = new i()),
          (Box2D.Dynamics.b2Body.e_islandFlag = 1),
          (Box2D.Dynamics.b2Body.e_awakeFlag = 2),
          (Box2D.Dynamics.b2Body.e_allowSleepFlag = 4),
          (Box2D.Dynamics.b2Body.e_bulletFlag = 8),
          (Box2D.Dynamics.b2Body.e_fixedRotationFlag = 16),
          (Box2D.Dynamics.b2Body.e_activeFlag = 32),
          (Box2D.Dynamics.b2Body.b2_staticBody = 0),
          (Box2D.Dynamics.b2Body.b2_kinematicBody = 1),
          (Box2D.Dynamics.b2Body.b2_dynamicBody = 2);
      }),
      (f.b2BodyDef = function () {
        (this.position = new e()), (this.linearVelocity = new e());
      }),
      (f.prototype.b2BodyDef = function () {
        (this.userData = null),
          this.position.Set(0, 0),
          (this.angle = 0),
          this.linearVelocity.Set(0, 0),
          (this.angularVelocity = 0),
          (this.linearDamping = 0),
          (this.angularDamping = 0),
          (this.allowSleep = !0),
          (this.awake = !0),
          (this.fixedRotation = !1),
          (this.bullet = !1),
          (this.type = x.b2_staticBody),
          (this.active = !0),
          (this.inertiaScale = 1);
      }),
      (d.b2ContactFilter = function () {}),
      (d.prototype.ShouldCollide = function (t, o) {
        var i = t.GetFilterData(),
          e = o.GetFilterData();
        if (i.groupIndex == e.groupIndex && 0 != i.groupIndex)
          return i.groupIndex > 0;
        var n =
          0 != (i.maskBits & e.categoryBits) &&
          0 != (i.categoryBits & e.maskBits);
        return n;
      }),
      (d.prototype.RayCollide = function (t, o) {
        return !t || this.ShouldCollide(t instanceof S ? t : null, o);
      }),
      Box2D.postDefs.push(function () {
        Box2D.Dynamics.b2ContactFilter.b2_defaultFilter = new d();
      }),
      (b.b2ContactImpulse = function () {
        (this.normalImpulses = new Vector_a2j_Number(s.b2_maxManifoldPoints)),
          (this.tangentImpulses = new Vector_a2j_Number(
            s.b2_maxManifoldPoints,
          ));
      }),
      (v.b2ContactListener = function () {}),
      (v.prototype.BeginContact = function (t) {}),
      (v.prototype.EndContact = function (t) {}),
      (v.prototype.PreSolve = function (t, o) {}),
      (v.prototype.PostSolve = function (t, o) {}),
      Box2D.postDefs.push(function () {
        Box2D.Dynamics.b2ContactListener.b2_defaultListener = new v();
      }),
      (D.b2ContactManager = function () {}),
      (D.prototype.b2ContactManager = function () {
        (this.m_world = null),
          (this.m_contactCount = 0),
          (this.m_contactFilter = d.b2_defaultFilter),
          (this.m_contactListener = v.b2_defaultListener),
          (this.m_contactFactory = new G(this.m_allocator)),
          (this.m_broadPhase = new l());
      }),
      (D.prototype.AddPair = function (t, o) {
        var i = t instanceof S ? t : null,
          e = o instanceof S ? o : null,
          n = i.GetBody(),
          s = e.GetBody();
        if (n != s) {
          for (var r = s.GetContactList(); r; ) {
            if (r.other == n) {
              var a = r.contact.GetFixtureA(),
                l = r.contact.GetFixtureB();
              if (a == i && l == e) return;
              if (a == e && l == i) return;
            }
            r = r.next;
          }
          if (
            0 != s.ShouldCollide(n) &&
            0 != this.m_contactFilter.ShouldCollide(i, e)
          ) {
            var m = this.m_contactFactory.Create(i, e);
            (i = m.GetFixtureA()),
              (e = m.GetFixtureB()),
              (n = i.m_body),
              (s = e.m_body),
              (m.m_prev = null),
              (m.m_next = this.m_world.m_contactList),
              null != this.m_world.m_contactList &&
                (this.m_world.m_contactList.m_prev = m),
              (this.m_world.m_contactList = m),
              (m.m_nodeA.contact = m),
              (m.m_nodeA.other = s),
              (m.m_nodeA.prev = null),
              (m.m_nodeA.next = n.m_contactList),
              null != n.m_contactList && (n.m_contactList.prev = m.m_nodeA),
              (n.m_contactList = m.m_nodeA),
              (m.m_nodeB.contact = m),
              (m.m_nodeB.other = n),
              (m.m_nodeB.prev = null),
              (m.m_nodeB.next = s.m_contactList),
              null != s.m_contactList && (s.m_contactList.prev = m.m_nodeB),
              (s.m_contactList = m.m_nodeB),
              ++this.m_world.m_contactCount;
          }
        }
      }),
      (D.prototype.FindNewContacts = function () {
        this.m_broadPhase.UpdatePairs(
          Box2D.generateCallback(this, this.AddPair),
        );
      }),
      (D.prototype.Destroy = function (t) {
        var o = t.GetFixtureA(),
          i = t.GetFixtureB(),
          e = o.GetBody(),
          n = i.GetBody();
        t.IsTouching() && this.m_contactListener.EndContact(t),
          t.m_prev && (t.m_prev.m_next = t.m_next),
          t.m_next && (t.m_next.m_prev = t.m_prev),
          t == this.m_world.m_contactList &&
            (this.m_world.m_contactList = t.m_next),
          t.m_nodeA.prev && (t.m_nodeA.prev.next = t.m_nodeA.next),
          t.m_nodeA.next && (t.m_nodeA.next.prev = t.m_nodeA.prev),
          t.m_nodeA == e.m_contactList && (e.m_contactList = t.m_nodeA.next),
          t.m_nodeB.prev && (t.m_nodeB.prev.next = t.m_nodeB.next),
          t.m_nodeB.next && (t.m_nodeB.next.prev = t.m_nodeB.prev),
          t.m_nodeB == n.m_contactList && (n.m_contactList = t.m_nodeB.next),
          this.m_contactFactory.Destroy(t),
          --this.m_contactCount;
      }),
      (D.prototype.Collide = function () {
        for (var t = this.m_world.m_contactList; t; ) {
          var o = t.GetFixtureA(),
            i = t.GetFixtureB(),
            e = o.GetBody(),
            n = i.GetBody();
          if (0 != e.IsAwake() || 0 != n.IsAwake()) {
            if (t.m_flags & I.e_filterFlag) {
              if (0 == n.ShouldCollide(e)) {
                var s = t;
                (t = s.GetNext()), this.Destroy(s);
                continue;
              }
              if (0 == this.m_contactFilter.ShouldCollide(o, i)) {
                (s = t), (t = s.GetNext()), this.Destroy(s);
                continue;
              }
              t.m_flags &= ~I.e_filterFlag;
            }
            var r = o.m_proxy,
              a = i.m_proxy,
              l = this.m_broadPhase.TestOverlap(r, a);
            0 != l
              ? (t.Update(this.m_contactListener), (t = t.GetNext()))
              : ((s = t), (t = s.GetNext()), this.Destroy(s));
          } else t = t.GetNext();
        }
      }),
      Box2D.postDefs.push(function () {
        Box2D.Dynamics.b2ContactManager.s_evalCP = new a();
      }),
      (B.b2DebugDraw = function () {}),
      (B.prototype.b2DebugDraw = function () {}),
      (B.prototype.SetFlags = function (t) {
        void 0 === t && (t = 0);
      }),
      (B.prototype.GetFlags = function () {}),
      (B.prototype.AppendFlags = function (t) {
        void 0 === t && (t = 0);
      }),
      (B.prototype.ClearFlags = function (t) {
        void 0 === t && (t = 0);
      }),
      (B.prototype.SetSprite = function (t) {}),
      (B.prototype.GetSprite = function () {}),
      (B.prototype.SetDrawScale = function (t) {
        void 0 === t && (t = 0);
      }),
      (B.prototype.GetDrawScale = function () {}),
      (B.prototype.SetLineThickness = function (t) {
        void 0 === t && (t = 0);
      }),
      (B.prototype.GetLineThickness = function () {}),
      (B.prototype.SetAlpha = function (t) {
        void 0 === t && (t = 0);
      }),
      (B.prototype.GetAlpha = function () {}),
      (B.prototype.SetFillAlpha = function (t) {
        void 0 === t && (t = 0);
      }),
      (B.prototype.GetFillAlpha = function () {}),
      (B.prototype.SetXFormScale = function (t) {
        void 0 === t && (t = 0);
      }),
      (B.prototype.GetXFormScale = function () {}),
      (B.prototype.DrawPolygon = function (t, o, i) {
        void 0 === o && (o = 0);
      }),
      (B.prototype.DrawSolidPolygon = function (t, o, i) {
        void 0 === o && (o = 0);
      }),
      (B.prototype.DrawCircle = function (t, o, i) {
        void 0 === o && (o = 0);
      }),
      (B.prototype.DrawSolidCircle = function (t, o, i, e) {
        void 0 === o && (o = 0);
      }),
      (B.prototype.DrawSegment = function (t, o, i) {}),
      (B.prototype.DrawTransform = function (t) {}),
      Box2D.postDefs.push(function () {
        (Box2D.Dynamics.b2DebugDraw.e_shapeBit = 1),
          (Box2D.Dynamics.b2DebugDraw.e_jointBit = 2),
          (Box2D.Dynamics.b2DebugDraw.e_aabbBit = 4),
          (Box2D.Dynamics.b2DebugDraw.e_pairBit = 8),
          (Box2D.Dynamics.b2DebugDraw.e_centerOfMassBit = 16),
          (Box2D.Dynamics.b2DebugDraw.e_controllerBit = 32);
      }),
      (C.b2DestructionListener = function () {}),
      (C.prototype.SayGoodbyeJoint = function (t) {}),
      (C.prototype.SayGoodbyeFixture = function (t) {}),
      (A.b2FilterData = function () {
        (this.categoryBits = 1), (this.maskBits = 65535), (this.groupIndex = 0);
      }),
      (A.prototype.Copy = function () {
        var t = new A();
        return (
          (t.categoryBits = this.categoryBits),
          (t.maskBits = this.maskBits),
          (t.groupIndex = this.groupIndex),
          t
        );
      }),
      (S.b2Fixture = function () {
        this.m_filter = new A();
      }),
      (S.prototype.GetType = function () {
        return this.m_shape.GetType();
      }),
      (S.prototype.GetShape = function () {
        return this.m_shape;
      }),
      (S.prototype.SetSensor = function (t) {
        if (
          this.m_isSensor != t &&
          ((this.m_isSensor = t), null != this.m_body)
        )
          for (var o = this.m_body.GetContactList(); o; ) {
            var i = o.contact,
              e = i.GetFixtureA(),
              n = i.GetFixtureB();
            (e != this && n != this) ||
              i.SetSensor(e.IsSensor() || n.IsSensor()),
              (o = o.next);
          }
      }),
      (S.prototype.IsSensor = function () {
        return this.m_isSensor;
      }),
      (S.prototype.SetFilterData = function (t) {
        if (((this.m_filter = t.Copy()), !this.m_body))
          for (var o = this.m_body.GetContactList(); o; ) {
            var i = o.contact,
              e = i.GetFixtureA(),
              n = i.GetFixtureB();
            (e != this && n != this) || i.FlagForFiltering(), (o = o.next);
          }
      }),
      (S.prototype.GetFilterData = function () {
        return this.m_filter.Copy();
      }),
      (S.prototype.GetBody = function () {
        return this.m_body;
      }),
      (S.prototype.GetNext = function () {
        return this.m_next;
      }),
      (S.prototype.GetUserData = function () {
        return this.m_userData;
      }),
      (S.prototype.SetUserData = function (t) {
        this.m_userData = t;
      }),
      (S.prototype.TestPoint = function (t) {
        return this.m_shape.TestPoint(this.m_body.GetTransform(), t);
      }),
      (S.prototype.RayCast = function (t, o) {
        return this.m_shape.RayCast(t, o, this.m_body.GetTransform());
      }),
      (S.prototype.GetMassData = function (t) {
        return (
          void 0 === t && (t = null),
          null == t && (t = new p()),
          this.m_shape.ComputeMass(t, this.m_density),
          t
        );
      }),
      (S.prototype.SetDensity = function (t) {
        void 0 === t && (t = 0), (this.m_density = t);
      }),
      (S.prototype.GetDensity = function () {
        return this.m_density;
      }),
      (S.prototype.GetFriction = function () {
        return this.m_friction;
      }),
      (S.prototype.SetFriction = function (t) {
        void 0 === t && (t = 0), (this.m_friction = t);
      }),
      (S.prototype.GetRestitution = function () {
        return this.m_restitution;
      }),
      (S.prototype.SetRestitution = function (t) {
        void 0 === t && (t = 0), (this.m_restitution = t);
      }),
      (S.prototype.GetAABB = function () {
        return this.m_aabb;
      }),
      (S.prototype.b2Fixture = function () {
        (this.m_aabb = new r()),
          (this.m_userData = null),
          (this.m_body = null),
          (this.m_next = null),
          (this.m_shape = null),
          (this.m_density = 0),
          (this.m_friction = 0),
          (this.m_restitution = 0);
      }),
      (S.prototype.Create = function (t, o, i) {
        (this.m_userData = i.userData),
          (this.m_friction = i.friction),
          (this.m_restitution = i.restitution),
          (this.m_body = t),
          (this.m_next = null),
          (this.m_filter = i.filter.Copy()),
          (this.m_isSensor = i.isSensor),
          (this.m_shape = i.shape.Copy()),
          (this.m_density = i.density);
      }),
      (S.prototype.Destroy = function () {
        this.m_shape = null;
      }),
      (S.prototype.CreateProxy = function (t, o) {
        this.m_shape.ComputeAABB(this.m_aabb, o),
          (this.m_proxy = t.CreateProxy(this.m_aabb, this));
      }),
      (S.prototype.DestroyProxy = function (t) {
        null != this.m_proxy &&
          (t.DestroyProxy(this.m_proxy), (this.m_proxy = null));
      }),
      (S.prototype.Synchronize = function (o, i, e) {
        if (this.m_proxy) {
          var n = new r(),
            s = new r();
          this.m_shape.ComputeAABB(n, i),
            this.m_shape.ComputeAABB(s, e),
            this.m_aabb.Combine(n, s);
          var a = t.SubtractVV(e.position, i.position);
          o.MoveProxy(this.m_proxy, this.m_aabb, a);
        }
      }),
      (w.b2FixtureDef = function () {
        this.filter = new A();
      }),
      (w.prototype.b2FixtureDef = function () {
        (this.shape = null),
          (this.userData = null),
          (this.friction = 0.2),
          (this.restitution = 0),
          (this.density = 0),
          (this.filter.categoryBits = 1),
          (this.filter.maskBits = 65535),
          (this.filter.groupIndex = 0),
          (this.isSensor = !1);
      }),
      (g.b2Island = function () {}),
      (g.prototype.b2Island = function () {
        (this.m_bodies = new Vector()),
          (this.m_contacts = new Vector()),
          (this.m_joints = new Vector());
      }),
      (g.prototype.Initialize = function (t, o, i, e, n, s) {
        void 0 === t && (t = 0),
          void 0 === o && (o = 0),
          void 0 === i && (i = 0);
        var r = 0;
        for (
          this.m_bodyCapacity = t,
            this.m_contactCapacity = o,
            this.m_jointCapacity = i,
            this.m_bodyCount = 0,
            this.m_contactCount = 0,
            this.m_jointCount = 0,
            this.m_allocator = e,
            this.m_listener = n,
            this.m_contactSolver = s,
            r = this.m_bodies.length;
          r < t;
          r++
        )
          this.m_bodies[r] = null;
        for (r = this.m_contacts.length; r < o; r++) this.m_contacts[r] = null;
        for (r = this.m_joints.length; r < i; r++) this.m_joints[r] = null;
      }),
      (g.prototype.Clear = function () {
        (this.m_bodyCount = 0),
          (this.m_contactCount = 0),
          (this.m_jointCount = 0);
      }),
      (g.prototype.Solve = function (o, i, e) {
        var n,
          r,
          a = 0,
          l = 0;
        for (a = 0; a < this.m_bodyCount; ++a)
          if (((n = this.m_bodies[a]), n.GetType() == x.b2_dynamicBody)) {
            var m = i;
            n.m_useOwnGravity && (m = n.m_gravity),
              (n.m_linearVelocity.x +=
                o.dt * (m.x + n.m_invMass * n.m_force.x)),
              (n.m_linearVelocity.y +=
                o.dt * (m.y + n.m_invMass * n.m_force.y)),
              (n.m_angularVelocity += o.dt * n.m_invI * n.m_torque),
              n.m_linearVelocity.Multiply(
                t.Clamp(1 - o.dt * n.m_linearDamping, 0, 1),
              ),
              (n.m_angularVelocity *= t.Clamp(
                1 - o.dt * n.m_angularDamping,
                0,
                1,
              ));
          }
        this.m_contactSolver.Initialize(
          o,
          this.m_contacts,
          this.m_contactCount,
          this.m_allocator,
        );
        var c = this.m_contactSolver;
        for (c.InitVelocityConstraints(o), a = 0; a < this.m_jointCount; ++a)
          (r = this.m_joints[a]), r.InitVelocityConstraints(o);
        for (a = 0; a < o.velocityIterations; ++a) {
          for (l = 0; l < this.m_jointCount; ++l)
            (r = this.m_joints[l]), r.SolveVelocityConstraints(o);
          c.SolveVelocityConstraints();
        }
        for (a = 0; a < this.m_jointCount; ++a)
          (r = this.m_joints[a]), r.FinalizeVelocityConstraints();
        for (c.FinalizeVelocityConstraints(), a = 0; a < this.m_bodyCount; ++a)
          if (((n = this.m_bodies[a]), n.GetType() != x.b2_staticBody)) {
            var _ = o.dt * n.m_linearVelocity.x,
              h = o.dt * n.m_linearVelocity.y;
            _ * _ + h * h > s.b2_maxTranslationSquared &&
              (n.m_linearVelocity.Normalize(),
              (n.m_linearVelocity.x *= s.b2_maxTranslation * o.inv_dt),
              (n.m_linearVelocity.y *= s.b2_maxTranslation * o.inv_dt));
            var p = o.dt * n.m_angularVelocity;
            p * p > s.b2_maxRotationSquared &&
              (n.m_angularVelocity < 0
                ? (n.m_angularVelocity = -s.b2_maxRotation * o.inv_dt)
                : (n.m_angularVelocity = s.b2_maxRotation * o.inv_dt)),
              n.m_sweep.c0.SetV(n.m_sweep.c),
              (n.m_sweep.a0 = n.m_sweep.a),
              (n.m_sweep.c.x += o.dt * n.m_linearVelocity.x),
              (n.m_sweep.c.y += o.dt * n.m_linearVelocity.y),
              (n.m_sweep.a += o.dt * n.m_angularVelocity),
              n.SynchronizeTransform();
          }
        for (a = 0; a < o.positionIterations; ++a) {
          var y = c.SolvePositionConstraints(s.b2_contactBaumgarte),
            u = !0;
          for (l = 0; l < this.m_jointCount; ++l) {
            r = this.m_joints[l];
            var f = r.SolvePositionConstraints(s.b2_contactBaumgarte);
            u = u && f;
          }
          if (y && u) break;
        }
        if ((this.Report(c.m_constraints), e)) {
          var d = Number.MAX_VALUE,
            b = s.b2_linearSleepTolerance * s.b2_linearSleepTolerance,
            v = s.b2_angularSleepTolerance * s.b2_angularSleepTolerance;
          for (a = 0; a < this.m_bodyCount; ++a)
            (n = this.m_bodies[a]),
              n.GetType() != x.b2_staticBody &&
                (0 == (n.m_flags & x.e_allowSleepFlag) &&
                  ((n.m_sleepTime = 0), (d = 0)),
                0 == (n.m_flags & x.e_allowSleepFlag) ||
                n.m_angularVelocity * n.m_angularVelocity > v ||
                t.Dot(n.m_linearVelocity, n.m_linearVelocity) > b
                  ? ((n.m_sleepTime = 0), (d = 0))
                  : ((n.m_sleepTime += o.dt), (d = t.Min(d, n.m_sleepTime))));
          if (d >= s.b2_timeToSleep)
            for (a = 0; a < this.m_bodyCount; ++a)
              (n = this.m_bodies[a]), n.SetAwake(!1);
        }
      }),
      (g.prototype.SolveTOI = function (t) {
        var o = 0,
          i = 0;
        this.m_contactSolver.Initialize(
          t,
          this.m_contacts,
          this.m_contactCount,
          this.m_allocator,
        );
        var e = this.m_contactSolver;
        for (o = 0; o < this.m_jointCount; ++o)
          this.m_joints[o].InitVelocityConstraints(t);
        for (o = 0; o < t.velocityIterations; ++o)
          for (e.SolveVelocityConstraints(), i = 0; i < this.m_jointCount; ++i)
            this.m_joints[i].SolveVelocityConstraints(t);
        for (o = 0; o < this.m_bodyCount; ++o) {
          var n = this.m_bodies[o];
          if (n.GetType() != x.b2_staticBody) {
            var r = t.dt * n.m_linearVelocity.x,
              a = t.dt * n.m_linearVelocity.y;
            r * r + a * a > s.b2_maxTranslationSquared &&
              (n.m_linearVelocity.Normalize(),
              (n.m_linearVelocity.x *= s.b2_maxTranslation * t.inv_dt),
              (n.m_linearVelocity.y *= s.b2_maxTranslation * t.inv_dt));
            var l = t.dt * n.m_angularVelocity;
            l * l > s.b2_maxRotationSquared &&
              (n.m_angularVelocity < 0
                ? (n.m_angularVelocity = -s.b2_maxRotation * t.inv_dt)
                : (n.m_angularVelocity = s.b2_maxRotation * t.inv_dt)),
              n.m_sweep.c0.SetV(n.m_sweep.c),
              (n.m_sweep.a0 = n.m_sweep.a),
              (n.m_sweep.c.x += t.dt * n.m_linearVelocity.x),
              (n.m_sweep.c.y += t.dt * n.m_linearVelocity.y),
              (n.m_sweep.a += t.dt * n.m_angularVelocity),
              n.SynchronizeTransform();
          }
        }
        var m = 0.75;
        for (o = 0; o < t.positionIterations; ++o) {
          var c = e.SolvePositionConstraints(m),
            _ = !0;
          for (i = 0; i < this.m_jointCount; ++i) {
            var h = this.m_joints[i].SolvePositionConstraints(
              s.b2_contactBaumgarte,
            );
            _ = _ && h;
          }
          if (c && _) break;
        }
        this.Report(e.m_constraints);
      }),
      (g.prototype.Report = function (t) {
        if (null != this.m_listener)
          for (var o = 0; o < this.m_contactCount; ++o) {
            for (
              var i = this.m_contacts[o], e = t[o], n = 0;
              n < e.pointCount;
              ++n
            )
              (g.s_impulse.normalImpulses[n] = e.points[n].normalImpulse),
                (g.s_impulse.tangentImpulses[n] = e.points[n].tangentImpulse);
            this.m_listener.PostSolve(i, g.s_impulse);
          }
      }),
      (g.prototype.AddBody = function (t) {
        (t.m_islandIndex = this.m_bodyCount),
          (this.m_bodies[this.m_bodyCount++] = t);
      }),
      (g.prototype.AddContact = function (t) {
        this.m_contacts[this.m_contactCount++] = t;
      }),
      (g.prototype.AddJoint = function (t) {
        this.m_joints[this.m_jointCount++] = t;
      }),
      Box2D.postDefs.push(function () {
        Box2D.Dynamics.b2Island.s_impulse = new b();
      }),
      (M.b2TimeStep = function () {}),
      (M.prototype.Set = function (t) {
        (this.dt = t.dt),
          (this.inv_dt = t.inv_dt),
          (this.positionIterations = t.positionIterations),
          (this.velocityIterations = t.velocityIterations),
          (this.warmStarting = t.warmStarting);
      }),
      (V.b2World = function () {
        (this.s_stack = new Vector()),
          (this.m_contactManager = new D()),
          (this.m_contactSolver = new L()),
          (this.m_island = new g());
      }),
      (V.prototype.b2World = function (t, o) {
        (this.m_destructionListener = null),
          (this.m_debugDraw = null),
          (this.m_bodyList = null),
          (this.m_contactList = null),
          (this.m_jointList = null),
          (this.m_controllerList = null),
          (this.m_bodyCount = 0),
          (this.m_contactCount = 0),
          (this.m_jointCount = 0),
          (this.m_controllerCount = 0),
          (V.m_warmStarting = !0),
          (V.m_continuousPhysics = !0),
          (this.m_allowSleep = o),
          (this.m_gravity = t),
          (this.m_inv_dt0 = 0),
          (this.m_contactManager.m_world = this);
        var i = new f();
        this.m_groundBody = this.CreateBody(i);
      }),
      (V.prototype.SetDestructionListener = function (t) {
        this.m_destructionListener = t;
      }),
      (V.prototype.SetContactFilter = function (t) {
        this.m_contactManager.m_contactFilter = t;
      }),
      (V.prototype.SetContactListener = function (t) {
        this.m_contactManager.m_contactListener = t;
      }),
      (V.prototype.SetDebugDraw = function (t) {
        this.m_debugDraw = t;
      }),
      (V.prototype.SetBroadPhase = function (t) {
        var o = this.m_contactManager.m_broadPhase;
        this.m_contactManager.m_broadPhase = t;
        for (var i = this.m_bodyList; i; i = i.m_next)
          for (var e = i.m_fixtureList; e; e = e.m_next)
            e.m_proxy = t.CreateProxy(o.GetFatAABB(e.m_proxy), e);
      }),
      (V.prototype.Validate = function () {
        this.m_contactManager.m_broadPhase.Validate();
      }),
      (V.prototype.GetProxyCount = function () {
        return this.m_contactManager.m_broadPhase.GetProxyCount();
      }),
      (V.prototype.CreateBody = function (t) {
        if (1 == this.IsLocked()) return null;
        var o = new x(t, this);
        return (
          (o.m_prev = null),
          (o.m_next = this.m_bodyList),
          this.m_bodyList && (this.m_bodyList.m_prev = o),
          (this.m_bodyList = o),
          ++this.m_bodyCount,
          o
        );
      }),
      (V.prototype.DestroyBody = function (t) {
        if (1 != this.IsLocked()) {
          for (var o = t.m_jointList; o; ) {
            var i = o;
            (o = o.next),
              this.m_destructionListener &&
                this.m_destructionListener.SayGoodbyeJoint(i.joint),
              this.DestroyJoint(i.joint);
          }
          for (var e = t.m_controllerList; e; ) {
            var n = e;
            (e = e.nextController), n.controller.RemoveBody(t);
          }
          for (var s = t.m_contactList; s; ) {
            var r = s;
            (s = s.next), this.m_contactManager.Destroy(r.contact);
          }
          t.m_contactList = null;
          for (var a = t.m_fixtureList; a; ) {
            var l = a;
            (a = a.m_next),
              this.m_destructionListener &&
                this.m_destructionListener.SayGoodbyeFixture(l),
              l.DestroyProxy(this.m_contactManager.m_broadPhase),
              l.Destroy();
          }
          (t.m_fixtureList = null),
            (t.m_fixtureCount = 0),
            t.m_prev && (t.m_prev.m_next = t.m_next),
            t.m_next && (t.m_next.m_prev = t.m_prev),
            t == this.m_bodyList && (this.m_bodyList = t.m_next),
            --this.m_bodyCount;
        }
      }),
      (V.prototype.CreateJoint = function (t) {
        var o = J.Create(t, null);
        (o.m_prev = null),
          (o.m_next = this.m_jointList),
          this.m_jointList && (this.m_jointList.m_prev = o),
          (this.m_jointList = o),
          ++this.m_jointCount,
          (o.m_edgeA.joint = o),
          (o.m_edgeA.other = o.m_bodyB),
          (o.m_edgeA.prev = null),
          (o.m_edgeA.next = o.m_bodyA.m_jointList),
          o.m_bodyA.m_jointList && (o.m_bodyA.m_jointList.prev = o.m_edgeA),
          (o.m_bodyA.m_jointList = o.m_edgeA),
          (o.m_edgeB.joint = o),
          (o.m_edgeB.other = o.m_bodyA),
          (o.m_edgeB.prev = null),
          (o.m_edgeB.next = o.m_bodyB.m_jointList),
          o.m_bodyB.m_jointList && (o.m_bodyB.m_jointList.prev = o.m_edgeB),
          (o.m_bodyB.m_jointList = o.m_edgeB);
        var i = t.bodyA,
          e = t.bodyB;
        if (0 == t.collideConnected)
          for (var n = e.GetContactList(); n; )
            n.other == i && n.contact.FlagForFiltering(), (n = n.next);
        return o;
      }),
      (V.prototype.DestroyJoint = function (t) {
        var o = t.m_collideConnected;
        t.m_prev && (t.m_prev.m_next = t.m_next),
          t.m_next && (t.m_next.m_prev = t.m_prev),
          t == this.m_jointList && (this.m_jointList = t.m_next);
        var i = t.m_bodyA,
          e = t.m_bodyB;
        if (
          (i.SetAwake(!0),
          e.SetAwake(!0),
          t.m_edgeA.prev && (t.m_edgeA.prev.next = t.m_edgeA.next),
          t.m_edgeA.next && (t.m_edgeA.next.prev = t.m_edgeA.prev),
          t.m_edgeA == i.m_jointList && (i.m_jointList = t.m_edgeA.next),
          (t.m_edgeA.prev = null),
          (t.m_edgeA.next = null),
          t.m_edgeB.prev && (t.m_edgeB.prev.next = t.m_edgeB.next),
          t.m_edgeB.next && (t.m_edgeB.next.prev = t.m_edgeB.prev),
          t.m_edgeB == e.m_jointList && (e.m_jointList = t.m_edgeB.next),
          (t.m_edgeB.prev = null),
          (t.m_edgeB.next = null),
          J.Destroy(t, null),
          --this.m_jointCount,
          0 == o)
        )
          for (var n = e.GetContactList(); n; )
            n.other == i && n.contact.FlagForFiltering(), (n = n.next);
      }),
      (V.prototype.AddController = function (t) {
        return (
          (t.m_next = this.m_controllerList),
          (t.m_prev = null),
          (this.m_controllerList = t),
          (t.m_world = this),
          this.m_controllerCount++,
          t
        );
      }),
      (V.prototype.RemoveController = function (t) {
        t.m_prev && (t.m_prev.m_next = t.m_next),
          t.m_next && (t.m_next.m_prev = t.m_prev),
          this.m_controllerList == t && (this.m_controllerList = t.m_next),
          this.m_controllerCount--;
      }),
      (V.prototype.CreateController = function (t) {
        if (t.m_world != this)
          throw new Error("Controller can only be a member of one world");
        return (
          (t.m_next = this.m_controllerList),
          (t.m_prev = null),
          this.m_controllerList && (this.m_controllerList.m_prev = t),
          (this.m_controllerList = t),
          ++this.m_controllerCount,
          (t.m_world = this),
          t
        );
      }),
      (V.prototype.DestroyController = function (t) {
        t.Clear(),
          t.m_next && (t.m_next.m_prev = t.m_prev),
          t.m_prev && (t.m_prev.m_next = t.m_next),
          t == this.m_controllerList && (this.m_controllerList = t.m_next),
          --this.m_controllerCount;
      }),
      (V.prototype.SetWarmStarting = function (t) {
        V.m_warmStarting = t;
      }),
      (V.prototype.SetContinuousPhysics = function (t) {
        V.m_continuousPhysics = t;
      }),
      (V.prototype.GetBodyCount = function () {
        return this.m_bodyCount;
      }),
      (V.prototype.GetJointCount = function () {
        return this.m_jointCount;
      }),
      (V.prototype.GetContactCount = function () {
        return this.m_contactCount;
      }),
      (V.prototype.SetGravity = function (t) {
        this.m_gravity = t;
      }),
      (V.prototype.GetGravity = function () {
        return this.m_gravity;
      }),
      (V.prototype.GetGroundBody = function () {
        return this.m_groundBody;
      }),
      (V.prototype.Step = function (t, o, i) {
        void 0 === t && (t = 0),
          void 0 === o && (o = 0),
          void 0 === i && (i = 0),
          this.m_flags & V.e_newFixture &&
            (this.m_contactManager.FindNewContacts(),
            (this.m_flags &= ~V.e_newFixture)),
          (this.m_flags |= V.e_locked);
        var e = V.s_timestep2;
        (e.dt = t),
          (e.velocityIterations = o),
          (e.positionIterations = i),
          t > 0 ? (e.inv_dt = 1 / t) : (e.inv_dt = 0),
          (e.dtRatio = this.m_inv_dt0 * t),
          (e.warmStarting = V.m_warmStarting),
          this.m_contactManager.Collide(),
          e.dt > 0 && this.Solve(e),
          V.m_continuousPhysics && e.dt > 0 && this.SolveTOI(e),
          e.dt > 0 && (this.m_inv_dt0 = e.inv_dt),
          (this.m_flags &= ~V.e_locked);
      }),
      (V.prototype.ClearForces = function () {
        for (var t = this.m_bodyList; t; t = t.m_next)
          t.m_force.SetZero(), (t.m_torque = 0);
      }),
      (V.prototype.DrawDebugData = function () {
        if (null != this.m_debugDraw) {
          this.m_debugDraw.m_sprite.graphics.clear();
          var t,
            o,
            i,
            s,
            a,
            l,
            m = this.m_debugDraw.GetFlags(),
            c =
              (new e(),
              new e(),
              new e(),
              new r(),
              new r(),
              [new e(), new e(), new e(), new e()]),
            _ = new n(0, 0, 0);
          if (m & B.e_shapeBit)
            for (t = this.m_bodyList; t; t = t.m_next)
              for (l = t.m_xf, o = t.GetFixtureList(); o; o = o.m_next)
                (i = o.GetShape()),
                  0 == t.IsActive()
                    ? (_.Set(0.5, 0.5, 0.3), this.DrawShape(i, l, _))
                    : t.GetType() == x.b2_staticBody
                      ? (_.Set(0.5, 0.9, 0.5), this.DrawShape(i, l, _))
                      : t.GetType() == x.b2_kinematicBody
                        ? (_.Set(0.5, 0.5, 0.9), this.DrawShape(i, l, _))
                        : 0 == t.IsAwake()
                          ? (_.Set(0.6, 0.6, 0.6), this.DrawShape(i, l, _))
                          : (_.Set(0.9, 0.7, 0.7), this.DrawShape(i, l, _));
          if (m & B.e_jointBit)
            for (s = this.m_jointList; s; s = s.m_next) this.DrawJoint(s);
          if (m & B.e_controllerBit)
            for (var h = this.m_controllerList; h; h = h.m_next)
              h.Draw(this.m_debugDraw);
          if (m & B.e_pairBit) {
            _.Set(0.3, 0.9, 0.9);
            for (
              var p = this.m_contactManager.m_contactList;
              p;
              p = p.GetNext()
            ) {
              var y = p.GetFixtureA(),
                u = p.GetFixtureB(),
                f = y.GetAABB().GetCenter(),
                d = u.GetAABB().GetCenter();
              this.m_debugDraw.DrawSegment(f, d, _);
            }
          }
          if (m & B.e_aabbBit)
            for (
              a = this.m_contactManager.m_broadPhase,
                c = [new e(), new e(), new e(), new e()],
                t = this.m_bodyList;
              t;
              t = t.GetNext()
            )
              if (0 != t.IsActive())
                for (o = t.GetFixtureList(); o; o = o.GetNext()) {
                  var b = a.GetFatAABB(o.m_proxy);
                  c[0].Set(b.lowerBound.x, b.lowerBound.y),
                    c[1].Set(b.upperBound.x, b.lowerBound.y),
                    c[2].Set(b.upperBound.x, b.upperBound.y),
                    c[3].Set(b.lowerBound.x, b.upperBound.y),
                    this.m_debugDraw.DrawPolygon(c, 4, _);
                }
          if (m & B.e_centerOfMassBit)
            for (t = this.m_bodyList; t; t = t.m_next)
              (l = V.s_xf),
                (l.R = t.m_xf.R),
                (l.position = t.GetWorldCenter()),
                this.m_debugDraw.DrawTransform(l);
        }
      }),
      (V.prototype.QueryAABB = function (t, o) {
        function i(o) {
          return t(n.GetUserData(o));
        }
        var e = this,
          n = e.m_contactManager.m_broadPhase;
        n.Query(i, o);
      }),
      (V.prototype.QueryShape = function (t, o, e) {
        function n(i) {
          var n = a.GetUserData(i) instanceof S ? a.GetUserData(i) : null;
          return (
            !u.TestOverlap(o, e, n.GetShape(), n.GetBody().GetTransform()) ||
            t(n)
          );
        }
        var s = this;
        void 0 === e && (e = null),
          null == e && ((e = new i()), e.SetIdentity());
        var a = s.m_contactManager.m_broadPhase,
          l = new r();
        o.ComputeAABB(l, e), a.Query(n, l);
      }),
      (V.prototype.QueryPoint = function (t, o) {
        function i(i) {
          var e = n.GetUserData(i) instanceof S ? n.GetUserData(i) : null;
          return !e.TestPoint(o) || t(e);
        }
        var e = this,
          n = e.m_contactManager.m_broadPhase,
          a = new r();
        a.lowerBound.Set(o.x - s.b2_linearSlop, o.y - s.b2_linearSlop),
          a.upperBound.Set(o.x + s.b2_linearSlop, o.y + s.b2_linearSlop),
          n.Query(i, a);
      }),
      (V.prototype.RayCast = function (t, o, i) {
        function n(n, s) {
          var l = r.GetUserData(s),
            m = l instanceof S ? l : null,
            c = m.RayCast(a, n);
          if (c) {
            var _ = a.fraction,
              h = new e((1 - _) * o.x + _ * i.x, (1 - _) * o.y + _ * i.y);
            return t(m, h, a.normal, _);
          }
          return n.maxFraction;
        }
        var s = this,
          r = s.m_contactManager.m_broadPhase,
          a = new c(),
          l = new m(o, i);
        r.RayCast(n, l);
      }),
      (V.prototype.RayCastOne = function (t, o) {
        function i(t, o, i, n) {
          return void 0 === n && (n = 0), (e = t), n;
        }
        var e,
          n = this;
        return n.RayCast(i, t, o), e;
      }),
      (V.prototype.RayCastAll = function (t, o) {
        function i(t, o, i, e) {
          return void 0 === e && (e = 0), (n[n.length] = t), 1;
        }
        var e = this,
          n = new Vector();
        return e.RayCast(i, t, o), n;
      }),
      (V.prototype.GetBodyList = function () {
        return this.m_bodyList;
      }),
      (V.prototype.GetJointList = function () {
        return this.m_jointList;
      }),
      (V.prototype.GetContactList = function () {
        return this.m_contactList;
      }),
      (V.prototype.IsLocked = function () {
        return (this.m_flags & V.e_locked) > 0;
      }),
      (V.prototype.Solve = function (t) {
        for (var o, i = this.m_controllerList; i; i = i.m_next) i.Step(t);
        var e = this.m_island;
        for (
          e.Initialize(
            this.m_bodyCount,
            this.m_contactCount,
            this.m_jointCount,
            null,
            this.m_contactManager.m_contactListener,
            this.m_contactSolver,
          ),
            o = this.m_bodyList;
          o;
          o = o.m_next
        )
          o.m_flags &= ~x.e_islandFlag;
        for (var n = this.m_contactList; n; n = n.m_next)
          n.m_flags &= ~I.e_islandFlag;
        for (var s = this.m_jointList; s; s = s.m_next) s.m_islandFlag = !1;
        for (
          var r = (parseInt(this.m_bodyCount), this.s_stack),
            a = this.m_bodyList;
          a;
          a = a.m_next
        )
          if (
            !(a.m_flags & x.e_islandFlag) &&
            0 != a.IsAwake() &&
            0 != a.IsActive() &&
            a.GetType() != x.b2_staticBody
          ) {
            e.Clear();
            var l = 0;
            for (r[l++] = a, a.m_flags |= x.e_islandFlag; l > 0; )
              if (
                ((o = r[--l]),
                e.AddBody(o),
                0 == o.IsAwake() && o.SetAwake(!0),
                o.GetType() != x.b2_staticBody)
              ) {
                for (var m, c = o.m_contactList; c; c = c.next)
                  c.contact.m_flags & I.e_islandFlag ||
                    (1 != c.contact.IsSensor() &&
                      0 != c.contact.IsEnabled() &&
                      0 != c.contact.IsTouching() &&
                      (e.AddContact(c.contact),
                      (c.contact.m_flags |= I.e_islandFlag),
                      (m = c.other),
                      m.m_flags & x.e_islandFlag ||
                        ((r[l++] = m), (m.m_flags |= x.e_islandFlag))));
                for (var _ = o.m_jointList; _; _ = _.next)
                  1 != _.joint.m_islandFlag &&
                    ((m = _.other),
                    0 != m.IsActive() &&
                      (e.AddJoint(_.joint),
                      (_.joint.m_islandFlag = !0),
                      m.m_flags & x.e_islandFlag ||
                        ((r[l++] = m), (m.m_flags |= x.e_islandFlag))));
              }
            e.Solve(t, this.m_gravity, this.m_allowSleep);
            for (var h = 0; h < e.m_bodyCount; ++h)
              (o = e.m_bodies[h]),
                o.GetType() == x.b2_staticBody &&
                  (o.m_flags &= ~x.e_islandFlag);
          }
        for (h = 0; h < r.length && r[h]; ++h) r[h] = null;
        for (o = this.m_bodyList; o; o = o.m_next)
          0 != o.IsAwake() &&
            0 != o.IsActive() &&
            o.GetType() != x.b2_staticBody &&
            o.SynchronizeFixtures();
        this.m_contactManager.FindNewContacts();
      }),
      (V.prototype.SolveTOI = function (t) {
        var o,
          i,
          e,
          n,
          r,
          a,
          l,
          m = this.m_island;
        m.Initialize(
          this.m_bodyCount,
          s.b2_maxTOIContactsPerIsland,
          s.b2_maxTOIJointsPerIsland,
          null,
          this.m_contactManager.m_contactListener,
          this.m_contactSolver,
        );
        var c = V.s_queue;
        for (o = this.m_bodyList; o; o = o.m_next)
          (o.m_flags &= ~x.e_islandFlag), (o.m_sweep.t0 = 0);
        var _;
        for (_ = this.m_contactList; _; _ = _.m_next)
          _.m_flags &= ~(I.e_toiFlag | I.e_islandFlag);
        for (l = this.m_jointList; l; l = l.m_next) l.m_islandFlag = !1;
        for (;;) {
          var h = null,
            p = 1;
          for (_ = this.m_contactList; _; _ = _.m_next)
            if (
              1 != _.IsSensor() &&
              0 != _.IsEnabled() &&
              0 != _.IsContinuous()
            ) {
              var y = 1;
              if (_.m_flags & I.e_toiFlag) y = _.m_toi;
              else {
                if (
                  ((i = _.m_fixtureA),
                  (e = _.m_fixtureB),
                  (n = i.m_body),
                  (r = e.m_body),
                  !(
                    (n.GetType() == x.b2_dynamicBody && 0 != n.IsAwake()) ||
                    (r.GetType() == x.b2_dynamicBody && 0 != r.IsAwake())
                  ))
                )
                  continue;
                var u = n.m_sweep.t0;
                n.m_sweep.t0 < r.m_sweep.t0
                  ? ((u = r.m_sweep.t0), n.m_sweep.Advance(u))
                  : r.m_sweep.t0 < n.m_sweep.t0 &&
                    ((u = n.m_sweep.t0), r.m_sweep.Advance(u)),
                  (y = _.ComputeTOI(n.m_sweep, r.m_sweep)),
                  s.b2Assert(0 <= y && y <= 1),
                  y > 0 && y < 1 && ((y = (1 - y) * u + y), y > 1 && (y = 1)),
                  (_.m_toi = y),
                  (_.m_flags |= I.e_toiFlag);
              }
              Number.MIN_VALUE < y && y < p && ((h = _), (p = y));
            }
          if (null == h || 1 - 100 * Number.MIN_VALUE < p) break;
          if (
            ((i = h.m_fixtureA),
            (e = h.m_fixtureB),
            (n = i.m_body),
            (r = e.m_body),
            V.s_backupA.Set(n.m_sweep),
            V.s_backupB.Set(r.m_sweep),
            n.Advance(p),
            r.Advance(p),
            h.Update(this.m_contactManager.m_contactListener),
            (h.m_flags &= ~I.e_toiFlag),
            1 != h.IsSensor() && 0 != h.IsEnabled())
          ) {
            if (0 != h.IsTouching()) {
              var f = n;
              f.GetType() != x.b2_dynamicBody && (f = r), m.Clear();
              var d = 0,
                b = 0;
              for (c[d + b++] = f, f.m_flags |= x.e_islandFlag; b > 0; )
                if (
                  ((o = c[d++]),
                  --b,
                  m.AddBody(o),
                  0 == o.IsAwake() && o.SetAwake(!0),
                  o.GetType() == x.b2_dynamicBody)
                ) {
                  for (
                    a = o.m_contactList;
                    a && m.m_contactCount != m.m_contactCapacity;
                    a = a.next
                  )
                    if (
                      !(a.contact.m_flags & I.e_islandFlag) &&
                      1 != a.contact.IsSensor() &&
                      0 != a.contact.IsEnabled() &&
                      0 != a.contact.IsTouching()
                    ) {
                      m.AddContact(a.contact),
                        (a.contact.m_flags |= I.e_islandFlag);
                      var v = a.other;
                      v.m_flags & x.e_islandFlag ||
                        (v.GetType() != x.b2_staticBody &&
                          (v.Advance(p), v.SetAwake(!0)),
                        (c[d + b] = v),
                        ++b,
                        (v.m_flags |= x.e_islandFlag));
                    }
                  for (var D = o.m_jointList; D; D = D.next)
                    m.m_jointCount != m.m_jointCapacity &&
                      1 != D.joint.m_islandFlag &&
                      ((v = D.other),
                      0 != v.IsActive() &&
                        (m.AddJoint(D.joint),
                        (D.joint.m_islandFlag = !0),
                        v.m_flags & x.e_islandFlag ||
                          (v.GetType() != x.b2_staticBody &&
                            (v.Advance(p), v.SetAwake(!0)),
                          (c[d + b] = v),
                          ++b,
                          (v.m_flags |= x.e_islandFlag))));
                }
              var B = V.s_timestep;
              (B.warmStarting = !1),
                (B.dt = (1 - p) * t.dt),
                (B.inv_dt = 1 / B.dt),
                (B.dtRatio = 0),
                (B.velocityIterations = t.velocityIterations),
                (B.positionIterations = t.positionIterations),
                m.SolveTOI(B);
              var C = 0;
              for (C = 0; C < m.m_bodyCount; ++C)
                if (
                  ((o = m.m_bodies[C]),
                  (o.m_flags &= ~x.e_islandFlag),
                  0 != o.IsAwake() && o.GetType() == x.b2_dynamicBody)
                )
                  for (
                    o.SynchronizeFixtures(), a = o.m_contactList;
                    a;
                    a = a.next
                  )
                    a.contact.m_flags &= ~I.e_toiFlag;
              for (C = 0; C < m.m_contactCount; ++C)
                (_ = m.m_contacts[C]),
                  (_.m_flags &= ~(I.e_toiFlag | I.e_islandFlag));
              for (C = 0; C < m.m_jointCount; ++C)
                (l = m.m_joints[C]), (l.m_islandFlag = !1);
              this.m_contactManager.FindNewContacts();
            }
          } else
            n.m_sweep.Set(V.s_backupA),
              r.m_sweep.Set(V.s_backupB),
              n.SynchronizeTransform(),
              r.SynchronizeTransform();
        }
      });
    V.prototype.DrawJoint = function (t) {
      var o = t.GetBodyA(),
        i = t.GetBodyB(),
        e = o.m_xf,
        n = i.m_xf,
        s = e.position,
        r = n.position,
        a = t.GetAnchorA(),
        l = t.GetAnchorB(),
        m = V.s_jointColor;
      switch (t.m_type) {
        case J.e_distanceJoint:
          this.m_debugDraw.DrawSegment(a, l, m);
          break;
        case J.e_pulleyJoint:
          var c = t instanceof F ? t : null,
            _ = c.GetGroundAnchorA(),
            h = c.GetGroundAnchorB();
          this.m_debugDraw.DrawSegment(_, a, m),
            this.m_debugDraw.DrawSegment(h, l, m),
            this.m_debugDraw.DrawSegment(_, h, m);
          break;
        case J.e_mouseJoint:
          this.m_debugDraw.DrawSegment(a, l, m);
          break;
        default:
          o != this.m_groundBody && this.m_debugDraw.DrawSegment(s, a, m),
            this.m_debugDraw.DrawSegment(a, l, m),
            i != this.m_groundBody && this.m_debugDraw.DrawSegment(r, l, m);
      }
    };
    (V.prototype.DrawShape = function (o, i, e) {
      switch (o.m_type) {
        case u.e_circleShape:
          var n = o instanceof _ ? o : null,
            s = t.MulX(i, n.m_p),
            r = n.m_radius,
            a = i.R.col1;
          this.m_debugDraw.DrawSolidCircle(s, r, a, e);
          break;
        case u.e_polygonShape:
          var l = 0,
            m = o instanceof y ? o : null,
            c = parseInt(m.GetVertexCount()),
            p = m.GetVertices(),
            x = new Vector(c);
          for (l = 0; l < c; ++l) x[l] = t.MulX(i, p[l]);
          this.m_debugDraw.DrawSolidPolygon(x, c, e);
          break;
        case u.e_edgeShape:
          var f = o instanceof h ? o : null;
          this.m_debugDraw.DrawSegment(
            t.MulX(i, f.GetVertex1()),
            t.MulX(i, f.GetVertex2()),
            e,
          );
      }
    }),
      Box2D.postDefs.push(function () {
        (Box2D.Dynamics.b2World.s_timestep2 = new M()),
          (Box2D.Dynamics.b2World.s_xf = new i()),
          (Box2D.Dynamics.b2World.s_backupA = new o()),
          (Box2D.Dynamics.b2World.s_backupB = new o()),
          (Box2D.Dynamics.b2World.s_timestep = new M()),
          (Box2D.Dynamics.b2World.s_queue = new Vector()),
          (Box2D.Dynamics.b2World.s_jointColor = new n(0.5, 0.8, 0.8)),
          (Box2D.Dynamics.b2World.e_newFixture = 1),
          (Box2D.Dynamics.b2World.e_locked = 2);
      });
  })(),
  (function () {
    var t = Box2D.Collision.Shapes.b2CircleShape,
      o =
        (Box2D.Collision.Shapes.b2EdgeChainDef,
        Box2D.Collision.Shapes.b2EdgeShape),
      i =
        (Box2D.Collision.Shapes.b2MassData,
        Box2D.Collision.Shapes.b2PolygonShape),
      e = Box2D.Collision.Shapes.b2Shape,
      n = Box2D.Dynamics.Contacts.b2CircleContact,
      s = Box2D.Dynamics.Contacts.b2Contact,
      r = Box2D.Dynamics.Contacts.b2ContactConstraint,
      a = Box2D.Dynamics.Contacts.b2ContactConstraintPoint,
      l = Box2D.Dynamics.Contacts.b2ContactEdge,
      m = Box2D.Dynamics.Contacts.b2ContactFactory,
      c = Box2D.Dynamics.Contacts.b2ContactRegister,
      _ = Box2D.Dynamics.Contacts.b2ContactResult,
      h = Box2D.Dynamics.Contacts.b2ContactSolver,
      p = Box2D.Dynamics.Contacts.b2EdgeAndCircleContact,
      y = Box2D.Dynamics.Contacts.b2NullContact,
      u = Box2D.Dynamics.Contacts.b2PolyAndCircleContact,
      x = Box2D.Dynamics.Contacts.b2PolyAndEdgeContact,
      f = Box2D.Dynamics.Contacts.b2PolygonContact,
      d = Box2D.Dynamics.Contacts.b2PositionSolverManifold,
      b = Box2D.Dynamics.b2Body,
      v =
        (Box2D.Dynamics.b2BodyDef,
        Box2D.Dynamics.b2ContactFilter,
        Box2D.Dynamics.b2ContactImpulse,
        Box2D.Dynamics.b2ContactListener,
        Box2D.Dynamics.b2ContactManager,
        Box2D.Dynamics.b2DebugDraw,
        Box2D.Dynamics.b2DestructionListener,
        Box2D.Dynamics.b2FilterData,
        Box2D.Dynamics.b2Fixture,
        Box2D.Dynamics.b2FixtureDef,
        Box2D.Dynamics.b2Island,
        Box2D.Dynamics.b2TimeStep),
      D =
        (Box2D.Dynamics.b2World,
        Box2D.Common.b2Color,
        Box2D.Common.b2internal,
        Box2D.Common.b2Settings),
      B = Box2D.Common.Math.b2Mat22,
      C = (Box2D.Common.Math.b2Mat33, Box2D.Common.Math.b2Math),
      A =
        (Box2D.Common.Math.b2Sweep,
        Box2D.Common.Math.b2Transform,
        Box2D.Common.Math.b2Vec2),
      S =
        (Box2D.Common.Math.b2Vec3,
        Box2D.Collision.b2AABB,
        Box2D.Collision.b2Bound,
        Box2D.Collision.b2BoundValues,
        Box2D.Collision.b2Collision),
      w = Box2D.Collision.b2ContactID,
      g =
        (Box2D.Collision.b2ContactPoint,
        Box2D.Collision.b2Distance,
        Box2D.Collision.b2DistanceInput,
        Box2D.Collision.b2DistanceOutput,
        Box2D.Collision.b2DistanceProxy,
        Box2D.Collision.b2DynamicTree,
        Box2D.Collision.b2DynamicTreeBroadPhase,
        Box2D.Collision.b2DynamicTreeNode,
        Box2D.Collision.b2DynamicTreePair,
        Box2D.Collision.b2Manifold),
      M =
        (Box2D.Collision.b2ManifoldPoint,
        Box2D.Collision.b2Point,
        Box2D.Collision.b2RayCastInput,
        Box2D.Collision.b2RayCastOutput,
        Box2D.Collision.b2Segment,
        Box2D.Collision.b2SeparationFunction,
        Box2D.Collision.b2Simplex,
        Box2D.Collision.b2SimplexCache,
        Box2D.Collision.b2SimplexVertex,
        Box2D.Collision.b2TimeOfImpact),
      V = Box2D.Collision.b2TOIInput,
      I = Box2D.Collision.b2WorldManifold;
    Box2D.Collision.ClipVertex,
      Box2D.Collision.Features,
      Box2D.Collision.IBroadPhase;
    Box2D.inherit(n, Box2D.Dynamics.Contacts.b2Contact),
      (n.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype),
      (n.b2CircleContact = function () {
        Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments);
      }),
      (n.Create = function (t) {
        return new n();
      }),
      (n.Destroy = function (t, o) {}),
      (n.prototype.Reset = function (t, o) {
        this.__super.Reset.call(this, t, o);
      }),
      (n.prototype.Evaluate = function () {
        var o = this.m_fixtureA.GetBody(),
          i = this.m_fixtureB.GetBody();
        S.CollideCircles(
          this.m_manifold,
          this.m_fixtureA.GetShape() instanceof t
            ? this.m_fixtureA.GetShape()
            : null,
          o.m_xf,
          this.m_fixtureB.GetShape() instanceof t
            ? this.m_fixtureB.GetShape()
            : null,
          i.m_xf,
        );
      }),
      (s.b2Contact = function () {
        (this.m_nodeA = new l()),
          (this.m_nodeB = new l()),
          (this.m_manifold = new g()),
          (this.m_oldManifold = new g());
      }),
      (s.prototype.GetManifold = function () {
        return this.m_manifold;
      }),
      (s.prototype.GetWorldManifold = function (t) {
        var o = this.m_fixtureA.GetBody(),
          i = this.m_fixtureB.GetBody(),
          e = this.m_fixtureA.GetShape(),
          n = this.m_fixtureB.GetShape();
        t.Initialize(
          this.m_manifold,
          o.GetTransform(),
          e.m_radius,
          i.GetTransform(),
          n.m_radius,
        );
      }),
      (s.prototype.IsTouching = function () {
        return (this.m_flags & s.e_touchingFlag) == s.e_touchingFlag;
      }),
      (s.prototype.IsContinuous = function () {
        return (this.m_flags & s.e_continuousFlag) == s.e_continuousFlag;
      }),
      (s.prototype.SetSensor = function (t) {
        t
          ? (this.m_flags |= s.e_sensorFlag)
          : (this.m_flags &= ~s.e_sensorFlag);
      }),
      (s.prototype.IsSensor = function () {
        return (this.m_flags & s.e_sensorFlag) == s.e_sensorFlag;
      }),
      (s.prototype.SetEnabled = function (t) {
        t
          ? (this.m_flags |= s.e_enabledFlag)
          : (this.m_flags &= ~s.e_enabledFlag);
      }),
      (s.prototype.IsEnabled = function () {
        return (this.m_flags & s.e_enabledFlag) == s.e_enabledFlag;
      }),
      (s.prototype.GetNext = function () {
        return this.m_next;
      }),
      (s.prototype.GetFixtureA = function () {
        return this.m_fixtureA;
      }),
      (s.prototype.GetFixtureB = function () {
        return this.m_fixtureB;
      }),
      (s.prototype.FlagForFiltering = function () {
        this.m_flags |= s.e_filterFlag;
      }),
      (s.prototype.b2Contact = function () {}),
      (s.prototype.Reset = function (t, o) {
        if (
          (void 0 === t && (t = null),
          void 0 === o && (o = null),
          (this.m_flags = s.e_enabledFlag),
          !t || !o)
        )
          return (this.m_fixtureA = null), void (this.m_fixtureB = null);
        (t.IsSensor() || o.IsSensor()) && (this.m_flags |= s.e_sensorFlag);
        var i = t.GetBody(),
          e = o.GetBody();
        (i.GetType() != b.b2_dynamicBody ||
          i.IsBullet() ||
          e.GetType() != b.b2_dynamicBody ||
          e.IsBullet()) &&
          (this.m_flags |= s.e_continuousFlag),
          (this.m_fixtureA = t),
          (this.m_fixtureB = o),
          (this.m_manifold.m_pointCount = 0),
          (this.m_prev = null),
          (this.m_next = null),
          (this.m_nodeA.contact = null),
          (this.m_nodeA.prev = null),
          (this.m_nodeA.next = null),
          (this.m_nodeA.other = null),
          (this.m_nodeB.contact = null),
          (this.m_nodeB.prev = null),
          (this.m_nodeB.next = null),
          (this.m_nodeB.other = null);
      }),
      (s.prototype.Update = function (t) {
        var o = this.m_oldManifold;
        (this.m_oldManifold = this.m_manifold),
          (this.m_manifold = o),
          (this.m_flags |= s.e_enabledFlag);
        var i = !1,
          n = (this.m_flags & s.e_touchingFlag) == s.e_touchingFlag,
          r = this.m_fixtureA.m_body,
          a = this.m_fixtureB.m_body,
          l = this.m_fixtureA.m_aabb.TestOverlap(this.m_fixtureB.m_aabb);
        if (this.m_flags & s.e_sensorFlag) {
          if (l) {
            var m = this.m_fixtureA.GetShape(),
              c = this.m_fixtureB.GetShape(),
              _ = r.GetTransform(),
              h = a.GetTransform();
            i = e.TestOverlap(m, _, c, h);
          }
          this.m_manifold.m_pointCount = 0;
        } else {
          if (
            (r.GetType() != b.b2_dynamicBody ||
            r.IsBullet() ||
            a.GetType() != b.b2_dynamicBody ||
            a.IsBullet()
              ? (this.m_flags |= s.e_continuousFlag)
              : (this.m_flags &= ~s.e_continuousFlag),
            l)
          ) {
            this.Evaluate(), (i = this.m_manifold.m_pointCount > 0);
            for (var p = 0; p < this.m_manifold.m_pointCount; ++p) {
              var y = this.m_manifold.m_points[p];
              (y.m_normalImpulse = 0), (y.m_tangentImpulse = 0);
              for (
                var u = y.m_id, x = 0;
                x < this.m_oldManifold.m_pointCount;
                ++x
              ) {
                var f = this.m_oldManifold.m_points[x];
                if (f.m_id.key == u.key) {
                  (y.m_normalImpulse = f.m_normalImpulse),
                    (y.m_tangentImpulse = f.m_tangentImpulse);
                  break;
                }
              }
            }
          } else this.m_manifold.m_pointCount = 0;
          i != n && (r.SetAwake(!0), a.SetAwake(!0));
        }
        i
          ? (this.m_flags |= s.e_touchingFlag)
          : (this.m_flags &= ~s.e_touchingFlag),
          0 == n && 1 == i && t.BeginContact(this),
          1 == n && 0 == i && t.EndContact(this),
          0 == (this.m_flags & s.e_sensorFlag) &&
            t.PreSolve(this, this.m_oldManifold);
      }),
      (s.prototype.Evaluate = function () {}),
      (s.prototype.ComputeTOI = function (t, o) {
        return (
          s.s_input.proxyA.Set(this.m_fixtureA.GetShape()),
          s.s_input.proxyB.Set(this.m_fixtureB.GetShape()),
          (s.s_input.sweepA = t),
          (s.s_input.sweepB = o),
          (s.s_input.tolerance = D.b2_linearSlop),
          M.TimeOfImpact(s.s_input)
        );
      }),
      Box2D.postDefs.push(function () {
        (Box2D.Dynamics.Contacts.b2Contact.e_sensorFlag = 1),
          (Box2D.Dynamics.Contacts.b2Contact.e_continuousFlag = 2),
          (Box2D.Dynamics.Contacts.b2Contact.e_islandFlag = 4),
          (Box2D.Dynamics.Contacts.b2Contact.e_toiFlag = 8),
          (Box2D.Dynamics.Contacts.b2Contact.e_touchingFlag = 16),
          (Box2D.Dynamics.Contacts.b2Contact.e_enabledFlag = 32),
          (Box2D.Dynamics.Contacts.b2Contact.e_filterFlag = 64),
          (Box2D.Dynamics.Contacts.b2Contact.s_input = new V());
      }),
      (r.b2ContactConstraint = function () {
        (this.localPlaneNormal = new A()),
          (this.localPoint = new A()),
          (this.normal = new A()),
          (this.normalMass = new B()),
          (this.K = new B());
      }),
      (r.prototype.b2ContactConstraint = function () {
        this.points = new Vector(D.b2_maxManifoldPoints);
        for (var t = 0; t < D.b2_maxManifoldPoints; t++)
          this.points[t] = new a();
      }),
      (a.b2ContactConstraintPoint = function () {
        (this.localPoint = new A()), (this.rA = new A()), (this.rB = new A());
      }),
      (l.b2ContactEdge = function () {}),
      (m.b2ContactFactory = function () {}),
      (m.prototype.b2ContactFactory = function (t) {
        (this.m_allocator = t), this.InitializeRegisters();
      }),
      (m.prototype.AddType = function (t, o, i, e) {
        void 0 === i && (i = 0),
          void 0 === e && (e = 0),
          (this.m_registers[i][e].createFcn = t),
          (this.m_registers[i][e].destroyFcn = o),
          (this.m_registers[i][e].primary = !0),
          i != e &&
            ((this.m_registers[e][i].createFcn = t),
            (this.m_registers[e][i].destroyFcn = o),
            (this.m_registers[e][i].primary = !1));
      }),
      (m.prototype.InitializeRegisters = function () {
        this.m_registers = new Vector(e.e_shapeTypeCount);
        for (var t = 0; t < e.e_shapeTypeCount; t++) {
          this.m_registers[t] = new Vector(e.e_shapeTypeCount);
          for (var o = 0; o < e.e_shapeTypeCount; o++)
            this.m_registers[t][o] = new c();
        }
        this.AddType(n.Create, n.Destroy, e.e_circleShape, e.e_circleShape),
          this.AddType(u.Create, u.Destroy, e.e_polygonShape, e.e_circleShape),
          this.AddType(f.Create, f.Destroy, e.e_polygonShape, e.e_polygonShape),
          this.AddType(p.Create, p.Destroy, e.e_edgeShape, e.e_circleShape),
          this.AddType(x.Create, x.Destroy, e.e_polygonShape, e.e_edgeShape);
      }),
      (m.prototype.Create = function (t, o) {
        var i,
          e = parseInt(t.GetType()),
          n = parseInt(o.GetType()),
          s = this.m_registers[e][n];
        if (s.pool)
          return (
            (i = s.pool), (s.pool = i.m_next), s.poolCount--, i.Reset(t, o), i
          );
        var r = s.createFcn;
        return null != r
          ? s.primary
            ? ((i = r(this.m_allocator)), i.Reset(t, o), i)
            : ((i = r(this.m_allocator)), i.Reset(o, t), i)
          : null;
      }),
      (m.prototype.Destroy = function (t) {
        t.m_manifold.m_pointCount > 0 &&
          (t.m_fixtureA.m_body.SetAwake(!0), t.m_fixtureB.m_body.SetAwake(!0));
        var o = parseInt(t.m_fixtureA.GetType()),
          i = parseInt(t.m_fixtureB.GetType()),
          e = this.m_registers[o][i];
        e.poolCount++, (t.m_next = e.pool), (e.pool = t);
        var n = e.destroyFcn;
        n(t, this.m_allocator);
      }),
      (c.b2ContactRegister = function () {}),
      (_.b2ContactResult = function () {
        (this.position = new A()), (this.normal = new A()), (this.id = new w());
      }),
      (h.b2ContactSolver = function () {
        (this.m_step = new v()), (this.m_constraints = new Vector());
      }),
      (h.prototype.b2ContactSolver = function () {}),
      (h.prototype.Initialize = function (t, o, i, e) {
        void 0 === i && (i = 0);
        var n;
        this.m_step.Set(t), (this.m_allocator = e);
        var s = 0;
        for (
          this.m_constraintCount = i;
          this.m_constraints.length < this.m_constraintCount;

        )
          this.m_constraints[this.m_constraints.length] = new r();
        for (s = 0; s < i; ++s) {
          n = o[s];
          var a = n.m_fixtureA,
            l = n.m_fixtureB,
            m = a.m_shape,
            c = l.m_shape,
            _ = m.m_radius,
            p = c.m_radius,
            y = a.m_body,
            u = l.m_body,
            x = n.GetManifold(),
            f = D.b2MixFriction(a.GetFriction(), l.GetFriction()),
            d = D.b2MixRestitution(a.GetRestitution(), l.GetRestitution()),
            b = y.m_linearVelocity.x,
            v = y.m_linearVelocity.y,
            B = u.m_linearVelocity.x,
            C = u.m_linearVelocity.y,
            A = y.m_angularVelocity,
            S = u.m_angularVelocity;
          D.b2Assert(x.m_pointCount > 0),
            h.s_worldManifold.Initialize(x, y.m_xf, _, u.m_xf, p);
          var w = h.s_worldManifold.m_normal.x,
            g = h.s_worldManifold.m_normal.y,
            M = this.m_constraints[s];
          (M.bodyA = y),
            (M.bodyB = u),
            (M.manifold = x),
            (M.normal.x = w),
            (M.normal.y = g),
            (M.pointCount = x.m_pointCount),
            (M.friction = f),
            (M.restitution = d),
            (M.localPlaneNormal.x = x.m_localPlaneNormal.x),
            (M.localPlaneNormal.y = x.m_localPlaneNormal.y),
            (M.localPoint.x = x.m_localPoint.x),
            (M.localPoint.y = x.m_localPoint.y),
            (M.radius = _ + p),
            (M.type = x.m_type);
          for (var V = 0; V < M.pointCount; ++V) {
            var I = x.m_points[V],
              G = M.points[V];
            (G.normalImpulse = I.m_normalImpulse),
              (G.tangentImpulse = I.m_tangentImpulse),
              G.localPoint.SetV(I.m_localPoint);
            var L = (G.rA.x = h.s_worldManifold.m_points[V].x - y.m_sweep.c.x),
              J = (G.rA.y = h.s_worldManifold.m_points[V].y - y.m_sweep.c.y),
              F = (G.rB.x = h.s_worldManifold.m_points[V].x - u.m_sweep.c.x),
              P = (G.rB.y = h.s_worldManifold.m_points[V].y - u.m_sweep.c.y),
              R = L * g - J * w,
              T = F * g - P * w;
            (R *= R), (T *= T);
            var k = y.m_invMass + u.m_invMass + y.m_invI * R + u.m_invI * T;
            G.normalMass = 1 / k;
            var N = y.m_mass * y.m_invMass + u.m_mass * u.m_invMass;
            (N += y.m_mass * y.m_invI * R + u.m_mass * u.m_invI * T),
              (G.equalizedMass = 1 / N);
            var z = g,
              E = -w,
              j = L * E - J * z,
              O = F * E - P * z;
            (j *= j), (O *= O);
            var U = y.m_invMass + u.m_invMass + y.m_invI * j + u.m_invI * O;
            (G.tangentMass = 1 / U), (G.velocityBias = 0);
            var q = B + -S * P - b - -A * J,
              K = C + S * F - v - A * L,
              W = M.normal.x * q + M.normal.y * K;
            W < -D.b2_velocityThreshold &&
              (G.velocityBias += -M.restitution * W);
          }
          if (2 == M.pointCount) {
            var X = M.points[0],
              Z = M.points[1],
              H = y.m_invMass,
              Y = y.m_invI,
              Q = u.m_invMass,
              $ = u.m_invI,
              tt = X.rA.x * g - X.rA.y * w,
              ot = X.rB.x * g - X.rB.y * w,
              it = Z.rA.x * g - Z.rA.y * w,
              et = Z.rB.x * g - Z.rB.y * w,
              nt = H + Q + Y * tt * tt + $ * ot * ot,
              st = H + Q + Y * it * it + $ * et * et,
              rt = H + Q + Y * tt * it + $ * ot * et,
              at = 100;
            nt * nt < at * (nt * st - rt * rt)
              ? (M.K.col1.Set(nt, rt),
                M.K.col2.Set(rt, st),
                M.K.GetInverse(M.normalMass))
              : (M.pointCount = 1);
          }
        }
      }),
      (h.prototype.InitVelocityConstraints = function (t) {
        for (var o = 0; o < this.m_constraintCount; ++o) {
          var i = this.m_constraints[o],
            e = i.bodyA,
            n = i.bodyB,
            s = e.m_invMass,
            r = e.m_invI,
            a = n.m_invMass,
            l = n.m_invI,
            m = i.normal.x,
            c = i.normal.y,
            _ = c,
            h = -m,
            p = 0,
            y = 0;
          if (t.warmStarting)
            for (y = i.pointCount, p = 0; p < y; ++p) {
              var u = i.points[p];
              (u.normalImpulse *= t.dtRatio), (u.tangentImpulse *= t.dtRatio);
              var x = u.normalImpulse * m + u.tangentImpulse * _,
                f = u.normalImpulse * c + u.tangentImpulse * h;
              (e.m_angularVelocity -= r * (u.rA.x * f - u.rA.y * x)),
                (e.m_linearVelocity.x -= s * x),
                (e.m_linearVelocity.y -= s * f),
                (n.m_angularVelocity += l * (u.rB.x * f - u.rB.y * x)),
                (n.m_linearVelocity.x += a * x),
                (n.m_linearVelocity.y += a * f);
            }
          else
            for (y = i.pointCount, p = 0; p < y; ++p) {
              var d = i.points[p];
              (d.normalImpulse = 0), (d.tangentImpulse = 0);
            }
        }
      }),
      (h.prototype.SolveVelocityConstraints = function () {
        for (
          var t,
            o,
            i = 0,
            e = 0,
            n = 0,
            s = 0,
            r = 0,
            a = 0,
            l = 0,
            m = 0,
            c = 0,
            _ = 0,
            h = 0,
            p = 0,
            y = 0,
            u = 0,
            x = 0,
            f = 0,
            d = 0;
          d < this.m_constraintCount;
          ++d
        ) {
          var b = this.m_constraints[d],
            v = b.bodyA,
            D = b.bodyB,
            B = v.m_angularVelocity,
            A = D.m_angularVelocity,
            S = v.m_linearVelocity,
            w = D.m_linearVelocity,
            g = v.m_invMass,
            M = v.m_invI,
            V = D.m_invMass,
            I = D.m_invI,
            G = b.normal.x,
            L = b.normal.y,
            J = L,
            F = -G,
            P = b.friction;
          for (i = 0; i < b.pointCount; i++)
            (t = b.points[i]),
              (e = w.x - A * t.rB.y - S.x + B * t.rA.y),
              (n = w.y + A * t.rB.x - S.y - B * t.rA.x),
              (r = e * J + n * F),
              (a = t.tangentMass * -r),
              (l = P * t.normalImpulse),
              (m = C.Clamp(t.tangentImpulse + a, -l, l)),
              (a = m - t.tangentImpulse),
              (c = a * J),
              (_ = a * F),
              (S.x -= g * c),
              (S.y -= g * _),
              (B -= M * (t.rA.x * _ - t.rA.y * c)),
              (w.x += V * c),
              (w.y += V * _),
              (A += I * (t.rB.x * _ - t.rB.y * c)),
              (t.tangentImpulse = m);
          parseInt(b.pointCount);
          if (1 == b.pointCount)
            (t = b.points[0]),
              (e = w.x + -A * t.rB.y - S.x - -B * t.rA.y),
              (n = w.y + A * t.rB.x - S.y - B * t.rA.x),
              (s = e * G + n * L),
              (a = -t.normalMass * (s - t.velocityBias)),
              (m = t.normalImpulse + a),
              (m = m > 0 ? m : 0),
              (a = m - t.normalImpulse),
              (c = a * G),
              (_ = a * L),
              (S.x -= g * c),
              (S.y -= g * _),
              (B -= M * (t.rA.x * _ - t.rA.y * c)),
              (w.x += V * c),
              (w.y += V * _),
              (A += I * (t.rB.x * _ - t.rB.y * c)),
              (t.normalImpulse = m);
          else {
            var R = b.points[0],
              T = b.points[1],
              k = R.normalImpulse,
              N = T.normalImpulse,
              z = w.x - A * R.rB.y - S.x + B * R.rA.y,
              E = w.y + A * R.rB.x - S.y - B * R.rA.x,
              j = w.x - A * T.rB.y - S.x + B * T.rA.y,
              O = w.y + A * T.rB.x - S.y - B * T.rA.x,
              U = z * G + E * L,
              q = j * G + O * L,
              K = U - R.velocityBias,
              W = q - T.velocityBias;
            (o = b.K),
              (K -= o.col1.x * k + o.col2.x * N),
              (W -= o.col1.y * k + o.col2.y * N);
            for (;;) {
              o = b.normalMass;
              var X = -(o.col1.x * K + o.col2.x * W),
                Z = -(o.col1.y * K + o.col2.y * W);
              if (X >= 0 && Z >= 0) {
                (h = X - k),
                  (p = Z - N),
                  (y = h * G),
                  (u = h * L),
                  (x = p * G),
                  (f = p * L),
                  (S.x -= g * (y + x)),
                  (S.y -= g * (u + f)),
                  (B -=
                    M * (R.rA.x * u - R.rA.y * y + T.rA.x * f - T.rA.y * x)),
                  (w.x += V * (y + x)),
                  (w.y += V * (u + f)),
                  (A +=
                    I * (R.rB.x * u - R.rB.y * y + T.rB.x * f - T.rB.y * x)),
                  (R.normalImpulse = X),
                  (T.normalImpulse = Z);
                break;
              }
              if (
                ((X = -R.normalMass * K),
                (Z = 0),
                (U = 0),
                (q = b.K.col1.y * X + W),
                X >= 0 && q >= 0)
              ) {
                (h = X - k),
                  (p = Z - N),
                  (y = h * G),
                  (u = h * L),
                  (x = p * G),
                  (f = p * L),
                  (S.x -= g * (y + x)),
                  (S.y -= g * (u + f)),
                  (B -=
                    M * (R.rA.x * u - R.rA.y * y + T.rA.x * f - T.rA.y * x)),
                  (w.x += V * (y + x)),
                  (w.y += V * (u + f)),
                  (A +=
                    I * (R.rB.x * u - R.rB.y * y + T.rB.x * f - T.rB.y * x)),
                  (R.normalImpulse = X),
                  (T.normalImpulse = Z);
                break;
              }
              if (
                ((X = 0),
                (Z = -T.normalMass * W),
                (U = b.K.col2.x * Z + K),
                (q = 0),
                Z >= 0 && U >= 0)
              ) {
                (h = X - k),
                  (p = Z - N),
                  (y = h * G),
                  (u = h * L),
                  (x = p * G),
                  (f = p * L),
                  (S.x -= g * (y + x)),
                  (S.y -= g * (u + f)),
                  (B -=
                    M * (R.rA.x * u - R.rA.y * y + T.rA.x * f - T.rA.y * x)),
                  (w.x += V * (y + x)),
                  (w.y += V * (u + f)),
                  (A +=
                    I * (R.rB.x * u - R.rB.y * y + T.rB.x * f - T.rB.y * x)),
                  (R.normalImpulse = X),
                  (T.normalImpulse = Z);
                break;
              }
              if (((X = 0), (Z = 0), (U = K), (q = W), U >= 0 && q >= 0)) {
                (h = X - k),
                  (p = Z - N),
                  (y = h * G),
                  (u = h * L),
                  (x = p * G),
                  (f = p * L),
                  (S.x -= g * (y + x)),
                  (S.y -= g * (u + f)),
                  (B -=
                    M * (R.rA.x * u - R.rA.y * y + T.rA.x * f - T.rA.y * x)),
                  (w.x += V * (y + x)),
                  (w.y += V * (u + f)),
                  (A +=
                    I * (R.rB.x * u - R.rB.y * y + T.rB.x * f - T.rB.y * x)),
                  (R.normalImpulse = X),
                  (T.normalImpulse = Z);
                break;
              }
              break;
            }
          }
          (v.m_angularVelocity = B), (D.m_angularVelocity = A);
        }
      }),
      (h.prototype.FinalizeVelocityConstraints = function () {
        for (var t = 0; t < this.m_constraintCount; ++t)
          for (
            var o = this.m_constraints[t], i = o.manifold, e = 0;
            e < o.pointCount;
            ++e
          ) {
            var n = i.m_points[e],
              s = o.points[e];
            (n.m_normalImpulse = s.normalImpulse),
              (n.m_tangentImpulse = s.tangentImpulse);
          }
      }),
      (h.prototype.SolvePositionConstraints = function (t) {
        void 0 === t && (t = 0);
        for (var o = 0, i = 0; i < this.m_constraintCount; i++) {
          var e = this.m_constraints[i],
            n = e.bodyA,
            s = e.bodyB,
            r = n.m_mass * n.m_invMass,
            a = n.m_mass * n.m_invI,
            l = s.m_mass * s.m_invMass,
            m = s.m_mass * s.m_invI;
          h.s_psm.Initialize(e);
          for (var c = h.s_psm.m_normal, _ = 0; _ < e.pointCount; _++) {
            var p = e.points[_],
              y = h.s_psm.m_points[_],
              u = h.s_psm.m_separations[_],
              x = y.x - n.m_sweep.c.x,
              f = y.y - n.m_sweep.c.y,
              d = y.x - s.m_sweep.c.x,
              b = y.y - s.m_sweep.c.y;
            o = o < u ? o : u;
            var v = C.Clamp(
                t * (u + D.b2_linearSlop),
                -D.b2_maxLinearCorrection,
                0,
              ),
              B = -p.equalizedMass * v,
              A = B * c.x,
              S = B * c.y;
            (n.m_sweep.c.x -= r * A),
              (n.m_sweep.c.y -= r * S),
              (n.m_sweep.a -= a * (x * S - f * A)),
              n.SynchronizeTransform(),
              (s.m_sweep.c.x += l * A),
              (s.m_sweep.c.y += l * S),
              (s.m_sweep.a += m * (d * S - b * A)),
              s.SynchronizeTransform();
          }
        }
        return o > -1.5 * D.b2_linearSlop;
      }),
      Box2D.postDefs.push(function () {
        (Box2D.Dynamics.Contacts.b2ContactSolver.s_worldManifold = new I()),
          (Box2D.Dynamics.Contacts.b2ContactSolver.s_psm = new d());
      }),
      Box2D.inherit(p, Box2D.Dynamics.Contacts.b2Contact),
      (p.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype),
      (p.b2EdgeAndCircleContact = function () {
        Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments);
      }),
      (p.Create = function (t) {
        return new p();
      }),
      (p.Destroy = function (t, o) {}),
      (p.prototype.Reset = function (t, o) {
        this.__super.Reset.call(this, t, o);
      }),
      (p.prototype.Evaluate = function () {
        var i = this.m_fixtureA.GetBody(),
          e = this.m_fixtureB.GetBody();
        this.b2CollideEdgeAndCircle(
          this.m_manifold,
          this.m_fixtureA.GetShape() instanceof o
            ? this.m_fixtureA.GetShape()
            : null,
          i.m_xf,
          this.m_fixtureB.GetShape() instanceof t
            ? this.m_fixtureB.GetShape()
            : null,
          e.m_xf,
        );
      }),
      (p.prototype.b2CollideEdgeAndCircle = function (t, o, i, e, n) {}),
      Box2D.inherit(y, Box2D.Dynamics.Contacts.b2Contact),
      (y.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype),
      (y.b2NullContact = function () {
        Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments);
      }),
      (y.prototype.b2NullContact = function () {
        this.__super.b2Contact.call(this);
      }),
      (y.prototype.Evaluate = function () {}),
      Box2D.inherit(u, Box2D.Dynamics.Contacts.b2Contact),
      (u.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype),
      (u.b2PolyAndCircleContact = function () {
        Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments);
      }),
      (u.Create = function (t) {
        return new u();
      }),
      (u.Destroy = function (t, o) {}),
      (u.prototype.Reset = function (t, o) {
        this.__super.Reset.call(this, t, o),
          D.b2Assert(t.GetType() == e.e_polygonShape),
          D.b2Assert(o.GetType() == e.e_circleShape);
      }),
      (u.prototype.Evaluate = function () {
        var o = this.m_fixtureA.m_body,
          e = this.m_fixtureB.m_body;
        S.CollidePolygonAndCircle(
          this.m_manifold,
          this.m_fixtureA.GetShape() instanceof i
            ? this.m_fixtureA.GetShape()
            : null,
          o.m_xf,
          this.m_fixtureB.GetShape() instanceof t
            ? this.m_fixtureB.GetShape()
            : null,
          e.m_xf,
        );
      }),
      Box2D.inherit(x, Box2D.Dynamics.Contacts.b2Contact),
      (x.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype),
      (x.b2PolyAndEdgeContact = function () {
        Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments);
      }),
      (x.Create = function (t) {
        return new x();
      }),
      (x.Destroy = function (t, o) {}),
      (x.prototype.Reset = function (t, o) {
        this.__super.Reset.call(this, t, o),
          D.b2Assert(t.GetType() == e.e_polygonShape),
          D.b2Assert(o.GetType() == e.e_edgeShape);
      }),
      (x.prototype.Evaluate = function () {
        var t = this.m_fixtureA.GetBody(),
          e = this.m_fixtureB.GetBody();
        this.b2CollidePolyAndEdge(
          this.m_manifold,
          this.m_fixtureA.GetShape() instanceof i
            ? this.m_fixtureA.GetShape()
            : null,
          t.m_xf,
          this.m_fixtureB.GetShape() instanceof o
            ? this.m_fixtureB.GetShape()
            : null,
          e.m_xf,
        );
      }),
      (x.prototype.b2CollidePolyAndEdge = function (t, o, i, e, n) {}),
      Box2D.inherit(f, Box2D.Dynamics.Contacts.b2Contact),
      (f.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype),
      (f.b2PolygonContact = function () {
        Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments);
      }),
      (f.Create = function (t) {
        return new f();
      }),
      (f.Destroy = function (t, o) {}),
      (f.prototype.Reset = function (t, o) {
        this.__super.Reset.call(this, t, o);
      }),
      (f.prototype.Evaluate = function () {
        var t = this.m_fixtureA.GetBody(),
          o = this.m_fixtureB.GetBody();
        S.CollidePolygons(
          this.m_manifold,
          this.m_fixtureA.GetShape() instanceof i
            ? this.m_fixtureA.GetShape()
            : null,
          t.m_xf,
          this.m_fixtureB.GetShape() instanceof i
            ? this.m_fixtureB.GetShape()
            : null,
          o.m_xf,
        );
      }),
      (d.b2PositionSolverManifold = function () {}),
      (d.prototype.b2PositionSolverManifold = function () {
        (this.m_normal = new A()),
          (this.m_separations = new Vector_a2j_Number(D.b2_maxManifoldPoints)),
          (this.m_points = new Vector(D.b2_maxManifoldPoints));
        for (var t = 0; t < D.b2_maxManifoldPoints; t++)
          this.m_points[t] = new A();
      }),
      (d.prototype.Initialize = function (t) {
        D.b2Assert(t.pointCount > 0);
        var o,
          i,
          e = 0,
          n = 0,
          s = 0,
          r = 0,
          a = 0;
        switch (t.type) {
          case g.e_circles:
            (o = t.bodyA.m_xf.R), (i = t.localPoint);
            var l = t.bodyA.m_xf.position.x + (o.col1.x * i.x + o.col2.x * i.y),
              m = t.bodyA.m_xf.position.y + (o.col1.y * i.x + o.col2.y * i.y);
            (o = t.bodyB.m_xf.R), (i = t.points[0].localPoint);
            var c = t.bodyB.m_xf.position.x + (o.col1.x * i.x + o.col2.x * i.y),
              _ = t.bodyB.m_xf.position.y + (o.col1.y * i.x + o.col2.y * i.y),
              h = c - l,
              p = _ - m,
              y = h * h + p * p;
            if (y > Number.MIN_VALUE * Number.MIN_VALUE) {
              var u = Math.sqrt(y);
              (this.m_normal.x = h / u), (this.m_normal.y = p / u);
            } else (this.m_normal.x = 1), (this.m_normal.y = 0);
            (this.m_points[0].x = 0.5 * (l + c)),
              (this.m_points[0].y = 0.5 * (m + _)),
              (this.m_separations[0] =
                h * this.m_normal.x + p * this.m_normal.y - t.radius);
            break;
          case g.e_faceA:
            for (
              o = t.bodyA.m_xf.R,
                i = t.localPlaneNormal,
                this.m_normal.x = o.col1.x * i.x + o.col2.x * i.y,
                this.m_normal.y = o.col1.y * i.x + o.col2.y * i.y,
                o = t.bodyA.m_xf.R,
                i = t.localPoint,
                r = t.bodyA.m_xf.position.x + (o.col1.x * i.x + o.col2.x * i.y),
                a = t.bodyA.m_xf.position.y + (o.col1.y * i.x + o.col2.y * i.y),
                o = t.bodyB.m_xf.R,
                e = 0;
              e < t.pointCount;
              ++e
            )
              (i = t.points[e].localPoint),
                (n =
                  t.bodyB.m_xf.position.x + (o.col1.x * i.x + o.col2.x * i.y)),
                (s =
                  t.bodyB.m_xf.position.y + (o.col1.y * i.x + o.col2.y * i.y)),
                (this.m_separations[e] =
                  (n - r) * this.m_normal.x +
                  (s - a) * this.m_normal.y -
                  t.radius),
                (this.m_points[e].x = n),
                (this.m_points[e].y = s);
            break;
          case g.e_faceB:
            for (
              o = t.bodyB.m_xf.R,
                i = t.localPlaneNormal,
                this.m_normal.x = o.col1.x * i.x + o.col2.x * i.y,
                this.m_normal.y = o.col1.y * i.x + o.col2.y * i.y,
                o = t.bodyB.m_xf.R,
                i = t.localPoint,
                r = t.bodyB.m_xf.position.x + (o.col1.x * i.x + o.col2.x * i.y),
                a = t.bodyB.m_xf.position.y + (o.col1.y * i.x + o.col2.y * i.y),
                o = t.bodyA.m_xf.R,
                e = 0;
              e < t.pointCount;
              ++e
            )
              (i = t.points[e].localPoint),
                (n =
                  t.bodyA.m_xf.position.x + (o.col1.x * i.x + o.col2.x * i.y)),
                (s =
                  t.bodyA.m_xf.position.y + (o.col1.y * i.x + o.col2.y * i.y)),
                (this.m_separations[e] =
                  (n - r) * this.m_normal.x +
                  (s - a) * this.m_normal.y -
                  t.radius),
                this.m_points[e].Set(n, s);
            (this.m_normal.x *= -1), (this.m_normal.y *= -1);
        }
      }),
      Box2D.postDefs.push(function () {
        (Box2D.Dynamics.Contacts.b2PositionSolverManifold.circlePointA =
          new A()),
          (Box2D.Dynamics.Contacts.b2PositionSolverManifold.circlePointB =
            new A());
      });
  })(),
  (function () {
    var t =
        (Box2D.Dynamics.b2Body,
        Box2D.Dynamics.b2BodyDef,
        Box2D.Dynamics.b2ContactFilter,
        Box2D.Dynamics.b2ContactImpulse,
        Box2D.Dynamics.b2ContactListener,
        Box2D.Dynamics.b2ContactManager,
        Box2D.Dynamics.b2DebugDraw,
        Box2D.Dynamics.b2DestructionListener,
        Box2D.Dynamics.b2FilterData,
        Box2D.Dynamics.b2Fixture,
        Box2D.Dynamics.b2FixtureDef,
        Box2D.Dynamics.b2Island,
        Box2D.Dynamics.b2TimeStep,
        Box2D.Dynamics.b2World,
        Box2D.Common.Math.b2Mat22),
      o = (Box2D.Common.Math.b2Mat33, Box2D.Common.Math.b2Math),
      i =
        (Box2D.Common.Math.b2Sweep,
        Box2D.Common.Math.b2Transform,
        Box2D.Common.Math.b2Vec2),
      e = (Box2D.Common.Math.b2Vec3, Box2D.Common.b2Color),
      n =
        (Box2D.Common.b2internal,
        Box2D.Common.b2Settings,
        Box2D.Collision.Shapes.b2CircleShape,
        Box2D.Collision.Shapes.b2EdgeChainDef,
        Box2D.Collision.Shapes.b2EdgeShape,
        Box2D.Collision.Shapes.b2MassData,
        Box2D.Collision.Shapes.b2PolygonShape,
        Box2D.Collision.Shapes.b2Shape,
        Box2D.Dynamics.Controllers.b2BuoyancyController),
      s = Box2D.Dynamics.Controllers.b2ConstantAccelController,
      r = Box2D.Dynamics.Controllers.b2ConstantForceController,
      a = Box2D.Dynamics.Controllers.b2Controller,
      l = Box2D.Dynamics.Controllers.b2ControllerEdge,
      m = Box2D.Dynamics.Controllers.b2GravityController,
      c = Box2D.Dynamics.Controllers.b2TensorDampingController;
    Box2D.inherit(n, Box2D.Dynamics.Controllers.b2Controller),
      (n.prototype.__super = Box2D.Dynamics.Controllers.b2Controller.prototype),
      (n.b2BuoyancyController = function () {
        Box2D.Dynamics.Controllers.b2Controller.b2Controller.apply(
          this,
          arguments,
        ),
          (this.normal = new i(0, -1)),
          (this.offset = 0),
          (this.density = 0),
          (this.velocity = new i(0, 0)),
          (this.linearDrag = 2),
          (this.angularDrag = 1),
          (this.useDensity = !1),
          (this.useWorldGravity = !0),
          (this.gravity = null);
      }),
      (n.prototype.Step = function (t) {
        if (this.m_bodyList) {
          this.useWorldGravity &&
            (this.gravity = this.GetWorld().GetGravity().Copy());
          for (var o = this.m_bodyList; o; o = o.nextBody) {
            var e = o.body;
            if (0 != e.IsAwake()) {
              for (
                var n = new i(),
                  s = new i(),
                  r = 0,
                  a = 0,
                  l = e.GetFixtureList();
                l;
                l = l.GetNext()
              ) {
                var m = new i(),
                  c = l
                    .GetShape()
                    .ComputeSubmergedArea(
                      this.normal,
                      this.offset,
                      e.GetTransform(),
                      m,
                    );
                (r += c), (n.x += c * m.x), (n.y += c * m.y);
                var _ = 0;
                (_ = (this.useDensity, 1)),
                  (a += c * _),
                  (s.x += c * m.x * _),
                  (s.y += c * m.y * _);
              }
              if (
                ((n.x /= r),
                (n.y /= r),
                (s.x /= a),
                (s.y /= a),
                !(r < Number.MIN_VALUE))
              ) {
                var h = this.gravity.GetNegative();
                h.Multiply(this.density * r), e.ApplyForce(h, s);
                var p = e.GetLinearVelocityFromWorldPoint(n);
                p.Subtract(this.velocity),
                  p.Multiply(-this.linearDrag * r),
                  e.ApplyForce(p, n),
                  e.ApplyTorque(
                    (-e.GetInertia() / e.GetMass()) *
                      r *
                      e.GetAngularVelocity() *
                      this.angularDrag,
                  );
              }
            }
          }
        }
      }),
      (n.prototype.Draw = function (t) {
        var o = 1e3,
          n = new i(),
          s = new i();
        (n.x = this.normal.x * this.offset + this.normal.y * o),
          (n.y = this.normal.y * this.offset - this.normal.x * o),
          (s.x = this.normal.x * this.offset - this.normal.y * o),
          (s.y = this.normal.y * this.offset + this.normal.x * o);
        var r = new e(0, 0, 1);
        t.DrawSegment(n, s, r);
      }),
      Box2D.inherit(s, Box2D.Dynamics.Controllers.b2Controller),
      (s.prototype.__super = Box2D.Dynamics.Controllers.b2Controller.prototype),
      (s.b2ConstantAccelController = function () {
        Box2D.Dynamics.Controllers.b2Controller.b2Controller.apply(
          this,
          arguments,
        ),
          (this.A = new i(0, 0));
      }),
      (s.prototype.Step = function (t) {
        for (
          var o = new i(this.A.x * t.dt, this.A.y * t.dt), e = this.m_bodyList;
          e;
          e = e.nextBody
        ) {
          var n = e.body;
          n.IsAwake() &&
            n.SetLinearVelocity(
              new i(
                n.GetLinearVelocity().x + o.x,
                n.GetLinearVelocity().y + o.y,
              ),
            );
        }
      }),
      Box2D.inherit(r, Box2D.Dynamics.Controllers.b2Controller),
      (r.prototype.__super = Box2D.Dynamics.Controllers.b2Controller.prototype),
      (r.b2ConstantForceController = function () {
        Box2D.Dynamics.Controllers.b2Controller.b2Controller.apply(
          this,
          arguments,
        ),
          (this.F = new i(0, 0));
      }),
      (r.prototype.Step = function (t) {
        for (var o = this.m_bodyList; o; o = o.nextBody) {
          var i = o.body;
          i.IsAwake() && i.ApplyForce(this.F, i.GetWorldCenter());
        }
      }),
      (a.b2Controller = function () {}),
      (a.prototype.Step = function (t) {}),
      (a.prototype.Draw = function (t) {}),
      (a.prototype.AddBody = function (t) {
        var o = new l();
        (o.controller = this),
          (o.body = t),
          (o.nextBody = this.m_bodyList),
          (o.prevBody = null),
          (this.m_bodyList = o),
          o.nextBody && (o.nextBody.prevBody = o),
          this.m_bodyCount++,
          (o.nextController = t.m_controllerList),
          (o.prevController = null),
          (t.m_controllerList = o),
          o.nextController && (o.nextController.prevController = o),
          t.m_controllerCount++;
      }),
      (a.prototype.RemoveBody = function (t) {
        for (var o = t.m_controllerList; o && o.controller != this; )
          o = o.nextController;
        o.prevBody && (o.prevBody.nextBody = o.nextBody),
          o.nextBody && (o.nextBody.prevBody = o.prevBody),
          o.nextController &&
            (o.nextController.prevController = o.prevController),
          o.prevController &&
            (o.prevController.nextController = o.nextController),
          this.m_bodyList == o && (this.m_bodyList = o.nextBody),
          t.m_controllerList == o && (t.m_controllerList = o.nextController),
          t.m_controllerCount--,
          this.m_bodyCount--;
      }),
      (a.prototype.Clear = function () {
        for (; this.m_bodyList; ) this.RemoveBody(this.m_bodyList.body);
      }),
      (a.prototype.GetNext = function () {
        return this.m_next;
      }),
      (a.prototype.GetWorld = function () {
        return this.m_world;
      }),
      (a.prototype.GetBodyList = function () {
        return this.m_bodyList;
      }),
      (l.b2ControllerEdge = function () {}),
      Box2D.inherit(m, Box2D.Dynamics.Controllers.b2Controller),
      (m.prototype.__super = Box2D.Dynamics.Controllers.b2Controller.prototype),
      (m.b2GravityController = function () {
        Box2D.Dynamics.Controllers.b2Controller.b2Controller.apply(
          this,
          arguments,
        ),
          (this.G = 1),
          (this.invSqr = !0);
      }),
      (m.prototype.Step = function (t) {
        var o = null,
          e = null,
          n = null,
          s = 0,
          r = null,
          a = null,
          l = null,
          m = 0,
          c = 0,
          _ = 0,
          h = null;
        if (this.invSqr)
          for (o = this.m_bodyList; o; o = o.nextBody)
            for (
              e = o.body,
                n = e.GetWorldCenter(),
                s = e.GetMass(),
                r = this.m_bodyList;
              r != o;
              r = r.nextBody
            )
              (a = r.body),
                (l = a.GetWorldCenter()),
                (m = l.x - n.x),
                (c = l.y - n.y),
                (_ = m * m + c * c),
                _ < Number.MIN_VALUE ||
                  ((h = new i(m, c)),
                  h.Multiply((this.G / _ / Math.sqrt(_)) * s * a.GetMass()),
                  e.IsAwake() && e.ApplyForce(h, n),
                  h.Multiply(-1),
                  a.IsAwake() && a.ApplyForce(h, l));
        else
          for (o = this.m_bodyList; o; o = o.nextBody)
            for (
              e = o.body,
                n = e.GetWorldCenter(),
                s = e.GetMass(),
                r = this.m_bodyList;
              r != o;
              r = r.nextBody
            )
              (a = r.body),
                (l = a.GetWorldCenter()),
                (m = l.x - n.x),
                (c = l.y - n.y),
                (_ = m * m + c * c),
                _ < Number.MIN_VALUE ||
                  ((h = new i(m, c)),
                  h.Multiply((this.G / _) * s * a.GetMass()),
                  e.IsAwake() && e.ApplyForce(h, n),
                  h.Multiply(-1),
                  a.IsAwake() && a.ApplyForce(h, l));
      }),
      Box2D.inherit(c, Box2D.Dynamics.Controllers.b2Controller),
      (c.prototype.__super = Box2D.Dynamics.Controllers.b2Controller.prototype),
      (c.b2TensorDampingController = function () {
        Box2D.Dynamics.Controllers.b2Controller.b2Controller.apply(
          this,
          arguments,
        ),
          (this.T = new t()),
          (this.maxTimestep = 0);
      }),
      (c.prototype.SetAxisAligned = function (t, o) {
        void 0 === t && (t = 0),
          void 0 === o && (o = 0),
          (this.T.col1.x = -t),
          (this.T.col1.y = 0),
          (this.T.col2.x = 0),
          (this.T.col2.y = -o),
          t > 0 || o > 0
            ? (this.maxTimestep = 1 / Math.max(t, o))
            : (this.maxTimestep = 0);
      }),
      (c.prototype.Step = function (t) {
        var e = t.dt;
        if (!(e <= Number.MIN_VALUE)) {
          e > this.maxTimestep &&
            this.maxTimestep > 0 &&
            (e = this.maxTimestep);
          for (var n = this.m_bodyList; n; n = n.nextBody) {
            var s = n.body;
            if (s.IsAwake()) {
              var r = s.GetWorldVector(
                o.MulMV(this.T, s.GetLocalVector(s.GetLinearVelocity())),
              );
              s.SetLinearVelocity(
                new i(
                  s.GetLinearVelocity().x + r.x * e,
                  s.GetLinearVelocity().y + r.y * e,
                ),
              );
            }
          }
        }
      });
  })(),
  (function () {
    var t =
        (Box2D.Common.b2Color,
        Box2D.Common.b2internal,
        Box2D.Common.b2Settings),
      o = Box2D.Common.Math.b2Mat22,
      i = Box2D.Common.Math.b2Mat33,
      e = Box2D.Common.Math.b2Math,
      n =
        (Box2D.Common.Math.b2Sweep,
        Box2D.Common.Math.b2Transform,
        Box2D.Common.Math.b2Vec2),
      s = Box2D.Common.Math.b2Vec3,
      r = Box2D.Dynamics.Joints.b2DistanceJoint,
      a = Box2D.Dynamics.Joints.b2DistanceJointDef,
      l = Box2D.Dynamics.Joints.b2FrictionJoint,
      m = Box2D.Dynamics.Joints.b2FrictionJointDef,
      c = Box2D.Dynamics.Joints.b2GearJoint,
      _ = Box2D.Dynamics.Joints.b2GearJointDef,
      h = Box2D.Dynamics.Joints.b2Jacobian,
      p = Box2D.Dynamics.Joints.b2Joint,
      y = Box2D.Dynamics.Joints.b2JointDef,
      u = Box2D.Dynamics.Joints.b2JointEdge,
      x = Box2D.Dynamics.Joints.b2LineJoint,
      f = Box2D.Dynamics.Joints.b2LineJointDef,
      d = Box2D.Dynamics.Joints.b2MouseJoint,
      b = Box2D.Dynamics.Joints.b2MouseJointDef,
      v = Box2D.Dynamics.Joints.b2PrismaticJoint,
      D = Box2D.Dynamics.Joints.b2PrismaticJointDef,
      B = Box2D.Dynamics.Joints.b2PulleyJoint,
      C = Box2D.Dynamics.Joints.b2PulleyJointDef,
      A = Box2D.Dynamics.Joints.b2RevoluteJoint,
      S = Box2D.Dynamics.Joints.b2RevoluteJointDef,
      w = Box2D.Dynamics.Joints.b2WeldJoint,
      g = Box2D.Dynamics.Joints.b2WeldJointDef;
    Box2D.Dynamics.b2Body,
      Box2D.Dynamics.b2BodyDef,
      Box2D.Dynamics.b2ContactFilter,
      Box2D.Dynamics.b2ContactImpulse,
      Box2D.Dynamics.b2ContactListener,
      Box2D.Dynamics.b2ContactManager,
      Box2D.Dynamics.b2DebugDraw,
      Box2D.Dynamics.b2DestructionListener,
      Box2D.Dynamics.b2FilterData,
      Box2D.Dynamics.b2Fixture,
      Box2D.Dynamics.b2FixtureDef,
      Box2D.Dynamics.b2Island,
      Box2D.Dynamics.b2TimeStep,
      Box2D.Dynamics.b2World;
    Box2D.inherit(r, Box2D.Dynamics.Joints.b2Joint),
      (r.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype),
      (r.b2DistanceJoint = function () {
        Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments),
          (this.m_localAnchor1 = new n()),
          (this.m_localAnchor2 = new n()),
          (this.m_u = new n());
      }),
      (r.prototype.GetAnchorA = function () {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchor1);
      }),
      (r.prototype.GetAnchorB = function () {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchor2);
      }),
      (r.prototype.GetReactionForce = function (t) {
        return (
          void 0 === t && (t = 0),
          new n(
            t * this.m_impulse * this.m_u.x,
            t * this.m_impulse * this.m_u.y,
          )
        );
      }),
      (r.prototype.GetReactionTorque = function (t) {
        return void 0 === t && (t = 0), 0;
      }),
      (r.prototype.GetLength = function () {
        return this.m_length;
      }),
      (r.prototype.SetLength = function (t) {
        void 0 === t && (t = 0), (this.m_length = t);
      }),
      (r.prototype.GetFrequency = function () {
        return this.m_frequencyHz;
      }),
      (r.prototype.SetFrequency = function (t) {
        void 0 === t && (t = 0), (this.m_frequencyHz = t);
      }),
      (r.prototype.GetDampingRatio = function () {
        return this.m_dampingRatio;
      }),
      (r.prototype.SetDampingRatio = function (t) {
        void 0 === t && (t = 0), (this.m_dampingRatio = t);
      }),
      (r.prototype.b2DistanceJoint = function (t) {
        this.__super.b2Joint.call(this, t);
        this.m_localAnchor1.SetV(t.localAnchorA),
          this.m_localAnchor2.SetV(t.localAnchorB),
          (this.m_length = t.length),
          (this.m_frequencyHz = t.frequencyHz),
          (this.m_dampingRatio = t.dampingRatio),
          (this.m_impulse = 0),
          (this.m_gamma = 0),
          (this.m_bias = 0);
      }),
      (r.prototype.InitVelocityConstraints = function (o) {
        var i,
          e = 0,
          n = this.m_bodyA,
          s = this.m_bodyB;
        i = n.m_xf.R;
        var r = this.m_localAnchor1.x - n.m_sweep.localCenter.x,
          a = this.m_localAnchor1.y - n.m_sweep.localCenter.y;
        (e = i.col1.x * r + i.col2.x * a),
          (a = i.col1.y * r + i.col2.y * a),
          (r = e),
          (i = s.m_xf.R);
        var l = this.m_localAnchor2.x - s.m_sweep.localCenter.x,
          m = this.m_localAnchor2.y - s.m_sweep.localCenter.y;
        (e = i.col1.x * l + i.col2.x * m),
          (m = i.col1.y * l + i.col2.y * m),
          (l = e),
          (this.m_u.x = s.m_sweep.c.x + l - n.m_sweep.c.x - r),
          (this.m_u.y = s.m_sweep.c.y + m - n.m_sweep.c.y - a);
        var c = Math.sqrt(this.m_u.x * this.m_u.x + this.m_u.y * this.m_u.y);
        c > t.b2_linearSlop ? this.m_u.Multiply(1 / c) : this.m_u.SetZero();
        var _ = r * this.m_u.y - a * this.m_u.x,
          h = l * this.m_u.y - m * this.m_u.x,
          p = n.m_invMass + n.m_invI * _ * _ + s.m_invMass + s.m_invI * h * h;
        if (((this.m_mass = 0 != p ? 1 / p : 0), this.m_frequencyHz > 0)) {
          var y = c - this.m_length,
            u = 2 * Math.PI * this.m_frequencyHz,
            x = 2 * this.m_mass * this.m_dampingRatio * u,
            f = this.m_mass * u * u;
          (this.m_gamma = o.dt * (x + o.dt * f)),
            (this.m_gamma = 0 != this.m_gamma ? 1 / this.m_gamma : 0),
            (this.m_bias = y * o.dt * f * this.m_gamma),
            (this.m_mass = p + this.m_gamma),
            (this.m_mass = 0 != this.m_mass ? 1 / this.m_mass : 0);
        }
        if (o.warmStarting) {
          this.m_impulse *= o.dtRatio;
          var d = this.m_impulse * this.m_u.x,
            b = this.m_impulse * this.m_u.y;
          (n.m_linearVelocity.x -= n.m_invMass * d),
            (n.m_linearVelocity.y -= n.m_invMass * b),
            (n.m_angularVelocity -= n.m_invI * (r * b - a * d)),
            (s.m_linearVelocity.x += s.m_invMass * d),
            (s.m_linearVelocity.y += s.m_invMass * b),
            (s.m_angularVelocity += s.m_invI * (l * b - m * d));
        } else this.m_impulse = 0;
      }),
      (r.prototype.SolveVelocityConstraints = function (t) {
        var o,
          i = this.m_bodyA,
          e = this.m_bodyB;
        o = i.m_xf.R;
        var n = this.m_localAnchor1.x - i.m_sweep.localCenter.x,
          s = this.m_localAnchor1.y - i.m_sweep.localCenter.y,
          r = o.col1.x * n + o.col2.x * s;
        (s = o.col1.y * n + o.col2.y * s), (n = r), (o = e.m_xf.R);
        var a = this.m_localAnchor2.x - e.m_sweep.localCenter.x,
          l = this.m_localAnchor2.y - e.m_sweep.localCenter.y;
        (r = o.col1.x * a + o.col2.x * l),
          (l = o.col1.y * a + o.col2.y * l),
          (a = r);
        var m = i.m_linearVelocity.x + -i.m_angularVelocity * s,
          c = i.m_linearVelocity.y + i.m_angularVelocity * n,
          _ = e.m_linearVelocity.x + -e.m_angularVelocity * l,
          h = e.m_linearVelocity.y + e.m_angularVelocity * a,
          p = this.m_u.x * (_ - m) + this.m_u.y * (h - c),
          y = -this.m_mass * (p + this.m_bias + this.m_gamma * this.m_impulse);
        this.m_impulse += y;
        var u = y * this.m_u.x,
          x = y * this.m_u.y;
        (i.m_linearVelocity.x -= i.m_invMass * u),
          (i.m_linearVelocity.y -= i.m_invMass * x),
          (i.m_angularVelocity -= i.m_invI * (n * x - s * u)),
          (e.m_linearVelocity.x += e.m_invMass * u),
          (e.m_linearVelocity.y += e.m_invMass * x),
          (e.m_angularVelocity += e.m_invI * (a * x - l * u));
      }),
      (r.prototype.SolvePositionConstraints = function (o) {
        void 0 === o && (o = 0);
        var i;
        if (this.m_frequencyHz > 0) return !0;
        var n = this.m_bodyA,
          s = this.m_bodyB;
        i = n.m_xf.R;
        var r = this.m_localAnchor1.x - n.m_sweep.localCenter.x,
          a = this.m_localAnchor1.y - n.m_sweep.localCenter.y,
          l = i.col1.x * r + i.col2.x * a;
        (a = i.col1.y * r + i.col2.y * a), (r = l), (i = s.m_xf.R);
        var m = this.m_localAnchor2.x - s.m_sweep.localCenter.x,
          c = this.m_localAnchor2.y - s.m_sweep.localCenter.y;
        (l = i.col1.x * m + i.col2.x * c),
          (c = i.col1.y * m + i.col2.y * c),
          (m = l);
        var _ = s.m_sweep.c.x + m - n.m_sweep.c.x - r,
          h = s.m_sweep.c.y + c - n.m_sweep.c.y - a,
          p = Math.sqrt(_ * _ + h * h);
        (_ /= p), (h /= p);
        var y = p - this.m_length;
        y = e.Clamp(y, -t.b2_maxLinearCorrection, t.b2_maxLinearCorrection);
        var u = -this.m_mass * y;
        this.m_u.Set(_, h);
        var x = u * this.m_u.x,
          f = u * this.m_u.y;
        return (
          (n.m_sweep.c.x -= n.m_invMass * x),
          (n.m_sweep.c.y -= n.m_invMass * f),
          (n.m_sweep.a -= n.m_invI * (r * f - a * x)),
          (s.m_sweep.c.x += s.m_invMass * x),
          (s.m_sweep.c.y += s.m_invMass * f),
          (s.m_sweep.a += s.m_invI * (m * f - c * x)),
          n.SynchronizeTransform(),
          s.SynchronizeTransform(),
          e.Abs(y) < t.b2_linearSlop
        );
      }),
      Box2D.inherit(a, Box2D.Dynamics.Joints.b2JointDef),
      (a.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype),
      (a.b2DistanceJointDef = function () {
        Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments),
          (this.localAnchorA = new n()),
          (this.localAnchorB = new n());
      }),
      (a.prototype.b2DistanceJointDef = function () {
        this.__super.b2JointDef.call(this),
          (this.type = p.e_distanceJoint),
          (this.length = 1),
          (this.frequencyHz = 0),
          (this.dampingRatio = 0);
      }),
      (a.prototype.Initialize = function (t, o, i, e) {
        (this.bodyA = t),
          (this.bodyB = o),
          this.localAnchorA.SetV(this.bodyA.GetLocalPoint(i)),
          this.localAnchorB.SetV(this.bodyB.GetLocalPoint(e));
        var n = e.x - i.x,
          s = e.y - i.y;
        (this.length = Math.sqrt(n * n + s * s)),
          (this.frequencyHz = 0),
          (this.dampingRatio = 0);
      }),
      Box2D.inherit(l, Box2D.Dynamics.Joints.b2Joint),
      (l.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype),
      (l.b2FrictionJoint = function () {
        Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments),
          (this.m_localAnchorA = new n()),
          (this.m_localAnchorB = new n()),
          (this.m_linearMass = new o()),
          (this.m_linearImpulse = new n());
      }),
      (l.prototype.GetAnchorA = function () {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchorA);
      }),
      (l.prototype.GetAnchorB = function () {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchorB);
      }),
      (l.prototype.GetReactionForce = function (t) {
        return (
          void 0 === t && (t = 0),
          new n(t * this.m_linearImpulse.x, t * this.m_linearImpulse.y)
        );
      }),
      (l.prototype.GetReactionTorque = function (t) {
        return void 0 === t && (t = 0), t * this.m_angularImpulse;
      }),
      (l.prototype.SetMaxForce = function (t) {
        void 0 === t && (t = 0), (this.m_maxForce = t);
      }),
      (l.prototype.GetMaxForce = function () {
        return this.m_maxForce;
      }),
      (l.prototype.SetMaxTorque = function (t) {
        void 0 === t && (t = 0), (this.m_maxTorque = t);
      }),
      (l.prototype.GetMaxTorque = function () {
        return this.m_maxTorque;
      }),
      (l.prototype.b2FrictionJoint = function (t) {
        this.__super.b2Joint.call(this, t),
          this.m_localAnchorA.SetV(t.localAnchorA),
          this.m_localAnchorB.SetV(t.localAnchorB),
          this.m_linearMass.SetZero(),
          (this.m_angularMass = 0),
          this.m_linearImpulse.SetZero(),
          (this.m_angularImpulse = 0),
          (this.m_maxForce = t.maxForce),
          (this.m_maxTorque = t.maxTorque);
      }),
      (l.prototype.InitVelocityConstraints = function (t) {
        var i,
          e = 0,
          n = this.m_bodyA,
          s = this.m_bodyB;
        i = n.m_xf.R;
        var r = this.m_localAnchorA.x - n.m_sweep.localCenter.x,
          a = this.m_localAnchorA.y - n.m_sweep.localCenter.y;
        (e = i.col1.x * r + i.col2.x * a),
          (a = i.col1.y * r + i.col2.y * a),
          (r = e),
          (i = s.m_xf.R);
        var l = this.m_localAnchorB.x - s.m_sweep.localCenter.x,
          m = this.m_localAnchorB.y - s.m_sweep.localCenter.y;
        (e = i.col1.x * l + i.col2.x * m),
          (m = i.col1.y * l + i.col2.y * m),
          (l = e);
        var c = n.m_invMass,
          _ = s.m_invMass,
          h = n.m_invI,
          p = s.m_invI,
          y = new o();
        if (
          ((y.col1.x = c + _),
          (y.col2.x = 0),
          (y.col1.y = 0),
          (y.col2.y = c + _),
          (y.col1.x += h * a * a),
          (y.col2.x += -h * r * a),
          (y.col1.y += -h * r * a),
          (y.col2.y += h * r * r),
          (y.col1.x += p * m * m),
          (y.col2.x += -p * l * m),
          (y.col1.y += -p * l * m),
          (y.col2.y += p * l * l),
          y.GetInverse(this.m_linearMass),
          (this.m_angularMass = h + p),
          this.m_angularMass > 0 &&
            (this.m_angularMass = 1 / this.m_angularMass),
          t.warmStarting)
        ) {
          (this.m_linearImpulse.x *= t.dtRatio),
            (this.m_linearImpulse.y *= t.dtRatio),
            (this.m_angularImpulse *= t.dtRatio);
          var u = this.m_linearImpulse;
          (n.m_linearVelocity.x -= c * u.x),
            (n.m_linearVelocity.y -= c * u.y),
            (n.m_angularVelocity -=
              h * (r * u.y - a * u.x + this.m_angularImpulse)),
            (s.m_linearVelocity.x += _ * u.x),
            (s.m_linearVelocity.y += _ * u.y),
            (s.m_angularVelocity +=
              p * (l * u.y - m * u.x + this.m_angularImpulse));
        } else this.m_linearImpulse.SetZero(), (this.m_angularImpulse = 0);
      }),
      (l.prototype.SolveVelocityConstraints = function (t) {
        var o,
          i = 0,
          s = this.m_bodyA,
          r = this.m_bodyB,
          a = s.m_linearVelocity,
          l = s.m_angularVelocity,
          m = r.m_linearVelocity,
          c = r.m_angularVelocity,
          _ = s.m_invMass,
          h = r.m_invMass,
          p = s.m_invI,
          y = r.m_invI;
        o = s.m_xf.R;
        var u = this.m_localAnchorA.x - s.m_sweep.localCenter.x,
          x = this.m_localAnchorA.y - s.m_sweep.localCenter.y;
        (i = o.col1.x * u + o.col2.x * x),
          (x = o.col1.y * u + o.col2.y * x),
          (u = i),
          (o = r.m_xf.R);
        var f = this.m_localAnchorB.x - r.m_sweep.localCenter.x,
          d = this.m_localAnchorB.y - r.m_sweep.localCenter.y;
        (i = o.col1.x * f + o.col2.x * d),
          (d = o.col1.y * f + o.col2.y * d),
          (f = i);
        var b = 0,
          v = c - l,
          D = -this.m_angularMass * v,
          B = this.m_angularImpulse;
        (b = t.dt * this.m_maxTorque),
          (this.m_angularImpulse = e.Clamp(this.m_angularImpulse + D, -b, b)),
          (D = this.m_angularImpulse - B),
          (l -= p * D),
          (c += y * D);
        var C = m.x - c * d - a.x + l * x,
          A = m.y + c * f - a.y - l * u,
          S = e.MulMV(this.m_linearMass, new n(-C, -A)),
          w = this.m_linearImpulse.Copy();
        this.m_linearImpulse.Add(S),
          (b = t.dt * this.m_maxForce),
          this.m_linearImpulse.LengthSquared() > b * b &&
            (this.m_linearImpulse.Normalize(),
            this.m_linearImpulse.Multiply(b)),
          (S = e.SubtractVV(this.m_linearImpulse, w)),
          (a.x -= _ * S.x),
          (a.y -= _ * S.y),
          (l -= p * (u * S.y - x * S.x)),
          (m.x += h * S.x),
          (m.y += h * S.y),
          (c += y * (f * S.y - d * S.x)),
          (s.m_angularVelocity = l),
          (r.m_angularVelocity = c);
      }),
      (l.prototype.SolvePositionConstraints = function (t) {
        return void 0 === t && (t = 0), !0;
      }),
      Box2D.inherit(m, Box2D.Dynamics.Joints.b2JointDef),
      (m.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype),
      (m.b2FrictionJointDef = function () {
        Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments),
          (this.localAnchorA = new n()),
          (this.localAnchorB = new n());
      }),
      (m.prototype.b2FrictionJointDef = function () {
        this.__super.b2JointDef.call(this),
          (this.type = p.e_frictionJoint),
          (this.maxForce = 0),
          (this.maxTorque = 0);
      }),
      (m.prototype.Initialize = function (t, o, i) {
        (this.bodyA = t),
          (this.bodyB = o),
          this.localAnchorA.SetV(this.bodyA.GetLocalPoint(i)),
          this.localAnchorB.SetV(this.bodyB.GetLocalPoint(i));
      }),
      Box2D.inherit(c, Box2D.Dynamics.Joints.b2Joint),
      (c.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype),
      (c.b2GearJoint = function () {
        Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments),
          (this.m_groundAnchor1 = new n()),
          (this.m_groundAnchor2 = new n()),
          (this.m_localAnchor1 = new n()),
          (this.m_localAnchor2 = new n()),
          (this.m_J = new h());
      }),
      (c.prototype.GetAnchorA = function () {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchor1);
      }),
      (c.prototype.GetAnchorB = function () {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchor2);
      }),
      (c.prototype.GetReactionForce = function (t) {
        return (
          void 0 === t && (t = 0),
          new n(
            t * this.m_impulse * this.m_J.linearB.x,
            t * this.m_impulse * this.m_J.linearB.y,
          )
        );
      }),
      (c.prototype.GetReactionTorque = function (t) {
        void 0 === t && (t = 0);
        var o = this.m_bodyB.m_xf.R,
          i = this.m_localAnchor1.x - this.m_bodyB.m_sweep.localCenter.x,
          e = this.m_localAnchor1.y - this.m_bodyB.m_sweep.localCenter.y,
          n = o.col1.x * i + o.col2.x * e;
        (e = o.col1.y * i + o.col2.y * e), (i = n);
        var s = this.m_impulse * this.m_J.linearB.x,
          r = this.m_impulse * this.m_J.linearB.y;
        return t * (this.m_impulse * this.m_J.angularB - i * r + e * s);
      }),
      (c.prototype.GetRatio = function () {
        return this.m_ratio;
      }),
      (c.prototype.SetRatio = function (t) {
        void 0 === t && (t = 0), (this.m_ratio = t);
      }),
      (c.prototype.b2GearJoint = function (t) {
        this.__super.b2Joint.call(this, t);
        var o = parseInt(t.joint1.m_type),
          i = parseInt(t.joint2.m_type);
        (this.m_revolute1 = null),
          (this.m_prismatic1 = null),
          (this.m_revolute2 = null),
          (this.m_prismatic2 = null);
        var e = 0,
          n = 0;
        (this.m_ground1 = t.joint1.GetBodyA()),
          (this.m_bodyA = t.joint1.GetBodyB()),
          o == p.e_revoluteJoint
            ? ((this.m_revolute1 = t.joint1 instanceof A ? t.joint1 : null),
              this.m_groundAnchor1.SetV(this.m_revolute1.m_localAnchor1),
              this.m_localAnchor1.SetV(this.m_revolute1.m_localAnchor2),
              (e = this.m_revolute1.GetJointAngle()))
            : ((this.m_prismatic1 = t.joint1 instanceof v ? t.joint1 : null),
              this.m_groundAnchor1.SetV(this.m_prismatic1.m_localAnchor1),
              this.m_localAnchor1.SetV(this.m_prismatic1.m_localAnchor2),
              (e = this.m_prismatic1.GetJointTranslation())),
          (this.m_ground2 = t.joint2.GetBodyA()),
          (this.m_bodyB = t.joint2.GetBodyB()),
          i == p.e_revoluteJoint
            ? ((this.m_revolute2 = t.joint2 instanceof A ? t.joint2 : null),
              this.m_groundAnchor2.SetV(this.m_revolute2.m_localAnchor1),
              this.m_localAnchor2.SetV(this.m_revolute2.m_localAnchor2),
              (n = this.m_revolute2.GetJointAngle()))
            : ((this.m_prismatic2 = t.joint2 instanceof v ? t.joint2 : null),
              this.m_groundAnchor2.SetV(this.m_prismatic2.m_localAnchor1),
              this.m_localAnchor2.SetV(this.m_prismatic2.m_localAnchor2),
              (n = this.m_prismatic2.GetJointTranslation())),
          (this.m_ratio = t.ratio),
          (this.m_constant = e + this.m_ratio * n),
          (this.m_impulse = 0);
      }),
      (c.prototype.InitVelocityConstraints = function (t) {
        var o,
          i,
          e = this.m_ground1,
          n = this.m_ground2,
          s = this.m_bodyA,
          r = this.m_bodyB,
          a = 0,
          l = 0,
          m = 0,
          c = 0,
          _ = 0,
          h = 0,
          p = 0;
        this.m_J.SetZero(),
          this.m_revolute1
            ? ((this.m_J.angularA = -1), (p += s.m_invI))
            : ((o = e.m_xf.R),
              (i = this.m_prismatic1.m_localXAxis1),
              (a = o.col1.x * i.x + o.col2.x * i.y),
              (l = o.col1.y * i.x + o.col2.y * i.y),
              (o = s.m_xf.R),
              (m = this.m_localAnchor1.x - s.m_sweep.localCenter.x),
              (c = this.m_localAnchor1.y - s.m_sweep.localCenter.y),
              (h = o.col1.x * m + o.col2.x * c),
              (c = o.col1.y * m + o.col2.y * c),
              (m = h),
              (_ = m * l - c * a),
              this.m_J.linearA.Set(-a, -l),
              (this.m_J.angularA = -_),
              (p += s.m_invMass + s.m_invI * _ * _)),
          this.m_revolute2
            ? ((this.m_J.angularB = -this.m_ratio),
              (p += this.m_ratio * this.m_ratio * r.m_invI))
            : ((o = n.m_xf.R),
              (i = this.m_prismatic2.m_localXAxis1),
              (a = o.col1.x * i.x + o.col2.x * i.y),
              (l = o.col1.y * i.x + o.col2.y * i.y),
              (o = r.m_xf.R),
              (m = this.m_localAnchor2.x - r.m_sweep.localCenter.x),
              (c = this.m_localAnchor2.y - r.m_sweep.localCenter.y),
              (h = o.col1.x * m + o.col2.x * c),
              (c = o.col1.y * m + o.col2.y * c),
              (m = h),
              (_ = m * l - c * a),
              this.m_J.linearB.Set(-this.m_ratio * a, -this.m_ratio * l),
              (this.m_J.angularB = -this.m_ratio * _),
              (p +=
                this.m_ratio *
                this.m_ratio *
                (r.m_invMass + r.m_invI * _ * _))),
          (this.m_mass = p > 0 ? 1 / p : 0),
          t.warmStarting
            ? ((s.m_linearVelocity.x +=
                s.m_invMass * this.m_impulse * this.m_J.linearA.x),
              (s.m_linearVelocity.y +=
                s.m_invMass * this.m_impulse * this.m_J.linearA.y),
              (s.m_angularVelocity +=
                s.m_invI * this.m_impulse * this.m_J.angularA),
              (r.m_linearVelocity.x +=
                r.m_invMass * this.m_impulse * this.m_J.linearB.x),
              (r.m_linearVelocity.y +=
                r.m_invMass * this.m_impulse * this.m_J.linearB.y),
              (r.m_angularVelocity +=
                r.m_invI * this.m_impulse * this.m_J.angularB))
            : (this.m_impulse = 0);
      }),
      (c.prototype.SolveVelocityConstraints = function (t) {
        var o = this.m_bodyA,
          i = this.m_bodyB,
          e = this.m_J.Compute(
            o.m_linearVelocity,
            o.m_angularVelocity,
            i.m_linearVelocity,
            i.m_angularVelocity,
          ),
          n = -this.m_mass * e;
        (this.m_impulse += n),
          (o.m_linearVelocity.x += o.m_invMass * n * this.m_J.linearA.x),
          (o.m_linearVelocity.y += o.m_invMass * n * this.m_J.linearA.y),
          (o.m_angularVelocity += o.m_invI * n * this.m_J.angularA),
          (i.m_linearVelocity.x += i.m_invMass * n * this.m_J.linearB.x),
          (i.m_linearVelocity.y += i.m_invMass * n * this.m_J.linearB.y),
          (i.m_angularVelocity += i.m_invI * n * this.m_J.angularB);
      }),
      (c.prototype.SolvePositionConstraints = function (o) {
        void 0 === o && (o = 0);
        var i = 0,
          e = this.m_bodyA,
          n = this.m_bodyB,
          s = 0,
          r = 0;
        (s = this.m_revolute1
          ? this.m_revolute1.GetJointAngle()
          : this.m_prismatic1.GetJointTranslation()),
          (r = this.m_revolute2
            ? this.m_revolute2.GetJointAngle()
            : this.m_prismatic2.GetJointTranslation());
        var a = this.m_constant - (s + this.m_ratio * r),
          l = -this.m_mass * a;
        return (
          (e.m_sweep.c.x += e.m_invMass * l * this.m_J.linearA.x),
          (e.m_sweep.c.y += e.m_invMass * l * this.m_J.linearA.y),
          (e.m_sweep.a += e.m_invI * l * this.m_J.angularA),
          (n.m_sweep.c.x += n.m_invMass * l * this.m_J.linearB.x),
          (n.m_sweep.c.y += n.m_invMass * l * this.m_J.linearB.y),
          (n.m_sweep.a += n.m_invI * l * this.m_J.angularB),
          e.SynchronizeTransform(),
          n.SynchronizeTransform(),
          i < t.b2_linearSlop
        );
      }),
      Box2D.inherit(_, Box2D.Dynamics.Joints.b2JointDef),
      (_.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype),
      (_.b2GearJointDef = function () {
        Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
      }),
      (_.prototype.b2GearJointDef = function () {
        this.__super.b2JointDef.call(this),
          (this.type = p.e_gearJoint),
          (this.joint1 = null),
          (this.joint2 = null),
          (this.ratio = 1);
      }),
      (h.b2Jacobian = function () {
        (this.linearA = new n()), (this.linearB = new n());
      }),
      (h.prototype.SetZero = function () {
        this.linearA.SetZero(),
          (this.angularA = 0),
          this.linearB.SetZero(),
          (this.angularB = 0);
      }),
      (h.prototype.Set = function (t, o, i, e) {
        void 0 === o && (o = 0),
          void 0 === e && (e = 0),
          this.linearA.SetV(t),
          (this.angularA = o),
          this.linearB.SetV(i),
          (this.angularB = e);
      }),
      (h.prototype.Compute = function (t, o, i, e) {
        return (
          void 0 === o && (o = 0),
          void 0 === e && (e = 0),
          this.linearA.x * t.x +
            this.linearA.y * t.y +
            this.angularA * o +
            (this.linearB.x * i.x + this.linearB.y * i.y) +
            this.angularB * e
        );
      }),
      (p.b2Joint = function () {
        (this.m_edgeA = new u()),
          (this.m_edgeB = new u()),
          (this.m_localCenterA = new n()),
          (this.m_localCenterB = new n());
      }),
      (p.prototype.GetType = function () {
        return this.m_type;
      }),
      (p.prototype.GetAnchorA = function () {
        return null;
      }),
      (p.prototype.GetAnchorB = function () {
        return null;
      }),
      (p.prototype.GetReactionForce = function (t) {
        return void 0 === t && (t = 0), null;
      }),
      (p.prototype.GetReactionTorque = function (t) {
        return void 0 === t && (t = 0), 0;
      }),
      (p.prototype.GetBodyA = function () {
        return this.m_bodyA;
      }),
      (p.prototype.GetBodyB = function () {
        return this.m_bodyB;
      }),
      (p.prototype.GetNext = function () {
        return this.m_next;
      }),
      (p.prototype.GetUserData = function () {
        return this.m_userData;
      }),
      (p.prototype.SetUserData = function (t) {
        this.m_userData = t;
      }),
      (p.prototype.IsActive = function () {
        return this.m_bodyA.IsActive() && this.m_bodyB.IsActive();
      }),
      (p.Create = function (t, o) {
        var i = null;
        switch (t.type) {
          case p.e_distanceJoint:
            i = new r(t instanceof a ? t : null);
            break;
          case p.e_mouseJoint:
            i = new d(t instanceof b ? t : null);
            break;
          case p.e_prismaticJoint:
            i = new v(t instanceof D ? t : null);
            break;
          case p.e_revoluteJoint:
            i = new A(t instanceof S ? t : null);
            break;
          case p.e_pulleyJoint:
            i = new B(t instanceof C ? t : null);
            break;
          case p.e_gearJoint:
            i = new c(t instanceof _ ? t : null);
            break;
          case p.e_lineJoint:
            i = new x(t instanceof f ? t : null);
            break;
          case p.e_weldJoint:
            i = new w(t instanceof g ? t : null);
            break;
          case p.e_frictionJoint:
            i = new l(t instanceof m ? t : null);
        }
        return i;
      }),
      (p.Destroy = function (t, o) {}),
      (p.prototype.b2Joint = function (o) {
        t.b2Assert(o.bodyA != o.bodyB),
          (this.m_type = o.type),
          (this.m_prev = null),
          (this.m_next = null),
          (this.m_bodyA = o.bodyA),
          (this.m_bodyB = o.bodyB),
          (this.m_collideConnected = o.collideConnected),
          (this.m_islandFlag = !1),
          (this.m_userData = o.userData);
      }),
      (p.prototype.InitVelocityConstraints = function (t) {}),
      (p.prototype.SolveVelocityConstraints = function (t) {}),
      (p.prototype.FinalizeVelocityConstraints = function () {}),
      (p.prototype.SolvePositionConstraints = function (t) {
        return void 0 === t && (t = 0), !1;
      }),
      Box2D.postDefs.push(function () {
        (Box2D.Dynamics.Joints.b2Joint.e_unknownJoint = 0),
          (Box2D.Dynamics.Joints.b2Joint.e_revoluteJoint = 1),
          (Box2D.Dynamics.Joints.b2Joint.e_prismaticJoint = 2),
          (Box2D.Dynamics.Joints.b2Joint.e_distanceJoint = 3),
          (Box2D.Dynamics.Joints.b2Joint.e_pulleyJoint = 4),
          (Box2D.Dynamics.Joints.b2Joint.e_mouseJoint = 5),
          (Box2D.Dynamics.Joints.b2Joint.e_gearJoint = 6),
          (Box2D.Dynamics.Joints.b2Joint.e_lineJoint = 7),
          (Box2D.Dynamics.Joints.b2Joint.e_weldJoint = 8),
          (Box2D.Dynamics.Joints.b2Joint.e_frictionJoint = 9),
          (Box2D.Dynamics.Joints.b2Joint.e_inactiveLimit = 0),
          (Box2D.Dynamics.Joints.b2Joint.e_atLowerLimit = 1),
          (Box2D.Dynamics.Joints.b2Joint.e_atUpperLimit = 2),
          (Box2D.Dynamics.Joints.b2Joint.e_equalLimits = 3);
      }),
      (y.b2JointDef = function () {}),
      (y.prototype.b2JointDef = function () {
        (this.type = p.e_unknownJoint),
          (this.userData = null),
          (this.bodyA = null),
          (this.bodyB = null),
          (this.collideConnected = !1);
      }),
      (u.b2JointEdge = function () {}),
      Box2D.inherit(x, Box2D.Dynamics.Joints.b2Joint),
      (x.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype),
      (x.b2LineJoint = function () {
        Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments),
          (this.m_localAnchor1 = new n()),
          (this.m_localAnchor2 = new n()),
          (this.m_localXAxis1 = new n()),
          (this.m_localYAxis1 = new n()),
          (this.m_axis = new n()),
          (this.m_perp = new n()),
          (this.m_K = new o()),
          (this.m_impulse = new n());
      }),
      (x.prototype.GetAnchorA = function () {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchor1);
      }),
      (x.prototype.GetAnchorB = function () {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchor2);
      }),
      (x.prototype.GetReactionForce = function (t) {
        return (
          void 0 === t && (t = 0),
          new n(
            t *
              (this.m_impulse.x * this.m_perp.x +
                (this.m_motorImpulse + this.m_impulse.y) * this.m_axis.x),
            t *
              (this.m_impulse.x * this.m_perp.y +
                (this.m_motorImpulse + this.m_impulse.y) * this.m_axis.y),
          )
        );
      }),
      (x.prototype.GetReactionTorque = function (t) {
        return void 0 === t && (t = 0), t * this.m_impulse.y;
      }),
      (x.prototype.GetJointTranslation = function () {
        var t = this.m_bodyA,
          o = this.m_bodyB,
          i = t.GetWorldPoint(this.m_localAnchor1),
          e = o.GetWorldPoint(this.m_localAnchor2),
          n = e.x - i.x,
          s = e.y - i.y,
          r = t.GetWorldVector(this.m_localXAxis1),
          a = r.x * n + r.y * s;
        return a;
      }),
      (x.prototype.GetJointSpeed = function () {
        var t,
          o = this.m_bodyA,
          i = this.m_bodyB;
        t = o.m_xf.R;
        var e = this.m_localAnchor1.x - o.m_sweep.localCenter.x,
          n = this.m_localAnchor1.y - o.m_sweep.localCenter.y,
          s = t.col1.x * e + t.col2.x * n;
        (n = t.col1.y * e + t.col2.y * n), (e = s), (t = i.m_xf.R);
        var r = this.m_localAnchor2.x - i.m_sweep.localCenter.x,
          a = this.m_localAnchor2.y - i.m_sweep.localCenter.y;
        (s = t.col1.x * r + t.col2.x * a),
          (a = t.col1.y * r + t.col2.y * a),
          (r = s);
        var l = o.m_sweep.c.x + e,
          m = o.m_sweep.c.y + n,
          c = i.m_sweep.c.x + r,
          _ = i.m_sweep.c.y + a,
          h = c - l,
          p = _ - m,
          y = o.GetWorldVector(this.m_localXAxis1),
          u = o.m_linearVelocity,
          x = i.m_linearVelocity,
          f = o.m_angularVelocity,
          d = i.m_angularVelocity,
          b =
            h * (-f * y.y) +
            p * (f * y.x) +
            (y.x * (x.x + -d * a - u.x - -f * n) +
              y.y * (x.y + d * r - u.y - f * e));
        return b;
      }),
      (x.prototype.IsLimitEnabled = function () {
        return this.m_enableLimit;
      }),
      (x.prototype.EnableLimit = function (t) {
        this.m_bodyA.SetAwake(!0),
          this.m_bodyB.SetAwake(!0),
          (this.m_enableLimit = t);
      }),
      (x.prototype.GetLowerLimit = function () {
        return this.m_lowerTranslation;
      }),
      (x.prototype.GetUpperLimit = function () {
        return this.m_upperTranslation;
      }),
      (x.prototype.SetLimits = function (t, o) {
        void 0 === t && (t = 0),
          void 0 === o && (o = 0),
          this.m_bodyA.SetAwake(!0),
          this.m_bodyB.SetAwake(!0),
          (this.m_lowerTranslation = t),
          (this.m_upperTranslation = o);
      }),
      (x.prototype.IsMotorEnabled = function () {
        return this.m_enableMotor;
      }),
      (x.prototype.EnableMotor = function (t) {
        this.m_bodyA.SetAwake(!0),
          this.m_bodyB.SetAwake(!0),
          (this.m_enableMotor = t);
      }),
      (x.prototype.SetMotorSpeed = function (t) {
        void 0 === t && (t = 0),
          this.m_bodyA.SetAwake(!0),
          this.m_bodyB.SetAwake(!0),
          (this.m_motorSpeed = t);
      }),
      (x.prototype.GetMotorSpeed = function () {
        return this.m_motorSpeed;
      }),
      (x.prototype.SetMaxMotorForce = function (t) {
        void 0 === t && (t = 0),
          this.m_bodyA.SetAwake(!0),
          this.m_bodyB.SetAwake(!0),
          (this.m_maxMotorForce = t);
      }),
      (x.prototype.GetMaxMotorForce = function () {
        return this.m_maxMotorForce;
      }),
      (x.prototype.GetMotorForce = function () {
        return this.m_motorImpulse;
      }),
      (x.prototype.b2LineJoint = function (t) {
        this.__super.b2Joint.call(this, t);
        this.m_localAnchor1.SetV(t.localAnchorA),
          this.m_localAnchor2.SetV(t.localAnchorB),
          this.m_localXAxis1.SetV(t.localAxisA),
          (this.m_localYAxis1.x = -this.m_localXAxis1.y),
          (this.m_localYAxis1.y = this.m_localXAxis1.x),
          this.m_impulse.SetZero(),
          (this.m_motorMass = 0),
          (this.m_motorImpulse = 0),
          (this.m_lowerTranslation = t.lowerTranslation),
          (this.m_upperTranslation = t.upperTranslation),
          (this.m_maxMotorForce = t.maxMotorForce),
          (this.m_motorSpeed = t.motorSpeed),
          (this.m_enableLimit = t.enableLimit),
          (this.m_enableMotor = t.enableMotor),
          (this.m_limitState = p.e_inactiveLimit),
          this.m_axis.SetZero(),
          this.m_perp.SetZero();
      }),
      (x.prototype.InitVelocityConstraints = function (o) {
        var i,
          n = this.m_bodyA,
          s = this.m_bodyB,
          r = 0;
        this.m_localCenterA.SetV(n.GetLocalCenter()),
          this.m_localCenterB.SetV(s.GetLocalCenter());
        var a = n.GetTransform();
        s.GetTransform();
        i = n.m_xf.R;
        var l = this.m_localAnchor1.x - this.m_localCenterA.x,
          m = this.m_localAnchor1.y - this.m_localCenterA.y;
        (r = i.col1.x * l + i.col2.x * m),
          (m = i.col1.y * l + i.col2.y * m),
          (l = r),
          (i = s.m_xf.R);
        var c = this.m_localAnchor2.x - this.m_localCenterB.x,
          _ = this.m_localAnchor2.y - this.m_localCenterB.y;
        (r = i.col1.x * c + i.col2.x * _),
          (_ = i.col1.y * c + i.col2.y * _),
          (c = r);
        var h = s.m_sweep.c.x + c - n.m_sweep.c.x - l,
          y = s.m_sweep.c.y + _ - n.m_sweep.c.y - m;
        (this.m_invMassA = n.m_invMass),
          (this.m_invMassB = s.m_invMass),
          (this.m_invIA = n.m_invI),
          (this.m_invIB = s.m_invI),
          this.m_axis.SetV(e.MulMV(a.R, this.m_localXAxis1)),
          (this.m_a1 = (h + l) * this.m_axis.y - (y + m) * this.m_axis.x),
          (this.m_a2 = c * this.m_axis.y - _ * this.m_axis.x),
          (this.m_motorMass =
            this.m_invMassA +
            this.m_invMassB +
            this.m_invIA * this.m_a1 * this.m_a1 +
            this.m_invIB * this.m_a2 * this.m_a2),
          (this.m_motorMass =
            this.m_motorMass > Number.MIN_VALUE ? 1 / this.m_motorMass : 0),
          this.m_perp.SetV(e.MulMV(a.R, this.m_localYAxis1)),
          (this.m_s1 = (h + l) * this.m_perp.y - (y + m) * this.m_perp.x),
          (this.m_s2 = c * this.m_perp.y - _ * this.m_perp.x);
        var u = this.m_invMassA,
          x = this.m_invMassB,
          f = this.m_invIA,
          d = this.m_invIB;
        if (
          ((this.m_K.col1.x =
            u + x + f * this.m_s1 * this.m_s1 + d * this.m_s2 * this.m_s2),
          (this.m_K.col1.y =
            f * this.m_s1 * this.m_a1 + d * this.m_s2 * this.m_a2),
          (this.m_K.col2.x = this.m_K.col1.y),
          (this.m_K.col2.y =
            u + x + f * this.m_a1 * this.m_a1 + d * this.m_a2 * this.m_a2),
          this.m_enableLimit)
        ) {
          var b = this.m_axis.x * h + this.m_axis.y * y;
          e.Abs(this.m_upperTranslation - this.m_lowerTranslation) <
          2 * t.b2_linearSlop
            ? (this.m_limitState = p.e_equalLimits)
            : b <= this.m_lowerTranslation
              ? this.m_limitState != p.e_atLowerLimit &&
                ((this.m_limitState = p.e_atLowerLimit), (this.m_impulse.y = 0))
              : b >= this.m_upperTranslation
                ? this.m_limitState != p.e_atUpperLimit &&
                  ((this.m_limitState = p.e_atUpperLimit),
                  (this.m_impulse.y = 0))
                : ((this.m_limitState = p.e_inactiveLimit),
                  (this.m_impulse.y = 0));
        } else this.m_limitState = p.e_inactiveLimit;
        if (
          (0 == this.m_enableMotor && (this.m_motorImpulse = 0), o.warmStarting)
        ) {
          (this.m_impulse.x *= o.dtRatio),
            (this.m_impulse.y *= o.dtRatio),
            (this.m_motorImpulse *= o.dtRatio);
          var v =
              this.m_impulse.x * this.m_perp.x +
              (this.m_motorImpulse + this.m_impulse.y) * this.m_axis.x,
            D =
              this.m_impulse.x * this.m_perp.y +
              (this.m_motorImpulse + this.m_impulse.y) * this.m_axis.y,
            B =
              this.m_impulse.x * this.m_s1 +
              (this.m_motorImpulse + this.m_impulse.y) * this.m_a1,
            C =
              this.m_impulse.x * this.m_s2 +
              (this.m_motorImpulse + this.m_impulse.y) * this.m_a2;
          (n.m_linearVelocity.x -= this.m_invMassA * v),
            (n.m_linearVelocity.y -= this.m_invMassA * D),
            (n.m_angularVelocity -= this.m_invIA * B),
            (s.m_linearVelocity.x += this.m_invMassB * v),
            (s.m_linearVelocity.y += this.m_invMassB * D),
            (s.m_angularVelocity += this.m_invIB * C);
        } else this.m_impulse.SetZero(), (this.m_motorImpulse = 0);
      }),
      (x.prototype.SolveVelocityConstraints = function (t) {
        var o = this.m_bodyA,
          i = this.m_bodyB,
          s = o.m_linearVelocity,
          r = o.m_angularVelocity,
          a = i.m_linearVelocity,
          l = i.m_angularVelocity,
          m = 0,
          c = 0,
          _ = 0,
          h = 0;
        if (this.m_enableMotor && this.m_limitState != p.e_equalLimits) {
          var y =
              this.m_axis.x * (a.x - s.x) +
              this.m_axis.y * (a.y - s.y) +
              this.m_a2 * l -
              this.m_a1 * r,
            u = this.m_motorMass * (this.m_motorSpeed - y),
            x = this.m_motorImpulse,
            f = t.dt * this.m_maxMotorForce;
          (this.m_motorImpulse = e.Clamp(this.m_motorImpulse + u, -f, f)),
            (u = this.m_motorImpulse - x),
            (m = u * this.m_axis.x),
            (c = u * this.m_axis.y),
            (_ = u * this.m_a1),
            (h = u * this.m_a2),
            (s.x -= this.m_invMassA * m),
            (s.y -= this.m_invMassA * c),
            (r -= this.m_invIA * _),
            (a.x += this.m_invMassB * m),
            (a.y += this.m_invMassB * c),
            (l += this.m_invIB * h);
        }
        var d =
          this.m_perp.x * (a.x - s.x) +
          this.m_perp.y * (a.y - s.y) +
          this.m_s2 * l -
          this.m_s1 * r;
        if (this.m_enableLimit && this.m_limitState != p.e_inactiveLimit) {
          var b =
              this.m_axis.x * (a.x - s.x) +
              this.m_axis.y * (a.y - s.y) +
              this.m_a2 * l -
              this.m_a1 * r,
            v = this.m_impulse.Copy(),
            D = this.m_K.Solve(new n(), -d, -b);
          this.m_impulse.Add(D),
            this.m_limitState == p.e_atLowerLimit
              ? (this.m_impulse.y = e.Max(this.m_impulse.y, 0))
              : this.m_limitState == p.e_atUpperLimit &&
                (this.m_impulse.y = e.Min(this.m_impulse.y, 0));
          var B = -d - (this.m_impulse.y - v.y) * this.m_K.col2.x,
            C = 0;
          (C = 0 != this.m_K.col1.x ? B / this.m_K.col1.x + v.x : v.x),
            (this.m_impulse.x = C),
            (D.x = this.m_impulse.x - v.x),
            (D.y = this.m_impulse.y - v.y),
            (m = D.x * this.m_perp.x + D.y * this.m_axis.x),
            (c = D.x * this.m_perp.y + D.y * this.m_axis.y),
            (_ = D.x * this.m_s1 + D.y * this.m_a1),
            (h = D.x * this.m_s2 + D.y * this.m_a2),
            (s.x -= this.m_invMassA * m),
            (s.y -= this.m_invMassA * c),
            (r -= this.m_invIA * _),
            (a.x += this.m_invMassB * m),
            (a.y += this.m_invMassB * c),
            (l += this.m_invIB * h);
        } else {
          var A = 0;
          (A = 0 != this.m_K.col1.x ? -d / this.m_K.col1.x : 0),
            (this.m_impulse.x += A),
            (m = A * this.m_perp.x),
            (c = A * this.m_perp.y),
            (_ = A * this.m_s1),
            (h = A * this.m_s2),
            (s.x -= this.m_invMassA * m),
            (s.y -= this.m_invMassA * c),
            (r -= this.m_invIA * _),
            (a.x += this.m_invMassB * m),
            (a.y += this.m_invMassB * c),
            (l += this.m_invIB * h);
        }
        o.m_linearVelocity.SetV(s),
          (o.m_angularVelocity = r),
          i.m_linearVelocity.SetV(a),
          (i.m_angularVelocity = l);
      }),
      (x.prototype.SolvePositionConstraints = function (i) {
        void 0 === i && (i = 0);
        var s,
          r = this.m_bodyA,
          a = this.m_bodyB,
          l = r.m_sweep.c,
          m = r.m_sweep.a,
          c = a.m_sweep.c,
          _ = a.m_sweep.a,
          h = 0,
          p = 0,
          y = 0,
          u = 0,
          x = 0,
          f = 0,
          d = 0,
          b = !1,
          v = 0,
          D = o.FromAngle(m),
          B = o.FromAngle(_);
        s = D;
        var C = this.m_localAnchor1.x - this.m_localCenterA.x,
          A = this.m_localAnchor1.y - this.m_localCenterA.y;
        (h = s.col1.x * C + s.col2.x * A),
          (A = s.col1.y * C + s.col2.y * A),
          (C = h),
          (s = B);
        var S = this.m_localAnchor2.x - this.m_localCenterB.x,
          w = this.m_localAnchor2.y - this.m_localCenterB.y;
        (h = s.col1.x * S + s.col2.x * w),
          (w = s.col1.y * S + s.col2.y * w),
          (S = h);
        var g = c.x + S - l.x - C,
          M = c.y + w - l.y - A;
        if (this.m_enableLimit) {
          (this.m_axis = e.MulMV(D, this.m_localXAxis1)),
            (this.m_a1 = (g + C) * this.m_axis.y - (M + A) * this.m_axis.x),
            (this.m_a2 = S * this.m_axis.y - w * this.m_axis.x);
          var V = this.m_axis.x * g + this.m_axis.y * M;
          e.Abs(this.m_upperTranslation - this.m_lowerTranslation) <
          2 * t.b2_linearSlop
            ? ((v = e.Clamp(
                V,
                -t.b2_maxLinearCorrection,
                t.b2_maxLinearCorrection,
              )),
              (f = e.Abs(V)),
              (b = !0))
            : V <= this.m_lowerTranslation
              ? ((v = e.Clamp(
                  V - this.m_lowerTranslation + t.b2_linearSlop,
                  -t.b2_maxLinearCorrection,
                  0,
                )),
                (f = this.m_lowerTranslation - V),
                (b = !0))
              : V >= this.m_upperTranslation &&
                ((v = e.Clamp(
                  V - this.m_upperTranslation + t.b2_linearSlop,
                  0,
                  t.b2_maxLinearCorrection,
                )),
                (f = V - this.m_upperTranslation),
                (b = !0));
        }
        (this.m_perp = e.MulMV(D, this.m_localYAxis1)),
          (this.m_s1 = (g + C) * this.m_perp.y - (M + A) * this.m_perp.x),
          (this.m_s2 = S * this.m_perp.y - w * this.m_perp.x);
        var I = new n(),
          G = this.m_perp.x * g + this.m_perp.y * M;
        if (((f = e.Max(f, e.Abs(G))), (d = 0), b))
          (p = this.m_invMassA),
            (y = this.m_invMassB),
            (u = this.m_invIA),
            (x = this.m_invIB),
            (this.m_K.col1.x =
              p + y + u * this.m_s1 * this.m_s1 + x * this.m_s2 * this.m_s2),
            (this.m_K.col1.y =
              u * this.m_s1 * this.m_a1 + x * this.m_s2 * this.m_a2),
            (this.m_K.col2.x = this.m_K.col1.y),
            (this.m_K.col2.y =
              p + y + u * this.m_a1 * this.m_a1 + x * this.m_a2 * this.m_a2),
            this.m_K.Solve(I, -G, -v);
        else {
          (p = this.m_invMassA),
            (y = this.m_invMassB),
            (u = this.m_invIA),
            (x = this.m_invIB);
          var L = p + y + u * this.m_s1 * this.m_s1 + x * this.m_s2 * this.m_s2,
            J = 0;
          (J = 0 != L ? -G / L : 0), (I.x = J), (I.y = 0);
        }
        var F = I.x * this.m_perp.x + I.y * this.m_axis.x,
          P = I.x * this.m_perp.y + I.y * this.m_axis.y,
          R = I.x * this.m_s1 + I.y * this.m_a1,
          T = I.x * this.m_s2 + I.y * this.m_a2;
        return (
          (l.x -= this.m_invMassA * F),
          (l.y -= this.m_invMassA * P),
          (m -= this.m_invIA * R),
          (c.x += this.m_invMassB * F),
          (c.y += this.m_invMassB * P),
          (_ += this.m_invIB * T),
          (r.m_sweep.a = m),
          (a.m_sweep.a = _),
          r.SynchronizeTransform(),
          a.SynchronizeTransform(),
          f <= t.b2_linearSlop && d <= t.b2_angularSlop
        );
      }),
      Box2D.inherit(f, Box2D.Dynamics.Joints.b2JointDef),
      (f.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype),
      (f.b2LineJointDef = function () {
        Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments),
          (this.localAnchorA = new n()),
          (this.localAnchorB = new n()),
          (this.localAxisA = new n());
      }),
      (f.prototype.b2LineJointDef = function () {
        this.__super.b2JointDef.call(this),
          (this.type = p.e_lineJoint),
          this.localAxisA.Set(1, 0),
          (this.enableLimit = !1),
          (this.lowerTranslation = 0),
          (this.upperTranslation = 0),
          (this.enableMotor = !1),
          (this.maxMotorForce = 0),
          (this.motorSpeed = 0);
      }),
      (f.prototype.Initialize = function (t, o, i, e) {
        (this.bodyA = t),
          (this.bodyB = o),
          (this.localAnchorA = this.bodyA.GetLocalPoint(i)),
          (this.localAnchorB = this.bodyB.GetLocalPoint(i)),
          (this.localAxisA = this.bodyA.GetLocalVector(e));
      }),
      Box2D.inherit(d, Box2D.Dynamics.Joints.b2Joint),
      (d.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype),
      (d.b2MouseJoint = function () {
        Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments),
          (this.K = new o()),
          (this.K1 = new o()),
          (this.K2 = new o()),
          (this.m_localAnchor = new n()),
          (this.m_target = new n()),
          (this.m_impulse = new n()),
          (this.m_mass = new o()),
          (this.m_C = new n());
      }),
      (d.prototype.GetAnchorA = function () {
        return this.m_target;
      }),
      (d.prototype.GetAnchorB = function () {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchor);
      }),
      (d.prototype.GetReactionForce = function (t) {
        return (
          void 0 === t && (t = 0),
          new n(t * this.m_impulse.x, t * this.m_impulse.y)
        );
      }),
      (d.prototype.GetReactionTorque = function (t) {
        return void 0 === t && (t = 0), 0;
      }),
      (d.prototype.GetTarget = function () {
        return this.m_target;
      }),
      (d.prototype.SetTarget = function (t) {
        0 == this.m_bodyB.IsAwake() && this.m_bodyB.SetAwake(!0),
          (this.m_target = t);
      }),
      (d.prototype.GetMaxForce = function () {
        return this.m_maxForce;
      }),
      (d.prototype.SetMaxForce = function (t) {
        void 0 === t && (t = 0), (this.m_maxForce = t);
      }),
      (d.prototype.GetFrequency = function () {
        return this.m_frequencyHz;
      }),
      (d.prototype.SetFrequency = function (t) {
        void 0 === t && (t = 0), (this.m_frequencyHz = t);
      }),
      (d.prototype.GetDampingRatio = function () {
        return this.m_dampingRatio;
      }),
      (d.prototype.SetDampingRatio = function (t) {
        void 0 === t && (t = 0), (this.m_dampingRatio = t);
      }),
      (d.prototype.b2MouseJoint = function (t) {
        this.__super.b2Joint.call(this, t), this.m_target.SetV(t.target);
        var o = this.m_target.x - this.m_bodyB.m_xf.position.x,
          i = this.m_target.y - this.m_bodyB.m_xf.position.y,
          e = this.m_bodyB.m_xf.R;
        (this.m_localAnchor.x = o * e.col1.x + i * e.col1.y),
          (this.m_localAnchor.y = o * e.col2.x + i * e.col2.y),
          (this.m_maxForce = t.maxForce),
          this.m_impulse.SetZero(),
          (this.m_frequencyHz = t.frequencyHz),
          (this.m_dampingRatio = t.dampingRatio),
          (this.m_beta = 0),
          (this.m_gamma = 0);
      }),
      (d.prototype.InitVelocityConstraints = function (t) {
        var o = this.m_bodyB,
          i = o.GetMass(),
          e = 2 * Math.PI * this.m_frequencyHz,
          n = 2 * i * this.m_dampingRatio * e,
          s = i * e * e;
        (this.m_gamma = t.dt * (n + t.dt * s)),
          (this.m_gamma = 0 != this.m_gamma ? 1 / this.m_gamma : 0),
          (this.m_beta = t.dt * s * this.m_gamma);
        var r;
        r = o.m_xf.R;
        var a = this.m_localAnchor.x - o.m_sweep.localCenter.x,
          l = this.m_localAnchor.y - o.m_sweep.localCenter.y,
          m = r.col1.x * a + r.col2.x * l;
        (l = r.col1.y * a + r.col2.y * l), (a = m);
        var c = o.m_invMass,
          _ = o.m_invI;
        (this.K1.col1.x = c),
          (this.K1.col2.x = 0),
          (this.K1.col1.y = 0),
          (this.K1.col2.y = c),
          (this.K2.col1.x = _ * l * l),
          (this.K2.col2.x = -_ * a * l),
          (this.K2.col1.y = -_ * a * l),
          (this.K2.col2.y = _ * a * a),
          this.K.SetM(this.K1),
          this.K.AddM(this.K2),
          (this.K.col1.x += this.m_gamma),
          (this.K.col2.y += this.m_gamma),
          this.K.GetInverse(this.m_mass),
          (this.m_C.x = o.m_sweep.c.x + a - this.m_target.x),
          (this.m_C.y = o.m_sweep.c.y + l - this.m_target.y),
          (o.m_angularVelocity *= 0.98),
          (this.m_impulse.x *= t.dtRatio),
          (this.m_impulse.y *= t.dtRatio),
          (o.m_linearVelocity.x += c * this.m_impulse.x),
          (o.m_linearVelocity.y += c * this.m_impulse.y),
          (o.m_angularVelocity +=
            _ * (a * this.m_impulse.y - l * this.m_impulse.x));
      }),
      (d.prototype.SolveVelocityConstraints = function (t) {
        var o,
          i = this.m_bodyB,
          e = 0,
          n = 0;
        o = i.m_xf.R;
        var s = this.m_localAnchor.x - i.m_sweep.localCenter.x,
          r = this.m_localAnchor.y - i.m_sweep.localCenter.y;
        (e = o.col1.x * s + o.col2.x * r),
          (r = o.col1.y * s + o.col2.y * r),
          (s = e);
        var a = i.m_linearVelocity.x + -i.m_angularVelocity * r,
          l = i.m_linearVelocity.y + i.m_angularVelocity * s;
        (o = this.m_mass),
          (e = a + this.m_beta * this.m_C.x + this.m_gamma * this.m_impulse.x),
          (n = l + this.m_beta * this.m_C.y + this.m_gamma * this.m_impulse.y);
        var m = -(o.col1.x * e + o.col2.x * n),
          c = -(o.col1.y * e + o.col2.y * n),
          _ = this.m_impulse.x,
          h = this.m_impulse.y;
        (this.m_impulse.x += m), (this.m_impulse.y += c);
        var p = t.dt * this.m_maxForce;
        this.m_impulse.LengthSquared() > p * p &&
          this.m_impulse.Multiply(p / this.m_impulse.Length()),
          (m = this.m_impulse.x - _),
          (c = this.m_impulse.y - h),
          (i.m_linearVelocity.x += i.m_invMass * m),
          (i.m_linearVelocity.y += i.m_invMass * c),
          (i.m_angularVelocity += i.m_invI * (s * c - r * m));
      }),
      (d.prototype.SolvePositionConstraints = function (t) {
        return void 0 === t && (t = 0), !0;
      }),
      Box2D.inherit(b, Box2D.Dynamics.Joints.b2JointDef),
      (b.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype),
      (b.b2MouseJointDef = function () {
        Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments),
          (this.target = new n());
      }),
      (b.prototype.b2MouseJointDef = function () {
        this.__super.b2JointDef.call(this),
          (this.type = p.e_mouseJoint),
          (this.maxForce = 0),
          (this.frequencyHz = 5),
          (this.dampingRatio = 0.7);
      }),
      Box2D.inherit(v, Box2D.Dynamics.Joints.b2Joint),
      (v.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype),
      (v.b2PrismaticJoint = function () {
        Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments),
          (this.m_localAnchor1 = new n()),
          (this.m_localAnchor2 = new n()),
          (this.m_localXAxis1 = new n()),
          (this.m_localYAxis1 = new n()),
          (this.m_axis = new n()),
          (this.m_perp = new n()),
          (this.m_K = new i()),
          (this.m_impulse = new s());
      }),
      (v.prototype.GetAnchorA = function () {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchor1);
      }),
      (v.prototype.GetAnchorB = function () {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchor2);
      }),
      (v.prototype.GetReactionForce = function (t) {
        return (
          void 0 === t && (t = 0),
          new n(
            t *
              (this.m_impulse.x * this.m_perp.x +
                (this.m_motorImpulse + this.m_impulse.z) * this.m_axis.x),
            t *
              (this.m_impulse.x * this.m_perp.y +
                (this.m_motorImpulse + this.m_impulse.z) * this.m_axis.y),
          )
        );
      }),
      (v.prototype.GetReactionTorque = function (t) {
        return void 0 === t && (t = 0), t * this.m_impulse.y;
      }),
      (v.prototype.GetJointTranslation = function () {
        var t = this.m_bodyA,
          o = this.m_bodyB,
          i = t.GetWorldPoint(this.m_localAnchor1),
          e = o.GetWorldPoint(this.m_localAnchor2),
          n = e.x - i.x,
          s = e.y - i.y,
          r = t.GetWorldVector(this.m_localXAxis1),
          a = r.x * n + r.y * s;
        return a;
      }),
      (v.prototype.GetJointSpeed = function () {
        var t,
          o = this.m_bodyA,
          i = this.m_bodyB;
        t = o.m_xf.R;
        var e = this.m_localAnchor1.x - o.m_sweep.localCenter.x,
          n = this.m_localAnchor1.y - o.m_sweep.localCenter.y,
          s = t.col1.x * e + t.col2.x * n;
        (n = t.col1.y * e + t.col2.y * n), (e = s), (t = i.m_xf.R);
        var r = this.m_localAnchor2.x - i.m_sweep.localCenter.x,
          a = this.m_localAnchor2.y - i.m_sweep.localCenter.y;
        (s = t.col1.x * r + t.col2.x * a),
          (a = t.col1.y * r + t.col2.y * a),
          (r = s);
        var l = o.m_sweep.c.x + e,
          m = o.m_sweep.c.y + n,
          c = i.m_sweep.c.x + r,
          _ = i.m_sweep.c.y + a,
          h = c - l,
          p = _ - m,
          y = o.GetWorldVector(this.m_localXAxis1),
          u = o.m_linearVelocity,
          x = i.m_linearVelocity,
          f = o.m_angularVelocity,
          d = i.m_angularVelocity,
          b =
            h * (-f * y.y) +
            p * (f * y.x) +
            (y.x * (x.x + -d * a - u.x - -f * n) +
              y.y * (x.y + d * r - u.y - f * e));
        return b;
      }),
      (v.prototype.IsLimitEnabled = function () {
        return this.m_enableLimit;
      }),
      (v.prototype.EnableLimit = function (t) {
        this.m_bodyA.SetAwake(!0),
          this.m_bodyB.SetAwake(!0),
          (this.m_enableLimit = t);
      }),
      (v.prototype.GetLowerLimit = function () {
        return this.m_lowerTranslation;
      }),
      (v.prototype.GetUpperLimit = function () {
        return this.m_upperTranslation;
      }),
      (v.prototype.SetLimits = function (t, o) {
        void 0 === t && (t = 0),
          void 0 === o && (o = 0),
          this.m_bodyA.SetAwake(!0),
          this.m_bodyB.SetAwake(!0),
          (this.m_lowerTranslation = t),
          (this.m_upperTranslation = o);
      }),
      (v.prototype.IsMotorEnabled = function () {
        return this.m_enableMotor;
      }),
      (v.prototype.EnableMotor = function (t) {
        this.m_bodyA.SetAwake(!0),
          this.m_bodyB.SetAwake(!0),
          (this.m_enableMotor = t);
      }),
      (v.prototype.SetMotorSpeed = function (t) {
        void 0 === t && (t = 0),
          this.m_bodyA.SetAwake(!0),
          this.m_bodyB.SetAwake(!0),
          (this.m_motorSpeed = t);
      }),
      (v.prototype.GetMotorSpeed = function () {
        return this.m_motorSpeed;
      }),
      (v.prototype.SetMaxMotorForce = function (t) {
        void 0 === t && (t = 0),
          this.m_bodyA.SetAwake(!0),
          this.m_bodyB.SetAwake(!0),
          (this.m_maxMotorForce = t);
      }),
      (v.prototype.GetMotorForce = function () {
        return this.m_motorImpulse;
      }),
      (v.prototype.b2PrismaticJoint = function (t) {
        this.__super.b2Joint.call(this, t);
        this.m_localAnchor1.SetV(t.localAnchorA),
          this.m_localAnchor2.SetV(t.localAnchorB),
          this.m_localXAxis1.SetV(t.localAxisA),
          (this.m_localYAxis1.x = -this.m_localXAxis1.y),
          (this.m_localYAxis1.y = this.m_localXAxis1.x),
          (this.m_refAngle = t.referenceAngle),
          this.m_impulse.SetZero(),
          (this.m_motorMass = 0),
          (this.m_motorImpulse = 0),
          (this.m_lowerTranslation = t.lowerTranslation),
          (this.m_upperTranslation = t.upperTranslation),
          (this.m_maxMotorForce = t.maxMotorForce),
          (this.m_motorSpeed = t.motorSpeed),
          (this.m_enableLimit = t.enableLimit),
          (this.m_enableMotor = t.enableMotor),
          (this.m_limitState = p.e_inactiveLimit),
          this.m_axis.SetZero(),
          this.m_perp.SetZero();
      }),
      (v.prototype.InitVelocityConstraints = function (o) {
        var i,
          n = this.m_bodyA,
          s = this.m_bodyB,
          r = 0;
        this.m_localCenterA.SetV(n.GetLocalCenter()),
          this.m_localCenterB.SetV(s.GetLocalCenter());
        var a = n.GetTransform();
        s.GetTransform();
        i = n.m_xf.R;
        var l = this.m_localAnchor1.x - this.m_localCenterA.x,
          m = this.m_localAnchor1.y - this.m_localCenterA.y;
        (r = i.col1.x * l + i.col2.x * m),
          (m = i.col1.y * l + i.col2.y * m),
          (l = r),
          (i = s.m_xf.R);
        var c = this.m_localAnchor2.x - this.m_localCenterB.x,
          _ = this.m_localAnchor2.y - this.m_localCenterB.y;
        (r = i.col1.x * c + i.col2.x * _),
          (_ = i.col1.y * c + i.col2.y * _),
          (c = r);
        var h = s.m_sweep.c.x + c - n.m_sweep.c.x - l,
          y = s.m_sweep.c.y + _ - n.m_sweep.c.y - m;
        (this.m_invMassA = n.m_invMass),
          (this.m_invMassB = s.m_invMass),
          (this.m_invIA = n.m_invI),
          (this.m_invIB = s.m_invI),
          this.m_axis.SetV(e.MulMV(a.R, this.m_localXAxis1)),
          (this.m_a1 = (h + l) * this.m_axis.y - (y + m) * this.m_axis.x),
          (this.m_a2 = c * this.m_axis.y - _ * this.m_axis.x),
          (this.m_motorMass =
            this.m_invMassA +
            this.m_invMassB +
            this.m_invIA * this.m_a1 * this.m_a1 +
            this.m_invIB * this.m_a2 * this.m_a2),
          this.m_motorMass > Number.MIN_VALUE &&
            (this.m_motorMass = 1 / this.m_motorMass),
          this.m_perp.SetV(e.MulMV(a.R, this.m_localYAxis1)),
          (this.m_s1 = (h + l) * this.m_perp.y - (y + m) * this.m_perp.x),
          (this.m_s2 = c * this.m_perp.y - _ * this.m_perp.x);
        var u = this.m_invMassA,
          x = this.m_invMassB,
          f = this.m_invIA,
          d = this.m_invIB;
        if (
          ((this.m_K.col1.x =
            u + x + f * this.m_s1 * this.m_s1 + d * this.m_s2 * this.m_s2),
          (this.m_K.col1.y = f * this.m_s1 + d * this.m_s2),
          (this.m_K.col1.z =
            f * this.m_s1 * this.m_a1 + d * this.m_s2 * this.m_a2),
          (this.m_K.col2.x = this.m_K.col1.y),
          (this.m_K.col2.y = f + d),
          (this.m_K.col2.z = f * this.m_a1 + d * this.m_a2),
          (this.m_K.col3.x = this.m_K.col1.z),
          (this.m_K.col3.y = this.m_K.col2.z),
          (this.m_K.col3.z =
            u + x + f * this.m_a1 * this.m_a1 + d * this.m_a2 * this.m_a2),
          this.m_enableLimit)
        ) {
          var b = this.m_axis.x * h + this.m_axis.y * y;
          e.Abs(this.m_upperTranslation - this.m_lowerTranslation) <
          2 * t.b2_linearSlop
            ? (this.m_limitState = p.e_equalLimits)
            : b <= this.m_lowerTranslation
              ? this.m_limitState != p.e_atLowerLimit &&
                ((this.m_limitState = p.e_atLowerLimit), (this.m_impulse.z = 0))
              : b >= this.m_upperTranslation
                ? this.m_limitState != p.e_atUpperLimit &&
                  ((this.m_limitState = p.e_atUpperLimit),
                  (this.m_impulse.z = 0))
                : ((this.m_limitState = p.e_inactiveLimit),
                  (this.m_impulse.z = 0));
        } else this.m_limitState = p.e_inactiveLimit;
        if (
          (0 == this.m_enableMotor && (this.m_motorImpulse = 0), o.warmStarting)
        ) {
          (this.m_impulse.x *= o.dtRatio),
            (this.m_impulse.y *= o.dtRatio),
            (this.m_motorImpulse *= o.dtRatio);
          var v =
              this.m_impulse.x * this.m_perp.x +
              (this.m_motorImpulse + this.m_impulse.z) * this.m_axis.x,
            D =
              this.m_impulse.x * this.m_perp.y +
              (this.m_motorImpulse + this.m_impulse.z) * this.m_axis.y,
            B =
              this.m_impulse.x * this.m_s1 +
              this.m_impulse.y +
              (this.m_motorImpulse + this.m_impulse.z) * this.m_a1,
            C =
              this.m_impulse.x * this.m_s2 +
              this.m_impulse.y +
              (this.m_motorImpulse + this.m_impulse.z) * this.m_a2;
          (n.m_linearVelocity.x -= this.m_invMassA * v),
            (n.m_linearVelocity.y -= this.m_invMassA * D),
            (n.m_angularVelocity -= this.m_invIA * B),
            (s.m_linearVelocity.x += this.m_invMassB * v),
            (s.m_linearVelocity.y += this.m_invMassB * D),
            (s.m_angularVelocity += this.m_invIB * C);
        } else this.m_impulse.SetZero(), (this.m_motorImpulse = 0);
      }),
      (v.prototype.SolveVelocityConstraints = function (t) {
        var o = this.m_bodyA,
          i = this.m_bodyB,
          r = o.m_linearVelocity,
          a = o.m_angularVelocity,
          l = i.m_linearVelocity,
          m = i.m_angularVelocity,
          c = 0,
          _ = 0,
          h = 0,
          y = 0;
        if (this.m_enableMotor && this.m_limitState != p.e_equalLimits) {
          var u =
              this.m_axis.x * (l.x - r.x) +
              this.m_axis.y * (l.y - r.y) +
              this.m_a2 * m -
              this.m_a1 * a,
            x = this.m_motorMass * (this.m_motorSpeed - u),
            f = this.m_motorImpulse,
            d = t.dt * this.m_maxMotorForce;
          (this.m_motorImpulse = e.Clamp(this.m_motorImpulse + x, -d, d)),
            (x = this.m_motorImpulse - f),
            (c = x * this.m_axis.x),
            (_ = x * this.m_axis.y),
            (h = x * this.m_a1),
            (y = x * this.m_a2),
            (r.x -= this.m_invMassA * c),
            (r.y -= this.m_invMassA * _),
            (a -= this.m_invIA * h),
            (l.x += this.m_invMassB * c),
            (l.y += this.m_invMassB * _),
            (m += this.m_invIB * y);
        }
        var b =
            this.m_perp.x * (l.x - r.x) +
            this.m_perp.y * (l.y - r.y) +
            this.m_s2 * m -
            this.m_s1 * a,
          v = m - a;
        if (this.m_enableLimit && this.m_limitState != p.e_inactiveLimit) {
          var D =
              this.m_axis.x * (l.x - r.x) +
              this.m_axis.y * (l.y - r.y) +
              this.m_a2 * m -
              this.m_a1 * a,
            B = this.m_impulse.Copy(),
            C = this.m_K.Solve33(new s(), -b, -v, -D);
          this.m_impulse.Add(C),
            this.m_limitState == p.e_atLowerLimit
              ? (this.m_impulse.z = e.Max(this.m_impulse.z, 0))
              : this.m_limitState == p.e_atUpperLimit &&
                (this.m_impulse.z = e.Min(this.m_impulse.z, 0));
          var A = -b - (this.m_impulse.z - B.z) * this.m_K.col3.x,
            S = -v - (this.m_impulse.z - B.z) * this.m_K.col3.y,
            w = this.m_K.Solve22(new n(), A, S);
          (w.x += B.x),
            (w.y += B.y),
            (this.m_impulse.x = w.x),
            (this.m_impulse.y = w.y),
            (C.x = this.m_impulse.x - B.x),
            (C.y = this.m_impulse.y - B.y),
            (C.z = this.m_impulse.z - B.z),
            (c = C.x * this.m_perp.x + C.z * this.m_axis.x),
            (_ = C.x * this.m_perp.y + C.z * this.m_axis.y),
            (h = C.x * this.m_s1 + C.y + C.z * this.m_a1),
            (y = C.x * this.m_s2 + C.y + C.z * this.m_a2),
            (r.x -= this.m_invMassA * c),
            (r.y -= this.m_invMassA * _),
            (a -= this.m_invIA * h),
            (l.x += this.m_invMassB * c),
            (l.y += this.m_invMassB * _),
            (m += this.m_invIB * y);
        } else {
          var g = this.m_K.Solve22(new n(), -b, -v);
          (this.m_impulse.x += g.x),
            (this.m_impulse.y += g.y),
            (c = g.x * this.m_perp.x),
            (_ = g.x * this.m_perp.y),
            (h = g.x * this.m_s1 + g.y),
            (y = g.x * this.m_s2 + g.y),
            (r.x -= this.m_invMassA * c),
            (r.y -= this.m_invMassA * _),
            (a -= this.m_invIA * h),
            (l.x += this.m_invMassB * c),
            (l.y += this.m_invMassB * _),
            (m += this.m_invIB * y);
        }
        o.m_linearVelocity.SetV(r),
          (o.m_angularVelocity = a),
          i.m_linearVelocity.SetV(l),
          (i.m_angularVelocity = m);
      }),
      (v.prototype.SolvePositionConstraints = function (i) {
        void 0 === i && (i = 0);
        var r,
          a = this.m_bodyA,
          l = this.m_bodyB,
          m = a.m_sweep.c,
          c = a.m_sweep.a,
          _ = l.m_sweep.c,
          h = l.m_sweep.a,
          p = 0,
          y = 0,
          u = 0,
          x = 0,
          f = 0,
          d = 0,
          b = 0,
          v = !1,
          D = 0,
          B = o.FromAngle(c),
          C = o.FromAngle(h);
        r = B;
        var A = this.m_localAnchor1.x - this.m_localCenterA.x,
          S = this.m_localAnchor1.y - this.m_localCenterA.y;
        (p = r.col1.x * A + r.col2.x * S),
          (S = r.col1.y * A + r.col2.y * S),
          (A = p),
          (r = C);
        var w = this.m_localAnchor2.x - this.m_localCenterB.x,
          g = this.m_localAnchor2.y - this.m_localCenterB.y;
        (p = r.col1.x * w + r.col2.x * g),
          (g = r.col1.y * w + r.col2.y * g),
          (w = p);
        var M = _.x + w - m.x - A,
          V = _.y + g - m.y - S;
        if (this.m_enableLimit) {
          (this.m_axis = e.MulMV(B, this.m_localXAxis1)),
            (this.m_a1 = (M + A) * this.m_axis.y - (V + S) * this.m_axis.x),
            (this.m_a2 = w * this.m_axis.y - g * this.m_axis.x);
          var I = this.m_axis.x * M + this.m_axis.y * V;
          e.Abs(this.m_upperTranslation - this.m_lowerTranslation) <
          2 * t.b2_linearSlop
            ? ((D = e.Clamp(
                I,
                -t.b2_maxLinearCorrection,
                t.b2_maxLinearCorrection,
              )),
              (d = e.Abs(I)),
              (v = !0))
            : I <= this.m_lowerTranslation
              ? ((D = e.Clamp(
                  I - this.m_lowerTranslation + t.b2_linearSlop,
                  -t.b2_maxLinearCorrection,
                  0,
                )),
                (d = this.m_lowerTranslation - I),
                (v = !0))
              : I >= this.m_upperTranslation &&
                ((D = e.Clamp(
                  I - this.m_upperTranslation + t.b2_linearSlop,
                  0,
                  t.b2_maxLinearCorrection,
                )),
                (d = I - this.m_upperTranslation),
                (v = !0));
        }
        (this.m_perp = e.MulMV(B, this.m_localYAxis1)),
          (this.m_s1 = (M + A) * this.m_perp.y - (V + S) * this.m_perp.x),
          (this.m_s2 = w * this.m_perp.y - g * this.m_perp.x);
        var G = new s(),
          L = this.m_perp.x * M + this.m_perp.y * V,
          J = h - c - this.m_refAngle;
        if (((d = e.Max(d, e.Abs(L))), (b = e.Abs(J)), v))
          (y = this.m_invMassA),
            (u = this.m_invMassB),
            (x = this.m_invIA),
            (f = this.m_invIB),
            (this.m_K.col1.x =
              y + u + x * this.m_s1 * this.m_s1 + f * this.m_s2 * this.m_s2),
            (this.m_K.col1.y = x * this.m_s1 + f * this.m_s2),
            (this.m_K.col1.z =
              x * this.m_s1 * this.m_a1 + f * this.m_s2 * this.m_a2),
            (this.m_K.col2.x = this.m_K.col1.y),
            (this.m_K.col2.y = x + f),
            (this.m_K.col2.z = x * this.m_a1 + f * this.m_a2),
            (this.m_K.col3.x = this.m_K.col1.z),
            (this.m_K.col3.y = this.m_K.col2.z),
            (this.m_K.col3.z =
              y + u + x * this.m_a1 * this.m_a1 + f * this.m_a2 * this.m_a2),
            this.m_K.Solve33(G, -L, -J, -D);
        else {
          (y = this.m_invMassA),
            (u = this.m_invMassB),
            (x = this.m_invIA),
            (f = this.m_invIB);
          var F = y + u + x * this.m_s1 * this.m_s1 + f * this.m_s2 * this.m_s2,
            P = x * this.m_s1 + f * this.m_s2,
            R = x + f;
          this.m_K.col1.Set(F, P, 0), this.m_K.col2.Set(P, R, 0);
          var T = this.m_K.Solve22(new n(), -L, -J);
          (G.x = T.x), (G.y = T.y), (G.z = 0);
        }
        var k = G.x * this.m_perp.x + G.z * this.m_axis.x,
          N = G.x * this.m_perp.y + G.z * this.m_axis.y,
          z = G.x * this.m_s1 + G.y + G.z * this.m_a1,
          E = G.x * this.m_s2 + G.y + G.z * this.m_a2;
        return (
          (m.x -= this.m_invMassA * k),
          (m.y -= this.m_invMassA * N),
          (c -= this.m_invIA * z),
          (_.x += this.m_invMassB * k),
          (_.y += this.m_invMassB * N),
          (h += this.m_invIB * E),
          (a.m_sweep.a = c),
          (l.m_sweep.a = h),
          a.SynchronizeTransform(),
          l.SynchronizeTransform(),
          d <= t.b2_linearSlop && b <= t.b2_angularSlop
        );
      }),
      Box2D.inherit(D, Box2D.Dynamics.Joints.b2JointDef),
      (D.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype),
      (D.b2PrismaticJointDef = function () {
        Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments),
          (this.localAnchorA = new n()),
          (this.localAnchorB = new n()),
          (this.localAxisA = new n());
      }),
      (D.prototype.b2PrismaticJointDef = function () {
        this.__super.b2JointDef.call(this),
          (this.type = p.e_prismaticJoint),
          this.localAxisA.Set(1, 0),
          (this.referenceAngle = 0),
          (this.enableLimit = !1),
          (this.lowerTranslation = 0),
          (this.upperTranslation = 0),
          (this.enableMotor = !1),
          (this.maxMotorForce = 0),
          (this.motorSpeed = 0);
      }),
      (D.prototype.Initialize = function (t, o, i, e) {
        (this.bodyA = t),
          (this.bodyB = o),
          (this.localAnchorA = this.bodyA.GetLocalPoint(i)),
          (this.localAnchorB = this.bodyB.GetLocalPoint(i)),
          (this.localAxisA = this.bodyA.GetLocalVector(e)),
          (this.referenceAngle = this.bodyB.GetAngle() - this.bodyA.GetAngle());
      }),
      Box2D.inherit(B, Box2D.Dynamics.Joints.b2Joint),
      (B.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype),
      (B.b2PulleyJoint = function () {
        Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments),
          (this.m_groundAnchor1 = new n()),
          (this.m_groundAnchor2 = new n()),
          (this.m_localAnchor1 = new n()),
          (this.m_localAnchor2 = new n()),
          (this.m_u1 = new n()),
          (this.m_u2 = new n());
      }),
      (B.prototype.GetAnchorA = function () {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchor1);
      }),
      (B.prototype.GetAnchorB = function () {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchor2);
      }),
      (B.prototype.GetReactionForce = function (t) {
        return (
          void 0 === t && (t = 0),
          new n(
            t * this.m_impulse * this.m_u2.x,
            t * this.m_impulse * this.m_u2.y,
          )
        );
      }),
      (B.prototype.GetReactionTorque = function (t) {
        return void 0 === t && (t = 0), 0;
      }),
      (B.prototype.GetGroundAnchorA = function () {
        var t = this.m_ground.m_xf.position.Copy();
        return t.Add(this.m_groundAnchor1), t;
      }),
      (B.prototype.GetGroundAnchorB = function () {
        var t = this.m_ground.m_xf.position.Copy();
        return t.Add(this.m_groundAnchor2), t;
      }),
      (B.prototype.GetLength1 = function () {
        var t = this.m_bodyA.GetWorldPoint(this.m_localAnchor1),
          o = this.m_ground.m_xf.position.x + this.m_groundAnchor1.x,
          i = this.m_ground.m_xf.position.y + this.m_groundAnchor1.y,
          e = t.x - o,
          n = t.y - i;
        return Math.sqrt(e * e + n * n);
      }),
      (B.prototype.GetLength2 = function () {
        var t = this.m_bodyB.GetWorldPoint(this.m_localAnchor2),
          o = this.m_ground.m_xf.position.x + this.m_groundAnchor2.x,
          i = this.m_ground.m_xf.position.y + this.m_groundAnchor2.y,
          e = t.x - o,
          n = t.y - i;
        return Math.sqrt(e * e + n * n);
      }),
      (B.prototype.GetRatio = function () {
        return this.m_ratio;
      }),
      (B.prototype.b2PulleyJoint = function (t) {
        this.__super.b2Joint.call(this, t);
        (this.m_ground = this.m_bodyA.m_world.m_groundBody),
          (this.m_groundAnchor1.x =
            t.groundAnchorA.x - this.m_ground.m_xf.position.x),
          (this.m_groundAnchor1.y =
            t.groundAnchorA.y - this.m_ground.m_xf.position.y),
          (this.m_groundAnchor2.x =
            t.groundAnchorB.x - this.m_ground.m_xf.position.x),
          (this.m_groundAnchor2.y =
            t.groundAnchorB.y - this.m_ground.m_xf.position.y),
          this.m_localAnchor1.SetV(t.localAnchorA),
          this.m_localAnchor2.SetV(t.localAnchorB),
          (this.m_ratio = t.ratio),
          (this.m_constant = t.lengthA + this.m_ratio * t.lengthB),
          (this.m_maxLength1 = e.Min(
            t.maxLengthA,
            this.m_constant - this.m_ratio * B.b2_minPulleyLength,
          )),
          (this.m_maxLength2 = e.Min(
            t.maxLengthB,
            (this.m_constant - B.b2_minPulleyLength) / this.m_ratio,
          )),
          (this.m_impulse = 0),
          (this.m_limitImpulse1 = 0),
          (this.m_limitImpulse2 = 0);
      }),
      (B.prototype.InitVelocityConstraints = function (o) {
        var i,
          e = this.m_bodyA,
          n = this.m_bodyB;
        i = e.m_xf.R;
        var s = this.m_localAnchor1.x - e.m_sweep.localCenter.x,
          r = this.m_localAnchor1.y - e.m_sweep.localCenter.y,
          a = i.col1.x * s + i.col2.x * r;
        (r = i.col1.y * s + i.col2.y * r), (s = a), (i = n.m_xf.R);
        var l = this.m_localAnchor2.x - n.m_sweep.localCenter.x,
          m = this.m_localAnchor2.y - n.m_sweep.localCenter.y;
        (a = i.col1.x * l + i.col2.x * m),
          (m = i.col1.y * l + i.col2.y * m),
          (l = a);
        var c = e.m_sweep.c.x + s,
          _ = e.m_sweep.c.y + r,
          h = n.m_sweep.c.x + l,
          y = n.m_sweep.c.y + m,
          u = this.m_ground.m_xf.position.x + this.m_groundAnchor1.x,
          x = this.m_ground.m_xf.position.y + this.m_groundAnchor1.y,
          f = this.m_ground.m_xf.position.x + this.m_groundAnchor2.x,
          d = this.m_ground.m_xf.position.y + this.m_groundAnchor2.y;
        this.m_u1.Set(c - u, _ - x), this.m_u2.Set(h - f, y - d);
        var b = this.m_u1.Length(),
          v = this.m_u2.Length();
        b > t.b2_linearSlop ? this.m_u1.Multiply(1 / b) : this.m_u1.SetZero(),
          v > t.b2_linearSlop ? this.m_u2.Multiply(1 / v) : this.m_u2.SetZero();
        var D = this.m_constant - b - this.m_ratio * v;
        D > 0
          ? ((this.m_state = p.e_inactiveLimit), (this.m_impulse = 0))
          : (this.m_state = p.e_atUpperLimit),
          b < this.m_maxLength1
            ? ((this.m_limitState1 = p.e_inactiveLimit),
              (this.m_limitImpulse1 = 0))
            : (this.m_limitState1 = p.e_atUpperLimit),
          v < this.m_maxLength2
            ? ((this.m_limitState2 = p.e_inactiveLimit),
              (this.m_limitImpulse2 = 0))
            : (this.m_limitState2 = p.e_atUpperLimit);
        var B = s * this.m_u1.y - r * this.m_u1.x,
          C = l * this.m_u2.y - m * this.m_u2.x;
        if (
          ((this.m_limitMass1 = e.m_invMass + e.m_invI * B * B),
          (this.m_limitMass2 = n.m_invMass + n.m_invI * C * C),
          (this.m_pulleyMass =
            this.m_limitMass1 +
            this.m_ratio * this.m_ratio * this.m_limitMass2),
          (this.m_limitMass1 = 1 / this.m_limitMass1),
          (this.m_limitMass2 = 1 / this.m_limitMass2),
          (this.m_pulleyMass = 1 / this.m_pulleyMass),
          o.warmStarting)
        ) {
          (this.m_impulse *= o.dtRatio),
            (this.m_limitImpulse1 *= o.dtRatio),
            (this.m_limitImpulse2 *= o.dtRatio);
          var A = (-this.m_impulse - this.m_limitImpulse1) * this.m_u1.x,
            S = (-this.m_impulse - this.m_limitImpulse1) * this.m_u1.y,
            w =
              (-this.m_ratio * this.m_impulse - this.m_limitImpulse2) *
              this.m_u2.x,
            g =
              (-this.m_ratio * this.m_impulse - this.m_limitImpulse2) *
              this.m_u2.y;
          (e.m_linearVelocity.x += e.m_invMass * A),
            (e.m_linearVelocity.y += e.m_invMass * S),
            (e.m_angularVelocity += e.m_invI * (s * S - r * A)),
            (n.m_linearVelocity.x += n.m_invMass * w),
            (n.m_linearVelocity.y += n.m_invMass * g),
            (n.m_angularVelocity += n.m_invI * (l * g - m * w));
        } else
          (this.m_impulse = 0),
            (this.m_limitImpulse1 = 0),
            (this.m_limitImpulse2 = 0);
      }),
      (B.prototype.SolveVelocityConstraints = function (t) {
        var o,
          i = this.m_bodyA,
          n = this.m_bodyB;
        o = i.m_xf.R;
        var s = this.m_localAnchor1.x - i.m_sweep.localCenter.x,
          r = this.m_localAnchor1.y - i.m_sweep.localCenter.y,
          a = o.col1.x * s + o.col2.x * r;
        (r = o.col1.y * s + o.col2.y * r), (s = a), (o = n.m_xf.R);
        var l = this.m_localAnchor2.x - n.m_sweep.localCenter.x,
          m = this.m_localAnchor2.y - n.m_sweep.localCenter.y;
        (a = o.col1.x * l + o.col2.x * m),
          (m = o.col1.y * l + o.col2.y * m),
          (l = a);
        var c = 0,
          _ = 0,
          h = 0,
          y = 0,
          u = 0,
          x = 0,
          f = 0,
          d = 0,
          b = 0,
          v = 0,
          D = 0;
        this.m_state == p.e_atUpperLimit &&
          ((c = i.m_linearVelocity.x + -i.m_angularVelocity * r),
          (_ = i.m_linearVelocity.y + i.m_angularVelocity * s),
          (h = n.m_linearVelocity.x + -n.m_angularVelocity * m),
          (y = n.m_linearVelocity.y + n.m_angularVelocity * l),
          (b =
            -(this.m_u1.x * c + this.m_u1.y * _) -
            this.m_ratio * (this.m_u2.x * h + this.m_u2.y * y)),
          (v = this.m_pulleyMass * -b),
          (D = this.m_impulse),
          (this.m_impulse = e.Max(0, this.m_impulse + v)),
          (v = this.m_impulse - D),
          (u = -v * this.m_u1.x),
          (x = -v * this.m_u1.y),
          (f = -this.m_ratio * v * this.m_u2.x),
          (d = -this.m_ratio * v * this.m_u2.y),
          (i.m_linearVelocity.x += i.m_invMass * u),
          (i.m_linearVelocity.y += i.m_invMass * x),
          (i.m_angularVelocity += i.m_invI * (s * x - r * u)),
          (n.m_linearVelocity.x += n.m_invMass * f),
          (n.m_linearVelocity.y += n.m_invMass * d),
          (n.m_angularVelocity += n.m_invI * (l * d - m * f))),
          this.m_limitState1 == p.e_atUpperLimit &&
            ((c = i.m_linearVelocity.x + -i.m_angularVelocity * r),
            (_ = i.m_linearVelocity.y + i.m_angularVelocity * s),
            (b = -(this.m_u1.x * c + this.m_u1.y * _)),
            (v = -this.m_limitMass1 * b),
            (D = this.m_limitImpulse1),
            (this.m_limitImpulse1 = e.Max(0, this.m_limitImpulse1 + v)),
            (v = this.m_limitImpulse1 - D),
            (u = -v * this.m_u1.x),
            (x = -v * this.m_u1.y),
            (i.m_linearVelocity.x += i.m_invMass * u),
            (i.m_linearVelocity.y += i.m_invMass * x),
            (i.m_angularVelocity += i.m_invI * (s * x - r * u))),
          this.m_limitState2 == p.e_atUpperLimit &&
            ((h = n.m_linearVelocity.x + -n.m_angularVelocity * m),
            (y = n.m_linearVelocity.y + n.m_angularVelocity * l),
            (b = -(this.m_u2.x * h + this.m_u2.y * y)),
            (v = -this.m_limitMass2 * b),
            (D = this.m_limitImpulse2),
            (this.m_limitImpulse2 = e.Max(0, this.m_limitImpulse2 + v)),
            (v = this.m_limitImpulse2 - D),
            (f = -v * this.m_u2.x),
            (d = -v * this.m_u2.y),
            (n.m_linearVelocity.x += n.m_invMass * f),
            (n.m_linearVelocity.y += n.m_invMass * d),
            (n.m_angularVelocity += n.m_invI * (l * d - m * f)));
      }),
      (B.prototype.SolvePositionConstraints = function (o) {
        void 0 === o && (o = 0);
        var i,
          n = this.m_bodyA,
          s = this.m_bodyB,
          r = this.m_ground.m_xf.position.x + this.m_groundAnchor1.x,
          a = this.m_ground.m_xf.position.y + this.m_groundAnchor1.y,
          l = this.m_ground.m_xf.position.x + this.m_groundAnchor2.x,
          m = this.m_ground.m_xf.position.y + this.m_groundAnchor2.y,
          c = 0,
          _ = 0,
          h = 0,
          y = 0,
          u = 0,
          x = 0,
          f = 0,
          d = 0,
          b = 0,
          v = 0,
          D = 0,
          B = 0,
          C = 0,
          A = 0;
        return (
          this.m_state == p.e_atUpperLimit &&
            ((i = n.m_xf.R),
            (c = this.m_localAnchor1.x - n.m_sweep.localCenter.x),
            (_ = this.m_localAnchor1.y - n.m_sweep.localCenter.y),
            (C = i.col1.x * c + i.col2.x * _),
            (_ = i.col1.y * c + i.col2.y * _),
            (c = C),
            (i = s.m_xf.R),
            (h = this.m_localAnchor2.x - s.m_sweep.localCenter.x),
            (y = this.m_localAnchor2.y - s.m_sweep.localCenter.y),
            (C = i.col1.x * h + i.col2.x * y),
            (y = i.col1.y * h + i.col2.y * y),
            (h = C),
            (u = n.m_sweep.c.x + c),
            (x = n.m_sweep.c.y + _),
            (f = s.m_sweep.c.x + h),
            (d = s.m_sweep.c.y + y),
            this.m_u1.Set(u - r, x - a),
            this.m_u2.Set(f - l, d - m),
            (b = this.m_u1.Length()),
            (v = this.m_u2.Length()),
            b > t.b2_linearSlop
              ? this.m_u1.Multiply(1 / b)
              : this.m_u1.SetZero(),
            v > t.b2_linearSlop
              ? this.m_u2.Multiply(1 / v)
              : this.m_u2.SetZero(),
            (D = this.m_constant - b - this.m_ratio * v),
            (A = e.Max(A, -D)),
            (D = e.Clamp(D + t.b2_linearSlop, -t.b2_maxLinearCorrection, 0)),
            (B = -this.m_pulleyMass * D),
            (u = -B * this.m_u1.x),
            (x = -B * this.m_u1.y),
            (f = -this.m_ratio * B * this.m_u2.x),
            (d = -this.m_ratio * B * this.m_u2.y),
            (n.m_sweep.c.x += n.m_invMass * u),
            (n.m_sweep.c.y += n.m_invMass * x),
            (n.m_sweep.a += n.m_invI * (c * x - _ * u)),
            (s.m_sweep.c.x += s.m_invMass * f),
            (s.m_sweep.c.y += s.m_invMass * d),
            (s.m_sweep.a += s.m_invI * (h * d - y * f)),
            n.SynchronizeTransform(),
            s.SynchronizeTransform()),
          this.m_limitState1 == p.e_atUpperLimit &&
            ((i = n.m_xf.R),
            (c = this.m_localAnchor1.x - n.m_sweep.localCenter.x),
            (_ = this.m_localAnchor1.y - n.m_sweep.localCenter.y),
            (C = i.col1.x * c + i.col2.x * _),
            (_ = i.col1.y * c + i.col2.y * _),
            (c = C),
            (u = n.m_sweep.c.x + c),
            (x = n.m_sweep.c.y + _),
            this.m_u1.Set(u - r, x - a),
            (b = this.m_u1.Length()),
            b > t.b2_linearSlop
              ? ((this.m_u1.x *= 1 / b), (this.m_u1.y *= 1 / b))
              : this.m_u1.SetZero(),
            (D = this.m_maxLength1 - b),
            (A = e.Max(A, -D)),
            (D = e.Clamp(D + t.b2_linearSlop, -t.b2_maxLinearCorrection, 0)),
            (B = -this.m_limitMass1 * D),
            (u = -B * this.m_u1.x),
            (x = -B * this.m_u1.y),
            (n.m_sweep.c.x += n.m_invMass * u),
            (n.m_sweep.c.y += n.m_invMass * x),
            (n.m_sweep.a += n.m_invI * (c * x - _ * u)),
            n.SynchronizeTransform()),
          this.m_limitState2 == p.e_atUpperLimit &&
            ((i = s.m_xf.R),
            (h = this.m_localAnchor2.x - s.m_sweep.localCenter.x),
            (y = this.m_localAnchor2.y - s.m_sweep.localCenter.y),
            (C = i.col1.x * h + i.col2.x * y),
            (y = i.col1.y * h + i.col2.y * y),
            (h = C),
            (f = s.m_sweep.c.x + h),
            (d = s.m_sweep.c.y + y),
            this.m_u2.Set(f - l, d - m),
            (v = this.m_u2.Length()),
            v > t.b2_linearSlop
              ? ((this.m_u2.x *= 1 / v), (this.m_u2.y *= 1 / v))
              : this.m_u2.SetZero(),
            (D = this.m_maxLength2 - v),
            (A = e.Max(A, -D)),
            (D = e.Clamp(D + t.b2_linearSlop, -t.b2_maxLinearCorrection, 0)),
            (B = -this.m_limitMass2 * D),
            (f = -B * this.m_u2.x),
            (d = -B * this.m_u2.y),
            (s.m_sweep.c.x += s.m_invMass * f),
            (s.m_sweep.c.y += s.m_invMass * d),
            (s.m_sweep.a += s.m_invI * (h * d - y * f)),
            s.SynchronizeTransform()),
          A < t.b2_linearSlop
        );
      }),
      Box2D.postDefs.push(function () {
        Box2D.Dynamics.Joints.b2PulleyJoint.b2_minPulleyLength = 2;
      }),
      Box2D.inherit(C, Box2D.Dynamics.Joints.b2JointDef),
      (C.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype),
      (C.b2PulleyJointDef = function () {
        Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments),
          (this.groundAnchorA = new n()),
          (this.groundAnchorB = new n()),
          (this.localAnchorA = new n()),
          (this.localAnchorB = new n());
      }),
      (C.prototype.b2PulleyJointDef = function () {
        this.__super.b2JointDef.call(this),
          (this.type = p.e_pulleyJoint),
          this.groundAnchorA.Set(-1, 1),
          this.groundAnchorB.Set(1, 1),
          this.localAnchorA.Set(-1, 0),
          this.localAnchorB.Set(1, 0),
          (this.lengthA = 0),
          (this.maxLengthA = 0),
          (this.lengthB = 0),
          (this.maxLengthB = 0),
          (this.ratio = 1),
          (this.collideConnected = !0);
      }),
      (C.prototype.Initialize = function (t, o, i, e, n, s, r) {
        void 0 === r && (r = 0),
          (this.bodyA = t),
          (this.bodyB = o),
          this.groundAnchorA.SetV(i),
          this.groundAnchorB.SetV(e),
          (this.localAnchorA = this.bodyA.GetLocalPoint(n)),
          (this.localAnchorB = this.bodyB.GetLocalPoint(s));
        var a = n.x - i.x,
          l = n.y - i.y;
        this.lengthA = Math.sqrt(a * a + l * l);
        var m = s.x - e.x,
          c = s.y - e.y;
        (this.lengthB = Math.sqrt(m * m + c * c)), (this.ratio = r);
        var _ = this.lengthA + this.ratio * this.lengthB;
        (this.maxLengthA = _ - this.ratio * B.b2_minPulleyLength),
          (this.maxLengthB = (_ - B.b2_minPulleyLength) / this.ratio);
      }),
      Box2D.inherit(A, Box2D.Dynamics.Joints.b2Joint),
      (A.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype),
      (A.b2RevoluteJoint = function () {
        Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments),
          (this.K = new o()),
          (this.K1 = new o()),
          (this.K2 = new o()),
          (this.K3 = new o()),
          (this.impulse3 = new s()),
          (this.impulse2 = new n()),
          (this.reduced = new n()),
          (this.m_localAnchor1 = new n()),
          (this.m_localAnchor2 = new n()),
          (this.m_impulse = new s()),
          (this.m_mass = new i());
      }),
      (A.prototype.GetAnchorA = function () {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchor1);
      }),
      (A.prototype.GetAnchorB = function () {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchor2);
      }),
      (A.prototype.GetReactionForce = function (t) {
        return (
          void 0 === t && (t = 0),
          new n(t * this.m_impulse.x, t * this.m_impulse.y)
        );
      }),
      (A.prototype.GetReactionTorque = function (t) {
        return void 0 === t && (t = 0), t * this.m_impulse.z;
      }),
      (A.prototype.GetJointAngle = function () {
        return (
          this.m_bodyB.m_sweep.a -
          this.m_bodyA.m_sweep.a -
          this.m_referenceAngle
        );
      }),
      (A.prototype.GetJointSpeed = function () {
        return this.m_bodyB.m_angularVelocity - this.m_bodyA.m_angularVelocity;
      }),
      (A.prototype.IsLimitEnabled = function () {
        return this.m_enableLimit;
      });
    A.prototype.EnableLimit = function (t) {
      this.m_enableLimit = t;
    };
    (A.prototype.GetLowerLimit = function () {
      return this.m_lowerAngle;
    }),
      (A.prototype.GetUpperLimit = function () {
        return this.m_upperAngle;
      }),
      (A.prototype.SetLimits = function (t, o) {
        void 0 === t && (t = 0),
          void 0 === o && (o = 0),
          (this.m_lowerAngle = t),
          (this.m_upperAngle = o);
      }),
      (A.prototype.IsMotorEnabled = function () {
        return (
          this.m_bodyA.SetAwake(!0),
          this.m_bodyB.SetAwake(!0),
          this.m_enableMotor
        );
      }),
      (A.prototype.EnableMotor = function (t) {
        this.m_enableMotor = t;
      }),
      (A.prototype.SetMotorSpeed = function (t) {
        void 0 === t && (t = 0),
          this.m_bodyA.SetAwake(!0),
          this.m_bodyB.SetAwake(!0),
          (this.m_motorSpeed = t);
      }),
      (A.prototype.GetMotorSpeed = function () {
        return this.m_motorSpeed;
      }),
      (A.prototype.SetMaxMotorTorque = function (t) {
        void 0 === t && (t = 0), (this.m_maxMotorTorque = t);
      }),
      (A.prototype.GetMotorTorque = function () {
        return this.m_maxMotorTorque;
      }),
      (A.prototype.b2RevoluteJoint = function (t) {
        this.__super.b2Joint.call(this, t),
          this.m_localAnchor1.SetV(t.localAnchorA),
          this.m_localAnchor2.SetV(t.localAnchorB),
          (this.m_referenceAngle = t.referenceAngle),
          this.m_impulse.SetZero(),
          (this.m_motorImpulse = 0),
          (this.m_lowerAngle = t.lowerAngle),
          (this.m_upperAngle = t.upperAngle),
          (this.m_maxMotorTorque = t.maxMotorTorque),
          (this.m_motorSpeed = t.motorSpeed),
          (this.m_enableLimit = t.enableLimit),
          (this.m_enableMotor = t.enableMotor),
          (this.m_limitState = p.e_inactiveLimit);
      }),
      (A.prototype.InitVelocityConstraints = function (o) {
        var i,
          n = this.m_bodyA,
          s = this.m_bodyB,
          r = 0;
        this.m_enableMotor || this.m_enableLimit, (i = n.m_xf.R);
        var a = this.m_localAnchor1.x - n.m_sweep.localCenter.x,
          l = this.m_localAnchor1.y - n.m_sweep.localCenter.y;
        (r = i.col1.x * a + i.col2.x * l),
          (l = i.col1.y * a + i.col2.y * l),
          (a = r),
          (i = s.m_xf.R);
        var m = this.m_localAnchor2.x - s.m_sweep.localCenter.x,
          c = this.m_localAnchor2.y - s.m_sweep.localCenter.y;
        (r = i.col1.x * m + i.col2.x * c),
          (c = i.col1.y * m + i.col2.y * c),
          (m = r);
        var _ = n.m_invMass,
          h = s.m_invMass,
          y = n.m_invI,
          u = s.m_invI;
        if (
          ((this.m_mass.col1.x = _ + h + l * l * y + c * c * u),
          (this.m_mass.col2.x = -l * a * y - c * m * u),
          (this.m_mass.col3.x = -l * y - c * u),
          (this.m_mass.col1.y = this.m_mass.col2.x),
          (this.m_mass.col2.y = _ + h + a * a * y + m * m * u),
          (this.m_mass.col3.y = a * y + m * u),
          (this.m_mass.col1.z = this.m_mass.col3.x),
          (this.m_mass.col2.z = this.m_mass.col3.y),
          (this.m_mass.col3.z = y + u),
          (this.m_motorMass = 1 / (y + u)),
          0 == this.m_enableMotor && (this.m_motorImpulse = 0),
          this.m_enableLimit)
        ) {
          var x = s.m_sweep.a - n.m_sweep.a - this.m_referenceAngle;
          e.Abs(this.m_upperAngle - this.m_lowerAngle) < 2 * t.b2_angularSlop
            ? (this.m_limitState = p.e_equalLimits)
            : x <= this.m_lowerAngle
              ? (this.m_limitState != p.e_atLowerLimit &&
                  (this.m_impulse.z = 0),
                (this.m_limitState = p.e_atLowerLimit))
              : x >= this.m_upperAngle
                ? (this.m_limitState != p.e_atUpperLimit &&
                    (this.m_impulse.z = 0),
                  (this.m_limitState = p.e_atUpperLimit))
                : ((this.m_limitState = p.e_inactiveLimit),
                  (this.m_impulse.z = 0));
        } else this.m_limitState = p.e_inactiveLimit;
        if (o.warmStarting) {
          (this.m_impulse.x *= o.dtRatio),
            (this.m_impulse.y *= o.dtRatio),
            (this.m_motorImpulse *= o.dtRatio);
          var f = this.m_impulse.x,
            d = this.m_impulse.y;
          (n.m_linearVelocity.x -= _ * f),
            (n.m_linearVelocity.y -= _ * d),
            (n.m_angularVelocity -=
              y * (a * d - l * f + this.m_motorImpulse + this.m_impulse.z)),
            (s.m_linearVelocity.x += h * f),
            (s.m_linearVelocity.y += h * d),
            (s.m_angularVelocity +=
              u * (m * d - c * f + this.m_motorImpulse + this.m_impulse.z));
        } else this.m_impulse.SetZero(), (this.m_motorImpulse = 0);
      }),
      (A.prototype.SolveVelocityConstraints = function (t) {
        var o,
          i = this.m_bodyA,
          n = this.m_bodyB,
          s = 0,
          r = 0,
          a = 0,
          l = 0,
          m = 0,
          c = 0,
          _ = i.m_linearVelocity,
          h = i.m_angularVelocity,
          y = n.m_linearVelocity,
          u = n.m_angularVelocity,
          x = i.m_invMass,
          f = n.m_invMass,
          d = i.m_invI,
          b = n.m_invI;
        if (this.m_enableMotor && this.m_limitState != p.e_equalLimits) {
          var v = u - h - this.m_motorSpeed,
            D = this.m_motorMass * -v,
            B = this.m_motorImpulse,
            C = t.dt * this.m_maxMotorTorque;
          (this.m_motorImpulse = e.Clamp(this.m_motorImpulse + D, -C, C)),
            (D = this.m_motorImpulse - B),
            (h -= d * D),
            (u += b * D);
        }
        if (this.m_enableLimit && this.m_limitState != p.e_inactiveLimit) {
          (o = i.m_xf.R),
            (a = this.m_localAnchor1.x - i.m_sweep.localCenter.x),
            (l = this.m_localAnchor1.y - i.m_sweep.localCenter.y),
            (s = o.col1.x * a + o.col2.x * l),
            (l = o.col1.y * a + o.col2.y * l),
            (a = s),
            (o = n.m_xf.R),
            (m = this.m_localAnchor2.x - n.m_sweep.localCenter.x),
            (c = this.m_localAnchor2.y - n.m_sweep.localCenter.y),
            (s = o.col1.x * m + o.col2.x * c),
            (c = o.col1.y * m + o.col2.y * c),
            (m = s);
          var A = y.x + -u * c - _.x - -h * l,
            S = y.y + u * m - _.y - h * a,
            w = u - h;
          this.m_mass.Solve33(this.impulse3, -A, -S, -w),
            this.m_limitState == p.e_equalLimits
              ? this.m_impulse.Add(this.impulse3)
              : this.m_limitState == p.e_atLowerLimit
                ? ((r = this.m_impulse.z + this.impulse3.z),
                  r < 0 &&
                    (this.m_mass.Solve22(this.reduced, -A, -S),
                    (this.impulse3.x = this.reduced.x),
                    (this.impulse3.y = this.reduced.y),
                    (this.impulse3.z = -this.m_impulse.z),
                    (this.m_impulse.x += this.reduced.x),
                    (this.m_impulse.y += this.reduced.y),
                    (this.m_impulse.z = 0)))
                : this.m_limitState == p.e_atUpperLimit &&
                  ((r = this.m_impulse.z + this.impulse3.z),
                  r > 0 &&
                    (this.m_mass.Solve22(this.reduced, -A, -S),
                    (this.impulse3.x = this.reduced.x),
                    (this.impulse3.y = this.reduced.y),
                    (this.impulse3.z = -this.m_impulse.z),
                    (this.m_impulse.x += this.reduced.x),
                    (this.m_impulse.y += this.reduced.y),
                    (this.m_impulse.z = 0))),
            (_.x -= x * this.impulse3.x),
            (_.y -= x * this.impulse3.y),
            (h -=
              d *
              (a * this.impulse3.y - l * this.impulse3.x + this.impulse3.z)),
            (y.x += f * this.impulse3.x),
            (y.y += f * this.impulse3.y),
            (u +=
              b *
              (m * this.impulse3.y - c * this.impulse3.x + this.impulse3.z));
        } else {
          (o = i.m_xf.R),
            (a = this.m_localAnchor1.x - i.m_sweep.localCenter.x),
            (l = this.m_localAnchor1.y - i.m_sweep.localCenter.y),
            (s = o.col1.x * a + o.col2.x * l),
            (l = o.col1.y * a + o.col2.y * l),
            (a = s),
            (o = n.m_xf.R),
            (m = this.m_localAnchor2.x - n.m_sweep.localCenter.x),
            (c = this.m_localAnchor2.y - n.m_sweep.localCenter.y),
            (s = o.col1.x * m + o.col2.x * c),
            (c = o.col1.y * m + o.col2.y * c),
            (m = s);
          var g = y.x + -u * c - _.x - -h * l,
            M = y.y + u * m - _.y - h * a;
          this.m_mass.Solve22(this.impulse2, -g, -M),
            (this.m_impulse.x += this.impulse2.x),
            (this.m_impulse.y += this.impulse2.y),
            (_.x -= x * this.impulse2.x),
            (_.y -= x * this.impulse2.y),
            (h -= d * (a * this.impulse2.y - l * this.impulse2.x)),
            (y.x += f * this.impulse2.x),
            (y.y += f * this.impulse2.y),
            (u += b * (m * this.impulse2.y - c * this.impulse2.x));
        }
        i.m_linearVelocity.SetV(_),
          (i.m_angularVelocity = h),
          n.m_linearVelocity.SetV(y),
          (n.m_angularVelocity = u);
      }),
      (A.prototype.SolvePositionConstraints = function (o) {
        void 0 === o && (o = 0);
        var i,
          n = 0,
          s = this.m_bodyA,
          r = this.m_bodyB,
          a = 0,
          l = 0,
          m = 0,
          c = 0,
          _ = 0;
        if (this.m_enableLimit && this.m_limitState != p.e_inactiveLimit) {
          var h = r.m_sweep.a - s.m_sweep.a - this.m_referenceAngle,
            y = 0;
          this.m_limitState == p.e_equalLimits
            ? ((n = e.Clamp(
                h - this.m_lowerAngle,
                -t.b2_maxAngularCorrection,
                t.b2_maxAngularCorrection,
              )),
              (y = -this.m_motorMass * n),
              (a = e.Abs(n)))
            : this.m_limitState == p.e_atLowerLimit
              ? ((n = h - this.m_lowerAngle),
                (a = -n),
                (n = e.Clamp(
                  n + t.b2_angularSlop,
                  -t.b2_maxAngularCorrection,
                  0,
                )),
                (y = -this.m_motorMass * n))
              : this.m_limitState == p.e_atUpperLimit &&
                ((n = h - this.m_upperAngle),
                (a = n),
                (n = e.Clamp(
                  n - t.b2_angularSlop,
                  0,
                  t.b2_maxAngularCorrection,
                )),
                (y = -this.m_motorMass * n)),
            (s.m_sweep.a -= s.m_invI * y),
            (r.m_sweep.a += r.m_invI * y),
            s.SynchronizeTransform(),
            r.SynchronizeTransform();
        }
        i = s.m_xf.R;
        var u = this.m_localAnchor1.x - s.m_sweep.localCenter.x,
          x = this.m_localAnchor1.y - s.m_sweep.localCenter.y;
        (m = i.col1.x * u + i.col2.x * x),
          (x = i.col1.y * u + i.col2.y * x),
          (u = m),
          (i = r.m_xf.R);
        var f = this.m_localAnchor2.x - r.m_sweep.localCenter.x,
          d = this.m_localAnchor2.y - r.m_sweep.localCenter.y;
        (m = i.col1.x * f + i.col2.x * d),
          (d = i.col1.y * f + i.col2.y * d),
          (f = m);
        var b = r.m_sweep.c.x + f - s.m_sweep.c.x - u,
          v = r.m_sweep.c.y + d - s.m_sweep.c.y - x,
          D = b * b + v * v,
          B = Math.sqrt(D);
        l = B;
        var C = s.m_invMass,
          S = r.m_invMass,
          w = s.m_invI,
          g = r.m_invI,
          M = 10 * t.b2_linearSlop;
        if (D > M * M) {
          var V = C + S,
            I = 1 / V;
          (c = I * -b), (_ = I * -v);
          var G = 0.5;
          (s.m_sweep.c.x -= G * C * c),
            (s.m_sweep.c.y -= G * C * _),
            (r.m_sweep.c.x += G * S * c),
            (r.m_sweep.c.y += G * S * _),
            (b = r.m_sweep.c.x + f - s.m_sweep.c.x - u),
            (v = r.m_sweep.c.y + d - s.m_sweep.c.y - x);
        }
        return (
          (this.K1.col1.x = C + S),
          (this.K1.col2.x = 0),
          (this.K1.col1.y = 0),
          (this.K1.col2.y = C + S),
          (this.K2.col1.x = w * x * x),
          (this.K2.col2.x = -w * u * x),
          (this.K2.col1.y = -w * u * x),
          (this.K2.col2.y = w * u * u),
          (this.K3.col1.x = g * d * d),
          (this.K3.col2.x = -g * f * d),
          (this.K3.col1.y = -g * f * d),
          (this.K3.col2.y = g * f * f),
          this.K.SetM(this.K1),
          this.K.AddM(this.K2),
          this.K.AddM(this.K3),
          this.K.Solve(A.tImpulse, -b, -v),
          (c = A.tImpulse.x),
          (_ = A.tImpulse.y),
          (s.m_sweep.c.x -= s.m_invMass * c),
          (s.m_sweep.c.y -= s.m_invMass * _),
          (s.m_sweep.a -= s.m_invI * (u * _ - x * c)),
          (r.m_sweep.c.x += r.m_invMass * c),
          (r.m_sweep.c.y += r.m_invMass * _),
          (r.m_sweep.a += r.m_invI * (f * _ - d * c)),
          s.SynchronizeTransform(),
          r.SynchronizeTransform(),
          l <= t.b2_linearSlop && a <= t.b2_angularSlop
        );
      }),
      Box2D.postDefs.push(function () {
        Box2D.Dynamics.Joints.b2RevoluteJoint.tImpulse = new n();
      }),
      Box2D.inherit(S, Box2D.Dynamics.Joints.b2JointDef),
      (S.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype),
      (S.b2RevoluteJointDef = function () {
        Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments),
          (this.localAnchorA = new n()),
          (this.localAnchorB = new n());
      }),
      (S.prototype.b2RevoluteJointDef = function () {
        this.__super.b2JointDef.call(this),
          (this.type = p.e_revoluteJoint),
          this.localAnchorA.Set(0, 0),
          this.localAnchorB.Set(0, 0),
          (this.referenceAngle = 0),
          (this.lowerAngle = 0),
          (this.upperAngle = 0),
          (this.maxMotorTorque = 0),
          (this.motorSpeed = 0),
          (this.enableLimit = !1),
          (this.enableMotor = !1);
      }),
      (S.prototype.Initialize = function (t, o, i) {
        (this.bodyA = t),
          (this.bodyB = o),
          (this.localAnchorA = this.bodyA.GetLocalPoint(i)),
          (this.localAnchorB = this.bodyB.GetLocalPoint(i)),
          (this.referenceAngle = this.bodyB.GetAngle() - this.bodyA.GetAngle());
      }),
      Box2D.inherit(w, Box2D.Dynamics.Joints.b2Joint),
      (w.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype),
      (w.b2WeldJoint = function () {
        Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments),
          (this.m_localAnchorA = new n()),
          (this.m_localAnchorB = new n()),
          (this.m_impulse = new s()),
          (this.m_mass = new i());
      }),
      (w.prototype.GetAnchorA = function () {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchorA);
      }),
      (w.prototype.GetAnchorB = function () {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchorB);
      }),
      (w.prototype.GetReactionForce = function (t) {
        return (
          void 0 === t && (t = 0),
          new n(t * this.m_impulse.x, t * this.m_impulse.y)
        );
      }),
      (w.prototype.GetReactionTorque = function (t) {
        return void 0 === t && (t = 0), t * this.m_impulse.z;
      }),
      (w.prototype.b2WeldJoint = function (t) {
        this.__super.b2Joint.call(this, t),
          this.m_localAnchorA.SetV(t.localAnchorA),
          this.m_localAnchorB.SetV(t.localAnchorB),
          (this.m_referenceAngle = t.referenceAngle),
          this.m_impulse.SetZero(),
          (this.m_mass = new i());
      }),
      (w.prototype.InitVelocityConstraints = function (t) {
        var o,
          i = 0,
          e = this.m_bodyA,
          n = this.m_bodyB;
        o = e.m_xf.R;
        var s = this.m_localAnchorA.x - e.m_sweep.localCenter.x,
          r = this.m_localAnchorA.y - e.m_sweep.localCenter.y;
        (i = o.col1.x * s + o.col2.x * r),
          (r = o.col1.y * s + o.col2.y * r),
          (s = i),
          (o = n.m_xf.R);
        var a = this.m_localAnchorB.x - n.m_sweep.localCenter.x,
          l = this.m_localAnchorB.y - n.m_sweep.localCenter.y;
        (i = o.col1.x * a + o.col2.x * l),
          (l = o.col1.y * a + o.col2.y * l),
          (a = i);
        var m = e.m_invMass,
          c = n.m_invMass,
          _ = e.m_invI,
          h = n.m_invI;
        (this.m_mass.col1.x = m + c + r * r * _ + l * l * h),
          (this.m_mass.col2.x = -r * s * _ - l * a * h),
          (this.m_mass.col3.x = -r * _ - l * h),
          (this.m_mass.col1.y = this.m_mass.col2.x),
          (this.m_mass.col2.y = m + c + s * s * _ + a * a * h),
          (this.m_mass.col3.y = s * _ + a * h),
          (this.m_mass.col1.z = this.m_mass.col3.x),
          (this.m_mass.col2.z = this.m_mass.col3.y),
          (this.m_mass.col3.z = _ + h),
          t.warmStarting
            ? ((this.m_impulse.x *= t.dtRatio),
              (this.m_impulse.y *= t.dtRatio),
              (this.m_impulse.z *= t.dtRatio),
              (e.m_linearVelocity.x -= m * this.m_impulse.x),
              (e.m_linearVelocity.y -= m * this.m_impulse.y),
              (e.m_angularVelocity -=
                _ *
                (s * this.m_impulse.y -
                  r * this.m_impulse.x +
                  this.m_impulse.z)),
              (n.m_linearVelocity.x += c * this.m_impulse.x),
              (n.m_linearVelocity.y += c * this.m_impulse.y),
              (n.m_angularVelocity +=
                h *
                (a * this.m_impulse.y -
                  l * this.m_impulse.x +
                  this.m_impulse.z)))
            : this.m_impulse.SetZero();
      }),
      (w.prototype.SolveVelocityConstraints = function (t) {
        var o,
          i = 0,
          e = this.m_bodyA,
          n = this.m_bodyB,
          r = e.m_linearVelocity,
          a = e.m_angularVelocity,
          l = n.m_linearVelocity,
          m = n.m_angularVelocity,
          c = e.m_invMass,
          _ = n.m_invMass,
          h = e.m_invI,
          p = n.m_invI;
        o = e.m_xf.R;
        var y = this.m_localAnchorA.x - e.m_sweep.localCenter.x,
          u = this.m_localAnchorA.y - e.m_sweep.localCenter.y;
        (i = o.col1.x * y + o.col2.x * u),
          (u = o.col1.y * y + o.col2.y * u),
          (y = i),
          (o = n.m_xf.R);
        var x = this.m_localAnchorB.x - n.m_sweep.localCenter.x,
          f = this.m_localAnchorB.y - n.m_sweep.localCenter.y;
        (i = o.col1.x * x + o.col2.x * f),
          (f = o.col1.y * x + o.col2.y * f),
          (x = i);
        var d = l.x - m * f - r.x + a * u,
          b = l.y + m * x - r.y - a * y,
          v = m - a,
          D = new s();
        this.m_mass.Solve33(D, -d, -b, -v),
          this.m_impulse.Add(D),
          (r.x -= c * D.x),
          (r.y -= c * D.y),
          (a -= h * (y * D.y - u * D.x + D.z)),
          (l.x += _ * D.x),
          (l.y += _ * D.y),
          (m += p * (x * D.y - f * D.x + D.z)),
          (e.m_angularVelocity = a),
          (n.m_angularVelocity = m);
      }),
      (w.prototype.SolvePositionConstraints = function (o) {
        void 0 === o && (o = 0);
        var i,
          n = 0,
          r = this.m_bodyA,
          a = this.m_bodyB;
        i = r.m_xf.R;
        var l = this.m_localAnchorA.x - r.m_sweep.localCenter.x,
          m = this.m_localAnchorA.y - r.m_sweep.localCenter.y;
        (n = i.col1.x * l + i.col2.x * m),
          (m = i.col1.y * l + i.col2.y * m),
          (l = n),
          (i = a.m_xf.R);
        var c = this.m_localAnchorB.x - a.m_sweep.localCenter.x,
          _ = this.m_localAnchorB.y - a.m_sweep.localCenter.y;
        (n = i.col1.x * c + i.col2.x * _),
          (_ = i.col1.y * c + i.col2.y * _),
          (c = n);
        var h = r.m_invMass,
          p = a.m_invMass,
          y = r.m_invI,
          u = a.m_invI,
          x = a.m_sweep.c.x + c - r.m_sweep.c.x - l,
          f = a.m_sweep.c.y + _ - r.m_sweep.c.y - m,
          d = a.m_sweep.a - r.m_sweep.a - this.m_referenceAngle,
          b = 10 * t.b2_linearSlop,
          v = Math.sqrt(x * x + f * f),
          D = e.Abs(d);
        v > b && ((y *= 1), (u *= 1)),
          (this.m_mass.col1.x = h + p + m * m * y + _ * _ * u),
          (this.m_mass.col2.x = -m * l * y - _ * c * u),
          (this.m_mass.col3.x = -m * y - _ * u),
          (this.m_mass.col1.y = this.m_mass.col2.x),
          (this.m_mass.col2.y = h + p + l * l * y + c * c * u),
          (this.m_mass.col3.y = l * y + c * u),
          (this.m_mass.col1.z = this.m_mass.col3.x),
          (this.m_mass.col2.z = this.m_mass.col3.y),
          (this.m_mass.col3.z = y + u);
        var B = new s();
        return (
          this.m_mass.Solve33(B, -x, -f, -d),
          (r.m_sweep.c.x -= h * B.x),
          (r.m_sweep.c.y -= h * B.y),
          (r.m_sweep.a -= y * (l * B.y - m * B.x + B.z)),
          (a.m_sweep.c.x += p * B.x),
          (a.m_sweep.c.y += p * B.y),
          (a.m_sweep.a += u * (c * B.y - _ * B.x + B.z)),
          r.SynchronizeTransform(),
          a.SynchronizeTransform(),
          v <= t.b2_linearSlop && D <= t.b2_angularSlop
        );
      }),
      Box2D.inherit(g, Box2D.Dynamics.Joints.b2JointDef),
      (g.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype),
      (g.b2WeldJointDef = function () {
        Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments),
          (this.localAnchorA = new n()),
          (this.localAnchorB = new n());
      }),
      (g.prototype.b2WeldJointDef = function () {
        this.__super.b2JointDef.call(this),
          (this.type = p.e_weldJoint),
          (this.referenceAngle = 0);
      }),
      (g.prototype.Initialize = function (t, o, i) {
        (this.bodyA = t),
          (this.bodyB = o),
          this.localAnchorA.SetV(this.bodyA.GetLocalPoint(i)),
          this.localAnchorB.SetV(this.bodyB.GetLocalPoint(i)),
          (this.referenceAngle = this.bodyB.GetAngle() - this.bodyA.GetAngle());
      });
  })(),
  (function () {
    var t = Box2D.Dynamics.b2DebugDraw;
    (t.b2DebugDraw = function () {
      (this.m_drawScale = 1),
        (this.m_lineThickness = 1),
        (this.m_alpha = 1),
        (this.m_fillAlpha = 1),
        (this.m_xformScale = 1);
      var t = this;
      this.m_sprite = {
        graphics: {
          clear: function () {
            t.m_ctx.clearRect(
              0,
              0,
              t.m_ctx.canvas.width,
              t.m_ctx.canvas.height,
            );
          },
        },
      };
    }),
      (t.prototype._color = function (t, o) {
        return (
          "rgba(" +
          ((16711680 & t) >> 16) +
          "," +
          ((65280 & t) >> 8) +
          "," +
          (255 & t) +
          "," +
          o +
          ")"
        );
      }),
      (t.prototype.b2DebugDraw = function () {
        this.m_drawFlags = 0;
      }),
      (t.prototype.SetFlags = function (t) {
        void 0 === t && (t = 0), (this.m_drawFlags = t);
      }),
      (t.prototype.GetFlags = function () {
        return this.m_drawFlags;
      }),
      (t.prototype.AppendFlags = function (t) {
        void 0 === t && (t = 0), (this.m_drawFlags |= t);
      }),
      (t.prototype.ClearFlags = function (t) {
        void 0 === t && (t = 0), (this.m_drawFlags &= ~t);
      }),
      (t.prototype.SetSprite = function (t) {
        this.m_ctx = t;
      }),
      (t.prototype.GetSprite = function () {
        return this.m_ctx;
      }),
      (t.prototype.SetDrawScale = function (t) {
        void 0 === t && (t = 0), (this.m_drawScale = t);
      }),
      (t.prototype.GetDrawScale = function () {
        return this.m_drawScale;
      }),
      (t.prototype.SetLineThickness = function (t) {
        void 0 === t && (t = 0),
          (this.m_lineThickness = t),
          (this.m_ctx.strokeWidth = t);
      }),
      (t.prototype.GetLineThickness = function () {
        return this.m_lineThickness;
      }),
      (t.prototype.SetAlpha = function (t) {
        void 0 === t && (t = 0), (this.m_alpha = t);
      }),
      (t.prototype.GetAlpha = function () {
        return this.m_alpha;
      }),
      (t.prototype.SetFillAlpha = function (t) {
        void 0 === t && (t = 0), (this.m_fillAlpha = t);
      }),
      (t.prototype.GetFillAlpha = function () {
        return this.m_fillAlpha;
      }),
      (t.prototype.SetXFormScale = function (t) {
        void 0 === t && (t = 0), (this.m_xformScale = t);
      }),
      (t.prototype.GetXFormScale = function () {
        return this.m_xformScale;
      }),
      (t.prototype.DrawPolygon = function (t, o, i) {
        if (o) {
          var e = this.m_ctx,
            n = this.m_drawScale;
          e.beginPath(),
            (e.strokeStyle = this._color(i.color, this.m_alpha)),
            e.moveTo(t[0].x * n, t[0].y * n);
          for (var s = 1; s < o; s++) e.lineTo(t[s].x * n, t[s].y * n);
          e.lineTo(t[0].x * n, t[0].y * n), e.closePath(), e.stroke();
        }
      }),
      (t.prototype.DrawSolidPolygon = function (t, o, i) {
        if (o) {
          var e = this.m_ctx,
            n = this.m_drawScale;
          e.beginPath(),
            (e.strokeStyle = this._color(i.color, this.m_alpha)),
            (e.fillStyle = this._color(i.color, this.m_fillAlpha)),
            e.moveTo(t[0].x * n, t[0].y * n);
          for (var s = 1; s < o; s++) e.lineTo(t[s].x * n, t[s].y * n);
          e.lineTo(t[0].x * n, t[0].y * n), e.closePath(), e.fill(), e.stroke();
        }
      }),
      (t.prototype.DrawCircle = function (t, o, i) {
        if (o) {
          var e = this.m_ctx,
            n = this.m_drawScale;
          e.beginPath(),
            (e.strokeStyle = this._color(i.color, this.m_alpha)),
            e.arc(t.x * n, t.y * n, o * n, 0, 2 * Math.PI, !0),
            e.closePath(),
            e.stroke();
        }
      }),
      (t.prototype.DrawSolidCircle = function (t, o, i, e) {
        if (o) {
          var n = this.m_ctx,
            s = this.m_drawScale,
            r = t.x * s,
            a = t.y * s;
          n.moveTo(0, 0),
            n.beginPath(),
            (n.strokeStyle = this._color(e.color, this.m_alpha)),
            (n.fillStyle = this._color(e.color, this.m_fillAlpha)),
            n.arc(r, a, o * s, 0, 2 * Math.PI, !0),
            n.moveTo(r, a),
            n.lineTo((t.x + i.x * o) * s, (t.y + i.y * o) * s),
            n.closePath(),
            n.fill(),
            n.stroke();
        }
      }),
      (t.prototype.DrawSegment = function (t, o, i) {
        var e = this.m_ctx,
          n = this.m_drawScale;
        (e.strokeStyle = this._color(i.color, this.m_alpha)),
          e.beginPath(),
          e.moveTo(t.x * n, t.y * n),
          e.lineTo(o.x * n, o.y * n),
          e.closePath(),
          e.stroke();
      }),
      (t.prototype.DrawTransform = function (t) {
        var o = this.m_ctx,
          i = this.m_drawScale;
        o.beginPath(),
          (o.strokeStyle = this._color(16711680, this.m_alpha)),
          o.moveTo(t.position.x * i, t.position.y * i),
          o.lineTo(
            (t.position.x + this.m_xformScale * t.R.col1.x) * i,
            (t.position.y + this.m_xformScale * t.R.col1.y) * i,
          ),
          (o.strokeStyle = this._color(65280, this.m_alpha)),
          o.moveTo(t.position.x * i, t.position.y * i),
          o.lineTo(
            (t.position.x + this.m_xformScale * t.R.col2.x) * i,
            (t.position.y + this.m_xformScale * t.R.col2.y) * i,
          ),
          o.closePath(),
          o.stroke();
      });
  })();
var i;
for (i = 0; i < Box2D.postDefs.length; ++i) Box2D.postDefs[i]();
delete Box2D.postDefs;
