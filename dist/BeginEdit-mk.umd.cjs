(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("vue")) : typeof define === "function" && define.amd ? define(["exports", "vue"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.BeginEdit = {}, global.Vue));
})(this, function(exports2, vue) {
  "use strict";
  const __variableDynamicImportRuntimeHelper = (glob, path) => {
    const v2 = glob[path];
    if (v2) {
      return typeof v2 === "function" ? v2() : Promise.resolve(v2);
    }
    return new Promise((_, reject) => {
      (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
    });
  };
  function getDefaultExportFromCjs(x2) {
    return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
  }
  function getAugmentedNamespace(n) {
    if (n.__esModule)
      return n;
    var f = n.default;
    if (typeof f == "function") {
      var a = function a2() {
        if (this instanceof a2) {
          var args = [null];
          args.push.apply(args, arguments);
          var Ctor = Function.bind.apply(f, args);
          return new Ctor();
        }
        return f.apply(this, arguments);
      };
      a.prototype = f.prototype;
    } else
      a = {};
    Object.defineProperty(a, "__esModule", { value: true });
    Object.keys(n).forEach(function(k) {
      var d = Object.getOwnPropertyDescriptor(n, k);
      Object.defineProperty(a, k, d.get ? d : {
        enumerable: true,
        get: function() {
          return n[k];
        }
      });
    });
    return a;
  }
  var markdownItExports = {};
  var markdownIt = {
    get exports() {
      return markdownItExports;
    },
    set exports(v2) {
      markdownItExports = v2;
    }
  };
  var utils$1 = {};
  var entitiesExports = {};
  var entities$1 = {
    get exports() {
      return entitiesExports;
    },
    set exports(v2) {
      entitiesExports = v2;
    }
  };
  const Aacute = "Á";
  const aacute = "á";
  const Abreve = "Ă";
  const abreve = "ă";
  const ac = "∾";
  const acd = "∿";
  const acE = "∾̳";
  const Acirc = "Â";
  const acirc = "â";
  const acute = "´";
  const Acy = "А";
  const acy = "а";
  const AElig = "Æ";
  const aelig = "æ";
  const af = "⁡";
  const Afr = "𝔄";
  const afr = "𝔞";
  const Agrave = "À";
  const agrave = "à";
  const alefsym = "ℵ";
  const aleph = "ℵ";
  const Alpha = "Α";
  const alpha = "α";
  const Amacr = "Ā";
  const amacr = "ā";
  const amalg = "⨿";
  const amp = "&";
  const AMP = "&";
  const andand = "⩕";
  const And = "⩓";
  const and = "∧";
  const andd = "⩜";
  const andslope = "⩘";
  const andv = "⩚";
  const ang = "∠";
  const ange = "⦤";
  const angle = "∠";
  const angmsdaa = "⦨";
  const angmsdab = "⦩";
  const angmsdac = "⦪";
  const angmsdad = "⦫";
  const angmsdae = "⦬";
  const angmsdaf = "⦭";
  const angmsdag = "⦮";
  const angmsdah = "⦯";
  const angmsd = "∡";
  const angrt = "∟";
  const angrtvb = "⊾";
  const angrtvbd = "⦝";
  const angsph = "∢";
  const angst = "Å";
  const angzarr = "⍼";
  const Aogon = "Ą";
  const aogon = "ą";
  const Aopf = "𝔸";
  const aopf = "𝕒";
  const apacir = "⩯";
  const ap = "≈";
  const apE = "⩰";
  const ape = "≊";
  const apid = "≋";
  const apos = "'";
  const ApplyFunction = "⁡";
  const approx = "≈";
  const approxeq = "≊";
  const Aring = "Å";
  const aring = "å";
  const Ascr = "𝒜";
  const ascr = "𝒶";
  const Assign = "≔";
  const ast = "*";
  const asymp = "≈";
  const asympeq = "≍";
  const Atilde = "Ã";
  const atilde = "ã";
  const Auml = "Ä";
  const auml = "ä";
  const awconint = "∳";
  const awint = "⨑";
  const backcong = "≌";
  const backepsilon = "϶";
  const backprime = "‵";
  const backsim = "∽";
  const backsimeq = "⋍";
  const Backslash = "∖";
  const Barv = "⫧";
  const barvee = "⊽";
  const barwed = "⌅";
  const Barwed = "⌆";
  const barwedge = "⌅";
  const bbrk = "⎵";
  const bbrktbrk = "⎶";
  const bcong = "≌";
  const Bcy = "Б";
  const bcy = "б";
  const bdquo = "„";
  const becaus = "∵";
  const because = "∵";
  const Because = "∵";
  const bemptyv = "⦰";
  const bepsi = "϶";
  const bernou = "ℬ";
  const Bernoullis = "ℬ";
  const Beta = "Β";
  const beta = "β";
  const beth = "ℶ";
  const between = "≬";
  const Bfr = "𝔅";
  const bfr = "𝔟";
  const bigcap = "⋂";
  const bigcirc = "◯";
  const bigcup = "⋃";
  const bigodot = "⨀";
  const bigoplus = "⨁";
  const bigotimes = "⨂";
  const bigsqcup = "⨆";
  const bigstar = "★";
  const bigtriangledown = "▽";
  const bigtriangleup = "△";
  const biguplus = "⨄";
  const bigvee = "⋁";
  const bigwedge = "⋀";
  const bkarow = "⤍";
  const blacklozenge = "⧫";
  const blacksquare = "▪";
  const blacktriangle = "▴";
  const blacktriangledown = "▾";
  const blacktriangleleft = "◂";
  const blacktriangleright = "▸";
  const blank = "␣";
  const blk12 = "▒";
  const blk14 = "░";
  const blk34 = "▓";
  const block$1 = "█";
  const bne = "=⃥";
  const bnequiv = "≡⃥";
  const bNot = "⫭";
  const bnot = "⌐";
  const Bopf = "𝔹";
  const bopf = "𝕓";
  const bot = "⊥";
  const bottom = "⊥";
  const bowtie = "⋈";
  const boxbox = "⧉";
  const boxdl = "┐";
  const boxdL = "╕";
  const boxDl = "╖";
  const boxDL = "╗";
  const boxdr = "┌";
  const boxdR = "╒";
  const boxDr = "╓";
  const boxDR = "╔";
  const boxh = "─";
  const boxH = "═";
  const boxhd = "┬";
  const boxHd = "╤";
  const boxhD = "╥";
  const boxHD = "╦";
  const boxhu = "┴";
  const boxHu = "╧";
  const boxhU = "╨";
  const boxHU = "╩";
  const boxminus = "⊟";
  const boxplus = "⊞";
  const boxtimes = "⊠";
  const boxul = "┘";
  const boxuL = "╛";
  const boxUl = "╜";
  const boxUL = "╝";
  const boxur = "└";
  const boxuR = "╘";
  const boxUr = "╙";
  const boxUR = "╚";
  const boxv = "│";
  const boxV = "║";
  const boxvh = "┼";
  const boxvH = "╪";
  const boxVh = "╫";
  const boxVH = "╬";
  const boxvl = "┤";
  const boxvL = "╡";
  const boxVl = "╢";
  const boxVL = "╣";
  const boxvr = "├";
  const boxvR = "╞";
  const boxVr = "╟";
  const boxVR = "╠";
  const bprime = "‵";
  const breve = "˘";
  const Breve = "˘";
  const brvbar = "¦";
  const bscr = "𝒷";
  const Bscr = "ℬ";
  const bsemi = "⁏";
  const bsim = "∽";
  const bsime = "⋍";
  const bsolb = "⧅";
  const bsol = "\\";
  const bsolhsub = "⟈";
  const bull = "•";
  const bullet = "•";
  const bump = "≎";
  const bumpE = "⪮";
  const bumpe = "≏";
  const Bumpeq = "≎";
  const bumpeq = "≏";
  const Cacute = "Ć";
  const cacute = "ć";
  const capand = "⩄";
  const capbrcup = "⩉";
  const capcap = "⩋";
  const cap = "∩";
  const Cap = "⋒";
  const capcup = "⩇";
  const capdot = "⩀";
  const CapitalDifferentialD = "ⅅ";
  const caps = "∩︀";
  const caret = "⁁";
  const caron = "ˇ";
  const Cayleys = "ℭ";
  const ccaps = "⩍";
  const Ccaron = "Č";
  const ccaron = "č";
  const Ccedil = "Ç";
  const ccedil = "ç";
  const Ccirc = "Ĉ";
  const ccirc = "ĉ";
  const Cconint = "∰";
  const ccups = "⩌";
  const ccupssm = "⩐";
  const Cdot = "Ċ";
  const cdot = "ċ";
  const cedil = "¸";
  const Cedilla = "¸";
  const cemptyv = "⦲";
  const cent = "¢";
  const centerdot = "·";
  const CenterDot = "·";
  const cfr = "𝔠";
  const Cfr = "ℭ";
  const CHcy = "Ч";
  const chcy = "ч";
  const check = "✓";
  const checkmark = "✓";
  const Chi = "Χ";
  const chi = "χ";
  const circ = "ˆ";
  const circeq = "≗";
  const circlearrowleft = "↺";
  const circlearrowright = "↻";
  const circledast = "⊛";
  const circledcirc = "⊚";
  const circleddash = "⊝";
  const CircleDot = "⊙";
  const circledR = "®";
  const circledS = "Ⓢ";
  const CircleMinus = "⊖";
  const CirclePlus = "⊕";
  const CircleTimes = "⊗";
  const cir = "○";
  const cirE = "⧃";
  const cire = "≗";
  const cirfnint = "⨐";
  const cirmid = "⫯";
  const cirscir = "⧂";
  const ClockwiseContourIntegral = "∲";
  const CloseCurlyDoubleQuote = "”";
  const CloseCurlyQuote = "’";
  const clubs = "♣";
  const clubsuit = "♣";
  const colon = ":";
  const Colon = "∷";
  const Colone = "⩴";
  const colone = "≔";
  const coloneq = "≔";
  const comma = ",";
  const commat = "@";
  const comp = "∁";
  const compfn = "∘";
  const complement = "∁";
  const complexes = "ℂ";
  const cong = "≅";
  const congdot = "⩭";
  const Congruent = "≡";
  const conint = "∮";
  const Conint = "∯";
  const ContourIntegral = "∮";
  const copf = "𝕔";
  const Copf = "ℂ";
  const coprod = "∐";
  const Coproduct = "∐";
  const copy = "©";
  const COPY = "©";
  const copysr = "℗";
  const CounterClockwiseContourIntegral = "∳";
  const crarr = "↵";
  const cross = "✗";
  const Cross = "⨯";
  const Cscr = "𝒞";
  const cscr = "𝒸";
  const csub = "⫏";
  const csube = "⫑";
  const csup = "⫐";
  const csupe = "⫒";
  const ctdot = "⋯";
  const cudarrl = "⤸";
  const cudarrr = "⤵";
  const cuepr = "⋞";
  const cuesc = "⋟";
  const cularr = "↶";
  const cularrp = "⤽";
  const cupbrcap = "⩈";
  const cupcap = "⩆";
  const CupCap = "≍";
  const cup = "∪";
  const Cup = "⋓";
  const cupcup = "⩊";
  const cupdot = "⊍";
  const cupor = "⩅";
  const cups = "∪︀";
  const curarr = "↷";
  const curarrm = "⤼";
  const curlyeqprec = "⋞";
  const curlyeqsucc = "⋟";
  const curlyvee = "⋎";
  const curlywedge = "⋏";
  const curren = "¤";
  const curvearrowleft = "↶";
  const curvearrowright = "↷";
  const cuvee = "⋎";
  const cuwed = "⋏";
  const cwconint = "∲";
  const cwint = "∱";
  const cylcty = "⌭";
  const dagger = "†";
  const Dagger = "‡";
  const daleth = "ℸ";
  const darr = "↓";
  const Darr = "↡";
  const dArr = "⇓";
  const dash = "‐";
  const Dashv = "⫤";
  const dashv = "⊣";
  const dbkarow = "⤏";
  const dblac = "˝";
  const Dcaron = "Ď";
  const dcaron = "ď";
  const Dcy = "Д";
  const dcy = "д";
  const ddagger = "‡";
  const ddarr = "⇊";
  const DD = "ⅅ";
  const dd = "ⅆ";
  const DDotrahd = "⤑";
  const ddotseq = "⩷";
  const deg = "°";
  const Del = "∇";
  const Delta = "Δ";
  const delta = "δ";
  const demptyv = "⦱";
  const dfisht = "⥿";
  const Dfr = "𝔇";
  const dfr = "𝔡";
  const dHar = "⥥";
  const dharl = "⇃";
  const dharr = "⇂";
  const DiacriticalAcute = "´";
  const DiacriticalDot = "˙";
  const DiacriticalDoubleAcute = "˝";
  const DiacriticalGrave = "`";
  const DiacriticalTilde = "˜";
  const diam = "⋄";
  const diamond = "⋄";
  const Diamond = "⋄";
  const diamondsuit = "♦";
  const diams = "♦";
  const die = "¨";
  const DifferentialD = "ⅆ";
  const digamma = "ϝ";
  const disin = "⋲";
  const div = "÷";
  const divide = "÷";
  const divideontimes = "⋇";
  const divonx = "⋇";
  const DJcy = "Ђ";
  const djcy = "ђ";
  const dlcorn = "⌞";
  const dlcrop = "⌍";
  const dollar = "$";
  const Dopf = "𝔻";
  const dopf = "𝕕";
  const Dot = "¨";
  const dot = "˙";
  const DotDot = "⃜";
  const doteq = "≐";
  const doteqdot = "≑";
  const DotEqual = "≐";
  const dotminus = "∸";
  const dotplus = "∔";
  const dotsquare = "⊡";
  const doublebarwedge = "⌆";
  const DoubleContourIntegral = "∯";
  const DoubleDot = "¨";
  const DoubleDownArrow = "⇓";
  const DoubleLeftArrow = "⇐";
  const DoubleLeftRightArrow = "⇔";
  const DoubleLeftTee = "⫤";
  const DoubleLongLeftArrow = "⟸";
  const DoubleLongLeftRightArrow = "⟺";
  const DoubleLongRightArrow = "⟹";
  const DoubleRightArrow = "⇒";
  const DoubleRightTee = "⊨";
  const DoubleUpArrow = "⇑";
  const DoubleUpDownArrow = "⇕";
  const DoubleVerticalBar = "∥";
  const DownArrowBar = "⤓";
  const downarrow = "↓";
  const DownArrow = "↓";
  const Downarrow = "⇓";
  const DownArrowUpArrow = "⇵";
  const DownBreve = "̑";
  const downdownarrows = "⇊";
  const downharpoonleft = "⇃";
  const downharpoonright = "⇂";
  const DownLeftRightVector = "⥐";
  const DownLeftTeeVector = "⥞";
  const DownLeftVectorBar = "⥖";
  const DownLeftVector = "↽";
  const DownRightTeeVector = "⥟";
  const DownRightVectorBar = "⥗";
  const DownRightVector = "⇁";
  const DownTeeArrow = "↧";
  const DownTee = "⊤";
  const drbkarow = "⤐";
  const drcorn = "⌟";
  const drcrop = "⌌";
  const Dscr = "𝒟";
  const dscr = "𝒹";
  const DScy = "Ѕ";
  const dscy = "ѕ";
  const dsol = "⧶";
  const Dstrok = "Đ";
  const dstrok = "đ";
  const dtdot = "⋱";
  const dtri = "▿";
  const dtrif = "▾";
  const duarr = "⇵";
  const duhar = "⥯";
  const dwangle = "⦦";
  const DZcy = "Џ";
  const dzcy = "џ";
  const dzigrarr = "⟿";
  const Eacute = "É";
  const eacute = "é";
  const easter = "⩮";
  const Ecaron = "Ě";
  const ecaron = "ě";
  const Ecirc = "Ê";
  const ecirc = "ê";
  const ecir = "≖";
  const ecolon = "≕";
  const Ecy = "Э";
  const ecy = "э";
  const eDDot = "⩷";
  const Edot = "Ė";
  const edot = "ė";
  const eDot = "≑";
  const ee = "ⅇ";
  const efDot = "≒";
  const Efr = "𝔈";
  const efr = "𝔢";
  const eg = "⪚";
  const Egrave = "È";
  const egrave = "è";
  const egs = "⪖";
  const egsdot = "⪘";
  const el = "⪙";
  const Element = "∈";
  const elinters = "⏧";
  const ell = "ℓ";
  const els = "⪕";
  const elsdot = "⪗";
  const Emacr = "Ē";
  const emacr = "ē";
  const empty = "∅";
  const emptyset = "∅";
  const EmptySmallSquare = "◻";
  const emptyv = "∅";
  const EmptyVerySmallSquare = "▫";
  const emsp13 = " ";
  const emsp14 = " ";
  const emsp = " ";
  const ENG = "Ŋ";
  const eng = "ŋ";
  const ensp = " ";
  const Eogon = "Ę";
  const eogon = "ę";
  const Eopf = "𝔼";
  const eopf = "𝕖";
  const epar = "⋕";
  const eparsl = "⧣";
  const eplus = "⩱";
  const epsi = "ε";
  const Epsilon = "Ε";
  const epsilon = "ε";
  const epsiv = "ϵ";
  const eqcirc = "≖";
  const eqcolon = "≕";
  const eqsim = "≂";
  const eqslantgtr = "⪖";
  const eqslantless = "⪕";
  const Equal = "⩵";
  const equals = "=";
  const EqualTilde = "≂";
  const equest = "≟";
  const Equilibrium = "⇌";
  const equiv = "≡";
  const equivDD = "⩸";
  const eqvparsl = "⧥";
  const erarr = "⥱";
  const erDot = "≓";
  const escr = "ℯ";
  const Escr = "ℰ";
  const esdot = "≐";
  const Esim = "⩳";
  const esim = "≂";
  const Eta = "Η";
  const eta = "η";
  const ETH = "Ð";
  const eth = "ð";
  const Euml = "Ë";
  const euml = "ë";
  const euro = "€";
  const excl = "!";
  const exist = "∃";
  const Exists = "∃";
  const expectation = "ℰ";
  const exponentiale = "ⅇ";
  const ExponentialE = "ⅇ";
  const fallingdotseq = "≒";
  const Fcy = "Ф";
  const fcy = "ф";
  const female = "♀";
  const ffilig = "ﬃ";
  const fflig = "ﬀ";
  const ffllig = "ﬄ";
  const Ffr = "𝔉";
  const ffr = "𝔣";
  const filig = "ﬁ";
  const FilledSmallSquare = "◼";
  const FilledVerySmallSquare = "▪";
  const fjlig = "fj";
  const flat = "♭";
  const fllig = "ﬂ";
  const fltns = "▱";
  const fnof = "ƒ";
  const Fopf = "𝔽";
  const fopf = "𝕗";
  const forall = "∀";
  const ForAll = "∀";
  const fork = "⋔";
  const forkv = "⫙";
  const Fouriertrf = "ℱ";
  const fpartint = "⨍";
  const frac12 = "½";
  const frac13 = "⅓";
  const frac14 = "¼";
  const frac15 = "⅕";
  const frac16 = "⅙";
  const frac18 = "⅛";
  const frac23 = "⅔";
  const frac25 = "⅖";
  const frac34 = "¾";
  const frac35 = "⅗";
  const frac38 = "⅜";
  const frac45 = "⅘";
  const frac56 = "⅚";
  const frac58 = "⅝";
  const frac78 = "⅞";
  const frasl = "⁄";
  const frown = "⌢";
  const fscr = "𝒻";
  const Fscr = "ℱ";
  const gacute = "ǵ";
  const Gamma = "Γ";
  const gamma = "γ";
  const Gammad = "Ϝ";
  const gammad = "ϝ";
  const gap = "⪆";
  const Gbreve = "Ğ";
  const gbreve = "ğ";
  const Gcedil = "Ģ";
  const Gcirc = "Ĝ";
  const gcirc = "ĝ";
  const Gcy = "Г";
  const gcy = "г";
  const Gdot = "Ġ";
  const gdot = "ġ";
  const ge = "≥";
  const gE = "≧";
  const gEl = "⪌";
  const gel = "⋛";
  const geq = "≥";
  const geqq = "≧";
  const geqslant = "⩾";
  const gescc = "⪩";
  const ges = "⩾";
  const gesdot = "⪀";
  const gesdoto = "⪂";
  const gesdotol = "⪄";
  const gesl = "⋛︀";
  const gesles = "⪔";
  const Gfr = "𝔊";
  const gfr = "𝔤";
  const gg = "≫";
  const Gg = "⋙";
  const ggg = "⋙";
  const gimel = "ℷ";
  const GJcy = "Ѓ";
  const gjcy = "ѓ";
  const gla = "⪥";
  const gl = "≷";
  const glE = "⪒";
  const glj = "⪤";
  const gnap = "⪊";
  const gnapprox = "⪊";
  const gne = "⪈";
  const gnE = "≩";
  const gneq = "⪈";
  const gneqq = "≩";
  const gnsim = "⋧";
  const Gopf = "𝔾";
  const gopf = "𝕘";
  const grave = "`";
  const GreaterEqual = "≥";
  const GreaterEqualLess = "⋛";
  const GreaterFullEqual = "≧";
  const GreaterGreater = "⪢";
  const GreaterLess = "≷";
  const GreaterSlantEqual = "⩾";
  const GreaterTilde = "≳";
  const Gscr = "𝒢";
  const gscr = "ℊ";
  const gsim = "≳";
  const gsime = "⪎";
  const gsiml = "⪐";
  const gtcc = "⪧";
  const gtcir = "⩺";
  const gt = ">";
  const GT = ">";
  const Gt = "≫";
  const gtdot = "⋗";
  const gtlPar = "⦕";
  const gtquest = "⩼";
  const gtrapprox = "⪆";
  const gtrarr = "⥸";
  const gtrdot = "⋗";
  const gtreqless = "⋛";
  const gtreqqless = "⪌";
  const gtrless = "≷";
  const gtrsim = "≳";
  const gvertneqq = "≩︀";
  const gvnE = "≩︀";
  const Hacek = "ˇ";
  const hairsp = " ";
  const half = "½";
  const hamilt = "ℋ";
  const HARDcy = "Ъ";
  const hardcy = "ъ";
  const harrcir = "⥈";
  const harr = "↔";
  const hArr = "⇔";
  const harrw = "↭";
  const Hat = "^";
  const hbar = "ℏ";
  const Hcirc = "Ĥ";
  const hcirc = "ĥ";
  const hearts = "♥";
  const heartsuit = "♥";
  const hellip = "…";
  const hercon = "⊹";
  const hfr = "𝔥";
  const Hfr = "ℌ";
  const HilbertSpace = "ℋ";
  const hksearow = "⤥";
  const hkswarow = "⤦";
  const hoarr = "⇿";
  const homtht = "∻";
  const hookleftarrow = "↩";
  const hookrightarrow = "↪";
  const hopf = "𝕙";
  const Hopf = "ℍ";
  const horbar = "―";
  const HorizontalLine = "─";
  const hscr = "𝒽";
  const Hscr = "ℋ";
  const hslash = "ℏ";
  const Hstrok = "Ħ";
  const hstrok = "ħ";
  const HumpDownHump = "≎";
  const HumpEqual = "≏";
  const hybull = "⁃";
  const hyphen = "‐";
  const Iacute = "Í";
  const iacute = "í";
  const ic = "⁣";
  const Icirc = "Î";
  const icirc = "î";
  const Icy = "И";
  const icy = "и";
  const Idot = "İ";
  const IEcy = "Е";
  const iecy = "е";
  const iexcl = "¡";
  const iff = "⇔";
  const ifr = "𝔦";
  const Ifr = "ℑ";
  const Igrave = "Ì";
  const igrave = "ì";
  const ii = "ⅈ";
  const iiiint = "⨌";
  const iiint = "∭";
  const iinfin = "⧜";
  const iiota = "℩";
  const IJlig = "Ĳ";
  const ijlig = "ĳ";
  const Imacr = "Ī";
  const imacr = "ī";
  const image$1 = "ℑ";
  const ImaginaryI = "ⅈ";
  const imagline = "ℐ";
  const imagpart = "ℑ";
  const imath = "ı";
  const Im = "ℑ";
  const imof = "⊷";
  const imped = "Ƶ";
  const Implies = "⇒";
  const incare = "℅";
  const infin = "∞";
  const infintie = "⧝";
  const inodot = "ı";
  const intcal = "⊺";
  const int = "∫";
  const Int = "∬";
  const integers = "ℤ";
  const Integral = "∫";
  const intercal = "⊺";
  const Intersection = "⋂";
  const intlarhk = "⨗";
  const intprod = "⨼";
  const InvisibleComma = "⁣";
  const InvisibleTimes = "⁢";
  const IOcy = "Ё";
  const iocy = "ё";
  const Iogon = "Į";
  const iogon = "į";
  const Iopf = "𝕀";
  const iopf = "𝕚";
  const Iota = "Ι";
  const iota = "ι";
  const iprod = "⨼";
  const iquest = "¿";
  const iscr = "𝒾";
  const Iscr = "ℐ";
  const isin = "∈";
  const isindot = "⋵";
  const isinE = "⋹";
  const isins = "⋴";
  const isinsv = "⋳";
  const isinv = "∈";
  const it = "⁢";
  const Itilde = "Ĩ";
  const itilde = "ĩ";
  const Iukcy = "І";
  const iukcy = "і";
  const Iuml = "Ï";
  const iuml = "ï";
  const Jcirc = "Ĵ";
  const jcirc = "ĵ";
  const Jcy = "Й";
  const jcy = "й";
  const Jfr = "𝔍";
  const jfr = "𝔧";
  const jmath = "ȷ";
  const Jopf = "𝕁";
  const jopf = "𝕛";
  const Jscr = "𝒥";
  const jscr = "𝒿";
  const Jsercy = "Ј";
  const jsercy = "ј";
  const Jukcy = "Є";
  const jukcy = "є";
  const Kappa = "Κ";
  const kappa = "κ";
  const kappav = "ϰ";
  const Kcedil = "Ķ";
  const kcedil = "ķ";
  const Kcy = "К";
  const kcy = "к";
  const Kfr = "𝔎";
  const kfr = "𝔨";
  const kgreen = "ĸ";
  const KHcy = "Х";
  const khcy = "х";
  const KJcy = "Ќ";
  const kjcy = "ќ";
  const Kopf = "𝕂";
  const kopf = "𝕜";
  const Kscr = "𝒦";
  const kscr = "𝓀";
  const lAarr = "⇚";
  const Lacute = "Ĺ";
  const lacute = "ĺ";
  const laemptyv = "⦴";
  const lagran = "ℒ";
  const Lambda = "Λ";
  const lambda = "λ";
  const lang = "⟨";
  const Lang = "⟪";
  const langd = "⦑";
  const langle = "⟨";
  const lap = "⪅";
  const Laplacetrf = "ℒ";
  const laquo = "«";
  const larrb = "⇤";
  const larrbfs = "⤟";
  const larr = "←";
  const Larr = "↞";
  const lArr = "⇐";
  const larrfs = "⤝";
  const larrhk = "↩";
  const larrlp = "↫";
  const larrpl = "⤹";
  const larrsim = "⥳";
  const larrtl = "↢";
  const latail = "⤙";
  const lAtail = "⤛";
  const lat = "⪫";
  const late = "⪭";
  const lates = "⪭︀";
  const lbarr = "⤌";
  const lBarr = "⤎";
  const lbbrk = "❲";
  const lbrace = "{";
  const lbrack = "[";
  const lbrke = "⦋";
  const lbrksld = "⦏";
  const lbrkslu = "⦍";
  const Lcaron = "Ľ";
  const lcaron = "ľ";
  const Lcedil = "Ļ";
  const lcedil = "ļ";
  const lceil = "⌈";
  const lcub = "{";
  const Lcy = "Л";
  const lcy = "л";
  const ldca = "⤶";
  const ldquo = "“";
  const ldquor = "„";
  const ldrdhar = "⥧";
  const ldrushar = "⥋";
  const ldsh = "↲";
  const le = "≤";
  const lE = "≦";
  const LeftAngleBracket = "⟨";
  const LeftArrowBar = "⇤";
  const leftarrow = "←";
  const LeftArrow = "←";
  const Leftarrow = "⇐";
  const LeftArrowRightArrow = "⇆";
  const leftarrowtail = "↢";
  const LeftCeiling = "⌈";
  const LeftDoubleBracket = "⟦";
  const LeftDownTeeVector = "⥡";
  const LeftDownVectorBar = "⥙";
  const LeftDownVector = "⇃";
  const LeftFloor = "⌊";
  const leftharpoondown = "↽";
  const leftharpoonup = "↼";
  const leftleftarrows = "⇇";
  const leftrightarrow = "↔";
  const LeftRightArrow = "↔";
  const Leftrightarrow = "⇔";
  const leftrightarrows = "⇆";
  const leftrightharpoons = "⇋";
  const leftrightsquigarrow = "↭";
  const LeftRightVector = "⥎";
  const LeftTeeArrow = "↤";
  const LeftTee = "⊣";
  const LeftTeeVector = "⥚";
  const leftthreetimes = "⋋";
  const LeftTriangleBar = "⧏";
  const LeftTriangle = "⊲";
  const LeftTriangleEqual = "⊴";
  const LeftUpDownVector = "⥑";
  const LeftUpTeeVector = "⥠";
  const LeftUpVectorBar = "⥘";
  const LeftUpVector = "↿";
  const LeftVectorBar = "⥒";
  const LeftVector = "↼";
  const lEg = "⪋";
  const leg = "⋚";
  const leq = "≤";
  const leqq = "≦";
  const leqslant = "⩽";
  const lescc = "⪨";
  const les = "⩽";
  const lesdot = "⩿";
  const lesdoto = "⪁";
  const lesdotor = "⪃";
  const lesg = "⋚︀";
  const lesges = "⪓";
  const lessapprox = "⪅";
  const lessdot = "⋖";
  const lesseqgtr = "⋚";
  const lesseqqgtr = "⪋";
  const LessEqualGreater = "⋚";
  const LessFullEqual = "≦";
  const LessGreater = "≶";
  const lessgtr = "≶";
  const LessLess = "⪡";
  const lesssim = "≲";
  const LessSlantEqual = "⩽";
  const LessTilde = "≲";
  const lfisht = "⥼";
  const lfloor = "⌊";
  const Lfr = "𝔏";
  const lfr = "𝔩";
  const lg = "≶";
  const lgE = "⪑";
  const lHar = "⥢";
  const lhard = "↽";
  const lharu = "↼";
  const lharul = "⥪";
  const lhblk = "▄";
  const LJcy = "Љ";
  const ljcy = "љ";
  const llarr = "⇇";
  const ll = "≪";
  const Ll = "⋘";
  const llcorner = "⌞";
  const Lleftarrow = "⇚";
  const llhard = "⥫";
  const lltri = "◺";
  const Lmidot = "Ŀ";
  const lmidot = "ŀ";
  const lmoustache = "⎰";
  const lmoust = "⎰";
  const lnap = "⪉";
  const lnapprox = "⪉";
  const lne = "⪇";
  const lnE = "≨";
  const lneq = "⪇";
  const lneqq = "≨";
  const lnsim = "⋦";
  const loang = "⟬";
  const loarr = "⇽";
  const lobrk = "⟦";
  const longleftarrow = "⟵";
  const LongLeftArrow = "⟵";
  const Longleftarrow = "⟸";
  const longleftrightarrow = "⟷";
  const LongLeftRightArrow = "⟷";
  const Longleftrightarrow = "⟺";
  const longmapsto = "⟼";
  const longrightarrow = "⟶";
  const LongRightArrow = "⟶";
  const Longrightarrow = "⟹";
  const looparrowleft = "↫";
  const looparrowright = "↬";
  const lopar = "⦅";
  const Lopf = "𝕃";
  const lopf = "𝕝";
  const loplus = "⨭";
  const lotimes = "⨴";
  const lowast = "∗";
  const lowbar = "_";
  const LowerLeftArrow = "↙";
  const LowerRightArrow = "↘";
  const loz = "◊";
  const lozenge = "◊";
  const lozf = "⧫";
  const lpar = "(";
  const lparlt = "⦓";
  const lrarr = "⇆";
  const lrcorner = "⌟";
  const lrhar = "⇋";
  const lrhard = "⥭";
  const lrm = "‎";
  const lrtri = "⊿";
  const lsaquo = "‹";
  const lscr = "𝓁";
  const Lscr = "ℒ";
  const lsh = "↰";
  const Lsh = "↰";
  const lsim = "≲";
  const lsime = "⪍";
  const lsimg = "⪏";
  const lsqb = "[";
  const lsquo = "‘";
  const lsquor = "‚";
  const Lstrok = "Ł";
  const lstrok = "ł";
  const ltcc = "⪦";
  const ltcir = "⩹";
  const lt = "<";
  const LT = "<";
  const Lt = "≪";
  const ltdot = "⋖";
  const lthree = "⋋";
  const ltimes = "⋉";
  const ltlarr = "⥶";
  const ltquest = "⩻";
  const ltri = "◃";
  const ltrie = "⊴";
  const ltrif = "◂";
  const ltrPar = "⦖";
  const lurdshar = "⥊";
  const luruhar = "⥦";
  const lvertneqq = "≨︀";
  const lvnE = "≨︀";
  const macr = "¯";
  const male = "♂";
  const malt = "✠";
  const maltese = "✠";
  const map = "↦";
  const mapsto = "↦";
  const mapstodown = "↧";
  const mapstoleft = "↤";
  const mapstoup = "↥";
  const marker = "▮";
  const mcomma = "⨩";
  const Mcy = "М";
  const mcy = "м";
  const mdash = "—";
  const mDDot = "∺";
  const measuredangle = "∡";
  const MediumSpace = " ";
  const Mellintrf = "ℳ";
  const Mfr = "𝔐";
  const mfr = "𝔪";
  const mho = "℧";
  const micro = "µ";
  const midast = "*";
  const midcir = "⫰";
  const mid = "∣";
  const middot = "·";
  const minusb = "⊟";
  const minus = "−";
  const minusd = "∸";
  const minusdu = "⨪";
  const MinusPlus = "∓";
  const mlcp = "⫛";
  const mldr = "…";
  const mnplus = "∓";
  const models = "⊧";
  const Mopf = "𝕄";
  const mopf = "𝕞";
  const mp = "∓";
  const mscr = "𝓂";
  const Mscr = "ℳ";
  const mstpos = "∾";
  const Mu = "Μ";
  const mu = "μ";
  const multimap = "⊸";
  const mumap = "⊸";
  const nabla = "∇";
  const Nacute = "Ń";
  const nacute = "ń";
  const nang = "∠⃒";
  const nap = "≉";
  const napE = "⩰̸";
  const napid = "≋̸";
  const napos = "ŉ";
  const napprox = "≉";
  const natural = "♮";
  const naturals = "ℕ";
  const natur = "♮";
  const nbsp = " ";
  const nbump = "≎̸";
  const nbumpe = "≏̸";
  const ncap = "⩃";
  const Ncaron = "Ň";
  const ncaron = "ň";
  const Ncedil = "Ņ";
  const ncedil = "ņ";
  const ncong = "≇";
  const ncongdot = "⩭̸";
  const ncup = "⩂";
  const Ncy = "Н";
  const ncy = "н";
  const ndash = "–";
  const nearhk = "⤤";
  const nearr = "↗";
  const neArr = "⇗";
  const nearrow = "↗";
  const ne = "≠";
  const nedot = "≐̸";
  const NegativeMediumSpace = "​";
  const NegativeThickSpace = "​";
  const NegativeThinSpace = "​";
  const NegativeVeryThinSpace = "​";
  const nequiv = "≢";
  const nesear = "⤨";
  const nesim = "≂̸";
  const NestedGreaterGreater = "≫";
  const NestedLessLess = "≪";
  const NewLine = "\n";
  const nexist = "∄";
  const nexists = "∄";
  const Nfr = "𝔑";
  const nfr = "𝔫";
  const ngE = "≧̸";
  const nge = "≱";
  const ngeq = "≱";
  const ngeqq = "≧̸";
  const ngeqslant = "⩾̸";
  const nges = "⩾̸";
  const nGg = "⋙̸";
  const ngsim = "≵";
  const nGt = "≫⃒";
  const ngt = "≯";
  const ngtr = "≯";
  const nGtv = "≫̸";
  const nharr = "↮";
  const nhArr = "⇎";
  const nhpar = "⫲";
  const ni = "∋";
  const nis = "⋼";
  const nisd = "⋺";
  const niv = "∋";
  const NJcy = "Њ";
  const njcy = "њ";
  const nlarr = "↚";
  const nlArr = "⇍";
  const nldr = "‥";
  const nlE = "≦̸";
  const nle = "≰";
  const nleftarrow = "↚";
  const nLeftarrow = "⇍";
  const nleftrightarrow = "↮";
  const nLeftrightarrow = "⇎";
  const nleq = "≰";
  const nleqq = "≦̸";
  const nleqslant = "⩽̸";
  const nles = "⩽̸";
  const nless = "≮";
  const nLl = "⋘̸";
  const nlsim = "≴";
  const nLt = "≪⃒";
  const nlt = "≮";
  const nltri = "⋪";
  const nltrie = "⋬";
  const nLtv = "≪̸";
  const nmid = "∤";
  const NoBreak = "⁠";
  const NonBreakingSpace = " ";
  const nopf = "𝕟";
  const Nopf = "ℕ";
  const Not = "⫬";
  const not = "¬";
  const NotCongruent = "≢";
  const NotCupCap = "≭";
  const NotDoubleVerticalBar = "∦";
  const NotElement = "∉";
  const NotEqual = "≠";
  const NotEqualTilde = "≂̸";
  const NotExists = "∄";
  const NotGreater = "≯";
  const NotGreaterEqual = "≱";
  const NotGreaterFullEqual = "≧̸";
  const NotGreaterGreater = "≫̸";
  const NotGreaterLess = "≹";
  const NotGreaterSlantEqual = "⩾̸";
  const NotGreaterTilde = "≵";
  const NotHumpDownHump = "≎̸";
  const NotHumpEqual = "≏̸";
  const notin = "∉";
  const notindot = "⋵̸";
  const notinE = "⋹̸";
  const notinva = "∉";
  const notinvb = "⋷";
  const notinvc = "⋶";
  const NotLeftTriangleBar = "⧏̸";
  const NotLeftTriangle = "⋪";
  const NotLeftTriangleEqual = "⋬";
  const NotLess = "≮";
  const NotLessEqual = "≰";
  const NotLessGreater = "≸";
  const NotLessLess = "≪̸";
  const NotLessSlantEqual = "⩽̸";
  const NotLessTilde = "≴";
  const NotNestedGreaterGreater = "⪢̸";
  const NotNestedLessLess = "⪡̸";
  const notni = "∌";
  const notniva = "∌";
  const notnivb = "⋾";
  const notnivc = "⋽";
  const NotPrecedes = "⊀";
  const NotPrecedesEqual = "⪯̸";
  const NotPrecedesSlantEqual = "⋠";
  const NotReverseElement = "∌";
  const NotRightTriangleBar = "⧐̸";
  const NotRightTriangle = "⋫";
  const NotRightTriangleEqual = "⋭";
  const NotSquareSubset = "⊏̸";
  const NotSquareSubsetEqual = "⋢";
  const NotSquareSuperset = "⊐̸";
  const NotSquareSupersetEqual = "⋣";
  const NotSubset = "⊂⃒";
  const NotSubsetEqual = "⊈";
  const NotSucceeds = "⊁";
  const NotSucceedsEqual = "⪰̸";
  const NotSucceedsSlantEqual = "⋡";
  const NotSucceedsTilde = "≿̸";
  const NotSuperset = "⊃⃒";
  const NotSupersetEqual = "⊉";
  const NotTilde = "≁";
  const NotTildeEqual = "≄";
  const NotTildeFullEqual = "≇";
  const NotTildeTilde = "≉";
  const NotVerticalBar = "∤";
  const nparallel = "∦";
  const npar = "∦";
  const nparsl = "⫽⃥";
  const npart = "∂̸";
  const npolint = "⨔";
  const npr = "⊀";
  const nprcue = "⋠";
  const nprec = "⊀";
  const npreceq = "⪯̸";
  const npre = "⪯̸";
  const nrarrc = "⤳̸";
  const nrarr = "↛";
  const nrArr = "⇏";
  const nrarrw = "↝̸";
  const nrightarrow = "↛";
  const nRightarrow = "⇏";
  const nrtri = "⋫";
  const nrtrie = "⋭";
  const nsc = "⊁";
  const nsccue = "⋡";
  const nsce = "⪰̸";
  const Nscr = "𝒩";
  const nscr = "𝓃";
  const nshortmid = "∤";
  const nshortparallel = "∦";
  const nsim = "≁";
  const nsime = "≄";
  const nsimeq = "≄";
  const nsmid = "∤";
  const nspar = "∦";
  const nsqsube = "⋢";
  const nsqsupe = "⋣";
  const nsub = "⊄";
  const nsubE = "⫅̸";
  const nsube = "⊈";
  const nsubset = "⊂⃒";
  const nsubseteq = "⊈";
  const nsubseteqq = "⫅̸";
  const nsucc = "⊁";
  const nsucceq = "⪰̸";
  const nsup = "⊅";
  const nsupE = "⫆̸";
  const nsupe = "⊉";
  const nsupset = "⊃⃒";
  const nsupseteq = "⊉";
  const nsupseteqq = "⫆̸";
  const ntgl = "≹";
  const Ntilde = "Ñ";
  const ntilde = "ñ";
  const ntlg = "≸";
  const ntriangleleft = "⋪";
  const ntrianglelefteq = "⋬";
  const ntriangleright = "⋫";
  const ntrianglerighteq = "⋭";
  const Nu = "Ν";
  const nu = "ν";
  const num = "#";
  const numero = "№";
  const numsp = " ";
  const nvap = "≍⃒";
  const nvdash = "⊬";
  const nvDash = "⊭";
  const nVdash = "⊮";
  const nVDash = "⊯";
  const nvge = "≥⃒";
  const nvgt = ">⃒";
  const nvHarr = "⤄";
  const nvinfin = "⧞";
  const nvlArr = "⤂";
  const nvle = "≤⃒";
  const nvlt = "<⃒";
  const nvltrie = "⊴⃒";
  const nvrArr = "⤃";
  const nvrtrie = "⊵⃒";
  const nvsim = "∼⃒";
  const nwarhk = "⤣";
  const nwarr = "↖";
  const nwArr = "⇖";
  const nwarrow = "↖";
  const nwnear = "⤧";
  const Oacute = "Ó";
  const oacute = "ó";
  const oast = "⊛";
  const Ocirc = "Ô";
  const ocirc = "ô";
  const ocir = "⊚";
  const Ocy = "О";
  const ocy = "о";
  const odash = "⊝";
  const Odblac = "Ő";
  const odblac = "ő";
  const odiv = "⨸";
  const odot = "⊙";
  const odsold = "⦼";
  const OElig = "Œ";
  const oelig = "œ";
  const ofcir = "⦿";
  const Ofr = "𝔒";
  const ofr = "𝔬";
  const ogon = "˛";
  const Ograve = "Ò";
  const ograve = "ò";
  const ogt = "⧁";
  const ohbar = "⦵";
  const ohm = "Ω";
  const oint = "∮";
  const olarr = "↺";
  const olcir = "⦾";
  const olcross = "⦻";
  const oline = "‾";
  const olt = "⧀";
  const Omacr = "Ō";
  const omacr = "ō";
  const Omega = "Ω";
  const omega = "ω";
  const Omicron = "Ο";
  const omicron = "ο";
  const omid = "⦶";
  const ominus = "⊖";
  const Oopf = "𝕆";
  const oopf = "𝕠";
  const opar = "⦷";
  const OpenCurlyDoubleQuote = "“";
  const OpenCurlyQuote = "‘";
  const operp = "⦹";
  const oplus = "⊕";
  const orarr = "↻";
  const Or = "⩔";
  const or = "∨";
  const ord = "⩝";
  const order = "ℴ";
  const orderof = "ℴ";
  const ordf = "ª";
  const ordm = "º";
  const origof = "⊶";
  const oror = "⩖";
  const orslope = "⩗";
  const orv = "⩛";
  const oS = "Ⓢ";
  const Oscr = "𝒪";
  const oscr = "ℴ";
  const Oslash = "Ø";
  const oslash = "ø";
  const osol = "⊘";
  const Otilde = "Õ";
  const otilde = "õ";
  const otimesas = "⨶";
  const Otimes = "⨷";
  const otimes = "⊗";
  const Ouml = "Ö";
  const ouml = "ö";
  const ovbar = "⌽";
  const OverBar = "‾";
  const OverBrace = "⏞";
  const OverBracket = "⎴";
  const OverParenthesis = "⏜";
  const para = "¶";
  const parallel = "∥";
  const par = "∥";
  const parsim = "⫳";
  const parsl = "⫽";
  const part = "∂";
  const PartialD = "∂";
  const Pcy = "П";
  const pcy = "п";
  const percnt = "%";
  const period = ".";
  const permil = "‰";
  const perp = "⊥";
  const pertenk = "‱";
  const Pfr = "𝔓";
  const pfr = "𝔭";
  const Phi = "Φ";
  const phi = "φ";
  const phiv = "ϕ";
  const phmmat = "ℳ";
  const phone$1 = "☎";
  const Pi = "Π";
  const pi = "π";
  const pitchfork = "⋔";
  const piv = "ϖ";
  const planck = "ℏ";
  const planckh = "ℎ";
  const plankv = "ℏ";
  const plusacir = "⨣";
  const plusb = "⊞";
  const pluscir = "⨢";
  const plus = "+";
  const plusdo = "∔";
  const plusdu = "⨥";
  const pluse = "⩲";
  const PlusMinus = "±";
  const plusmn = "±";
  const plussim = "⨦";
  const plustwo = "⨧";
  const pm = "±";
  const Poincareplane = "ℌ";
  const pointint = "⨕";
  const popf = "𝕡";
  const Popf = "ℙ";
  const pound = "£";
  const prap = "⪷";
  const Pr = "⪻";
  const pr = "≺";
  const prcue = "≼";
  const precapprox = "⪷";
  const prec = "≺";
  const preccurlyeq = "≼";
  const Precedes = "≺";
  const PrecedesEqual = "⪯";
  const PrecedesSlantEqual = "≼";
  const PrecedesTilde = "≾";
  const preceq = "⪯";
  const precnapprox = "⪹";
  const precneqq = "⪵";
  const precnsim = "⋨";
  const pre = "⪯";
  const prE = "⪳";
  const precsim = "≾";
  const prime = "′";
  const Prime = "″";
  const primes = "ℙ";
  const prnap = "⪹";
  const prnE = "⪵";
  const prnsim = "⋨";
  const prod = "∏";
  const Product = "∏";
  const profalar = "⌮";
  const profline = "⌒";
  const profsurf = "⌓";
  const prop = "∝";
  const Proportional = "∝";
  const Proportion = "∷";
  const propto = "∝";
  const prsim = "≾";
  const prurel = "⊰";
  const Pscr = "𝒫";
  const pscr = "𝓅";
  const Psi = "Ψ";
  const psi = "ψ";
  const puncsp = " ";
  const Qfr = "𝔔";
  const qfr = "𝔮";
  const qint = "⨌";
  const qopf = "𝕢";
  const Qopf = "ℚ";
  const qprime = "⁗";
  const Qscr = "𝒬";
  const qscr = "𝓆";
  const quaternions = "ℍ";
  const quatint = "⨖";
  const quest = "?";
  const questeq = "≟";
  const quot = '"';
  const QUOT = '"';
  const rAarr = "⇛";
  const race = "∽̱";
  const Racute = "Ŕ";
  const racute = "ŕ";
  const radic = "√";
  const raemptyv = "⦳";
  const rang = "⟩";
  const Rang = "⟫";
  const rangd = "⦒";
  const range = "⦥";
  const rangle = "⟩";
  const raquo = "»";
  const rarrap = "⥵";
  const rarrb = "⇥";
  const rarrbfs = "⤠";
  const rarrc = "⤳";
  const rarr = "→";
  const Rarr = "↠";
  const rArr = "⇒";
  const rarrfs = "⤞";
  const rarrhk = "↪";
  const rarrlp = "↬";
  const rarrpl = "⥅";
  const rarrsim = "⥴";
  const Rarrtl = "⤖";
  const rarrtl = "↣";
  const rarrw = "↝";
  const ratail = "⤚";
  const rAtail = "⤜";
  const ratio = "∶";
  const rationals = "ℚ";
  const rbarr = "⤍";
  const rBarr = "⤏";
  const RBarr = "⤐";
  const rbbrk = "❳";
  const rbrace = "}";
  const rbrack = "]";
  const rbrke = "⦌";
  const rbrksld = "⦎";
  const rbrkslu = "⦐";
  const Rcaron = "Ř";
  const rcaron = "ř";
  const Rcedil = "Ŗ";
  const rcedil = "ŗ";
  const rceil = "⌉";
  const rcub = "}";
  const Rcy = "Р";
  const rcy = "р";
  const rdca = "⤷";
  const rdldhar = "⥩";
  const rdquo = "”";
  const rdquor = "”";
  const rdsh = "↳";
  const real = "ℜ";
  const realine = "ℛ";
  const realpart = "ℜ";
  const reals = "ℝ";
  const Re = "ℜ";
  const rect = "▭";
  const reg = "®";
  const REG = "®";
  const ReverseElement = "∋";
  const ReverseEquilibrium = "⇋";
  const ReverseUpEquilibrium = "⥯";
  const rfisht = "⥽";
  const rfloor = "⌋";
  const rfr = "𝔯";
  const Rfr = "ℜ";
  const rHar = "⥤";
  const rhard = "⇁";
  const rharu = "⇀";
  const rharul = "⥬";
  const Rho = "Ρ";
  const rho = "ρ";
  const rhov = "ϱ";
  const RightAngleBracket = "⟩";
  const RightArrowBar = "⇥";
  const rightarrow = "→";
  const RightArrow = "→";
  const Rightarrow = "⇒";
  const RightArrowLeftArrow = "⇄";
  const rightarrowtail = "↣";
  const RightCeiling = "⌉";
  const RightDoubleBracket = "⟧";
  const RightDownTeeVector = "⥝";
  const RightDownVectorBar = "⥕";
  const RightDownVector = "⇂";
  const RightFloor = "⌋";
  const rightharpoondown = "⇁";
  const rightharpoonup = "⇀";
  const rightleftarrows = "⇄";
  const rightleftharpoons = "⇌";
  const rightrightarrows = "⇉";
  const rightsquigarrow = "↝";
  const RightTeeArrow = "↦";
  const RightTee = "⊢";
  const RightTeeVector = "⥛";
  const rightthreetimes = "⋌";
  const RightTriangleBar = "⧐";
  const RightTriangle = "⊳";
  const RightTriangleEqual = "⊵";
  const RightUpDownVector = "⥏";
  const RightUpTeeVector = "⥜";
  const RightUpVectorBar = "⥔";
  const RightUpVector = "↾";
  const RightVectorBar = "⥓";
  const RightVector = "⇀";
  const ring = "˚";
  const risingdotseq = "≓";
  const rlarr = "⇄";
  const rlhar = "⇌";
  const rlm = "‏";
  const rmoustache = "⎱";
  const rmoust = "⎱";
  const rnmid = "⫮";
  const roang = "⟭";
  const roarr = "⇾";
  const robrk = "⟧";
  const ropar = "⦆";
  const ropf = "𝕣";
  const Ropf = "ℝ";
  const roplus = "⨮";
  const rotimes = "⨵";
  const RoundImplies = "⥰";
  const rpar = ")";
  const rpargt = "⦔";
  const rppolint = "⨒";
  const rrarr = "⇉";
  const Rrightarrow = "⇛";
  const rsaquo = "›";
  const rscr = "𝓇";
  const Rscr = "ℛ";
  const rsh = "↱";
  const Rsh = "↱";
  const rsqb = "]";
  const rsquo = "’";
  const rsquor = "’";
  const rthree = "⋌";
  const rtimes = "⋊";
  const rtri = "▹";
  const rtrie = "⊵";
  const rtrif = "▸";
  const rtriltri = "⧎";
  const RuleDelayed = "⧴";
  const ruluhar = "⥨";
  const rx = "℞";
  const Sacute = "Ś";
  const sacute = "ś";
  const sbquo = "‚";
  const scap = "⪸";
  const Scaron = "Š";
  const scaron = "š";
  const Sc = "⪼";
  const sc = "≻";
  const sccue = "≽";
  const sce = "⪰";
  const scE = "⪴";
  const Scedil = "Ş";
  const scedil = "ş";
  const Scirc = "Ŝ";
  const scirc = "ŝ";
  const scnap = "⪺";
  const scnE = "⪶";
  const scnsim = "⋩";
  const scpolint = "⨓";
  const scsim = "≿";
  const Scy = "С";
  const scy = "с";
  const sdotb = "⊡";
  const sdot = "⋅";
  const sdote = "⩦";
  const searhk = "⤥";
  const searr = "↘";
  const seArr = "⇘";
  const searrow = "↘";
  const sect = "§";
  const semi = ";";
  const seswar = "⤩";
  const setminus = "∖";
  const setmn = "∖";
  const sext = "✶";
  const Sfr = "𝔖";
  const sfr = "𝔰";
  const sfrown = "⌢";
  const sharp = "♯";
  const SHCHcy = "Щ";
  const shchcy = "щ";
  const SHcy = "Ш";
  const shcy = "ш";
  const ShortDownArrow = "↓";
  const ShortLeftArrow = "←";
  const shortmid = "∣";
  const shortparallel = "∥";
  const ShortRightArrow = "→";
  const ShortUpArrow = "↑";
  const shy = "­";
  const Sigma = "Σ";
  const sigma = "σ";
  const sigmaf = "ς";
  const sigmav = "ς";
  const sim = "∼";
  const simdot = "⩪";
  const sime = "≃";
  const simeq = "≃";
  const simg = "⪞";
  const simgE = "⪠";
  const siml = "⪝";
  const simlE = "⪟";
  const simne = "≆";
  const simplus = "⨤";
  const simrarr = "⥲";
  const slarr = "←";
  const SmallCircle = "∘";
  const smallsetminus = "∖";
  const smashp = "⨳";
  const smeparsl = "⧤";
  const smid = "∣";
  const smile$1 = "⌣";
  const smt = "⪪";
  const smte = "⪬";
  const smtes = "⪬︀";
  const SOFTcy = "Ь";
  const softcy = "ь";
  const solbar = "⌿";
  const solb = "⧄";
  const sol = "/";
  const Sopf = "𝕊";
  const sopf = "𝕤";
  const spades = "♠";
  const spadesuit = "♠";
  const spar = "∥";
  const sqcap = "⊓";
  const sqcaps = "⊓︀";
  const sqcup = "⊔";
  const sqcups = "⊔︀";
  const Sqrt = "√";
  const sqsub = "⊏";
  const sqsube = "⊑";
  const sqsubset = "⊏";
  const sqsubseteq = "⊑";
  const sqsup = "⊐";
  const sqsupe = "⊒";
  const sqsupset = "⊐";
  const sqsupseteq = "⊒";
  const square = "□";
  const Square = "□";
  const SquareIntersection = "⊓";
  const SquareSubset = "⊏";
  const SquareSubsetEqual = "⊑";
  const SquareSuperset = "⊐";
  const SquareSupersetEqual = "⊒";
  const SquareUnion = "⊔";
  const squarf = "▪";
  const squ = "□";
  const squf = "▪";
  const srarr = "→";
  const Sscr = "𝒮";
  const sscr = "𝓈";
  const ssetmn = "∖";
  const ssmile = "⌣";
  const sstarf = "⋆";
  const Star = "⋆";
  const star$1 = "☆";
  const starf = "★";
  const straightepsilon = "ϵ";
  const straightphi = "ϕ";
  const strns = "¯";
  const sub = "⊂";
  const Sub = "⋐";
  const subdot = "⪽";
  const subE = "⫅";
  const sube = "⊆";
  const subedot = "⫃";
  const submult = "⫁";
  const subnE = "⫋";
  const subne = "⊊";
  const subplus = "⪿";
  const subrarr = "⥹";
  const subset = "⊂";
  const Subset = "⋐";
  const subseteq = "⊆";
  const subseteqq = "⫅";
  const SubsetEqual = "⊆";
  const subsetneq = "⊊";
  const subsetneqq = "⫋";
  const subsim = "⫇";
  const subsub = "⫕";
  const subsup = "⫓";
  const succapprox = "⪸";
  const succ = "≻";
  const succcurlyeq = "≽";
  const Succeeds = "≻";
  const SucceedsEqual = "⪰";
  const SucceedsSlantEqual = "≽";
  const SucceedsTilde = "≿";
  const succeq = "⪰";
  const succnapprox = "⪺";
  const succneqq = "⪶";
  const succnsim = "⋩";
  const succsim = "≿";
  const SuchThat = "∋";
  const sum = "∑";
  const Sum = "∑";
  const sung = "♪";
  const sup1 = "¹";
  const sup2 = "²";
  const sup3 = "³";
  const sup = "⊃";
  const Sup = "⋑";
  const supdot = "⪾";
  const supdsub = "⫘";
  const supE = "⫆";
  const supe = "⊇";
  const supedot = "⫄";
  const Superset = "⊃";
  const SupersetEqual = "⊇";
  const suphsol = "⟉";
  const suphsub = "⫗";
  const suplarr = "⥻";
  const supmult = "⫂";
  const supnE = "⫌";
  const supne = "⊋";
  const supplus = "⫀";
  const supset = "⊃";
  const Supset = "⋑";
  const supseteq = "⊇";
  const supseteqq = "⫆";
  const supsetneq = "⊋";
  const supsetneqq = "⫌";
  const supsim = "⫈";
  const supsub = "⫔";
  const supsup = "⫖";
  const swarhk = "⤦";
  const swarr = "↙";
  const swArr = "⇙";
  const swarrow = "↙";
  const swnwar = "⤪";
  const szlig = "ß";
  const Tab = "	";
  const target = "⌖";
  const Tau = "Τ";
  const tau = "τ";
  const tbrk = "⎴";
  const Tcaron = "Ť";
  const tcaron = "ť";
  const Tcedil = "Ţ";
  const tcedil = "ţ";
  const Tcy = "Т";
  const tcy = "т";
  const tdot = "⃛";
  const telrec = "⌕";
  const Tfr = "𝔗";
  const tfr = "𝔱";
  const there4 = "∴";
  const therefore = "∴";
  const Therefore = "∴";
  const Theta = "Θ";
  const theta = "θ";
  const thetasym = "ϑ";
  const thetav = "ϑ";
  const thickapprox = "≈";
  const thicksim = "∼";
  const ThickSpace = "  ";
  const ThinSpace = " ";
  const thinsp = " ";
  const thkap = "≈";
  const thksim = "∼";
  const THORN = "Þ";
  const thorn = "þ";
  const tilde = "˜";
  const Tilde = "∼";
  const TildeEqual = "≃";
  const TildeFullEqual = "≅";
  const TildeTilde = "≈";
  const timesbar = "⨱";
  const timesb = "⊠";
  const times = "×";
  const timesd = "⨰";
  const tint = "∭";
  const toea = "⤨";
  const topbot = "⌶";
  const topcir = "⫱";
  const top = "⊤";
  const Topf = "𝕋";
  const topf = "𝕥";
  const topfork = "⫚";
  const tosa = "⤩";
  const tprime = "‴";
  const trade = "™";
  const TRADE = "™";
  const triangle = "▵";
  const triangledown = "▿";
  const triangleleft = "◃";
  const trianglelefteq = "⊴";
  const triangleq = "≜";
  const triangleright = "▹";
  const trianglerighteq = "⊵";
  const tridot = "◬";
  const trie = "≜";
  const triminus = "⨺";
  const TripleDot = "⃛";
  const triplus = "⨹";
  const trisb = "⧍";
  const tritime = "⨻";
  const trpezium = "⏢";
  const Tscr = "𝒯";
  const tscr = "𝓉";
  const TScy = "Ц";
  const tscy = "ц";
  const TSHcy = "Ћ";
  const tshcy = "ћ";
  const Tstrok = "Ŧ";
  const tstrok = "ŧ";
  const twixt = "≬";
  const twoheadleftarrow = "↞";
  const twoheadrightarrow = "↠";
  const Uacute = "Ú";
  const uacute = "ú";
  const uarr = "↑";
  const Uarr = "↟";
  const uArr = "⇑";
  const Uarrocir = "⥉";
  const Ubrcy = "Ў";
  const ubrcy = "ў";
  const Ubreve = "Ŭ";
  const ubreve = "ŭ";
  const Ucirc = "Û";
  const ucirc = "û";
  const Ucy = "У";
  const ucy = "у";
  const udarr = "⇅";
  const Udblac = "Ű";
  const udblac = "ű";
  const udhar = "⥮";
  const ufisht = "⥾";
  const Ufr = "𝔘";
  const ufr = "𝔲";
  const Ugrave = "Ù";
  const ugrave = "ù";
  const uHar = "⥣";
  const uharl = "↿";
  const uharr = "↾";
  const uhblk = "▀";
  const ulcorn = "⌜";
  const ulcorner = "⌜";
  const ulcrop = "⌏";
  const ultri = "◸";
  const Umacr = "Ū";
  const umacr = "ū";
  const uml = "¨";
  const UnderBar = "_";
  const UnderBrace = "⏟";
  const UnderBracket = "⎵";
  const UnderParenthesis = "⏝";
  const Union = "⋃";
  const UnionPlus = "⊎";
  const Uogon = "Ų";
  const uogon = "ų";
  const Uopf = "𝕌";
  const uopf = "𝕦";
  const UpArrowBar = "⤒";
  const uparrow = "↑";
  const UpArrow = "↑";
  const Uparrow = "⇑";
  const UpArrowDownArrow = "⇅";
  const updownarrow = "↕";
  const UpDownArrow = "↕";
  const Updownarrow = "⇕";
  const UpEquilibrium = "⥮";
  const upharpoonleft = "↿";
  const upharpoonright = "↾";
  const uplus = "⊎";
  const UpperLeftArrow = "↖";
  const UpperRightArrow = "↗";
  const upsi = "υ";
  const Upsi = "ϒ";
  const upsih = "ϒ";
  const Upsilon = "Υ";
  const upsilon = "υ";
  const UpTeeArrow = "↥";
  const UpTee = "⊥";
  const upuparrows = "⇈";
  const urcorn = "⌝";
  const urcorner = "⌝";
  const urcrop = "⌎";
  const Uring = "Ů";
  const uring = "ů";
  const urtri = "◹";
  const Uscr = "𝒰";
  const uscr = "𝓊";
  const utdot = "⋰";
  const Utilde = "Ũ";
  const utilde = "ũ";
  const utri = "▵";
  const utrif = "▴";
  const uuarr = "⇈";
  const Uuml = "Ü";
  const uuml = "ü";
  const uwangle = "⦧";
  const vangrt = "⦜";
  const varepsilon = "ϵ";
  const varkappa = "ϰ";
  const varnothing = "∅";
  const varphi = "ϕ";
  const varpi = "ϖ";
  const varpropto = "∝";
  const varr = "↕";
  const vArr = "⇕";
  const varrho = "ϱ";
  const varsigma = "ς";
  const varsubsetneq = "⊊︀";
  const varsubsetneqq = "⫋︀";
  const varsupsetneq = "⊋︀";
  const varsupsetneqq = "⫌︀";
  const vartheta = "ϑ";
  const vartriangleleft = "⊲";
  const vartriangleright = "⊳";
  const vBar = "⫨";
  const Vbar = "⫫";
  const vBarv = "⫩";
  const Vcy = "В";
  const vcy = "в";
  const vdash = "⊢";
  const vDash = "⊨";
  const Vdash = "⊩";
  const VDash = "⊫";
  const Vdashl = "⫦";
  const veebar = "⊻";
  const vee = "∨";
  const Vee = "⋁";
  const veeeq = "≚";
  const vellip = "⋮";
  const verbar = "|";
  const Verbar = "‖";
  const vert = "|";
  const Vert = "‖";
  const VerticalBar = "∣";
  const VerticalLine = "|";
  const VerticalSeparator = "❘";
  const VerticalTilde = "≀";
  const VeryThinSpace = " ";
  const Vfr = "𝔙";
  const vfr = "𝔳";
  const vltri = "⊲";
  const vnsub = "⊂⃒";
  const vnsup = "⊃⃒";
  const Vopf = "𝕍";
  const vopf = "𝕧";
  const vprop = "∝";
  const vrtri = "⊳";
  const Vscr = "𝒱";
  const vscr = "𝓋";
  const vsubnE = "⫋︀";
  const vsubne = "⊊︀";
  const vsupnE = "⫌︀";
  const vsupne = "⊋︀";
  const Vvdash = "⊪";
  const vzigzag = "⦚";
  const Wcirc = "Ŵ";
  const wcirc = "ŵ";
  const wedbar = "⩟";
  const wedge = "∧";
  const Wedge = "⋀";
  const wedgeq = "≙";
  const weierp = "℘";
  const Wfr = "𝔚";
  const wfr = "𝔴";
  const Wopf = "𝕎";
  const wopf = "𝕨";
  const wp = "℘";
  const wr = "≀";
  const wreath = "≀";
  const Wscr = "𝒲";
  const wscr = "𝓌";
  const xcap = "⋂";
  const xcirc = "◯";
  const xcup = "⋃";
  const xdtri = "▽";
  const Xfr = "𝔛";
  const xfr = "𝔵";
  const xharr = "⟷";
  const xhArr = "⟺";
  const Xi = "Ξ";
  const xi = "ξ";
  const xlarr = "⟵";
  const xlArr = "⟸";
  const xmap = "⟼";
  const xnis = "⋻";
  const xodot = "⨀";
  const Xopf = "𝕏";
  const xopf = "𝕩";
  const xoplus = "⨁";
  const xotime = "⨂";
  const xrarr = "⟶";
  const xrArr = "⟹";
  const Xscr = "𝒳";
  const xscr = "𝓍";
  const xsqcup = "⨆";
  const xuplus = "⨄";
  const xutri = "△";
  const xvee = "⋁";
  const xwedge = "⋀";
  const Yacute = "Ý";
  const yacute = "ý";
  const YAcy = "Я";
  const yacy = "я";
  const Ycirc = "Ŷ";
  const ycirc = "ŷ";
  const Ycy = "Ы";
  const ycy = "ы";
  const yen = "¥";
  const Yfr = "𝔜";
  const yfr = "𝔶";
  const YIcy = "Ї";
  const yicy = "ї";
  const Yopf = "𝕐";
  const yopf = "𝕪";
  const Yscr = "𝒴";
  const yscr = "𝓎";
  const YUcy = "Ю";
  const yucy = "ю";
  const yuml = "ÿ";
  const Yuml = "Ÿ";
  const Zacute = "Ź";
  const zacute = "ź";
  const Zcaron = "Ž";
  const zcaron = "ž";
  const Zcy = "З";
  const zcy = "з";
  const Zdot = "Ż";
  const zdot = "ż";
  const zeetrf = "ℨ";
  const ZeroWidthSpace = "​";
  const Zeta = "Ζ";
  const zeta = "ζ";
  const zfr = "𝔷";
  const Zfr = "ℨ";
  const ZHcy = "Ж";
  const zhcy = "ж";
  const zigrarr = "⇝";
  const zopf = "𝕫";
  const Zopf = "ℤ";
  const Zscr = "𝒵";
  const zscr = "𝓏";
  const zwj = "‍";
  const zwnj = "‌";
  const require$$0 = {
    Aacute,
    aacute,
    Abreve,
    abreve,
    ac,
    acd,
    acE,
    Acirc,
    acirc,
    acute,
    Acy,
    acy,
    AElig,
    aelig,
    af,
    Afr,
    afr,
    Agrave,
    agrave,
    alefsym,
    aleph,
    Alpha,
    alpha,
    Amacr,
    amacr,
    amalg,
    amp,
    AMP,
    andand,
    And,
    and,
    andd,
    andslope,
    andv,
    ang,
    ange,
    angle,
    angmsdaa,
    angmsdab,
    angmsdac,
    angmsdad,
    angmsdae,
    angmsdaf,
    angmsdag,
    angmsdah,
    angmsd,
    angrt,
    angrtvb,
    angrtvbd,
    angsph,
    angst,
    angzarr,
    Aogon,
    aogon,
    Aopf,
    aopf,
    apacir,
    ap,
    apE,
    ape,
    apid,
    apos,
    ApplyFunction,
    approx,
    approxeq,
    Aring,
    aring,
    Ascr,
    ascr,
    Assign,
    ast,
    asymp,
    asympeq,
    Atilde,
    atilde,
    Auml,
    auml,
    awconint,
    awint,
    backcong,
    backepsilon,
    backprime,
    backsim,
    backsimeq,
    Backslash,
    Barv,
    barvee,
    barwed,
    Barwed,
    barwedge,
    bbrk,
    bbrktbrk,
    bcong,
    Bcy,
    bcy,
    bdquo,
    becaus,
    because,
    Because,
    bemptyv,
    bepsi,
    bernou,
    Bernoullis,
    Beta,
    beta,
    beth,
    between,
    Bfr,
    bfr,
    bigcap,
    bigcirc,
    bigcup,
    bigodot,
    bigoplus,
    bigotimes,
    bigsqcup,
    bigstar,
    bigtriangledown,
    bigtriangleup,
    biguplus,
    bigvee,
    bigwedge,
    bkarow,
    blacklozenge,
    blacksquare,
    blacktriangle,
    blacktriangledown,
    blacktriangleleft,
    blacktriangleright,
    blank,
    blk12,
    blk14,
    blk34,
    block: block$1,
    bne,
    bnequiv,
    bNot,
    bnot,
    Bopf,
    bopf,
    bot,
    bottom,
    bowtie,
    boxbox,
    boxdl,
    boxdL,
    boxDl,
    boxDL,
    boxdr,
    boxdR,
    boxDr,
    boxDR,
    boxh,
    boxH,
    boxhd,
    boxHd,
    boxhD,
    boxHD,
    boxhu,
    boxHu,
    boxhU,
    boxHU,
    boxminus,
    boxplus,
    boxtimes,
    boxul,
    boxuL,
    boxUl,
    boxUL,
    boxur,
    boxuR,
    boxUr,
    boxUR,
    boxv,
    boxV,
    boxvh,
    boxvH,
    boxVh,
    boxVH,
    boxvl,
    boxvL,
    boxVl,
    boxVL,
    boxvr,
    boxvR,
    boxVr,
    boxVR,
    bprime,
    breve,
    Breve,
    brvbar,
    bscr,
    Bscr,
    bsemi,
    bsim,
    bsime,
    bsolb,
    bsol,
    bsolhsub,
    bull,
    bullet,
    bump,
    bumpE,
    bumpe,
    Bumpeq,
    bumpeq,
    Cacute,
    cacute,
    capand,
    capbrcup,
    capcap,
    cap,
    Cap,
    capcup,
    capdot,
    CapitalDifferentialD,
    caps,
    caret,
    caron,
    Cayleys,
    ccaps,
    Ccaron,
    ccaron,
    Ccedil,
    ccedil,
    Ccirc,
    ccirc,
    Cconint,
    ccups,
    ccupssm,
    Cdot,
    cdot,
    cedil,
    Cedilla,
    cemptyv,
    cent,
    centerdot,
    CenterDot,
    cfr,
    Cfr,
    CHcy,
    chcy,
    check,
    checkmark,
    Chi,
    chi,
    circ,
    circeq,
    circlearrowleft,
    circlearrowright,
    circledast,
    circledcirc,
    circleddash,
    CircleDot,
    circledR,
    circledS,
    CircleMinus,
    CirclePlus,
    CircleTimes,
    cir,
    cirE,
    cire,
    cirfnint,
    cirmid,
    cirscir,
    ClockwiseContourIntegral,
    CloseCurlyDoubleQuote,
    CloseCurlyQuote,
    clubs,
    clubsuit,
    colon,
    Colon,
    Colone,
    colone,
    coloneq,
    comma,
    commat,
    comp,
    compfn,
    complement,
    complexes,
    cong,
    congdot,
    Congruent,
    conint,
    Conint,
    ContourIntegral,
    copf,
    Copf,
    coprod,
    Coproduct,
    copy,
    COPY,
    copysr,
    CounterClockwiseContourIntegral,
    crarr,
    cross,
    Cross,
    Cscr,
    cscr,
    csub,
    csube,
    csup,
    csupe,
    ctdot,
    cudarrl,
    cudarrr,
    cuepr,
    cuesc,
    cularr,
    cularrp,
    cupbrcap,
    cupcap,
    CupCap,
    cup,
    Cup,
    cupcup,
    cupdot,
    cupor,
    cups,
    curarr,
    curarrm,
    curlyeqprec,
    curlyeqsucc,
    curlyvee,
    curlywedge,
    curren,
    curvearrowleft,
    curvearrowright,
    cuvee,
    cuwed,
    cwconint,
    cwint,
    cylcty,
    dagger,
    Dagger,
    daleth,
    darr,
    Darr,
    dArr,
    dash,
    Dashv,
    dashv,
    dbkarow,
    dblac,
    Dcaron,
    dcaron,
    Dcy,
    dcy,
    ddagger,
    ddarr,
    DD,
    dd,
    DDotrahd,
    ddotseq,
    deg,
    Del,
    Delta,
    delta,
    demptyv,
    dfisht,
    Dfr,
    dfr,
    dHar,
    dharl,
    dharr,
    DiacriticalAcute,
    DiacriticalDot,
    DiacriticalDoubleAcute,
    DiacriticalGrave,
    DiacriticalTilde,
    diam,
    diamond,
    Diamond,
    diamondsuit,
    diams,
    die,
    DifferentialD,
    digamma,
    disin,
    div,
    divide,
    divideontimes,
    divonx,
    DJcy,
    djcy,
    dlcorn,
    dlcrop,
    dollar,
    Dopf,
    dopf,
    Dot,
    dot,
    DotDot,
    doteq,
    doteqdot,
    DotEqual,
    dotminus,
    dotplus,
    dotsquare,
    doublebarwedge,
    DoubleContourIntegral,
    DoubleDot,
    DoubleDownArrow,
    DoubleLeftArrow,
    DoubleLeftRightArrow,
    DoubleLeftTee,
    DoubleLongLeftArrow,
    DoubleLongLeftRightArrow,
    DoubleLongRightArrow,
    DoubleRightArrow,
    DoubleRightTee,
    DoubleUpArrow,
    DoubleUpDownArrow,
    DoubleVerticalBar,
    DownArrowBar,
    downarrow,
    DownArrow,
    Downarrow,
    DownArrowUpArrow,
    DownBreve,
    downdownarrows,
    downharpoonleft,
    downharpoonright,
    DownLeftRightVector,
    DownLeftTeeVector,
    DownLeftVectorBar,
    DownLeftVector,
    DownRightTeeVector,
    DownRightVectorBar,
    DownRightVector,
    DownTeeArrow,
    DownTee,
    drbkarow,
    drcorn,
    drcrop,
    Dscr,
    dscr,
    DScy,
    dscy,
    dsol,
    Dstrok,
    dstrok,
    dtdot,
    dtri,
    dtrif,
    duarr,
    duhar,
    dwangle,
    DZcy,
    dzcy,
    dzigrarr,
    Eacute,
    eacute,
    easter,
    Ecaron,
    ecaron,
    Ecirc,
    ecirc,
    ecir,
    ecolon,
    Ecy,
    ecy,
    eDDot,
    Edot,
    edot,
    eDot,
    ee,
    efDot,
    Efr,
    efr,
    eg,
    Egrave,
    egrave,
    egs,
    egsdot,
    el,
    Element,
    elinters,
    ell,
    els,
    elsdot,
    Emacr,
    emacr,
    empty,
    emptyset,
    EmptySmallSquare,
    emptyv,
    EmptyVerySmallSquare,
    emsp13,
    emsp14,
    emsp,
    ENG,
    eng,
    ensp,
    Eogon,
    eogon,
    Eopf,
    eopf,
    epar,
    eparsl,
    eplus,
    epsi,
    Epsilon,
    epsilon,
    epsiv,
    eqcirc,
    eqcolon,
    eqsim,
    eqslantgtr,
    eqslantless,
    Equal,
    equals,
    EqualTilde,
    equest,
    Equilibrium,
    equiv,
    equivDD,
    eqvparsl,
    erarr,
    erDot,
    escr,
    Escr,
    esdot,
    Esim,
    esim,
    Eta,
    eta,
    ETH,
    eth,
    Euml,
    euml,
    euro,
    excl,
    exist,
    Exists,
    expectation,
    exponentiale,
    ExponentialE,
    fallingdotseq,
    Fcy,
    fcy,
    female,
    ffilig,
    fflig,
    ffllig,
    Ffr,
    ffr,
    filig,
    FilledSmallSquare,
    FilledVerySmallSquare,
    fjlig,
    flat,
    fllig,
    fltns,
    fnof,
    Fopf,
    fopf,
    forall,
    ForAll,
    fork,
    forkv,
    Fouriertrf,
    fpartint,
    frac12,
    frac13,
    frac14,
    frac15,
    frac16,
    frac18,
    frac23,
    frac25,
    frac34,
    frac35,
    frac38,
    frac45,
    frac56,
    frac58,
    frac78,
    frasl,
    frown,
    fscr,
    Fscr,
    gacute,
    Gamma,
    gamma,
    Gammad,
    gammad,
    gap,
    Gbreve,
    gbreve,
    Gcedil,
    Gcirc,
    gcirc,
    Gcy,
    gcy,
    Gdot,
    gdot,
    ge,
    gE,
    gEl,
    gel,
    geq,
    geqq,
    geqslant,
    gescc,
    ges,
    gesdot,
    gesdoto,
    gesdotol,
    gesl,
    gesles,
    Gfr,
    gfr,
    gg,
    Gg,
    ggg,
    gimel,
    GJcy,
    gjcy,
    gla,
    gl,
    glE,
    glj,
    gnap,
    gnapprox,
    gne,
    gnE,
    gneq,
    gneqq,
    gnsim,
    Gopf,
    gopf,
    grave,
    GreaterEqual,
    GreaterEqualLess,
    GreaterFullEqual,
    GreaterGreater,
    GreaterLess,
    GreaterSlantEqual,
    GreaterTilde,
    Gscr,
    gscr,
    gsim,
    gsime,
    gsiml,
    gtcc,
    gtcir,
    gt,
    GT,
    Gt,
    gtdot,
    gtlPar,
    gtquest,
    gtrapprox,
    gtrarr,
    gtrdot,
    gtreqless,
    gtreqqless,
    gtrless,
    gtrsim,
    gvertneqq,
    gvnE,
    Hacek,
    hairsp,
    half,
    hamilt,
    HARDcy,
    hardcy,
    harrcir,
    harr,
    hArr,
    harrw,
    Hat,
    hbar,
    Hcirc,
    hcirc,
    hearts,
    heartsuit,
    hellip,
    hercon,
    hfr,
    Hfr,
    HilbertSpace,
    hksearow,
    hkswarow,
    hoarr,
    homtht,
    hookleftarrow,
    hookrightarrow,
    hopf,
    Hopf,
    horbar,
    HorizontalLine,
    hscr,
    Hscr,
    hslash,
    Hstrok,
    hstrok,
    HumpDownHump,
    HumpEqual,
    hybull,
    hyphen,
    Iacute,
    iacute,
    ic,
    Icirc,
    icirc,
    Icy,
    icy,
    Idot,
    IEcy,
    iecy,
    iexcl,
    iff,
    ifr,
    Ifr,
    Igrave,
    igrave,
    ii,
    iiiint,
    iiint,
    iinfin,
    iiota,
    IJlig,
    ijlig,
    Imacr,
    imacr,
    image: image$1,
    ImaginaryI,
    imagline,
    imagpart,
    imath,
    Im,
    imof,
    imped,
    Implies,
    incare,
    "in": "∈",
    infin,
    infintie,
    inodot,
    intcal,
    int,
    Int,
    integers,
    Integral,
    intercal,
    Intersection,
    intlarhk,
    intprod,
    InvisibleComma,
    InvisibleTimes,
    IOcy,
    iocy,
    Iogon,
    iogon,
    Iopf,
    iopf,
    Iota,
    iota,
    iprod,
    iquest,
    iscr,
    Iscr,
    isin,
    isindot,
    isinE,
    isins,
    isinsv,
    isinv,
    it,
    Itilde,
    itilde,
    Iukcy,
    iukcy,
    Iuml,
    iuml,
    Jcirc,
    jcirc,
    Jcy,
    jcy,
    Jfr,
    jfr,
    jmath,
    Jopf,
    jopf,
    Jscr,
    jscr,
    Jsercy,
    jsercy,
    Jukcy,
    jukcy,
    Kappa,
    kappa,
    kappav,
    Kcedil,
    kcedil,
    Kcy,
    kcy,
    Kfr,
    kfr,
    kgreen,
    KHcy,
    khcy,
    KJcy,
    kjcy,
    Kopf,
    kopf,
    Kscr,
    kscr,
    lAarr,
    Lacute,
    lacute,
    laemptyv,
    lagran,
    Lambda,
    lambda,
    lang,
    Lang,
    langd,
    langle,
    lap,
    Laplacetrf,
    laquo,
    larrb,
    larrbfs,
    larr,
    Larr,
    lArr,
    larrfs,
    larrhk,
    larrlp,
    larrpl,
    larrsim,
    larrtl,
    latail,
    lAtail,
    lat,
    late,
    lates,
    lbarr,
    lBarr,
    lbbrk,
    lbrace,
    lbrack,
    lbrke,
    lbrksld,
    lbrkslu,
    Lcaron,
    lcaron,
    Lcedil,
    lcedil,
    lceil,
    lcub,
    Lcy,
    lcy,
    ldca,
    ldquo,
    ldquor,
    ldrdhar,
    ldrushar,
    ldsh,
    le,
    lE,
    LeftAngleBracket,
    LeftArrowBar,
    leftarrow,
    LeftArrow,
    Leftarrow,
    LeftArrowRightArrow,
    leftarrowtail,
    LeftCeiling,
    LeftDoubleBracket,
    LeftDownTeeVector,
    LeftDownVectorBar,
    LeftDownVector,
    LeftFloor,
    leftharpoondown,
    leftharpoonup,
    leftleftarrows,
    leftrightarrow,
    LeftRightArrow,
    Leftrightarrow,
    leftrightarrows,
    leftrightharpoons,
    leftrightsquigarrow,
    LeftRightVector,
    LeftTeeArrow,
    LeftTee,
    LeftTeeVector,
    leftthreetimes,
    LeftTriangleBar,
    LeftTriangle,
    LeftTriangleEqual,
    LeftUpDownVector,
    LeftUpTeeVector,
    LeftUpVectorBar,
    LeftUpVector,
    LeftVectorBar,
    LeftVector,
    lEg,
    leg,
    leq,
    leqq,
    leqslant,
    lescc,
    les,
    lesdot,
    lesdoto,
    lesdotor,
    lesg,
    lesges,
    lessapprox,
    lessdot,
    lesseqgtr,
    lesseqqgtr,
    LessEqualGreater,
    LessFullEqual,
    LessGreater,
    lessgtr,
    LessLess,
    lesssim,
    LessSlantEqual,
    LessTilde,
    lfisht,
    lfloor,
    Lfr,
    lfr,
    lg,
    lgE,
    lHar,
    lhard,
    lharu,
    lharul,
    lhblk,
    LJcy,
    ljcy,
    llarr,
    ll,
    Ll,
    llcorner,
    Lleftarrow,
    llhard,
    lltri,
    Lmidot,
    lmidot,
    lmoustache,
    lmoust,
    lnap,
    lnapprox,
    lne,
    lnE,
    lneq,
    lneqq,
    lnsim,
    loang,
    loarr,
    lobrk,
    longleftarrow,
    LongLeftArrow,
    Longleftarrow,
    longleftrightarrow,
    LongLeftRightArrow,
    Longleftrightarrow,
    longmapsto,
    longrightarrow,
    LongRightArrow,
    Longrightarrow,
    looparrowleft,
    looparrowright,
    lopar,
    Lopf,
    lopf,
    loplus,
    lotimes,
    lowast,
    lowbar,
    LowerLeftArrow,
    LowerRightArrow,
    loz,
    lozenge,
    lozf,
    lpar,
    lparlt,
    lrarr,
    lrcorner,
    lrhar,
    lrhard,
    lrm,
    lrtri,
    lsaquo,
    lscr,
    Lscr,
    lsh,
    Lsh,
    lsim,
    lsime,
    lsimg,
    lsqb,
    lsquo,
    lsquor,
    Lstrok,
    lstrok,
    ltcc,
    ltcir,
    lt,
    LT,
    Lt,
    ltdot,
    lthree,
    ltimes,
    ltlarr,
    ltquest,
    ltri,
    ltrie,
    ltrif,
    ltrPar,
    lurdshar,
    luruhar,
    lvertneqq,
    lvnE,
    macr,
    male,
    malt,
    maltese,
    "Map": "⤅",
    map,
    mapsto,
    mapstodown,
    mapstoleft,
    mapstoup,
    marker,
    mcomma,
    Mcy,
    mcy,
    mdash,
    mDDot,
    measuredangle,
    MediumSpace,
    Mellintrf,
    Mfr,
    mfr,
    mho,
    micro,
    midast,
    midcir,
    mid,
    middot,
    minusb,
    minus,
    minusd,
    minusdu,
    MinusPlus,
    mlcp,
    mldr,
    mnplus,
    models,
    Mopf,
    mopf,
    mp,
    mscr,
    Mscr,
    mstpos,
    Mu,
    mu,
    multimap,
    mumap,
    nabla,
    Nacute,
    nacute,
    nang,
    nap,
    napE,
    napid,
    napos,
    napprox,
    natural,
    naturals,
    natur,
    nbsp,
    nbump,
    nbumpe,
    ncap,
    Ncaron,
    ncaron,
    Ncedil,
    ncedil,
    ncong,
    ncongdot,
    ncup,
    Ncy,
    ncy,
    ndash,
    nearhk,
    nearr,
    neArr,
    nearrow,
    ne,
    nedot,
    NegativeMediumSpace,
    NegativeThickSpace,
    NegativeThinSpace,
    NegativeVeryThinSpace,
    nequiv,
    nesear,
    nesim,
    NestedGreaterGreater,
    NestedLessLess,
    NewLine,
    nexist,
    nexists,
    Nfr,
    nfr,
    ngE,
    nge,
    ngeq,
    ngeqq,
    ngeqslant,
    nges,
    nGg,
    ngsim,
    nGt,
    ngt,
    ngtr,
    nGtv,
    nharr,
    nhArr,
    nhpar,
    ni,
    nis,
    nisd,
    niv,
    NJcy,
    njcy,
    nlarr,
    nlArr,
    nldr,
    nlE,
    nle,
    nleftarrow,
    nLeftarrow,
    nleftrightarrow,
    nLeftrightarrow,
    nleq,
    nleqq,
    nleqslant,
    nles,
    nless,
    nLl,
    nlsim,
    nLt,
    nlt,
    nltri,
    nltrie,
    nLtv,
    nmid,
    NoBreak,
    NonBreakingSpace,
    nopf,
    Nopf,
    Not,
    not,
    NotCongruent,
    NotCupCap,
    NotDoubleVerticalBar,
    NotElement,
    NotEqual,
    NotEqualTilde,
    NotExists,
    NotGreater,
    NotGreaterEqual,
    NotGreaterFullEqual,
    NotGreaterGreater,
    NotGreaterLess,
    NotGreaterSlantEqual,
    NotGreaterTilde,
    NotHumpDownHump,
    NotHumpEqual,
    notin,
    notindot,
    notinE,
    notinva,
    notinvb,
    notinvc,
    NotLeftTriangleBar,
    NotLeftTriangle,
    NotLeftTriangleEqual,
    NotLess,
    NotLessEqual,
    NotLessGreater,
    NotLessLess,
    NotLessSlantEqual,
    NotLessTilde,
    NotNestedGreaterGreater,
    NotNestedLessLess,
    notni,
    notniva,
    notnivb,
    notnivc,
    NotPrecedes,
    NotPrecedesEqual,
    NotPrecedesSlantEqual,
    NotReverseElement,
    NotRightTriangleBar,
    NotRightTriangle,
    NotRightTriangleEqual,
    NotSquareSubset,
    NotSquareSubsetEqual,
    NotSquareSuperset,
    NotSquareSupersetEqual,
    NotSubset,
    NotSubsetEqual,
    NotSucceeds,
    NotSucceedsEqual,
    NotSucceedsSlantEqual,
    NotSucceedsTilde,
    NotSuperset,
    NotSupersetEqual,
    NotTilde,
    NotTildeEqual,
    NotTildeFullEqual,
    NotTildeTilde,
    NotVerticalBar,
    nparallel,
    npar,
    nparsl,
    npart,
    npolint,
    npr,
    nprcue,
    nprec,
    npreceq,
    npre,
    nrarrc,
    nrarr,
    nrArr,
    nrarrw,
    nrightarrow,
    nRightarrow,
    nrtri,
    nrtrie,
    nsc,
    nsccue,
    nsce,
    Nscr,
    nscr,
    nshortmid,
    nshortparallel,
    nsim,
    nsime,
    nsimeq,
    nsmid,
    nspar,
    nsqsube,
    nsqsupe,
    nsub,
    nsubE,
    nsube,
    nsubset,
    nsubseteq,
    nsubseteqq,
    nsucc,
    nsucceq,
    nsup,
    nsupE,
    nsupe,
    nsupset,
    nsupseteq,
    nsupseteqq,
    ntgl,
    Ntilde,
    ntilde,
    ntlg,
    ntriangleleft,
    ntrianglelefteq,
    ntriangleright,
    ntrianglerighteq,
    Nu,
    nu,
    num,
    numero,
    numsp,
    nvap,
    nvdash,
    nvDash,
    nVdash,
    nVDash,
    nvge,
    nvgt,
    nvHarr,
    nvinfin,
    nvlArr,
    nvle,
    nvlt,
    nvltrie,
    nvrArr,
    nvrtrie,
    nvsim,
    nwarhk,
    nwarr,
    nwArr,
    nwarrow,
    nwnear,
    Oacute,
    oacute,
    oast,
    Ocirc,
    ocirc,
    ocir,
    Ocy,
    ocy,
    odash,
    Odblac,
    odblac,
    odiv,
    odot,
    odsold,
    OElig,
    oelig,
    ofcir,
    Ofr,
    ofr,
    ogon,
    Ograve,
    ograve,
    ogt,
    ohbar,
    ohm,
    oint,
    olarr,
    olcir,
    olcross,
    oline,
    olt,
    Omacr,
    omacr,
    Omega,
    omega,
    Omicron,
    omicron,
    omid,
    ominus,
    Oopf,
    oopf,
    opar,
    OpenCurlyDoubleQuote,
    OpenCurlyQuote,
    operp,
    oplus,
    orarr,
    Or,
    or,
    ord,
    order,
    orderof,
    ordf,
    ordm,
    origof,
    oror,
    orslope,
    orv,
    oS,
    Oscr,
    oscr,
    Oslash,
    oslash,
    osol,
    Otilde,
    otilde,
    otimesas,
    Otimes,
    otimes,
    Ouml,
    ouml,
    ovbar,
    OverBar,
    OverBrace,
    OverBracket,
    OverParenthesis,
    para,
    parallel,
    par,
    parsim,
    parsl,
    part,
    PartialD,
    Pcy,
    pcy,
    percnt,
    period,
    permil,
    perp,
    pertenk,
    Pfr,
    pfr,
    Phi,
    phi,
    phiv,
    phmmat,
    phone: phone$1,
    Pi,
    pi,
    pitchfork,
    piv,
    planck,
    planckh,
    plankv,
    plusacir,
    plusb,
    pluscir,
    plus,
    plusdo,
    plusdu,
    pluse,
    PlusMinus,
    plusmn,
    plussim,
    plustwo,
    pm,
    Poincareplane,
    pointint,
    popf,
    Popf,
    pound,
    prap,
    Pr,
    pr,
    prcue,
    precapprox,
    prec,
    preccurlyeq,
    Precedes,
    PrecedesEqual,
    PrecedesSlantEqual,
    PrecedesTilde,
    preceq,
    precnapprox,
    precneqq,
    precnsim,
    pre,
    prE,
    precsim,
    prime,
    Prime,
    primes,
    prnap,
    prnE,
    prnsim,
    prod,
    Product,
    profalar,
    profline,
    profsurf,
    prop,
    Proportional,
    Proportion,
    propto,
    prsim,
    prurel,
    Pscr,
    pscr,
    Psi,
    psi,
    puncsp,
    Qfr,
    qfr,
    qint,
    qopf,
    Qopf,
    qprime,
    Qscr,
    qscr,
    quaternions,
    quatint,
    quest,
    questeq,
    quot,
    QUOT,
    rAarr,
    race,
    Racute,
    racute,
    radic,
    raemptyv,
    rang,
    Rang,
    rangd,
    range,
    rangle,
    raquo,
    rarrap,
    rarrb,
    rarrbfs,
    rarrc,
    rarr,
    Rarr,
    rArr,
    rarrfs,
    rarrhk,
    rarrlp,
    rarrpl,
    rarrsim,
    Rarrtl,
    rarrtl,
    rarrw,
    ratail,
    rAtail,
    ratio,
    rationals,
    rbarr,
    rBarr,
    RBarr,
    rbbrk,
    rbrace,
    rbrack,
    rbrke,
    rbrksld,
    rbrkslu,
    Rcaron,
    rcaron,
    Rcedil,
    rcedil,
    rceil,
    rcub,
    Rcy,
    rcy,
    rdca,
    rdldhar,
    rdquo,
    rdquor,
    rdsh,
    real,
    realine,
    realpart,
    reals,
    Re,
    rect,
    reg,
    REG,
    ReverseElement,
    ReverseEquilibrium,
    ReverseUpEquilibrium,
    rfisht,
    rfloor,
    rfr,
    Rfr,
    rHar,
    rhard,
    rharu,
    rharul,
    Rho,
    rho,
    rhov,
    RightAngleBracket,
    RightArrowBar,
    rightarrow,
    RightArrow,
    Rightarrow,
    RightArrowLeftArrow,
    rightarrowtail,
    RightCeiling,
    RightDoubleBracket,
    RightDownTeeVector,
    RightDownVectorBar,
    RightDownVector,
    RightFloor,
    rightharpoondown,
    rightharpoonup,
    rightleftarrows,
    rightleftharpoons,
    rightrightarrows,
    rightsquigarrow,
    RightTeeArrow,
    RightTee,
    RightTeeVector,
    rightthreetimes,
    RightTriangleBar,
    RightTriangle,
    RightTriangleEqual,
    RightUpDownVector,
    RightUpTeeVector,
    RightUpVectorBar,
    RightUpVector,
    RightVectorBar,
    RightVector,
    ring,
    risingdotseq,
    rlarr,
    rlhar,
    rlm,
    rmoustache,
    rmoust,
    rnmid,
    roang,
    roarr,
    robrk,
    ropar,
    ropf,
    Ropf,
    roplus,
    rotimes,
    RoundImplies,
    rpar,
    rpargt,
    rppolint,
    rrarr,
    Rrightarrow,
    rsaquo,
    rscr,
    Rscr,
    rsh,
    Rsh,
    rsqb,
    rsquo,
    rsquor,
    rthree,
    rtimes,
    rtri,
    rtrie,
    rtrif,
    rtriltri,
    RuleDelayed,
    ruluhar,
    rx,
    Sacute,
    sacute,
    sbquo,
    scap,
    Scaron,
    scaron,
    Sc,
    sc,
    sccue,
    sce,
    scE,
    Scedil,
    scedil,
    Scirc,
    scirc,
    scnap,
    scnE,
    scnsim,
    scpolint,
    scsim,
    Scy,
    scy,
    sdotb,
    sdot,
    sdote,
    searhk,
    searr,
    seArr,
    searrow,
    sect,
    semi,
    seswar,
    setminus,
    setmn,
    sext,
    Sfr,
    sfr,
    sfrown,
    sharp,
    SHCHcy,
    shchcy,
    SHcy,
    shcy,
    ShortDownArrow,
    ShortLeftArrow,
    shortmid,
    shortparallel,
    ShortRightArrow,
    ShortUpArrow,
    shy,
    Sigma,
    sigma,
    sigmaf,
    sigmav,
    sim,
    simdot,
    sime,
    simeq,
    simg,
    simgE,
    siml,
    simlE,
    simne,
    simplus,
    simrarr,
    slarr,
    SmallCircle,
    smallsetminus,
    smashp,
    smeparsl,
    smid,
    smile: smile$1,
    smt,
    smte,
    smtes,
    SOFTcy,
    softcy,
    solbar,
    solb,
    sol,
    Sopf,
    sopf,
    spades,
    spadesuit,
    spar,
    sqcap,
    sqcaps,
    sqcup,
    sqcups,
    Sqrt,
    sqsub,
    sqsube,
    sqsubset,
    sqsubseteq,
    sqsup,
    sqsupe,
    sqsupset,
    sqsupseteq,
    square,
    Square,
    SquareIntersection,
    SquareSubset,
    SquareSubsetEqual,
    SquareSuperset,
    SquareSupersetEqual,
    SquareUnion,
    squarf,
    squ,
    squf,
    srarr,
    Sscr,
    sscr,
    ssetmn,
    ssmile,
    sstarf,
    Star,
    star: star$1,
    starf,
    straightepsilon,
    straightphi,
    strns,
    sub,
    Sub,
    subdot,
    subE,
    sube,
    subedot,
    submult,
    subnE,
    subne,
    subplus,
    subrarr,
    subset,
    Subset,
    subseteq,
    subseteqq,
    SubsetEqual,
    subsetneq,
    subsetneqq,
    subsim,
    subsub,
    subsup,
    succapprox,
    succ,
    succcurlyeq,
    Succeeds,
    SucceedsEqual,
    SucceedsSlantEqual,
    SucceedsTilde,
    succeq,
    succnapprox,
    succneqq,
    succnsim,
    succsim,
    SuchThat,
    sum,
    Sum,
    sung,
    sup1,
    sup2,
    sup3,
    sup,
    Sup,
    supdot,
    supdsub,
    supE,
    supe,
    supedot,
    Superset,
    SupersetEqual,
    suphsol,
    suphsub,
    suplarr,
    supmult,
    supnE,
    supne,
    supplus,
    supset,
    Supset,
    supseteq,
    supseteqq,
    supsetneq,
    supsetneqq,
    supsim,
    supsub,
    supsup,
    swarhk,
    swarr,
    swArr,
    swarrow,
    swnwar,
    szlig,
    Tab,
    target,
    Tau,
    tau,
    tbrk,
    Tcaron,
    tcaron,
    Tcedil,
    tcedil,
    Tcy,
    tcy,
    tdot,
    telrec,
    Tfr,
    tfr,
    there4,
    therefore,
    Therefore,
    Theta,
    theta,
    thetasym,
    thetav,
    thickapprox,
    thicksim,
    ThickSpace,
    ThinSpace,
    thinsp,
    thkap,
    thksim,
    THORN,
    thorn,
    tilde,
    Tilde,
    TildeEqual,
    TildeFullEqual,
    TildeTilde,
    timesbar,
    timesb,
    times,
    timesd,
    tint,
    toea,
    topbot,
    topcir,
    top,
    Topf,
    topf,
    topfork,
    tosa,
    tprime,
    trade,
    TRADE,
    triangle,
    triangledown,
    triangleleft,
    trianglelefteq,
    triangleq,
    triangleright,
    trianglerighteq,
    tridot,
    trie,
    triminus,
    TripleDot,
    triplus,
    trisb,
    tritime,
    trpezium,
    Tscr,
    tscr,
    TScy,
    tscy,
    TSHcy,
    tshcy,
    Tstrok,
    tstrok,
    twixt,
    twoheadleftarrow,
    twoheadrightarrow,
    Uacute,
    uacute,
    uarr,
    Uarr,
    uArr,
    Uarrocir,
    Ubrcy,
    ubrcy,
    Ubreve,
    ubreve,
    Ucirc,
    ucirc,
    Ucy,
    ucy,
    udarr,
    Udblac,
    udblac,
    udhar,
    ufisht,
    Ufr,
    ufr,
    Ugrave,
    ugrave,
    uHar,
    uharl,
    uharr,
    uhblk,
    ulcorn,
    ulcorner,
    ulcrop,
    ultri,
    Umacr,
    umacr,
    uml,
    UnderBar,
    UnderBrace,
    UnderBracket,
    UnderParenthesis,
    Union,
    UnionPlus,
    Uogon,
    uogon,
    Uopf,
    uopf,
    UpArrowBar,
    uparrow,
    UpArrow,
    Uparrow,
    UpArrowDownArrow,
    updownarrow,
    UpDownArrow,
    Updownarrow,
    UpEquilibrium,
    upharpoonleft,
    upharpoonright,
    uplus,
    UpperLeftArrow,
    UpperRightArrow,
    upsi,
    Upsi,
    upsih,
    Upsilon,
    upsilon,
    UpTeeArrow,
    UpTee,
    upuparrows,
    urcorn,
    urcorner,
    urcrop,
    Uring,
    uring,
    urtri,
    Uscr,
    uscr,
    utdot,
    Utilde,
    utilde,
    utri,
    utrif,
    uuarr,
    Uuml,
    uuml,
    uwangle,
    vangrt,
    varepsilon,
    varkappa,
    varnothing,
    varphi,
    varpi,
    varpropto,
    varr,
    vArr,
    varrho,
    varsigma,
    varsubsetneq,
    varsubsetneqq,
    varsupsetneq,
    varsupsetneqq,
    vartheta,
    vartriangleleft,
    vartriangleright,
    vBar,
    Vbar,
    vBarv,
    Vcy,
    vcy,
    vdash,
    vDash,
    Vdash,
    VDash,
    Vdashl,
    veebar,
    vee,
    Vee,
    veeeq,
    vellip,
    verbar,
    Verbar,
    vert,
    Vert,
    VerticalBar,
    VerticalLine,
    VerticalSeparator,
    VerticalTilde,
    VeryThinSpace,
    Vfr,
    vfr,
    vltri,
    vnsub,
    vnsup,
    Vopf,
    vopf,
    vprop,
    vrtri,
    Vscr,
    vscr,
    vsubnE,
    vsubne,
    vsupnE,
    vsupne,
    Vvdash,
    vzigzag,
    Wcirc,
    wcirc,
    wedbar,
    wedge,
    Wedge,
    wedgeq,
    weierp,
    Wfr,
    wfr,
    Wopf,
    wopf,
    wp,
    wr,
    wreath,
    Wscr,
    wscr,
    xcap,
    xcirc,
    xcup,
    xdtri,
    Xfr,
    xfr,
    xharr,
    xhArr,
    Xi,
    xi,
    xlarr,
    xlArr,
    xmap,
    xnis,
    xodot,
    Xopf,
    xopf,
    xoplus,
    xotime,
    xrarr,
    xrArr,
    Xscr,
    xscr,
    xsqcup,
    xuplus,
    xutri,
    xvee,
    xwedge,
    Yacute,
    yacute,
    YAcy,
    yacy,
    Ycirc,
    ycirc,
    Ycy,
    ycy,
    yen,
    Yfr,
    yfr,
    YIcy,
    yicy,
    Yopf,
    yopf,
    Yscr,
    yscr,
    YUcy,
    yucy,
    yuml,
    Yuml,
    Zacute,
    zacute,
    Zcaron,
    zcaron,
    Zcy,
    zcy,
    Zdot,
    zdot,
    zeetrf,
    ZeroWidthSpace,
    Zeta,
    zeta,
    zfr,
    Zfr,
    ZHcy,
    zhcy,
    zigrarr,
    zopf,
    Zopf,
    Zscr,
    zscr,
    zwj,
    zwnj
  };
  (function(module2) {
    module2.exports = require$$0;
  })(entities$1);
  var regex$4 = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/;
  var mdurl$1 = {};
  var encodeCache = {};
  function getEncodeCache(exclude) {
    var i2, ch, cache = encodeCache[exclude];
    if (cache) {
      return cache;
    }
    cache = encodeCache[exclude] = [];
    for (i2 = 0; i2 < 128; i2++) {
      ch = String.fromCharCode(i2);
      if (/^[0-9a-z]$/i.test(ch)) {
        cache.push(ch);
      } else {
        cache.push("%" + ("0" + i2.toString(16).toUpperCase()).slice(-2));
      }
    }
    for (i2 = 0; i2 < exclude.length; i2++) {
      cache[exclude.charCodeAt(i2)] = exclude[i2];
    }
    return cache;
  }
  function encode(string, exclude, keepEscaped) {
    var i2, l, code2, nextCode, cache, result = "";
    if (typeof exclude !== "string") {
      keepEscaped = exclude;
      exclude = encode.defaultChars;
    }
    if (typeof keepEscaped === "undefined") {
      keepEscaped = true;
    }
    cache = getEncodeCache(exclude);
    for (i2 = 0, l = string.length; i2 < l; i2++) {
      code2 = string.charCodeAt(i2);
      if (keepEscaped && code2 === 37 && i2 + 2 < l) {
        if (/^[0-9a-f]{2}$/i.test(string.slice(i2 + 1, i2 + 3))) {
          result += string.slice(i2, i2 + 3);
          i2 += 2;
          continue;
        }
      }
      if (code2 < 128) {
        result += cache[code2];
        continue;
      }
      if (code2 >= 55296 && code2 <= 57343) {
        if (code2 >= 55296 && code2 <= 56319 && i2 + 1 < l) {
          nextCode = string.charCodeAt(i2 + 1);
          if (nextCode >= 56320 && nextCode <= 57343) {
            result += encodeURIComponent(string[i2] + string[i2 + 1]);
            i2++;
            continue;
          }
        }
        result += "%EF%BF%BD";
        continue;
      }
      result += encodeURIComponent(string[i2]);
    }
    return result;
  }
  encode.defaultChars = ";/?:@&=+$,-_.!~*'()#";
  encode.componentChars = "-_.!~*'()";
  var encode_1 = encode;
  var decodeCache = {};
  function getDecodeCache(exclude) {
    var i2, ch, cache = decodeCache[exclude];
    if (cache) {
      return cache;
    }
    cache = decodeCache[exclude] = [];
    for (i2 = 0; i2 < 128; i2++) {
      ch = String.fromCharCode(i2);
      cache.push(ch);
    }
    for (i2 = 0; i2 < exclude.length; i2++) {
      ch = exclude.charCodeAt(i2);
      cache[ch] = "%" + ("0" + ch.toString(16).toUpperCase()).slice(-2);
    }
    return cache;
  }
  function decode(string, exclude) {
    var cache;
    if (typeof exclude !== "string") {
      exclude = decode.defaultChars;
    }
    cache = getDecodeCache(exclude);
    return string.replace(/(%[a-f0-9]{2})+/gi, function(seq) {
      var i2, l, b1, b2, b3, b4, chr, result = "";
      for (i2 = 0, l = seq.length; i2 < l; i2 += 3) {
        b1 = parseInt(seq.slice(i2 + 1, i2 + 3), 16);
        if (b1 < 128) {
          result += cache[b1];
          continue;
        }
        if ((b1 & 224) === 192 && i2 + 3 < l) {
          b2 = parseInt(seq.slice(i2 + 4, i2 + 6), 16);
          if ((b2 & 192) === 128) {
            chr = b1 << 6 & 1984 | b2 & 63;
            if (chr < 128) {
              result += "��";
            } else {
              result += String.fromCharCode(chr);
            }
            i2 += 3;
            continue;
          }
        }
        if ((b1 & 240) === 224 && i2 + 6 < l) {
          b2 = parseInt(seq.slice(i2 + 4, i2 + 6), 16);
          b3 = parseInt(seq.slice(i2 + 7, i2 + 9), 16);
          if ((b2 & 192) === 128 && (b3 & 192) === 128) {
            chr = b1 << 12 & 61440 | b2 << 6 & 4032 | b3 & 63;
            if (chr < 2048 || chr >= 55296 && chr <= 57343) {
              result += "���";
            } else {
              result += String.fromCharCode(chr);
            }
            i2 += 6;
            continue;
          }
        }
        if ((b1 & 248) === 240 && i2 + 9 < l) {
          b2 = parseInt(seq.slice(i2 + 4, i2 + 6), 16);
          b3 = parseInt(seq.slice(i2 + 7, i2 + 9), 16);
          b4 = parseInt(seq.slice(i2 + 10, i2 + 12), 16);
          if ((b2 & 192) === 128 && (b3 & 192) === 128 && (b4 & 192) === 128) {
            chr = b1 << 18 & 1835008 | b2 << 12 & 258048 | b3 << 6 & 4032 | b4 & 63;
            if (chr < 65536 || chr > 1114111) {
              result += "����";
            } else {
              chr -= 65536;
              result += String.fromCharCode(55296 + (chr >> 10), 56320 + (chr & 1023));
            }
            i2 += 9;
            continue;
          }
        }
        result += "�";
      }
      return result;
    });
  }
  decode.defaultChars = ";/?:@&=+$,#";
  decode.componentChars = "";
  var decode_1 = decode;
  var format = function format2(url) {
    var result = "";
    result += url.protocol || "";
    result += url.slashes ? "//" : "";
    result += url.auth ? url.auth + "@" : "";
    if (url.hostname && url.hostname.indexOf(":") !== -1) {
      result += "[" + url.hostname + "]";
    } else {
      result += url.hostname || "";
    }
    result += url.port ? ":" + url.port : "";
    result += url.pathname || "";
    result += url.search || "";
    result += url.hash || "";
    return result;
  };
  function Url() {
    this.protocol = null;
    this.slashes = null;
    this.auth = null;
    this.port = null;
    this.hostname = null;
    this.hash = null;
    this.search = null;
    this.pathname = null;
  }
  var protocolPattern = /^([a-z0-9.+-]+:)/i, portPattern = /:[0-9]*$/, simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, delims = ["<", ">", '"', "`", " ", "\r", "\n", "	"], unwise = ["{", "}", "|", "\\", "^", "`"].concat(delims), autoEscape = ["'"].concat(unwise), nonHostChars = ["%", "/", "?", ";", "#"].concat(autoEscape), hostEndingChars = ["/", "?", "#"], hostnameMaxLen = 255, hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/, hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, hostlessProtocol = {
    "javascript": true,
    "javascript:": true
  }, slashedProtocol = {
    "http": true,
    "https": true,
    "ftp": true,
    "gopher": true,
    "file": true,
    "http:": true,
    "https:": true,
    "ftp:": true,
    "gopher:": true,
    "file:": true
  };
  function urlParse(url, slashesDenoteHost) {
    if (url && url instanceof Url) {
      return url;
    }
    var u = new Url();
    u.parse(url, slashesDenoteHost);
    return u;
  }
  Url.prototype.parse = function(url, slashesDenoteHost) {
    var i2, l, lowerProto, hec, slashes, rest = url;
    rest = rest.trim();
    if (!slashesDenoteHost && url.split("#").length === 1) {
      var simplePath = simplePathPattern.exec(rest);
      if (simplePath) {
        this.pathname = simplePath[1];
        if (simplePath[2]) {
          this.search = simplePath[2];
        }
        return this;
      }
    }
    var proto = protocolPattern.exec(rest);
    if (proto) {
      proto = proto[0];
      lowerProto = proto.toLowerCase();
      this.protocol = proto;
      rest = rest.substr(proto.length);
    }
    if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
      slashes = rest.substr(0, 2) === "//";
      if (slashes && !(proto && hostlessProtocol[proto])) {
        rest = rest.substr(2);
        this.slashes = true;
      }
    }
    if (!hostlessProtocol[proto] && (slashes || proto && !slashedProtocol[proto])) {
      var hostEnd = -1;
      for (i2 = 0; i2 < hostEndingChars.length; i2++) {
        hec = rest.indexOf(hostEndingChars[i2]);
        if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) {
          hostEnd = hec;
        }
      }
      var auth, atSign;
      if (hostEnd === -1) {
        atSign = rest.lastIndexOf("@");
      } else {
        atSign = rest.lastIndexOf("@", hostEnd);
      }
      if (atSign !== -1) {
        auth = rest.slice(0, atSign);
        rest = rest.slice(atSign + 1);
        this.auth = auth;
      }
      hostEnd = -1;
      for (i2 = 0; i2 < nonHostChars.length; i2++) {
        hec = rest.indexOf(nonHostChars[i2]);
        if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) {
          hostEnd = hec;
        }
      }
      if (hostEnd === -1) {
        hostEnd = rest.length;
      }
      if (rest[hostEnd - 1] === ":") {
        hostEnd--;
      }
      var host = rest.slice(0, hostEnd);
      rest = rest.slice(hostEnd);
      this.parseHost(host);
      this.hostname = this.hostname || "";
      var ipv6Hostname = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
      if (!ipv6Hostname) {
        var hostparts = this.hostname.split(/\./);
        for (i2 = 0, l = hostparts.length; i2 < l; i2++) {
          var part2 = hostparts[i2];
          if (!part2) {
            continue;
          }
          if (!part2.match(hostnamePartPattern)) {
            var newpart = "";
            for (var j = 0, k = part2.length; j < k; j++) {
              if (part2.charCodeAt(j) > 127) {
                newpart += "x";
              } else {
                newpart += part2[j];
              }
            }
            if (!newpart.match(hostnamePartPattern)) {
              var validParts = hostparts.slice(0, i2);
              var notHost = hostparts.slice(i2 + 1);
              var bit = part2.match(hostnamePartStart);
              if (bit) {
                validParts.push(bit[1]);
                notHost.unshift(bit[2]);
              }
              if (notHost.length) {
                rest = notHost.join(".") + rest;
              }
              this.hostname = validParts.join(".");
              break;
            }
          }
        }
      }
      if (this.hostname.length > hostnameMaxLen) {
        this.hostname = "";
      }
      if (ipv6Hostname) {
        this.hostname = this.hostname.substr(1, this.hostname.length - 2);
      }
    }
    var hash = rest.indexOf("#");
    if (hash !== -1) {
      this.hash = rest.substr(hash);
      rest = rest.slice(0, hash);
    }
    var qm = rest.indexOf("?");
    if (qm !== -1) {
      this.search = rest.substr(qm);
      rest = rest.slice(0, qm);
    }
    if (rest) {
      this.pathname = rest;
    }
    if (slashedProtocol[lowerProto] && this.hostname && !this.pathname) {
      this.pathname = "";
    }
    return this;
  };
  Url.prototype.parseHost = function(host) {
    var port = portPattern.exec(host);
    if (port) {
      port = port[0];
      if (port !== ":") {
        this.port = port.substr(1);
      }
      host = host.substr(0, host.length - port.length);
    }
    if (host) {
      this.hostname = host;
    }
  };
  var parse = urlParse;
  mdurl$1.encode = encode_1;
  mdurl$1.decode = decode_1;
  mdurl$1.format = format;
  mdurl$1.parse = parse;
  var uc_micro = {};
  var regex$3;
  var hasRequiredRegex$3;
  function requireRegex$3() {
    if (hasRequiredRegex$3)
      return regex$3;
    hasRequiredRegex$3 = 1;
    regex$3 = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
    return regex$3;
  }
  var regex$2;
  var hasRequiredRegex$2;
  function requireRegex$2() {
    if (hasRequiredRegex$2)
      return regex$2;
    hasRequiredRegex$2 = 1;
    regex$2 = /[\0-\x1F\x7F-\x9F]/;
    return regex$2;
  }
  var regex$1;
  var hasRequiredRegex$1;
  function requireRegex$1() {
    if (hasRequiredRegex$1)
      return regex$1;
    hasRequiredRegex$1 = 1;
    regex$1 = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/;
    return regex$1;
  }
  var regex;
  var hasRequiredRegex;
  function requireRegex() {
    if (hasRequiredRegex)
      return regex;
    hasRequiredRegex = 1;
    regex = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/;
    return regex;
  }
  var hasRequiredUc_micro;
  function requireUc_micro() {
    if (hasRequiredUc_micro)
      return uc_micro;
    hasRequiredUc_micro = 1;
    uc_micro.Any = requireRegex$3();
    uc_micro.Cc = requireRegex$2();
    uc_micro.Cf = requireRegex$1();
    uc_micro.P = regex$4;
    uc_micro.Z = requireRegex();
    return uc_micro;
  }
  (function(exports3) {
    function _class2(obj) {
      return Object.prototype.toString.call(obj);
    }
    function isString2(obj) {
      return _class2(obj) === "[object String]";
    }
    var _hasOwnProperty = Object.prototype.hasOwnProperty;
    function has2(object, key) {
      return _hasOwnProperty.call(object, key);
    }
    function assign2(obj) {
      var sources = Array.prototype.slice.call(arguments, 1);
      sources.forEach(function(source2) {
        if (!source2) {
          return;
        }
        if (typeof source2 !== "object") {
          throw new TypeError(source2 + "must be object");
        }
        Object.keys(source2).forEach(function(key) {
          obj[key] = source2[key];
        });
      });
      return obj;
    }
    function arrayReplaceAt2(src, pos, newElements) {
      return [].concat(src.slice(0, pos), newElements, src.slice(pos + 1));
    }
    function isValidEntityCode2(c) {
      if (c >= 55296 && c <= 57343) {
        return false;
      }
      if (c >= 64976 && c <= 65007) {
        return false;
      }
      if ((c & 65535) === 65535 || (c & 65535) === 65534) {
        return false;
      }
      if (c >= 0 && c <= 8) {
        return false;
      }
      if (c === 11) {
        return false;
      }
      if (c >= 14 && c <= 31) {
        return false;
      }
      if (c >= 127 && c <= 159) {
        return false;
      }
      if (c > 1114111) {
        return false;
      }
      return true;
    }
    function fromCodePoint2(c) {
      if (c > 65535) {
        c -= 65536;
        var surrogate1 = 55296 + (c >> 10), surrogate2 = 56320 + (c & 1023);
        return String.fromCharCode(surrogate1, surrogate2);
      }
      return String.fromCharCode(c);
    }
    var UNESCAPE_MD_RE = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g;
    var ENTITY_RE = /&([a-z#][a-z0-9]{1,31});/gi;
    var UNESCAPE_ALL_RE = new RegExp(UNESCAPE_MD_RE.source + "|" + ENTITY_RE.source, "gi");
    var DIGITAL_ENTITY_TEST_RE = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i;
    var entities2 = entitiesExports;
    function replaceEntityPattern(match, name) {
      var code2 = 0;
      if (has2(entities2, name)) {
        return entities2[name];
      }
      if (name.charCodeAt(0) === 35 && DIGITAL_ENTITY_TEST_RE.test(name)) {
        code2 = name[1].toLowerCase() === "x" ? parseInt(name.slice(2), 16) : parseInt(name.slice(1), 10);
        if (isValidEntityCode2(code2)) {
          return fromCodePoint2(code2);
        }
      }
      return match;
    }
    function unescapeMd(str) {
      if (str.indexOf("\\") < 0) {
        return str;
      }
      return str.replace(UNESCAPE_MD_RE, "$1");
    }
    function unescapeAll2(str) {
      if (str.indexOf("\\") < 0 && str.indexOf("&") < 0) {
        return str;
      }
      return str.replace(UNESCAPE_ALL_RE, function(match, escaped, entity2) {
        if (escaped) {
          return escaped;
        }
        return replaceEntityPattern(match, entity2);
      });
    }
    var HTML_ESCAPE_TEST_RE = /[&<>"]/;
    var HTML_ESCAPE_REPLACE_RE = /[&<>"]/g;
    var HTML_REPLACEMENTS = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;"
    };
    function replaceUnsafeChar(ch) {
      return HTML_REPLACEMENTS[ch];
    }
    function escapeHtml2(str) {
      if (HTML_ESCAPE_TEST_RE.test(str)) {
        return str.replace(HTML_ESCAPE_REPLACE_RE, replaceUnsafeChar);
      }
      return str;
    }
    var REGEXP_ESCAPE_RE = /[.?*+^$[\]\\(){}|-]/g;
    function escapeRE2(str) {
      return str.replace(REGEXP_ESCAPE_RE, "\\$&");
    }
    function isSpace2(code2) {
      switch (code2) {
        case 9:
        case 32:
          return true;
      }
      return false;
    }
    function isWhiteSpace2(code2) {
      if (code2 >= 8192 && code2 <= 8202) {
        return true;
      }
      switch (code2) {
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 32:
        case 160:
        case 5760:
        case 8239:
        case 8287:
        case 12288:
          return true;
      }
      return false;
    }
    var UNICODE_PUNCT_RE = regex$4;
    function isPunctChar2(ch) {
      return UNICODE_PUNCT_RE.test(ch);
    }
    function isMdAsciiPunct2(ch) {
      switch (ch) {
        case 33:
        case 34:
        case 35:
        case 36:
        case 37:
        case 38:
        case 39:
        case 40:
        case 41:
        case 42:
        case 43:
        case 44:
        case 45:
        case 46:
        case 47:
        case 58:
        case 59:
        case 60:
        case 61:
        case 62:
        case 63:
        case 64:
        case 91:
        case 92:
        case 93:
        case 94:
        case 95:
        case 96:
        case 123:
        case 124:
        case 125:
        case 126:
          return true;
        default:
          return false;
      }
    }
    function normalizeReference2(str) {
      str = str.trim().replace(/\s+/g, " ");
      if ("ẞ".toLowerCase() === "Ṿ") {
        str = str.replace(/ẞ/g, "ß");
      }
      return str.toLowerCase().toUpperCase();
    }
    exports3.lib = {};
    exports3.lib.mdurl = mdurl$1;
    exports3.lib.ucmicro = requireUc_micro();
    exports3.assign = assign2;
    exports3.isString = isString2;
    exports3.has = has2;
    exports3.unescapeMd = unescapeMd;
    exports3.unescapeAll = unescapeAll2;
    exports3.isValidEntityCode = isValidEntityCode2;
    exports3.fromCodePoint = fromCodePoint2;
    exports3.escapeHtml = escapeHtml2;
    exports3.arrayReplaceAt = arrayReplaceAt2;
    exports3.isSpace = isSpace2;
    exports3.isWhiteSpace = isWhiteSpace2;
    exports3.isMdAsciiPunct = isMdAsciiPunct2;
    exports3.isPunctChar = isPunctChar2;
    exports3.escapeRE = escapeRE2;
    exports3.normalizeReference = normalizeReference2;
  })(utils$1);
  var helpers$1 = {};
  var parse_link_label = function parseLinkLabel(state, start, disableNested) {
    var level, found, marker2, prevPos, labelEnd = -1, max = state.posMax, oldPos = state.pos;
    state.pos = start + 1;
    level = 1;
    while (state.pos < max) {
      marker2 = state.src.charCodeAt(state.pos);
      if (marker2 === 93) {
        level--;
        if (level === 0) {
          found = true;
          break;
        }
      }
      prevPos = state.pos;
      state.md.inline.skipToken(state);
      if (marker2 === 91) {
        if (prevPos === state.pos - 1) {
          level++;
        } else if (disableNested) {
          state.pos = oldPos;
          return -1;
        }
      }
    }
    if (found) {
      labelEnd = state.pos;
    }
    state.pos = oldPos;
    return labelEnd;
  };
  var unescapeAll$2 = utils$1.unescapeAll;
  var parse_link_destination = function parseLinkDestination(str, pos, max) {
    var code2, level, lines = 0, start = pos, result = {
      ok: false,
      pos: 0,
      lines: 0,
      str: ""
    };
    if (str.charCodeAt(pos) === 60) {
      pos++;
      while (pos < max) {
        code2 = str.charCodeAt(pos);
        if (code2 === 10) {
          return result;
        }
        if (code2 === 60) {
          return result;
        }
        if (code2 === 62) {
          result.pos = pos + 1;
          result.str = unescapeAll$2(str.slice(start + 1, pos));
          result.ok = true;
          return result;
        }
        if (code2 === 92 && pos + 1 < max) {
          pos += 2;
          continue;
        }
        pos++;
      }
      return result;
    }
    level = 0;
    while (pos < max) {
      code2 = str.charCodeAt(pos);
      if (code2 === 32) {
        break;
      }
      if (code2 < 32 || code2 === 127) {
        break;
      }
      if (code2 === 92 && pos + 1 < max) {
        if (str.charCodeAt(pos + 1) === 32) {
          break;
        }
        pos += 2;
        continue;
      }
      if (code2 === 40) {
        level++;
        if (level > 32) {
          return result;
        }
      }
      if (code2 === 41) {
        if (level === 0) {
          break;
        }
        level--;
      }
      pos++;
    }
    if (start === pos) {
      return result;
    }
    if (level !== 0) {
      return result;
    }
    result.str = unescapeAll$2(str.slice(start, pos));
    result.lines = lines;
    result.pos = pos;
    result.ok = true;
    return result;
  };
  var unescapeAll$1 = utils$1.unescapeAll;
  var parse_link_title = function parseLinkTitle(str, pos, max) {
    var code2, marker2, lines = 0, start = pos, result = {
      ok: false,
      pos: 0,
      lines: 0,
      str: ""
    };
    if (pos >= max) {
      return result;
    }
    marker2 = str.charCodeAt(pos);
    if (marker2 !== 34 && marker2 !== 39 && marker2 !== 40) {
      return result;
    }
    pos++;
    if (marker2 === 40) {
      marker2 = 41;
    }
    while (pos < max) {
      code2 = str.charCodeAt(pos);
      if (code2 === marker2) {
        result.pos = pos + 1;
        result.lines = lines;
        result.str = unescapeAll$1(str.slice(start + 1, pos));
        result.ok = true;
        return result;
      } else if (code2 === 40 && marker2 === 41) {
        return result;
      } else if (code2 === 10) {
        lines++;
      } else if (code2 === 92 && pos + 1 < max) {
        pos++;
        if (str.charCodeAt(pos) === 10) {
          lines++;
        }
      }
      pos++;
    }
    return result;
  };
  helpers$1.parseLinkLabel = parse_link_label;
  helpers$1.parseLinkDestination = parse_link_destination;
  helpers$1.parseLinkTitle = parse_link_title;
  var assign$1 = utils$1.assign;
  var unescapeAll = utils$1.unescapeAll;
  var escapeHtml = utils$1.escapeHtml;
  var default_rules = {};
  default_rules.code_inline = function(tokens, idx, options, env, slf) {
    var token2 = tokens[idx];
    return "<code" + slf.renderAttrs(token2) + ">" + escapeHtml(tokens[idx].content) + "</code>";
  };
  default_rules.code_block = function(tokens, idx, options, env, slf) {
    var token2 = tokens[idx];
    return "<pre" + slf.renderAttrs(token2) + "><code>" + escapeHtml(tokens[idx].content) + "</code></pre>\n";
  };
  default_rules.fence = function(tokens, idx, options, env, slf) {
    var token2 = tokens[idx], info = token2.info ? unescapeAll(token2.info).trim() : "", langName = "", langAttrs = "", highlighted, i2, arr, tmpAttrs, tmpToken;
    if (info) {
      arr = info.split(/(\s+)/g);
      langName = arr[0];
      langAttrs = arr.slice(2).join("");
    }
    if (options.highlight) {
      highlighted = options.highlight(token2.content, langName, langAttrs) || escapeHtml(token2.content);
    } else {
      highlighted = escapeHtml(token2.content);
    }
    if (highlighted.indexOf("<pre") === 0) {
      return highlighted + "\n";
    }
    if (info) {
      i2 = token2.attrIndex("class");
      tmpAttrs = token2.attrs ? token2.attrs.slice() : [];
      if (i2 < 0) {
        tmpAttrs.push(["class", options.langPrefix + langName]);
      } else {
        tmpAttrs[i2] = tmpAttrs[i2].slice();
        tmpAttrs[i2][1] += " " + options.langPrefix + langName;
      }
      tmpToken = {
        attrs: tmpAttrs
      };
      return "<pre><code" + slf.renderAttrs(tmpToken) + ">" + highlighted + "</code></pre>\n";
    }
    return "<pre><code" + slf.renderAttrs(token2) + ">" + highlighted + "</code></pre>\n";
  };
  default_rules.image = function(tokens, idx, options, env, slf) {
    var token2 = tokens[idx];
    token2.attrs[token2.attrIndex("alt")][1] = slf.renderInlineAsText(token2.children, options, env);
    return slf.renderToken(tokens, idx, options);
  };
  default_rules.hardbreak = function(tokens, idx, options) {
    return options.xhtmlOut ? "<br />\n" : "<br>\n";
  };
  default_rules.softbreak = function(tokens, idx, options) {
    return options.breaks ? options.xhtmlOut ? "<br />\n" : "<br>\n" : "\n";
  };
  default_rules.text = function(tokens, idx) {
    return escapeHtml(tokens[idx].content);
  };
  default_rules.html_block = function(tokens, idx) {
    return tokens[idx].content;
  };
  default_rules.html_inline = function(tokens, idx) {
    return tokens[idx].content;
  };
  function Renderer$1() {
    this.rules = assign$1({}, default_rules);
  }
  Renderer$1.prototype.renderAttrs = function renderAttrs(token2) {
    var i2, l, result;
    if (!token2.attrs) {
      return "";
    }
    result = "";
    for (i2 = 0, l = token2.attrs.length; i2 < l; i2++) {
      result += " " + escapeHtml(token2.attrs[i2][0]) + '="' + escapeHtml(token2.attrs[i2][1]) + '"';
    }
    return result;
  };
  Renderer$1.prototype.renderToken = function renderToken(tokens, idx, options) {
    var nextToken, result = "", needLf = false, token2 = tokens[idx];
    if (token2.hidden) {
      return "";
    }
    if (token2.block && token2.nesting !== -1 && idx && tokens[idx - 1].hidden) {
      result += "\n";
    }
    result += (token2.nesting === -1 ? "</" : "<") + token2.tag;
    result += this.renderAttrs(token2);
    if (token2.nesting === 0 && options.xhtmlOut) {
      result += " /";
    }
    if (token2.block) {
      needLf = true;
      if (token2.nesting === 1) {
        if (idx + 1 < tokens.length) {
          nextToken = tokens[idx + 1];
          if (nextToken.type === "inline" || nextToken.hidden) {
            needLf = false;
          } else if (nextToken.nesting === -1 && nextToken.tag === token2.tag) {
            needLf = false;
          }
        }
      }
    }
    result += needLf ? ">\n" : ">";
    return result;
  };
  Renderer$1.prototype.renderInline = function(tokens, options, env) {
    var type, result = "", rules = this.rules;
    for (var i2 = 0, len = tokens.length; i2 < len; i2++) {
      type = tokens[i2].type;
      if (typeof rules[type] !== "undefined") {
        result += rules[type](tokens, i2, options, env, this);
      } else {
        result += this.renderToken(tokens, i2, options);
      }
    }
    return result;
  };
  Renderer$1.prototype.renderInlineAsText = function(tokens, options, env) {
    var result = "";
    for (var i2 = 0, len = tokens.length; i2 < len; i2++) {
      if (tokens[i2].type === "text") {
        result += tokens[i2].content;
      } else if (tokens[i2].type === "image") {
        result += this.renderInlineAsText(tokens[i2].children, options, env);
      } else if (tokens[i2].type === "softbreak") {
        result += "\n";
      }
    }
    return result;
  };
  Renderer$1.prototype.render = function(tokens, options, env) {
    var i2, len, type, result = "", rules = this.rules;
    for (i2 = 0, len = tokens.length; i2 < len; i2++) {
      type = tokens[i2].type;
      if (type === "inline") {
        result += this.renderInline(tokens[i2].children, options, env);
      } else if (typeof rules[type] !== "undefined") {
        result += rules[tokens[i2].type](tokens, i2, options, env, this);
      } else {
        result += this.renderToken(tokens, i2, options, env);
      }
    }
    return result;
  };
  var renderer = Renderer$1;
  function Ruler$3() {
    this.__rules__ = [];
    this.__cache__ = null;
  }
  Ruler$3.prototype.__find__ = function(name) {
    for (var i2 = 0; i2 < this.__rules__.length; i2++) {
      if (this.__rules__[i2].name === name) {
        return i2;
      }
    }
    return -1;
  };
  Ruler$3.prototype.__compile__ = function() {
    var self2 = this;
    var chains = [""];
    self2.__rules__.forEach(function(rule) {
      if (!rule.enabled) {
        return;
      }
      rule.alt.forEach(function(altName) {
        if (chains.indexOf(altName) < 0) {
          chains.push(altName);
        }
      });
    });
    self2.__cache__ = {};
    chains.forEach(function(chain) {
      self2.__cache__[chain] = [];
      self2.__rules__.forEach(function(rule) {
        if (!rule.enabled) {
          return;
        }
        if (chain && rule.alt.indexOf(chain) < 0) {
          return;
        }
        self2.__cache__[chain].push(rule.fn);
      });
    });
  };
  Ruler$3.prototype.at = function(name, fn, options) {
    var index = this.__find__(name);
    var opt = options || {};
    if (index === -1) {
      throw new Error("Parser rule not found: " + name);
    }
    this.__rules__[index].fn = fn;
    this.__rules__[index].alt = opt.alt || [];
    this.__cache__ = null;
  };
  Ruler$3.prototype.before = function(beforeName, ruleName, fn, options) {
    var index = this.__find__(beforeName);
    var opt = options || {};
    if (index === -1) {
      throw new Error("Parser rule not found: " + beforeName);
    }
    this.__rules__.splice(index, 0, {
      name: ruleName,
      enabled: true,
      fn,
      alt: opt.alt || []
    });
    this.__cache__ = null;
  };
  Ruler$3.prototype.after = function(afterName, ruleName, fn, options) {
    var index = this.__find__(afterName);
    var opt = options || {};
    if (index === -1) {
      throw new Error("Parser rule not found: " + afterName);
    }
    this.__rules__.splice(index + 1, 0, {
      name: ruleName,
      enabled: true,
      fn,
      alt: opt.alt || []
    });
    this.__cache__ = null;
  };
  Ruler$3.prototype.push = function(ruleName, fn, options) {
    var opt = options || {};
    this.__rules__.push({
      name: ruleName,
      enabled: true,
      fn,
      alt: opt.alt || []
    });
    this.__cache__ = null;
  };
  Ruler$3.prototype.enable = function(list2, ignoreInvalid) {
    if (!Array.isArray(list2)) {
      list2 = [list2];
    }
    var result = [];
    list2.forEach(function(name) {
      var idx = this.__find__(name);
      if (idx < 0) {
        if (ignoreInvalid) {
          return;
        }
        throw new Error("Rules manager: invalid rule name " + name);
      }
      this.__rules__[idx].enabled = true;
      result.push(name);
    }, this);
    this.__cache__ = null;
    return result;
  };
  Ruler$3.prototype.enableOnly = function(list2, ignoreInvalid) {
    if (!Array.isArray(list2)) {
      list2 = [list2];
    }
    this.__rules__.forEach(function(rule) {
      rule.enabled = false;
    });
    this.enable(list2, ignoreInvalid);
  };
  Ruler$3.prototype.disable = function(list2, ignoreInvalid) {
    if (!Array.isArray(list2)) {
      list2 = [list2];
    }
    var result = [];
    list2.forEach(function(name) {
      var idx = this.__find__(name);
      if (idx < 0) {
        if (ignoreInvalid) {
          return;
        }
        throw new Error("Rules manager: invalid rule name " + name);
      }
      this.__rules__[idx].enabled = false;
      result.push(name);
    }, this);
    this.__cache__ = null;
    return result;
  };
  Ruler$3.prototype.getRules = function(chainName) {
    if (this.__cache__ === null) {
      this.__compile__();
    }
    return this.__cache__[chainName] || [];
  };
  var ruler = Ruler$3;
  var NEWLINES_RE = /\r\n?|\n/g;
  var NULL_RE = /\0/g;
  var normalize = function normalize2(state) {
    var str;
    str = state.src.replace(NEWLINES_RE, "\n");
    str = str.replace(NULL_RE, "�");
    state.src = str;
  };
  var block = function block2(state) {
    var token2;
    if (state.inlineMode) {
      token2 = new state.Token("inline", "", 0);
      token2.content = state.src;
      token2.map = [0, 1];
      token2.children = [];
      state.tokens.push(token2);
    } else {
      state.md.block.parse(state.src, state.md, state.env, state.tokens);
    }
  };
  var inline = function inline2(state) {
    var tokens = state.tokens, tok, i2, l;
    for (i2 = 0, l = tokens.length; i2 < l; i2++) {
      tok = tokens[i2];
      if (tok.type === "inline") {
        state.md.inline.parse(tok.content, state.md, state.env, tok.children);
      }
    }
  };
  var arrayReplaceAt = utils$1.arrayReplaceAt;
  function isLinkOpen$1(str) {
    return /^<a[>\s]/i.test(str);
  }
  function isLinkClose$1(str) {
    return /^<\/a\s*>/i.test(str);
  }
  var linkify$1 = function linkify2(state) {
    var i2, j, l, tokens, token2, currentToken, nodes, ln, text2, pos, lastPos, level, htmlLinkLevel, url, fullUrl, urlText, blockTokens = state.tokens, links;
    if (!state.md.options.linkify) {
      return;
    }
    for (j = 0, l = blockTokens.length; j < l; j++) {
      if (blockTokens[j].type !== "inline" || !state.md.linkify.pretest(blockTokens[j].content)) {
        continue;
      }
      tokens = blockTokens[j].children;
      htmlLinkLevel = 0;
      for (i2 = tokens.length - 1; i2 >= 0; i2--) {
        currentToken = tokens[i2];
        if (currentToken.type === "link_close") {
          i2--;
          while (tokens[i2].level !== currentToken.level && tokens[i2].type !== "link_open") {
            i2--;
          }
          continue;
        }
        if (currentToken.type === "html_inline") {
          if (isLinkOpen$1(currentToken.content) && htmlLinkLevel > 0) {
            htmlLinkLevel--;
          }
          if (isLinkClose$1(currentToken.content)) {
            htmlLinkLevel++;
          }
        }
        if (htmlLinkLevel > 0) {
          continue;
        }
        if (currentToken.type === "text" && state.md.linkify.test(currentToken.content)) {
          text2 = currentToken.content;
          links = state.md.linkify.match(text2);
          nodes = [];
          level = currentToken.level;
          lastPos = 0;
          if (links.length > 0 && links[0].index === 0 && i2 > 0 && tokens[i2 - 1].type === "text_special") {
            links = links.slice(1);
          }
          for (ln = 0; ln < links.length; ln++) {
            url = links[ln].url;
            fullUrl = state.md.normalizeLink(url);
            if (!state.md.validateLink(fullUrl)) {
              continue;
            }
            urlText = links[ln].text;
            if (!links[ln].schema) {
              urlText = state.md.normalizeLinkText("http://" + urlText).replace(/^http:\/\//, "");
            } else if (links[ln].schema === "mailto:" && !/^mailto:/i.test(urlText)) {
              urlText = state.md.normalizeLinkText("mailto:" + urlText).replace(/^mailto:/, "");
            } else {
              urlText = state.md.normalizeLinkText(urlText);
            }
            pos = links[ln].index;
            if (pos > lastPos) {
              token2 = new state.Token("text", "", 0);
              token2.content = text2.slice(lastPos, pos);
              token2.level = level;
              nodes.push(token2);
            }
            token2 = new state.Token("link_open", "a", 1);
            token2.attrs = [["href", fullUrl]];
            token2.level = level++;
            token2.markup = "linkify";
            token2.info = "auto";
            nodes.push(token2);
            token2 = new state.Token("text", "", 0);
            token2.content = urlText;
            token2.level = level;
            nodes.push(token2);
            token2 = new state.Token("link_close", "a", -1);
            token2.level = --level;
            token2.markup = "linkify";
            token2.info = "auto";
            nodes.push(token2);
            lastPos = links[ln].lastIndex;
          }
          if (lastPos < text2.length) {
            token2 = new state.Token("text", "", 0);
            token2.content = text2.slice(lastPos);
            token2.level = level;
            nodes.push(token2);
          }
          blockTokens[j].children = tokens = arrayReplaceAt(tokens, i2, nodes);
        }
      }
    }
  };
  var RARE_RE = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/;
  var SCOPED_ABBR_TEST_RE = /\((c|tm|r)\)/i;
  var SCOPED_ABBR_RE = /\((c|tm|r)\)/ig;
  var SCOPED_ABBR = {
    c: "©",
    r: "®",
    tm: "™"
  };
  function replaceFn(match, name) {
    return SCOPED_ABBR[name.toLowerCase()];
  }
  function replace_scoped(inlineTokens) {
    var i2, token2, inside_autolink = 0;
    for (i2 = inlineTokens.length - 1; i2 >= 0; i2--) {
      token2 = inlineTokens[i2];
      if (token2.type === "text" && !inside_autolink) {
        token2.content = token2.content.replace(SCOPED_ABBR_RE, replaceFn);
      }
      if (token2.type === "link_open" && token2.info === "auto") {
        inside_autolink--;
      }
      if (token2.type === "link_close" && token2.info === "auto") {
        inside_autolink++;
      }
    }
  }
  function replace_rare(inlineTokens) {
    var i2, token2, inside_autolink = 0;
    for (i2 = inlineTokens.length - 1; i2 >= 0; i2--) {
      token2 = inlineTokens[i2];
      if (token2.type === "text" && !inside_autolink) {
        if (RARE_RE.test(token2.content)) {
          token2.content = token2.content.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/mg, "$1—").replace(/(^|\s)--(?=\s|$)/mg, "$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg, "$1–");
        }
      }
      if (token2.type === "link_open" && token2.info === "auto") {
        inside_autolink--;
      }
      if (token2.type === "link_close" && token2.info === "auto") {
        inside_autolink++;
      }
    }
  }
  var replacements = function replace2(state) {
    var blkIdx;
    if (!state.md.options.typographer) {
      return;
    }
    for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {
      if (state.tokens[blkIdx].type !== "inline") {
        continue;
      }
      if (SCOPED_ABBR_TEST_RE.test(state.tokens[blkIdx].content)) {
        replace_scoped(state.tokens[blkIdx].children);
      }
      if (RARE_RE.test(state.tokens[blkIdx].content)) {
        replace_rare(state.tokens[blkIdx].children);
      }
    }
  };
  var isWhiteSpace$1 = utils$1.isWhiteSpace;
  var isPunctChar$1 = utils$1.isPunctChar;
  var isMdAsciiPunct$1 = utils$1.isMdAsciiPunct;
  var QUOTE_TEST_RE = /['"]/;
  var QUOTE_RE = /['"]/g;
  var APOSTROPHE = "’";
  function replaceAt(str, index, ch) {
    return str.slice(0, index) + ch + str.slice(index + 1);
  }
  function process_inlines(tokens, state) {
    var i2, token2, text2, t, pos, max, thisLevel, item, lastChar, nextChar, isLastPunctChar, isNextPunctChar, isLastWhiteSpace, isNextWhiteSpace, canOpen, canClose, j, isSingle, stack, openQuote, closeQuote;
    stack = [];
    for (i2 = 0; i2 < tokens.length; i2++) {
      token2 = tokens[i2];
      thisLevel = tokens[i2].level;
      for (j = stack.length - 1; j >= 0; j--) {
        if (stack[j].level <= thisLevel) {
          break;
        }
      }
      stack.length = j + 1;
      if (token2.type !== "text") {
        continue;
      }
      text2 = token2.content;
      pos = 0;
      max = text2.length;
      OUTER:
        while (pos < max) {
          QUOTE_RE.lastIndex = pos;
          t = QUOTE_RE.exec(text2);
          if (!t) {
            break;
          }
          canOpen = canClose = true;
          pos = t.index + 1;
          isSingle = t[0] === "'";
          lastChar = 32;
          if (t.index - 1 >= 0) {
            lastChar = text2.charCodeAt(t.index - 1);
          } else {
            for (j = i2 - 1; j >= 0; j--) {
              if (tokens[j].type === "softbreak" || tokens[j].type === "hardbreak")
                break;
              if (!tokens[j].content)
                continue;
              lastChar = tokens[j].content.charCodeAt(tokens[j].content.length - 1);
              break;
            }
          }
          nextChar = 32;
          if (pos < max) {
            nextChar = text2.charCodeAt(pos);
          } else {
            for (j = i2 + 1; j < tokens.length; j++) {
              if (tokens[j].type === "softbreak" || tokens[j].type === "hardbreak")
                break;
              if (!tokens[j].content)
                continue;
              nextChar = tokens[j].content.charCodeAt(0);
              break;
            }
          }
          isLastPunctChar = isMdAsciiPunct$1(lastChar) || isPunctChar$1(String.fromCharCode(lastChar));
          isNextPunctChar = isMdAsciiPunct$1(nextChar) || isPunctChar$1(String.fromCharCode(nextChar));
          isLastWhiteSpace = isWhiteSpace$1(lastChar);
          isNextWhiteSpace = isWhiteSpace$1(nextChar);
          if (isNextWhiteSpace) {
            canOpen = false;
          } else if (isNextPunctChar) {
            if (!(isLastWhiteSpace || isLastPunctChar)) {
              canOpen = false;
            }
          }
          if (isLastWhiteSpace) {
            canClose = false;
          } else if (isLastPunctChar) {
            if (!(isNextWhiteSpace || isNextPunctChar)) {
              canClose = false;
            }
          }
          if (nextChar === 34 && t[0] === '"') {
            if (lastChar >= 48 && lastChar <= 57) {
              canClose = canOpen = false;
            }
          }
          if (canOpen && canClose) {
            canOpen = isLastPunctChar;
            canClose = isNextPunctChar;
          }
          if (!canOpen && !canClose) {
            if (isSingle) {
              token2.content = replaceAt(token2.content, t.index, APOSTROPHE);
            }
            continue;
          }
          if (canClose) {
            for (j = stack.length - 1; j >= 0; j--) {
              item = stack[j];
              if (stack[j].level < thisLevel) {
                break;
              }
              if (item.single === isSingle && stack[j].level === thisLevel) {
                item = stack[j];
                if (isSingle) {
                  openQuote = state.md.options.quotes[2];
                  closeQuote = state.md.options.quotes[3];
                } else {
                  openQuote = state.md.options.quotes[0];
                  closeQuote = state.md.options.quotes[1];
                }
                token2.content = replaceAt(token2.content, t.index, closeQuote);
                tokens[item.token].content = replaceAt(
                  tokens[item.token].content,
                  item.pos,
                  openQuote
                );
                pos += closeQuote.length - 1;
                if (item.token === i2) {
                  pos += openQuote.length - 1;
                }
                text2 = token2.content;
                max = text2.length;
                stack.length = j;
                continue OUTER;
              }
            }
          }
          if (canOpen) {
            stack.push({
              token: i2,
              pos: t.index,
              single: isSingle,
              level: thisLevel
            });
          } else if (canClose && isSingle) {
            token2.content = replaceAt(token2.content, t.index, APOSTROPHE);
          }
        }
    }
  }
  var smartquotes = function smartquotes2(state) {
    var blkIdx;
    if (!state.md.options.typographer) {
      return;
    }
    for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {
      if (state.tokens[blkIdx].type !== "inline" || !QUOTE_TEST_RE.test(state.tokens[blkIdx].content)) {
        continue;
      }
      process_inlines(state.tokens[blkIdx].children, state);
    }
  };
  var text_join = function text_join2(state) {
    var j, l, tokens, curr, max, last, blockTokens = state.tokens;
    for (j = 0, l = blockTokens.length; j < l; j++) {
      if (blockTokens[j].type !== "inline")
        continue;
      tokens = blockTokens[j].children;
      max = tokens.length;
      for (curr = 0; curr < max; curr++) {
        if (tokens[curr].type === "text_special") {
          tokens[curr].type = "text";
        }
      }
      for (curr = last = 0; curr < max; curr++) {
        if (tokens[curr].type === "text" && curr + 1 < max && tokens[curr + 1].type === "text") {
          tokens[curr + 1].content = tokens[curr].content + tokens[curr + 1].content;
        } else {
          if (curr !== last) {
            tokens[last] = tokens[curr];
          }
          last++;
        }
      }
      if (curr !== last) {
        tokens.length = last;
      }
    }
  };
  function Token$3(type, tag, nesting) {
    this.type = type;
    this.tag = tag;
    this.attrs = null;
    this.map = null;
    this.nesting = nesting;
    this.level = 0;
    this.children = null;
    this.content = "";
    this.markup = "";
    this.info = "";
    this.meta = null;
    this.block = false;
    this.hidden = false;
  }
  Token$3.prototype.attrIndex = function attrIndex(name) {
    var attrs, i2, len;
    if (!this.attrs) {
      return -1;
    }
    attrs = this.attrs;
    for (i2 = 0, len = attrs.length; i2 < len; i2++) {
      if (attrs[i2][0] === name) {
        return i2;
      }
    }
    return -1;
  };
  Token$3.prototype.attrPush = function attrPush(attrData) {
    if (this.attrs) {
      this.attrs.push(attrData);
    } else {
      this.attrs = [attrData];
    }
  };
  Token$3.prototype.attrSet = function attrSet(name, value) {
    var idx = this.attrIndex(name), attrData = [name, value];
    if (idx < 0) {
      this.attrPush(attrData);
    } else {
      this.attrs[idx] = attrData;
    }
  };
  Token$3.prototype.attrGet = function attrGet(name) {
    var idx = this.attrIndex(name), value = null;
    if (idx >= 0) {
      value = this.attrs[idx][1];
    }
    return value;
  };
  Token$3.prototype.attrJoin = function attrJoin(name, value) {
    var idx = this.attrIndex(name);
    if (idx < 0) {
      this.attrPush([name, value]);
    } else {
      this.attrs[idx][1] = this.attrs[idx][1] + " " + value;
    }
  };
  var token = Token$3;
  var Token$2 = token;
  function StateCore(src, md, env) {
    this.src = src;
    this.env = env;
    this.tokens = [];
    this.inlineMode = false;
    this.md = md;
  }
  StateCore.prototype.Token = Token$2;
  var state_core = StateCore;
  var Ruler$2 = ruler;
  var _rules$2 = [
    ["normalize", normalize],
    ["block", block],
    ["inline", inline],
    ["linkify", linkify$1],
    ["replacements", replacements],
    ["smartquotes", smartquotes],
    // `text_join` finds `text_special` tokens (for escape sequences)
    // and joins them with the rest of the text
    ["text_join", text_join]
  ];
  function Core() {
    this.ruler = new Ruler$2();
    for (var i2 = 0; i2 < _rules$2.length; i2++) {
      this.ruler.push(_rules$2[i2][0], _rules$2[i2][1]);
    }
  }
  Core.prototype.process = function(state) {
    var i2, l, rules;
    rules = this.ruler.getRules("");
    for (i2 = 0, l = rules.length; i2 < l; i2++) {
      rules[i2](state);
    }
  };
  Core.prototype.State = state_core;
  var parser_core = Core;
  var isSpace$a = utils$1.isSpace;
  function getLine(state, line) {
    var pos = state.bMarks[line] + state.tShift[line], max = state.eMarks[line];
    return state.src.slice(pos, max);
  }
  function escapedSplit(str) {
    var result = [], pos = 0, max = str.length, ch, isEscaped = false, lastPos = 0, current = "";
    ch = str.charCodeAt(pos);
    while (pos < max) {
      if (ch === 124) {
        if (!isEscaped) {
          result.push(current + str.substring(lastPos, pos));
          current = "";
          lastPos = pos + 1;
        } else {
          current += str.substring(lastPos, pos - 1);
          lastPos = pos;
        }
      }
      isEscaped = ch === 92;
      pos++;
      ch = str.charCodeAt(pos);
    }
    result.push(current + str.substring(lastPos));
    return result;
  }
  var table = function table2(state, startLine, endLine, silent) {
    var ch, lineText, pos, i2, l, nextLine, columns, columnCount, token2, aligns, t, tableLines, tbodyLines, oldParentType, terminate, terminatorRules, firstCh, secondCh;
    if (startLine + 2 > endLine) {
      return false;
    }
    nextLine = startLine + 1;
    if (state.sCount[nextLine] < state.blkIndent) {
      return false;
    }
    if (state.sCount[nextLine] - state.blkIndent >= 4) {
      return false;
    }
    pos = state.bMarks[nextLine] + state.tShift[nextLine];
    if (pos >= state.eMarks[nextLine]) {
      return false;
    }
    firstCh = state.src.charCodeAt(pos++);
    if (firstCh !== 124 && firstCh !== 45 && firstCh !== 58) {
      return false;
    }
    if (pos >= state.eMarks[nextLine]) {
      return false;
    }
    secondCh = state.src.charCodeAt(pos++);
    if (secondCh !== 124 && secondCh !== 45 && secondCh !== 58 && !isSpace$a(secondCh)) {
      return false;
    }
    if (firstCh === 45 && isSpace$a(secondCh)) {
      return false;
    }
    while (pos < state.eMarks[nextLine]) {
      ch = state.src.charCodeAt(pos);
      if (ch !== 124 && ch !== 45 && ch !== 58 && !isSpace$a(ch)) {
        return false;
      }
      pos++;
    }
    lineText = getLine(state, startLine + 1);
    columns = lineText.split("|");
    aligns = [];
    for (i2 = 0; i2 < columns.length; i2++) {
      t = columns[i2].trim();
      if (!t) {
        if (i2 === 0 || i2 === columns.length - 1) {
          continue;
        } else {
          return false;
        }
      }
      if (!/^:?-+:?$/.test(t)) {
        return false;
      }
      if (t.charCodeAt(t.length - 1) === 58) {
        aligns.push(t.charCodeAt(0) === 58 ? "center" : "right");
      } else if (t.charCodeAt(0) === 58) {
        aligns.push("left");
      } else {
        aligns.push("");
      }
    }
    lineText = getLine(state, startLine).trim();
    if (lineText.indexOf("|") === -1) {
      return false;
    }
    if (state.sCount[startLine] - state.blkIndent >= 4) {
      return false;
    }
    columns = escapedSplit(lineText);
    if (columns.length && columns[0] === "")
      columns.shift();
    if (columns.length && columns[columns.length - 1] === "")
      columns.pop();
    columnCount = columns.length;
    if (columnCount === 0 || columnCount !== aligns.length) {
      return false;
    }
    if (silent) {
      return true;
    }
    oldParentType = state.parentType;
    state.parentType = "table";
    terminatorRules = state.md.block.ruler.getRules("blockquote");
    token2 = state.push("table_open", "table", 1);
    token2.map = tableLines = [startLine, 0];
    token2 = state.push("thead_open", "thead", 1);
    token2.map = [startLine, startLine + 1];
    token2 = state.push("tr_open", "tr", 1);
    token2.map = [startLine, startLine + 1];
    for (i2 = 0; i2 < columns.length; i2++) {
      token2 = state.push("th_open", "th", 1);
      if (aligns[i2]) {
        token2.attrs = [["style", "text-align:" + aligns[i2]]];
      }
      token2 = state.push("inline", "", 0);
      token2.content = columns[i2].trim();
      token2.children = [];
      token2 = state.push("th_close", "th", -1);
    }
    token2 = state.push("tr_close", "tr", -1);
    token2 = state.push("thead_close", "thead", -1);
    for (nextLine = startLine + 2; nextLine < endLine; nextLine++) {
      if (state.sCount[nextLine] < state.blkIndent) {
        break;
      }
      terminate = false;
      for (i2 = 0, l = terminatorRules.length; i2 < l; i2++) {
        if (terminatorRules[i2](state, nextLine, endLine, true)) {
          terminate = true;
          break;
        }
      }
      if (terminate) {
        break;
      }
      lineText = getLine(state, nextLine).trim();
      if (!lineText) {
        break;
      }
      if (state.sCount[nextLine] - state.blkIndent >= 4) {
        break;
      }
      columns = escapedSplit(lineText);
      if (columns.length && columns[0] === "")
        columns.shift();
      if (columns.length && columns[columns.length - 1] === "")
        columns.pop();
      if (nextLine === startLine + 2) {
        token2 = state.push("tbody_open", "tbody", 1);
        token2.map = tbodyLines = [startLine + 2, 0];
      }
      token2 = state.push("tr_open", "tr", 1);
      token2.map = [nextLine, nextLine + 1];
      for (i2 = 0; i2 < columnCount; i2++) {
        token2 = state.push("td_open", "td", 1);
        if (aligns[i2]) {
          token2.attrs = [["style", "text-align:" + aligns[i2]]];
        }
        token2 = state.push("inline", "", 0);
        token2.content = columns[i2] ? columns[i2].trim() : "";
        token2.children = [];
        token2 = state.push("td_close", "td", -1);
      }
      token2 = state.push("tr_close", "tr", -1);
    }
    if (tbodyLines) {
      token2 = state.push("tbody_close", "tbody", -1);
      tbodyLines[1] = nextLine;
    }
    token2 = state.push("table_close", "table", -1);
    tableLines[1] = nextLine;
    state.parentType = oldParentType;
    state.line = nextLine;
    return true;
  };
  var code$1 = function code2(state, startLine, endLine) {
    var nextLine, last, token2;
    if (state.sCount[startLine] - state.blkIndent < 4) {
      return false;
    }
    last = nextLine = startLine + 1;
    while (nextLine < endLine) {
      if (state.isEmpty(nextLine)) {
        nextLine++;
        continue;
      }
      if (state.sCount[nextLine] - state.blkIndent >= 4) {
        nextLine++;
        last = nextLine;
        continue;
      }
      break;
    }
    state.line = last;
    token2 = state.push("code_block", "code", 0);
    token2.content = state.getLines(startLine, last, 4 + state.blkIndent, false) + "\n";
    token2.map = [startLine, state.line];
    return true;
  };
  var fence = function fence2(state, startLine, endLine, silent) {
    var marker2, len, params, nextLine, mem, token2, markup, haveEndMarker = false, pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine];
    if (state.sCount[startLine] - state.blkIndent >= 4) {
      return false;
    }
    if (pos + 3 > max) {
      return false;
    }
    marker2 = state.src.charCodeAt(pos);
    if (marker2 !== 126 && marker2 !== 96) {
      return false;
    }
    mem = pos;
    pos = state.skipChars(pos, marker2);
    len = pos - mem;
    if (len < 3) {
      return false;
    }
    markup = state.src.slice(mem, pos);
    params = state.src.slice(pos, max);
    if (marker2 === 96) {
      if (params.indexOf(String.fromCharCode(marker2)) >= 0) {
        return false;
      }
    }
    if (silent) {
      return true;
    }
    nextLine = startLine;
    for (; ; ) {
      nextLine++;
      if (nextLine >= endLine) {
        break;
      }
      pos = mem = state.bMarks[nextLine] + state.tShift[nextLine];
      max = state.eMarks[nextLine];
      if (pos < max && state.sCount[nextLine] < state.blkIndent) {
        break;
      }
      if (state.src.charCodeAt(pos) !== marker2) {
        continue;
      }
      if (state.sCount[nextLine] - state.blkIndent >= 4) {
        continue;
      }
      pos = state.skipChars(pos, marker2);
      if (pos - mem < len) {
        continue;
      }
      pos = state.skipSpaces(pos);
      if (pos < max) {
        continue;
      }
      haveEndMarker = true;
      break;
    }
    len = state.sCount[startLine];
    state.line = nextLine + (haveEndMarker ? 1 : 0);
    token2 = state.push("fence", "code", 0);
    token2.info = params;
    token2.content = state.getLines(startLine + 1, nextLine, len, true);
    token2.markup = markup;
    token2.map = [startLine, state.line];
    return true;
  };
  var isSpace$9 = utils$1.isSpace;
  var blockquote = function blockquote2(state, startLine, endLine, silent) {
    var adjustTab, ch, i2, initial, l, lastLineEmpty, lines, nextLine, offset, oldBMarks, oldBSCount, oldIndent, oldParentType, oldSCount, oldTShift, spaceAfterMarker, terminate, terminatorRules, token2, isOutdented, oldLineMax = state.lineMax, pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine];
    if (state.sCount[startLine] - state.blkIndent >= 4) {
      return false;
    }
    if (state.src.charCodeAt(pos++) !== 62) {
      return false;
    }
    if (silent) {
      return true;
    }
    initial = offset = state.sCount[startLine] + 1;
    if (state.src.charCodeAt(pos) === 32) {
      pos++;
      initial++;
      offset++;
      adjustTab = false;
      spaceAfterMarker = true;
    } else if (state.src.charCodeAt(pos) === 9) {
      spaceAfterMarker = true;
      if ((state.bsCount[startLine] + offset) % 4 === 3) {
        pos++;
        initial++;
        offset++;
        adjustTab = false;
      } else {
        adjustTab = true;
      }
    } else {
      spaceAfterMarker = false;
    }
    oldBMarks = [state.bMarks[startLine]];
    state.bMarks[startLine] = pos;
    while (pos < max) {
      ch = state.src.charCodeAt(pos);
      if (isSpace$9(ch)) {
        if (ch === 9) {
          offset += 4 - (offset + state.bsCount[startLine] + (adjustTab ? 1 : 0)) % 4;
        } else {
          offset++;
        }
      } else {
        break;
      }
      pos++;
    }
    oldBSCount = [state.bsCount[startLine]];
    state.bsCount[startLine] = state.sCount[startLine] + 1 + (spaceAfterMarker ? 1 : 0);
    lastLineEmpty = pos >= max;
    oldSCount = [state.sCount[startLine]];
    state.sCount[startLine] = offset - initial;
    oldTShift = [state.tShift[startLine]];
    state.tShift[startLine] = pos - state.bMarks[startLine];
    terminatorRules = state.md.block.ruler.getRules("blockquote");
    oldParentType = state.parentType;
    state.parentType = "blockquote";
    for (nextLine = startLine + 1; nextLine < endLine; nextLine++) {
      isOutdented = state.sCount[nextLine] < state.blkIndent;
      pos = state.bMarks[nextLine] + state.tShift[nextLine];
      max = state.eMarks[nextLine];
      if (pos >= max) {
        break;
      }
      if (state.src.charCodeAt(pos++) === 62 && !isOutdented) {
        initial = offset = state.sCount[nextLine] + 1;
        if (state.src.charCodeAt(pos) === 32) {
          pos++;
          initial++;
          offset++;
          adjustTab = false;
          spaceAfterMarker = true;
        } else if (state.src.charCodeAt(pos) === 9) {
          spaceAfterMarker = true;
          if ((state.bsCount[nextLine] + offset) % 4 === 3) {
            pos++;
            initial++;
            offset++;
            adjustTab = false;
          } else {
            adjustTab = true;
          }
        } else {
          spaceAfterMarker = false;
        }
        oldBMarks.push(state.bMarks[nextLine]);
        state.bMarks[nextLine] = pos;
        while (pos < max) {
          ch = state.src.charCodeAt(pos);
          if (isSpace$9(ch)) {
            if (ch === 9) {
              offset += 4 - (offset + state.bsCount[nextLine] + (adjustTab ? 1 : 0)) % 4;
            } else {
              offset++;
            }
          } else {
            break;
          }
          pos++;
        }
        lastLineEmpty = pos >= max;
        oldBSCount.push(state.bsCount[nextLine]);
        state.bsCount[nextLine] = state.sCount[nextLine] + 1 + (spaceAfterMarker ? 1 : 0);
        oldSCount.push(state.sCount[nextLine]);
        state.sCount[nextLine] = offset - initial;
        oldTShift.push(state.tShift[nextLine]);
        state.tShift[nextLine] = pos - state.bMarks[nextLine];
        continue;
      }
      if (lastLineEmpty) {
        break;
      }
      terminate = false;
      for (i2 = 0, l = terminatorRules.length; i2 < l; i2++) {
        if (terminatorRules[i2](state, nextLine, endLine, true)) {
          terminate = true;
          break;
        }
      }
      if (terminate) {
        state.lineMax = nextLine;
        if (state.blkIndent !== 0) {
          oldBMarks.push(state.bMarks[nextLine]);
          oldBSCount.push(state.bsCount[nextLine]);
          oldTShift.push(state.tShift[nextLine]);
          oldSCount.push(state.sCount[nextLine]);
          state.sCount[nextLine] -= state.blkIndent;
        }
        break;
      }
      oldBMarks.push(state.bMarks[nextLine]);
      oldBSCount.push(state.bsCount[nextLine]);
      oldTShift.push(state.tShift[nextLine]);
      oldSCount.push(state.sCount[nextLine]);
      state.sCount[nextLine] = -1;
    }
    oldIndent = state.blkIndent;
    state.blkIndent = 0;
    token2 = state.push("blockquote_open", "blockquote", 1);
    token2.markup = ">";
    token2.map = lines = [startLine, 0];
    state.md.block.tokenize(state, startLine, nextLine);
    token2 = state.push("blockquote_close", "blockquote", -1);
    token2.markup = ">";
    state.lineMax = oldLineMax;
    state.parentType = oldParentType;
    lines[1] = state.line;
    for (i2 = 0; i2 < oldTShift.length; i2++) {
      state.bMarks[i2 + startLine] = oldBMarks[i2];
      state.tShift[i2 + startLine] = oldTShift[i2];
      state.sCount[i2 + startLine] = oldSCount[i2];
      state.bsCount[i2 + startLine] = oldBSCount[i2];
    }
    state.blkIndent = oldIndent;
    return true;
  };
  var isSpace$8 = utils$1.isSpace;
  var hr = function hr2(state, startLine, endLine, silent) {
    var marker2, cnt, ch, token2, pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine];
    if (state.sCount[startLine] - state.blkIndent >= 4) {
      return false;
    }
    marker2 = state.src.charCodeAt(pos++);
    if (marker2 !== 42 && marker2 !== 45 && marker2 !== 95) {
      return false;
    }
    cnt = 1;
    while (pos < max) {
      ch = state.src.charCodeAt(pos++);
      if (ch !== marker2 && !isSpace$8(ch)) {
        return false;
      }
      if (ch === marker2) {
        cnt++;
      }
    }
    if (cnt < 3) {
      return false;
    }
    if (silent) {
      return true;
    }
    state.line = startLine + 1;
    token2 = state.push("hr", "hr", 0);
    token2.map = [startLine, state.line];
    token2.markup = Array(cnt + 1).join(String.fromCharCode(marker2));
    return true;
  };
  var isSpace$7 = utils$1.isSpace;
  function skipBulletListMarker(state, startLine) {
    var marker2, pos, max, ch;
    pos = state.bMarks[startLine] + state.tShift[startLine];
    max = state.eMarks[startLine];
    marker2 = state.src.charCodeAt(pos++);
    if (marker2 !== 42 && marker2 !== 45 && marker2 !== 43) {
      return -1;
    }
    if (pos < max) {
      ch = state.src.charCodeAt(pos);
      if (!isSpace$7(ch)) {
        return -1;
      }
    }
    return pos;
  }
  function skipOrderedListMarker(state, startLine) {
    var ch, start = state.bMarks[startLine] + state.tShift[startLine], pos = start, max = state.eMarks[startLine];
    if (pos + 1 >= max) {
      return -1;
    }
    ch = state.src.charCodeAt(pos++);
    if (ch < 48 || ch > 57) {
      return -1;
    }
    for (; ; ) {
      if (pos >= max) {
        return -1;
      }
      ch = state.src.charCodeAt(pos++);
      if (ch >= 48 && ch <= 57) {
        if (pos - start >= 10) {
          return -1;
        }
        continue;
      }
      if (ch === 41 || ch === 46) {
        break;
      }
      return -1;
    }
    if (pos < max) {
      ch = state.src.charCodeAt(pos);
      if (!isSpace$7(ch)) {
        return -1;
      }
    }
    return pos;
  }
  function markTightParagraphs(state, idx) {
    var i2, l, level = state.level + 2;
    for (i2 = idx + 2, l = state.tokens.length - 2; i2 < l; i2++) {
      if (state.tokens[i2].level === level && state.tokens[i2].type === "paragraph_open") {
        state.tokens[i2 + 2].hidden = true;
        state.tokens[i2].hidden = true;
        i2 += 2;
      }
    }
  }
  var list$2 = function list2(state, startLine, endLine, silent) {
    var ch, contentStart, i2, indent, indentAfterMarker, initial, isOrdered, itemLines, l, listLines, listTokIdx, markerCharCode, markerValue, max, nextLine, offset, oldListIndent, oldParentType, oldSCount, oldTShift, oldTight, pos, posAfterMarker, prevEmptyEnd, start, terminate, terminatorRules, token2, isTerminatingParagraph = false, tight = true;
    if (state.sCount[startLine] - state.blkIndent >= 4) {
      return false;
    }
    if (state.listIndent >= 0 && state.sCount[startLine] - state.listIndent >= 4 && state.sCount[startLine] < state.blkIndent) {
      return false;
    }
    if (silent && state.parentType === "paragraph") {
      if (state.sCount[startLine] >= state.blkIndent) {
        isTerminatingParagraph = true;
      }
    }
    if ((posAfterMarker = skipOrderedListMarker(state, startLine)) >= 0) {
      isOrdered = true;
      start = state.bMarks[startLine] + state.tShift[startLine];
      markerValue = Number(state.src.slice(start, posAfterMarker - 1));
      if (isTerminatingParagraph && markerValue !== 1)
        return false;
    } else if ((posAfterMarker = skipBulletListMarker(state, startLine)) >= 0) {
      isOrdered = false;
    } else {
      return false;
    }
    if (isTerminatingParagraph) {
      if (state.skipSpaces(posAfterMarker) >= state.eMarks[startLine])
        return false;
    }
    markerCharCode = state.src.charCodeAt(posAfterMarker - 1);
    if (silent) {
      return true;
    }
    listTokIdx = state.tokens.length;
    if (isOrdered) {
      token2 = state.push("ordered_list_open", "ol", 1);
      if (markerValue !== 1) {
        token2.attrs = [["start", markerValue]];
      }
    } else {
      token2 = state.push("bullet_list_open", "ul", 1);
    }
    token2.map = listLines = [startLine, 0];
    token2.markup = String.fromCharCode(markerCharCode);
    nextLine = startLine;
    prevEmptyEnd = false;
    terminatorRules = state.md.block.ruler.getRules("list");
    oldParentType = state.parentType;
    state.parentType = "list";
    while (nextLine < endLine) {
      pos = posAfterMarker;
      max = state.eMarks[nextLine];
      initial = offset = state.sCount[nextLine] + posAfterMarker - (state.bMarks[startLine] + state.tShift[startLine]);
      while (pos < max) {
        ch = state.src.charCodeAt(pos);
        if (ch === 9) {
          offset += 4 - (offset + state.bsCount[nextLine]) % 4;
        } else if (ch === 32) {
          offset++;
        } else {
          break;
        }
        pos++;
      }
      contentStart = pos;
      if (contentStart >= max) {
        indentAfterMarker = 1;
      } else {
        indentAfterMarker = offset - initial;
      }
      if (indentAfterMarker > 4) {
        indentAfterMarker = 1;
      }
      indent = initial + indentAfterMarker;
      token2 = state.push("list_item_open", "li", 1);
      token2.markup = String.fromCharCode(markerCharCode);
      token2.map = itemLines = [startLine, 0];
      if (isOrdered) {
        token2.info = state.src.slice(start, posAfterMarker - 1);
      }
      oldTight = state.tight;
      oldTShift = state.tShift[startLine];
      oldSCount = state.sCount[startLine];
      oldListIndent = state.listIndent;
      state.listIndent = state.blkIndent;
      state.blkIndent = indent;
      state.tight = true;
      state.tShift[startLine] = contentStart - state.bMarks[startLine];
      state.sCount[startLine] = offset;
      if (contentStart >= max && state.isEmpty(startLine + 1)) {
        state.line = Math.min(state.line + 2, endLine);
      } else {
        state.md.block.tokenize(state, startLine, endLine, true);
      }
      if (!state.tight || prevEmptyEnd) {
        tight = false;
      }
      prevEmptyEnd = state.line - startLine > 1 && state.isEmpty(state.line - 1);
      state.blkIndent = state.listIndent;
      state.listIndent = oldListIndent;
      state.tShift[startLine] = oldTShift;
      state.sCount[startLine] = oldSCount;
      state.tight = oldTight;
      token2 = state.push("list_item_close", "li", -1);
      token2.markup = String.fromCharCode(markerCharCode);
      nextLine = startLine = state.line;
      itemLines[1] = nextLine;
      contentStart = state.bMarks[startLine];
      if (nextLine >= endLine) {
        break;
      }
      if (state.sCount[nextLine] < state.blkIndent) {
        break;
      }
      if (state.sCount[startLine] - state.blkIndent >= 4) {
        break;
      }
      terminate = false;
      for (i2 = 0, l = terminatorRules.length; i2 < l; i2++) {
        if (terminatorRules[i2](state, nextLine, endLine, true)) {
          terminate = true;
          break;
        }
      }
      if (terminate) {
        break;
      }
      if (isOrdered) {
        posAfterMarker = skipOrderedListMarker(state, nextLine);
        if (posAfterMarker < 0) {
          break;
        }
        start = state.bMarks[nextLine] + state.tShift[nextLine];
      } else {
        posAfterMarker = skipBulletListMarker(state, nextLine);
        if (posAfterMarker < 0) {
          break;
        }
      }
      if (markerCharCode !== state.src.charCodeAt(posAfterMarker - 1)) {
        break;
      }
    }
    if (isOrdered) {
      token2 = state.push("ordered_list_close", "ol", -1);
    } else {
      token2 = state.push("bullet_list_close", "ul", -1);
    }
    token2.markup = String.fromCharCode(markerCharCode);
    listLines[1] = nextLine;
    state.line = nextLine;
    state.parentType = oldParentType;
    if (tight) {
      markTightParagraphs(state, listTokIdx);
    }
    return true;
  };
  var normalizeReference$2 = utils$1.normalizeReference;
  var isSpace$6 = utils$1.isSpace;
  var reference = function reference2(state, startLine, _endLine, silent) {
    var ch, destEndPos, destEndLineNo, endLine, href, i2, l, label, labelEnd, oldParentType, res, start, str, terminate, terminatorRules, title, lines = 0, pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine], nextLine = startLine + 1;
    if (state.sCount[startLine] - state.blkIndent >= 4) {
      return false;
    }
    if (state.src.charCodeAt(pos) !== 91) {
      return false;
    }
    while (++pos < max) {
      if (state.src.charCodeAt(pos) === 93 && state.src.charCodeAt(pos - 1) !== 92) {
        if (pos + 1 === max) {
          return false;
        }
        if (state.src.charCodeAt(pos + 1) !== 58) {
          return false;
        }
        break;
      }
    }
    endLine = state.lineMax;
    terminatorRules = state.md.block.ruler.getRules("reference");
    oldParentType = state.parentType;
    state.parentType = "reference";
    for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
      if (state.sCount[nextLine] - state.blkIndent > 3) {
        continue;
      }
      if (state.sCount[nextLine] < 0) {
        continue;
      }
      terminate = false;
      for (i2 = 0, l = terminatorRules.length; i2 < l; i2++) {
        if (terminatorRules[i2](state, nextLine, endLine, true)) {
          terminate = true;
          break;
        }
      }
      if (terminate) {
        break;
      }
    }
    str = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
    max = str.length;
    for (pos = 1; pos < max; pos++) {
      ch = str.charCodeAt(pos);
      if (ch === 91) {
        return false;
      } else if (ch === 93) {
        labelEnd = pos;
        break;
      } else if (ch === 10) {
        lines++;
      } else if (ch === 92) {
        pos++;
        if (pos < max && str.charCodeAt(pos) === 10) {
          lines++;
        }
      }
    }
    if (labelEnd < 0 || str.charCodeAt(labelEnd + 1) !== 58) {
      return false;
    }
    for (pos = labelEnd + 2; pos < max; pos++) {
      ch = str.charCodeAt(pos);
      if (ch === 10) {
        lines++;
      } else if (isSpace$6(ch))
        ;
      else {
        break;
      }
    }
    res = state.md.helpers.parseLinkDestination(str, pos, max);
    if (!res.ok) {
      return false;
    }
    href = state.md.normalizeLink(res.str);
    if (!state.md.validateLink(href)) {
      return false;
    }
    pos = res.pos;
    lines += res.lines;
    destEndPos = pos;
    destEndLineNo = lines;
    start = pos;
    for (; pos < max; pos++) {
      ch = str.charCodeAt(pos);
      if (ch === 10) {
        lines++;
      } else if (isSpace$6(ch))
        ;
      else {
        break;
      }
    }
    res = state.md.helpers.parseLinkTitle(str, pos, max);
    if (pos < max && start !== pos && res.ok) {
      title = res.str;
      pos = res.pos;
      lines += res.lines;
    } else {
      title = "";
      pos = destEndPos;
      lines = destEndLineNo;
    }
    while (pos < max) {
      ch = str.charCodeAt(pos);
      if (!isSpace$6(ch)) {
        break;
      }
      pos++;
    }
    if (pos < max && str.charCodeAt(pos) !== 10) {
      if (title) {
        title = "";
        pos = destEndPos;
        lines = destEndLineNo;
        while (pos < max) {
          ch = str.charCodeAt(pos);
          if (!isSpace$6(ch)) {
            break;
          }
          pos++;
        }
      }
    }
    if (pos < max && str.charCodeAt(pos) !== 10) {
      return false;
    }
    label = normalizeReference$2(str.slice(1, labelEnd));
    if (!label) {
      return false;
    }
    if (silent) {
      return true;
    }
    if (typeof state.env.references === "undefined") {
      state.env.references = {};
    }
    if (typeof state.env.references[label] === "undefined") {
      state.env.references[label] = { title, href };
    }
    state.parentType = oldParentType;
    state.line = startLine + lines + 1;
    return true;
  };
  var html_blocks = [
    "address",
    "article",
    "aside",
    "base",
    "basefont",
    "blockquote",
    "body",
    "caption",
    "center",
    "col",
    "colgroup",
    "dd",
    "details",
    "dialog",
    "dir",
    "div",
    "dl",
    "dt",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "frame",
    "frameset",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hr",
    "html",
    "iframe",
    "legend",
    "li",
    "link",
    "main",
    "menu",
    "menuitem",
    "nav",
    "noframes",
    "ol",
    "optgroup",
    "option",
    "p",
    "param",
    "section",
    "source",
    "summary",
    "table",
    "tbody",
    "td",
    "tfoot",
    "th",
    "thead",
    "title",
    "tr",
    "track",
    "ul"
  ];
  var html_re = {};
  var attr_name = "[a-zA-Z_:][a-zA-Z0-9:._-]*";
  var unquoted = "[^\"'=<>`\\x00-\\x20]+";
  var single_quoted = "'[^']*'";
  var double_quoted = '"[^"]*"';
  var attr_value = "(?:" + unquoted + "|" + single_quoted + "|" + double_quoted + ")";
  var attribute = "(?:\\s+" + attr_name + "(?:\\s*=\\s*" + attr_value + ")?)";
  var open_tag = "<[A-Za-z][A-Za-z0-9\\-]*" + attribute + "*\\s*\\/?>";
  var close_tag = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>";
  var comment = "<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->";
  var processing = "<[?][\\s\\S]*?[?]>";
  var declaration = "<![A-Z]+\\s+[^>]*>";
  var cdata = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>";
  var HTML_TAG_RE$1 = new RegExp("^(?:" + open_tag + "|" + close_tag + "|" + comment + "|" + processing + "|" + declaration + "|" + cdata + ")");
  var HTML_OPEN_CLOSE_TAG_RE$1 = new RegExp("^(?:" + open_tag + "|" + close_tag + ")");
  html_re.HTML_TAG_RE = HTML_TAG_RE$1;
  html_re.HTML_OPEN_CLOSE_TAG_RE = HTML_OPEN_CLOSE_TAG_RE$1;
  var block_names = html_blocks;
  var HTML_OPEN_CLOSE_TAG_RE = html_re.HTML_OPEN_CLOSE_TAG_RE;
  var HTML_SEQUENCES = [
    [/^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, true],
    [/^<!--/, /-->/, true],
    [/^<\?/, /\?>/, true],
    [/^<![A-Z]/, />/, true],
    [/^<!\[CDATA\[/, /\]\]>/, true],
    [new RegExp("^</?(" + block_names.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, true],
    [new RegExp(HTML_OPEN_CLOSE_TAG_RE.source + "\\s*$"), /^$/, false]
  ];
  var html_block = function html_block2(state, startLine, endLine, silent) {
    var i2, nextLine, token2, lineText, pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine];
    if (state.sCount[startLine] - state.blkIndent >= 4) {
      return false;
    }
    if (!state.md.options.html) {
      return false;
    }
    if (state.src.charCodeAt(pos) !== 60) {
      return false;
    }
    lineText = state.src.slice(pos, max);
    for (i2 = 0; i2 < HTML_SEQUENCES.length; i2++) {
      if (HTML_SEQUENCES[i2][0].test(lineText)) {
        break;
      }
    }
    if (i2 === HTML_SEQUENCES.length) {
      return false;
    }
    if (silent) {
      return HTML_SEQUENCES[i2][2];
    }
    nextLine = startLine + 1;
    if (!HTML_SEQUENCES[i2][1].test(lineText)) {
      for (; nextLine < endLine; nextLine++) {
        if (state.sCount[nextLine] < state.blkIndent) {
          break;
        }
        pos = state.bMarks[nextLine] + state.tShift[nextLine];
        max = state.eMarks[nextLine];
        lineText = state.src.slice(pos, max);
        if (HTML_SEQUENCES[i2][1].test(lineText)) {
          if (lineText.length !== 0) {
            nextLine++;
          }
          break;
        }
      }
    }
    state.line = nextLine;
    token2 = state.push("html_block", "", 0);
    token2.map = [startLine, nextLine];
    token2.content = state.getLines(startLine, nextLine, state.blkIndent, true);
    return true;
  };
  var isSpace$5 = utils$1.isSpace;
  var heading = function heading2(state, startLine, endLine, silent) {
    var ch, level, tmp, token2, pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine];
    if (state.sCount[startLine] - state.blkIndent >= 4) {
      return false;
    }
    ch = state.src.charCodeAt(pos);
    if (ch !== 35 || pos >= max) {
      return false;
    }
    level = 1;
    ch = state.src.charCodeAt(++pos);
    while (ch === 35 && pos < max && level <= 6) {
      level++;
      ch = state.src.charCodeAt(++pos);
    }
    if (level > 6 || pos < max && !isSpace$5(ch)) {
      return false;
    }
    if (silent) {
      return true;
    }
    max = state.skipSpacesBack(max, pos);
    tmp = state.skipCharsBack(max, 35, pos);
    if (tmp > pos && isSpace$5(state.src.charCodeAt(tmp - 1))) {
      max = tmp;
    }
    state.line = startLine + 1;
    token2 = state.push("heading_open", "h" + String(level), 1);
    token2.markup = "########".slice(0, level);
    token2.map = [startLine, state.line];
    token2 = state.push("inline", "", 0);
    token2.content = state.src.slice(pos, max).trim();
    token2.map = [startLine, state.line];
    token2.children = [];
    token2 = state.push("heading_close", "h" + String(level), -1);
    token2.markup = "########".slice(0, level);
    return true;
  };
  var lheading = function lheading2(state, startLine, endLine) {
    var content, terminate, i2, l, token2, pos, max, level, marker2, nextLine = startLine + 1, oldParentType, terminatorRules = state.md.block.ruler.getRules("paragraph");
    if (state.sCount[startLine] - state.blkIndent >= 4) {
      return false;
    }
    oldParentType = state.parentType;
    state.parentType = "paragraph";
    for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
      if (state.sCount[nextLine] - state.blkIndent > 3) {
        continue;
      }
      if (state.sCount[nextLine] >= state.blkIndent) {
        pos = state.bMarks[nextLine] + state.tShift[nextLine];
        max = state.eMarks[nextLine];
        if (pos < max) {
          marker2 = state.src.charCodeAt(pos);
          if (marker2 === 45 || marker2 === 61) {
            pos = state.skipChars(pos, marker2);
            pos = state.skipSpaces(pos);
            if (pos >= max) {
              level = marker2 === 61 ? 1 : 2;
              break;
            }
          }
        }
      }
      if (state.sCount[nextLine] < 0) {
        continue;
      }
      terminate = false;
      for (i2 = 0, l = terminatorRules.length; i2 < l; i2++) {
        if (terminatorRules[i2](state, nextLine, endLine, true)) {
          terminate = true;
          break;
        }
      }
      if (terminate) {
        break;
      }
    }
    if (!level) {
      return false;
    }
    content = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
    state.line = nextLine + 1;
    token2 = state.push("heading_open", "h" + String(level), 1);
    token2.markup = String.fromCharCode(marker2);
    token2.map = [startLine, state.line];
    token2 = state.push("inline", "", 0);
    token2.content = content;
    token2.map = [startLine, state.line - 1];
    token2.children = [];
    token2 = state.push("heading_close", "h" + String(level), -1);
    token2.markup = String.fromCharCode(marker2);
    state.parentType = oldParentType;
    return true;
  };
  var paragraph = function paragraph2(state, startLine) {
    var content, terminate, i2, l, token2, oldParentType, nextLine = startLine + 1, terminatorRules = state.md.block.ruler.getRules("paragraph"), endLine = state.lineMax;
    oldParentType = state.parentType;
    state.parentType = "paragraph";
    for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
      if (state.sCount[nextLine] - state.blkIndent > 3) {
        continue;
      }
      if (state.sCount[nextLine] < 0) {
        continue;
      }
      terminate = false;
      for (i2 = 0, l = terminatorRules.length; i2 < l; i2++) {
        if (terminatorRules[i2](state, nextLine, endLine, true)) {
          terminate = true;
          break;
        }
      }
      if (terminate) {
        break;
      }
    }
    content = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
    state.line = nextLine;
    token2 = state.push("paragraph_open", "p", 1);
    token2.map = [startLine, state.line];
    token2 = state.push("inline", "", 0);
    token2.content = content;
    token2.map = [startLine, state.line];
    token2.children = [];
    token2 = state.push("paragraph_close", "p", -1);
    state.parentType = oldParentType;
    return true;
  };
  var Token$1 = token;
  var isSpace$4 = utils$1.isSpace;
  function StateBlock(src, md, env, tokens) {
    var ch, s, start, pos, len, indent, offset, indent_found;
    this.src = src;
    this.md = md;
    this.env = env;
    this.tokens = tokens;
    this.bMarks = [];
    this.eMarks = [];
    this.tShift = [];
    this.sCount = [];
    this.bsCount = [];
    this.blkIndent = 0;
    this.line = 0;
    this.lineMax = 0;
    this.tight = false;
    this.ddIndent = -1;
    this.listIndent = -1;
    this.parentType = "root";
    this.level = 0;
    this.result = "";
    s = this.src;
    indent_found = false;
    for (start = pos = indent = offset = 0, len = s.length; pos < len; pos++) {
      ch = s.charCodeAt(pos);
      if (!indent_found) {
        if (isSpace$4(ch)) {
          indent++;
          if (ch === 9) {
            offset += 4 - offset % 4;
          } else {
            offset++;
          }
          continue;
        } else {
          indent_found = true;
        }
      }
      if (ch === 10 || pos === len - 1) {
        if (ch !== 10) {
          pos++;
        }
        this.bMarks.push(start);
        this.eMarks.push(pos);
        this.tShift.push(indent);
        this.sCount.push(offset);
        this.bsCount.push(0);
        indent_found = false;
        indent = 0;
        offset = 0;
        start = pos + 1;
      }
    }
    this.bMarks.push(s.length);
    this.eMarks.push(s.length);
    this.tShift.push(0);
    this.sCount.push(0);
    this.bsCount.push(0);
    this.lineMax = this.bMarks.length - 1;
  }
  StateBlock.prototype.push = function(type, tag, nesting) {
    var token2 = new Token$1(type, tag, nesting);
    token2.block = true;
    if (nesting < 0)
      this.level--;
    token2.level = this.level;
    if (nesting > 0)
      this.level++;
    this.tokens.push(token2);
    return token2;
  };
  StateBlock.prototype.isEmpty = function isEmpty(line) {
    return this.bMarks[line] + this.tShift[line] >= this.eMarks[line];
  };
  StateBlock.prototype.skipEmptyLines = function skipEmptyLines(from) {
    for (var max = this.lineMax; from < max; from++) {
      if (this.bMarks[from] + this.tShift[from] < this.eMarks[from]) {
        break;
      }
    }
    return from;
  };
  StateBlock.prototype.skipSpaces = function skipSpaces(pos) {
    var ch;
    for (var max = this.src.length; pos < max; pos++) {
      ch = this.src.charCodeAt(pos);
      if (!isSpace$4(ch)) {
        break;
      }
    }
    return pos;
  };
  StateBlock.prototype.skipSpacesBack = function skipSpacesBack(pos, min) {
    if (pos <= min) {
      return pos;
    }
    while (pos > min) {
      if (!isSpace$4(this.src.charCodeAt(--pos))) {
        return pos + 1;
      }
    }
    return pos;
  };
  StateBlock.prototype.skipChars = function skipChars(pos, code2) {
    for (var max = this.src.length; pos < max; pos++) {
      if (this.src.charCodeAt(pos) !== code2) {
        break;
      }
    }
    return pos;
  };
  StateBlock.prototype.skipCharsBack = function skipCharsBack(pos, code2, min) {
    if (pos <= min) {
      return pos;
    }
    while (pos > min) {
      if (code2 !== this.src.charCodeAt(--pos)) {
        return pos + 1;
      }
    }
    return pos;
  };
  StateBlock.prototype.getLines = function getLines(begin, end, indent, keepLastLF) {
    var i2, lineIndent, ch, first, last, queue, lineStart, line = begin;
    if (begin >= end) {
      return "";
    }
    queue = new Array(end - begin);
    for (i2 = 0; line < end; line++, i2++) {
      lineIndent = 0;
      lineStart = first = this.bMarks[line];
      if (line + 1 < end || keepLastLF) {
        last = this.eMarks[line] + 1;
      } else {
        last = this.eMarks[line];
      }
      while (first < last && lineIndent < indent) {
        ch = this.src.charCodeAt(first);
        if (isSpace$4(ch)) {
          if (ch === 9) {
            lineIndent += 4 - (lineIndent + this.bsCount[line]) % 4;
          } else {
            lineIndent++;
          }
        } else if (first - lineStart < this.tShift[line]) {
          lineIndent++;
        } else {
          break;
        }
        first++;
      }
      if (lineIndent > indent) {
        queue[i2] = new Array(lineIndent - indent + 1).join(" ") + this.src.slice(first, last);
      } else {
        queue[i2] = this.src.slice(first, last);
      }
    }
    return queue.join("");
  };
  StateBlock.prototype.Token = Token$1;
  var state_block = StateBlock;
  var Ruler$1 = ruler;
  var _rules$1 = [
    // First 2 params - rule name & source. Secondary array - list of rules,
    // which can be terminated by this one.
    ["table", table, ["paragraph", "reference"]],
    ["code", code$1],
    ["fence", fence, ["paragraph", "reference", "blockquote", "list"]],
    ["blockquote", blockquote, ["paragraph", "reference", "blockquote", "list"]],
    ["hr", hr, ["paragraph", "reference", "blockquote", "list"]],
    ["list", list$2, ["paragraph", "reference", "blockquote"]],
    ["reference", reference],
    ["html_block", html_block, ["paragraph", "reference", "blockquote"]],
    ["heading", heading, ["paragraph", "reference", "blockquote"]],
    ["lheading", lheading],
    ["paragraph", paragraph]
  ];
  function ParserBlock$1() {
    this.ruler = new Ruler$1();
    for (var i2 = 0; i2 < _rules$1.length; i2++) {
      this.ruler.push(_rules$1[i2][0], _rules$1[i2][1], { alt: (_rules$1[i2][2] || []).slice() });
    }
  }
  ParserBlock$1.prototype.tokenize = function(state, startLine, endLine) {
    var ok, i2, rules = this.ruler.getRules(""), len = rules.length, line = startLine, hasEmptyLines = false, maxNesting = state.md.options.maxNesting;
    while (line < endLine) {
      state.line = line = state.skipEmptyLines(line);
      if (line >= endLine) {
        break;
      }
      if (state.sCount[line] < state.blkIndent) {
        break;
      }
      if (state.level >= maxNesting) {
        state.line = endLine;
        break;
      }
      for (i2 = 0; i2 < len; i2++) {
        ok = rules[i2](state, line, endLine, false);
        if (ok) {
          break;
        }
      }
      state.tight = !hasEmptyLines;
      if (state.isEmpty(state.line - 1)) {
        hasEmptyLines = true;
      }
      line = state.line;
      if (line < endLine && state.isEmpty(line)) {
        hasEmptyLines = true;
        line++;
        state.line = line;
      }
    }
  };
  ParserBlock$1.prototype.parse = function(src, md, env, outTokens) {
    var state;
    if (!src) {
      return;
    }
    state = new this.State(src, md, env, outTokens);
    this.tokenize(state, state.line, state.lineMax);
  };
  ParserBlock$1.prototype.State = state_block;
  var parser_block = ParserBlock$1;
  function isTerminatorChar(ch) {
    switch (ch) {
      case 10:
      case 33:
      case 35:
      case 36:
      case 37:
      case 38:
      case 42:
      case 43:
      case 45:
      case 58:
      case 60:
      case 61:
      case 62:
      case 64:
      case 91:
      case 92:
      case 93:
      case 94:
      case 95:
      case 96:
      case 123:
      case 125:
      case 126:
        return true;
      default:
        return false;
    }
  }
  var text = function text2(state, silent) {
    var pos = state.pos;
    while (pos < state.posMax && !isTerminatorChar(state.src.charCodeAt(pos))) {
      pos++;
    }
    if (pos === state.pos) {
      return false;
    }
    if (!silent) {
      state.pending += state.src.slice(state.pos, pos);
    }
    state.pos = pos;
    return true;
  };
  var SCHEME_RE = /(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;
  var linkify = function linkify2(state, silent) {
    var pos, max, match, proto, link2, url, fullUrl, token2;
    if (!state.md.options.linkify)
      return false;
    if (state.linkLevel > 0)
      return false;
    pos = state.pos;
    max = state.posMax;
    if (pos + 3 > max)
      return false;
    if (state.src.charCodeAt(pos) !== 58)
      return false;
    if (state.src.charCodeAt(pos + 1) !== 47)
      return false;
    if (state.src.charCodeAt(pos + 2) !== 47)
      return false;
    match = state.pending.match(SCHEME_RE);
    if (!match)
      return false;
    proto = match[1];
    link2 = state.md.linkify.matchAtStart(state.src.slice(pos - proto.length));
    if (!link2)
      return false;
    url = link2.url;
    url = url.replace(/\*+$/, "");
    fullUrl = state.md.normalizeLink(url);
    if (!state.md.validateLink(fullUrl))
      return false;
    if (!silent) {
      state.pending = state.pending.slice(0, -proto.length);
      token2 = state.push("link_open", "a", 1);
      token2.attrs = [["href", fullUrl]];
      token2.markup = "linkify";
      token2.info = "auto";
      token2 = state.push("text", "", 0);
      token2.content = state.md.normalizeLinkText(url);
      token2 = state.push("link_close", "a", -1);
      token2.markup = "linkify";
      token2.info = "auto";
    }
    state.pos += url.length - proto.length;
    return true;
  };
  var isSpace$3 = utils$1.isSpace;
  var newline = function newline2(state, silent) {
    var pmax, max, ws, pos = state.pos;
    if (state.src.charCodeAt(pos) !== 10) {
      return false;
    }
    pmax = state.pending.length - 1;
    max = state.posMax;
    if (!silent) {
      if (pmax >= 0 && state.pending.charCodeAt(pmax) === 32) {
        if (pmax >= 1 && state.pending.charCodeAt(pmax - 1) === 32) {
          ws = pmax - 1;
          while (ws >= 1 && state.pending.charCodeAt(ws - 1) === 32)
            ws--;
          state.pending = state.pending.slice(0, ws);
          state.push("hardbreak", "br", 0);
        } else {
          state.pending = state.pending.slice(0, -1);
          state.push("softbreak", "br", 0);
        }
      } else {
        state.push("softbreak", "br", 0);
      }
    }
    pos++;
    while (pos < max && isSpace$3(state.src.charCodeAt(pos))) {
      pos++;
    }
    state.pos = pos;
    return true;
  };
  var isSpace$2 = utils$1.isSpace;
  var ESCAPED = [];
  for (var i = 0; i < 256; i++) {
    ESCAPED.push(0);
  }
  "\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(ch) {
    ESCAPED[ch.charCodeAt(0)] = 1;
  });
  var _escape = function escape2(state, silent) {
    var ch1, ch2, origStr, escapedStr, token2, pos = state.pos, max = state.posMax;
    if (state.src.charCodeAt(pos) !== 92)
      return false;
    pos++;
    if (pos >= max)
      return false;
    ch1 = state.src.charCodeAt(pos);
    if (ch1 === 10) {
      if (!silent) {
        state.push("hardbreak", "br", 0);
      }
      pos++;
      while (pos < max) {
        ch1 = state.src.charCodeAt(pos);
        if (!isSpace$2(ch1))
          break;
        pos++;
      }
      state.pos = pos;
      return true;
    }
    escapedStr = state.src[pos];
    if (ch1 >= 55296 && ch1 <= 56319 && pos + 1 < max) {
      ch2 = state.src.charCodeAt(pos + 1);
      if (ch2 >= 56320 && ch2 <= 57343) {
        escapedStr += state.src[pos + 1];
        pos++;
      }
    }
    origStr = "\\" + escapedStr;
    if (!silent) {
      token2 = state.push("text_special", "", 0);
      if (ch1 < 256 && ESCAPED[ch1] !== 0) {
        token2.content = escapedStr;
      } else {
        token2.content = origStr;
      }
      token2.markup = origStr;
      token2.info = "escape";
    }
    state.pos = pos + 1;
    return true;
  };
  var backticks = function backtick(state, silent) {
    var start, max, marker2, token2, matchStart, matchEnd, openerLength, closerLength, pos = state.pos, ch = state.src.charCodeAt(pos);
    if (ch !== 96) {
      return false;
    }
    start = pos;
    pos++;
    max = state.posMax;
    while (pos < max && state.src.charCodeAt(pos) === 96) {
      pos++;
    }
    marker2 = state.src.slice(start, pos);
    openerLength = marker2.length;
    if (state.backticksScanned && (state.backticks[openerLength] || 0) <= start) {
      if (!silent)
        state.pending += marker2;
      state.pos += openerLength;
      return true;
    }
    matchStart = matchEnd = pos;
    while ((matchStart = state.src.indexOf("`", matchEnd)) !== -1) {
      matchEnd = matchStart + 1;
      while (matchEnd < max && state.src.charCodeAt(matchEnd) === 96) {
        matchEnd++;
      }
      closerLength = matchEnd - matchStart;
      if (closerLength === openerLength) {
        if (!silent) {
          token2 = state.push("code_inline", "code", 0);
          token2.markup = marker2;
          token2.content = state.src.slice(pos, matchStart).replace(/\n/g, " ").replace(/^ (.+) $/, "$1");
        }
        state.pos = matchEnd;
        return true;
      }
      state.backticks[closerLength] = matchStart;
    }
    state.backticksScanned = true;
    if (!silent)
      state.pending += marker2;
    state.pos += openerLength;
    return true;
  };
  var strikethrough = {};
  strikethrough.tokenize = function strikethrough2(state, silent) {
    var i2, scanned, token2, len, ch, start = state.pos, marker2 = state.src.charCodeAt(start);
    if (silent) {
      return false;
    }
    if (marker2 !== 126) {
      return false;
    }
    scanned = state.scanDelims(state.pos, true);
    len = scanned.length;
    ch = String.fromCharCode(marker2);
    if (len < 2) {
      return false;
    }
    if (len % 2) {
      token2 = state.push("text", "", 0);
      token2.content = ch;
      len--;
    }
    for (i2 = 0; i2 < len; i2 += 2) {
      token2 = state.push("text", "", 0);
      token2.content = ch + ch;
      state.delimiters.push({
        marker: marker2,
        length: 0,
        // disable "rule of 3" length checks meant for emphasis
        token: state.tokens.length - 1,
        end: -1,
        open: scanned.can_open,
        close: scanned.can_close
      });
    }
    state.pos += scanned.length;
    return true;
  };
  function postProcess$1(state, delimiters) {
    var i2, j, startDelim, endDelim, token2, loneMarkers = [], max = delimiters.length;
    for (i2 = 0; i2 < max; i2++) {
      startDelim = delimiters[i2];
      if (startDelim.marker !== 126) {
        continue;
      }
      if (startDelim.end === -1) {
        continue;
      }
      endDelim = delimiters[startDelim.end];
      token2 = state.tokens[startDelim.token];
      token2.type = "s_open";
      token2.tag = "s";
      token2.nesting = 1;
      token2.markup = "~~";
      token2.content = "";
      token2 = state.tokens[endDelim.token];
      token2.type = "s_close";
      token2.tag = "s";
      token2.nesting = -1;
      token2.markup = "~~";
      token2.content = "";
      if (state.tokens[endDelim.token - 1].type === "text" && state.tokens[endDelim.token - 1].content === "~") {
        loneMarkers.push(endDelim.token - 1);
      }
    }
    while (loneMarkers.length) {
      i2 = loneMarkers.pop();
      j = i2 + 1;
      while (j < state.tokens.length && state.tokens[j].type === "s_close") {
        j++;
      }
      j--;
      if (i2 !== j) {
        token2 = state.tokens[j];
        state.tokens[j] = state.tokens[i2];
        state.tokens[i2] = token2;
      }
    }
  }
  strikethrough.postProcess = function strikethrough2(state) {
    var curr, tokens_meta = state.tokens_meta, max = state.tokens_meta.length;
    postProcess$1(state, state.delimiters);
    for (curr = 0; curr < max; curr++) {
      if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
        postProcess$1(state, tokens_meta[curr].delimiters);
      }
    }
  };
  var emphasis = {};
  emphasis.tokenize = function emphasis2(state, silent) {
    var i2, scanned, token2, start = state.pos, marker2 = state.src.charCodeAt(start);
    if (silent) {
      return false;
    }
    if (marker2 !== 95 && marker2 !== 42) {
      return false;
    }
    scanned = state.scanDelims(state.pos, marker2 === 42);
    for (i2 = 0; i2 < scanned.length; i2++) {
      token2 = state.push("text", "", 0);
      token2.content = String.fromCharCode(marker2);
      state.delimiters.push({
        // Char code of the starting marker (number).
        //
        marker: marker2,
        // Total length of these series of delimiters.
        //
        length: scanned.length,
        // A position of the token this delimiter corresponds to.
        //
        token: state.tokens.length - 1,
        // If this delimiter is matched as a valid opener, `end` will be
        // equal to its position, otherwise it's `-1`.
        //
        end: -1,
        // Boolean flags that determine if this delimiter could open or close
        // an emphasis.
        //
        open: scanned.can_open,
        close: scanned.can_close
      });
    }
    state.pos += scanned.length;
    return true;
  };
  function postProcess(state, delimiters) {
    var i2, startDelim, endDelim, token2, ch, isStrong, max = delimiters.length;
    for (i2 = max - 1; i2 >= 0; i2--) {
      startDelim = delimiters[i2];
      if (startDelim.marker !== 95 && startDelim.marker !== 42) {
        continue;
      }
      if (startDelim.end === -1) {
        continue;
      }
      endDelim = delimiters[startDelim.end];
      isStrong = i2 > 0 && delimiters[i2 - 1].end === startDelim.end + 1 && // check that first two markers match and adjacent
      delimiters[i2 - 1].marker === startDelim.marker && delimiters[i2 - 1].token === startDelim.token - 1 && // check that last two markers are adjacent (we can safely assume they match)
      delimiters[startDelim.end + 1].token === endDelim.token + 1;
      ch = String.fromCharCode(startDelim.marker);
      token2 = state.tokens[startDelim.token];
      token2.type = isStrong ? "strong_open" : "em_open";
      token2.tag = isStrong ? "strong" : "em";
      token2.nesting = 1;
      token2.markup = isStrong ? ch + ch : ch;
      token2.content = "";
      token2 = state.tokens[endDelim.token];
      token2.type = isStrong ? "strong_close" : "em_close";
      token2.tag = isStrong ? "strong" : "em";
      token2.nesting = -1;
      token2.markup = isStrong ? ch + ch : ch;
      token2.content = "";
      if (isStrong) {
        state.tokens[delimiters[i2 - 1].token].content = "";
        state.tokens[delimiters[startDelim.end + 1].token].content = "";
        i2--;
      }
    }
  }
  emphasis.postProcess = function emphasis2(state) {
    var curr, tokens_meta = state.tokens_meta, max = state.tokens_meta.length;
    postProcess(state, state.delimiters);
    for (curr = 0; curr < max; curr++) {
      if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
        postProcess(state, tokens_meta[curr].delimiters);
      }
    }
  };
  var normalizeReference$1 = utils$1.normalizeReference;
  var isSpace$1 = utils$1.isSpace;
  var link$2 = function link2(state, silent) {
    var attrs, code2, label, labelEnd, labelStart, pos, res, ref, token2, href = "", title = "", oldPos = state.pos, max = state.posMax, start = state.pos, parseReference = true;
    if (state.src.charCodeAt(state.pos) !== 91) {
      return false;
    }
    labelStart = state.pos + 1;
    labelEnd = state.md.helpers.parseLinkLabel(state, state.pos, true);
    if (labelEnd < 0) {
      return false;
    }
    pos = labelEnd + 1;
    if (pos < max && state.src.charCodeAt(pos) === 40) {
      parseReference = false;
      pos++;
      for (; pos < max; pos++) {
        code2 = state.src.charCodeAt(pos);
        if (!isSpace$1(code2) && code2 !== 10) {
          break;
        }
      }
      if (pos >= max) {
        return false;
      }
      start = pos;
      res = state.md.helpers.parseLinkDestination(state.src, pos, state.posMax);
      if (res.ok) {
        href = state.md.normalizeLink(res.str);
        if (state.md.validateLink(href)) {
          pos = res.pos;
        } else {
          href = "";
        }
        start = pos;
        for (; pos < max; pos++) {
          code2 = state.src.charCodeAt(pos);
          if (!isSpace$1(code2) && code2 !== 10) {
            break;
          }
        }
        res = state.md.helpers.parseLinkTitle(state.src, pos, state.posMax);
        if (pos < max && start !== pos && res.ok) {
          title = res.str;
          pos = res.pos;
          for (; pos < max; pos++) {
            code2 = state.src.charCodeAt(pos);
            if (!isSpace$1(code2) && code2 !== 10) {
              break;
            }
          }
        }
      }
      if (pos >= max || state.src.charCodeAt(pos) !== 41) {
        parseReference = true;
      }
      pos++;
    }
    if (parseReference) {
      if (typeof state.env.references === "undefined") {
        return false;
      }
      if (pos < max && state.src.charCodeAt(pos) === 91) {
        start = pos + 1;
        pos = state.md.helpers.parseLinkLabel(state, pos);
        if (pos >= 0) {
          label = state.src.slice(start, pos++);
        } else {
          pos = labelEnd + 1;
        }
      } else {
        pos = labelEnd + 1;
      }
      if (!label) {
        label = state.src.slice(labelStart, labelEnd);
      }
      ref = state.env.references[normalizeReference$1(label)];
      if (!ref) {
        state.pos = oldPos;
        return false;
      }
      href = ref.href;
      title = ref.title;
    }
    if (!silent) {
      state.pos = labelStart;
      state.posMax = labelEnd;
      token2 = state.push("link_open", "a", 1);
      token2.attrs = attrs = [["href", href]];
      if (title) {
        attrs.push(["title", title]);
      }
      state.linkLevel++;
      state.md.inline.tokenize(state);
      state.linkLevel--;
      token2 = state.push("link_close", "a", -1);
    }
    state.pos = pos;
    state.posMax = max;
    return true;
  };
  var normalizeReference = utils$1.normalizeReference;
  var isSpace = utils$1.isSpace;
  var image = function image2(state, silent) {
    var attrs, code2, content, label, labelEnd, labelStart, pos, ref, res, title, token2, tokens, start, href = "", oldPos = state.pos, max = state.posMax;
    if (state.src.charCodeAt(state.pos) !== 33) {
      return false;
    }
    if (state.src.charCodeAt(state.pos + 1) !== 91) {
      return false;
    }
    labelStart = state.pos + 2;
    labelEnd = state.md.helpers.parseLinkLabel(state, state.pos + 1, false);
    if (labelEnd < 0) {
      return false;
    }
    pos = labelEnd + 1;
    if (pos < max && state.src.charCodeAt(pos) === 40) {
      pos++;
      for (; pos < max; pos++) {
        code2 = state.src.charCodeAt(pos);
        if (!isSpace(code2) && code2 !== 10) {
          break;
        }
      }
      if (pos >= max) {
        return false;
      }
      start = pos;
      res = state.md.helpers.parseLinkDestination(state.src, pos, state.posMax);
      if (res.ok) {
        href = state.md.normalizeLink(res.str);
        if (state.md.validateLink(href)) {
          pos = res.pos;
        } else {
          href = "";
        }
      }
      start = pos;
      for (; pos < max; pos++) {
        code2 = state.src.charCodeAt(pos);
        if (!isSpace(code2) && code2 !== 10) {
          break;
        }
      }
      res = state.md.helpers.parseLinkTitle(state.src, pos, state.posMax);
      if (pos < max && start !== pos && res.ok) {
        title = res.str;
        pos = res.pos;
        for (; pos < max; pos++) {
          code2 = state.src.charCodeAt(pos);
          if (!isSpace(code2) && code2 !== 10) {
            break;
          }
        }
      } else {
        title = "";
      }
      if (pos >= max || state.src.charCodeAt(pos) !== 41) {
        state.pos = oldPos;
        return false;
      }
      pos++;
    } else {
      if (typeof state.env.references === "undefined") {
        return false;
      }
      if (pos < max && state.src.charCodeAt(pos) === 91) {
        start = pos + 1;
        pos = state.md.helpers.parseLinkLabel(state, pos);
        if (pos >= 0) {
          label = state.src.slice(start, pos++);
        } else {
          pos = labelEnd + 1;
        }
      } else {
        pos = labelEnd + 1;
      }
      if (!label) {
        label = state.src.slice(labelStart, labelEnd);
      }
      ref = state.env.references[normalizeReference(label)];
      if (!ref) {
        state.pos = oldPos;
        return false;
      }
      href = ref.href;
      title = ref.title;
    }
    if (!silent) {
      content = state.src.slice(labelStart, labelEnd);
      state.md.inline.parse(
        content,
        state.md,
        state.env,
        tokens = []
      );
      token2 = state.push("image", "img", 0);
      token2.attrs = attrs = [["src", href], ["alt", ""]];
      token2.children = tokens;
      token2.content = content;
      if (title) {
        attrs.push(["title", title]);
      }
    }
    state.pos = pos;
    state.posMax = max;
    return true;
  };
  var EMAIL_RE = /^([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/;
  var AUTOLINK_RE = /^([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)$/;
  var autolink = function autolink2(state, silent) {
    var url, fullUrl, token2, ch, start, max, pos = state.pos;
    if (state.src.charCodeAt(pos) !== 60) {
      return false;
    }
    start = state.pos;
    max = state.posMax;
    for (; ; ) {
      if (++pos >= max)
        return false;
      ch = state.src.charCodeAt(pos);
      if (ch === 60)
        return false;
      if (ch === 62)
        break;
    }
    url = state.src.slice(start + 1, pos);
    if (AUTOLINK_RE.test(url)) {
      fullUrl = state.md.normalizeLink(url);
      if (!state.md.validateLink(fullUrl)) {
        return false;
      }
      if (!silent) {
        token2 = state.push("link_open", "a", 1);
        token2.attrs = [["href", fullUrl]];
        token2.markup = "autolink";
        token2.info = "auto";
        token2 = state.push("text", "", 0);
        token2.content = state.md.normalizeLinkText(url);
        token2 = state.push("link_close", "a", -1);
        token2.markup = "autolink";
        token2.info = "auto";
      }
      state.pos += url.length + 2;
      return true;
    }
    if (EMAIL_RE.test(url)) {
      fullUrl = state.md.normalizeLink("mailto:" + url);
      if (!state.md.validateLink(fullUrl)) {
        return false;
      }
      if (!silent) {
        token2 = state.push("link_open", "a", 1);
        token2.attrs = [["href", fullUrl]];
        token2.markup = "autolink";
        token2.info = "auto";
        token2 = state.push("text", "", 0);
        token2.content = state.md.normalizeLinkText(url);
        token2 = state.push("link_close", "a", -1);
        token2.markup = "autolink";
        token2.info = "auto";
      }
      state.pos += url.length + 2;
      return true;
    }
    return false;
  };
  var HTML_TAG_RE = html_re.HTML_TAG_RE;
  function isLinkOpen(str) {
    return /^<a[>\s]/i.test(str);
  }
  function isLinkClose(str) {
    return /^<\/a\s*>/i.test(str);
  }
  function isLetter(ch) {
    var lc = ch | 32;
    return lc >= 97 && lc <= 122;
  }
  var html_inline = function html_inline2(state, silent) {
    var ch, match, max, token2, pos = state.pos;
    if (!state.md.options.html) {
      return false;
    }
    max = state.posMax;
    if (state.src.charCodeAt(pos) !== 60 || pos + 2 >= max) {
      return false;
    }
    ch = state.src.charCodeAt(pos + 1);
    if (ch !== 33 && ch !== 63 && ch !== 47 && !isLetter(ch)) {
      return false;
    }
    match = state.src.slice(pos).match(HTML_TAG_RE);
    if (!match) {
      return false;
    }
    if (!silent) {
      token2 = state.push("html_inline", "", 0);
      token2.content = state.src.slice(pos, pos + match[0].length);
      if (isLinkOpen(token2.content))
        state.linkLevel++;
      if (isLinkClose(token2.content))
        state.linkLevel--;
    }
    state.pos += match[0].length;
    return true;
  };
  var entities = entitiesExports;
  var has = utils$1.has;
  var isValidEntityCode = utils$1.isValidEntityCode;
  var fromCodePoint = utils$1.fromCodePoint;
  var DIGITAL_RE = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i;
  var NAMED_RE = /^&([a-z][a-z0-9]{1,31});/i;
  var entity = function entity2(state, silent) {
    var ch, code2, match, token2, pos = state.pos, max = state.posMax;
    if (state.src.charCodeAt(pos) !== 38)
      return false;
    if (pos + 1 >= max)
      return false;
    ch = state.src.charCodeAt(pos + 1);
    if (ch === 35) {
      match = state.src.slice(pos).match(DIGITAL_RE);
      if (match) {
        if (!silent) {
          code2 = match[1][0].toLowerCase() === "x" ? parseInt(match[1].slice(1), 16) : parseInt(match[1], 10);
          token2 = state.push("text_special", "", 0);
          token2.content = isValidEntityCode(code2) ? fromCodePoint(code2) : fromCodePoint(65533);
          token2.markup = match[0];
          token2.info = "entity";
        }
        state.pos += match[0].length;
        return true;
      }
    } else {
      match = state.src.slice(pos).match(NAMED_RE);
      if (match) {
        if (has(entities, match[1])) {
          if (!silent) {
            token2 = state.push("text_special", "", 0);
            token2.content = entities[match[1]];
            token2.markup = match[0];
            token2.info = "entity";
          }
          state.pos += match[0].length;
          return true;
        }
      }
    }
    return false;
  };
  function processDelimiters(state, delimiters) {
    var closerIdx, openerIdx, closer, opener, minOpenerIdx, newMinOpenerIdx, isOddMatch, lastJump, openersBottom = {}, max = delimiters.length;
    if (!max)
      return;
    var headerIdx = 0;
    var lastTokenIdx = -2;
    var jumps = [];
    for (closerIdx = 0; closerIdx < max; closerIdx++) {
      closer = delimiters[closerIdx];
      jumps.push(0);
      if (delimiters[headerIdx].marker !== closer.marker || lastTokenIdx !== closer.token - 1) {
        headerIdx = closerIdx;
      }
      lastTokenIdx = closer.token;
      closer.length = closer.length || 0;
      if (!closer.close)
        continue;
      if (!openersBottom.hasOwnProperty(closer.marker)) {
        openersBottom[closer.marker] = [-1, -1, -1, -1, -1, -1];
      }
      minOpenerIdx = openersBottom[closer.marker][(closer.open ? 3 : 0) + closer.length % 3];
      openerIdx = headerIdx - jumps[headerIdx] - 1;
      newMinOpenerIdx = openerIdx;
      for (; openerIdx > minOpenerIdx; openerIdx -= jumps[openerIdx] + 1) {
        opener = delimiters[openerIdx];
        if (opener.marker !== closer.marker)
          continue;
        if (opener.open && opener.end < 0) {
          isOddMatch = false;
          if (opener.close || closer.open) {
            if ((opener.length + closer.length) % 3 === 0) {
              if (opener.length % 3 !== 0 || closer.length % 3 !== 0) {
                isOddMatch = true;
              }
            }
          }
          if (!isOddMatch) {
            lastJump = openerIdx > 0 && !delimiters[openerIdx - 1].open ? jumps[openerIdx - 1] + 1 : 0;
            jumps[closerIdx] = closerIdx - openerIdx + lastJump;
            jumps[openerIdx] = lastJump;
            closer.open = false;
            opener.end = closerIdx;
            opener.close = false;
            newMinOpenerIdx = -1;
            lastTokenIdx = -2;
            break;
          }
        }
      }
      if (newMinOpenerIdx !== -1) {
        openersBottom[closer.marker][(closer.open ? 3 : 0) + (closer.length || 0) % 3] = newMinOpenerIdx;
      }
    }
  }
  var balance_pairs = function link_pairs(state) {
    var curr, tokens_meta = state.tokens_meta, max = state.tokens_meta.length;
    processDelimiters(state, state.delimiters);
    for (curr = 0; curr < max; curr++) {
      if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
        processDelimiters(state, tokens_meta[curr].delimiters);
      }
    }
  };
  var fragments_join = function fragments_join2(state) {
    var curr, last, level = 0, tokens = state.tokens, max = state.tokens.length;
    for (curr = last = 0; curr < max; curr++) {
      if (tokens[curr].nesting < 0)
        level--;
      tokens[curr].level = level;
      if (tokens[curr].nesting > 0)
        level++;
      if (tokens[curr].type === "text" && curr + 1 < max && tokens[curr + 1].type === "text") {
        tokens[curr + 1].content = tokens[curr].content + tokens[curr + 1].content;
      } else {
        if (curr !== last) {
          tokens[last] = tokens[curr];
        }
        last++;
      }
    }
    if (curr !== last) {
      tokens.length = last;
    }
  };
  var Token = token;
  var isWhiteSpace = utils$1.isWhiteSpace;
  var isPunctChar = utils$1.isPunctChar;
  var isMdAsciiPunct = utils$1.isMdAsciiPunct;
  function StateInline(src, md, env, outTokens) {
    this.src = src;
    this.env = env;
    this.md = md;
    this.tokens = outTokens;
    this.tokens_meta = Array(outTokens.length);
    this.pos = 0;
    this.posMax = this.src.length;
    this.level = 0;
    this.pending = "";
    this.pendingLevel = 0;
    this.cache = {};
    this.delimiters = [];
    this._prev_delimiters = [];
    this.backticks = {};
    this.backticksScanned = false;
    this.linkLevel = 0;
  }
  StateInline.prototype.pushPending = function() {
    var token2 = new Token("text", "", 0);
    token2.content = this.pending;
    token2.level = this.pendingLevel;
    this.tokens.push(token2);
    this.pending = "";
    return token2;
  };
  StateInline.prototype.push = function(type, tag, nesting) {
    if (this.pending) {
      this.pushPending();
    }
    var token2 = new Token(type, tag, nesting);
    var token_meta = null;
    if (nesting < 0) {
      this.level--;
      this.delimiters = this._prev_delimiters.pop();
    }
    token2.level = this.level;
    if (nesting > 0) {
      this.level++;
      this._prev_delimiters.push(this.delimiters);
      this.delimiters = [];
      token_meta = { delimiters: this.delimiters };
    }
    this.pendingLevel = this.level;
    this.tokens.push(token2);
    this.tokens_meta.push(token_meta);
    return token2;
  };
  StateInline.prototype.scanDelims = function(start, canSplitWord) {
    var pos = start, lastChar, nextChar, count, can_open, can_close, isLastWhiteSpace, isLastPunctChar, isNextWhiteSpace, isNextPunctChar, left_flanking = true, right_flanking = true, max = this.posMax, marker2 = this.src.charCodeAt(start);
    lastChar = start > 0 ? this.src.charCodeAt(start - 1) : 32;
    while (pos < max && this.src.charCodeAt(pos) === marker2) {
      pos++;
    }
    count = pos - start;
    nextChar = pos < max ? this.src.charCodeAt(pos) : 32;
    isLastPunctChar = isMdAsciiPunct(lastChar) || isPunctChar(String.fromCharCode(lastChar));
    isNextPunctChar = isMdAsciiPunct(nextChar) || isPunctChar(String.fromCharCode(nextChar));
    isLastWhiteSpace = isWhiteSpace(lastChar);
    isNextWhiteSpace = isWhiteSpace(nextChar);
    if (isNextWhiteSpace) {
      left_flanking = false;
    } else if (isNextPunctChar) {
      if (!(isLastWhiteSpace || isLastPunctChar)) {
        left_flanking = false;
      }
    }
    if (isLastWhiteSpace) {
      right_flanking = false;
    } else if (isLastPunctChar) {
      if (!(isNextWhiteSpace || isNextPunctChar)) {
        right_flanking = false;
      }
    }
    if (!canSplitWord) {
      can_open = left_flanking && (!right_flanking || isLastPunctChar);
      can_close = right_flanking && (!left_flanking || isNextPunctChar);
    } else {
      can_open = left_flanking;
      can_close = right_flanking;
    }
    return {
      can_open,
      can_close,
      length: count
    };
  };
  StateInline.prototype.Token = Token;
  var state_inline = StateInline;
  var Ruler = ruler;
  var _rules = [
    ["text", text],
    ["linkify", linkify],
    ["newline", newline],
    ["escape", _escape],
    ["backticks", backticks],
    ["strikethrough", strikethrough.tokenize],
    ["emphasis", emphasis.tokenize],
    ["link", link$2],
    ["image", image],
    ["autolink", autolink],
    ["html_inline", html_inline],
    ["entity", entity]
  ];
  var _rules2 = [
    ["balance_pairs", balance_pairs],
    ["strikethrough", strikethrough.postProcess],
    ["emphasis", emphasis.postProcess],
    // rules for pairs separate '**' into its own text tokens, which may be left unused,
    // rule below merges unused segments back with the rest of the text
    ["fragments_join", fragments_join]
  ];
  function ParserInline$1() {
    var i2;
    this.ruler = new Ruler();
    for (i2 = 0; i2 < _rules.length; i2++) {
      this.ruler.push(_rules[i2][0], _rules[i2][1]);
    }
    this.ruler2 = new Ruler();
    for (i2 = 0; i2 < _rules2.length; i2++) {
      this.ruler2.push(_rules2[i2][0], _rules2[i2][1]);
    }
  }
  ParserInline$1.prototype.skipToken = function(state) {
    var ok, i2, pos = state.pos, rules = this.ruler.getRules(""), len = rules.length, maxNesting = state.md.options.maxNesting, cache = state.cache;
    if (typeof cache[pos] !== "undefined") {
      state.pos = cache[pos];
      return;
    }
    if (state.level < maxNesting) {
      for (i2 = 0; i2 < len; i2++) {
        state.level++;
        ok = rules[i2](state, true);
        state.level--;
        if (ok) {
          break;
        }
      }
    } else {
      state.pos = state.posMax;
    }
    if (!ok) {
      state.pos++;
    }
    cache[pos] = state.pos;
  };
  ParserInline$1.prototype.tokenize = function(state) {
    var ok, i2, rules = this.ruler.getRules(""), len = rules.length, end = state.posMax, maxNesting = state.md.options.maxNesting;
    while (state.pos < end) {
      if (state.level < maxNesting) {
        for (i2 = 0; i2 < len; i2++) {
          ok = rules[i2](state, false);
          if (ok) {
            break;
          }
        }
      }
      if (ok) {
        if (state.pos >= end) {
          break;
        }
        continue;
      }
      state.pending += state.src[state.pos++];
    }
    if (state.pending) {
      state.pushPending();
    }
  };
  ParserInline$1.prototype.parse = function(str, md, env, outTokens) {
    var i2, rules, len;
    var state = new this.State(str, md, env, outTokens);
    this.tokenize(state);
    rules = this.ruler2.getRules("");
    len = rules.length;
    for (i2 = 0; i2 < len; i2++) {
      rules[i2](state);
    }
  };
  ParserInline$1.prototype.State = state_inline;
  var parser_inline = ParserInline$1;
  var re;
  var hasRequiredRe;
  function requireRe() {
    if (hasRequiredRe)
      return re;
    hasRequiredRe = 1;
    re = function(opts) {
      var re2 = {};
      opts = opts || {};
      re2.src_Any = requireRegex$3().source;
      re2.src_Cc = requireRegex$2().source;
      re2.src_Z = requireRegex().source;
      re2.src_P = regex$4.source;
      re2.src_ZPCc = [re2.src_Z, re2.src_P, re2.src_Cc].join("|");
      re2.src_ZCc = [re2.src_Z, re2.src_Cc].join("|");
      var text_separators = "[><｜]";
      re2.src_pseudo_letter = "(?:(?!" + text_separators + "|" + re2.src_ZPCc + ")" + re2.src_Any + ")";
      re2.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)";
      re2.src_auth = "(?:(?:(?!" + re2.src_ZCc + "|[@/\\[\\]()]).)+@)?";
      re2.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?";
      re2.src_host_terminator = "(?=$|" + text_separators + "|" + re2.src_ZPCc + ")(?!" + (opts["---"] ? "-(?!--)|" : "-|") + "_|:\\d|\\.-|\\.(?!$|" + re2.src_ZPCc + "))";
      re2.src_path = "(?:[/?#](?:(?!" + re2.src_ZCc + "|" + text_separators + `|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!` + re2.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + re2.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + re2.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + re2.src_ZCc + `|["]).)+\\"|\\'(?:(?!` + re2.src_ZCc + "|[']).)+\\'|\\'(?=" + re2.src_pseudo_letter + "|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + re2.src_ZCc + "|[.]|$)|" + (opts["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + ",(?!" + re2.src_ZCc + "|$)|;(?!" + re2.src_ZCc + "|$)|\\!+(?!" + re2.src_ZCc + "|[!]|$)|\\?(?!" + re2.src_ZCc + "|[?]|$))+|\\/)?";
      re2.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*';
      re2.src_xn = "xn--[a-z0-9\\-]{1,59}";
      re2.src_domain_root = // Allow letters & digits (http://test1)
      "(?:" + re2.src_xn + "|" + re2.src_pseudo_letter + "{1,63})";
      re2.src_domain = "(?:" + re2.src_xn + "|(?:" + re2.src_pseudo_letter + ")|(?:" + re2.src_pseudo_letter + "(?:-|" + re2.src_pseudo_letter + "){0,61}" + re2.src_pseudo_letter + "))";
      re2.src_host = "(?:(?:(?:(?:" + re2.src_domain + ")\\.)*" + re2.src_domain + "))";
      re2.tpl_host_fuzzy = "(?:" + re2.src_ip4 + "|(?:(?:(?:" + re2.src_domain + ")\\.)+(?:%TLDS%)))";
      re2.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + re2.src_domain + ")\\.)+(?:%TLDS%))";
      re2.src_host_strict = re2.src_host + re2.src_host_terminator;
      re2.tpl_host_fuzzy_strict = re2.tpl_host_fuzzy + re2.src_host_terminator;
      re2.src_host_port_strict = re2.src_host + re2.src_port + re2.src_host_terminator;
      re2.tpl_host_port_fuzzy_strict = re2.tpl_host_fuzzy + re2.src_port + re2.src_host_terminator;
      re2.tpl_host_port_no_ip_fuzzy_strict = re2.tpl_host_no_ip_fuzzy + re2.src_port + re2.src_host_terminator;
      re2.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + re2.src_ZPCc + "|>|$))";
      re2.tpl_email_fuzzy = "(^|" + text_separators + '|"|\\(|' + re2.src_ZCc + ")(" + re2.src_email_name + "@" + re2.tpl_host_fuzzy_strict + ")";
      re2.tpl_link_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
      // but can start with > (markdown blockquote)
      "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + re2.src_ZPCc + "))((?![$+<=>^`|｜])" + re2.tpl_host_port_fuzzy_strict + re2.src_path + ")";
      re2.tpl_link_no_ip_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
      // but can start with > (markdown blockquote)
      "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + re2.src_ZPCc + "))((?![$+<=>^`|｜])" + re2.tpl_host_port_no_ip_fuzzy_strict + re2.src_path + ")";
      return re2;
    };
    return re;
  }
  function assign(obj) {
    var sources = Array.prototype.slice.call(arguments, 1);
    sources.forEach(function(source2) {
      if (!source2) {
        return;
      }
      Object.keys(source2).forEach(function(key) {
        obj[key] = source2[key];
      });
    });
    return obj;
  }
  function _class(obj) {
    return Object.prototype.toString.call(obj);
  }
  function isString(obj) {
    return _class(obj) === "[object String]";
  }
  function isObject(obj) {
    return _class(obj) === "[object Object]";
  }
  function isRegExp(obj) {
    return _class(obj) === "[object RegExp]";
  }
  function isFunction(obj) {
    return _class(obj) === "[object Function]";
  }
  function escapeRE(str) {
    return str.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
  }
  var defaultOptions = {
    fuzzyLink: true,
    fuzzyEmail: true,
    fuzzyIP: false
  };
  function isOptionsObj(obj) {
    return Object.keys(obj || {}).reduce(function(acc, k) {
      return acc || defaultOptions.hasOwnProperty(k);
    }, false);
  }
  var defaultSchemas = {
    "http:": {
      validate: function(text2, pos, self2) {
        var tail = text2.slice(pos);
        if (!self2.re.http) {
          self2.re.http = new RegExp(
            "^\\/\\/" + self2.re.src_auth + self2.re.src_host_port_strict + self2.re.src_path,
            "i"
          );
        }
        if (self2.re.http.test(tail)) {
          return tail.match(self2.re.http)[0].length;
        }
        return 0;
      }
    },
    "https:": "http:",
    "ftp:": "http:",
    "//": {
      validate: function(text2, pos, self2) {
        var tail = text2.slice(pos);
        if (!self2.re.no_http) {
          self2.re.no_http = new RegExp(
            "^" + self2.re.src_auth + // Don't allow single-level domains, because of false positives like '//test'
            // with code comments
            "(?:localhost|(?:(?:" + self2.re.src_domain + ")\\.)+" + self2.re.src_domain_root + ")" + self2.re.src_port + self2.re.src_host_terminator + self2.re.src_path,
            "i"
          );
        }
        if (self2.re.no_http.test(tail)) {
          if (pos >= 3 && text2[pos - 3] === ":") {
            return 0;
          }
          if (pos >= 3 && text2[pos - 3] === "/") {
            return 0;
          }
          return tail.match(self2.re.no_http)[0].length;
        }
        return 0;
      }
    },
    "mailto:": {
      validate: function(text2, pos, self2) {
        var tail = text2.slice(pos);
        if (!self2.re.mailto) {
          self2.re.mailto = new RegExp(
            "^" + self2.re.src_email_name + "@" + self2.re.src_host_strict,
            "i"
          );
        }
        if (self2.re.mailto.test(tail)) {
          return tail.match(self2.re.mailto)[0].length;
        }
        return 0;
      }
    }
  };
  var tlds_2ch_src_re = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]";
  var tlds_default = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");
  function resetScanCache(self2) {
    self2.__index__ = -1;
    self2.__text_cache__ = "";
  }
  function createValidator(re2) {
    return function(text2, pos) {
      var tail = text2.slice(pos);
      if (re2.test(tail)) {
        return tail.match(re2)[0].length;
      }
      return 0;
    };
  }
  function createNormalizer() {
    return function(match, self2) {
      self2.normalize(match);
    };
  }
  function compile(self2) {
    var re2 = self2.re = requireRe()(self2.__opts__);
    var tlds = self2.__tlds__.slice();
    self2.onCompile();
    if (!self2.__tlds_replaced__) {
      tlds.push(tlds_2ch_src_re);
    }
    tlds.push(re2.src_xn);
    re2.src_tlds = tlds.join("|");
    function untpl(tpl) {
      return tpl.replace("%TLDS%", re2.src_tlds);
    }
    re2.email_fuzzy = RegExp(untpl(re2.tpl_email_fuzzy), "i");
    re2.link_fuzzy = RegExp(untpl(re2.tpl_link_fuzzy), "i");
    re2.link_no_ip_fuzzy = RegExp(untpl(re2.tpl_link_no_ip_fuzzy), "i");
    re2.host_fuzzy_test = RegExp(untpl(re2.tpl_host_fuzzy_test), "i");
    var aliases = [];
    self2.__compiled__ = {};
    function schemaError(name, val) {
      throw new Error('(LinkifyIt) Invalid schema "' + name + '": ' + val);
    }
    Object.keys(self2.__schemas__).forEach(function(name) {
      var val = self2.__schemas__[name];
      if (val === null) {
        return;
      }
      var compiled = { validate: null, link: null };
      self2.__compiled__[name] = compiled;
      if (isObject(val)) {
        if (isRegExp(val.validate)) {
          compiled.validate = createValidator(val.validate);
        } else if (isFunction(val.validate)) {
          compiled.validate = val.validate;
        } else {
          schemaError(name, val);
        }
        if (isFunction(val.normalize)) {
          compiled.normalize = val.normalize;
        } else if (!val.normalize) {
          compiled.normalize = createNormalizer();
        } else {
          schemaError(name, val);
        }
        return;
      }
      if (isString(val)) {
        aliases.push(name);
        return;
      }
      schemaError(name, val);
    });
    aliases.forEach(function(alias) {
      if (!self2.__compiled__[self2.__schemas__[alias]]) {
        return;
      }
      self2.__compiled__[alias].validate = self2.__compiled__[self2.__schemas__[alias]].validate;
      self2.__compiled__[alias].normalize = self2.__compiled__[self2.__schemas__[alias]].normalize;
    });
    self2.__compiled__[""] = { validate: null, normalize: createNormalizer() };
    var slist = Object.keys(self2.__compiled__).filter(function(name) {
      return name.length > 0 && self2.__compiled__[name];
    }).map(escapeRE).join("|");
    self2.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + re2.src_ZPCc + "))(" + slist + ")", "i");
    self2.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + re2.src_ZPCc + "))(" + slist + ")", "ig");
    self2.re.schema_at_start = RegExp("^" + self2.re.schema_search.source, "i");
    self2.re.pretest = RegExp(
      "(" + self2.re.schema_test.source + ")|(" + self2.re.host_fuzzy_test.source + ")|@",
      "i"
    );
    resetScanCache(self2);
  }
  function Match(self2, shift) {
    var start = self2.__index__, end = self2.__last_index__, text2 = self2.__text_cache__.slice(start, end);
    this.schema = self2.__schema__.toLowerCase();
    this.index = start + shift;
    this.lastIndex = end + shift;
    this.raw = text2;
    this.text = text2;
    this.url = text2;
  }
  function createMatch(self2, shift) {
    var match = new Match(self2, shift);
    self2.__compiled__[match.schema].normalize(match, self2);
    return match;
  }
  function LinkifyIt$1(schemas, options) {
    if (!(this instanceof LinkifyIt$1)) {
      return new LinkifyIt$1(schemas, options);
    }
    if (!options) {
      if (isOptionsObj(schemas)) {
        options = schemas;
        schemas = {};
      }
    }
    this.__opts__ = assign({}, defaultOptions, options);
    this.__index__ = -1;
    this.__last_index__ = -1;
    this.__schema__ = "";
    this.__text_cache__ = "";
    this.__schemas__ = assign({}, defaultSchemas, schemas);
    this.__compiled__ = {};
    this.__tlds__ = tlds_default;
    this.__tlds_replaced__ = false;
    this.re = {};
    compile(this);
  }
  LinkifyIt$1.prototype.add = function add(schema, definition) {
    this.__schemas__[schema] = definition;
    compile(this);
    return this;
  };
  LinkifyIt$1.prototype.set = function set(options) {
    this.__opts__ = assign(this.__opts__, options);
    return this;
  };
  LinkifyIt$1.prototype.test = function test(text2) {
    this.__text_cache__ = text2;
    this.__index__ = -1;
    if (!text2.length) {
      return false;
    }
    var m2, ml, me, len, shift, next, re2, tld_pos, at_pos;
    if (this.re.schema_test.test(text2)) {
      re2 = this.re.schema_search;
      re2.lastIndex = 0;
      while ((m2 = re2.exec(text2)) !== null) {
        len = this.testSchemaAt(text2, m2[2], re2.lastIndex);
        if (len) {
          this.__schema__ = m2[2];
          this.__index__ = m2.index + m2[1].length;
          this.__last_index__ = m2.index + m2[0].length + len;
          break;
        }
      }
    }
    if (this.__opts__.fuzzyLink && this.__compiled__["http:"]) {
      tld_pos = text2.search(this.re.host_fuzzy_test);
      if (tld_pos >= 0) {
        if (this.__index__ < 0 || tld_pos < this.__index__) {
          if ((ml = text2.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null) {
            shift = ml.index + ml[1].length;
            if (this.__index__ < 0 || shift < this.__index__) {
              this.__schema__ = "";
              this.__index__ = shift;
              this.__last_index__ = ml.index + ml[0].length;
            }
          }
        }
      }
    }
    if (this.__opts__.fuzzyEmail && this.__compiled__["mailto:"]) {
      at_pos = text2.indexOf("@");
      if (at_pos >= 0) {
        if ((me = text2.match(this.re.email_fuzzy)) !== null) {
          shift = me.index + me[1].length;
          next = me.index + me[0].length;
          if (this.__index__ < 0 || shift < this.__index__ || shift === this.__index__ && next > this.__last_index__) {
            this.__schema__ = "mailto:";
            this.__index__ = shift;
            this.__last_index__ = next;
          }
        }
      }
    }
    return this.__index__ >= 0;
  };
  LinkifyIt$1.prototype.pretest = function pretest(text2) {
    return this.re.pretest.test(text2);
  };
  LinkifyIt$1.prototype.testSchemaAt = function testSchemaAt(text2, schema, pos) {
    if (!this.__compiled__[schema.toLowerCase()]) {
      return 0;
    }
    return this.__compiled__[schema.toLowerCase()].validate(text2, pos, this);
  };
  LinkifyIt$1.prototype.match = function match(text2) {
    var shift = 0, result = [];
    if (this.__index__ >= 0 && this.__text_cache__ === text2) {
      result.push(createMatch(this, shift));
      shift = this.__last_index__;
    }
    var tail = shift ? text2.slice(shift) : text2;
    while (this.test(tail)) {
      result.push(createMatch(this, shift));
      tail = tail.slice(this.__last_index__);
      shift += this.__last_index__;
    }
    if (result.length) {
      return result;
    }
    return null;
  };
  LinkifyIt$1.prototype.matchAtStart = function matchAtStart(text2) {
    this.__text_cache__ = text2;
    this.__index__ = -1;
    if (!text2.length)
      return null;
    var m2 = this.re.schema_at_start.exec(text2);
    if (!m2)
      return null;
    var len = this.testSchemaAt(text2, m2[2], m2[0].length);
    if (!len)
      return null;
    this.__schema__ = m2[2];
    this.__index__ = m2.index + m2[1].length;
    this.__last_index__ = m2.index + m2[0].length + len;
    return createMatch(this, 0);
  };
  LinkifyIt$1.prototype.tlds = function tlds(list2, keepOld) {
    list2 = Array.isArray(list2) ? list2 : [list2];
    if (!keepOld) {
      this.__tlds__ = list2.slice();
      this.__tlds_replaced__ = true;
      compile(this);
      return this;
    }
    this.__tlds__ = this.__tlds__.concat(list2).sort().filter(function(el2, idx, arr) {
      return el2 !== arr[idx - 1];
    }).reverse();
    compile(this);
    return this;
  };
  LinkifyIt$1.prototype.normalize = function normalize2(match) {
    if (!match.schema) {
      match.url = "http://" + match.url;
    }
    if (match.schema === "mailto:" && !/^mailto:/i.test(match.url)) {
      match.url = "mailto:" + match.url;
    }
  };
  LinkifyIt$1.prototype.onCompile = function onCompile() {
  };
  var linkifyIt = LinkifyIt$1;
  const __viteBrowserExternal = {};
  const __viteBrowserExternal$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    default: __viteBrowserExternal
  }, Symbol.toStringTag, { value: "Module" }));
  const require$$8 = /* @__PURE__ */ getAugmentedNamespace(__viteBrowserExternal$1);
  var _default = {
    options: {
      html: false,
      // Enable HTML tags in source
      xhtmlOut: false,
      // Use '/' to close single tags (<br />)
      breaks: false,
      // Convert '\n' in paragraphs into <br>
      langPrefix: "language-",
      // CSS language prefix for fenced blocks
      linkify: false,
      // autoconvert URL-like texts to links
      // Enable some language-neutral replacements + quotes beautification
      typographer: false,
      // Double + single quotes replacement pairs, when typographer enabled,
      // and smartquotes on. Could be either a String or an Array.
      //
      // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
      // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
      quotes: "“”‘’",
      /* “”‘’ */
      // Highlighter function. Should return escaped HTML,
      // or '' if the source string is not changed and should be escaped externaly.
      // If result starts with <pre... internal wrapper is skipped.
      //
      // function (/*str, lang*/) { return ''; }
      //
      highlight: null,
      maxNesting: 100
      // Internal protection, recursion limit
    },
    components: {
      core: {},
      block: {},
      inline: {}
    }
  };
  var zero = {
    options: {
      html: false,
      // Enable HTML tags in source
      xhtmlOut: false,
      // Use '/' to close single tags (<br />)
      breaks: false,
      // Convert '\n' in paragraphs into <br>
      langPrefix: "language-",
      // CSS language prefix for fenced blocks
      linkify: false,
      // autoconvert URL-like texts to links
      // Enable some language-neutral replacements + quotes beautification
      typographer: false,
      // Double + single quotes replacement pairs, when typographer enabled,
      // and smartquotes on. Could be either a String or an Array.
      //
      // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
      // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
      quotes: "“”‘’",
      /* “”‘’ */
      // Highlighter function. Should return escaped HTML,
      // or '' if the source string is not changed and should be escaped externaly.
      // If result starts with <pre... internal wrapper is skipped.
      //
      // function (/*str, lang*/) { return ''; }
      //
      highlight: null,
      maxNesting: 20
      // Internal protection, recursion limit
    },
    components: {
      core: {
        rules: [
          "normalize",
          "block",
          "inline",
          "text_join"
        ]
      },
      block: {
        rules: [
          "paragraph"
        ]
      },
      inline: {
        rules: [
          "text"
        ],
        rules2: [
          "balance_pairs",
          "fragments_join"
        ]
      }
    }
  };
  var commonmark = {
    options: {
      html: true,
      // Enable HTML tags in source
      xhtmlOut: true,
      // Use '/' to close single tags (<br />)
      breaks: false,
      // Convert '\n' in paragraphs into <br>
      langPrefix: "language-",
      // CSS language prefix for fenced blocks
      linkify: false,
      // autoconvert URL-like texts to links
      // Enable some language-neutral replacements + quotes beautification
      typographer: false,
      // Double + single quotes replacement pairs, when typographer enabled,
      // and smartquotes on. Could be either a String or an Array.
      //
      // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
      // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
      quotes: "“”‘’",
      /* “”‘’ */
      // Highlighter function. Should return escaped HTML,
      // or '' if the source string is not changed and should be escaped externaly.
      // If result starts with <pre... internal wrapper is skipped.
      //
      // function (/*str, lang*/) { return ''; }
      //
      highlight: null,
      maxNesting: 20
      // Internal protection, recursion limit
    },
    components: {
      core: {
        rules: [
          "normalize",
          "block",
          "inline",
          "text_join"
        ]
      },
      block: {
        rules: [
          "blockquote",
          "code",
          "fence",
          "heading",
          "hr",
          "html_block",
          "lheading",
          "list",
          "reference",
          "paragraph"
        ]
      },
      inline: {
        rules: [
          "autolink",
          "backticks",
          "emphasis",
          "entity",
          "escape",
          "html_inline",
          "image",
          "link",
          "newline",
          "text"
        ],
        rules2: [
          "balance_pairs",
          "emphasis",
          "fragments_join"
        ]
      }
    }
  };
  var utils = utils$1;
  var helpers = helpers$1;
  var Renderer = renderer;
  var ParserCore = parser_core;
  var ParserBlock = parser_block;
  var ParserInline = parser_inline;
  var LinkifyIt = linkifyIt;
  var mdurl = mdurl$1;
  var punycode = require$$8;
  var config = {
    default: _default,
    zero,
    commonmark
  };
  var BAD_PROTO_RE = /^(vbscript|javascript|file|data):/;
  var GOOD_DATA_RE = /^data:image\/(gif|png|jpeg|webp);/;
  function validateLink(url) {
    var str = url.trim().toLowerCase();
    return BAD_PROTO_RE.test(str) ? GOOD_DATA_RE.test(str) ? true : false : true;
  }
  var RECODE_HOSTNAME_FOR = ["http:", "https:", "mailto:"];
  function normalizeLink(url) {
    var parsed = mdurl.parse(url, true);
    if (parsed.hostname) {
      if (!parsed.protocol || RECODE_HOSTNAME_FOR.indexOf(parsed.protocol) >= 0) {
        try {
          parsed.hostname = punycode.toASCII(parsed.hostname);
        } catch (er) {
        }
      }
    }
    return mdurl.encode(mdurl.format(parsed));
  }
  function normalizeLinkText(url) {
    var parsed = mdurl.parse(url, true);
    if (parsed.hostname) {
      if (!parsed.protocol || RECODE_HOSTNAME_FOR.indexOf(parsed.protocol) >= 0) {
        try {
          parsed.hostname = punycode.toUnicode(parsed.hostname);
        } catch (er) {
        }
      }
    }
    return mdurl.decode(mdurl.format(parsed), mdurl.decode.defaultChars + "%");
  }
  function MarkdownIt$1(presetName, options) {
    if (!(this instanceof MarkdownIt$1)) {
      return new MarkdownIt$1(presetName, options);
    }
    if (!options) {
      if (!utils.isString(presetName)) {
        options = presetName || {};
        presetName = "default";
      }
    }
    this.inline = new ParserInline();
    this.block = new ParserBlock();
    this.core = new ParserCore();
    this.renderer = new Renderer();
    this.linkify = new LinkifyIt();
    this.validateLink = validateLink;
    this.normalizeLink = normalizeLink;
    this.normalizeLinkText = normalizeLinkText;
    this.utils = utils;
    this.helpers = utils.assign({}, helpers);
    this.options = {};
    this.configure(presetName);
    if (options) {
      this.set(options);
    }
  }
  MarkdownIt$1.prototype.set = function(options) {
    utils.assign(this.options, options);
    return this;
  };
  MarkdownIt$1.prototype.configure = function(presets) {
    var self2 = this, presetName;
    if (utils.isString(presets)) {
      presetName = presets;
      presets = config[presetName];
      if (!presets) {
        throw new Error('Wrong `markdown-it` preset "' + presetName + '", check name');
      }
    }
    if (!presets) {
      throw new Error("Wrong `markdown-it` preset, can't be empty");
    }
    if (presets.options) {
      self2.set(presets.options);
    }
    if (presets.components) {
      Object.keys(presets.components).forEach(function(name) {
        if (presets.components[name].rules) {
          self2[name].ruler.enableOnly(presets.components[name].rules);
        }
        if (presets.components[name].rules2) {
          self2[name].ruler2.enableOnly(presets.components[name].rules2);
        }
      });
    }
    return this;
  };
  MarkdownIt$1.prototype.enable = function(list2, ignoreInvalid) {
    var result = [];
    if (!Array.isArray(list2)) {
      list2 = [list2];
    }
    ["core", "block", "inline"].forEach(function(chain) {
      result = result.concat(this[chain].ruler.enable(list2, true));
    }, this);
    result = result.concat(this.inline.ruler2.enable(list2, true));
    var missed = list2.filter(function(name) {
      return result.indexOf(name) < 0;
    });
    if (missed.length && !ignoreInvalid) {
      throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + missed);
    }
    return this;
  };
  MarkdownIt$1.prototype.disable = function(list2, ignoreInvalid) {
    var result = [];
    if (!Array.isArray(list2)) {
      list2 = [list2];
    }
    ["core", "block", "inline"].forEach(function(chain) {
      result = result.concat(this[chain].ruler.disable(list2, true));
    }, this);
    result = result.concat(this.inline.ruler2.disable(list2, true));
    var missed = list2.filter(function(name) {
      return result.indexOf(name) < 0;
    });
    if (missed.length && !ignoreInvalid) {
      throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + missed);
    }
    return this;
  };
  MarkdownIt$1.prototype.use = function(plugin) {
    var args = [this].concat(Array.prototype.slice.call(arguments, 1));
    plugin.apply(plugin, args);
    return this;
  };
  MarkdownIt$1.prototype.parse = function(src, env) {
    if (typeof src !== "string") {
      throw new Error("Input data should be a String");
    }
    var state = new this.core.State(src, this, env);
    this.core.process(state);
    return state.tokens;
  };
  MarkdownIt$1.prototype.render = function(src, env) {
    env = env || {};
    return this.renderer.render(this.parse(src, env), this.options, env);
  };
  MarkdownIt$1.prototype.parseInline = function(src, env) {
    var state = new this.core.State(src, this, env);
    state.inlineMode = true;
    this.core.process(state);
    return state.tokens;
  };
  MarkdownIt$1.prototype.renderInline = function(src, env) {
    env = env || {};
    return this.renderer.render(this.parseInline(src, env), this.options, env);
  };
  var lib = MarkdownIt$1;
  (function(module2) {
    module2.exports = lib;
  })(markdownIt);
  const MarkdownIt = /* @__PURE__ */ getDefaultExportFromCjs(markdownItExports);
  var deepFreezeEs6 = { exports: {} };
  function deepFreeze(obj) {
    if (obj instanceof Map) {
      obj.clear = obj.delete = obj.set = function() {
        throw new Error("map is read-only");
      };
    } else if (obj instanceof Set) {
      obj.add = obj.clear = obj.delete = function() {
        throw new Error("set is read-only");
      };
    }
    Object.freeze(obj);
    Object.getOwnPropertyNames(obj).forEach(function(name) {
      var prop2 = obj[name];
      if (typeof prop2 == "object" && !Object.isFrozen(prop2)) {
        deepFreeze(prop2);
      }
    });
    return obj;
  }
  deepFreezeEs6.exports = deepFreeze;
  deepFreezeEs6.exports.default = deepFreeze;
  class Response {
    /**
     * @param {CompiledMode} mode
     */
    constructor(mode) {
      if (mode.data === void 0)
        mode.data = {};
      this.data = mode.data;
      this.isMatchIgnored = false;
    }
    ignoreMatch() {
      this.isMatchIgnored = true;
    }
  }
  function escapeHTML(value) {
    return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
  }
  function inherit$1(original, ...objects) {
    const result = /* @__PURE__ */ Object.create(null);
    for (const key in original) {
      result[key] = original[key];
    }
    objects.forEach(function(obj) {
      for (const key in obj) {
        result[key] = obj[key];
      }
    });
    return (
      /** @type {T} */
      result
    );
  }
  const SPAN_CLOSE = "</span>";
  const emitsWrappingTags = (node) => {
    return !!node.scope || node.sublanguage && node.language;
  };
  const scopeToCSSClass = (name, { prefix }) => {
    if (name.includes(".")) {
      const pieces = name.split(".");
      return [
        `${prefix}${pieces.shift()}`,
        ...pieces.map((x2, i2) => `${x2}${"_".repeat(i2 + 1)}`)
      ].join(" ");
    }
    return `${prefix}${name}`;
  };
  class HTMLRenderer {
    /**
     * Creates a new HTMLRenderer
     *
     * @param {Tree} parseTree - the parse tree (must support `walk` API)
     * @param {{classPrefix: string}} options
     */
    constructor(parseTree, options) {
      this.buffer = "";
      this.classPrefix = options.classPrefix;
      parseTree.walk(this);
    }
    /**
     * Adds texts to the output stream
     *
     * @param {string} text */
    addText(text2) {
      this.buffer += escapeHTML(text2);
    }
    /**
     * Adds a node open to the output stream (if needed)
     *
     * @param {Node} node */
    openNode(node) {
      if (!emitsWrappingTags(node))
        return;
      let className = "";
      if (node.sublanguage) {
        className = `language-${node.language}`;
      } else {
        className = scopeToCSSClass(node.scope, { prefix: this.classPrefix });
      }
      this.span(className);
    }
    /**
     * Adds a node close to the output stream (if needed)
     *
     * @param {Node} node */
    closeNode(node) {
      if (!emitsWrappingTags(node))
        return;
      this.buffer += SPAN_CLOSE;
    }
    /**
     * returns the accumulated buffer
    */
    value() {
      return this.buffer;
    }
    // helpers
    /**
     * Builds a span element
     *
     * @param {string} className */
    span(className) {
      this.buffer += `<span class="${className}">`;
    }
  }
  const newNode = (opts = {}) => {
    const result = { children: [] };
    Object.assign(result, opts);
    return result;
  };
  class TokenTree {
    constructor() {
      this.rootNode = newNode();
      this.stack = [this.rootNode];
    }
    get top() {
      return this.stack[this.stack.length - 1];
    }
    get root() {
      return this.rootNode;
    }
    /** @param {Node} node */
    add(node) {
      this.top.children.push(node);
    }
    /** @param {string} scope */
    openNode(scope) {
      const node = newNode({ scope });
      this.add(node);
      this.stack.push(node);
    }
    closeNode() {
      if (this.stack.length > 1) {
        return this.stack.pop();
      }
      return void 0;
    }
    closeAllNodes() {
      while (this.closeNode())
        ;
    }
    toJSON() {
      return JSON.stringify(this.rootNode, null, 4);
    }
    /**
     * @typedef { import("./html_renderer").Renderer } Renderer
     * @param {Renderer} builder
     */
    walk(builder) {
      return this.constructor._walk(builder, this.rootNode);
    }
    /**
     * @param {Renderer} builder
     * @param {Node} node
     */
    static _walk(builder, node) {
      if (typeof node === "string") {
        builder.addText(node);
      } else if (node.children) {
        builder.openNode(node);
        node.children.forEach((child) => this._walk(builder, child));
        builder.closeNode(node);
      }
      return builder;
    }
    /**
     * @param {Node} node
     */
    static _collapse(node) {
      if (typeof node === "string")
        return;
      if (!node.children)
        return;
      if (node.children.every((el2) => typeof el2 === "string")) {
        node.children = [node.children.join("")];
      } else {
        node.children.forEach((child) => {
          TokenTree._collapse(child);
        });
      }
    }
  }
  class TokenTreeEmitter extends TokenTree {
    /**
     * @param {*} options
     */
    constructor(options) {
      super();
      this.options = options;
    }
    /**
     * @param {string} text
     * @param {string} scope
     */
    addKeyword(text2, scope) {
      if (text2 === "") {
        return;
      }
      this.openNode(scope);
      this.addText(text2);
      this.closeNode();
    }
    /**
     * @param {string} text
     */
    addText(text2) {
      if (text2 === "") {
        return;
      }
      this.add(text2);
    }
    /**
     * @param {Emitter & {root: DataNode}} emitter
     * @param {string} name
     */
    addSublanguage(emitter, name) {
      const node = emitter.root;
      node.sublanguage = true;
      node.language = name;
      this.add(node);
    }
    toHTML() {
      const renderer2 = new HTMLRenderer(this, this.options);
      return renderer2.value();
    }
    finalize() {
      return true;
    }
  }
  function source(re2) {
    if (!re2)
      return null;
    if (typeof re2 === "string")
      return re2;
    return re2.source;
  }
  function lookahead(re2) {
    return concat("(?=", re2, ")");
  }
  function anyNumberOfTimes(re2) {
    return concat("(?:", re2, ")*");
  }
  function optional(re2) {
    return concat("(?:", re2, ")?");
  }
  function concat(...args) {
    const joined = args.map((x2) => source(x2)).join("");
    return joined;
  }
  function stripOptionsFromArgs(args) {
    const opts = args[args.length - 1];
    if (typeof opts === "object" && opts.constructor === Object) {
      args.splice(args.length - 1, 1);
      return opts;
    } else {
      return {};
    }
  }
  function either(...args) {
    const opts = stripOptionsFromArgs(args);
    const joined = "(" + (opts.capture ? "" : "?:") + args.map((x2) => source(x2)).join("|") + ")";
    return joined;
  }
  function countMatchGroups(re2) {
    return new RegExp(re2.toString() + "|").exec("").length - 1;
  }
  function startsWith(re2, lexeme) {
    const match = re2 && re2.exec(lexeme);
    return match && match.index === 0;
  }
  const BACKREF_RE = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
  function _rewriteBackreferences(regexps, { joinWith }) {
    let numCaptures = 0;
    return regexps.map((regex2) => {
      numCaptures += 1;
      const offset = numCaptures;
      let re2 = source(regex2);
      let out = "";
      while (re2.length > 0) {
        const match = BACKREF_RE.exec(re2);
        if (!match) {
          out += re2;
          break;
        }
        out += re2.substring(0, match.index);
        re2 = re2.substring(match.index + match[0].length);
        if (match[0][0] === "\\" && match[1]) {
          out += "\\" + String(Number(match[1]) + offset);
        } else {
          out += match[0];
          if (match[0] === "(") {
            numCaptures++;
          }
        }
      }
      return out;
    }).map((re2) => `(${re2})`).join(joinWith);
  }
  const MATCH_NOTHING_RE = /\b\B/;
  const IDENT_RE$1 = "[a-zA-Z]\\w*";
  const UNDERSCORE_IDENT_RE = "[a-zA-Z_]\\w*";
  const NUMBER_RE = "\\b\\d+(\\.\\d+)?";
  const C_NUMBER_RE = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)";
  const BINARY_NUMBER_RE = "\\b(0b[01]+)";
  const RE_STARTERS_RE = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";
  const SHEBANG = (opts = {}) => {
    const beginShebang = /^#![ ]*\//;
    if (opts.binary) {
      opts.begin = concat(
        beginShebang,
        /.*\b/,
        opts.binary,
        /\b.*/
      );
    }
    return inherit$1({
      scope: "meta",
      begin: beginShebang,
      end: /$/,
      relevance: 0,
      /** @type {ModeCallback} */
      "on:begin": (m2, resp) => {
        if (m2.index !== 0)
          resp.ignoreMatch();
      }
    }, opts);
  };
  const BACKSLASH_ESCAPE = {
    begin: "\\\\[\\s\\S]",
    relevance: 0
  };
  const APOS_STRING_MODE = {
    scope: "string",
    begin: "'",
    end: "'",
    illegal: "\\n",
    contains: [BACKSLASH_ESCAPE]
  };
  const QUOTE_STRING_MODE = {
    scope: "string",
    begin: '"',
    end: '"',
    illegal: "\\n",
    contains: [BACKSLASH_ESCAPE]
  };
  const PHRASAL_WORDS_MODE = {
    begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
  };
  const COMMENT = function(begin, end, modeOptions = {}) {
    const mode = inherit$1(
      {
        scope: "comment",
        begin,
        end,
        contains: []
      },
      modeOptions
    );
    mode.contains.push({
      scope: "doctag",
      // hack to avoid the space from being included. the space is necessary to
      // match here to prevent the plain text rule below from gobbling up doctags
      begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
      end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
      excludeBegin: true,
      relevance: 0
    });
    const ENGLISH_WORD = either(
      // list of common 1 and 2 letter words in English
      "I",
      "a",
      "is",
      "so",
      "us",
      "to",
      "at",
      "if",
      "in",
      "it",
      "on",
      // note: this is not an exhaustive list of contractions, just popular ones
      /[A-Za-z]+['](d|ve|re|ll|t|s|n)/,
      // contractions - can't we'd they're let's, etc
      /[A-Za-z]+[-][a-z]+/,
      // `no-way`, etc.
      /[A-Za-z][a-z]{2,}/
      // allow capitalized words at beginning of sentences
    );
    mode.contains.push(
      {
        // TODO: how to include ", (, ) without breaking grammars that use these for
        // comment delimiters?
        // begin: /[ ]+([()"]?([A-Za-z'-]{3,}|is|a|I|so|us|[tT][oO]|at|if|in|it|on)[.]?[()":]?([.][ ]|[ ]|\))){3}/
        // ---
        // this tries to find sequences of 3 english words in a row (without any
        // "programming" type syntax) this gives us a strong signal that we've
        // TRULY found a comment - vs perhaps scanning with the wrong language.
        // It's possible to find something that LOOKS like the start of the
        // comment - but then if there is no readable text - good chance it is a
        // false match and not a comment.
        //
        // for a visual example please see:
        // https://github.com/highlightjs/highlight.js/issues/2827
        begin: concat(
          /[ ]+/,
          // necessary to prevent us gobbling up doctags like /* @author Bob Mcgill */
          "(",
          ENGLISH_WORD,
          /[.]?[:]?([.][ ]|[ ])/,
          "){3}"
        )
        // look for 3 words in a row
      }
    );
    return mode;
  };
  const C_LINE_COMMENT_MODE = COMMENT("//", "$");
  const C_BLOCK_COMMENT_MODE = COMMENT("/\\*", "\\*/");
  const HASH_COMMENT_MODE = COMMENT("#", "$");
  const NUMBER_MODE = {
    scope: "number",
    begin: NUMBER_RE,
    relevance: 0
  };
  const C_NUMBER_MODE = {
    scope: "number",
    begin: C_NUMBER_RE,
    relevance: 0
  };
  const BINARY_NUMBER_MODE = {
    scope: "number",
    begin: BINARY_NUMBER_RE,
    relevance: 0
  };
  const REGEXP_MODE = {
    // this outer rule makes sure we actually have a WHOLE regex and not simply
    // an expression such as:
    //
    //     3 / something
    //
    // (which will then blow up when regex's `illegal` sees the newline)
    begin: /(?=\/[^/\n]*\/)/,
    contains: [{
      scope: "regexp",
      begin: /\//,
      end: /\/[gimuy]*/,
      illegal: /\n/,
      contains: [
        BACKSLASH_ESCAPE,
        {
          begin: /\[/,
          end: /\]/,
          relevance: 0,
          contains: [BACKSLASH_ESCAPE]
        }
      ]
    }]
  };
  const TITLE_MODE = {
    scope: "title",
    begin: IDENT_RE$1,
    relevance: 0
  };
  const UNDERSCORE_TITLE_MODE = {
    scope: "title",
    begin: UNDERSCORE_IDENT_RE,
    relevance: 0
  };
  const METHOD_GUARD = {
    // excludes method names from keyword processing
    begin: "\\.\\s*" + UNDERSCORE_IDENT_RE,
    relevance: 0
  };
  const END_SAME_AS_BEGIN = function(mode) {
    return Object.assign(
      mode,
      {
        /** @type {ModeCallback} */
        "on:begin": (m2, resp) => {
          resp.data._beginMatch = m2[1];
        },
        /** @type {ModeCallback} */
        "on:end": (m2, resp) => {
          if (resp.data._beginMatch !== m2[1])
            resp.ignoreMatch();
        }
      }
    );
  };
  var MODES$1 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    MATCH_NOTHING_RE,
    IDENT_RE: IDENT_RE$1,
    UNDERSCORE_IDENT_RE,
    NUMBER_RE,
    C_NUMBER_RE,
    BINARY_NUMBER_RE,
    RE_STARTERS_RE,
    SHEBANG,
    BACKSLASH_ESCAPE,
    APOS_STRING_MODE,
    QUOTE_STRING_MODE,
    PHRASAL_WORDS_MODE,
    COMMENT,
    C_LINE_COMMENT_MODE,
    C_BLOCK_COMMENT_MODE,
    HASH_COMMENT_MODE,
    NUMBER_MODE,
    C_NUMBER_MODE,
    BINARY_NUMBER_MODE,
    REGEXP_MODE,
    TITLE_MODE,
    UNDERSCORE_TITLE_MODE,
    METHOD_GUARD,
    END_SAME_AS_BEGIN
  });
  function skipIfHasPrecedingDot(match, response) {
    const before = match.input[match.index - 1];
    if (before === ".") {
      response.ignoreMatch();
    }
  }
  function scopeClassName(mode, _parent) {
    if (mode.className !== void 0) {
      mode.scope = mode.className;
      delete mode.className;
    }
  }
  function beginKeywords(mode, parent) {
    if (!parent)
      return;
    if (!mode.beginKeywords)
      return;
    mode.begin = "\\b(" + mode.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)";
    mode.__beforeBegin = skipIfHasPrecedingDot;
    mode.keywords = mode.keywords || mode.beginKeywords;
    delete mode.beginKeywords;
    if (mode.relevance === void 0)
      mode.relevance = 0;
  }
  function compileIllegal(mode, _parent) {
    if (!Array.isArray(mode.illegal))
      return;
    mode.illegal = either(...mode.illegal);
  }
  function compileMatch(mode, _parent) {
    if (!mode.match)
      return;
    if (mode.begin || mode.end)
      throw new Error("begin & end are not supported with match");
    mode.begin = mode.match;
    delete mode.match;
  }
  function compileRelevance(mode, _parent) {
    if (mode.relevance === void 0)
      mode.relevance = 1;
  }
  const beforeMatchExt = (mode, parent) => {
    if (!mode.beforeMatch)
      return;
    if (mode.starts)
      throw new Error("beforeMatch cannot be used with starts");
    const originalMode = Object.assign({}, mode);
    Object.keys(mode).forEach((key) => {
      delete mode[key];
    });
    mode.keywords = originalMode.keywords;
    mode.begin = concat(originalMode.beforeMatch, lookahead(originalMode.begin));
    mode.starts = {
      relevance: 0,
      contains: [
        Object.assign(originalMode, { endsParent: true })
      ]
    };
    mode.relevance = 0;
    delete originalMode.beforeMatch;
  };
  const COMMON_KEYWORDS = [
    "of",
    "and",
    "for",
    "in",
    "not",
    "or",
    "if",
    "then",
    "parent",
    // common variable name
    "list",
    // common variable name
    "value"
    // common variable name
  ];
  const DEFAULT_KEYWORD_SCOPE = "keyword";
  function compileKeywords(rawKeywords, caseInsensitive, scopeName = DEFAULT_KEYWORD_SCOPE) {
    const compiledKeywords = /* @__PURE__ */ Object.create(null);
    if (typeof rawKeywords === "string") {
      compileList(scopeName, rawKeywords.split(" "));
    } else if (Array.isArray(rawKeywords)) {
      compileList(scopeName, rawKeywords);
    } else {
      Object.keys(rawKeywords).forEach(function(scopeName2) {
        Object.assign(
          compiledKeywords,
          compileKeywords(rawKeywords[scopeName2], caseInsensitive, scopeName2)
        );
      });
    }
    return compiledKeywords;
    function compileList(scopeName2, keywordList) {
      if (caseInsensitive) {
        keywordList = keywordList.map((x2) => x2.toLowerCase());
      }
      keywordList.forEach(function(keyword) {
        const pair = keyword.split("|");
        compiledKeywords[pair[0]] = [scopeName2, scoreForKeyword(pair[0], pair[1])];
      });
    }
  }
  function scoreForKeyword(keyword, providedScore) {
    if (providedScore) {
      return Number(providedScore);
    }
    return commonKeyword(keyword) ? 0 : 1;
  }
  function commonKeyword(keyword) {
    return COMMON_KEYWORDS.includes(keyword.toLowerCase());
  }
  const seenDeprecations = {};
  const error = (message) => {
    console.error(message);
  };
  const warn = (message, ...args) => {
    console.log(`WARN: ${message}`, ...args);
  };
  const deprecated = (version2, message) => {
    if (seenDeprecations[`${version2}/${message}`])
      return;
    console.log(`Deprecated as of ${version2}. ${message}`);
    seenDeprecations[`${version2}/${message}`] = true;
  };
  const MultiClassError = new Error();
  function remapScopeNames(mode, regexes, { key }) {
    let offset = 0;
    const scopeNames = mode[key];
    const emit = {};
    const positions = {};
    for (let i2 = 1; i2 <= regexes.length; i2++) {
      positions[i2 + offset] = scopeNames[i2];
      emit[i2 + offset] = true;
      offset += countMatchGroups(regexes[i2 - 1]);
    }
    mode[key] = positions;
    mode[key]._emit = emit;
    mode[key]._multi = true;
  }
  function beginMultiClass(mode) {
    if (!Array.isArray(mode.begin))
      return;
    if (mode.skip || mode.excludeBegin || mode.returnBegin) {
      error("skip, excludeBegin, returnBegin not compatible with beginScope: {}");
      throw MultiClassError;
    }
    if (typeof mode.beginScope !== "object" || mode.beginScope === null) {
      error("beginScope must be object");
      throw MultiClassError;
    }
    remapScopeNames(mode, mode.begin, { key: "beginScope" });
    mode.begin = _rewriteBackreferences(mode.begin, { joinWith: "" });
  }
  function endMultiClass(mode) {
    if (!Array.isArray(mode.end))
      return;
    if (mode.skip || mode.excludeEnd || mode.returnEnd) {
      error("skip, excludeEnd, returnEnd not compatible with endScope: {}");
      throw MultiClassError;
    }
    if (typeof mode.endScope !== "object" || mode.endScope === null) {
      error("endScope must be object");
      throw MultiClassError;
    }
    remapScopeNames(mode, mode.end, { key: "endScope" });
    mode.end = _rewriteBackreferences(mode.end, { joinWith: "" });
  }
  function scopeSugar(mode) {
    if (mode.scope && typeof mode.scope === "object" && mode.scope !== null) {
      mode.beginScope = mode.scope;
      delete mode.scope;
    }
  }
  function MultiClass(mode) {
    scopeSugar(mode);
    if (typeof mode.beginScope === "string") {
      mode.beginScope = { _wrap: mode.beginScope };
    }
    if (typeof mode.endScope === "string") {
      mode.endScope = { _wrap: mode.endScope };
    }
    beginMultiClass(mode);
    endMultiClass(mode);
  }
  function compileLanguage(language) {
    function langRe(value, global) {
      return new RegExp(
        source(value),
        "m" + (language.case_insensitive ? "i" : "") + (language.unicodeRegex ? "u" : "") + (global ? "g" : "")
      );
    }
    class MultiRegex {
      constructor() {
        this.matchIndexes = {};
        this.regexes = [];
        this.matchAt = 1;
        this.position = 0;
      }
      // @ts-ignore
      addRule(re2, opts) {
        opts.position = this.position++;
        this.matchIndexes[this.matchAt] = opts;
        this.regexes.push([opts, re2]);
        this.matchAt += countMatchGroups(re2) + 1;
      }
      compile() {
        if (this.regexes.length === 0) {
          this.exec = () => null;
        }
        const terminators = this.regexes.map((el2) => el2[1]);
        this.matcherRe = langRe(_rewriteBackreferences(terminators, { joinWith: "|" }), true);
        this.lastIndex = 0;
      }
      /** @param {string} s */
      exec(s) {
        this.matcherRe.lastIndex = this.lastIndex;
        const match = this.matcherRe.exec(s);
        if (!match) {
          return null;
        }
        const i2 = match.findIndex((el2, i3) => i3 > 0 && el2 !== void 0);
        const matchData = this.matchIndexes[i2];
        match.splice(0, i2);
        return Object.assign(match, matchData);
      }
    }
    class ResumableMultiRegex {
      constructor() {
        this.rules = [];
        this.multiRegexes = [];
        this.count = 0;
        this.lastIndex = 0;
        this.regexIndex = 0;
      }
      // @ts-ignore
      getMatcher(index) {
        if (this.multiRegexes[index])
          return this.multiRegexes[index];
        const matcher = new MultiRegex();
        this.rules.slice(index).forEach(([re2, opts]) => matcher.addRule(re2, opts));
        matcher.compile();
        this.multiRegexes[index] = matcher;
        return matcher;
      }
      resumingScanAtSamePosition() {
        return this.regexIndex !== 0;
      }
      considerAll() {
        this.regexIndex = 0;
      }
      // @ts-ignore
      addRule(re2, opts) {
        this.rules.push([re2, opts]);
        if (opts.type === "begin")
          this.count++;
      }
      /** @param {string} s */
      exec(s) {
        const m2 = this.getMatcher(this.regexIndex);
        m2.lastIndex = this.lastIndex;
        let result = m2.exec(s);
        if (this.resumingScanAtSamePosition()) {
          if (result && result.index === this.lastIndex)
            ;
          else {
            const m22 = this.getMatcher(0);
            m22.lastIndex = this.lastIndex + 1;
            result = m22.exec(s);
          }
        }
        if (result) {
          this.regexIndex += result.position + 1;
          if (this.regexIndex === this.count) {
            this.considerAll();
          }
        }
        return result;
      }
    }
    function buildModeRegex(mode) {
      const mm = new ResumableMultiRegex();
      mode.contains.forEach((term) => mm.addRule(term.begin, { rule: term, type: "begin" }));
      if (mode.terminatorEnd) {
        mm.addRule(mode.terminatorEnd, { type: "end" });
      }
      if (mode.illegal) {
        mm.addRule(mode.illegal, { type: "illegal" });
      }
      return mm;
    }
    function compileMode(mode, parent) {
      const cmode = (
        /** @type CompiledMode */
        mode
      );
      if (mode.isCompiled)
        return cmode;
      [
        scopeClassName,
        // do this early so compiler extensions generally don't have to worry about
        // the distinction between match/begin
        compileMatch,
        MultiClass,
        beforeMatchExt
      ].forEach((ext) => ext(mode, parent));
      language.compilerExtensions.forEach((ext) => ext(mode, parent));
      mode.__beforeBegin = null;
      [
        beginKeywords,
        // do this later so compiler extensions that come earlier have access to the
        // raw array if they wanted to perhaps manipulate it, etc.
        compileIllegal,
        // default to 1 relevance if not specified
        compileRelevance
      ].forEach((ext) => ext(mode, parent));
      mode.isCompiled = true;
      let keywordPattern = null;
      if (typeof mode.keywords === "object" && mode.keywords.$pattern) {
        mode.keywords = Object.assign({}, mode.keywords);
        keywordPattern = mode.keywords.$pattern;
        delete mode.keywords.$pattern;
      }
      keywordPattern = keywordPattern || /\w+/;
      if (mode.keywords) {
        mode.keywords = compileKeywords(mode.keywords, language.case_insensitive);
      }
      cmode.keywordPatternRe = langRe(keywordPattern, true);
      if (parent) {
        if (!mode.begin)
          mode.begin = /\B|\b/;
        cmode.beginRe = langRe(cmode.begin);
        if (!mode.end && !mode.endsWithParent)
          mode.end = /\B|\b/;
        if (mode.end)
          cmode.endRe = langRe(cmode.end);
        cmode.terminatorEnd = source(cmode.end) || "";
        if (mode.endsWithParent && parent.terminatorEnd) {
          cmode.terminatorEnd += (mode.end ? "|" : "") + parent.terminatorEnd;
        }
      }
      if (mode.illegal)
        cmode.illegalRe = langRe(
          /** @type {RegExp | string} */
          mode.illegal
        );
      if (!mode.contains)
        mode.contains = [];
      mode.contains = [].concat(...mode.contains.map(function(c) {
        return expandOrCloneMode(c === "self" ? mode : c);
      }));
      mode.contains.forEach(function(c) {
        compileMode(
          /** @type Mode */
          c,
          cmode
        );
      });
      if (mode.starts) {
        compileMode(mode.starts, parent);
      }
      cmode.matcher = buildModeRegex(cmode);
      return cmode;
    }
    if (!language.compilerExtensions)
      language.compilerExtensions = [];
    if (language.contains && language.contains.includes("self")) {
      throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
    }
    language.classNameAliases = inherit$1(language.classNameAliases || {});
    return compileMode(
      /** @type Mode */
      language
    );
  }
  function dependencyOnParent(mode) {
    if (!mode)
      return false;
    return mode.endsWithParent || dependencyOnParent(mode.starts);
  }
  function expandOrCloneMode(mode) {
    if (mode.variants && !mode.cachedVariants) {
      mode.cachedVariants = mode.variants.map(function(variant) {
        return inherit$1(mode, { variants: null }, variant);
      });
    }
    if (mode.cachedVariants) {
      return mode.cachedVariants;
    }
    if (dependencyOnParent(mode)) {
      return inherit$1(mode, { starts: mode.starts ? inherit$1(mode.starts) : null });
    }
    if (Object.isFrozen(mode)) {
      return inherit$1(mode);
    }
    return mode;
  }
  var version = "11.7.0";
  class HTMLInjectionError extends Error {
    constructor(reason, html2) {
      super(reason);
      this.name = "HTMLInjectionError";
      this.html = html2;
    }
  }
  const escape = escapeHTML;
  const inherit = inherit$1;
  const NO_MATCH = Symbol("nomatch");
  const MAX_KEYWORD_HITS = 7;
  const HLJS = function(hljs) {
    const languages = /* @__PURE__ */ Object.create(null);
    const aliases = /* @__PURE__ */ Object.create(null);
    const plugins = [];
    let SAFE_MODE = true;
    const LANGUAGE_NOT_FOUND = "Could not find the language '{}', did you forget to load/include a language module?";
    const PLAINTEXT_LANGUAGE = { disableAutodetect: true, name: "Plain text", contains: [] };
    let options = {
      ignoreUnescapedHTML: false,
      throwUnescapedHTML: false,
      noHighlightRe: /^(no-?highlight)$/i,
      languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
      classPrefix: "hljs-",
      cssSelector: "pre code",
      languages: null,
      // beta configuration options, subject to change, welcome to discuss
      // https://github.com/highlightjs/highlight.js/issues/1086
      __emitter: TokenTreeEmitter
    };
    function shouldNotHighlight(languageName) {
      return options.noHighlightRe.test(languageName);
    }
    function blockLanguage(block2) {
      let classes = block2.className + " ";
      classes += block2.parentNode ? block2.parentNode.className : "";
      const match = options.languageDetectRe.exec(classes);
      if (match) {
        const language = getLanguage(match[1]);
        if (!language) {
          warn(LANGUAGE_NOT_FOUND.replace("{}", match[1]));
          warn("Falling back to no-highlight mode for this block.", block2);
        }
        return language ? match[1] : "no-highlight";
      }
      return classes.split(/\s+/).find((_class2) => shouldNotHighlight(_class2) || getLanguage(_class2));
    }
    function highlight2(codeOrLanguageName, optionsOrCode, ignoreIllegals) {
      let code2 = "";
      let languageName = "";
      if (typeof optionsOrCode === "object") {
        code2 = codeOrLanguageName;
        ignoreIllegals = optionsOrCode.ignoreIllegals;
        languageName = optionsOrCode.language;
      } else {
        deprecated("10.7.0", "highlight(lang, code, ...args) has been deprecated.");
        deprecated("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277");
        languageName = codeOrLanguageName;
        code2 = optionsOrCode;
      }
      if (ignoreIllegals === void 0) {
        ignoreIllegals = true;
      }
      const context = {
        code: code2,
        language: languageName
      };
      fire("before:highlight", context);
      const result = context.result ? context.result : _highlight(context.language, context.code, ignoreIllegals);
      result.code = context.code;
      fire("after:highlight", result);
      return result;
    }
    function _highlight(languageName, codeToHighlight, ignoreIllegals, continuation) {
      const keywordHits = /* @__PURE__ */ Object.create(null);
      function keywordData(mode, matchText) {
        return mode.keywords[matchText];
      }
      function processKeywords() {
        if (!top2.keywords) {
          emitter.addText(modeBuffer);
          return;
        }
        let lastIndex = 0;
        top2.keywordPatternRe.lastIndex = 0;
        let match = top2.keywordPatternRe.exec(modeBuffer);
        let buf = "";
        while (match) {
          buf += modeBuffer.substring(lastIndex, match.index);
          const word = language.case_insensitive ? match[0].toLowerCase() : match[0];
          const data = keywordData(top2, word);
          if (data) {
            const [kind, keywordRelevance] = data;
            emitter.addText(buf);
            buf = "";
            keywordHits[word] = (keywordHits[word] || 0) + 1;
            if (keywordHits[word] <= MAX_KEYWORD_HITS)
              relevance += keywordRelevance;
            if (kind.startsWith("_")) {
              buf += match[0];
            } else {
              const cssClass = language.classNameAliases[kind] || kind;
              emitter.addKeyword(match[0], cssClass);
            }
          } else {
            buf += match[0];
          }
          lastIndex = top2.keywordPatternRe.lastIndex;
          match = top2.keywordPatternRe.exec(modeBuffer);
        }
        buf += modeBuffer.substring(lastIndex);
        emitter.addText(buf);
      }
      function processSubLanguage() {
        if (modeBuffer === "")
          return;
        let result2 = null;
        if (typeof top2.subLanguage === "string") {
          if (!languages[top2.subLanguage]) {
            emitter.addText(modeBuffer);
            return;
          }
          result2 = _highlight(top2.subLanguage, modeBuffer, true, continuations[top2.subLanguage]);
          continuations[top2.subLanguage] = /** @type {CompiledMode} */
          result2._top;
        } else {
          result2 = highlightAuto(modeBuffer, top2.subLanguage.length ? top2.subLanguage : null);
        }
        if (top2.relevance > 0) {
          relevance += result2.relevance;
        }
        emitter.addSublanguage(result2._emitter, result2.language);
      }
      function processBuffer() {
        if (top2.subLanguage != null) {
          processSubLanguage();
        } else {
          processKeywords();
        }
        modeBuffer = "";
      }
      function emitMultiClass(scope, match) {
        let i2 = 1;
        const max = match.length - 1;
        while (i2 <= max) {
          if (!scope._emit[i2]) {
            i2++;
            continue;
          }
          const klass = language.classNameAliases[scope[i2]] || scope[i2];
          const text2 = match[i2];
          if (klass) {
            emitter.addKeyword(text2, klass);
          } else {
            modeBuffer = text2;
            processKeywords();
            modeBuffer = "";
          }
          i2++;
        }
      }
      function startNewMode(mode, match) {
        if (mode.scope && typeof mode.scope === "string") {
          emitter.openNode(language.classNameAliases[mode.scope] || mode.scope);
        }
        if (mode.beginScope) {
          if (mode.beginScope._wrap) {
            emitter.addKeyword(modeBuffer, language.classNameAliases[mode.beginScope._wrap] || mode.beginScope._wrap);
            modeBuffer = "";
          } else if (mode.beginScope._multi) {
            emitMultiClass(mode.beginScope, match);
            modeBuffer = "";
          }
        }
        top2 = Object.create(mode, { parent: { value: top2 } });
        return top2;
      }
      function endOfMode(mode, match, matchPlusRemainder) {
        let matched = startsWith(mode.endRe, matchPlusRemainder);
        if (matched) {
          if (mode["on:end"]) {
            const resp = new Response(mode);
            mode["on:end"](match, resp);
            if (resp.isMatchIgnored)
              matched = false;
          }
          if (matched) {
            while (mode.endsParent && mode.parent) {
              mode = mode.parent;
            }
            return mode;
          }
        }
        if (mode.endsWithParent) {
          return endOfMode(mode.parent, match, matchPlusRemainder);
        }
      }
      function doIgnore(lexeme) {
        if (top2.matcher.regexIndex === 0) {
          modeBuffer += lexeme[0];
          return 1;
        } else {
          resumeScanAtSamePosition = true;
          return 0;
        }
      }
      function doBeginMatch(match) {
        const lexeme = match[0];
        const newMode = match.rule;
        const resp = new Response(newMode);
        const beforeCallbacks = [newMode.__beforeBegin, newMode["on:begin"]];
        for (const cb of beforeCallbacks) {
          if (!cb)
            continue;
          cb(match, resp);
          if (resp.isMatchIgnored)
            return doIgnore(lexeme);
        }
        if (newMode.skip) {
          modeBuffer += lexeme;
        } else {
          if (newMode.excludeBegin) {
            modeBuffer += lexeme;
          }
          processBuffer();
          if (!newMode.returnBegin && !newMode.excludeBegin) {
            modeBuffer = lexeme;
          }
        }
        startNewMode(newMode, match);
        return newMode.returnBegin ? 0 : lexeme.length;
      }
      function doEndMatch(match) {
        const lexeme = match[0];
        const matchPlusRemainder = codeToHighlight.substring(match.index);
        const endMode = endOfMode(top2, match, matchPlusRemainder);
        if (!endMode) {
          return NO_MATCH;
        }
        const origin = top2;
        if (top2.endScope && top2.endScope._wrap) {
          processBuffer();
          emitter.addKeyword(lexeme, top2.endScope._wrap);
        } else if (top2.endScope && top2.endScope._multi) {
          processBuffer();
          emitMultiClass(top2.endScope, match);
        } else if (origin.skip) {
          modeBuffer += lexeme;
        } else {
          if (!(origin.returnEnd || origin.excludeEnd)) {
            modeBuffer += lexeme;
          }
          processBuffer();
          if (origin.excludeEnd) {
            modeBuffer = lexeme;
          }
        }
        do {
          if (top2.scope) {
            emitter.closeNode();
          }
          if (!top2.skip && !top2.subLanguage) {
            relevance += top2.relevance;
          }
          top2 = top2.parent;
        } while (top2 !== endMode.parent);
        if (endMode.starts) {
          startNewMode(endMode.starts, match);
        }
        return origin.returnEnd ? 0 : lexeme.length;
      }
      function processContinuations() {
        const list2 = [];
        for (let current = top2; current !== language; current = current.parent) {
          if (current.scope) {
            list2.unshift(current.scope);
          }
        }
        list2.forEach((item) => emitter.openNode(item));
      }
      let lastMatch = {};
      function processLexeme(textBeforeMatch, match) {
        const lexeme = match && match[0];
        modeBuffer += textBeforeMatch;
        if (lexeme == null) {
          processBuffer();
          return 0;
        }
        if (lastMatch.type === "begin" && match.type === "end" && lastMatch.index === match.index && lexeme === "") {
          modeBuffer += codeToHighlight.slice(match.index, match.index + 1);
          if (!SAFE_MODE) {
            const err = new Error(`0 width match regex (${languageName})`);
            err.languageName = languageName;
            err.badRule = lastMatch.rule;
            throw err;
          }
          return 1;
        }
        lastMatch = match;
        if (match.type === "begin") {
          return doBeginMatch(match);
        } else if (match.type === "illegal" && !ignoreIllegals) {
          const err = new Error('Illegal lexeme "' + lexeme + '" for mode "' + (top2.scope || "<unnamed>") + '"');
          err.mode = top2;
          throw err;
        } else if (match.type === "end") {
          const processed = doEndMatch(match);
          if (processed !== NO_MATCH) {
            return processed;
          }
        }
        if (match.type === "illegal" && lexeme === "") {
          return 1;
        }
        if (iterations > 1e5 && iterations > match.index * 3) {
          const err = new Error("potential infinite loop, way more iterations than matches");
          throw err;
        }
        modeBuffer += lexeme;
        return lexeme.length;
      }
      const language = getLanguage(languageName);
      if (!language) {
        error(LANGUAGE_NOT_FOUND.replace("{}", languageName));
        throw new Error('Unknown language: "' + languageName + '"');
      }
      const md = compileLanguage(language);
      let result = "";
      let top2 = continuation || md;
      const continuations = {};
      const emitter = new options.__emitter(options);
      processContinuations();
      let modeBuffer = "";
      let relevance = 0;
      let index = 0;
      let iterations = 0;
      let resumeScanAtSamePosition = false;
      try {
        top2.matcher.considerAll();
        for (; ; ) {
          iterations++;
          if (resumeScanAtSamePosition) {
            resumeScanAtSamePosition = false;
          } else {
            top2.matcher.considerAll();
          }
          top2.matcher.lastIndex = index;
          const match = top2.matcher.exec(codeToHighlight);
          if (!match)
            break;
          const beforeMatch = codeToHighlight.substring(index, match.index);
          const processedCount = processLexeme(beforeMatch, match);
          index = match.index + processedCount;
        }
        processLexeme(codeToHighlight.substring(index));
        emitter.closeAllNodes();
        emitter.finalize();
        result = emitter.toHTML();
        return {
          language: languageName,
          value: result,
          relevance,
          illegal: false,
          _emitter: emitter,
          _top: top2
        };
      } catch (err) {
        if (err.message && err.message.includes("Illegal")) {
          return {
            language: languageName,
            value: escape(codeToHighlight),
            illegal: true,
            relevance: 0,
            _illegalBy: {
              message: err.message,
              index,
              context: codeToHighlight.slice(index - 100, index + 100),
              mode: err.mode,
              resultSoFar: result
            },
            _emitter: emitter
          };
        } else if (SAFE_MODE) {
          return {
            language: languageName,
            value: escape(codeToHighlight),
            illegal: false,
            relevance: 0,
            errorRaised: err,
            _emitter: emitter,
            _top: top2
          };
        } else {
          throw err;
        }
      }
    }
    function justTextHighlightResult(code2) {
      const result = {
        value: escape(code2),
        illegal: false,
        relevance: 0,
        _top: PLAINTEXT_LANGUAGE,
        _emitter: new options.__emitter(options)
      };
      result._emitter.addText(code2);
      return result;
    }
    function highlightAuto(code2, languageSubset) {
      languageSubset = languageSubset || options.languages || Object.keys(languages);
      const plaintext = justTextHighlightResult(code2);
      const results = languageSubset.filter(getLanguage).filter(autoDetection).map(
        (name) => _highlight(name, code2, false)
      );
      results.unshift(plaintext);
      const sorted = results.sort((a, b) => {
        if (a.relevance !== b.relevance)
          return b.relevance - a.relevance;
        if (a.language && b.language) {
          if (getLanguage(a.language).supersetOf === b.language) {
            return 1;
          } else if (getLanguage(b.language).supersetOf === a.language) {
            return -1;
          }
        }
        return 0;
      });
      const [best, secondBest] = sorted;
      const result = best;
      result.secondBest = secondBest;
      return result;
    }
    function updateClassName(element, currentLang, resultLang) {
      const language = currentLang && aliases[currentLang] || resultLang;
      element.classList.add("hljs");
      element.classList.add(`language-${language}`);
    }
    function highlightElement(element) {
      let node = null;
      const language = blockLanguage(element);
      if (shouldNotHighlight(language))
        return;
      fire(
        "before:highlightElement",
        { el: element, language }
      );
      if (element.children.length > 0) {
        if (!options.ignoreUnescapedHTML) {
          console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk.");
          console.warn("https://github.com/highlightjs/highlight.js/wiki/security");
          console.warn("The element with unescaped HTML:");
          console.warn(element);
        }
        if (options.throwUnescapedHTML) {
          const err = new HTMLInjectionError(
            "One of your code blocks includes unescaped HTML.",
            element.innerHTML
          );
          throw err;
        }
      }
      node = element;
      const text2 = node.textContent;
      const result = language ? highlight2(text2, { language, ignoreIllegals: true }) : highlightAuto(text2);
      element.innerHTML = result.value;
      updateClassName(element, language, result.language);
      element.result = {
        language: result.language,
        // TODO: remove with version 11.0
        re: result.relevance,
        relevance: result.relevance
      };
      if (result.secondBest) {
        element.secondBest = {
          language: result.secondBest.language,
          relevance: result.secondBest.relevance
        };
      }
      fire("after:highlightElement", { el: element, result, text: text2 });
    }
    function configure(userOptions) {
      options = inherit(options, userOptions);
    }
    const initHighlighting = () => {
      highlightAll();
      deprecated("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
    };
    function initHighlightingOnLoad() {
      highlightAll();
      deprecated("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
    }
    let wantsHighlight = false;
    function highlightAll() {
      if (document.readyState === "loading") {
        wantsHighlight = true;
        return;
      }
      const blocks = document.querySelectorAll(options.cssSelector);
      blocks.forEach(highlightElement);
    }
    function boot() {
      if (wantsHighlight)
        highlightAll();
    }
    if (typeof window !== "undefined" && window.addEventListener) {
      window.addEventListener("DOMContentLoaded", boot, false);
    }
    function registerLanguage(languageName, languageDefinition) {
      let lang2 = null;
      try {
        lang2 = languageDefinition(hljs);
      } catch (error$1) {
        error("Language definition for '{}' could not be registered.".replace("{}", languageName));
        if (!SAFE_MODE) {
          throw error$1;
        } else {
          error(error$1);
        }
        lang2 = PLAINTEXT_LANGUAGE;
      }
      if (!lang2.name)
        lang2.name = languageName;
      languages[languageName] = lang2;
      lang2.rawDefinition = languageDefinition.bind(null, hljs);
      if (lang2.aliases) {
        registerAliases(lang2.aliases, { languageName });
      }
    }
    function unregisterLanguage(languageName) {
      delete languages[languageName];
      for (const alias of Object.keys(aliases)) {
        if (aliases[alias] === languageName) {
          delete aliases[alias];
        }
      }
    }
    function listLanguages() {
      return Object.keys(languages);
    }
    function getLanguage(name) {
      name = (name || "").toLowerCase();
      return languages[name] || languages[aliases[name]];
    }
    function registerAliases(aliasList, { languageName }) {
      if (typeof aliasList === "string") {
        aliasList = [aliasList];
      }
      aliasList.forEach((alias) => {
        aliases[alias.toLowerCase()] = languageName;
      });
    }
    function autoDetection(name) {
      const lang2 = getLanguage(name);
      return lang2 && !lang2.disableAutodetect;
    }
    function upgradePluginAPI(plugin) {
      if (plugin["before:highlightBlock"] && !plugin["before:highlightElement"]) {
        plugin["before:highlightElement"] = (data) => {
          plugin["before:highlightBlock"](
            Object.assign({ block: data.el }, data)
          );
        };
      }
      if (plugin["after:highlightBlock"] && !plugin["after:highlightElement"]) {
        plugin["after:highlightElement"] = (data) => {
          plugin["after:highlightBlock"](
            Object.assign({ block: data.el }, data)
          );
        };
      }
    }
    function addPlugin(plugin) {
      upgradePluginAPI(plugin);
      plugins.push(plugin);
    }
    function fire(event, args) {
      const cb = event;
      plugins.forEach(function(plugin) {
        if (plugin[cb]) {
          plugin[cb](args);
        }
      });
    }
    function deprecateHighlightBlock(el2) {
      deprecated("10.7.0", "highlightBlock will be removed entirely in v12.0");
      deprecated("10.7.0", "Please use highlightElement now.");
      return highlightElement(el2);
    }
    Object.assign(hljs, {
      highlight: highlight2,
      highlightAuto,
      highlightAll,
      highlightElement,
      // TODO: Remove with v12 API
      highlightBlock: deprecateHighlightBlock,
      configure,
      initHighlighting,
      initHighlightingOnLoad,
      registerLanguage,
      unregisterLanguage,
      listLanguages,
      getLanguage,
      registerAliases,
      autoDetection,
      inherit,
      addPlugin
    });
    hljs.debugMode = function() {
      SAFE_MODE = false;
    };
    hljs.safeMode = function() {
      SAFE_MODE = true;
    };
    hljs.versionString = version;
    hljs.regex = {
      concat,
      lookahead,
      either,
      optional,
      anyNumberOfTimes
    };
    for (const key in MODES$1) {
      if (typeof MODES$1[key] === "object") {
        deepFreezeEs6.exports(MODES$1[key]);
      }
    }
    Object.assign(hljs, MODES$1);
    return hljs;
  };
  var highlight = HLJS({});
  var core = highlight;
  highlight.HighlightJS = highlight;
  highlight.default = highlight;
  const HighlightJS = core;
  const grinning = "😀";
  const smiley = "😃";
  const smile = "😄";
  const grin = "😁";
  const laughing = "😆";
  const satisfied = "😆";
  const sweat_smile = "😅";
  const joy = "😂";
  const wink = "😉";
  const blush = "😊";
  const innocent = "😇";
  const heart_eyes = "😍";
  const kissing_heart = "😘";
  const kissing = "😗";
  const kissing_closed_eyes = "😚";
  const kissing_smiling_eyes = "😙";
  const yum = "😋";
  const stuck_out_tongue = "😛";
  const stuck_out_tongue_winking_eye = "😜";
  const stuck_out_tongue_closed_eyes = "😝";
  const neutral_face = "😐";
  const expressionless = "😑";
  const no_mouth = "😶";
  const smirk = "😏";
  const unamused = "😒";
  const relieved = "😌";
  const pensive = "😔";
  const sleepy = "😪";
  const sleeping = "😴";
  const mask = "😷";
  const dizzy_face = "😵";
  const sunglasses = "😎";
  const confused = "😕";
  const worried = "😟";
  const open_mouth = "😮";
  const hushed = "😯";
  const astonished = "😲";
  const flushed = "😳";
  const frowning = "😦";
  const anguished = "😧";
  const fearful = "😨";
  const cold_sweat = "😰";
  const disappointed_relieved = "😥";
  const cry = "😢";
  const sob = "😭";
  const scream = "😱";
  const confounded = "😖";
  const persevere = "😣";
  const disappointed = "😞";
  const sweat = "😓";
  const weary = "😩";
  const tired_face = "😫";
  const rage = "😡";
  const pout = "😡";
  const angry = "😠";
  const smiling_imp = "😈";
  const smiley_cat = "😺";
  const smile_cat = "😸";
  const joy_cat = "😹";
  const heart_eyes_cat = "😻";
  const smirk_cat = "😼";
  const kissing_cat = "😽";
  const scream_cat = "🙀";
  const crying_cat_face = "😿";
  const pouting_cat = "😾";
  const heart = "❤️";
  const hand = "✋";
  const raised_hand = "✋";
  const v = "✌️";
  const point_up = "☝️";
  const fist_raised = "✊";
  const fist = "✊";
  const monkey_face = "🐵";
  const cat = "🐱";
  const cow = "🐮";
  const mouse = "🐭";
  const coffee = "☕";
  const hotsprings = "♨️";
  const anchor = "⚓";
  const airplane = "✈️";
  const hourglass = "⌛";
  const watch = "⌚";
  const sunny = "☀️";
  const star = "⭐";
  const cloud = "☁️";
  const umbrella = "☔";
  const zap = "⚡";
  const snowflake = "❄️";
  const sparkles = "✨";
  const black_joker = "🃏";
  const mahjong = "🀄";
  const phone = "☎️";
  const telephone = "☎️";
  const envelope = "✉️";
  const pencil2 = "✏️";
  const black_nib = "✒️";
  const scissors = "✂️";
  const wheelchair = "♿";
  const warning = "⚠️";
  const aries = "♈";
  const taurus = "♉";
  const gemini = "♊";
  const cancer = "♋";
  const leo = "♌";
  const virgo = "♍";
  const libra = "♎";
  const scorpius = "♏";
  const sagittarius = "♐";
  const capricorn = "♑";
  const aquarius = "♒";
  const pisces = "♓";
  const heavy_multiplication_x = "✖️";
  const heavy_plus_sign = "➕";
  const heavy_minus_sign = "➖";
  const heavy_division_sign = "➗";
  const bangbang = "‼️";
  const interrobang = "⁉️";
  const question = "❓";
  const grey_question = "❔";
  const grey_exclamation = "❕";
  const exclamation = "❗";
  const heavy_exclamation_mark = "❗";
  const wavy_dash = "〰️";
  const recycle = "♻️";
  const white_check_mark = "✅";
  const ballot_box_with_check = "☑️";
  const heavy_check_mark = "✔️";
  const x = "❌";
  const negative_squared_cross_mark = "❎";
  const curly_loop = "➰";
  const loop = "➿";
  const part_alternation_mark = "〽️";
  const eight_spoked_asterisk = "✳️";
  const eight_pointed_black_star = "✴️";
  const sparkle = "❇️";
  const copyright = "©️";
  const registered = "®️";
  const tm = "™️";
  const information_source = "ℹ️";
  const m = "Ⓜ️";
  const black_circle = "⚫";
  const white_circle = "⚪";
  const black_large_square = "⬛";
  const white_large_square = "⬜";
  const black_medium_square = "◼️";
  const white_medium_square = "◻️";
  const black_medium_small_square = "◾";
  const white_medium_small_square = "◽";
  const black_small_square = "▪️";
  const white_small_square = "▫️";
  const emoji$2 = {
    grinning,
    smiley,
    smile,
    grin,
    laughing,
    satisfied,
    sweat_smile,
    joy,
    wink,
    blush,
    innocent,
    heart_eyes,
    kissing_heart,
    kissing,
    kissing_closed_eyes,
    kissing_smiling_eyes,
    yum,
    stuck_out_tongue,
    stuck_out_tongue_winking_eye,
    stuck_out_tongue_closed_eyes,
    neutral_face,
    expressionless,
    no_mouth,
    smirk,
    unamused,
    relieved,
    pensive,
    sleepy,
    sleeping,
    mask,
    dizzy_face,
    sunglasses,
    confused,
    worried,
    open_mouth,
    hushed,
    astonished,
    flushed,
    frowning,
    anguished,
    fearful,
    cold_sweat,
    disappointed_relieved,
    cry,
    sob,
    scream,
    confounded,
    persevere,
    disappointed,
    sweat,
    weary,
    tired_face,
    rage,
    pout,
    angry,
    smiling_imp,
    smiley_cat,
    smile_cat,
    joy_cat,
    heart_eyes_cat,
    smirk_cat,
    kissing_cat,
    scream_cat,
    crying_cat_face,
    pouting_cat,
    heart,
    hand,
    raised_hand,
    v,
    point_up,
    fist_raised,
    fist,
    monkey_face,
    cat,
    cow,
    mouse,
    coffee,
    hotsprings,
    anchor,
    airplane,
    hourglass,
    watch,
    sunny,
    star,
    cloud,
    umbrella,
    zap,
    snowflake,
    sparkles,
    black_joker,
    mahjong,
    phone,
    telephone,
    envelope,
    pencil2,
    black_nib,
    scissors,
    wheelchair,
    warning,
    aries,
    taurus,
    gemini,
    cancer,
    leo,
    virgo,
    libra,
    scorpius,
    sagittarius,
    capricorn,
    aquarius,
    pisces,
    heavy_multiplication_x,
    heavy_plus_sign,
    heavy_minus_sign,
    heavy_division_sign,
    bangbang,
    interrobang,
    question,
    grey_question,
    grey_exclamation,
    exclamation,
    heavy_exclamation_mark,
    wavy_dash,
    recycle,
    white_check_mark,
    ballot_box_with_check,
    heavy_check_mark,
    x,
    negative_squared_cross_mark,
    curly_loop,
    loop,
    part_alternation_mark,
    eight_spoked_asterisk,
    eight_pointed_black_star,
    sparkle,
    copyright,
    registered,
    tm,
    information_source,
    m,
    black_circle,
    white_circle,
    black_large_square,
    white_large_square,
    black_medium_square,
    white_medium_square,
    black_medium_small_square,
    white_medium_small_square,
    black_small_square,
    white_small_square
  };
  var shortcuts = {
    angry: [">:(", ">:-("],
    blush: [':")', ':-")'],
    broken_heart: ["</3", "<\\3"],
    // :\ and :-\ not used because of conflict with markdown escaping
    confused: [":/", ":-/"],
    // twemoji shows question
    cry: [":'(", ":'-(", ":,(", ":,-("],
    frowning: [":(", ":-("],
    heart: ["<3"],
    imp: ["]:(", "]:-("],
    innocent: ["o:)", "O:)", "o:-)", "O:-)", "0:)", "0:-)"],
    joy: [":')", ":'-)", ":,)", ":,-)", ":'D", ":'-D", ":,D", ":,-D"],
    kissing: [":*", ":-*"],
    laughing: ["x-)", "X-)"],
    neutral_face: [":|", ":-|"],
    open_mouth: [":o", ":-o", ":O", ":-O"],
    rage: [":@", ":-@"],
    smile: [":D", ":-D"],
    smiley: [":)", ":-)"],
    smiling_imp: ["]:)", "]:-)"],
    sob: [":,'(", ":,'-(", ";(", ";-("],
    stuck_out_tongue: [":P", ":-P"],
    sunglasses: ["8-)", "B-)"],
    sweat: [",:(", ",:-("],
    sweat_smile: [",:)", ",:-)"],
    unamused: [":s", ":-S", ":z", ":-Z", ":$", ":-$"],
    wink: [";)", ";-)"]
  };
  var render = function emoji_html2(tokens, idx) {
    return tokens[idx].content;
  };
  var replace = function create_rule(md, emojies, shortcuts2, scanRE, replaceRE) {
    var arrayReplaceAt2 = md.utils.arrayReplaceAt, ucm = md.utils.lib.ucmicro, ZPCc = new RegExp([ucm.Z.source, ucm.P.source, ucm.Cc.source].join("|"));
    function splitTextToken(text2, level, Token2) {
      var token2, last_pos = 0, nodes = [];
      text2.replace(replaceRE, function(match, offset, src) {
        var emoji_name;
        if (shortcuts2.hasOwnProperty(match)) {
          emoji_name = shortcuts2[match];
          if (offset > 0 && !ZPCc.test(src[offset - 1])) {
            return;
          }
          if (offset + match.length < src.length && !ZPCc.test(src[offset + match.length])) {
            return;
          }
        } else {
          emoji_name = match.slice(1, -1);
        }
        if (offset > last_pos) {
          token2 = new Token2("text", "", 0);
          token2.content = text2.slice(last_pos, offset);
          nodes.push(token2);
        }
        token2 = new Token2("emoji", "", 0);
        token2.markup = emoji_name;
        token2.content = emojies[emoji_name];
        nodes.push(token2);
        last_pos = offset + match.length;
      });
      if (last_pos < text2.length) {
        token2 = new Token2("text", "", 0);
        token2.content = text2.slice(last_pos);
        nodes.push(token2);
      }
      return nodes;
    }
    return function emoji_replace2(state) {
      var i2, j, l, tokens, token2, blockTokens = state.tokens, autolinkLevel = 0;
      for (j = 0, l = blockTokens.length; j < l; j++) {
        if (blockTokens[j].type !== "inline") {
          continue;
        }
        tokens = blockTokens[j].children;
        for (i2 = tokens.length - 1; i2 >= 0; i2--) {
          token2 = tokens[i2];
          if (token2.type === "link_open" || token2.type === "link_close") {
            if (token2.info === "auto") {
              autolinkLevel -= token2.nesting;
            }
          }
          if (token2.type === "text" && autolinkLevel === 0 && scanRE.test(token2.content)) {
            blockTokens[j].children = tokens = arrayReplaceAt2(
              tokens,
              i2,
              splitTextToken(token2.content, token2.level, state.Token)
            );
          }
        }
      }
    };
  };
  function quoteRE(str) {
    return str.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
  }
  var normalize_opts$1 = function normalize_opts2(options) {
    var emojies = options.defs, shortcuts2;
    if (options.enabled.length) {
      emojies = Object.keys(emojies).reduce(function(acc, key) {
        if (options.enabled.indexOf(key) >= 0) {
          acc[key] = emojies[key];
        }
        return acc;
      }, {});
    }
    shortcuts2 = Object.keys(options.shortcuts).reduce(function(acc, key) {
      if (!emojies[key]) {
        return acc;
      }
      if (Array.isArray(options.shortcuts[key])) {
        options.shortcuts[key].forEach(function(alias) {
          acc[alias] = key;
        });
        return acc;
      }
      acc[options.shortcuts[key]] = key;
      return acc;
    }, {});
    var keys = Object.keys(emojies), names;
    if (keys.length === 0) {
      names = "^$";
    } else {
      names = keys.map(function(name) {
        return ":" + name + ":";
      }).concat(Object.keys(shortcuts2)).sort().reverse().map(function(name) {
        return quoteRE(name);
      }).join("|");
    }
    var scanRE = RegExp(names);
    var replaceRE = RegExp(names, "g");
    return {
      defs: emojies,
      shortcuts: shortcuts2,
      scanRE,
      replaceRE
    };
  };
  var emoji_html = render;
  var emoji_replace = replace;
  var normalize_opts = normalize_opts$1;
  var bare = function emoji_plugin(md, options) {
    var defaults = {
      defs: {},
      shortcuts: {},
      enabled: []
    };
    var opts = normalize_opts(md.utils.assign({}, defaults, options || {}));
    md.renderer.rules.emoji = emoji_html;
    md.core.ruler.after(
      "linkify",
      "emoji",
      emoji_replace(md, opts.defs, opts.shortcuts, opts.scanRE, opts.replaceRE)
    );
  };
  var emojies_defs = emoji$2;
  var emojies_shortcuts = shortcuts;
  var bare_emoji_plugin = bare;
  var light = function emoji_plugin(md, options) {
    var defaults = {
      defs: emojies_defs,
      shortcuts: emojies_shortcuts,
      enabled: []
    };
    var opts = md.utils.assign({}, defaults, options || {});
    bare_emoji_plugin(md, opts);
  };
  const list$1 = [
    "javascript",
    "csharp",
    "cpp",
    "xml",
    "json",
    "css",
    "java",
    "sql",
    "kotlin",
    "shell"
  ];
  const Languages = {
    list: list$1
  };
  var markdownItContainer = function container_plugin(md, name, options) {
    function validateDefault(params) {
      return params.trim().split(" ", 2)[0] === name;
    }
    function renderDefault(tokens, idx, _options, env, slf) {
      if (tokens[idx].nesting === 1) {
        tokens[idx].attrJoin("class", name);
      }
      return slf.renderToken(tokens, idx, _options, env, slf);
    }
    options = options || {};
    var min_markers = 3, marker_str = options.marker || ":", marker_char = marker_str.charCodeAt(0), marker_len = marker_str.length, validate = options.validate || validateDefault, render2 = options.render || renderDefault;
    function container(state, startLine, endLine, silent) {
      var pos, nextLine, marker_count, markup, params, token2, old_parent, old_line_max, auto_closed = false, start = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine];
      if (marker_char !== state.src.charCodeAt(start)) {
        return false;
      }
      for (pos = start + 1; pos <= max; pos++) {
        if (marker_str[(pos - start) % marker_len] !== state.src[pos]) {
          break;
        }
      }
      marker_count = Math.floor((pos - start) / marker_len);
      if (marker_count < min_markers) {
        return false;
      }
      pos -= (pos - start) % marker_len;
      markup = state.src.slice(start, pos);
      params = state.src.slice(pos, max);
      if (!validate(params, markup)) {
        return false;
      }
      if (silent) {
        return true;
      }
      nextLine = startLine;
      for (; ; ) {
        nextLine++;
        if (nextLine >= endLine) {
          break;
        }
        start = state.bMarks[nextLine] + state.tShift[nextLine];
        max = state.eMarks[nextLine];
        if (start < max && state.sCount[nextLine] < state.blkIndent) {
          break;
        }
        if (marker_char !== state.src.charCodeAt(start)) {
          continue;
        }
        if (state.sCount[nextLine] - state.blkIndent >= 4) {
          continue;
        }
        for (pos = start + 1; pos <= max; pos++) {
          if (marker_str[(pos - start) % marker_len] !== state.src[pos]) {
            break;
          }
        }
        if (Math.floor((pos - start) / marker_len) < marker_count) {
          continue;
        }
        pos -= (pos - start) % marker_len;
        pos = state.skipSpaces(pos);
        if (pos < max) {
          continue;
        }
        auto_closed = true;
        break;
      }
      old_parent = state.parentType;
      old_line_max = state.lineMax;
      state.parentType = "container";
      state.lineMax = nextLine;
      token2 = state.push("container_" + name + "_open", "div", 1);
      token2.markup = markup;
      token2.block = true;
      token2.info = params;
      token2.map = [startLine, nextLine];
      state.md.block.tokenize(state, startLine + 1, nextLine);
      token2 = state.push("container_" + name + "_close", "div", -1);
      token2.markup = state.src.slice(start, pos);
      token2.block = true;
      state.parentType = old_parent;
      state.lineMax = old_line_max;
      state.line = nextLine + (auto_closed ? 1 : 0);
      return true;
    }
    md.block.ruler.before("fence", "container_" + name, container, {
      alt: ["paragraph", "reference", "blockquote", "list"]
    });
    md.renderer.rules["container_" + name + "_open"] = render2;
    md.renderer.rules["container_" + name + "_close"] = render2;
  };
  const IDENT_RE = "[A-Za-z$_][0-9A-Za-z$_]*";
  const KEYWORDS = [
    "as",
    // for exports
    "in",
    "of",
    "if",
    "for",
    "while",
    "finally",
    "var",
    "new",
    "function",
    "do",
    "return",
    "void",
    "else",
    "break",
    "catch",
    "instanceof",
    "with",
    "throw",
    "case",
    "default",
    "try",
    "switch",
    "continue",
    "typeof",
    "delete",
    "let",
    "yield",
    "const",
    "class",
    // JS handles these with a special rule
    // "get",
    // "set",
    "debugger",
    "async",
    "await",
    "static",
    "import",
    "from",
    "export",
    "extends"
  ];
  const LITERALS = [
    "true",
    "false",
    "null",
    "undefined",
    "NaN",
    "Infinity"
  ];
  const TYPES = [
    // Fundamental objects
    "Object",
    "Function",
    "Boolean",
    "Symbol",
    // numbers and dates
    "Math",
    "Date",
    "Number",
    "BigInt",
    // text
    "String",
    "RegExp",
    // Indexed collections
    "Array",
    "Float32Array",
    "Float64Array",
    "Int8Array",
    "Uint8Array",
    "Uint8ClampedArray",
    "Int16Array",
    "Int32Array",
    "Uint16Array",
    "Uint32Array",
    "BigInt64Array",
    "BigUint64Array",
    // Keyed collections
    "Set",
    "Map",
    "WeakSet",
    "WeakMap",
    // Structured data
    "ArrayBuffer",
    "SharedArrayBuffer",
    "Atomics",
    "DataView",
    "JSON",
    // Control abstraction objects
    "Promise",
    "Generator",
    "GeneratorFunction",
    "AsyncFunction",
    // Reflection
    "Reflect",
    "Proxy",
    // Internationalization
    "Intl",
    // WebAssembly
    "WebAssembly"
  ];
  const ERROR_TYPES = [
    "Error",
    "EvalError",
    "InternalError",
    "RangeError",
    "ReferenceError",
    "SyntaxError",
    "TypeError",
    "URIError"
  ];
  const BUILT_IN_GLOBALS = [
    "setInterval",
    "setTimeout",
    "clearInterval",
    "clearTimeout",
    "require",
    "exports",
    "eval",
    "isFinite",
    "isNaN",
    "parseFloat",
    "parseInt",
    "decodeURI",
    "decodeURIComponent",
    "encodeURI",
    "encodeURIComponent",
    "escape",
    "unescape"
  ];
  const BUILT_IN_VARIABLES = [
    "arguments",
    "this",
    "super",
    "console",
    "window",
    "document",
    "localStorage",
    "module",
    "global"
    // Node.js
  ];
  const BUILT_INS = [].concat(
    BUILT_IN_GLOBALS,
    TYPES,
    ERROR_TYPES
  );
  function javascript(hljs) {
    const regex2 = hljs.regex;
    const hasClosingTag = (match, { after }) => {
      const tag = "</" + match[0].slice(1);
      const pos = match.input.indexOf(tag, after);
      return pos !== -1;
    };
    const IDENT_RE$12 = IDENT_RE;
    const FRAGMENT = {
      begin: "<>",
      end: "</>"
    };
    const XML_SELF_CLOSING = /<[A-Za-z0-9\\._:-]+\s*\/>/;
    const XML_TAG = {
      begin: /<[A-Za-z0-9\\._:-]+/,
      end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
      /**
       * @param {RegExpMatchArray} match
       * @param {CallbackResponse} response
       */
      isTrulyOpeningTag: (match, response) => {
        const afterMatchIndex = match[0].length + match.index;
        const nextChar = match.input[afterMatchIndex];
        if (
          // HTML should not include another raw `<` inside a tag
          // nested type?
          // `<Array<Array<number>>`, etc.
          nextChar === "<" || // the , gives away that this is not HTML
          // `<T, A extends keyof T, V>`
          nextChar === ","
        ) {
          response.ignoreMatch();
          return;
        }
        if (nextChar === ">") {
          if (!hasClosingTag(match, { after: afterMatchIndex })) {
            response.ignoreMatch();
          }
        }
        let m2;
        const afterMatch = match.input.substring(afterMatchIndex);
        if (m2 = afterMatch.match(/^\s*=/)) {
          response.ignoreMatch();
          return;
        }
        if (m2 = afterMatch.match(/^\s+extends\s+/)) {
          if (m2.index === 0) {
            response.ignoreMatch();
            return;
          }
        }
      }
    };
    const KEYWORDS$1 = {
      $pattern: IDENT_RE,
      keyword: KEYWORDS,
      literal: LITERALS,
      built_in: BUILT_INS,
      "variable.language": BUILT_IN_VARIABLES
    };
    const decimalDigits2 = "[0-9](_?[0-9])*";
    const frac2 = `\\.(${decimalDigits2})`;
    const decimalInteger = `0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*`;
    const NUMBER = {
      className: "number",
      variants: [
        // DecimalLiteral
        { begin: `(\\b(${decimalInteger})((${frac2})|\\.)?|(${frac2}))[eE][+-]?(${decimalDigits2})\\b` },
        { begin: `\\b(${decimalInteger})\\b((${frac2})\\b|\\.)?|(${frac2})\\b` },
        // DecimalBigIntegerLiteral
        { begin: `\\b(0|[1-9](_?[0-9])*)n\\b` },
        // NonDecimalIntegerLiteral
        { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
        { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
        { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
        // LegacyOctalIntegerLiteral (does not include underscore separators)
        // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
        { begin: "\\b0[0-7]+n?\\b" }
      ],
      relevance: 0
    };
    const SUBST = {
      className: "subst",
      begin: "\\$\\{",
      end: "\\}",
      keywords: KEYWORDS$1,
      contains: []
      // defined later
    };
    const HTML_TEMPLATE = {
      begin: "html`",
      end: "",
      starts: {
        end: "`",
        returnEnd: false,
        contains: [
          hljs.BACKSLASH_ESCAPE,
          SUBST
        ],
        subLanguage: "xml"
      }
    };
    const CSS_TEMPLATE = {
      begin: "css`",
      end: "",
      starts: {
        end: "`",
        returnEnd: false,
        contains: [
          hljs.BACKSLASH_ESCAPE,
          SUBST
        ],
        subLanguage: "css"
      }
    };
    const TEMPLATE_STRING = {
      className: "string",
      begin: "`",
      end: "`",
      contains: [
        hljs.BACKSLASH_ESCAPE,
        SUBST
      ]
    };
    const JSDOC_COMMENT = hljs.COMMENT(
      /\/\*\*(?!\/)/,
      "\\*/",
      {
        relevance: 0,
        contains: [
          {
            begin: "(?=@[A-Za-z]+)",
            relevance: 0,
            contains: [
              {
                className: "doctag",
                begin: "@[A-Za-z]+"
              },
              {
                className: "type",
                begin: "\\{",
                end: "\\}",
                excludeEnd: true,
                excludeBegin: true,
                relevance: 0
              },
              {
                className: "variable",
                begin: IDENT_RE$12 + "(?=\\s*(-)|$)",
                endsParent: true,
                relevance: 0
              },
              // eat spaces (not newlines) so we can find
              // types or variables
              {
                begin: /(?=[^\n])\s/,
                relevance: 0
              }
            ]
          }
        ]
      }
    );
    const COMMENT2 = {
      className: "comment",
      variants: [
        JSDOC_COMMENT,
        hljs.C_BLOCK_COMMENT_MODE,
        hljs.C_LINE_COMMENT_MODE
      ]
    };
    const SUBST_INTERNALS = [
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      HTML_TEMPLATE,
      CSS_TEMPLATE,
      TEMPLATE_STRING,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      NUMBER
      // This is intentional:
      // See https://github.com/highlightjs/highlight.js/issues/3288
      // hljs.REGEXP_MODE
    ];
    SUBST.contains = SUBST_INTERNALS.concat({
      // we need to pair up {} inside our subst to prevent
      // it from ending too early by matching another }
      begin: /\{/,
      end: /\}/,
      keywords: KEYWORDS$1,
      contains: [
        "self"
      ].concat(SUBST_INTERNALS)
    });
    const SUBST_AND_COMMENTS = [].concat(COMMENT2, SUBST.contains);
    const PARAMS_CONTAINS = SUBST_AND_COMMENTS.concat([
      // eat recursive parens in sub expressions
      {
        begin: /\(/,
        end: /\)/,
        keywords: KEYWORDS$1,
        contains: ["self"].concat(SUBST_AND_COMMENTS)
      }
    ]);
    const PARAMS = {
      className: "params",
      begin: /\(/,
      end: /\)/,
      excludeBegin: true,
      excludeEnd: true,
      keywords: KEYWORDS$1,
      contains: PARAMS_CONTAINS
    };
    const CLASS_OR_EXTENDS = {
      variants: [
        // class Car extends vehicle
        {
          match: [
            /class/,
            /\s+/,
            IDENT_RE$12,
            /\s+/,
            /extends/,
            /\s+/,
            regex2.concat(IDENT_RE$12, "(", regex2.concat(/\./, IDENT_RE$12), ")*")
          ],
          scope: {
            1: "keyword",
            3: "title.class",
            5: "keyword",
            7: "title.class.inherited"
          }
        },
        // class Car
        {
          match: [
            /class/,
            /\s+/,
            IDENT_RE$12
          ],
          scope: {
            1: "keyword",
            3: "title.class"
          }
        }
      ]
    };
    const CLASS_REFERENCE = {
      relevance: 0,
      match: regex2.either(
        // Hard coded exceptions
        /\bJSON/,
        // Float32Array, OutT
        /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
        // CSSFactory, CSSFactoryT
        /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
        // FPs, FPsT
        /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
        // P
        // single letters are not highlighted
        // BLAH
        // this will be flagged as a UPPER_CASE_CONSTANT instead
      ),
      className: "title.class",
      keywords: {
        _: [
          // se we still get relevance credit for JS library classes
          ...TYPES,
          ...ERROR_TYPES
        ]
      }
    };
    const USE_STRICT = {
      label: "use_strict",
      className: "meta",
      relevance: 10,
      begin: /^\s*['"]use (strict|asm)['"]/
    };
    const FUNCTION_DEFINITION = {
      variants: [
        {
          match: [
            /function/,
            /\s+/,
            IDENT_RE$12,
            /(?=\s*\()/
          ]
        },
        // anonymous function
        {
          match: [
            /function/,
            /\s*(?=\()/
          ]
        }
      ],
      className: {
        1: "keyword",
        3: "title.function"
      },
      label: "func.def",
      contains: [PARAMS],
      illegal: /%/
    };
    const UPPER_CASE_CONSTANT = {
      relevance: 0,
      match: /\b[A-Z][A-Z_0-9]+\b/,
      className: "variable.constant"
    };
    function noneOf(list2) {
      return regex2.concat("(?!", list2.join("|"), ")");
    }
    const FUNCTION_CALL = {
      match: regex2.concat(
        /\b/,
        noneOf([
          ...BUILT_IN_GLOBALS,
          "super",
          "import"
        ]),
        IDENT_RE$12,
        regex2.lookahead(/\(/)
      ),
      className: "title.function",
      relevance: 0
    };
    const PROPERTY_ACCESS = {
      begin: regex2.concat(/\./, regex2.lookahead(
        regex2.concat(IDENT_RE$12, /(?![0-9A-Za-z$_(])/)
      )),
      end: IDENT_RE$12,
      excludeBegin: true,
      keywords: "prototype",
      className: "property",
      relevance: 0
    };
    const GETTER_OR_SETTER = {
      match: [
        /get|set/,
        /\s+/,
        IDENT_RE$12,
        /(?=\()/
      ],
      className: {
        1: "keyword",
        3: "title.function"
      },
      contains: [
        {
          // eat to avoid empty params
          begin: /\(\)/
        },
        PARAMS
      ]
    };
    const FUNC_LEAD_IN_RE = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + hljs.UNDERSCORE_IDENT_RE + ")\\s*=>";
    const FUNCTION_VARIABLE = {
      match: [
        /const|var|let/,
        /\s+/,
        IDENT_RE$12,
        /\s*/,
        /=\s*/,
        /(async\s*)?/,
        // async is optional
        regex2.lookahead(FUNC_LEAD_IN_RE)
      ],
      keywords: "async",
      className: {
        1: "keyword",
        3: "title.function"
      },
      contains: [
        PARAMS
      ]
    };
    return {
      name: "Javascript",
      aliases: ["js", "jsx", "mjs", "cjs"],
      keywords: KEYWORDS$1,
      // this will be extended by TypeScript
      exports: { PARAMS_CONTAINS, CLASS_REFERENCE },
      illegal: /#(?![$_A-z])/,
      contains: [
        hljs.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }),
        USE_STRICT,
        hljs.APOS_STRING_MODE,
        hljs.QUOTE_STRING_MODE,
        HTML_TEMPLATE,
        CSS_TEMPLATE,
        TEMPLATE_STRING,
        COMMENT2,
        // Skip numbers when they are part of a variable name
        { match: /\$\d+/ },
        NUMBER,
        CLASS_REFERENCE,
        {
          className: "attr",
          begin: IDENT_RE$12 + regex2.lookahead(":"),
          relevance: 0
        },
        FUNCTION_VARIABLE,
        {
          // "value" container
          begin: "(" + hljs.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [
            COMMENT2,
            hljs.REGEXP_MODE,
            {
              className: "function",
              // we have to count the parens to make sure we actually have the
              // correct bounding ( ) before the =>.  There could be any number of
              // sub-expressions inside also surrounded by parens.
              begin: FUNC_LEAD_IN_RE,
              returnBegin: true,
              end: "\\s*=>",
              contains: [
                {
                  className: "params",
                  variants: [
                    {
                      begin: hljs.UNDERSCORE_IDENT_RE,
                      relevance: 0
                    },
                    {
                      className: null,
                      begin: /\(\s*\)/,
                      skip: true
                    },
                    {
                      begin: /\(/,
                      end: /\)/,
                      excludeBegin: true,
                      excludeEnd: true,
                      keywords: KEYWORDS$1,
                      contains: PARAMS_CONTAINS
                    }
                  ]
                }
              ]
            },
            {
              // could be a comma delimited list of params to a function call
              begin: /,/,
              relevance: 0
            },
            {
              match: /\s+/,
              relevance: 0
            },
            {
              // JSX
              variants: [
                { begin: FRAGMENT.begin, end: FRAGMENT.end },
                { match: XML_SELF_CLOSING },
                {
                  begin: XML_TAG.begin,
                  // we carefully check the opening tag to see if it truly
                  // is a tag and not a false positive
                  "on:begin": XML_TAG.isTrulyOpeningTag,
                  end: XML_TAG.end
                }
              ],
              subLanguage: "xml",
              contains: [
                {
                  begin: XML_TAG.begin,
                  end: XML_TAG.end,
                  skip: true,
                  contains: ["self"]
                }
              ]
            }
          ]
        },
        FUNCTION_DEFINITION,
        {
          // prevent this from getting swallowed up by function
          // since they appear "function like"
          beginKeywords: "while if switch catch for"
        },
        {
          // we have to count the parens to make sure we actually have the correct
          // bounding ( ).  There could be any number of sub-expressions inside
          // also surrounded by parens.
          begin: "\\b(?!function)" + hljs.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          // end parens
          returnBegin: true,
          label: "func.def",
          contains: [
            PARAMS,
            hljs.inherit(hljs.TITLE_MODE, { begin: IDENT_RE$12, className: "title.function" })
          ]
        },
        // catch ... so it won't trigger the property rule below
        {
          match: /\.\.\./,
          relevance: 0
        },
        PROPERTY_ACCESS,
        // hack: prevents detection of keywords in some circumstances
        // .keyword()
        // $keyword = x
        {
          match: "\\$" + IDENT_RE$12,
          relevance: 0
        },
        {
          match: [/\bconstructor(?=\s*\()/],
          className: { 1: "title.function" },
          contains: [PARAMS]
        },
        FUNCTION_CALL,
        UPPER_CASE_CONSTANT,
        CLASS_OR_EXTENDS,
        GETTER_OR_SETTER,
        {
          match: /\$[(.]/
          // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
        }
      ]
    };
  }
  function cpp(hljs) {
    const regex2 = hljs.regex;
    const C_LINE_COMMENT_MODE2 = hljs.COMMENT("//", "$", { contains: [{ begin: /\\\n/ }] });
    const DECLTYPE_AUTO_RE = "decltype\\(auto\\)";
    const NAMESPACE_RE = "[a-zA-Z_]\\w*::";
    const TEMPLATE_ARGUMENT_RE = "<[^<>]+>";
    const FUNCTION_TYPE_RE = "(?!struct)(" + DECLTYPE_AUTO_RE + "|" + regex2.optional(NAMESPACE_RE) + "[a-zA-Z_]\\w*" + regex2.optional(TEMPLATE_ARGUMENT_RE) + ")";
    const CPP_PRIMITIVE_TYPES = {
      className: "type",
      begin: "\\b[a-z\\d_]*_t\\b"
    };
    const CHARACTER_ESCAPES = "\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)";
    const STRINGS = {
      className: "string",
      variants: [
        {
          begin: '(u8?|U|L)?"',
          end: '"',
          illegal: "\\n",
          contains: [hljs.BACKSLASH_ESCAPE]
        },
        {
          begin: "(u8?|U|L)?'(" + CHARACTER_ESCAPES + "|.)",
          end: "'",
          illegal: "."
        },
        hljs.END_SAME_AS_BEGIN({
          begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
          end: /\)([^()\\ ]{0,16})"/
        })
      ]
    };
    const NUMBERS = {
      className: "number",
      variants: [
        { begin: "\\b(0b[01']+)" },
        { begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)" },
        { begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)" }
      ],
      relevance: 0
    };
    const PREPROCESSOR = {
      className: "meta",
      begin: /#\s*[a-z]+\b/,
      end: /$/,
      keywords: { keyword: "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include" },
      contains: [
        {
          begin: /\\\n/,
          relevance: 0
        },
        hljs.inherit(STRINGS, { className: "string" }),
        {
          className: "string",
          begin: /<.*?>/
        },
        C_LINE_COMMENT_MODE2,
        hljs.C_BLOCK_COMMENT_MODE
      ]
    };
    const TITLE_MODE2 = {
      className: "title",
      begin: regex2.optional(NAMESPACE_RE) + hljs.IDENT_RE,
      relevance: 0
    };
    const FUNCTION_TITLE = regex2.optional(NAMESPACE_RE) + hljs.IDENT_RE + "\\s*\\(";
    const RESERVED_KEYWORDS = [
      "alignas",
      "alignof",
      "and",
      "and_eq",
      "asm",
      "atomic_cancel",
      "atomic_commit",
      "atomic_noexcept",
      "auto",
      "bitand",
      "bitor",
      "break",
      "case",
      "catch",
      "class",
      "co_await",
      "co_return",
      "co_yield",
      "compl",
      "concept",
      "const_cast|10",
      "consteval",
      "constexpr",
      "constinit",
      "continue",
      "decltype",
      "default",
      "delete",
      "do",
      "dynamic_cast|10",
      "else",
      "enum",
      "explicit",
      "export",
      "extern",
      "false",
      "final",
      "for",
      "friend",
      "goto",
      "if",
      "import",
      "inline",
      "module",
      "mutable",
      "namespace",
      "new",
      "noexcept",
      "not",
      "not_eq",
      "nullptr",
      "operator",
      "or",
      "or_eq",
      "override",
      "private",
      "protected",
      "public",
      "reflexpr",
      "register",
      "reinterpret_cast|10",
      "requires",
      "return",
      "sizeof",
      "static_assert",
      "static_cast|10",
      "struct",
      "switch",
      "synchronized",
      "template",
      "this",
      "thread_local",
      "throw",
      "transaction_safe",
      "transaction_safe_dynamic",
      "true",
      "try",
      "typedef",
      "typeid",
      "typename",
      "union",
      "using",
      "virtual",
      "volatile",
      "while",
      "xor",
      "xor_eq"
    ];
    const RESERVED_TYPES = [
      "bool",
      "char",
      "char16_t",
      "char32_t",
      "char8_t",
      "double",
      "float",
      "int",
      "long",
      "short",
      "void",
      "wchar_t",
      "unsigned",
      "signed",
      "const",
      "static"
    ];
    const TYPE_HINTS = [
      "any",
      "auto_ptr",
      "barrier",
      "binary_semaphore",
      "bitset",
      "complex",
      "condition_variable",
      "condition_variable_any",
      "counting_semaphore",
      "deque",
      "false_type",
      "future",
      "imaginary",
      "initializer_list",
      "istringstream",
      "jthread",
      "latch",
      "lock_guard",
      "multimap",
      "multiset",
      "mutex",
      "optional",
      "ostringstream",
      "packaged_task",
      "pair",
      "promise",
      "priority_queue",
      "queue",
      "recursive_mutex",
      "recursive_timed_mutex",
      "scoped_lock",
      "set",
      "shared_future",
      "shared_lock",
      "shared_mutex",
      "shared_timed_mutex",
      "shared_ptr",
      "stack",
      "string_view",
      "stringstream",
      "timed_mutex",
      "thread",
      "true_type",
      "tuple",
      "unique_lock",
      "unique_ptr",
      "unordered_map",
      "unordered_multimap",
      "unordered_multiset",
      "unordered_set",
      "variant",
      "vector",
      "weak_ptr",
      "wstring",
      "wstring_view"
    ];
    const FUNCTION_HINTS = [
      "abort",
      "abs",
      "acos",
      "apply",
      "as_const",
      "asin",
      "atan",
      "atan2",
      "calloc",
      "ceil",
      "cerr",
      "cin",
      "clog",
      "cos",
      "cosh",
      "cout",
      "declval",
      "endl",
      "exchange",
      "exit",
      "exp",
      "fabs",
      "floor",
      "fmod",
      "forward",
      "fprintf",
      "fputs",
      "free",
      "frexp",
      "fscanf",
      "future",
      "invoke",
      "isalnum",
      "isalpha",
      "iscntrl",
      "isdigit",
      "isgraph",
      "islower",
      "isprint",
      "ispunct",
      "isspace",
      "isupper",
      "isxdigit",
      "labs",
      "launder",
      "ldexp",
      "log",
      "log10",
      "make_pair",
      "make_shared",
      "make_shared_for_overwrite",
      "make_tuple",
      "make_unique",
      "malloc",
      "memchr",
      "memcmp",
      "memcpy",
      "memset",
      "modf",
      "move",
      "pow",
      "printf",
      "putchar",
      "puts",
      "realloc",
      "scanf",
      "sin",
      "sinh",
      "snprintf",
      "sprintf",
      "sqrt",
      "sscanf",
      "std",
      "stderr",
      "stdin",
      "stdout",
      "strcat",
      "strchr",
      "strcmp",
      "strcpy",
      "strcspn",
      "strlen",
      "strncat",
      "strncmp",
      "strncpy",
      "strpbrk",
      "strrchr",
      "strspn",
      "strstr",
      "swap",
      "tan",
      "tanh",
      "terminate",
      "to_underlying",
      "tolower",
      "toupper",
      "vfprintf",
      "visit",
      "vprintf",
      "vsprintf"
    ];
    const LITERALS2 = [
      "NULL",
      "false",
      "nullopt",
      "nullptr",
      "true"
    ];
    const BUILT_IN = ["_Pragma"];
    const CPP_KEYWORDS = {
      type: RESERVED_TYPES,
      keyword: RESERVED_KEYWORDS,
      literal: LITERALS2,
      built_in: BUILT_IN,
      _type_hints: TYPE_HINTS
    };
    const FUNCTION_DISPATCH = {
      className: "function.dispatch",
      relevance: 0,
      keywords: {
        // Only for relevance, not highlighting.
        _hint: FUNCTION_HINTS
      },
      begin: regex2.concat(
        /\b/,
        /(?!decltype)/,
        /(?!if)/,
        /(?!for)/,
        /(?!switch)/,
        /(?!while)/,
        hljs.IDENT_RE,
        regex2.lookahead(/(<[^<>]+>|)\s*\(/)
      )
    };
    const EXPRESSION_CONTAINS = [
      FUNCTION_DISPATCH,
      PREPROCESSOR,
      CPP_PRIMITIVE_TYPES,
      C_LINE_COMMENT_MODE2,
      hljs.C_BLOCK_COMMENT_MODE,
      NUMBERS,
      STRINGS
    ];
    const EXPRESSION_CONTEXT = {
      // This mode covers expression context where we can't expect a function
      // definition and shouldn't highlight anything that looks like one:
      // `return some()`, `else if()`, `(x*sum(1, 2))`
      variants: [
        {
          begin: /=/,
          end: /;/
        },
        {
          begin: /\(/,
          end: /\)/
        },
        {
          beginKeywords: "new throw return else",
          end: /;/
        }
      ],
      keywords: CPP_KEYWORDS,
      contains: EXPRESSION_CONTAINS.concat([
        {
          begin: /\(/,
          end: /\)/,
          keywords: CPP_KEYWORDS,
          contains: EXPRESSION_CONTAINS.concat(["self"]),
          relevance: 0
        }
      ]),
      relevance: 0
    };
    const FUNCTION_DECLARATION = {
      className: "function",
      begin: "(" + FUNCTION_TYPE_RE + "[\\*&\\s]+)+" + FUNCTION_TITLE,
      returnBegin: true,
      end: /[{;=]/,
      excludeEnd: true,
      keywords: CPP_KEYWORDS,
      illegal: /[^\w\s\*&:<>.]/,
      contains: [
        {
          // to prevent it from being confused as the function title
          begin: DECLTYPE_AUTO_RE,
          keywords: CPP_KEYWORDS,
          relevance: 0
        },
        {
          begin: FUNCTION_TITLE,
          returnBegin: true,
          contains: [TITLE_MODE2],
          relevance: 0
        },
        // needed because we do not have look-behind on the below rule
        // to prevent it from grabbing the final : in a :: pair
        {
          begin: /::/,
          relevance: 0
        },
        // initializers
        {
          begin: /:/,
          endsWithParent: true,
          contains: [
            STRINGS,
            NUMBERS
          ]
        },
        // allow for multiple declarations, e.g.:
        // extern void f(int), g(char);
        {
          relevance: 0,
          match: /,/
        },
        {
          className: "params",
          begin: /\(/,
          end: /\)/,
          keywords: CPP_KEYWORDS,
          relevance: 0,
          contains: [
            C_LINE_COMMENT_MODE2,
            hljs.C_BLOCK_COMMENT_MODE,
            STRINGS,
            NUMBERS,
            CPP_PRIMITIVE_TYPES,
            // Count matching parentheses.
            {
              begin: /\(/,
              end: /\)/,
              keywords: CPP_KEYWORDS,
              relevance: 0,
              contains: [
                "self",
                C_LINE_COMMENT_MODE2,
                hljs.C_BLOCK_COMMENT_MODE,
                STRINGS,
                NUMBERS,
                CPP_PRIMITIVE_TYPES
              ]
            }
          ]
        },
        CPP_PRIMITIVE_TYPES,
        C_LINE_COMMENT_MODE2,
        hljs.C_BLOCK_COMMENT_MODE,
        PREPROCESSOR
      ]
    };
    return {
      name: "C++",
      aliases: [
        "cc",
        "c++",
        "h++",
        "hpp",
        "hh",
        "hxx",
        "cxx"
      ],
      keywords: CPP_KEYWORDS,
      illegal: "</",
      classNameAliases: { "function.dispatch": "built_in" },
      contains: [].concat(
        EXPRESSION_CONTEXT,
        FUNCTION_DECLARATION,
        FUNCTION_DISPATCH,
        EXPRESSION_CONTAINS,
        [
          PREPROCESSOR,
          {
            // containers: ie, `vector <int> rooms (9);`
            begin: "\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function)\\s*<(?!<)",
            end: ">",
            keywords: CPP_KEYWORDS,
            contains: [
              "self",
              CPP_PRIMITIVE_TYPES
            ]
          },
          {
            begin: hljs.IDENT_RE + "::",
            keywords: CPP_KEYWORDS
          },
          {
            match: [
              // extra complexity to deal with `enum class` and `enum struct`
              /\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/,
              /\s+/,
              /\w+/
            ],
            className: {
              1: "keyword",
              3: "title.class"
            }
          }
        ]
      )
    };
  }
  function csharp(hljs) {
    const BUILT_IN_KEYWORDS = [
      "bool",
      "byte",
      "char",
      "decimal",
      "delegate",
      "double",
      "dynamic",
      "enum",
      "float",
      "int",
      "long",
      "nint",
      "nuint",
      "object",
      "sbyte",
      "short",
      "string",
      "ulong",
      "uint",
      "ushort"
    ];
    const FUNCTION_MODIFIERS = [
      "public",
      "private",
      "protected",
      "static",
      "internal",
      "protected",
      "abstract",
      "async",
      "extern",
      "override",
      "unsafe",
      "virtual",
      "new",
      "sealed",
      "partial"
    ];
    const LITERAL_KEYWORDS = [
      "default",
      "false",
      "null",
      "true"
    ];
    const NORMAL_KEYWORDS = [
      "abstract",
      "as",
      "base",
      "break",
      "case",
      "catch",
      "class",
      "const",
      "continue",
      "do",
      "else",
      "event",
      "explicit",
      "extern",
      "finally",
      "fixed",
      "for",
      "foreach",
      "goto",
      "if",
      "implicit",
      "in",
      "interface",
      "internal",
      "is",
      "lock",
      "namespace",
      "new",
      "operator",
      "out",
      "override",
      "params",
      "private",
      "protected",
      "public",
      "readonly",
      "record",
      "ref",
      "return",
      "scoped",
      "sealed",
      "sizeof",
      "stackalloc",
      "static",
      "struct",
      "switch",
      "this",
      "throw",
      "try",
      "typeof",
      "unchecked",
      "unsafe",
      "using",
      "virtual",
      "void",
      "volatile",
      "while"
    ];
    const CONTEXTUAL_KEYWORDS = [
      "add",
      "alias",
      "and",
      "ascending",
      "async",
      "await",
      "by",
      "descending",
      "equals",
      "from",
      "get",
      "global",
      "group",
      "init",
      "into",
      "join",
      "let",
      "nameof",
      "not",
      "notnull",
      "on",
      "or",
      "orderby",
      "partial",
      "remove",
      "select",
      "set",
      "unmanaged",
      "value|0",
      "var",
      "when",
      "where",
      "with",
      "yield"
    ];
    const KEYWORDS2 = {
      keyword: NORMAL_KEYWORDS.concat(CONTEXTUAL_KEYWORDS),
      built_in: BUILT_IN_KEYWORDS,
      literal: LITERAL_KEYWORDS
    };
    const TITLE_MODE2 = hljs.inherit(hljs.TITLE_MODE, { begin: "[a-zA-Z](\\.?\\w)*" });
    const NUMBERS = {
      className: "number",
      variants: [
        { begin: "\\b(0b[01']+)" },
        { begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)" },
        { begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)" }
      ],
      relevance: 0
    };
    const VERBATIM_STRING = {
      className: "string",
      begin: '@"',
      end: '"',
      contains: [{ begin: '""' }]
    };
    const VERBATIM_STRING_NO_LF = hljs.inherit(VERBATIM_STRING, { illegal: /\n/ });
    const SUBST = {
      className: "subst",
      begin: /\{/,
      end: /\}/,
      keywords: KEYWORDS2
    };
    const SUBST_NO_LF = hljs.inherit(SUBST, { illegal: /\n/ });
    const INTERPOLATED_STRING = {
      className: "string",
      begin: /\$"/,
      end: '"',
      illegal: /\n/,
      contains: [
        { begin: /\{\{/ },
        { begin: /\}\}/ },
        hljs.BACKSLASH_ESCAPE,
        SUBST_NO_LF
      ]
    };
    const INTERPOLATED_VERBATIM_STRING = {
      className: "string",
      begin: /\$@"/,
      end: '"',
      contains: [
        { begin: /\{\{/ },
        { begin: /\}\}/ },
        { begin: '""' },
        SUBST
      ]
    };
    const INTERPOLATED_VERBATIM_STRING_NO_LF = hljs.inherit(INTERPOLATED_VERBATIM_STRING, {
      illegal: /\n/,
      contains: [
        { begin: /\{\{/ },
        { begin: /\}\}/ },
        { begin: '""' },
        SUBST_NO_LF
      ]
    });
    SUBST.contains = [
      INTERPOLATED_VERBATIM_STRING,
      INTERPOLATED_STRING,
      VERBATIM_STRING,
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      NUMBERS,
      hljs.C_BLOCK_COMMENT_MODE
    ];
    SUBST_NO_LF.contains = [
      INTERPOLATED_VERBATIM_STRING_NO_LF,
      INTERPOLATED_STRING,
      VERBATIM_STRING_NO_LF,
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      NUMBERS,
      hljs.inherit(hljs.C_BLOCK_COMMENT_MODE, { illegal: /\n/ })
    ];
    const STRING = { variants: [
      INTERPOLATED_VERBATIM_STRING,
      INTERPOLATED_STRING,
      VERBATIM_STRING,
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE
    ] };
    const GENERIC_MODIFIER = {
      begin: "<",
      end: ">",
      contains: [
        { beginKeywords: "in out" },
        TITLE_MODE2
      ]
    };
    const TYPE_IDENT_RE = hljs.IDENT_RE + "(<" + hljs.IDENT_RE + "(\\s*,\\s*" + hljs.IDENT_RE + ")*>)?(\\[\\])?";
    const AT_IDENTIFIER = {
      // prevents expressions like `@class` from incorrect flagging
      // `class` as a keyword
      begin: "@" + hljs.IDENT_RE,
      relevance: 0
    };
    return {
      name: "C#",
      aliases: [
        "cs",
        "c#"
      ],
      keywords: KEYWORDS2,
      illegal: /::/,
      contains: [
        hljs.COMMENT(
          "///",
          "$",
          {
            returnBegin: true,
            contains: [
              {
                className: "doctag",
                variants: [
                  {
                    begin: "///",
                    relevance: 0
                  },
                  { begin: "<!--|-->" },
                  {
                    begin: "</?",
                    end: ">"
                  }
                ]
              }
            ]
          }
        ),
        hljs.C_LINE_COMMENT_MODE,
        hljs.C_BLOCK_COMMENT_MODE,
        {
          className: "meta",
          begin: "#",
          end: "$",
          keywords: { keyword: "if else elif endif define undef warning error line region endregion pragma checksum" }
        },
        STRING,
        NUMBERS,
        {
          beginKeywords: "class interface",
          relevance: 0,
          end: /[{;=]/,
          illegal: /[^\s:,]/,
          contains: [
            { beginKeywords: "where class" },
            TITLE_MODE2,
            GENERIC_MODIFIER,
            hljs.C_LINE_COMMENT_MODE,
            hljs.C_BLOCK_COMMENT_MODE
          ]
        },
        {
          beginKeywords: "namespace",
          relevance: 0,
          end: /[{;=]/,
          illegal: /[^\s:]/,
          contains: [
            TITLE_MODE2,
            hljs.C_LINE_COMMENT_MODE,
            hljs.C_BLOCK_COMMENT_MODE
          ]
        },
        {
          beginKeywords: "record",
          relevance: 0,
          end: /[{;=]/,
          illegal: /[^\s:]/,
          contains: [
            TITLE_MODE2,
            GENERIC_MODIFIER,
            hljs.C_LINE_COMMENT_MODE,
            hljs.C_BLOCK_COMMENT_MODE
          ]
        },
        {
          // [Attributes("")]
          className: "meta",
          begin: "^\\s*\\[(?=[\\w])",
          excludeBegin: true,
          end: "\\]",
          excludeEnd: true,
          contains: [
            {
              className: "string",
              begin: /"/,
              end: /"/
            }
          ]
        },
        {
          // Expression keywords prevent 'keyword Name(...)' from being
          // recognized as a function definition
          beginKeywords: "new return throw await else",
          relevance: 0
        },
        {
          className: "function",
          begin: "(" + TYPE_IDENT_RE + "\\s+)+" + hljs.IDENT_RE + "\\s*(<[^=]+>\\s*)?\\(",
          returnBegin: true,
          end: /\s*[{;=]/,
          excludeEnd: true,
          keywords: KEYWORDS2,
          contains: [
            // prevents these from being highlighted `title`
            {
              beginKeywords: FUNCTION_MODIFIERS.join(" "),
              relevance: 0
            },
            {
              begin: hljs.IDENT_RE + "\\s*(<[^=]+>\\s*)?\\(",
              returnBegin: true,
              contains: [
                hljs.TITLE_MODE,
                GENERIC_MODIFIER
              ],
              relevance: 0
            },
            { match: /\(\)/ },
            {
              className: "params",
              begin: /\(/,
              end: /\)/,
              excludeBegin: true,
              excludeEnd: true,
              keywords: KEYWORDS2,
              relevance: 0,
              contains: [
                STRING,
                NUMBERS,
                hljs.C_BLOCK_COMMENT_MODE
              ]
            },
            hljs.C_LINE_COMMENT_MODE,
            hljs.C_BLOCK_COMMENT_MODE
          ]
        },
        AT_IDENTIFIER
      ]
    };
  }
  function xml(hljs) {
    const regex2 = hljs.regex;
    const TAG_NAME_RE = regex2.concat(/[\p{L}_]/u, regex2.optional(/[\p{L}0-9_.-]*:/u), /[\p{L}0-9_.-]*/u);
    const XML_IDENT_RE = /[\p{L}0-9._:-]+/u;
    const XML_ENTITIES = {
      className: "symbol",
      begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/
    };
    const XML_META_KEYWORDS = {
      begin: /\s/,
      contains: [
        {
          className: "keyword",
          begin: /#?[a-z_][a-z1-9_-]+/,
          illegal: /\n/
        }
      ]
    };
    const XML_META_PAR_KEYWORDS = hljs.inherit(XML_META_KEYWORDS, {
      begin: /\(/,
      end: /\)/
    });
    const APOS_META_STRING_MODE = hljs.inherit(hljs.APOS_STRING_MODE, { className: "string" });
    const QUOTE_META_STRING_MODE = hljs.inherit(hljs.QUOTE_STRING_MODE, { className: "string" });
    const TAG_INTERNALS = {
      endsWithParent: true,
      illegal: /</,
      relevance: 0,
      contains: [
        {
          className: "attr",
          begin: XML_IDENT_RE,
          relevance: 0
        },
        {
          begin: /=\s*/,
          relevance: 0,
          contains: [
            {
              className: "string",
              endsParent: true,
              variants: [
                {
                  begin: /"/,
                  end: /"/,
                  contains: [XML_ENTITIES]
                },
                {
                  begin: /'/,
                  end: /'/,
                  contains: [XML_ENTITIES]
                },
                { begin: /[^\s"'=<>`]+/ }
              ]
            }
          ]
        }
      ]
    };
    return {
      name: "HTML, XML",
      aliases: [
        "html",
        "xhtml",
        "rss",
        "atom",
        "xjb",
        "xsd",
        "xsl",
        "plist",
        "wsf",
        "svg"
      ],
      case_insensitive: true,
      unicodeRegex: true,
      contains: [
        {
          className: "meta",
          begin: /<![a-z]/,
          end: />/,
          relevance: 10,
          contains: [
            XML_META_KEYWORDS,
            QUOTE_META_STRING_MODE,
            APOS_META_STRING_MODE,
            XML_META_PAR_KEYWORDS,
            {
              begin: /\[/,
              end: /\]/,
              contains: [
                {
                  className: "meta",
                  begin: /<![a-z]/,
                  end: />/,
                  contains: [
                    XML_META_KEYWORDS,
                    XML_META_PAR_KEYWORDS,
                    QUOTE_META_STRING_MODE,
                    APOS_META_STRING_MODE
                  ]
                }
              ]
            }
          ]
        },
        hljs.COMMENT(
          /<!--/,
          /-->/,
          { relevance: 10 }
        ),
        {
          begin: /<!\[CDATA\[/,
          end: /\]\]>/,
          relevance: 10
        },
        XML_ENTITIES,
        // xml processing instructions
        {
          className: "meta",
          end: /\?>/,
          variants: [
            {
              begin: /<\?xml/,
              relevance: 10,
              contains: [
                QUOTE_META_STRING_MODE
              ]
            },
            {
              begin: /<\?[a-z][a-z0-9]+/
            }
          ]
        },
        {
          className: "tag",
          /*
          The lookahead pattern (?=...) ensures that 'begin' only matches
          '<style' as a single word, followed by a whitespace or an
          ending bracket.
          */
          begin: /<style(?=\s|>)/,
          end: />/,
          keywords: { name: "style" },
          contains: [TAG_INTERNALS],
          starts: {
            end: /<\/style>/,
            returnEnd: true,
            subLanguage: [
              "css",
              "xml"
            ]
          }
        },
        {
          className: "tag",
          // See the comment in the <style tag about the lookahead pattern
          begin: /<script(?=\s|>)/,
          end: />/,
          keywords: { name: "script" },
          contains: [TAG_INTERNALS],
          starts: {
            end: /<\/script>/,
            returnEnd: true,
            subLanguage: [
              "javascript",
              "handlebars",
              "xml"
            ]
          }
        },
        // we need this for now for jSX
        {
          className: "tag",
          begin: /<>|<\/>/
        },
        // open tag
        {
          className: "tag",
          begin: regex2.concat(
            /</,
            regex2.lookahead(regex2.concat(
              TAG_NAME_RE,
              // <tag/>
              // <tag>
              // <tag ...
              regex2.either(/\/>/, />/, /\s/)
            ))
          ),
          end: /\/?>/,
          contains: [
            {
              className: "name",
              begin: TAG_NAME_RE,
              relevance: 0,
              starts: TAG_INTERNALS
            }
          ]
        },
        // close tag
        {
          className: "tag",
          begin: regex2.concat(
            /<\//,
            regex2.lookahead(regex2.concat(
              TAG_NAME_RE,
              />/
            ))
          ),
          contains: [
            {
              className: "name",
              begin: TAG_NAME_RE,
              relevance: 0
            },
            {
              begin: />/,
              relevance: 0,
              endsParent: true
            }
          ]
        }
      ]
    };
  }
  function json(hljs) {
    const ATTRIBUTE = {
      className: "attr",
      begin: /"(\\.|[^\\"\r\n])*"(?=\s*:)/,
      relevance: 1.01
    };
    const PUNCTUATION = {
      match: /[{}[\],:]/,
      className: "punctuation",
      relevance: 0
    };
    const LITERALS2 = [
      "true",
      "false",
      "null"
    ];
    const LITERALS_MODE = {
      scope: "literal",
      beginKeywords: LITERALS2.join(" ")
    };
    return {
      name: "JSON",
      keywords: {
        literal: LITERALS2
      },
      contains: [
        ATTRIBUTE,
        PUNCTUATION,
        hljs.QUOTE_STRING_MODE,
        LITERALS_MODE,
        hljs.C_NUMBER_MODE,
        hljs.C_LINE_COMMENT_MODE,
        hljs.C_BLOCK_COMMENT_MODE
      ],
      illegal: "\\S"
    };
  }
  const MODES = (hljs) => {
    return {
      IMPORTANT: {
        scope: "meta",
        begin: "!important"
      },
      BLOCK_COMMENT: hljs.C_BLOCK_COMMENT_MODE,
      HEXCOLOR: {
        scope: "number",
        begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/
      },
      FUNCTION_DISPATCH: {
        className: "built_in",
        begin: /[\w-]+(?=\()/
      },
      ATTRIBUTE_SELECTOR_MODE: {
        scope: "selector-attr",
        begin: /\[/,
        end: /\]/,
        illegal: "$",
        contains: [
          hljs.APOS_STRING_MODE,
          hljs.QUOTE_STRING_MODE
        ]
      },
      CSS_NUMBER_MODE: {
        scope: "number",
        begin: hljs.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
        relevance: 0
      },
      CSS_VARIABLE: {
        className: "attr",
        begin: /--[A-Za-z][A-Za-z0-9_-]*/
      }
    };
  };
  const TAGS = [
    "a",
    "abbr",
    "address",
    "article",
    "aside",
    "audio",
    "b",
    "blockquote",
    "body",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "dd",
    "del",
    "details",
    "dfn",
    "div",
    "dl",
    "dt",
    "em",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "label",
    "legend",
    "li",
    "main",
    "mark",
    "menu",
    "nav",
    "object",
    "ol",
    "p",
    "q",
    "quote",
    "samp",
    "section",
    "span",
    "strong",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "ul",
    "var",
    "video"
  ];
  const MEDIA_FEATURES = [
    "any-hover",
    "any-pointer",
    "aspect-ratio",
    "color",
    "color-gamut",
    "color-index",
    "device-aspect-ratio",
    "device-height",
    "device-width",
    "display-mode",
    "forced-colors",
    "grid",
    "height",
    "hover",
    "inverted-colors",
    "monochrome",
    "orientation",
    "overflow-block",
    "overflow-inline",
    "pointer",
    "prefers-color-scheme",
    "prefers-contrast",
    "prefers-reduced-motion",
    "prefers-reduced-transparency",
    "resolution",
    "scan",
    "scripting",
    "update",
    "width",
    // TODO: find a better solution?
    "min-width",
    "max-width",
    "min-height",
    "max-height"
  ];
  const PSEUDO_CLASSES = [
    "active",
    "any-link",
    "blank",
    "checked",
    "current",
    "default",
    "defined",
    "dir",
    // dir()
    "disabled",
    "drop",
    "empty",
    "enabled",
    "first",
    "first-child",
    "first-of-type",
    "fullscreen",
    "future",
    "focus",
    "focus-visible",
    "focus-within",
    "has",
    // has()
    "host",
    // host or host()
    "host-context",
    // host-context()
    "hover",
    "indeterminate",
    "in-range",
    "invalid",
    "is",
    // is()
    "lang",
    // lang()
    "last-child",
    "last-of-type",
    "left",
    "link",
    "local-link",
    "not",
    // not()
    "nth-child",
    // nth-child()
    "nth-col",
    // nth-col()
    "nth-last-child",
    // nth-last-child()
    "nth-last-col",
    // nth-last-col()
    "nth-last-of-type",
    //nth-last-of-type()
    "nth-of-type",
    //nth-of-type()
    "only-child",
    "only-of-type",
    "optional",
    "out-of-range",
    "past",
    "placeholder-shown",
    "read-only",
    "read-write",
    "required",
    "right",
    "root",
    "scope",
    "target",
    "target-within",
    "user-invalid",
    "valid",
    "visited",
    "where"
    // where()
  ];
  const PSEUDO_ELEMENTS = [
    "after",
    "backdrop",
    "before",
    "cue",
    "cue-region",
    "first-letter",
    "first-line",
    "grammar-error",
    "marker",
    "part",
    "placeholder",
    "selection",
    "slotted",
    "spelling-error"
  ];
  const ATTRIBUTES = [
    "align-content",
    "align-items",
    "align-self",
    "all",
    "animation",
    "animation-delay",
    "animation-direction",
    "animation-duration",
    "animation-fill-mode",
    "animation-iteration-count",
    "animation-name",
    "animation-play-state",
    "animation-timing-function",
    "backface-visibility",
    "background",
    "background-attachment",
    "background-blend-mode",
    "background-clip",
    "background-color",
    "background-image",
    "background-origin",
    "background-position",
    "background-repeat",
    "background-size",
    "block-size",
    "border",
    "border-block",
    "border-block-color",
    "border-block-end",
    "border-block-end-color",
    "border-block-end-style",
    "border-block-end-width",
    "border-block-start",
    "border-block-start-color",
    "border-block-start-style",
    "border-block-start-width",
    "border-block-style",
    "border-block-width",
    "border-bottom",
    "border-bottom-color",
    "border-bottom-left-radius",
    "border-bottom-right-radius",
    "border-bottom-style",
    "border-bottom-width",
    "border-collapse",
    "border-color",
    "border-image",
    "border-image-outset",
    "border-image-repeat",
    "border-image-slice",
    "border-image-source",
    "border-image-width",
    "border-inline",
    "border-inline-color",
    "border-inline-end",
    "border-inline-end-color",
    "border-inline-end-style",
    "border-inline-end-width",
    "border-inline-start",
    "border-inline-start-color",
    "border-inline-start-style",
    "border-inline-start-width",
    "border-inline-style",
    "border-inline-width",
    "border-left",
    "border-left-color",
    "border-left-style",
    "border-left-width",
    "border-radius",
    "border-right",
    "border-right-color",
    "border-right-style",
    "border-right-width",
    "border-spacing",
    "border-style",
    "border-top",
    "border-top-color",
    "border-top-left-radius",
    "border-top-right-radius",
    "border-top-style",
    "border-top-width",
    "border-width",
    "bottom",
    "box-decoration-break",
    "box-shadow",
    "box-sizing",
    "break-after",
    "break-before",
    "break-inside",
    "caption-side",
    "caret-color",
    "clear",
    "clip",
    "clip-path",
    "clip-rule",
    "color",
    "column-count",
    "column-fill",
    "column-gap",
    "column-rule",
    "column-rule-color",
    "column-rule-style",
    "column-rule-width",
    "column-span",
    "column-width",
    "columns",
    "contain",
    "content",
    "content-visibility",
    "counter-increment",
    "counter-reset",
    "cue",
    "cue-after",
    "cue-before",
    "cursor",
    "direction",
    "display",
    "empty-cells",
    "filter",
    "flex",
    "flex-basis",
    "flex-direction",
    "flex-flow",
    "flex-grow",
    "flex-shrink",
    "flex-wrap",
    "float",
    "flow",
    "font",
    "font-display",
    "font-family",
    "font-feature-settings",
    "font-kerning",
    "font-language-override",
    "font-size",
    "font-size-adjust",
    "font-smoothing",
    "font-stretch",
    "font-style",
    "font-synthesis",
    "font-variant",
    "font-variant-caps",
    "font-variant-east-asian",
    "font-variant-ligatures",
    "font-variant-numeric",
    "font-variant-position",
    "font-variation-settings",
    "font-weight",
    "gap",
    "glyph-orientation-vertical",
    "grid",
    "grid-area",
    "grid-auto-columns",
    "grid-auto-flow",
    "grid-auto-rows",
    "grid-column",
    "grid-column-end",
    "grid-column-start",
    "grid-gap",
    "grid-row",
    "grid-row-end",
    "grid-row-start",
    "grid-template",
    "grid-template-areas",
    "grid-template-columns",
    "grid-template-rows",
    "hanging-punctuation",
    "height",
    "hyphens",
    "icon",
    "image-orientation",
    "image-rendering",
    "image-resolution",
    "ime-mode",
    "inline-size",
    "isolation",
    "justify-content",
    "left",
    "letter-spacing",
    "line-break",
    "line-height",
    "list-style",
    "list-style-image",
    "list-style-position",
    "list-style-type",
    "margin",
    "margin-block",
    "margin-block-end",
    "margin-block-start",
    "margin-bottom",
    "margin-inline",
    "margin-inline-end",
    "margin-inline-start",
    "margin-left",
    "margin-right",
    "margin-top",
    "marks",
    "mask",
    "mask-border",
    "mask-border-mode",
    "mask-border-outset",
    "mask-border-repeat",
    "mask-border-slice",
    "mask-border-source",
    "mask-border-width",
    "mask-clip",
    "mask-composite",
    "mask-image",
    "mask-mode",
    "mask-origin",
    "mask-position",
    "mask-repeat",
    "mask-size",
    "mask-type",
    "max-block-size",
    "max-height",
    "max-inline-size",
    "max-width",
    "min-block-size",
    "min-height",
    "min-inline-size",
    "min-width",
    "mix-blend-mode",
    "nav-down",
    "nav-index",
    "nav-left",
    "nav-right",
    "nav-up",
    "none",
    "normal",
    "object-fit",
    "object-position",
    "opacity",
    "order",
    "orphans",
    "outline",
    "outline-color",
    "outline-offset",
    "outline-style",
    "outline-width",
    "overflow",
    "overflow-wrap",
    "overflow-x",
    "overflow-y",
    "padding",
    "padding-block",
    "padding-block-end",
    "padding-block-start",
    "padding-bottom",
    "padding-inline",
    "padding-inline-end",
    "padding-inline-start",
    "padding-left",
    "padding-right",
    "padding-top",
    "page-break-after",
    "page-break-before",
    "page-break-inside",
    "pause",
    "pause-after",
    "pause-before",
    "perspective",
    "perspective-origin",
    "pointer-events",
    "position",
    "quotes",
    "resize",
    "rest",
    "rest-after",
    "rest-before",
    "right",
    "row-gap",
    "scroll-margin",
    "scroll-margin-block",
    "scroll-margin-block-end",
    "scroll-margin-block-start",
    "scroll-margin-bottom",
    "scroll-margin-inline",
    "scroll-margin-inline-end",
    "scroll-margin-inline-start",
    "scroll-margin-left",
    "scroll-margin-right",
    "scroll-margin-top",
    "scroll-padding",
    "scroll-padding-block",
    "scroll-padding-block-end",
    "scroll-padding-block-start",
    "scroll-padding-bottom",
    "scroll-padding-inline",
    "scroll-padding-inline-end",
    "scroll-padding-inline-start",
    "scroll-padding-left",
    "scroll-padding-right",
    "scroll-padding-top",
    "scroll-snap-align",
    "scroll-snap-stop",
    "scroll-snap-type",
    "scrollbar-color",
    "scrollbar-gutter",
    "scrollbar-width",
    "shape-image-threshold",
    "shape-margin",
    "shape-outside",
    "speak",
    "speak-as",
    "src",
    // @font-face
    "tab-size",
    "table-layout",
    "text-align",
    "text-align-all",
    "text-align-last",
    "text-combine-upright",
    "text-decoration",
    "text-decoration-color",
    "text-decoration-line",
    "text-decoration-style",
    "text-emphasis",
    "text-emphasis-color",
    "text-emphasis-position",
    "text-emphasis-style",
    "text-indent",
    "text-justify",
    "text-orientation",
    "text-overflow",
    "text-rendering",
    "text-shadow",
    "text-transform",
    "text-underline-position",
    "top",
    "transform",
    "transform-box",
    "transform-origin",
    "transform-style",
    "transition",
    "transition-delay",
    "transition-duration",
    "transition-property",
    "transition-timing-function",
    "unicode-bidi",
    "vertical-align",
    "visibility",
    "voice-balance",
    "voice-duration",
    "voice-family",
    "voice-pitch",
    "voice-range",
    "voice-rate",
    "voice-stress",
    "voice-volume",
    "white-space",
    "widows",
    "width",
    "will-change",
    "word-break",
    "word-spacing",
    "word-wrap",
    "writing-mode",
    "z-index"
    // reverse makes sure longer attributes `font-weight` are matched fully
    // instead of getting false positives on say `font`
  ].reverse();
  function css(hljs) {
    const regex2 = hljs.regex;
    const modes = MODES(hljs);
    const VENDOR_PREFIX = { begin: /-(webkit|moz|ms|o)-(?=[a-z])/ };
    const AT_MODIFIERS = "and or not only";
    const AT_PROPERTY_RE = /@-?\w[\w]*(-\w+)*/;
    const IDENT_RE2 = "[a-zA-Z-][a-zA-Z0-9_-]*";
    const STRINGS = [
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE
    ];
    return {
      name: "CSS",
      case_insensitive: true,
      illegal: /[=|'\$]/,
      keywords: { keyframePosition: "from to" },
      classNameAliases: {
        // for visual continuity with `tag {}` and because we
        // don't have a great class for this?
        keyframePosition: "selector-tag"
      },
      contains: [
        modes.BLOCK_COMMENT,
        VENDOR_PREFIX,
        // to recognize keyframe 40% etc which are outside the scope of our
        // attribute value mode
        modes.CSS_NUMBER_MODE,
        {
          className: "selector-id",
          begin: /#[A-Za-z0-9_-]+/,
          relevance: 0
        },
        {
          className: "selector-class",
          begin: "\\." + IDENT_RE2,
          relevance: 0
        },
        modes.ATTRIBUTE_SELECTOR_MODE,
        {
          className: "selector-pseudo",
          variants: [
            { begin: ":(" + PSEUDO_CLASSES.join("|") + ")" },
            { begin: ":(:)?(" + PSEUDO_ELEMENTS.join("|") + ")" }
          ]
        },
        // we may actually need this (12/2020)
        // { // pseudo-selector params
        //   begin: /\(/,
        //   end: /\)/,
        //   contains: [ hljs.CSS_NUMBER_MODE ]
        // },
        modes.CSS_VARIABLE,
        {
          className: "attribute",
          begin: "\\b(" + ATTRIBUTES.join("|") + ")\\b"
        },
        // attribute values
        {
          begin: /:/,
          end: /[;}{]/,
          contains: [
            modes.BLOCK_COMMENT,
            modes.HEXCOLOR,
            modes.IMPORTANT,
            modes.CSS_NUMBER_MODE,
            ...STRINGS,
            // needed to highlight these as strings and to avoid issues with
            // illegal characters that might be inside urls that would tigger the
            // languages illegal stack
            {
              begin: /(url|data-uri)\(/,
              end: /\)/,
              relevance: 0,
              // from keywords
              keywords: { built_in: "url data-uri" },
              contains: [
                ...STRINGS,
                {
                  className: "string",
                  // any character other than `)` as in `url()` will be the start
                  // of a string, which ends with `)` (from the parent mode)
                  begin: /[^)]/,
                  endsWithParent: true,
                  excludeEnd: true
                }
              ]
            },
            modes.FUNCTION_DISPATCH
          ]
        },
        {
          begin: regex2.lookahead(/@/),
          end: "[{;]",
          relevance: 0,
          illegal: /:/,
          // break on Less variables @var: ...
          contains: [
            {
              className: "keyword",
              begin: AT_PROPERTY_RE
            },
            {
              begin: /\s/,
              endsWithParent: true,
              excludeEnd: true,
              relevance: 0,
              keywords: {
                $pattern: /[a-z-]+/,
                keyword: AT_MODIFIERS,
                attribute: MEDIA_FEATURES.join(" ")
              },
              contains: [
                {
                  begin: /[a-z-]+(?=:)/,
                  className: "attribute"
                },
                ...STRINGS,
                modes.CSS_NUMBER_MODE
              ]
            }
          ]
        },
        {
          className: "selector-tag",
          begin: "\\b(" + TAGS.join("|") + ")\\b"
        }
      ]
    };
  }
  function sql(hljs) {
    const regex2 = hljs.regex;
    const COMMENT_MODE = hljs.COMMENT("--", "$");
    const STRING = {
      className: "string",
      variants: [
        {
          begin: /'/,
          end: /'/,
          contains: [{ begin: /''/ }]
        }
      ]
    };
    const QUOTED_IDENTIFIER = {
      begin: /"/,
      end: /"/,
      contains: [{ begin: /""/ }]
    };
    const LITERALS2 = [
      "true",
      "false",
      // Not sure it's correct to call NULL literal, and clauses like IS [NOT] NULL look strange that way.
      // "null",
      "unknown"
    ];
    const MULTI_WORD_TYPES = [
      "double precision",
      "large object",
      "with timezone",
      "without timezone"
    ];
    const TYPES2 = [
      "bigint",
      "binary",
      "blob",
      "boolean",
      "char",
      "character",
      "clob",
      "date",
      "dec",
      "decfloat",
      "decimal",
      "float",
      "int",
      "integer",
      "interval",
      "nchar",
      "nclob",
      "national",
      "numeric",
      "real",
      "row",
      "smallint",
      "time",
      "timestamp",
      "varchar",
      "varying",
      // modifier (character varying)
      "varbinary"
    ];
    const NON_RESERVED_WORDS = [
      "add",
      "asc",
      "collation",
      "desc",
      "final",
      "first",
      "last",
      "view"
    ];
    const RESERVED_WORDS = [
      "abs",
      "acos",
      "all",
      "allocate",
      "alter",
      "and",
      "any",
      "are",
      "array",
      "array_agg",
      "array_max_cardinality",
      "as",
      "asensitive",
      "asin",
      "asymmetric",
      "at",
      "atan",
      "atomic",
      "authorization",
      "avg",
      "begin",
      "begin_frame",
      "begin_partition",
      "between",
      "bigint",
      "binary",
      "blob",
      "boolean",
      "both",
      "by",
      "call",
      "called",
      "cardinality",
      "cascaded",
      "case",
      "cast",
      "ceil",
      "ceiling",
      "char",
      "char_length",
      "character",
      "character_length",
      "check",
      "classifier",
      "clob",
      "close",
      "coalesce",
      "collate",
      "collect",
      "column",
      "commit",
      "condition",
      "connect",
      "constraint",
      "contains",
      "convert",
      "copy",
      "corr",
      "corresponding",
      "cos",
      "cosh",
      "count",
      "covar_pop",
      "covar_samp",
      "create",
      "cross",
      "cube",
      "cume_dist",
      "current",
      "current_catalog",
      "current_date",
      "current_default_transform_group",
      "current_path",
      "current_role",
      "current_row",
      "current_schema",
      "current_time",
      "current_timestamp",
      "current_path",
      "current_role",
      "current_transform_group_for_type",
      "current_user",
      "cursor",
      "cycle",
      "date",
      "day",
      "deallocate",
      "dec",
      "decimal",
      "decfloat",
      "declare",
      "default",
      "define",
      "delete",
      "dense_rank",
      "deref",
      "describe",
      "deterministic",
      "disconnect",
      "distinct",
      "double",
      "drop",
      "dynamic",
      "each",
      "element",
      "else",
      "empty",
      "end",
      "end_frame",
      "end_partition",
      "end-exec",
      "equals",
      "escape",
      "every",
      "except",
      "exec",
      "execute",
      "exists",
      "exp",
      "external",
      "extract",
      "false",
      "fetch",
      "filter",
      "first_value",
      "float",
      "floor",
      "for",
      "foreign",
      "frame_row",
      "free",
      "from",
      "full",
      "function",
      "fusion",
      "get",
      "global",
      "grant",
      "group",
      "grouping",
      "groups",
      "having",
      "hold",
      "hour",
      "identity",
      "in",
      "indicator",
      "initial",
      "inner",
      "inout",
      "insensitive",
      "insert",
      "int",
      "integer",
      "intersect",
      "intersection",
      "interval",
      "into",
      "is",
      "join",
      "json_array",
      "json_arrayagg",
      "json_exists",
      "json_object",
      "json_objectagg",
      "json_query",
      "json_table",
      "json_table_primitive",
      "json_value",
      "lag",
      "language",
      "large",
      "last_value",
      "lateral",
      "lead",
      "leading",
      "left",
      "like",
      "like_regex",
      "listagg",
      "ln",
      "local",
      "localtime",
      "localtimestamp",
      "log",
      "log10",
      "lower",
      "match",
      "match_number",
      "match_recognize",
      "matches",
      "max",
      "member",
      "merge",
      "method",
      "min",
      "minute",
      "mod",
      "modifies",
      "module",
      "month",
      "multiset",
      "national",
      "natural",
      "nchar",
      "nclob",
      "new",
      "no",
      "none",
      "normalize",
      "not",
      "nth_value",
      "ntile",
      "null",
      "nullif",
      "numeric",
      "octet_length",
      "occurrences_regex",
      "of",
      "offset",
      "old",
      "omit",
      "on",
      "one",
      "only",
      "open",
      "or",
      "order",
      "out",
      "outer",
      "over",
      "overlaps",
      "overlay",
      "parameter",
      "partition",
      "pattern",
      "per",
      "percent",
      "percent_rank",
      "percentile_cont",
      "percentile_disc",
      "period",
      "portion",
      "position",
      "position_regex",
      "power",
      "precedes",
      "precision",
      "prepare",
      "primary",
      "procedure",
      "ptf",
      "range",
      "rank",
      "reads",
      "real",
      "recursive",
      "ref",
      "references",
      "referencing",
      "regr_avgx",
      "regr_avgy",
      "regr_count",
      "regr_intercept",
      "regr_r2",
      "regr_slope",
      "regr_sxx",
      "regr_sxy",
      "regr_syy",
      "release",
      "result",
      "return",
      "returns",
      "revoke",
      "right",
      "rollback",
      "rollup",
      "row",
      "row_number",
      "rows",
      "running",
      "savepoint",
      "scope",
      "scroll",
      "search",
      "second",
      "seek",
      "select",
      "sensitive",
      "session_user",
      "set",
      "show",
      "similar",
      "sin",
      "sinh",
      "skip",
      "smallint",
      "some",
      "specific",
      "specifictype",
      "sql",
      "sqlexception",
      "sqlstate",
      "sqlwarning",
      "sqrt",
      "start",
      "static",
      "stddev_pop",
      "stddev_samp",
      "submultiset",
      "subset",
      "substring",
      "substring_regex",
      "succeeds",
      "sum",
      "symmetric",
      "system",
      "system_time",
      "system_user",
      "table",
      "tablesample",
      "tan",
      "tanh",
      "then",
      "time",
      "timestamp",
      "timezone_hour",
      "timezone_minute",
      "to",
      "trailing",
      "translate",
      "translate_regex",
      "translation",
      "treat",
      "trigger",
      "trim",
      "trim_array",
      "true",
      "truncate",
      "uescape",
      "union",
      "unique",
      "unknown",
      "unnest",
      "update",
      "upper",
      "user",
      "using",
      "value",
      "values",
      "value_of",
      "var_pop",
      "var_samp",
      "varbinary",
      "varchar",
      "varying",
      "versioning",
      "when",
      "whenever",
      "where",
      "width_bucket",
      "window",
      "with",
      "within",
      "without",
      "year"
    ];
    const RESERVED_FUNCTIONS = [
      "abs",
      "acos",
      "array_agg",
      "asin",
      "atan",
      "avg",
      "cast",
      "ceil",
      "ceiling",
      "coalesce",
      "corr",
      "cos",
      "cosh",
      "count",
      "covar_pop",
      "covar_samp",
      "cume_dist",
      "dense_rank",
      "deref",
      "element",
      "exp",
      "extract",
      "first_value",
      "floor",
      "json_array",
      "json_arrayagg",
      "json_exists",
      "json_object",
      "json_objectagg",
      "json_query",
      "json_table",
      "json_table_primitive",
      "json_value",
      "lag",
      "last_value",
      "lead",
      "listagg",
      "ln",
      "log",
      "log10",
      "lower",
      "max",
      "min",
      "mod",
      "nth_value",
      "ntile",
      "nullif",
      "percent_rank",
      "percentile_cont",
      "percentile_disc",
      "position",
      "position_regex",
      "power",
      "rank",
      "regr_avgx",
      "regr_avgy",
      "regr_count",
      "regr_intercept",
      "regr_r2",
      "regr_slope",
      "regr_sxx",
      "regr_sxy",
      "regr_syy",
      "row_number",
      "sin",
      "sinh",
      "sqrt",
      "stddev_pop",
      "stddev_samp",
      "substring",
      "substring_regex",
      "sum",
      "tan",
      "tanh",
      "translate",
      "translate_regex",
      "treat",
      "trim",
      "trim_array",
      "unnest",
      "upper",
      "value_of",
      "var_pop",
      "var_samp",
      "width_bucket"
    ];
    const POSSIBLE_WITHOUT_PARENS = [
      "current_catalog",
      "current_date",
      "current_default_transform_group",
      "current_path",
      "current_role",
      "current_schema",
      "current_transform_group_for_type",
      "current_user",
      "session_user",
      "system_time",
      "system_user",
      "current_time",
      "localtime",
      "current_timestamp",
      "localtimestamp"
    ];
    const COMBOS = [
      "create table",
      "insert into",
      "primary key",
      "foreign key",
      "not null",
      "alter table",
      "add constraint",
      "grouping sets",
      "on overflow",
      "character set",
      "respect nulls",
      "ignore nulls",
      "nulls first",
      "nulls last",
      "depth first",
      "breadth first"
    ];
    const FUNCTIONS = RESERVED_FUNCTIONS;
    const KEYWORDS2 = [
      ...RESERVED_WORDS,
      ...NON_RESERVED_WORDS
    ].filter((keyword) => {
      return !RESERVED_FUNCTIONS.includes(keyword);
    });
    const VARIABLE = {
      className: "variable",
      begin: /@[a-z0-9]+/
    };
    const OPERATOR = {
      className: "operator",
      begin: /[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?/,
      relevance: 0
    };
    const FUNCTION_CALL = {
      begin: regex2.concat(/\b/, regex2.either(...FUNCTIONS), /\s*\(/),
      relevance: 0,
      keywords: { built_in: FUNCTIONS }
    };
    function reduceRelevancy(list2, {
      exceptions,
      when
    } = {}) {
      const qualifyFn = when;
      exceptions = exceptions || [];
      return list2.map((item) => {
        if (item.match(/\|\d+$/) || exceptions.includes(item)) {
          return item;
        } else if (qualifyFn(item)) {
          return `${item}|0`;
        } else {
          return item;
        }
      });
    }
    return {
      name: "SQL",
      case_insensitive: true,
      // does not include {} or HTML tags `</`
      illegal: /[{}]|<\//,
      keywords: {
        $pattern: /\b[\w\.]+/,
        keyword: reduceRelevancy(KEYWORDS2, { when: (x2) => x2.length < 3 }),
        literal: LITERALS2,
        type: TYPES2,
        built_in: POSSIBLE_WITHOUT_PARENS
      },
      contains: [
        {
          begin: regex2.either(...COMBOS),
          relevance: 0,
          keywords: {
            $pattern: /[\w\.]+/,
            keyword: KEYWORDS2.concat(COMBOS),
            literal: LITERALS2,
            type: TYPES2
          }
        },
        {
          className: "type",
          begin: regex2.either(...MULTI_WORD_TYPES)
        },
        FUNCTION_CALL,
        VARIABLE,
        STRING,
        QUOTED_IDENTIFIER,
        hljs.C_NUMBER_MODE,
        hljs.C_BLOCK_COMMENT_MODE,
        COMMENT_MODE,
        OPERATOR
      ]
    };
  }
  function shell(hljs) {
    return {
      name: "Shell Session",
      aliases: [
        "console",
        "shellsession"
      ],
      contains: [
        {
          className: "meta.prompt",
          // We cannot add \s (spaces) in the regular expression otherwise it will be too broad and produce unexpected result.
          // For instance, in the following example, it would match "echo /path/to/home >" as a prompt:
          // echo /path/to/home > t.exe
          begin: /^\s{0,3}[/~\w\d[\]()@-]*[>%$#][ ]?/,
          starts: {
            end: /[^\\](?=\s*$)/,
            subLanguage: "bash"
          }
        }
      ]
    };
  }
  var decimalDigits$1 = "[0-9](_*[0-9])*";
  var frac$1 = `\\.(${decimalDigits$1})`;
  var hexDigits$1 = "[0-9a-fA-F](_*[0-9a-fA-F])*";
  var NUMERIC$1 = {
    className: "number",
    variants: [
      // DecimalFloatingPointLiteral
      // including ExponentPart
      { begin: `(\\b(${decimalDigits$1})((${frac$1})|\\.)?|(${frac$1}))[eE][+-]?(${decimalDigits$1})[fFdD]?\\b` },
      // excluding ExponentPart
      { begin: `\\b(${decimalDigits$1})((${frac$1})[fFdD]?\\b|\\.([fFdD]\\b)?)` },
      { begin: `(${frac$1})[fFdD]?\\b` },
      { begin: `\\b(${decimalDigits$1})[fFdD]\\b` },
      // HexadecimalFloatingPointLiteral
      { begin: `\\b0[xX]((${hexDigits$1})\\.?|(${hexDigits$1})?\\.(${hexDigits$1}))[pP][+-]?(${decimalDigits$1})[fFdD]?\\b` },
      // DecimalIntegerLiteral
      { begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b" },
      // HexIntegerLiteral
      { begin: `\\b0[xX](${hexDigits$1})[lL]?\\b` },
      // OctalIntegerLiteral
      { begin: "\\b0(_*[0-7])*[lL]?\\b" },
      // BinaryIntegerLiteral
      { begin: "\\b0[bB][01](_*[01])*[lL]?\\b" }
    ],
    relevance: 0
  };
  function recurRegex(re2, substitution, depth) {
    if (depth === -1)
      return "";
    return re2.replace(substitution, (_) => {
      return recurRegex(re2, substitution, depth - 1);
    });
  }
  function java(hljs) {
    const regex2 = hljs.regex;
    const JAVA_IDENT_RE = "[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*";
    const GENERIC_IDENT_RE = JAVA_IDENT_RE + recurRegex("(?:<" + JAVA_IDENT_RE + "~~~(?:\\s*,\\s*" + JAVA_IDENT_RE + "~~~)*>)?", /~~~/g, 2);
    const MAIN_KEYWORDS = [
      "synchronized",
      "abstract",
      "private",
      "var",
      "static",
      "if",
      "const ",
      "for",
      "while",
      "strictfp",
      "finally",
      "protected",
      "import",
      "native",
      "final",
      "void",
      "enum",
      "else",
      "break",
      "transient",
      "catch",
      "instanceof",
      "volatile",
      "case",
      "assert",
      "package",
      "default",
      "public",
      "try",
      "switch",
      "continue",
      "throws",
      "protected",
      "public",
      "private",
      "module",
      "requires",
      "exports",
      "do",
      "sealed",
      "yield",
      "permits"
    ];
    const BUILT_INS2 = [
      "super",
      "this"
    ];
    const LITERALS2 = [
      "false",
      "true",
      "null"
    ];
    const TYPES2 = [
      "char",
      "boolean",
      "long",
      "float",
      "int",
      "byte",
      "short",
      "double"
    ];
    const KEYWORDS2 = {
      keyword: MAIN_KEYWORDS,
      literal: LITERALS2,
      type: TYPES2,
      built_in: BUILT_INS2
    };
    const ANNOTATION = {
      className: "meta",
      begin: "@" + JAVA_IDENT_RE,
      contains: [
        {
          begin: /\(/,
          end: /\)/,
          contains: ["self"]
          // allow nested () inside our annotation
        }
      ]
    };
    const PARAMS = {
      className: "params",
      begin: /\(/,
      end: /\)/,
      keywords: KEYWORDS2,
      relevance: 0,
      contains: [hljs.C_BLOCK_COMMENT_MODE],
      endsParent: true
    };
    return {
      name: "Java",
      aliases: ["jsp"],
      keywords: KEYWORDS2,
      illegal: /<\/|#/,
      contains: [
        hljs.COMMENT(
          "/\\*\\*",
          "\\*/",
          {
            relevance: 0,
            contains: [
              {
                // eat up @'s in emails to prevent them to be recognized as doctags
                begin: /\w+@/,
                relevance: 0
              },
              {
                className: "doctag",
                begin: "@[A-Za-z]+"
              }
            ]
          }
        ),
        // relevance boost
        {
          begin: /import java\.[a-z]+\./,
          keywords: "import",
          relevance: 2
        },
        hljs.C_LINE_COMMENT_MODE,
        hljs.C_BLOCK_COMMENT_MODE,
        {
          begin: /"""/,
          end: /"""/,
          className: "string",
          contains: [hljs.BACKSLASH_ESCAPE]
        },
        hljs.APOS_STRING_MODE,
        hljs.QUOTE_STRING_MODE,
        {
          match: [
            /\b(?:class|interface|enum|extends|implements|new)/,
            /\s+/,
            JAVA_IDENT_RE
          ],
          className: {
            1: "keyword",
            3: "title.class"
          }
        },
        {
          // Exceptions for hyphenated keywords
          match: /non-sealed/,
          scope: "keyword"
        },
        {
          begin: [
            regex2.concat(/(?!else)/, JAVA_IDENT_RE),
            /\s+/,
            JAVA_IDENT_RE,
            /\s+/,
            /=(?!=)/
          ],
          className: {
            1: "type",
            3: "variable",
            5: "operator"
          }
        },
        {
          begin: [
            /record/,
            /\s+/,
            JAVA_IDENT_RE
          ],
          className: {
            1: "keyword",
            3: "title.class"
          },
          contains: [
            PARAMS,
            hljs.C_LINE_COMMENT_MODE,
            hljs.C_BLOCK_COMMENT_MODE
          ]
        },
        {
          // Expression keywords prevent 'keyword Name(...)' from being
          // recognized as a function definition
          beginKeywords: "new throw return else",
          relevance: 0
        },
        {
          begin: [
            "(?:" + GENERIC_IDENT_RE + "\\s+)",
            hljs.UNDERSCORE_IDENT_RE,
            /\s*(?=\()/
          ],
          className: { 2: "title.function" },
          keywords: KEYWORDS2,
          contains: [
            {
              className: "params",
              begin: /\(/,
              end: /\)/,
              keywords: KEYWORDS2,
              relevance: 0,
              contains: [
                ANNOTATION,
                hljs.APOS_STRING_MODE,
                hljs.QUOTE_STRING_MODE,
                NUMERIC$1,
                hljs.C_BLOCK_COMMENT_MODE
              ]
            },
            hljs.C_LINE_COMMENT_MODE,
            hljs.C_BLOCK_COMMENT_MODE
          ]
        },
        NUMERIC$1,
        ANNOTATION
      ]
    };
  }
  var decimalDigits = "[0-9](_*[0-9])*";
  var frac = `\\.(${decimalDigits})`;
  var hexDigits = "[0-9a-fA-F](_*[0-9a-fA-F])*";
  var NUMERIC = {
    className: "number",
    variants: [
      // DecimalFloatingPointLiteral
      // including ExponentPart
      { begin: `(\\b(${decimalDigits})((${frac})|\\.)?|(${frac}))[eE][+-]?(${decimalDigits})[fFdD]?\\b` },
      // excluding ExponentPart
      { begin: `\\b(${decimalDigits})((${frac})[fFdD]?\\b|\\.([fFdD]\\b)?)` },
      { begin: `(${frac})[fFdD]?\\b` },
      { begin: `\\b(${decimalDigits})[fFdD]\\b` },
      // HexadecimalFloatingPointLiteral
      { begin: `\\b0[xX]((${hexDigits})\\.?|(${hexDigits})?\\.(${hexDigits}))[pP][+-]?(${decimalDigits})[fFdD]?\\b` },
      // DecimalIntegerLiteral
      { begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b" },
      // HexIntegerLiteral
      { begin: `\\b0[xX](${hexDigits})[lL]?\\b` },
      // OctalIntegerLiteral
      { begin: "\\b0(_*[0-7])*[lL]?\\b" },
      // BinaryIntegerLiteral
      { begin: "\\b0[bB][01](_*[01])*[lL]?\\b" }
    ],
    relevance: 0
  };
  function kotlin(hljs) {
    const KEYWORDS2 = {
      keyword: "abstract as val var vararg get set class object open private protected public noinline crossinline dynamic final enum if else do while for when throw try catch finally import package is in fun override companion reified inline lateinit init interface annotation data sealed internal infix operator out by constructor super tailrec where const inner suspend typealias external expect actual",
      built_in: "Byte Short Char Int Long Boolean Float Double Void Unit Nothing",
      literal: "true false null"
    };
    const KEYWORDS_WITH_LABEL = {
      className: "keyword",
      begin: /\b(break|continue|return|this)\b/,
      starts: { contains: [
        {
          className: "symbol",
          begin: /@\w+/
        }
      ] }
    };
    const LABEL = {
      className: "symbol",
      begin: hljs.UNDERSCORE_IDENT_RE + "@"
    };
    const SUBST = {
      className: "subst",
      begin: /\$\{/,
      end: /\}/,
      contains: [hljs.C_NUMBER_MODE]
    };
    const VARIABLE = {
      className: "variable",
      begin: "\\$" + hljs.UNDERSCORE_IDENT_RE
    };
    const STRING = {
      className: "string",
      variants: [
        {
          begin: '"""',
          end: '"""(?=[^"])',
          contains: [
            VARIABLE,
            SUBST
          ]
        },
        // Can't use built-in modes easily, as we want to use STRING in the meta
        // context as 'meta-string' and there's no syntax to remove explicitly set
        // classNames in built-in modes.
        {
          begin: "'",
          end: "'",
          illegal: /\n/,
          contains: [hljs.BACKSLASH_ESCAPE]
        },
        {
          begin: '"',
          end: '"',
          illegal: /\n/,
          contains: [
            hljs.BACKSLASH_ESCAPE,
            VARIABLE,
            SUBST
          ]
        }
      ]
    };
    SUBST.contains.push(STRING);
    const ANNOTATION_USE_SITE = {
      className: "meta",
      begin: "@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*" + hljs.UNDERSCORE_IDENT_RE + ")?"
    };
    const ANNOTATION = {
      className: "meta",
      begin: "@" + hljs.UNDERSCORE_IDENT_RE,
      contains: [
        {
          begin: /\(/,
          end: /\)/,
          contains: [
            hljs.inherit(STRING, { className: "string" }),
            "self"
          ]
        }
      ]
    };
    const KOTLIN_NUMBER_MODE = NUMERIC;
    const KOTLIN_NESTED_COMMENT = hljs.COMMENT(
      "/\\*",
      "\\*/",
      { contains: [hljs.C_BLOCK_COMMENT_MODE] }
    );
    const KOTLIN_PAREN_TYPE = { variants: [
      {
        className: "type",
        begin: hljs.UNDERSCORE_IDENT_RE
      },
      {
        begin: /\(/,
        end: /\)/,
        contains: []
        // defined later
      }
    ] };
    const KOTLIN_PAREN_TYPE2 = KOTLIN_PAREN_TYPE;
    KOTLIN_PAREN_TYPE2.variants[1].contains = [KOTLIN_PAREN_TYPE];
    KOTLIN_PAREN_TYPE.variants[1].contains = [KOTLIN_PAREN_TYPE2];
    return {
      name: "Kotlin",
      aliases: [
        "kt",
        "kts"
      ],
      keywords: KEYWORDS2,
      contains: [
        hljs.COMMENT(
          "/\\*\\*",
          "\\*/",
          {
            relevance: 0,
            contains: [
              {
                className: "doctag",
                begin: "@[A-Za-z]+"
              }
            ]
          }
        ),
        hljs.C_LINE_COMMENT_MODE,
        KOTLIN_NESTED_COMMENT,
        KEYWORDS_WITH_LABEL,
        LABEL,
        ANNOTATION_USE_SITE,
        ANNOTATION,
        {
          className: "function",
          beginKeywords: "fun",
          end: "[(]|$",
          returnBegin: true,
          excludeEnd: true,
          keywords: KEYWORDS2,
          relevance: 5,
          contains: [
            {
              begin: hljs.UNDERSCORE_IDENT_RE + "\\s*\\(",
              returnBegin: true,
              relevance: 0,
              contains: [hljs.UNDERSCORE_TITLE_MODE]
            },
            {
              className: "type",
              begin: /</,
              end: />/,
              keywords: "reified",
              relevance: 0
            },
            {
              className: "params",
              begin: /\(/,
              end: /\)/,
              endsParent: true,
              keywords: KEYWORDS2,
              relevance: 0,
              contains: [
                {
                  begin: /:/,
                  end: /[=,\/]/,
                  endsWithParent: true,
                  contains: [
                    KOTLIN_PAREN_TYPE,
                    hljs.C_LINE_COMMENT_MODE,
                    KOTLIN_NESTED_COMMENT
                  ],
                  relevance: 0
                },
                hljs.C_LINE_COMMENT_MODE,
                KOTLIN_NESTED_COMMENT,
                ANNOTATION_USE_SITE,
                ANNOTATION,
                STRING,
                hljs.C_NUMBER_MODE
              ]
            },
            KOTLIN_NESTED_COMMENT
          ]
        },
        {
          begin: [
            /class|interface|trait/,
            /\s+/,
            hljs.UNDERSCORE_IDENT_RE
          ],
          beginScope: {
            3: "title.class"
          },
          keywords: "class interface trait",
          end: /[:\{(]|$/,
          excludeEnd: true,
          illegal: "extends implements",
          contains: [
            { beginKeywords: "public protected internal private constructor" },
            hljs.UNDERSCORE_TITLE_MODE,
            {
              className: "type",
              begin: /</,
              end: />/,
              excludeBegin: true,
              excludeEnd: true,
              relevance: 0
            },
            {
              className: "type",
              begin: /[,:]\s*/,
              end: /[<\(,){\s]|$/,
              excludeBegin: true,
              returnEnd: true
            },
            ANNOTATION_USE_SITE,
            ANNOTATION
          ]
        },
        STRING,
        {
          className: "meta",
          begin: "^#!/usr/bin/env",
          end: "$",
          illegal: "\n"
        },
        KOTLIN_NUMBER_MODE
      ]
    };
  }
  HighlightJS.registerLanguage("javascript", javascript);
  HighlightJS.registerLanguage("cpp", cpp);
  HighlightJS.registerLanguage("csharp", csharp);
  HighlightJS.registerLanguage("xml", xml);
  HighlightJS.registerLanguage("json", json);
  HighlightJS.registerLanguage("css", css);
  HighlightJS.registerLanguage("sql", sql);
  HighlightJS.registerLanguage("shell", shell);
  HighlightJS.registerLanguage("java", java);
  HighlightJS.registerLanguage("kotlin", kotlin);
  function CreateHighlight() {
    let md = new MarkdownIt({
      html: true,
      // 支持html
      xhtmlOut: false,
      // 支持‘/’闭合标签 <br/>
      breaks: true,
      // 段落中的'\n'转换为换行符
      linkify: false,
      // 自动将url地址转换为链接
      typographer: true,
      // 请用引号美化'‘’'
      quotes: "“”",
      highlight: function(str, lang2) {
        if (lang2 && HighlightJS.getLanguage(lang2)) {
          try {
            return '<pre class="hljs"><code>' + HighlightJS.highlight(lang2, str, true).value + "</code></pre>";
          } catch (__) {
          }
        }
        return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + "</code></pre>";
      }
    });
    md.use(light);
    md.use(markdownItContainer);
    md.use(markdownItContainer, "BeginEdit-left");
    md.use(markdownItContainer, "BeginEdit-center");
    md.use(markdownItContainer, "BeginEdit-right");
    return md;
  }
  class BeginningEdit {
    constructor(source2) {
      this.MkIt = CreateHighlight();
      this.Element = null;
      this.toolBarList = [];
      this.toolBar = [
        "html",
        "bold",
        "italic",
        // 斜体
        "underline",
        "quote-left",
        "emoji",
        "code",
        "header",
        "link",
        "alignment",
        "list",
        "picture",
        // 图片
        "video"
      ];
      this.Source = source2;
      this.Render = source2 && this.MkIt.render(source2);
    }
    get getRender() {
      return this.MkIt.render(this.getValue);
    }
    get getValue() {
      return this.Element.value;
    }
    set setValue(val) {
      this.Element.value = val;
    }
    // 判断是否最后一个字符
    get getLastLength() {
      let { end } = this.getSelectionIndex();
      if (this.getValue.length > end) {
        return false;
      } else {
        return true;
      }
    }
    // 获取toobar
    getToolbar() {
      this.toolBar.forEach((item) => {
        let component = vue.defineAsyncComponent(
          () => __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../components/Edit/alignment.vue": () => Promise.resolve().then(() => alignment), "../components/Edit/bold.vue": () => Promise.resolve().then(() => bold), "../components/Edit/code.vue": () => Promise.resolve().then(() => code), "../components/Edit/emoji.vue": () => Promise.resolve().then(() => emoji$1), "../components/Edit/header.vue": () => Promise.resolve().then(() => header), "../components/Edit/html.vue": () => Promise.resolve().then(() => html), "../components/Edit/italic.vue": () => Promise.resolve().then(() => italic), "../components/Edit/link.vue": () => Promise.resolve().then(() => link$1), "../components/Edit/list.vue": () => Promise.resolve().then(() => list), "../components/Edit/picture.vue": () => Promise.resolve().then(() => picture), "../components/Edit/quote-left.vue": () => Promise.resolve().then(() => quoteLeft), "../components/Edit/underline.vue": () => Promise.resolve().then(() => underline), "../components/Edit/video.vue": () => Promise.resolve().then(() => video) }), `../components/Edit/${item}.vue`)
        );
        this.toolBarList.push(component);
      });
      return this.toolBarList;
    }
    // 获取光标位置
    getSelectionIndex() {
      let start = this.Element.selectionStart;
      let end = this.Element.selectionEnd;
      let isSelection = false;
      if (start < end) {
        isSelection = true;
      }
      return {
        start,
        end,
        isSelection
      };
    }
    // 判断是否重复插入
    IsRepeat(front, behind, IsSlice = false) {
      let { start, end } = this.getSelectionIndex();
      let startIndex = start - front.length;
      let endIndex = end + behind.length;
      let FrontText = this.Slice(startIndex, start);
      let BehindText = this.Slice(end, endIndex);
      if (FrontText == front && BehindText == behind) {
        if (IsSlice) {
          let Front = this.Slice(0, startIndex);
          let Behind = this.Slice(endIndex);
          let center = this.Slice(start, end);
          this.setValue = `${Front}${center}${Behind}`;
          this.Element.selectionStart = `${Front}`.length;
          this.Element.selectionEnd = `${Front}${center}`.length;
        }
        return true;
      } else {
        return false;
      }
    }
    // 截取文本
    Slice(...arg) {
      return this.getValue.slice(...arg);
    }
    // 选中的文本前后插入
    aroundInsert(front, behind) {
      this.Element.focus();
      let { start, end } = this.getSelectionIndex();
      let frontText = this.Slice(0, start);
      let behindText = this.Slice(end);
      let centerText = this.Slice(start, end);
      if (this.IsRepeat(front, behind, true)) {
        return;
      }
      this.setValue = `${frontText}${front}${centerText}${behind}${behindText}`;
      this.Element.selectionStart = `${frontText}${front}`.length;
      this.Element.selectionEnd = `${frontText}${front}${centerText}`.length;
    }
    // 中心插入
    centreInsert(value, MoveSelectionIndexEnd = false) {
      this.Element.focus();
      let { start, end } = this.getSelectionIndex();
      let frontText = this.Slice(0, start);
      let behindText = this.Slice(end);
      let content = `${frontText}${value}${behindText}`;
      this.setValue = content;
      if (!MoveSelectionIndexEnd) {
        let totalLength = content.length - behindText.length - Math.floor(value.length / 2);
        this.Element.selectionEnd = totalLength;
      } else {
        this.Element.selectionEnd = frontText.length + value.length;
      }
    }
    // 插入图片
    insertImage(art = "alt属性", src = "图片链接") {
      this.Element.focus();
      let str = `![${art}](${src})`;
      if (this.getLastLength) {
        str = "\n" + str;
      }
      this.centreInsert(str);
    }
    delete(start, end) {
      this.Element.focus();
      let frontText = this.Slice(0, start);
      let behindText = this.Slice(end);
      let content = `${frontText}${behindText}`;
      this.setValue = content;
      this.Element.selectionEnd = content.length;
    }
    insert(value) {
      this.Element.focus();
      let { start, end } = this.getSelectionIndex();
      let frontText = this.Slice(0, start);
      let behindText = this.Slice(start, end);
      let content = `${frontText}${value}${behindText}`;
      this.setValue = content;
      this.Element.selectionEnd = `${frontText}${value}`.length;
    }
    // 在onMounted里面调用
    init(element) {
      this.Element = element;
      this.setValue = this.Source;
    }
  }
  const BeginEditConfig = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    BeginningEdit,
    CreateHighlight
  }, Symbol.toStringTag, { value: "Module" }));
  const MarkDownIcon = "";
  const BeginEdit_Style = "";
  const githubDarkDimmed = "";
  const githubMarkdown = "";
  const BeginEdit_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$5 = { class: "BeginEdit-Box" };
  const _hoisted_2$4 = { class: "BeginEdit-header" };
  const _hoisted_3$2 = { class: "BeginEditToolbar" };
  const _hoisted_4$1 = { class: "Begin-Toolbar-list" };
  const _hoisted_5 = { class: "BeginEdit-content" };
  const _hoisted_6 = ["onKeydown"];
  const _hoisted_7 = ["innerHTML"];
  const __default__$1 = {
    name: "BeginEdit"
  };
  const _sfc_main$e = /* @__PURE__ */ Object.assign(__default__$1, {
    props: ["Code", "Html"],
    emits: ["update:Code", "update:Html"],
    setup(__props, { expose, emit: emits }) {
      const props = __props;
      const BeginEditRenderShow = vue.ref(false);
      const BeginEditMarkValue = vue.ref(null);
      const ListToolbar = vue.shallowRef();
      const Mk = new BeginningEdit("");
      vue.provide("BeginEditTool", Mk);
      vue.provide("BeginEditRenderShow", BeginEditRenderShow);
      vue.onMounted(() => {
        Mk.init(BeginEditMarkValue.value);
        ListToolbar.value = Mk.getToolbar();
      });
      const value = vue.computed({
        get() {
          return props.Code;
        },
        set(value2) {
          emits("update:Code", value2);
          emits("update:Html", Mk.getRender);
        }
      });
      const ContentEnterEvent = (event) => {
        let { start, end } = Mk.getSelectionIndex();
        let frontText = Mk.Slice(0, start);
        let lineFeedIndex = frontText.split("\n").pop();
        if (lineFeedIndex.match(/^\s*(?:[0-9]+\.|-)\s+\S+/) != null) {
          let list2 = lineFeedIndex.match(/^\s*(?:[0-9]\.|-)\s/).shift();
          event.preventDefault();
          Mk.insert(`
${list2}`);
        } else {
          let EmptyLine = lineFeedIndex.match(/^\s*(?:[0-9]\.|-)\s/);
          if (EmptyLine != null) {
            event.preventDefault();
            Mk.delete(start - EmptyLine.shift().length, end);
          }
        }
      };
      expose({
        EditConfig: Mk,
        ListToolbar,
        BeginEditRenderShow
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$5, [
          vue.createElementVNode("div", _hoisted_2$4, [
            vue.createElementVNode("div", _hoisted_3$2, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(ListToolbar), (item) => {
                return vue.openBlock(), vue.createElementBlock("div", _hoisted_4$1, [
                  (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(item)))
                ]);
              }), 256))
            ])
          ]),
          vue.createElementVNode("div", _hoisted_5, [
            vue.withDirectives(vue.createElementVNode("textarea", {
              ref_key: "BeginEditMarkValue",
              ref: BeginEditMarkValue,
              class: "BeginEditMarkValue",
              placeholder: "请输入内容...",
              spellcheck: "false",
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.isRef(value) ? value.value = $event : null),
              onKeydown: vue.withKeys(ContentEnterEvent, ["enter"]),
              onKeyup: _cache[1] || (_cache[1] = vue.withKeys((...args) => _ctx.Click_Space && _ctx.Click_Space(...args), ["space"]))
            }, null, 40, _hoisted_6), [
              [vue.vModelText, vue.unref(value)]
            ]),
            BeginEditRenderShow.value ? (vue.openBlock(), vue.createElementBlock("div", {
              key: 0,
              class: "BeginEditRenderHtml5 markdown-body",
              innerHTML: __props.Html
            }, null, 8, _hoisted_7)) : vue.createCommentVNode("", true)
          ])
        ]);
      };
    }
  });
  const BeginEditToolBarItem_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$4 = ["title"];
  const __default__ = {
    name: "BeginEditToolBarItem",
    inheritAttrs: false
  };
  const _sfc_main$d = /* @__PURE__ */ Object.assign(__default__, {
    props: ["icon", "name", "isShowModal"],
    emits: ["titleClick", "update:isShowModal"],
    setup(__props, { emit: emits }) {
      const props = __props;
      const { isShowModal } = vue.toRefs(props);
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", vue.mergeProps({ class: "BeginToolBarItem" }, _ctx.$attrs), [
          vue.renderSlot(_ctx.$slots, "title", {}, () => [
            vue.createElementVNode("i", {
              title: __props.name,
              class: vue.normalizeClass(["MarkDownIcon", __props.icon]),
              onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("titleClick"))
            }, null, 10, _hoisted_1$4)
          ]),
          (vue.openBlock(), vue.createBlock(vue.Teleport, { to: "body" }, [
            vue.withDirectives(vue.createElementVNode("div", {
              class: "BeginToolShade",
              onClick: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("update:isShowModal", false))
            }, [
              vue.createElementVNode("div", {
                class: "BeginToolBarHover",
                onClick: _cache[1] || (_cache[1] = vue.withModifiers(() => {
                }, ["stop"]))
              }, [
                vue.renderSlot(_ctx.$slots, "content")
              ])
            ], 512), [
              [vue.vShow, vue.unref(isShowModal)]
            ])
          ]))
        ], 16);
      };
    }
  });
  const _sfc_main$c = {
    __name: "alignment",
    setup(__props) {
      const AlignList = ["::: BeginEdit-left", "::: BeginEdit-center", "::: BeginEdit-right"];
      const Mk = vue.inject("BeginEditTool");
      const Insert = (type) => {
        let typeStr = AlignList[type];
        let SelectionIndex = Mk.Element.selectionEnd;
        let previous = Mk.getValue.substring(SelectionIndex - 1, SelectionIndex);
        if (previous == "\n" || previous == "\r") {
          AlignList.forEach((i2) => {
            if (i2 != typeStr) {
              Mk.IsRepeat(`${i2}
`, "\n:::", true);
            }
          });
          Mk.aroundInsert(`${typeStr}
`, "\n:::");
        } else {
          AlignList.forEach((i2) => {
            if (i2 != typeStr) {
              Mk.IsRepeat(`
${i2}
`, "\n:::", true);
            }
          });
          Mk.aroundInsert(`
${typeStr}
`, `
:::`);
        }
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createBlock(_sfc_main$d, null, {
          title: vue.withCtx(() => [
            vue.createElementVNode("i", {
              class: "MarkDownIcon icon-zuoyouduiqi",
              onClick: _cache[0] || (_cache[0] = ($event) => Insert(0)),
              title: "靠左"
            }),
            vue.createElementVNode("i", {
              class: "MarkDownIcon icon-zuoyouduiqi",
              onClick: _cache[1] || (_cache[1] = ($event) => Insert(1)),
              title: "居中"
            }),
            vue.createElementVNode("i", {
              class: "MarkDownIcon icon-zuoyouduiqi",
              onClick: _cache[2] || (_cache[2] = ($event) => Insert(2)),
              title: "靠右"
            })
          ]),
          content: vue.withCtx(() => [
            vue.createTextVNode(" 鼠标悬浮后才会显示的内容 ")
          ]),
          _: 1
        });
      };
    }
  };
  const alignment = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    default: _sfc_main$c
  }, Symbol.toStringTag, { value: "Module" }));
  const bold_vue_vue_type_style_index_0_lang = "";
  const _sfc_main$b = {
    __name: "bold",
    setup(__props) {
      const Mk = vue.inject("BeginEditTool");
      const Bold = () => {
        Mk.aroundInsert("**", "**");
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createBlock(_sfc_main$d, {
          icon: "icon-jiacu",
          name: "粗体",
          onTitleClick: Bold
        }, {
          content: vue.withCtx(() => [
            vue.createTextVNode(" 鼠标悬浮后才会显示的内容 ")
          ]),
          _: 1
        });
      };
    }
  };
  const bold = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    default: _sfc_main$b
  }, Symbol.toStringTag, { value: "Module" }));
  const ItemList = "";
  const _hoisted_1$3 = { class: "BeginEdit_ItemList" };
  const _hoisted_2$3 = ["onClick"];
  const _sfc_main$a = {
    __name: "code",
    setup(__props) {
      const IsShow = vue.ref(false);
      const Mk = vue.inject("BeginEditTool");
      const SustainLanguages = vue.ref([...Languages.list]);
      const codeShow = () => {
        IsShow.value = !IsShow.value;
      };
      const insert = (item) => {
        IsShow.value = !IsShow.value;
        let SelectionIndex = Mk.Element.selectionEnd;
        let previous = Mk.getValue.substring(SelectionIndex - 1, SelectionIndex);
        if (previous == "\n" || previous == "\r") {
          SustainLanguages.value.forEach((i2) => {
            if (i2 != item) {
              Mk.IsRepeat(`\`\`\`${i2}
`, "\n```", true);
            }
          });
          Mk.aroundInsert(`\`\`\`${item}
`, "\n```");
        } else {
          SustainLanguages.value.forEach((i2) => {
            if (i2 != item) {
              Mk.IsRepeat(`
\`\`\`${i2}
`, "\n```", true);
            }
          });
          Mk.aroundInsert(`
\`\`\`${item}
`, "\n```");
        }
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createBlock(_sfc_main$d, {
          icon: "icon-daimawenjian",
          name: "代码块",
          isShowModal: IsShow.value,
          "onUpdate:isShowModal": _cache[0] || (_cache[0] = ($event) => IsShow.value = $event),
          onTitleClick: codeShow
        }, {
          content: vue.withCtx(() => [
            vue.createElementVNode("div", _hoisted_1$3, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(SustainLanguages.value, (item) => {
                return vue.openBlock(), vue.createElementBlock("div", {
                  class: "item",
                  onClick: ($event) => insert(item)
                }, vue.toDisplayString(item), 9, _hoisted_2$3);
              }), 256))
            ])
          ]),
          _: 1
        }, 8, ["isShowModal"]);
      };
    }
  };
  const code = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    default: _sfc_main$a
  }, Symbol.toStringTag, { value: "Module" }));
  const emoji_vue_vue_type_style_index_0_scoped_3b9c2e68_lang = "";
  const _export_sfc = (sfc, props) => {
    const target2 = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target2[key] = val;
    }
    return target2;
  };
  const _withScopeId$1 = (n) => (vue.pushScopeId("data-v-3b9c2e68"), n = n(), vue.popScopeId(), n);
  const _hoisted_1$2 = { class: "container" };
  const _hoisted_2$2 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ vue.createElementVNode("span", { class: "title" }, "表情", -1));
  const _hoisted_3$1 = { class: "emoji" };
  const _hoisted_4 = ["onClick"];
  const _sfc_main$9 = {
    __name: "emoji",
    setup(__props) {
      const IsShow = vue.ref(false);
      const EmojiList = vue.ref([]);
      const Mk = vue.inject("BeginEditTool");
      const Emoji = () => {
        IsShow.value = !IsShow.value;
        if (EmojiList.value.length <= 0)
          for (let item in emoji$2) {
            EmojiList.value.push(emoji$2[item]);
          }
      };
      const Selector = (item) => {
        IsShow.value = !IsShow.value;
        Mk.centreInsert(item, true);
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createBlock(_sfc_main$d, {
          icon: "icon-emoji",
          name: "表情",
          "is-show-modal": IsShow.value,
          "onUpdate:isShowModal": _cache[0] || (_cache[0] = ($event) => IsShow.value = $event),
          onTitleClick: Emoji
        }, {
          content: vue.withCtx(() => [
            vue.createElementVNode("div", _hoisted_1$2, [
              _hoisted_2$2,
              vue.createElementVNode("div", _hoisted_3$1, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(EmojiList.value, (item) => {
                  return vue.openBlock(), vue.createElementBlock("div", {
                    class: "emojiItem",
                    onClick: ($event) => Selector(item)
                  }, vue.toDisplayString(item), 9, _hoisted_4);
                }), 256))
              ])
            ])
          ]),
          _: 1
        }, 8, ["is-show-modal"]);
      };
    }
  };
  const emoji = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-3b9c2e68"]]);
  const emoji$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    default: emoji
  }, Symbol.toStringTag, { value: "Module" }));
  const _hoisted_1$1 = { class: "BeginEdit_ItemList" };
  const _hoisted_2$1 = ["onClick"];
  const _sfc_main$8 = {
    __name: "header",
    setup(__props) {
      const IsShow = vue.ref(false);
      const Mk = vue.inject("BeginEditTool");
      const HeaderList = vue.ref([
        { title: "H1", value: "# " },
        { title: "H2", value: "## " },
        { title: "H3", value: "### " },
        { title: "H4", value: "#### " },
        { title: "H5", value: "##### " },
        { title: "H6", value: "###### " }
      ]);
      const Show = () => {
        IsShow.value = !IsShow.value;
      };
      const insert = (item) => {
        IsShow.value = !IsShow.value;
        Mk.insert(`${item}`);
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createBlock(_sfc_main$d, {
          icon: "icon-zitidaxiao",
          name: "标题",
          isShowModal: IsShow.value,
          "onUpdate:isShowModal": _cache[0] || (_cache[0] = ($event) => IsShow.value = $event),
          onTitleClick: Show
        }, {
          content: vue.withCtx(() => [
            vue.createElementVNode("div", _hoisted_1$1, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(HeaderList.value, (item) => {
                return vue.openBlock(), vue.createElementBlock("div", {
                  class: "item",
                  onClick: ($event) => insert(item.value)
                }, vue.toDisplayString(item.title), 9, _hoisted_2$1);
              }), 256))
            ])
          ]),
          _: 1
        }, 8, ["isShowModal"]);
      };
    }
  };
  const header = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    default: _sfc_main$8
  }, Symbol.toStringTag, { value: "Module" }));
  const html_vue_vue_type_style_index_0_lang = "";
  const _sfc_main$7 = {
    __name: "html",
    setup(__props) {
      vue.inject("BeginEditTool");
      const ShowCode = vue.inject("BeginEditRenderShow");
      const Show = () => {
        ShowCode.value = !ShowCode.value;
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createBlock(_sfc_main$d, {
          icon: "icon-html",
          name: "HTML源代码",
          onTitleClick: Show
        });
      };
    }
  };
  const html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    default: _sfc_main$7
  }, Symbol.toStringTag, { value: "Module" }));
  const italic_vue_vue_type_style_index_0_lang = "";
  const _sfc_main$6 = {
    __name: "italic",
    setup(__props) {
      const Mk = vue.inject("BeginEditTool");
      const italic2 = () => {
        Mk.aroundInsert("*", "*");
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createBlock(_sfc_main$d, {
          icon: "icon-zitixieti",
          name: "斜体",
          onTitleClick: italic2
        }, {
          content: vue.withCtx(() => [
            vue.createTextVNode(" 鼠标悬浮后才会显示的内容 ")
          ]),
          _: 1
        });
      };
    }
  };
  const italic = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    default: _sfc_main$6
  }, Symbol.toStringTag, { value: "Module" }));
  const input = "";
  const button = "";
  const link_vue_vue_type_style_index_0_scoped_713a012b_lang = "";
  const _withScopeId = (n) => (vue.pushScopeId("data-v-713a012b"), n = n(), vue.popScopeId(), n);
  const _hoisted_1 = { class: "linkInput" };
  const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("span", null, "链接地址", -1));
  const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("span", null, "链接的描述内容（可为空）", -1));
  const _sfc_main$5 = {
    __name: "link",
    setup(__props) {
      const Link = vue.ref("");
      const Describe = vue.ref("");
      const isShow = vue.ref(false);
      const InputNull = vue.ref(false);
      const Mk = vue.inject("BeginEditTool");
      const linkBar = () => {
        isShow.value = !isShow.value;
      };
      const addLink = () => {
        if (Link.value.length <= 0) {
          InputNull.value = true;
          setTimeout(() => {
            InputNull.value = false;
          }, 300);
          return;
        }
        if (Describe.value == "" || Describe.value === void 0) {
          Describe.value = Link.value;
        }
        let str = `[${Describe.value}](${Link.value})`;
        Mk.centreInsert(str, true);
        isShow.value = !isShow.value;
        Link.value = "";
        Describe.value = "";
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createBlock(_sfc_main$d, {
          icon: "icon-lianjie",
          name: "链接",
          "is-show-modal": isShow.value,
          "onUpdate:isShowModal": _cache[2] || (_cache[2] = ($event) => isShow.value = $event),
          onTitleClick: linkBar
        }, {
          content: vue.withCtx(() => [
            vue.createElementVNode("div", _hoisted_1, [
              _hoisted_2,
              vue.withDirectives(vue.createElementVNode("input", {
                class: vue.normalizeClass(InputNull.value ? "error" : ""),
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => Link.value = $event),
                placeholder: "请输入链接",
                type: "text"
              }, null, 2), [
                [vue.vModelText, Link.value]
              ]),
              _hoisted_3,
              vue.withDirectives(vue.createElementVNode("input", {
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => Describe.value = $event),
                type: "text",
                placeholder: "请输入内容"
              }, null, 512), [
                [vue.vModelText, Describe.value]
              ]),
              vue.createElementVNode("button", {
                type: "button",
                onClick: addLink
              }, "添加")
            ])
          ]),
          _: 1
        }, 8, ["is-show-modal"]);
      };
    }
  };
  const link = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-713a012b"]]);
  const link$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    default: link
  }, Symbol.toStringTag, { value: "Module" }));
  const _sfc_main$4 = {
    __name: "list",
    setup(__props) {
      const IsShow = vue.ref(false);
      const Mk = vue.inject("BeginEditTool");
      const Insert = (item) => {
        IsShow.value = !IsShow.value;
        if (Mk.IsRepeat(item, "", true) == false) {
          Mk.insert(`${item}`);
        }
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createBlock(_sfc_main$d, null, {
          title: vue.withCtx(() => [
            vue.createElementVNode("i", {
              class: "MarkDownIcon icon-liebiao",
              onClick: _cache[0] || (_cache[0] = ($event) => Insert("- ")),
              title: "无序列表"
            }),
            vue.createElementVNode("i", {
              class: "MarkDownIcon icon-youxuliebiao",
              onClick: _cache[1] || (_cache[1] = ($event) => Insert("1. ")),
              title: "无序列表"
            })
          ]),
          _: 1
        });
      };
    }
  };
  const list = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    default: _sfc_main$4
  }, Symbol.toStringTag, { value: "Module" }));
  const picture_vue_vue_type_style_index_0_lang = "";
  const _sfc_main$3 = {
    __name: "picture",
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createBlock(_sfc_main$d, {
          icon: "icon-tupian",
          name: "图片"
        }, {
          content: vue.withCtx(() => [
            vue.createTextVNode(" 鼠标悬浮后才会显示的内容 ")
          ]),
          _: 1
        });
      };
    }
  };
  const picture = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    default: _sfc_main$3
  }, Symbol.toStringTag, { value: "Module" }));
  const _sfc_main$2 = {
    __name: "quote-left",
    setup(__props) {
      const Mk = vue.inject("BeginEditTool");
      const quote = () => {
        if (Mk.getSelectionIndex().isSelection) {
          Mk.aroundInsert("`", "`");
          return;
        }
        let SelectionIndex = Mk.Element.selectionEnd;
        let previous = Mk.getValue.substring(SelectionIndex - 1, SelectionIndex);
        if (previous == "\n" || previous == "\r") {
          Mk.centreInsert("> ", true);
        } else {
          Mk.centreInsert("\n> ", true);
        }
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createBlock(_sfc_main$d, {
          icon: "icon-quote",
          name: "引用",
          onTitleClick: quote
        });
      };
    }
  };
  const quoteLeft = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    default: _sfc_main$2
  }, Symbol.toStringTag, { value: "Module" }));
  const _sfc_main$1 = {
    __name: "underline",
    setup(__props) {
      const Mk = vue.inject("BeginEditTool");
      const underline2 = () => {
        Mk.aroundInsert("~~", "~~");
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createBlock(_sfc_main$d, {
          icon: "icon-zitixiahuaxian",
          name: "下划线",
          onTitleClick: underline2
        });
      };
    }
  };
  const underline = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    default: _sfc_main$1
  }, Symbol.toStringTag, { value: "Module" }));
  const video_vue_vue_type_style_index_0_lang = "";
  const _sfc_main = {
    __name: "video",
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createBlock(_sfc_main$d, {
          icon: "icon-shipin",
          name: "视频"
        }, {
          content: vue.withCtx(() => [
            vue.createTextVNode(" 鼠标悬浮后才会显示的内容 ")
          ]),
          _: 1
        });
      };
    }
  };
  const video = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    default: _sfc_main
  }, Symbol.toStringTag, { value: "Module" }));
  exports2.BeginEdit = _sfc_main$e;
  exports2.BeginEditConfig = BeginEditConfig;
  exports2.BeginEditToolBarItem = _sfc_main$d;
  exports2.SustainLanguages = Languages;
  Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
});
