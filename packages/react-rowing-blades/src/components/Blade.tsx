import * as React from "react";
import type { ClubCode } from "../utils";

const WIDTH = 500;
const HEIGHT = 230;

export type BladeProps = {
  className?: string;
  club: ClubCode;
  flip?: boolean;
  /** Picks the men's or women's design for a club that has both. Other clubs ignore it. */
  gender?: "men" | "women";
  size?: number;
};

export const Blade = React.forwardRef<SVGSVGElement, BladeProps>(
  ({ className, club, flip = false, gender, size }, ref) => {
    let decal: React.JSX.Element | null;
    let fill: string;

    switch (club) {
      case "abd":
        decal = abd;
        fill = "#281078";
        break;
      case "abn":
        decal = abn;
        fill = "#003c10";
        break;
      case "abs":
        decal = abs;
        fill = "#cc0066";
        break;
      case "abv":
        decal = abv;
        fill = "#231F20";
        break;
      case "ad":
        decal = ad;
        fill = "#0f1d4b";
        break;
      case "adl":
        decal = adl;
        fill = "#202020";
        break;
      case "adr":
        decal = adr;
        fill = "#ffffff";
        break;
      case "aen":
        decal = aen;
        fill = "#f2f2f2";
        break;
      case "age":
        decal = age;
        fill = "#AB0A19";
        break;
      case "akn":
        decal = akn;
        fill = "#008620";
        break;
      case "ali":
        decal = ali;
        fill = "#fcfcfc";
        break;
      case "amp":
        decal = amp;
        fill = "#000000";
        break;
      case "arg":
        decal = arg;
        fill = "none";
        break;
      case "arp":
        decal = arp;
        fill = "#ffffff";
        break;
      case "aru":
        decal = aru;
        fill = "#000000";
        break;
      case "aus":
        decal = aus;
        fill = "#f0f0f0";
        break;
      case "aut":
        decal = aut;
        fill = "#ff0000";
        break;
      case "avn":
        decal = avn;
        fill = "#202020";
        break;
      case "azs":
        decal = azs;
        fill = "#ffffff";
        break;
      case "bal":
        decal = bal;
        fill = "#000000";
        break;
      case "ban":
        decal = ban;
        fill = "none";
        break;
      case "bau":
        decal = bau;
        fill = "#00214E";
        break;
      case "bbl":
        decal = bbl;
        fill = "#1667F6";
        break;
      case "bcl":
        decal = bcl;
        fill = "#ffffff";
        break;
      case "bed":
        decal = bed;
        fill = "#8e0000";
        break;
      case "bel":
        decal = bel;
        fill = "#202020";
        break;
      case "ber":
        decal = ber;
        fill = "#000077";
        break;
      case "bgs":
        decal = bgs;
        fill = "#fafafa";
        break;
      case "bir":
        decal = bir;
        fill = "#d40000";
        break;
      case "bmc":
        decal = bmc;
        fill = "#F7DB17";
        break;
      case "bms":
        decal = bms;
        fill = "#202020";
        break;
      case "bou":
        decal = bou;
        fill = "#f0f0f0";
        break;
      case "bra":
        decal = bra;
        fill = "#F5F5F5";
        break;
      case "brc":
        decal = null;
        fill = "#202020";
        break;
      case "brd":
        decal = brd;
        fill = "#00214E";
        break;
      case "brn":
        decal = brn;
        fill = "#441100";
        break;
      case "bru":
        decal = bru;
        fill = "#f0f0f0";
        break;
      case "buc":
        decal = buc;
        fill = "#ffffff";
        break;
      case "bul":
        decal = bul;
        fill = "#d62612";
        break;
      case "bwy":
        decal = bwy;
        fill = "#000031";
        break;
      case "cab":
        decal = cab;
        fill = "#000033";
        break;
      case "cai":
        decal = cai;
        fill = "#202020";
        break;
      case "cal":
        decal = cal;
        fill = "#101177";
        break;
      case "cam":
        decal = cam;
        fill = "#13294b";
        break;
      case "can":
        decal = can;
        fill = "#ff0000";
        break;
      case "cbr":
        decal = cbr;
        fill = "#ffffff";
        break;
      case "cbs":
        decal = cbs;
        fill = "#008001";
        break;
      case "cco":
        decal = cco;
        fill = "#00214E";
        break;
      case "cfd":
        decal = cfd;
        fill = "#f9f9f9";
        break;
      case "cha":
        decal = null;
        fill = "#fc6621";
        break;
      case "cfu":
        decal = cfu;
        fill = "#202020";
        break;
      case "chb":
        decal = null;
        fill = "#000065";
        break;
      case "chu":
        decal = null;
        fill = "#FF70A0";
        break;
      case "cla":
        decal = null;
        fill = "#FFCC00";
        break;
      case "clg":
        decal = clg;
        fill = "#800000";
        break;
      case "clh":
        decal = clh;
        fill = "#FFCC00";
        break;
      case "clm":
        decal = clm;
        fill = "#ffffff";
        break;
      case "cls":
        decal = cls;
        fill = "#1909AF";
        break;
      case "clu":
        decal = clu;
        fill = "#d3d3d3";
        break;
      case "cly":
        decal = cly;
        fill = "#00006c";
        break;
      case "cnn":
        decal = cnn;
        fill = "#599bfc";
        break;
      case "cns":
        decal = cns;
        fill = "#ffffff";
        break;
      case "col":
        decal = col;
        fill = "#202020";
        break;
      case "coo":
        decal = coo;
        fill = "#000040";
        break;
      case "cor":
        decal = cor;
        fill = "#8d0603";
        break;
      case "cox":
        decal = cox;
        fill = "#003366";
        break;
      case "crc":
        decal = crc;
        fill = "#ffffff";
        break;
      case "cre":
        decal = cre;
        fill = "#ffffff";
        break;
      case "crn":
        decal = crn;
        fill = "#F0F0F0";
        break;
      case "cro":
        decal = cro;
        fill = "#f2f2f2";
        break;
      case "cua":
        decal = cua;
        fill = "#C72B1F";
        break;
      case "cub":
        decal = null;
        fill = "#A6D6BC";
        break;
      case "cza":
        decal = cza;
        fill = "#ffffff";
        break;
      case "daw":
        decal = daw;
        fill = "#000080";
        break;
      case "den":
        decal = den;
        fill = "#f2f2f2";
        break;
      case "det":
        decal = det;
        fill = "#ab0a19";
        break;
      case "dmt":
        decal = dmt;
        fill = "#006600";
        break;
      case "dol":
        decal = null;
        fill = "rgb(38,126,196)";
        break;
      case "dow":
        decal = null;
        fill = "#AB0F62";
        break;
      case "dph":
        decal = dph;
        fill = "#0066CC";
        break;
      case "dub":
        decal = null;
        fill = "#B786DF";
        break;
      case "dul":
        decal = dul;
        fill = "#4169E1";
        break;
      case "dur":
        decal = dur;
        fill = "#000044";
        break;
      case "dus":
        decal = dus;
        fill = "#F5F5F5";
        break;
      case "edu":
        decal = edu;
        fill = "#9BE5FF";
        break;
      case "eex":
        decal = eex;
        fill = "#002163";
        break;
      case "ema":
        decal = ema;
        fill = "#121358";
        break;
      case "emm":
        decal = emm;
        fill = "#000077";
        break;
      case "esp":
        decal = esp;
        fill = "#db000d";
        break;
      case "est":
        decal = est;
        fill = "#3a75c4";
        break;
      case "etn":
        decal = null;
        fill = "#B7E1E4";
        break;
      case "eur":
        decal = eur;
        fill = "#ffffff";
        break;
      case "eve":
        decal = eve;
        fill = "#002163";
        break;
      case "exc":
        decal = null;
        fill = "#DF0000";
        break;
      case "fal":
        decal = fal;
        fill = "#92c7bd";
        break;
      case "fam":
        decal = fam;
        fill = "#00407A";
        break;
      case "fit":
        decal = null;
        fill = "lightgray";
        break;
      case "frb":
        decal = frb;
        fill = "#9b9b9b";
        break;
      case "ftt":
        decal = null;
        fill = "#000044";
        break;
      case "fra":
        decal = fra;
        fill = "#0c1c8c";
        break;
      case "gbr":
        decal = gbr;
        fill = "#f0f0f0";
        break;
      case "geo":
        decal = geo;
        fill = "#B3B3B3";
        break;
      case "ger":
        decal = ger;
        fill = "#202020";
        break;
      case "gfb":
        decal = gfb;
        fill = "#ffffff";
        break;
      case "gir":
        decal = gir;
        fill = "#004600";
        break;
      case "gkp":
        decal = gkp;
        fill = "#ffffff";
        break;
      case "glo":
        decal = glo;
        fill = "#001535";
        break;
      case "gls":
        decal = gls;
        fill = "#000000";
        break;
      case "glw":
        decal = glw;
        fill = "#ff0022";
        break;
      case "gms":
        decal = gms;
        fill = "#000000";
        break;
      case "gol":
        decal = gol;
        fill = "#1a1a1a";
        break;
      case "gre":
        decal = gre;
        fill = "#101f8a";
        break;
      case "grm":
        decal = grm;
        fill = "#ffffff";
        break;
      case "grv":
        decal = grv;
        fill = "#000040";
        break;
      case "gry":
        decal = gry;
        fill = "#d40000";
        break;
      case "gsc":
        decal = gsc;
        fill = "#d40000";
        break;
      case "gtm":
        decal = gtm;
        fill = "#000032";
        break;
      case "gua":
        decal = gua;
        fill = "none";
        break;
      case "gub":
        decal = gub;
        fill = "#202020";
        break;
      case "gui":
        decal = gui;
        fill = "#136f32";
        break;
      case "gwc":
        decal = gwc;
        fill = "#f9f9f9";
        break;
      case "gzb":
        decal = gzb;
        fill = "rgb(38,126,196)";
        break;
      case "hat":
        decal = hat;
        fill = "#000044";
        break;
      case "hec":
        decal = hec;
        fill = "#8E0000";
        break;
      case "hel":
        decal = hel;
        fill = "#3475ec";
        break;
      case "hen":
        decal = null;
        fill = "#000044";
        break;
      case "hex":
        decal = hex;
        fill = "#FFCC00";
        break;
      case "hib":
        decal = hib;
        fill = "#D8E4F2";
        break;
      case "hks":
        decal = hks;
        fill = "#990000";
        break;
      case "hom":
        decal = hom;
        fill = "#f9f9f9";
        break;
      case "hon":
        decal = null;
        fill = "#2dcc26";
        break;
      case "hrv":
        decal = hrv;
        fill = "#990000";
        break;
      case "hsb":
        decal = hsb;
        fill = "#DD0000";
        break;
      case "huh":
        decal = huh;
        fill = "#ffffff";
        break;
      case "hul":
        decal = hul;
        fill = "#121252";
        break;
      case "icm":
        decal = icm;
        fill = "#002163";
        break;
      case "iel":
        decal = iel;
        fill = "#ffffff";
        break;
      case "imp":
        decal = imp;
        fill = "#101010";
        break;
      case "irl":
        decal = null;
        fill = "#018000";
        break;
      case "isa":
        decal = isa;
        fill = "#9a239f";
        break;
      case "ist":
        decal = ist;
        fill = "#00a2e8";
        break;
      case "ita":
        decal = ita;
        fill = "#008d46";
        break;
      case "jbc":
        decal = jbc;
        fill = "#A53139";
        break;
      case "jec":
        decal = jec;
        fill = "#000000";
        break;
      case "jeo":
        decal = null;
        fill = "#009C3A";
        break;
      case "jsn":
        decal = jsn;
        fill = "#ffffff";
        break;
      case "juv":
        decal = juv;
        fill = "#ffffff";
        break;
      case "jwu":
        decal = jwu;
        fill = "#ffffff";
        break;
      case "kal":
        decal = kal;
        fill = "#ffffff";
        break;
      case "kcb":
        decal = null;
        fill = "purple";
        break;
      case "kcs":
        decal = kcs;
        fill = "#000066";
        break;
      case "keb":
        decal = keb;
        fill = "#F9F9F9";
        break;
      case "keo":
        decal = keo;
        fill = "#001e62";
        break;
      case "kgs":
        decal = kgs;
        fill = "#E0002A";
        break;
      case "kgu":
        decal = kgu;
        fill = "#2b97ff";
        break;
      case "kgv":
        decal = kgv;
        fill = "#D43232";
        break;
      case "kin":
        decal = null;
        fill = "#9b2423";
        break;
      case "kkw":
        decal = kkw;
        fill = "#ffffff";
        break;
      case "kon":
        decal = kon;
        fill = "#ffffff";
        break;
      case "krs":
        decal = krs;
        fill = "#75AADB";
        break;
      case "kuj":
        decal = kuj;
        fill = "#ffffff";
        break;
      case "kwl":
        decal = kwl;
        fill = "#009A3E";
        break;
      case "lan":
        decal = lan;
        fill = "#000000";
        break;
      case "lcc":
        decal = lcc;
        fill = "#136bfb";
        break;
      case "lcl":
        decal = lcl;
        fill = "#000000";
        break;
      case "ldr":
        decal = null;
        fill = "#ffc6cf";
        break;
      case "ldu":
        decal = ldu;
        fill = "#F0F0F0";
        break;
      case "lee":
        decal = lee;
        fill = "#000080";
        break;
      case "leh":
        decal = leh;
        fill = "#ffffff";
        break;
      case "lei":
        decal = lei;
        fill = "#660000";
        break;
      case "lgt":
        decal = lgt;
        fill = "#f0f0f0";
        break;
      case "lic":
        decal = lic;
        fill = "#000032";
        break;
      case "lin":
        decal = lin;
        fill = "#ffcc00";
        break;
      case "liv":
        decal = liv;
        fill = "#f0f0f0";
        break;
      case "lmb":
        decal = null;
        fill = "#DC0000";
        break;
      case "lmh":
        decal = lmh;
        fill = "#000032";
        break;
      case "lnc":
        decal = lnc;
        fill = "#FFFFFF";
        break;
      case "lon":
        decal = lon;
        fill = "#f0f0f0";
        break;
      case "lse":
        decal = lse;
        fill = "#1a1a1a";
        break;
      case "ltw":
        decal = ltw;
        fill = "rgb(203,34,22)";
        break;
      case "mag":
        decal = mag;
        fill = "#151515";
        break;
      case "man":
        decal = man;
        fill = "#d40000";
        break;
      case "mar":
        decal = mar;
        fill = "#ffffff";
        break;
      case "mau":
        decal = mau;
        fill = "#844C82";
        break;
      case "mcg":
        decal = mcg;
        fill = "#990000";
        break;
      case "mcs":
        decal = mcs;
        fill = "#122542";
        break;
      case "mdl":
        decal = mdl;
        fill = "#1f46e4";
        break;
      case "mec":
        decal = null;
        fill = "#F5F5F5";
        break;
      case "mer":
        decal = mer;
        fill = "#ffffff";
        break;
      case "mgd":
        decal = mgd;
        fill = "#765d94";
        break;
      case "mio":
        decal = mio;
        fill = "none";
        break;
      case "mit":
        decal = mit;
        fill = "#F5F5F5";
        break;
      case "mtw":
        decal = mtw;
        fill = "#ffffff";
        break;
      case "ncl":
        decal = ncl;
        fill = "#F5F5F5";
        break;
      case "nec":
        decal = nec;
        fill = "#800080";
        break;
      case "ned":
        decal = ned;
        fill = "#AE1C28";
        break;
      case "nhr":
        decal = nhr;
        fill = "#f0f0f0";
        break;
      case "nmb":
        decal = nmb;
        fill = "#101010";
        break;
      case "npk":
        decal = npk;
        fill = "#ffffff";
        break;
      case "nws":
        decal = nws;
        fill = "#2E2C73";
        break;
      case "nzl":
        decal = nzl;
        fill = "#202020";
        break;
      case "nnm":
        decal = nnm;
        fill = "#000066";
        break;
      case "nor":
        decal = nor;
        fill = "#ef2b2d";
        break;
      case "oli":
        decal = oli;
        fill = "#ffffff";
        break;
      case "ori":
        decal = null;
        fill = "#eded15";
        break;
      case "oro":
        decal = oro;
        fill = "#002163";
        break;
      case "oub":
        decal = null;
        fill = "#002163";
        break;
      case "oxb":
        decal = oxb;
        fill = "#003380";
        break;
      case "pac":
        decal = null;
        fill = "#AE1634";
        break;
      case "pai":
        decal = pai;
        fill = "#FFCC33";
        break;
      case "pbc":
        decal = pbc;
        fill = "#0000CC";
        break;
      case "pcb":
        decal = pcb;
        fill = "#011F5B";
        break;
      case "pem":
        decal = pem;
        fill = "#AAF0FF";
        break;
      case "pet":
        decal = pet;
        fill = "#071cd0";
        break;
      case "pgb":
        decal = pgb;
        fill = "#e5e5e5";
        break;
      case "pkw":
        decal = pkw;
        fill = "rgb(229,185,90)";
        break;
      case "plu":
        decal = plu;
        fill = "#FFCC00";
        break;
      case "pmb":
        decal = pmb;
        fill = "#F0F0F0";
        break;
      case "pol":
        decal = pol;
        fill = "#F2F2F2";
        break;
      case "prd":
        decal = prd;
        fill = "#ffffff";
        break;
      case "pri":
        decal = pri;
        fill = "#000000";
        break;
      case "put":
        decal = put;
        fill = "#000033";
        break;
      case "qcc":
        decal = qcc;
        fill = "darkgreen";
        break;
      case "qco":
        decal = qco;
        fill = "#000066";
        break;
      case "qmu":
        decal = qmu;
        fill = "#002163";
        break;
      case "rcl":
        decal = rcl;
        fill = "none";
        break;
      case "rcm":
        decal = rcm;
        fill = "#152865";
        break;
      case "rdu":
        decal = rdu;
        fill = "#f0f0f0";
        break;
      case "rej":
        decal = rej;
        fill = "#ffffff";
        break;
      case "reu":
        decal = reu;
        fill = "#f9f9f9";
        break;
      case "rho":
        decal = rho;
        fill = "#005500";
        break;
      case "rnt":
        decal = rnt;
        fill = "#c13729";
        break;
      case "rob":
        decal = rob;
        fill = "#7e0308";
        break;
      case "roc":
        decal = roc;
        fill = "#0099FF";
        break;
      case "rou":
        decal = rou;
        fill = "#0045e6";
        break;
      case "rpc":
        decal = rpc;
        fill = "#EE0000";
        break;
      case "rsa":
        decal = rsa;
        fill = "#ff0000";
        break;
      case "rus":
        decal = rus;
        fill = "#f9f9f9";
        break;
      case "sac":
        decal = sac;
        fill = "#B20000";
        break;
      case "sai":
        decal = sai;
        fill = "#1B3E32";
        break;
      case "say":
        decal = say;
        fill = "#d40000";
        break;
      case "sbh":
        decal = sbh;
        fill = "#f9f9f9";
        break;
      case "scc":
        decal = scc;
        fill = "#780025";
        break;
      case "sch":
        decal = sch;
        fill = "#054703";
        break;
      case "sco":
        decal = sco;
        fill = "#8cf";
        break;
      case "scu":
        decal = scu;
        fill = "#054703";
        break;
      case "sec":
        decal = ed;
        fill = "#0063cb";
        break;
      case "seh":
        decal = seh;
        fill = "#f0dc82";
        break;
      case "sel":
        decal = sel;
        fill = "#F5F5F5";
        break;
      case "ser":
        decal = ser;
        fill = "none";
        break;
      case "sgh":
        decal = sgh;
        fill = "#ffffff";
        break;
      case "shg":
        decal = shg;
        fill = "#010066";
        break;
      case "shi":
        decal = shi;
        fill = "#f9f9f9";
        break;
      case "shr":
        decal = shr;
        fill = "#040643";
        break;
      case "shs":
        decal = shs;
        fill = "#f5f5f5";
        break;
      case "sid":
        decal = sid;
        fill = "#000066";
        break;
      case "sjd":
        decal = null;
        fill = "#172F55";
        break;
      case "sjo":
        decal = sjo;
        fill = "#002163";
        break;
      case "skr":
        decal = skr;
        fill = "#ffffff";
        break;
      case "sls":
        decal = sls;
        fill = "#ffffff";
        break;
      case "smd":
        decal = null;
        fill = "#7755AA";
        break;
      case "smm":
        decal = smm;
        fill = "#ffffff";
        break;
      case "sne":
        decal = sne;
        fill = "#00AEEF";
        break;
      case "som":
        decal = som;
        fill = "#EE0000";
        break;
      case "sou":
        decal = sou;
        fill = "#ffffff";
        break;
      case "spc":
        decal = spc;
        fill = "#FFFFFF";
        break;
      case "son":
        decal = son;
        fill = "#f0f0f0";
        break;
      case "sps":
        decal = sps;
        fill = "#FFFFFF";
        break;
      case "srg":
        decal = srg;
        fill = "#FF0000";
        break;
      case "sta":
        decal = null;
        fill = "#336633";
        break;
      case "stc":
        decal = stc;
        fill = "#ffffff";
        break;
      case "stp":
        decal = stp;
        fill = "#a6d6bc";
        break;
      case "sud":
        decal = sud;
        fill = "none";
        break;
      case "sui":
        decal = sui;
        fill = "#d81e05";
        break;
      case "swa":
        decal = swa;
        fill = "#ffffff";
        break;
      case "swp":
        decal = swp;
        fill = "#00184a";
        break;
      case "syd":
        decal = syd;
        fill = "#2A7FFF";
        break;
      case "syr":
        decal = syr;
        fill = "#ffffff";
        break;
      case "syu":
        decal = syu;
        fill = "#EB6D21";
        break;
      case "tal":
        decal = tal;
        fill = "#980000";
        break;
      case "tcd":
        decal = tcd;
        fill = "#f0f0f0";
        break;
      case "tee":
        decal = tee;
        fill = "#2586D7";
        break;
      case "tfd":
        decal = tfd;
        fill = "#202020";
        break;
      case "tif":
        decal = tif;
        fill = "#0D028F";
        break;
      case "tle":
        decal = tle;
        fill = "#2a73b6";
        break;
      case "tor":
        decal = tor;
        fill = "#f7f7f7";
        break;
      case "trc":
        decal = trc;
        fill = "#202020";
        break;
      case "tre":
        decal = tre;
        fill = "#0066cc";
        break;
      case "trh":
        decal = null;
        fill = "#202020";
        break;
      case "tro":
        decal = tro;
        fill = "#010178";
        break;
      case "tss":
        decal = tss;
        fill = "#C80410";
        break;
      case "ttw":
        decal = ttw;
        fill = "rgb(203,34,22)";
        break;
      case "tui":
        decal = null;
        fill = "#1064bf";
        break;
      case "tvc":
        decal = tvc;
        fill = "#01DAC9";
        break;
      case "twk":
        decal = twk;
        fill = "#140857";
        break;
      case "tym":
        decal = tym;
        fill = "#f0f0f0";
        break;
      case "tyn":
        decal = tyn;
        fill = "#101010";
        break;
      case "ubc":
        decal = ubc;
        fill = "#003399";
        break;
      case "ucd":
        decal = ucd;
        fill = "#A53139";
        break;
      case "ucl":
        decal = ucl;
        fill = "#695ab5";
        break;
      case "ucs":
        decal = ucs;
        fill = "#ffffff";
        break;
      case "ukz":
        decal = ukz;
        fill = "#EFEFEF";
        break;
      case "ulb":
        decal = null;
        fill = "#695AB5";
        break;
      case "umi":
        decal = umi;
        fill = "#000066";
        break;
      case "una":
        decal = una;
        fill = "#00275D";
        break;
      case "upn":
        decal = upn;
        fill = "none";
        break;
      case "usa":
        decal = usa;
        fill = "#bf0a30";
        break;
      case "usc":
        decal = usc;
        fill = "#FFDA0C";
        break;
      case "ust":
        decal = ust;
        fill = "#F5F5F5";
        break;
      case "uva":
        decal = uva;
        fill = "#ffffff";
        break;
      case "uwe":
        decal = uwe;
        fill = "#CE0C18";
        break;
      case "uxo":
        decal = uxo;
        fill = "#000032";
        break;
      case "uyo":
        decal = uyo;
        fill = "#000000";
        break;
      case "ves":
        decal = ves;
        fill = "#d40000";
        break;
      case "vet":
        decal = null;
        fill = "#A3C1AD";
        break;
      case "vmd":
        decal = null;
        fill = "#FFCC00";
        break;
      case "wac":
        decal = wac;
        fill = "#ffffff";
        break;
      case "wad":
        decal = wad;
        fill = "#add8e6";
        break;
      case "wag":
        decal = wag;
        fill = "#ffffff";
        break;
      case "wan":
        decal = wan;
        fill = "#ffffff";
        break;
      case "war":
        decal = war;
        fill = "#e90600";
        break;
      case "wbk":
        decal = wbk;
        fill = "#101010";
        break;
      case "wcc":
        decal = wcc;
        fill = "none";
        break;
      case "wes":
        decal = null;
        fill = "#FFC8CB";
        break;
      case "wey":
        decal = wey;
        fill = "#00b2ff";
        break;
      case "wgs":
        decal = wgs;
        fill = "#002163";
        break;
      case "whs":
        decal = whs;
        fill = "#172f55";
        break;
      case "wil":
        decal = wil;
        fill = "#00AED2";
        break;
      case "win":
        decal = win;
        fill = "#171458";
        break;
      case "wkw":
        decal = wkw;
        fill = "#ffffff";
        break;
      case "wlt":
        decal = wlt;
        fill = "#021449";
        break;
      case "wlu":
        decal = wlu;
        fill = "#8E0000";
        break;
      case "wmr":
        decal = wmr;
        fill = "none";
        break;
      case "woc":
        decal = woc;
        fill = "#0000FF";
        break;
      case "woo":
        decal = woo;
        fill = "#FFD050";
        break;
      case "wpg":
        decal = wpg;
        fill = "#ffffff";
        break;
      case "wrc":
        decal = wrc;
        fill = "#FF0000";
        break;
      case "wrm":
        decal = null;
        fill = "rgb(203,34,22)";
        break;
      case "wro":
        if (gender === "men") {
          decal = wroMen;
          fill = "#000000";
        } else {
          decal = wro;
          fill = "#ff6ec7";
        }
        break;
      case "wrr":
        decal = wrr;
        fill = "#FFFFFF";
        break;
      case "wsg":
        decal = wsg;
        fill = "#ffffff";
        break;
      case "wsw":
        decal = wsw;
        fill = "#ffffff";
        break;
      case "wtn":
        decal = wtn;
        fill = "#e1e2e4";
        break;
      case "xpr":
        decal = null;
        fill = "#000000";
        break;
      case "yal":
        decal = yal;
        fill = "#ffffff";
        break;
      case "yrk":
        decal = yrk;
        fill = "#F5F5F5";
        break;
      case "zar":
        decal = zar;
        fill = "#ffffff";
        break;
      default:
        decal = null;
        fill = "white";
        break;
    }

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        {...(size !== undefined && {
          width: size,
          height: (size * HEIGHT) / WIDTH,
        })}
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        ref={ref}
        className={className}
        {...(flip && { transform: "scale(-1,1)" })}
      >
        <defs>
          <path
            id="spoonPath"
            d="M 105,75 C 105,76 106,77 107,77 C 139,89 170,149 177,181 C 231,199 389,201 455,201 C 458,201 461,198 461,195 L 450,27 C 450,24 447,21 444,21 L 113,43 C 112,43 111,44 111,45  Z"
          />

          <clipPath id="spoonClip">
            <use xlinkHref="#spoonPath" />
          </clipPath>
        </defs>
        <g>
          <use
            xlinkHref="#spoonPath"
            style={{ stroke: "black", strokeWidth: 1, fill: fill }}
          />
          <g clipRule="nonzero" clipPath="url(#spoonClip)">
            {decal}
          </g>
        </g>
      </svg>
    );
  }
);

const abd = (
  <g transform="rotate(-3) translate(0,130)">
    <path d="M 465,-100 350,0 455,100 z" style={{ fill: "#ffffff" }} />
  </g>
);

const abn = (
  <g transform="rotate(-3) translate(0,130)">
    <path d="M 465,-100 350,0 455,100 z" style={{ fill: "#ffdd00" }} />
  </g>
);

const abs = (
  <path d="M 432,0 l 16,250" style={{ strokeWidth: 35, stroke: "white" }} />
);

const abv = (
  <>
    <g>
      <g>
        <rect width="500" height="230" style={{ fill: "#231F20" }} />
      </g>
    </g>
    <circle cx="306.3" cy="111" r="44.1" style={{ fill: "#FFFFFF", stroke: "#FFFFFF", strokeMiterlimit: "10" }} />
  </>
);

const ad = (
  <g>
    <path
      d="m 401.8247,198.38929 c 0.007,-0.68625 -2.37599,-39.88635 -5.29642,-87.11132 -2.92043,-47.224974 -5.22344,-85.941009 -5.11781,-86.035632 0.24062,-0.215533 15.90566,-1.294019 16.06435,-1.105977 0.0639,0.07573 2.49223,38.828703 5.39627,86.117719 2.90404,47.28902 5.38323,86.74569 5.50931,87.68149 l 0.22923,1.70145 h -8.39919 -8.39919 l 0.0135,-1.24773 z"
      style={{ fill: "#a3c1ad" }}
    />
    <path
      d="M 368.85101,198.61615 C 368.621,197.89301 357.82838,27.960607 357.99831,27.737583 c 0.10591,-0.13901 16.2055,-1.35829 16.31614,-1.235681 0.0917,0.10162 10.66122,170.327558 10.64451,171.433668 l -0.0188,1.24773 h -7.95435 c -5.96479,0 -7.99947,-0.14185 -8.13475,-0.56715 z"
      style={{ fill: "#a3c1ad" }}
    />
    <path
      d="m 392.52042,199.317 -7.8702,-0.11417 -0.24631,-3.01938 c -0.13547,-1.66066 -2.52192,-39.494 -5.30323,-84.07407 -2.78132,-44.580083 -5.15991,-82.120878 -5.28577,-83.423994 l -0.22884,-2.369301 9.05768,-0.560386 c 5.95764,-0.368592 9.09429,-0.426693 9.16466,-0.169761 0.0588,0.214843 2.42292,38.095703 5.2535,84.179692 2.83059,46.08398 5.24697,85.15136 5.36974,86.8164 l 0.22321,3.02735 -1.13212,-0.0891 c -0.62266,-0.049 -4.67371,-0.14048 -9.00232,-0.20327 z"
      style={{ fill: "#901639" }}
    />
  </g>
);

const adl = (
  <>
    <defs>
      <clipPath id="adl-vert30stripe">
        <rect transform="rotate(-4) scale(0.63, 0.81) translate(210, 60)" x="33%" y="0%" width="34%" height="100%" style={{ fill: "#003399" }} />
      </clipPath>
    </defs>
    <g style={{ clipRule: "nonzero" }}>
      <g clipPath="url(#adl-vert30stripe)" style={{ clipRule: "nonzero" }}>
        <rect x="0" y="0" width="100%" height="100%" style={{ fill: "#CC0000" }} />
      </g>
      <g transform="rotate(-4) scale(0.63, 0.81) translate(210, 60)">
        <rect x="67%" y="0%" width="34%" height="100%" style={{ fill: "#FFFF00" }} />
      </g>
    </g>
  </>
);

const adr = (
  <g transform="matrix(0.25081,-0,-0,0.25081,-90.5143,13.705)">
    <g>
      <path d="M779.5 244.4c0,4 4,8 8,8 127.5,47.8 251.1,287 279,414.5 215.2,71.7 845,79.7 1108,79.7 12,0 23.9,-12 23.9,-23.9l-43.8 -669.6c0,-12 -12,-23.9 -23.9,-23.9l-1319.3 87.7c-4,0 -8,4 -8,8l-23.9 119.6z" style={{ fill: "#FCC917", stroke: "#0E0D0E", strokeWidth: "3.98482" }} />
      <g>
        <path d="M1595.5 216.5c-1.5,3.5 -2.7,7.6 -3.2,13.2l-1 11.1 0.8 7.9c-1.6,31.1 16.7,67.5 49.7,70.6l6.4 0.6c13.4,1.2 31.5,-14 40.3,-18.8 9.2,-7.3 32.2,-32.6 36.3,-44.8l2.3 -4.7c0.3,-0.3 0.6,-0.8 1.1,-1.4l8.6 -18.4 0.1 -0.4c8,-19 10.4,-45.6 1.5,-58.2 -2.9,-6.3 -6.2,-9.8 -10.4,-14.8 -7.1,-8.5 -20.2,-17.5 -35.6,-18.9l-11.1 -1c-20.5,-1.9 -35,11.2 -46.6,18.2l-12.3 11.7c-16.1,23.1 -23.4,38.5 -26.5,48.3z" style={{ fill: "black" }} />
        <path d="M1732.6 361.5l1 6.5 -6.4 -0.6c0.1,-7.2 0,-4.2 -4,-8.4 7.6,-1.3 1.6,-2.4 10,-1.6l-3.5 0.6 -0.3 3.2 3.2 0.3zm175.2 67.6l5.1 -20.4 1.7 -12.8 -1.8 -21 -1 -6.5c-6.7,-5.9 -11.9,-23.3 -24.7,-28 -6.5,-10.9 -47.2,-28.5 -67.8,-30.4 -11.6,-1.1 -27.7,4.7 -34.6,9.6l-19 14.3 -11.9 6.9 -35.3 17.6c-7.4,4.2 -30.7,8.2 -41.7,10 -16.6,2.6 -32.1,-2.3 -50.4,-4l-1.6 -0.1c-36.4,-3.4 -75.6,35.8 -79,73l-1.5 15.9c-1.4,15.3 14.2,39.8 23.5,48.1 13.5,12 29.7,18.7 51.7,23.2 40,8.2 100.1,9.6 115.4,37.8 19.6,7.2 23.8,66.4 97.6,73.2 28.6,2.6 42.2,-9.2 59.5,-18.6 6.4,-7.9 17.9,-20.1 19.2,-33.5l0.6 -6.4c3.2,-34.6 -15.7,-73.2 -12.7,-105.5l1.3 -14.3c0.7,-7.7 6.3,-18.1 7.4,-28.2z" style={{ fill: "black" }} />
        <path d="M1771.1 239.8c1.9,13.9 18.8,32.2 33.8,33.6l8 0.7c8.6,0.8 20.3,-1.1 26.1,-4 15,0.1 52.4,-23.7 62.8,-32.3 13.6,-11.3 36.8,-37.4 39,-61l0.9 -9.6 -0.2 -17.6c-9.6,-8 -8.1,-28.1 -40.2,-31l-3.2 -0.3 -22.4 -0.3c-9.6,5 -26,8.1 -37.3,13.3 -9.4,4.4 -22.9,13.4 -30.5,19.9 -16.6,14.1 -35.1,37.5 -37.9,67.6l-0.6 6.4c-0.6,6.8 1.1,8.8 1.9,14.6z" style={{ fill: "black" }} />
        <path d="M1936.8 361.6c1.1,12.8 12.4,23 21,28.7 6.7,2.2 8.3,5.6 17.1,6.4l6.4 0.6c18.3,1.7 48.2,-18.1 57.2,-28.4 8.7,-9.9 34.1,-35.9 36.8,-51.2 3.2,-4.2 7.8,-14.9 8.4,-21.7l1.9 -20.7c1.6,-17.1 -20.2,-43.6 -34.4,-44.9l-11.1 -1c-17.4,-1.6 -42.3,8.6 -49.8,17.9 -20.5,8.5 -50.9,47 -52.9,68.9l-2.9 33.5c0.7,2.7 0.4,5.7 1.2,8.5l1.1 3.5z" style={{ fill: "black" }} />
        <path d="M2029.7 551.1c19.3,-8.1 39,-16.9 53.5,-32.9 9.7,-10.7 26,-28 27.4,-43.1l1.5 -15.9c2.2,-24.2 -21.9,-45.4 -45.4,-47.5 -20.7,-1.9 -42.6,6.9 -55.9,14.1l-8.5 5.6 -26.2 23.3c-13.1,18.9 -34.5,59.6 -17.4,83.5 12.8,23.5 47.1,25.2 71,13z" style={{ fill: "black" }} />
      </g>
    </g>
  </g>
);

const aen = (
  <g transform="rotate(-4) translate(395,20)">
    <rect x="0" y="0" width="45" height="300" style={{ fill: "#32336a" }} />
    <path
      d="M 22,92 L 44.5,79 A 26,26 0 1 0 44.5,105 Z"
      style={{ fill: "#e40000" }}
    />
  </g>
);

const age = (
  <g>
    <path d="M 0,55 L 145,199 L 500,205 L 500,137 Z" fill="#023A6B" />
    <path d="M 0,27 L 0,5 L 500,5 L 500,109 Z" fill="#FFFFFF" />
  </g>
);

const akn = (
  <g>
    <path d="M 345,0 L 260,230 L 500,230 L 500,0 Z" fill="#c679b6" />
  </g>
);

// Sun from http://commons.wikimedia.org/wiki/Image:Flag_of_Argentina.svg
const ali = (
  <>
    <path d="M 105.94,71.34 456.14,124.69 454.24,97.31 110.77,47.39 Z" style={{ fill: "#023974", fillOpacity: "1", stroke: "none", strokeWidth: "1px", strokeLinecap: "butt", strokeLinejoin: "miter", strokeOpacity: "1" }} />
    <path d="M 349.61,198.92 361.46,26.78 336.16,28.42 322.02,197.98 Z" style={{ fill: "#023974", fillOpacity: "1", stroke: "none", strokeWidth: "1px", strokeLinecap: "butt", strokeLinejoin: "miter", strokeOpacity: "1" }} />
  </>
);

const amp = (
  <path d="m 172.22,164.7 c 0,0 1.54,4.93 2.39,7.99 C 175.47,175.76 177,181 177,181 l 7.56,2.4 266.32,-144.04 c 0,0 -0.47,-10.07 -0.67,-12.79 -0.2,-2.72 -2.83,-5.55 -6.2,-5.34 -3.37,0.21 -14.64,0.86 -14.64,0.86 z" style={{ fill: "#fefefe", fillOpacity: "1", stroke: "#000000", strokeWidth: "1px", strokeLinecap: "butt", strokeLinejoin: "miter", strokeOpacity: "1" }} />
);

const arg = (
  <>
    <clipPath id="vert30stripe">
      <rect
        transform="rotate(-4) scale(0.63, 0.81) translate(210, 60)"
        x="33%"
        y="0%"
        width="34%"
        height="100%"
        style={{ fill: "#003399" }}
      />
    </clipPath>
    <rect style={{ fill: "#75AADB" }} x="0" y="0" width="100%" height="100%" />
    <g clipPath="url(#vert30stripe)">
      <rect
        style={{ fill: "#F2F2F2" }}
        x="0"
        y="0"
        width="100%"
        height="100%"
      />
    </g>
    <g>
      <path
        d="M302.5 161.4c-.3-.1-.5-.4-.6-.9a619.2 619.2 0 01-2.2-21.3v-.4l-.2.4a8.2 8.2 0 00-.3 3.4c0 2.8 0 3.2-1.2 6-.9 2-1 2.3-1.2 3.4-.2 1.1-.2 2 0 3 .3 1.1.3 1.7.3 2.3-.2 1.5-1 3-1.7 3.5-.6.4-1.3.3-1.4-.1-.1-.3 0-.5.3-.9.3-.5.5-1 .6-1.7.1-.7 0-2.2-.3-3.3a8.7 8.7 0 01.5-6c1.2-3.3 1.3-3.8 1-8v-2l-.2.4a4497.2 4497.2 0 00-7.8 20c-.3.4-.9.5-1.2.1-.2 0-.2-.2-.2-.5a17276.4 17276.4 0 006.4-21.4c0-.1-1 1-1.2 1.5l-.6 1.5c-1 2.7-1.4 3.2-3.7 5.5-1.3 1.2-2 2-2.5 2.9a7 7 0 00-1 2.6c-.2 1.3-.5 2-1 2.7-1.2 1.6-3 2.4-3.6 1.6-.2-.2-.2-.5 0-.7l.5-.4c1.1-.7 1.7-2 2.2-4.4.3-1.6.4-2 .9-2.8.4-1 1-1.7 2.1-2.8 1.4-1.5 1.8-2 2.2-2.7a23.4 23.4 0 002.2-5.4l.1-.5-2.7 2.8a576221.7 576221.7 0 00-12.6 13c-.5.4-1 .2-1.2-.3-.2-.5-.8.3 12.8-16l1.6-2-1 .6c-.7.4-.9.6-1.7 1.4a12.4 12.4 0 01-5.7 3.9c-1.7.7-2.4 1-3.3 1.7-.8.6-1.4 1.2-2 2-.6.9-.8 1.2-1.4 1.7-.9.8-2 1.3-3.2 1.4-.7 0-1.1 0-1.4-.4-.2-.3-.2-.5 0-.8.1-.1.2-.2.7-.3 1.4-.2 2.5-1.1 3.9-3.3l1.1-1.5c.5-.6 1.6-1.4 2.2-1.8a48 48 0 014-1.8c1-.6 2-1.6 3.6-3.4a37.7 37.7 0 011.7-1.8l-1.8.7a86422.7 86422.7 0 01-19 8.3c-.3 0-.7-.3-.7-.6 0-.5.2-.8 1.5-1.4a1507 1507 0 0018.2-10 8 8 0 00-2.4.7 12 12 0 01-6.6 1.6c-2.1 0-2.9 0-3.8.2-1.2.3-1.8.5-2.6 1-2 1.3-2.5 1.5-4 1.6l-1.6-.1c-1-.2-1.4-.6-1.5-1.2 0-.3.3-.6.5-.6l.7.1h1.2c1.1-.1 2-.6 4-1.9a8 8 0 012.6-1.3c.6-.2.8-.2 3.4-.4 3-.2 3-.2 4.4-.7 1-.4 1.6-.6 2.8-1.3a30 30 0 012.1-1h-.3l-18.8.7c-3.3.1-3.5.1-3.8-.2-.3-.4-.2-1 .3-1.2l11.5-1.3 11.3-1.2a6.8 6.8 0 00-3.3-.5c-1.1.1-2.4 0-3.2 0-.8-.1-1.7-.4-3.6-1.1-1.9-.8-2.5-1-3.7-1.1-1-.2-1.8-.1-3.1.1-1.6.3-2.8.2-4-.3-1.5-.6-2.3-1.7-1.7-2.3.3-.4.5-.3 1 0 .9.6 1.5.7 2.8.7.7 0 1 0 2.3-.3 1.7-.4 2.4-.4 3.5-.3 1 0 1.7.3 3.6 1 2.6.9 3.2 1 7 .7l2.5-.1a2367.7 2367.7 0 00-19-7c-2-.6-2.1-.7-2.2-1.2-.1-.5.2-.9.8-.8l5.4 1.4a147157.7 147157.7 0 0016.5 4.6c-.1-.1-1-.8-1.5-1l-1.4-.6c-3-1-3.5-1.4-5.6-3.5a13.6 13.6 0 00-2.6-2.1c-1-.7-2-1-3.3-1.3a7.1 7.1 0 01-2.9-1.2c-1.2-.8-2-2-1.8-2.8 0-.3.3-.6.6-.7.3 0 .5.2.8.6l.7.8c.9.7 1.7 1 4 1.4 2.5.5 3.3.8 5.9 3.1 1.2 1.1 1.9 1.6 2.3 1.8a23.7 23.7 0 005.7 2.2 266.4 266.4 0 00-7-6.7 121482 121482 0 01-8.8-8v-1l.6-.2c.5 0 .2-.2 4.4 3.1a53042.3 53042.3 0 0113.8 10.8 6.8 6.8 0 00-2.2-2.8c-2.1-1.9-2.5-2.4-3.6-5-1-2.1-1.2-2.7-2-3.7-.6-.7-1-1-2-1.7a6.3 6.3 0 01-2.4-2.3c-.6-1-.9-2.3-.6-3 .2-.4.5-.6.8-.6.3 0 .5.1.6.7.1.7.2.9.5 1.4.5.8 1.7 1.7 3.4 2.7 1.2.7 2.3 1.9 3 3.2l.8 1.6c.7 1.4 1 2.1 1.5 2.7.6.8 1.9 2 2.8 2.7a40.3 40.3 0 012 1.7l-.6-1.4a33368.7 33368.7 0 01-8.5-18.2c-.1-.4 0-.8.2-1 .3-.3.9-.2 1.2.2l1.9 3.3a49572.7 49572.7 0 018.9 16s-.1-1.4-.3-1.8l-.7-1.8a10.7 10.7 0 01-1.3-6.1c0-1.9 0-2.7-.4-3.8-.3-1-.5-1.5-1.2-2.6a6.4 6.4 0 01-1.3-3.4c0-1 .2-2.2.6-2.6.5-.4 1-.5 1.3-.1v.5c-.2 1.2-.2 1.2 0 1.7.2 1 .6 2 1.7 3.4.8 1 1 1.5 1.3 2.2.4 1.2.5 1.7.7 4.4l.1 2.5.4 1a21 21 0 002 4.2l.5.9-.1-3.6a5791.7 5791.7 0 01-.6-18c.1-.9 1-1.1 1.5-.4a16650.9 16650.9 0 002.5 22l.2-.6a9 9 0 00.3-3.3c0-1.5 0-2.5.2-3.2l1-2.5c.9-2.3 1-2.8 1.2-4.2a7 7 0 00-.2-2.3l-.2-1.3c0-1.6.7-3.6 1.7-4.3.6-.4 1.3-.3 1.4 0 .1.3 0 .5-.3 1-.6.8-.7 1.6-.6 3.2l.3 1.8c.4 1.3.4 2 .3 3 0 1-.2 1.6-1 3.5-1 2.7-1 3-.8 6.9a138 138 0 00.2 2.3 4030.3 4030.3 0 016.5-16.8c1.3-3.5 1.4-3.6 2-3.6.4 0 .7.1.7.6.1.4 0 .7-1.7 6.2a4581.2 4581.2 0 01-4.7 15.4l.4-.4c.7-.9 1-1.4 1.4-2.5 1-2.8 1.4-3.4 3.5-5.5 2.4-2.3 3.1-3.4 3.6-5.6.3-1.2.4-1.6.8-2.2.7-1.3 2-2.5 3-2.5.5 0 .8 0 1 .3.2.3 0 .7-.6 1-.6.4-1.1 1-1.5 2-.3.7-.5 1.2-.7 2.5a8 8 0 01-.7 2.6c-.6 1.2-1.2 1.9-2.8 3.5-1 1-1.5 1.7-1.9 2.5a21.6 21.6 0 00-1.9 4.8l-.2.8 2.7-2.8a103737.6 103737.6 0 0112.6-13c.4-.3.8-.3 1 0 .3.2.3.5.2.9l-7.3 8.8-7 8.5 1.7-1 1.2-1.2c2-2 2.4-2.4 5.4-3.6 1.7-.7 2.6-1.2 3.5-1.8.8-.6 1-1 1.8-2l1.2-1.4c.9-1 2.2-1.5 3.3-1.6.7 0 1 0 1.4.3.3.3.3.6.1.8-.1.2-.2.2-.7.3-1.4.3-2.5 1.2-3.9 3.4a8.6 8.6 0 01-2.2 2.5c-.8.6-1.4 1-3.5 1.9-1.5.6-2 .9-2.9 1.7a23 23 0 00-2.3 2.4 55 55 0 01-1.7 1.8l1.8-.7 17.8-8c.9-.4 1.3-.4 1.7-.1.3.3.3.8-.2 1.2a173 173 0 01-11.9 6.3 7838.8 7838.8 0 01-7.9 4.2h.5c1.1 0 1.6-.3 3-.8 2.6-1.2 3.2-1.4 6.1-1.4 2.2 0 3.2 0 4.3-.4 1-.2 1.6-.5 2.3-1 1-.6 1.4-.9 2-1.1a7 7 0 013-.3c1.1.2 1.6.6 1.7 1.2v.5c-.3.2-.4.2-1.1 0H337c-1.1.2-2 .6-4 2a8 8 0 01-1.5.9c-1.4.5-1.4.5-4.4.7-3 .2-3 .3-4.3.7-1 .3-1.8.7-3 1.3l-1.7.8-.6.3h.3a4367.4 4367.4 0 0022-.8c.6 0 1 .3 1 .8 0 .3-.3.6-.7.8l-2.6.3a3211.7 3211.7 0 00-20 2c0 .1 0 .2.6.3 1 .2 1.7.3 2.7.3 1-.1 2.4-.1 3.2 0 .8 0 1.7.3 3.6 1.1 1.8.7 2.4.9 3.4 1 1 .2 2 .2 3.4 0 1.6-.3 2.6-.3 4 .3.8.3 1.5.9 1.7 1.3.3.5.2 1-.1 1.2-.3.1-.6 0-1-.2-.7-.6-1.4-.8-2.7-.7l-2 .2c-1.6.4-2.5.5-3.5.4-1 0-1.7-.2-2.7-.6l-1.8-.6c-2-.7-2.7-.8-6.3-.5-2.6.1-2.6.1-2.4.2a3799.2 3799.2 0 0020.3 7.3c.5.2.7.5.7.8.1.3 0 .5-.2.7-.4.2-.8.1-2-.2a22873.2 22873.2 0 01-20.5-5.8c-.2 0 .7.6 1.3 1l1.6.7a12.3 12.3 0 015.7 3.5l1.6 1.5c1.1.9 2.7 1.6 3.8 1.8 1 .2 1.5.3 2.2.6 1 .5 2 1.3 2.6 2.2l.3 1c0 .4 0 .5-.2.7-.3.4-.8.3-1.1-.3a4 4 0 00-1.3-1.2 11 11 0 00-3.9-1.1c-1.2-.2-2-.5-3-1.1a18 18 0 01-2.5-2l-2.3-1.8a23.4 23.4 0 00-5.5-2 6 6 0 00-.7-.3 168.8 168.8 0 007.5 6.8 8302.2 8302.2 0 008.8 8.1v.9c-.2.2-.3.2-.6.2h-.5l-1.5-1.1a11291.5 11291.5 0 01-16.3-12.8l1 1.5 1.4 1.4c2 1.8 2.5 2.5 3.5 5 .8 1.8 1.2 2.5 1.8 3.4.7.9 1.2 1.3 2.2 2l1.3 1c1.8 1.7 2.4 4.4 1.2 4.9-.5.2-.9-.1-.9-.7 0-1.2-1.2-2.5-3.4-3.8-1.3-.8-2-1.4-2.7-2.3-.6-.8-.8-1.1-1.5-2.7l-1.5-2.7a27.8 27.8 0 00-5-4.5 732280.5 732280.5 0 019.2 19.7c.1.4 0 .7-.2.9-.3.3-.9.2-1.2-.2a298.8 298.8 0 01-7.3-13l-2.1-3.9-1.4-2.4v.4a8 8 0 001 3.2c1.2 2.5 1.3 3.2 1.3 6 0 3 .4 4.6 1.3 6l1.2 2c.5 1.3.6 2.7.2 3.8-.2.5-.5.8-1 1-.2.1-.5 0-.7-.3v-.5c.1-.8.2-1.2 0-1.7-.2-1-.6-1.9-1.7-3.3a8.3 8.3 0 01-1.4-2.6l-.3-.8-.2-2.6a37 37 0 00-.2-3c-.3-1-1-2.6-1.8-4.2a32.4 32.4 0 01-1-2v2.4a6522.9 6522.9 0 01.5 19.5c-.2.4-.6.6-1 .4z"
        style={{ fill: "#fcbf49" }}
      />
      <path
        d="M302.5 161.4c-.5-.2-.5-.4-.8-3.4a378.9 378.9 0 00-1.3-12.1l-.7-6.8v-.3l-.2.4a9 9 0 00-.4 3.5c.1 2.7 0 3-1.1 5.8-.9 2-1 2.6-1.2 3.6-.2 1-.1 2 0 3a6 6 0 01.1 3.1c-.3 1.1-1 2.3-1.6 2.7-.5.3-1.2.2-1.3-.2-.1-.3 0-.5.3-.9s.5-1 .6-1.7c.1-.6 0-2.3-.3-3.3a7.4 7.4 0 01-.3-2.8c0-1.1.3-1.9 1-3.7 1-2.8 1.1-3.3.8-7.8l-.1-1.7a156.1 156.1 0 00-3.5 9 1666.4 1666.4 0 01-4.5 11.4c-.2.3-.7.4-1 .3-.2-.1-.4-.5-.4-.9l.8-2.7a5477.6 5477.6 0 005.7-18.6l-1.2 1.6-.6 1.4c-1 2.8-1.4 3.3-3.5 5.3a15.2 15.2 0 00-2.7 3.2c-.5.9-.7 1.3-1 2.5-.2 1.1-.3 1.6-.7 2.2-.7 1.3-2 2.4-3 2.5-.6 0-1-.2-1-.6-.1-.3 0-.5.6-.8.7-.4 1.1-1 1.5-1.9.3-.8.5-1.4.7-2.8.3-1.5.8-2.7 1.7-3.8l1.6-1.8a10 10 0 002.3-3l1.2-3.2a30 30 0 01.7-2 1485.2 1485.2 0 00-15.2 15.7c-.3.2-.8.3-1 0-.4-.2-.4-.5-.2-.9 0-.2 1.2-1.6 2.7-3.5a64508.5 64508.5 0 0111.6-13.9l-1.8 1.2c-.2 0-.6.5-1.1 1-2 2.2-2.6 2.5-5.5 3.7-2.8 1.1-4 2-5.3 3.7-.7 1-1 1.4-1.6 1.9-.9.7-2 1.1-3 1.2-.8 0-1.3-.1-1.5-.6v-.6l.8-.3c1.4-.2 2.5-1 3.9-3.3 1.4-2.2 2.3-2.9 5.7-4.4 2.2-1 2.9-1.5 5.2-4.1a35.4 35.4 0 011.7-1.8l-14 6.1c-6.7 3-6.4 3-6.8 2.9-.3 0-.7-.4-.7-.6 0-.4.2-.7.7-1a1015.6 1015.6 0 0119.6-10.4c0-.1-1 0-1.8.2-.3.1-1 .3-1.4.6a11.7 11.7 0 01-5.9 1.5c-2 0-3.4 0-4.3.2a9 9 0 00-3.6 1.6c-1.1.7-1.8.9-3 1l-1.6-.1-.9-.3c-.5-.3-.7-1-.4-1.3.2-.2.4-.2 1-.1h1.2c1.1-.1 2-.5 3.8-1.8 1-.7 1.6-1 2.6-1.3.7-.3.8-.3 3.6-.5l2.9-.2.7-.2a24.3 24.3 0 005.1-2.3l.6-.3h-1.7a60 60 0 00-4.5.2 1418.2 1418.2 0 00-16.3.5c-.7-.2-.8-1 0-1.4a43341.3 43341.3 0 0022.8-2.5l-2.2-.5H279c-2.7.1-3.5 0-6.1-1-2-.9-2.7-1-4-1.2-1-.2-1.8-.1-3.1.1-.8.2-1.1.2-1.7.2-2-.1-4-1.2-4-2.3l.1-.5c.2-.2.2-.3.5-.3l.6.3c.5.4 1.1.6 1.9.7.9.1 1.5 0 3.1-.3a9 9 0 013.4-.3c1 0 1.9.3 3.6 1 2.6.9 3.2 1 7 .7l2.6-.1-4.6-1.7a4368 4368 0 01-14.4-5.2c-2-.7-2.1-.8-2.2-1.3-.1-.5.2-.9.8-.8l5.3 1.4 16.6 4.7c.2 0-.7-.7-1.3-1l-1.7-.7c-2.9-1-3.4-1.4-5.5-3.4a14 14 0 00-3-2.4c-1-.6-1.6-.8-2.8-1-1.7-.4-3-1-3.9-2-.6-.7-1-1.6-.9-2.1 0-.3.3-.6.6-.7.3 0 .5.2.8.6.4.7 1.2 1.3 2.3 1.7l2.8.6a8 8 0 013 1l2.5 2 2.3 1.9a24 24 0 005.6 2l.8.3-.5-.4a1453.8 1453.8 0 01-16-14.5v-1l.6-.2.5.1 1.6 1.2a131835.7 131835.7 0 0016.2 12.7l-1-1.5c0-.2-.6-.8-1.2-1.2-2.2-2-2.6-2.6-3.7-5.2-.9-2-1.2-2.7-2-3.7-.7-.7-1-1-2-1.7a6.3 6.3 0 01-2.5-2.5c-.4-.7-.6-1.4-.6-2 0-.5 0-.7.2-1 .2-.3.6-.5.8-.4.3 0 .5.3.5.7 0 .7.5 1.5 1.2 2.2.6.6 1.2 1 2.3 1.7 1.1.7 1.6 1 2.2 1.7.9 1 1.1 1.4 2 3.4 1 2 1.2 2.4 2.5 3.7l3.8 3.3a60.8 60.8 0 00-2.1-4.6 8293.5 8293.5 0 00-7-15c-.2-.6 0-1.2.6-1.2.4 0 .7.2 1.1.9a3934 3934 0 0110.2 18.3l.3.5v-.7a7 7 0 00-1-2.7 10.7 10.7 0 01-1.3-6.3c0-1.7 0-2.8-.4-3.8-.3-1-.5-1.5-1.2-2.6-.7-1-.9-1.5-1.1-2.3-.3-1-.3-2.1 0-3 .4-1 1.3-1.4 1.7-.8v1.2c-.3 1 .3 2.5 1.7 4.4.7 1 1 1.6 1.4 2.4.3 1.1.4 1.6.6 4.2.1 2.3.1 2.4.3 3a24.8 24.8 0 002.4 5.1l.3.6v-.6a98 98 0 01-.3-7.2 494.7 494.7 0 01-.4-14c0-.3.4-.7.7-.7.3 0 .6.1.8.4l.5 4a1660.1 1660.1 0 002 18v.3l.2-.6c.3-1 .3-1.5.3-3.3 0-1.8 0-2.5.2-3.3 0-.3.5-1.5 1-2.7.9-2.3 1-2.8 1.2-4.2a7 7 0 00-.2-2.3c-.2-1-.2-1.6-.1-2.3.2-1.4.8-2.8 1.6-3.3.6-.4 1.3-.3 1.4 0 .1.4 0 .5-.3 1-.8 1-.9 2.5-.3 5a7 7 0 01.3 2.9c0 1-.3 1.9-1 3.6a27 27 0 00-.7 2.2c-.2.7-.3 1.7-.3 2.8l.3 4.5a176.4 176.4 0 004-10.2 2787.4 2787.4 0 004-10.3c.4-.3.8-.3 1 0 .3 0 .3.1.3.5s0 .8-1.6 6a6370.8 6370.8 0 01-4.7 15.5s1-1.2 1.1-1.6l.7-1.5c.7-2 1.1-2.8 2-3.7l1.4-1.5c1.7-1.6 2.8-3.1 3.3-4.4l.4-1.4c.2-1 .3-1.5.7-2.1.7-1.3 2-2.5 3-2.5.5 0 .8 0 1 .3.2.3 0 .7-.6 1a4 4 0 00-1.4 1.8c-.4.9-.5 1.4-.8 2.8-.4 2.5-1 3.5-3.6 6.2-1 1-1.5 1.7-1.9 2.5a24.5 24.5 0 00-1.8 4.7l-.2.7A3937.8 3937.8 0 00325.8 92c.4-.2.8-.2 1 0 .3.3.3.6.2 1l-2 2.5a29418.7 29418.7 0 01-12.4 14.8l2-1.1c0-.2.6-.7 1-1 1-1.3 2-2 2.6-2.4.5-.3 1.2-.7 2.8-1.3 2.9-1.2 4-2 5.3-3.7.3-.6.8-1.1 1-1.3 1-1 2.3-1.7 3.6-1.8.6 0 1 0 1.3.3.3.3.3.6.1.8 0 .2-.2.2-.7.3-.6.2-.9.2-1.5.6-.6.4-1.5 1.4-2.4 2.8a8.4 8.4 0 01-1.8 2.2c-1 .7-1.5 1.1-3.5 2a12.6 12.6 0 00-5.5 4.2 67 67 0 01-1.8 2 2315 2315 0 0020.4-9c.8-.2 1.3.3 1 1a11962.3 11962.3 0 00-20.2 11 6.4 6.4 0 002.7-.7c.3 0 1-.4 1.4-.6 2.1-1 3-1 5.5-1 2.7 0 3.7-.2 5.2-.7.6-.2.8-.3 2.2-1.2 1-.7 1.8-1 3-1 1 0 1.5 0 2.2.3.5.2.8.5.8.9v.5c-.3.2-.4.2-1.1 0H337c-1 .2-2 .6-3.9 2-1 .6-1.6 1-2.7 1.3l-3.4.4-3 .2-.7.2a26.8 26.8 0 00-5.1 2.3l-.5.3a322 322 0 007.8-.3 2064.3 2064.3 0 0014.4-.5c1.1.2 1.2 1.3.1 1.6l-1.5.2a6065.4 6065.4 0 01-21 2.2l2 .5h4.5c.8 0 1.7.3 3.6 1.1 1.8.7 2.3.9 3.2 1 1.3.3 2 .2 3.6 0 1.6-.3 2.7-.2 4 .3 1.5.6 2.3 1.7 1.7 2.3-.3.4-.6.3-1.1 0-.6-.6-1.8-.8-3-.7l-2 .3a9 9 0 01-3.4.3c-1-.1-1.7-.3-3.4-.9-2.9-1-3.3-1-7.2-.9l-2.6.2a46.3 46.3 0 004.4 1.6l14.2 5.2c2.4.8 2.5.9 2.6 1.4.2.5-.2.8-.8.8l-5-1.3a11928.7 11928.7 0 00-16.7-4.8c-.4-.1-.3 0 .3.4.8.6 1.3.9 2.4 1.3 2.8 1 3.6 1.4 5.6 3.4 1.4 1.3 2 1.8 2.8 2.3 1 .6 1.7 1 3 1.2 1.1.2 1.8.4 2.5.8 1.8 1 2.9 3 2 3.7-.3.3-.7.2-1-.4-.7-1-2-1.8-4.2-2.1l-2.7-.6c-1.3-.5-2-1-4-2.8l-1.9-1.6c-.8-.4-2.6-1.2-4.1-1.6a35 35 0 01-1.8-.6l-.7-.3.5.4a518 518 0 009.8 8.9 7218.6 7218.6 0 006.2 5.7v.9c-.2.2-.3.2-.6.2-.5 0 .2.6-8.6-6.3a1025.6 1025.6 0 01-9.7-7.6l1 1.5 1.3 1.3c2.1 2 2.5 2.5 3.6 5 .9 2.1 1 2.5 1.8 3.5.7.9 1.2 1.3 2.3 2 1 .7 1.4 1.1 2 1.8 1 1.3 1.3 3 .7 3.8-.1.2-.4.4-.7.3-.3 0-.4-.3-.5-.9-.2-.9-.9-1.9-2-2.7l-1.5-1c-1.2-.7-2-1.4-2.6-2.2-.5-.7-1-1.4-1.7-3-.8-1.7-1-2.1-1.9-3-.5-.7-4.3-4-4.3-3.9l1.1 2.5a10509.3 10509.3 0 018 17.7c0 .5-.6.7-1.1.5-.3-.2-.2 0-3.3-5.6a3512 3512 0 00-6.7-12l-1-2v.4c0 .8.2 1.6.9 3 1.2 2.7 1.3 3.4 1.3 6.3 0 2.7.4 4.5 1.3 6l.7 1c1.3 2 1.2 5.2-.2 5.7-.3.1-.6 0-.8-.2v-1.2c.3-1-.3-2.6-1.7-4.4-.7-1-1-1.7-1.4-2.5a13 13 0 01-.5-4l-.2-2.5-.3-.8a23.5 23.5 0 00-2.3-4.9l-.3-.6v2.5a7556.1 7556.1 0 01.6 19.5c-.2.4-.6.6-1 .4zm.6-.5v-2.2a9487.3 9487.3 0 00-.7-20.3v-.6h-.4c-.3 0-.3 0-.3.2a589 589 0 01.1 10.3 469.4 469.4 0 00-1-10.2v-.2h-.8v.5l.7 5.5c2 18.7 1.7 16.8 1.9 17 .2.2.3.2.5 0zm7.4-1.4c.6-.5.7-2.3.3-3.6-.2-.7-.4-1-1.1-2a8.5 8.5 0 01-1.5-4.7v-1.8c0-1-.1-2.8-.3-3.3-.1-.7-.4-1.3-1-2.8a8.3 8.3 0 01-1-3.4c-.1-.7-.2-1-.3-1l-.4.1-.3.1v.4c0 .7.3 1.9.5 2.4 0 .3.4 1 .7 1.6a9.2 9.2 0 011.3 3.7c0 .5 0 1.9-.2 2.5v-1a8.4 8.4 0 00-1.6-5c-.6-1.1-1.2-2.4-1.5-3.5-.2-.7-.3-.8-.4-.7l-.7.2a12.1 12.1 0 001.5 3.4 24 24 0 011.4 3.2c.4 1 .5 1.8.5 3.6.2 3 .5 4.2 1.8 6 1 1.4 1.5 2.2 1.8 3.2.2.7.2 1.6 0 2 0 .4 0 .6.2.6l.3-.2zm-15.5 1c.3-.1.8-.8 1-1.3.6-1 .7-2.3.5-3.3a8.2 8.2 0 01-.1-4c.2-1 .4-1.6 1.2-3.6l.9-2.3c.2-.9.2-1.8.2-3.3-.1-2 0-2.6.5-4 .2-.8.2-.8-.3-.9h-.4l-.2.9a8 8 0 00-.3 3.5c0 2.5 0 3.2-.6 4.5a12 12 0 01-1 1.8l.4-1c.8-2 .8-2.5.6-4.9a20.4 20.4 0 010-5h-.8v3.8c.2 3.6.1 4.6-1 7.1-.6 1.6-.9 3-.9 4.2 0 .7 0 1 .3 2l.4 2.1c0 1.5-.1 2.3-.7 3.2l-.3.5h.6zm-7.3-1.6a461 461 0 008.3-21.5l-.5-.2c-.2 0-.3.4-2 4.4a77 77 0 01-2.2 5.5 270.6 270.6 0 013.1-10c0-.2 0-.3-.3-.3l-.3-.1a123.6 123.6 0 00-1.4 4.4l-5.3 17.5c0 .5.3.7.6.3zm30.4-2v-.4a484.5 484.5 0 00-10-20.7c-.2 0-.3.2-.3.2a786.2 786.2 0 004 9.2 4373.9 4373.9 0 00-4.9-8.8l-.6.3a802.8 802.8 0 0011.8 20.1zm6.2-4.3c.3-.6 0-2-.6-2.9-.7-.9-1-1.3-2.4-2-1.6-1.2-2.7-2.6-3.9-5.5-1-2.5-1.5-3.1-3.5-5a8.4 8.4 0 01-2.3-2.7c-.5-.8-.6-1-.6-.7h-.1s-.2 0-.3.2l-.1.1.4.8a9.4 9.4 0 002.4 2.8c1.7 1.5 2.3 2.1 2.8 3.5a8.7 8.7 0 01.6 1.9l-1-2.2c-.7-1-1.2-1.6-3.1-3.1-1-.8-1.6-1.4-2.5-2.4-.5-.6-.6-.6-.7-.4l-.5.3c0 .2 1.1 1.2 2.8 2.7 2.7 2.3 3.2 3 4.3 5.3.8 1.6 1.3 2.4 1.8 3.1.7.8 1.1 1.2 2.3 1.9a13.2 13.2 0 012.4 1.6l.1.2c.2.2.8 1 1 1.5l.2.7v.4c.1.2.4.2.5-.1zm-43.4 2.8a5.5 5.5 0 002.8-4.1l.5-1.7c.5-1.2 1.5-2.6 3-4 2.2-2.2 2.4-2.5 3.5-5 .8-2.1 1-2.4 2-3.6l.5-.6-.3-.2-.4-.2s-1 1.1-1.3 1.7c-.4.6-.6 1-1 2.4l-.8 1.7c-.5 1-1.6 2.2-2.7 3l-.4.3.5-.5a9.3 9.3 0 002.7-4.5c.6-1.8.9-2.5 1.6-4l.4-.7h-.1l-.6-.3c-.2 0-1 1.7-1.4 3.4-.6 1.7-1.4 3.4-2 4.3l-1.6 1.8a11.3 11.3 0 00-2.7 3.9l-.5 1.8-.4 2a5 5 0 01-2 2.7c-.4.3-.5.4-.3.5.2.1.6.1 1-.1zm-6.7-4l3.3-3.3A17295.4 17295.4 0 01289 136l1.2-1.3-.2-.2a1 1 0 00-.3-.2l-1.6 1.5a1877.6 1877.6 0 01-6 6.2l-.3.2.3-.3a52.7 52.7 0 013.1-3.8 1135.9 1135.9 0 013.4-4l.4-.5-.3-.2a1 1 0 00-.3-.1l-4.4 5.2a34664.6 34664.6 0 01-10.4 12.8v.2h.5zm56.2-4c0-.4 0-.3-4.4-4.3a10390.7 10390.7 0 01-12.9-11.6l-.2.3-.2.2.3.3a875 875 0 007 6.6l-7.9-6.1-.3.2-.2.2 2.2 1.7a7829.7 7829.7 0 0016.4 12.7c.2 0 .2 0 .2-.3zm4.1-6c.3-.6-.6-1.9-1.7-2.6-.7-.5-1.5-.8-2.7-1a8 8 0 01-3-1c-.9-.6-1.6-1.2-3.1-2.7-2-1.8-2.5-2.2-5-3a31 31 0 01-1.7-.7l-1.8-1.3-.6-.5-.2.3-.2.4 1.5 1.2a9 9 0 002.4 1c2.4.8 3.5 1.5 4.8 3 .7.8.7.8-.4 0a9.2 9.2 0 00-4.5-2.4 18.4 18.4 0 01-4.4-1.8l-.4.7c0 .1 2 1 3.4 1.3l4 1.6 2.2 1.8c1.9 1.6 2.2 1.9 3.2 2.3.9.5 1.3.6 2.6.8 2 .3 3.1.7 4 1.4.6.3.8.5 1 1 .4.5.5.5.6.2zm-64.2 4.2a5.9 5.9 0 003-2.4c1-1.4 1.5-2 2.8-2.8.7-.4 1.4-.8 3.1-1.5a11 11 0 005.3-3.6c.8-1 1.5-1.4 2.8-2.1l.7-.5s0-.2-.2-.3c-.2-.3-.2-.3-1.2.2-1.1.7-1.6 1-2.6 2.2-1.8 2-2.6 2.5-4.7 3.2l-.8.2.8-.4c1.1-.5 2-1 2.5-1.4l1.7-1.8a18.9 18.9 0 013.4-3.4l-.5-.6c-.2 0-1.7 1.5-2.8 2.7a13 13 0 01-4.8 4l-1.6.7a10 10 0 00-3.1 2c-.4.5-1.2 1.5-1.1 1.6l-.4.4c-.4.7-1.3 1.8-1.8 2.1a4 4 0 01-2 1c-.4 0-.5.2-.5.3l.3.3c.3.1 1.1 0 1.7-.1zm33-8.3l.9-.2a17.6 17.6 0 005.7-2.7l.2-.3.7-.5c0-.1 0-.1 0 0a15 15 0 004.8-7.6 15.5 15.5 0 00-11-19 16.8 16.8 0 00-11.6 1s0 .1-.1 0a11.8 11.8 0 00-2.8 1.8c-.8.6-1.2 1-2 2a12.7 12.7 0 00-2.2 2.9 15.4 15.4 0 007.7 21.7c3 1.2 6.6 1.6 9.6 1zm-4.8-3.2c0-.8.6-1.6 1.3-2l.3-.2H300c-.6 0-1.1-.3-1.7-1-.4-.3-.7-.5-1.4-.6h-.4c-.2-.1-.2-.1 0-.3l1-.8c.7-.9 1-1 1.8-1.1h.9l.4.2.5-.2c.6-.3 1.3-.3 1.8-.1.2 0 .6.4 1 .7l1 .7.3.2h-.2l-.3.1-.5.2-.7.5c-.7.9-1 1.2-1.6 1.3-.3 0-.6.2-.4.2l1.2.5.2.1.3.5.3.8v.3l-.2-.4c-.4-.8-1-1.3-2-1.4-.4 0-1 0-1.5.4-.4.2-1 .9-1.1 1.3l-.1.4v-.3zm3.2-3l.6-.2c.5-.5 1-1 1.3-1l.4-.2.5-.1h.3l-.3-.2c-.1 0-.2-.1-.2 0l-.3-.4c-.4-.3-1.2-.6-1.8-.7l-1 .2-.6.3-.7-.2c-.6-.2-.7-.2-1 0-.6 0-1.2.4-1.7 1a4 4 0 01-.6.5h.5-.2a136.7 136.7 0 002.7-.5 3 3 0 001.7 0c.5-.3 1-.3 2-.2 1.2 0 1.2.1.2.2-.7 0-1 0-1.6.3-1 .3-1.5.3-2.4.2-1-.2-2.2-.2-2.2 0l.3.1c.3 0 .7.3 1.3.7.5.3.6.4 1.3.5.5 0 .9 0 1.5-.2zm-4.5-4.3c-.8-.3-1.1-1.3-.7-1.8.2-.3.6-.5.8-.5.2 0 .2 0 0 .2-.3.1-.5.5-.5.7 0 .2.3.5.5.6.5.2 1 0 1.2-.5v-.3l.2.3c.1.2.6.6 1 .7.4.2 1.1 0 1.5-.1.4-.2.9-.8.8-1l.2.2c.2.4.7.6 1.2.3.2 0 .3-.2.4-.4.1-.4 0-.8-.6-1h-.2l.2-.1c.3 0 .6.1.8.3.4.4.5 1 .1 1.5s-1 .7-1.5.5a5 5 0 00-.4 0v-.2h-.4c-.9.5-1.9.6-2.7.3l-.7.1c-.5.3-.8.3-1.2.2zm1.1-2.2a.8.8 0 00-.3-.1l.2-.4c.3-.4.7-1.4.9-2.2v-1.5c0-.9 0-1-.3-1.5-.5-1.3-.8-1.6-1.9-2-1-.5-2-.6-3-.5a9 9 0 00-4.5 2.1c-.7.6-.7.6-.4.2.4-.7 1.3-1.6 2.2-2.1 1-.6 1.7-.8 2.8-1a7 7 0 014.2 1.1c.4.3.5.3.7.8a9 9 0 01-.3 7.2l-.3-.1zm3.3-.8a11 11 0 01-1-2.5c-.1-.9-.2-2.5 0-3.3.1-1 .2-1.1.7-1.5a8 8 0 013-1.5c.7-.1 2-.2 2.6 0 1.1.2 2.5 1 3.3 1.7l.4.3s0 .2.2.3l.1.2-.1-.1-.7-.4-.6-.3-1.7-.7c-1-.4-1.5-.4-2.6-.4-.8 0-1 .1-1.5.3-1 .4-2.1 1-2.4 1.6a5.7 5.7 0 001 6.3l.2.3-.3.2-.2.2-.4-.7zm-8.4-1.7c-1 0-2-.5-2.6-1l.7.2c1.6.5 3 .6 4.1.2l1.2-.7c.8-.5 1-.6 1.1-.5l-.2.3c-.5.7-1.4 1.2-2.2 1.4a7 7 0 01-2.1.1zm11.3-.8c-.7-.2-.9-.2-1.3-.5-.6-.3-1-.7-1-.8 0-.2.3-.1 1.1.3 1.2.5 1.7.7 2.7.6a7 7 0 002.7-.8l.7-.3a6 6 0 01-4.9 1.5zm-11.4 0c-.8-.1-1.7-.4-2.2-.6l-.3-.3a5 5 0 013.4-1.7c1 0 1.8.3 2.7 1l.4.3-.1.2c-.6.7-2.5 1.2-4 1zm2.3-.5c.5-.2 1-.5 1-.8l-.3-.3c-.3-.3-1-.6-1.3-.7v.3c.6.4.5 1.1 0 1.6-.2.3-.2.3.6 0zm-2.4 0c-.4-.4-.4-1 0-1.5.2-.3.2-.3 0-.2-.6.2-1.5 1-1.4 1.1 0 .2 0 .2.7.5.8.4.9.4.7.1zm11.8-.4c-.8 0-1.5-.3-1.9-.6l-.1-.2.4-.4a4 4 0 012.5-1.3c.8-.1 1.4 0 2.2.3a5 5 0 011.4.9c0 .1-.7.6-1.2.8-1 .4-2.3.6-3.3.5zm.3-.3c-.5-.4-.6-1-.2-1.5.2-.3.2-.3 0-.3l-1.2.8c-.3.4-.3.5.2.8l1.5.5-.3-.3zm2.4-.4c.7-.4.9-.5.8-.7-.1-.2-1-.7-1.6-.9-.2 0-.2 0 0 .3.5.4.6 1 .3 1.4-.2.3 0 .3.5 0zm-17.9.8c-.1-.2.8-1.3 1.5-1.7a5 5 0 012.2-.8c1.3-.2 1.9 0 3 .7.9.5 1 .6 1.5.6.2 0 .3 0 .3.2l-.1.3h-.5a6 6 0 01-1-.6c-1.2-.9-2-1-3.3-.8-1.3.2-2.2.7-2.8 1.6-.4.4-.7.6-.8.5zm20.5-1.4l-.7-.5c-.6-.6-1-.9-1.8-1a4 4 0 00-1.7-.1c-1 0-1 0-1.5.3l-1.2 1c-.8.7-1 .9-1.3.7l-.2-.2c0-.2 0-.2.4-.3.3 0 .6-.2 1.3-.9 1-.7 1.5-1 2.5-1 1.4-.1 2.7.3 3.7 1.1.7.5.9 1 .5.9zm-42 19a12637.8 12637.8 0 0117.7-7.9l.2-.1-.1-.3-.2-.3a391.3 391.3 0 00-10.1 4.4 234.4 234.4 0 019.6-5.2v-.3l-.3-.3a433.6 433.6 0 00-14.6 7.7 5278.5 5278.5 0 01-6.2 3.5v.2c0 .1.2.2.5.1l3.5-1.5zm70-3.7c.3-.3 0-.5-2.1-1.3a4778.3 4778.3 0 00-20-7.1l-.2.3-.1.3 3 1 7.3 2.8a312.7 312.7 0 01-10.6-3l-.1.4v.3a13562 13562 0 0122.2 6.4l.7-.1zm-73.4-1.8c.6 0 1.5-.5 2.5-1.1a8 8 0 012.9-1.2c1-.3 2.3-.4 4-.4 1.3 0 2.8 0 3.4-.3.7-.1 1.6-.5 2.9-1 1.2-.7 1.7-.8 3-1a11 11 0 001.3-.1v-.4l-.2-.4-1 .1c-1.3.2-2 .4-3.5 1.1l-2 .9c-.9.3-2 .4-3.2.3-1.4 0-1.4-.1.2-.2 2.1-.2 2.4-.3 4.8-1.5 1.4-.7 2.4-1.1 3.7-1.5l.7-.2v-.3l-.3-.5c-.4 0-2 .7-3.3 1.4-1.2.6-2.1 1-3.4 1.4l-.9.3-2.8.2c-2.7.2-2.9.3-3.5.4a9 9 0 00-3.3 1.8c-1.9 1.3-3.6 1.8-4.8 1.4-.6-.1-.8 0-.5.3.2.4 1 .6 1.8.7l1.5-.2zm75.1-5.4c.2-.5-.9-1.3-2.1-1.7-1.1-.3-2-.3-3.8 0-1 .2-1.1.2-1.9.1-1.6-.1-2.4-.3-4.8-1.2l-2-.8c-1-.3-2-.4-4.4-.3a7 7 0 01-2.3-.2c-.5 0-1.1-.2-1.4-.3l-.6-.2v.4.5l2.3.5h4.5a9.8 9.8 0 014.2 1.5l-.6-.2a18 18 0 00-2.4-.8H321a31.7 31.7 0 01-4.6 0h-.2v.4c0 .2-.1.4 0 .4h3.7c4.3-.2 4.5-.2 7.7 1 .6.2 1.4.5 1.8.5 1.4.4 2.8.4 4.3 0 .7-.2 1.1-.3 2.2-.3h1.8c.7.1 1 .3 1.6.6l.4.3.1-.2zm-56-3.2v-.4l-5.7.1a318.5 318.5 0 01-5.6.2l11.2-1.2v-.7h-.6a183333.4 183333.4 0 01-23 2.5c-.4.2-.3.5.2.6l8.1-.2 15.4-.6v-.3zm45.2-3.3l11.1-1.2c.3-.2.3-.5 0-.6l-6.8.2-16.4.6h-.6v.3l.1.4 4.2-.1a1471.9 1471.9 0 007-.2l-9.5 1-1.7.2v.7h.8l11.8-1.3zm-45.2.1v-.3l-.6-.1a9.2 9.2 0 00-3.9-.4 10.4 10.4 0 01-5-.7l-1.4-.7 1.1.4c.8.3 1.9.5 2.5.6l2.6-.1a22 22 0 014.7 0c.2 0 .2 0 .3-.4v-.5h-3.8c-4 .3-4.6.2-6.8-.6-2.5-.9-3.2-1-4.6-1.1-.8 0-.9 0-2.3.3-1.6.3-2.7.4-3.5.4a4.9 4.9 0 01-2.3-.9h-.2c-.1-.1-.1-.1-.2 0 0 .3.1.6.6 1s1 .6 1.8.9c1 .2 1.6.2 2.7 0 1.8-.3 1.9-.3 2.7-.2 1.6 0 2.5.3 4.5 1.1a12 12 0 006.8 1.2c1.6 0 2 0 3.6.5.7.2.7.2.7-.4zm33.6-2a21.2 21.2 0 003.1-1.5c1-.5 2.8-1.2 3.6-1.3l2.6-.3c2.3 0 2.9-.2 4-.5.8-.3 1.4-.6 2.7-1.5 1.5-1 2.6-1.5 3.8-1.6h1.2c.3.2.4.2.5 0v-.3c-.4-.4-1.4-.6-2.6-.6-1.2.1-1.9.4-3.4 1.3-1 .6-1.4.8-2.4 1.1-1 .3-2.1.4-3.2.4l-2.4.1c-1.8 0-2.3.2-3.8.8-1.2.5-2.5 1-2.7 1.2l-1.5.2-1.2.1-.2.1v.4l.2.4h.4l2.5-.5 1.7-.8 1.9-.8c1.1-.4 2.5-.5 4.1-.3l-1 .2c-2.2.1-2.5.2-5 1.5-1.4.8-2.6 1.2-4.1 1.6-.2 0-.2.1-.1.4v.4c.1.1.3.1 1.3-.3zm-33-1l.1-.4a16.7 16.7 0 00-1.6-.5 579.5 579.5 0 00-8.7-3.3c.4 0 10.5 3 10.6 3l.1-.4.1-.3h-.2l-14.3-4.2c-8.9-2.5-8.2-2.3-8.4-2-.4.3 0 .4 4.2 2l18 6.4.1-.3zm40-6.7a21651.5 21651.5 0 0111.4-6c.5-.4.4-.8-.1-.7a404.3 404.3 0 00-20.5 9l-1 .5s.1 0 0 0c0 .2.2.5.3.5l9.7-4.1-4 2.2-5 2.6-.3.2.2.3.1.3 1-.5 8.1-4.3zm-38.8 3.9l.1-.3-1.2-1c-.8-.6-1.4-.8-2.7-1.2-2.4-.8-3.3-1.4-4.5-2.7-1-1.1-1-1.1.1-.2a9.1 9.1 0 004.5 2.3 18.6 18.6 0 014.4 1.8l.2-.4c.2-.3.2-.3.1-.4-.3-.2-2.3-1-3.4-1.3-1.2-.3-3.3-1.2-4-1.6l-1.8-1.4a16.6 16.6 0 00-3.2-2.5 8 8 0 00-3-1c-2-.3-3-.6-3.9-1.2-.5-.3-.8-.6-1-1.1-.4-.5-.4-.5-.6-.3-.4.6.7 2.1 2 2.9a7 7 0 002.5.8c1.9.4 3 1 4.9 2.6a21.8 21.8 0 011.8 1.7c1.3 1.2 2.1 1.7 4.4 2.5l1.7.7c.4.2 1.2.7 1.8 1.3l.6.3s0-.2.2-.3zm28.4-1.7v-.2c.2 0 1.3-1 2.4-2.3l2.6-2.6c.8-.7 1.5-1 3.7-2 2.3-1 3.4-2 4.5-3.7 1.5-2.4 3-3.6 4.3-3.7.6 0 .6-.2.2-.5-.5-.2-1.8 0-2.8.6a6 6 0 00-2 1.8 9 9 0 01-1.6 2c-1.2 1-2.1 1.5-3.8 2.2a11.6 11.6 0 00-5.6 3.7l-1.1 1a15.8 15.8 0 01-2.6 1.7l.4.6c.2 0 1.8-1 2.2-1.3l1.5-1.5a9.3 9.3 0 015.4-3.4l-.8.5c-1.1.5-2 1-2.5 1.4l-1.7 1.9a19.9 19.9 0 01-3.4 3.3l.6.6v-.1zm-26.7-1l.2-.3-.1-.2a688.7 688.7 0 00-8-7.3l3.3 2.5c4.6 3.6 5.4 4.3 5.5 4.2l.2-.2.2-.2-1-.8a2102.6 2102.6 0 01-17-13.4c-.6-.4-1-.2-.7.3L271 98a9794.3 9794.3 0 0116 14.3l.2-.2zm27.5-5.2a2474.8 2474.8 0 0111.8-14.4c0-.2-.2-.3-.4-.3a46.5 46.5 0 00-4.8 4.9l-8.2 8.5-3.3 3.5.3.2.3.2 1.5-1.5a169 169 0 016-6.2 504.8 504.8 0 01-6.4 7.9l-.4.5.2.1.3.2 3-3.6zm-25.4 3l.3-.2v-.3c-.4-.6-1-1.6-1.5-2a12 12 0 00-1.2-1.3 8.4 8.4 0 01-3.2-4.3c-.4-1-.4-1.2 0-.5l.8 1.6c.6 1 1.1 1.6 2.1 2.4a21.3 21.3 0 014 3.7l.6-.5c0-.2-1-1-2.5-2.4-2-1.8-3.1-2.8-3.7-3.7l-1-2-1-2c-.3-.6-1-1.4-1.5-1.9-.4-.4-1.5-1-1.6-1l-.4-.3a9 9 0 01-2.5-2.2c-.4-.6-.6-1-.7-1.5l-.1-.6c-.1 0-.4.1-.5.3-.1.4 0 1.2.3 2a6 6 0 002.4 2.7c1 .7 1.7 1.2 2.2 2 1 1 1.1 1.4 2 3.6 1.2 2.7 1.5 3.2 3.7 5 1.1 1.1 1.4 1.5 2.2 2.7l.5 1 .3-.3zm20.2-1.5c.4-.6.9-2 1.2-3 .6-1.9 1.4-3.5 2-4.5l1.1-1.2.7-.8c.1 0 1.6-1.6 2-2.4.5-1 .7-1.5 1-3 .3-1.7.5-2.5 1-3.4L320 89c.2 0 .4-.2.5-.3v-.2h-.5c-.7 0-1.7.7-2.4 1.7-.5.7-.7 1.3-1 2.5l-.4 1.5a11.2 11.2 0 01-2.2 3.3l-1.4 1.4c-1.8 1.7-2 2.2-3.2 5a8.2 8.2 0 01-1.7 3l-.6.7.3.2.4.2 1.4-1.7 1-2.4c.6-1.6.9-2.2 1.5-3a12 12 0 012-1.8l.3-.3-.5.6a9.8 9.8 0 00-3 5c-.4 1.6-.8 2.5-1.6 4l-.1.1.3.2.4.2.2-.3zm-17.5-.4c.3-.1.3-.2.3-.3a804.7 804.7 0 00-3.8-8.6l4.7 8.3.6-.4-1.3-2.3a20301.9 20301.9 0 01-9.8-17.6c-.3-.4-.8-.3-.7.1a739.6 739.6 0 009.7 21l.3-.2zm17.7-11.8l3.3-11c0-.3 0-.5-.3-.5a305.5 305.5 0 00-5.7 14 24320.6 24320.6 0 01-3 7.7l.8.2a705.2 705.2 0 003.9-9.8l-1.6 5.4a1589.4 1589.4 0 01-1.4 4.4c-.1.2 0 .3.2.4l.4.1 3.4-10.9zm-6.2 10v-.2-.6-2.4c-.2-3-.1-4.6.3-5.9l.6-1.8c1.1-2.7 1.2-4 .7-6.2a11 11 0 01-.4-2.1c0-1.5.1-2.4.7-3.2l.3-.5c0-.2-.5-.2-.5 0h-.1c-.2-.1-1 1-1.3 1.8-.4 1-.4 1.9-.1 3.5.3 1.4.3 2 0 3.4-.2 1-.4 1.6-1 3.2a10.6 10.6 0 00-1.3 6.2c0 1.8 0 2.1-.4 3.6l-.2.9h.8l.5-2v-2.3c0-2.5 0-3.2.6-4.6l1-1.7-.3.7c-.4 1-.7 2-.8 2.7v2.8l.2 3.2c-.2 1.6-.2 1.4.2 1.5h.5zm-8.4.5v-.9c-.2-1.6-.3-2-1.4-4.1-.7-1.4-.8-2-1-3.2 0-.8 0-1.6.2-2.5l.1 1.4.3 2c.1.6.5 1.4 1.3 2.9.7 1.3 1 1.8 1.4 3.1.3 1 .2 1 .8.8.3 0 .3 0 0-.8-.2-.8-.6-1.5-1.1-2.6-.6-1-1-1.9-1.4-2.9a10 10 0 01-.6-4c-.1-1.8-.2-2.7-.5-3.7a8 8 0 00-1.5-2.5c-.7-1-1-1.4-1.2-2-.5-1.2-.7-2.2-.5-3 .2-.5.1-.6 0-.6-.6 0-1 1.2-1 2.5.2 1 .4 1.8 1 2.8 1.2 1.7 1.3 2 1.7 3.5.2.7.3 2.2.3 3.5 0 1.3 0 2.8.2 3.5l1 2.6c.4.6.7 1.3.7 1.5.2.5.4 1.6.4 2.3v.5h.4l.4-.1zm3.3-.8l-.2-10.3v-.5.5a1099.9 1099.9 0 001.1 10v.3h.8v-.7a815.7 815.7 0 00-2.5-22.3c-.2-.2-.4-.3-.5 0a271 271 0 00.7 23h.6z"
        style={{ fill: "#843511" }}
      />
    </g>
  </>
);

const arp = (
  <g>
    <path d="M 468.16,-42.76 328.99,117.34 489.08,256.51 z" style={{ fill: "#004080", fillOpacity: "1" }} />
  </g>
);

const aru = (
  <g transform="rotate(-3) translate(0,130)">
    <rect fill="#000000" x="0" y="0" width="100%" height="50%" />
    <path d="M 465,-100 L 350,0 L 455,100 Z" fill="#ffff00" />
  </g>
);

const aus = (
  <g transform="rotate(-4) translate(370, 20)">
    <path d="M 0,0 l 0,250" style={{ strokeWidth: 20, stroke: "#004000" }} />
    <path d="M 20,0 l 0,250" style={{ strokeWidth: 20, stroke: "#ffff00" }} />
    <path d="M 40,0 l 0,250" style={{ strokeWidth: 20, stroke: "#004000" }} />
  </g>
);

const aut = (
  <g transform="rotate(-3) scale(0.71 0.81) translate(140,50)">
    <rect width="100%" height="33.33%" y="33.33%" style={{ fill: "#f9f9f9" }} />
  </g>
);

const avn = (
  <path d="M 412,0 l 16,250" style={{ strokeWidth: 75, stroke: "#FEE41B" }} />
);

const azs = (
  <g transform="matrix(0.107947,0,0,0.143713,57.5009,-49.815)">
    <g transform="matrix(0.72908,0,0,0.72908,2503.76,123.259)">
      <g transform="matrix(0.949,0.00052,-0.0005,0.91986,40.1707,116.725)">
        <path d="M1232.9,848.4L441.4,848.4C441.4,848.4 441.5,1413 441.5,1671.5C441.5,1741.2 495,1798.4 562.5,1800.9C612.7,1802.7 666.4,1805.6 697.1,1810.1C810.8,1826.8 837.2,1896.1 837.2,1896.1C837.2,1896.1 866.6,1822.1 977.5,1810.1C1016.9,1805.8 1064.1,1802.9 1108.5,1801C1178.1,1797.8 1232.9,1738.5 1232.9,1666.6C1233,1406 1232.9,848.4 1232.9,848.4Z" style={{ fill: "rgb(11,115,36)" }} />
      </g>
      <g transform="matrix(0.8964,0,0,1.00039,86.4286,-46.528)">
        <path d="M455.1,1467.9C455.1,1467.9 473.6,1456.1 497.6,1425.3C525.7,1389.3 558.7,1327.4 558.7,1327.4C558.7,1327.4 547.6,1334.4 532.8,1340.5C522.8,1344.6 505.7,1346.6 505.7,1346.6C505.7,1346.6 548.8,1317 564.8,1244.8C580.3,1174.8 620,1158.3 663.4,1168.7C716.5,1181.4 704,1240.2 704,1240.2L657.9,1264L694.4,1264.5C694.4,1264.5 665.9,1337.6 710,1347.8C759.8,1359.4 778.4,1302.7 778.4,1302.7L747.7,1305.8C747.7,1305.8 784.2,1268.4 790.5,1200.5C793.6,1167.9 774.5,1142.4 753.6,1140.3C716.5,1136.6 705.3,1131.9 705.3,1131.9C705.3,1131.9 722.6,1132.2 734.7,1127.7C755.6,1119.7 753.7,1118.1 753.7,1118.1C753.7,1118.1 746.2,1115.3 739.7,1112.5C731.7,1109.2 729.1,1107.3 719.3,1107.1C702.4,1106.9 689.5,1116.4 689.5,1116.4C689.5,1116.4 678.1,1090.4 704.8,1082.1C719.8,1077.5 743.7,1078.3 743.7,1078.3C743.7,1078.3 752.6,1060.3 783.6,1059.3C804.9,1058.7 814.3,1069.9 843.5,1079.6C868.1,1087.9 882.1,1091.4 889.5,1091C915.4,1089.7 940.7,1078.8 940.7,1078.8C940.7,1078.8 940,1085 927.1,1097.9C916.6,1108.4 898.5,1113.3 898.5,1113.3C898.5,1113.3 908.3,1115.1 920.7,1115.6C930.2,1115.9 946,1112.3 946,1112.3C946,1112.3 935.6,1125.3 919.4,1131.3C904,1136.9 889.2,1139 889.2,1139C889.2,1139 893.6,1173.5 892.4,1195.5C890.7,1226.4 881.2,1255.1 881.2,1255.1C881.2,1255.1 887.3,1254.7 890.2,1253.8C893,1253 898.5,1249.9 898.5,1249.9C898.5,1249.9 875.6,1353.7 938.8,1351.4C1002.2,1349.1 976.6,1267.7 976.6,1267.7L1009.8,1264.3L971.1,1247.3C971.1,1247.3 947.3,1176.3 1014.5,1164.7C1086.7,1152.3 1094.8,1213.2 1117.8,1280.8C1133.8,1328 1164.1,1347.3 1164.1,1347.3C1164.1,1347.3 1142.6,1342.5 1133.8,1338.8C1117.2,1332.1 1108.9,1325.2 1108.9,1325.2C1108.9,1325.2 1131.9,1390 1158.7,1416.3C1181.1,1438.3 1214.5,1468.6 1214.5,1468.6L1214.5,1676.7C1214.5,1676.7 1224.9,1721.6 1181.7,1764.4C1139,1806.6 1098.2,1795.2 1098.2,1795.2C1098.2,1795.2 976.2,1800.7 927.7,1815.1C852,1837.8 834,1875.9 834,1875.9C834,1875.9 830.3,1854.6 752.2,1820C702.8,1798 573.1,1796.6 573.1,1796.6C573.1,1796.6 519.1,1798.9 477.2,1758C448.9,1730.4 453.6,1669.9 453.6,1669.9L455.1,1467.9Z" style={{ fill: "white" }} />
      </g>
      <g transform="matrix(1.37159,0,0,1.37159,-3442.36,-177.291)">
        <path d="M3074,886C3074,886 3079.7,882.3 3085,882C3090.4,881.7 3099,886 3099,886C3099,886 3092.9,891.5 3087,891C3078.7,890.2 3074,886 3074,886Z" style={{ fill: "rgb(11,115,36)" }} />
      </g>
      <g transform="matrix(2.44339,0,0,2.9174,424.599,638.296)">
        <g>
          <path d="M133.7,299.6L103.7,299.6L103.7,296.6C105.1,296.5 106.8,296.3 108.7,295.9C110.5,295.5 111.5,295 111.5,294.4C111.5,294.2 111.5,293.9 111.4,293.7C111.4,293.4 111.3,293.1 111.1,292.6L106.4,281.2L87.4,281.2C87,282.3 86.5,283.5 86,285C85.4,286.4 85,287.6 84.6,288.7C84.1,290.2 83.8,291.2 83.7,291.9C83.6,292.5 83.6,293 83.6,293.2C83.6,294.1 84.2,294.8 85.5,295.4C86.7,295.9 88.8,296.4 91.7,296.6L91.7,299.6L69.2,299.6L69.2,296.6C70,296.6 71,296.4 72.1,296.2C73.1,296 74,295.7 74.6,295.3C75.7,294.7 76.6,293.9 77.3,293C78,292.1 78.6,291 79.1,289.8C82.1,282.5 85.1,275.3 88.1,268C91.2,260.7 94.5,252.7 98.1,243.9L105.9,243.9C110.9,256.3 114.9,266.2 117.8,273.4C120.6,280.6 123.1,286.6 125.1,291.4C125.4,292.2 125.9,292.9 126.4,293.5C126.9,294.1 127.6,294.7 128.6,295.3C129.3,295.7 130.1,296 131.1,296.2C132.1,296.4 132.9,296.6 133.7,296.6L133.7,299.6ZM104.8,277.4L96.8,257.5L89,277.4L104.8,277.4Z" style={{ fill: "rgb(11,115,36)" }} />
          <path d="M266.3,281.1L264.4,299.6L212.8,299.6L212.8,297.3L248.3,248.2L236.3,248.2C233.8,248.2 232,248.3 231,248.4C229.9,248.6 228.8,248.9 227.9,249.3C226.8,249.7 225.6,250.8 224.2,252.6C222.9,254.3 221.1,257.3 218.8,261.4L215.7,261.4L217.4,244.7L265.2,244.7L265.2,247L229.7,296.1L243.5,296.1C247.8,296.1 250.8,295.9 252.4,295.5C253.9,295.2 255.1,294.6 255.8,293.7C257.3,291.9 258.6,289.9 259.9,287.8C261.1,285.7 262.3,283.4 263.3,281.1L266.3,281.1Z" style={{ fill: "rgb(11,115,36)" }} />
        </g>
        <g>
          <path d="M210.6,339.4C210.6,348.6 207.1,356.4 200.2,362.8C193.2,369.3 184.8,372.5 175,372.5C169.2,372.5 162.4,370.7 154.4,367.2C152.2,366.3 150.6,365.8 149.6,365.8C148.3,365.8 147.5,367.3 147.2,370.4C147.1,372 146.4,372.8 145.1,372.8C144,372.8 143.5,372.2 143.5,370.9C143.5,370 143.5,369.4 143.7,369C144.5,362.5 144.9,356.5 144.9,350.9C144.9,349.8 144.8,346.9 144.6,342C144.5,341.3 144.5,340.5 144.5,339.4C144.5,337.8 145.1,337 146.4,337C147.4,337 148.2,338.3 148.6,340.8C151.4,359.8 160.4,369.3 175.6,369.3C182.1,369.3 187.2,367.5 190.7,363.8C194.3,360.1 196.1,354.9 196.1,348.2C196.1,342.2 194.4,337.1 190.9,332.9C187.4,328.7 181.5,324.5 173.1,320.4C162.9,315.4 155.9,310.5 152,305.8C148,301.1 146.1,295.3 146.1,288.4C146.1,279.6 148.9,272.3 154.6,266.5C160.3,260.7 167.5,257.9 176.3,257.9C179.9,257.9 184.9,259.1 191.3,261.5C193.5,262.4 195.2,262.8 196.2,262.8C197.4,262.8 198.2,262.6 198.6,262.2C198.9,261.8 199.3,260.6 199.6,258.8C199.8,257.8 200.4,257.2 201.4,257.2C202.4,257.2 203,257.9 203,259.1C203,260 202.9,260.6 202.8,261.1C202.5,263.6 202.3,266.7 202.3,270.3C202.3,275.5 202.6,279.5 203.1,282.5L203.3,285C203.4,286.2 202.9,286.8 201.8,286.8C200.7,286.8 199.9,285.6 199.4,283.1C198.3,276.8 195.5,271.6 191.1,267.4C186.8,263.2 181.9,261.1 176.4,261.1C171.1,261.1 166.9,262.8 163.7,266.2C160.6,269.6 159,274.2 159,280.1C159,286.9 161.3,292.4 165.9,296.6C168.4,298.9 174,302.2 182.5,306.5C192.5,311.5 199.7,316.6 204.1,321.7C208.4,326.9 210.6,332.8 210.6,339.4Z" style={{ fill: "rgb(11,115,36)" }} />
        </g>
      </g>
    </g>
  </g>
);

const bal = (
  <path
    style={{ fill: "#d40000", stroke: "none", strokeWidth: 1 }}
    d="M 109.76752,42.435275 76.110919,192.11109 428.81461,203.01844 z"
  />
);

const ban = (
  <g transform="matrix(1,-0,-0,1,-0.487,-0.209282)">
    <path d="m 143.35,109.98 9.94,15.03 135.68,-4.2 4.2,75.98 15.27,0.83 -4.27,-77.24 151.86,-4.76 -1.02,-15.4 -151.49,4.6 -4.4,-74.42 -15.35,0.93 4.13,73.97 z" style={{ fill: "#ffffff", fillRule: "evenodd", stroke: "none", strokeWidth: "1px", strokeLinecap: "butt", strokeLinejoin: "miter", strokeOpacity: "1", fillOpacity: "1" }} />
    <use xlinkHref="#spoonPath" x="0" y="0" width="100%" height="100%" transform="translate(0.487,0.20928)" style={{ fill: "#ffffff", stroke: "#000000", fillOpacity: "1" }} />
    <path d="m 326.28,29.42 c 0.15,-0.05 5.18,-0.39 9.39,-0.63 l 7.66,-0.44 114.21,171.89 c 0,0 -5.3,0.65 -8.74,0.66 l -7.27,-0.02 C 402.53,144.03 365.07,87.25 326.28,29.42 Z" style={{ fill: "#3d75e6", fillOpacity: "1", stroke: "none" }} />
    <path d="m 407.52,200.5 -5.71,-0.19 C 364.02,144.16 326.22,88 288.42,31.84 l 15.91,-0.94 113.85,169.81 -3.37,0.05 c -0.87,0.01 -4.16,-0.16 -7.29,-0.26 z" style={{ fill: "#ee2727", fillOpacity: "1", stroke: "none" }} />
  </g>
);

const bau = (
  <g transform="rotate(-4) translate(375, 70)">
    <path d="M 0,0 l 0,30 l 60,0 l 0,-30 z" fill="#FFFF00" />
    <path d="M 0,55 l 0,30 l 60,0 l 0,-30 z" fill="#FFFF00" />
    <path d="M 0,110 l 0,30 l 60,0 l 0,-30 z" fill="#FFFF00" />
  </g>
);

const bbl = (
  <g transform="rotate(-4) translate(431, 20)">
    <path
      d="M 0,0 l 0,300 "
      style={{ stroke: "#ffffff", strokeWidth: 32, fill: "none" }}
    />
  </g>
);

const bcl = (
  <g transform="matrix(0.25081,-0,-0,0.25081,-90.5143,13.705)">
    <g>
      <path d="M779.5 244.4c0,4 4,8 8,8 127.5,47.8 251.1,287 279,414.5 215.2,71.7 845,79.7 1108,79.7 12,0 23.9,-12 23.9,-23.9l-43.8 -669.6c0,-12 -12,-23.9 -23.9,-23.9l-1319.3 87.7c-4,0 -8,4 -8,8l-23.9 119.6z" style={{ fill: "#79002A" }} />
      <path d="M933 382.5c21.1,29.4 40.7,61.4 58.2,93.8l864.1 -45.3 16.4 312.2c34.5,0.8 68,1.4 100.1,1.9l-16.8 -319.3 223.3 -11.7 -6.3 -96.5 -222 11.6 -15.1 -287 -99.6 6.6 15 285.6 -917.2 48.1z" style={{ fill: "#D79F00" }} />
    </g>
  </g>
);

const bed = (
  <g transform="matrix(0.99756405,-0.06975647,0.06975647,0.99756405,400.42075,-7.9513085)">
    <path
      d="M 5,0 5,300"
      style={{ fill: "none", stroke: "#000063", strokeWidth: 20 }}
    />
    <path
      d="m -15,0 0,300"
      style={{ fill: "none", stroke: "#ffffff", strokeWidth: 20 }}
    />
    <path
      d="m -55,0 0,300"
      style={{ fill: "none", stroke: "#ffffff", strokeWidth: 20 }}
    />
    <path
      d="m -75,0 0,300"
      style={{ fill: "none", stroke: "#000063", strokeWidth: 20 }}
    />
  </g>
);

const bel = (
  <>
    <clipPath id="vert30stripe">
      <rect
        transform="rotate(-4) scale(0.63, 0.81) translate(210, 60)"
        x="33%"
        y="0%"
        width="34%"
        height="100%"
        style={{ fill: "#003399" }}
      />
    </clipPath>
    <g clipRule="nonzero" clipPath="url(#vert30stripe)">
      <rect fill="#ffda0c" x="0" y="0" width="100%" height="100%" />
    </g>
    <g transform="rotate(-4) scale(0.63, 0.81) translate(210, 60)">
      <rect x="67%" y="0%" width="34%" height="100%" style={{ fill: "red" }} />
    </g>
  </>
);

const ber = (
  <g transform="rotate(-4) translate(290, 143)">
    <path
      d="M 100,-100 L 0,0 L 100,100"
      stroke="white"
      strokeWidth="20"
      fill="none"
    />
    <path
      d="M 150,-100 L 50,0 L 150,100"
      stroke="white"
      strokeWidth="20"
      fill="none"
    />
  </g>
);

const bgs = (
  <g style={{ clipRule: "nonzero" }}>
    <g style={{ clipRule: "nonzero" }}>
      <path d="M 370,-10 l 100,250" style={{ strokeWidth: "150", stroke: "#990000" }} />
    </g>
  </g>
);

const bir = (
  <g style={{ clipRule: "nonzero" }}>
    <path d="M 0,70 L 145,199 L 500,205 L 500,120 Z" style={{ fill: "#0000d4" }} />
    <path d="M 0,70 L 0,83 L 500,123 L 500,110 Z" style={{ fill: "#FFCC00" }} />
  </g>
);

const bmc = (
  <g transform="matrix(0.982733,-0,-0,0.982733,-90.5148,13.705)">
    <g>
      <path d="M528.4 190.44c9.89,0.08 18.86,0.1 26.58,0.1 1.14,0 2.27,-0.42 3.25,-1.11l-93.88 -80.05 84.02 -99.62c-1.17,-1.37 -2.88,-2.32 -4.58,-2.32l-22.27 1.48 -86.17 102.17 93.06 79.34z" style={{ fill: "black" }} />
    </g>
  </g>
);

const bms = (
  <g transform="rotate(-4) translate(410, 20)">
    <path
      d="M 5,00 l 0,300"
      style={{ stroke: "#EC0112", strokeWidth: 20, fill: "none" }}
    />
    <path
      d="M -30,00 l 0,300"
      style={{ stroke: "#EC0112", strokeWidth: 20, fill: "none" }}
    />
  </g>
);

const bou = (
  <g>
    <g transform="rotate(1) translate(320, 20)">
      <path d="M 0,0 l 0,250" style={{ strokeWidth: 35, stroke: "#990032" }} />
    </g>
    <g transform="rotate(1) translate(379, 10)">
      <path
        d="M 20,0 l 0,250"
        style={{ strokeWidth: 130, stroke: "#010066" }}
      />
    </g>
  </g>
);

const bra = (
  <g transform="rotate(-2) translate(260, 15) scale(0.085)">
    <path
      fill="#1B1D56"
      d="M 1224,2062 C 1222,2062 1221,2062 1220,2062 C 1220,2062 1220,2062 1219,2062 C 1218,2062 1217,2062 1216,2062 C 1216,2062 1215,2062 1215,2062 C 1214,2062 1213,2062 1212,2062 C 1125,2062 1039,2062 952,2062 C 1106,1915 1135,1641 1140,1402 L 1139.1403,1354.8831 L 1084,1356 C 834,1357 591,1379 444,1496 C 444,1429 444,1356 444,1288 C 444,1287 444,1286 444,1285 C 444,1218 444,1144 444,1077 C 591,1194 834,1217 1084,1218 L 1140.4181,1218.5702 L 1140,1170 C 1135,930 1107,654 952,505 C 1039,505 1125,505 1212,505 C 1213,505 1214,505 1215,505 C 1215,505 1216,505 1216,505 C 1217,505 1218,505 1219,505 C 1220,505 1220,505 1220,505 C 1221,505 1222,505 1224,505 C 1310,505 1396,505 1483,505 C 1328,654 1300,930 1295,1170 L 1293.773,1217.0018 L 1354,1218 C 1605,1217 1852,1195 2000,1077 C 2000,1144 2000,1218 2000,1285 C 2000,1286 2000,1287 2000,1288 C 2000,1356 2000,1429 2000,1496 C 1852,1378 1605,1357 1354,1356 L 1293.8154,1355.2033 L 1295,1402 C 1300,1641 1329,1915 1483,2062 C 1396,2062 1310,2062 1224,2062 z "
    />
  </g>
);

const brd = (
  <g transform="rotate(-4) translate(370, 90)">
    <path d="M 0,0 l 0,-33 l 55,33 l 0,33 z" fill="white" />
    <path d="M 0,53 l 0,-33 l 55,33 l 0,33 z" fill="white" />
    <path d="M 0,104 l 0,-33 l 55,33 l 0,33 z" fill="white" />
  </g>
);

const brn = (
  <g>
    <path d="M 103.8,47.32 454.87,122.31 454.4,224.37 85.48,223.64 z" transform="matrix(0.99863,-0.05234,0.05234,0.99863,0,0)" style={{ fill: "#ffffff" }} />
  </g>
);

const bru = (
  <g style={{ clipRule: "nonzero", opacity: "0.9" }}>
    <path d="M 361,0 l 15,250" style={{ strokeWidth: "35", stroke: "black" }} />
    <path d="M 395,0 l 15,250" style={{ strokeWidth: "35", stroke: "#990000" }} />
  </g>
);

const buc = (
  <g transform="matrix(0.251029,-0,-0,0.251029,-90.5144,13.7051)">
    <g>
      <path d="M778.9 244.2c0,4 4,8 8,8 127.4,47.8 250.9,286.7 278.8,414.2 215,71.7 844.2,79.6 1107.1,79.6 11.9,0 23.9,-11.9 23.9,-23.9l-43.8 -669c0,-11.9 -11.9,-23.9 -23.9,-23.9l-1318.1 87.6c-4,0 -8,4 -8,8l-23.9 119.5z" style={{ fill: "#E87722" }} />
      <path d="M1065.6 666.2l0 0.1c215,71.7 844.2,79.6 1107.1,79.6 11.9,0 23.9,-11.9 23.9,-23.9l-43.8 -669c0,-6.6 -3.7,-13.2 -9,-17.8l-1078.2 631z" style={{ fill: "#003865" }} />
    </g>
  </g>
);

const bul = (
  <>
    <clipPath id="vert30stripe">
      <rect
        transform="rotate(-4) scale(0.63, 0.81) translate(210, 60)"
        x="33%"
        y="0%"
        width="34%"
        height="100%"
      />
    </clipPath>
    <g clipPath="url(#vert30stripe)">
      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        style={{ fill: "#00966e" }}
      />
    </g>
    <g transform="rotate(-4) scale(0.63, 0.81) translate(210, 60)">
      <rect
        x="67%"
        y="0%"
        width="34%"
        height="100%"
        style={{ fill: "white" }}
      />
    </g>
  </>
);

const bwy = (
  <>
    <g>
      <path d="M 180,200 424,13" style={{ stroke: "#000000", strokeWidth: "20", strokeMiterlimit: "4", strokeDasharray: "none" }} />
      <path d="M 180,30 440,215" style={{ stroke: "#000000", strokeWidth: "20", strokeMiterlimit: "4", strokeDasharray: "none" }} />
    </g>
    <g>
      <rect height="230" width="500" y="0" x="0" style={{ fill: "#000031" }} />
      <path d="M 55,250 500,-3" style={{ stroke: "#ffc815", strokeWidth: "30", strokeMiterlimit: "4", strokeDasharray: "none" }} />
    </g>
  </>
);

const cab = (
  <g transform="rotate(-4) translate(400,20)">
    <path
      d="M 0,0 l 0,300 "
      style={{ stroke: "#cccccc", strokeWidth: 30, fill: "none" }}
    />
  </g>
);

const cai = (
  <g transform="rotate(-4) translate(400,20)">
    <path
      d="M 0,0 l 0,300 "
      style={{ stroke: "#95E3C9", strokeWidth: 30, fill: "none" }}
    />
  </g>
);

const cal = (
  <g style={{ clipRule: "nonzero" }}>
    <g transform="rotate(-3)  translate(0,130) ">
      <path d="M 465,-100 L 350,0 L 455,100 Z" style={{ fill: "#FFCC00" }} />
    </g>
  </g>
);

const cam = (
  <g transform="rotate(-4) translate(400, 20)">
    <path
      d="M 10,00 l 0,300 "
      style={{ stroke: "#daaa00", strokeWidth: 17, fill: "none" }}
    />
    <path
      d="M -12.5,00 l 0,300 "
      style={{ stroke: "#7e2d40", strokeWidth: 28, fill: "none" }}
    />
    <path
      d="M -35,00 l 0,300 "
      style={{ stroke: "#daaa00", strokeWidth: 17, fill: "none" }}
    />
  </g>
);

const can = (
  <>
    <defs>
      <clipPath id="vert50stripe">
        <rect
          transform="rotate(-4) scale(0.63, 0.81) translate(210, 60)"
          x="25%"
          y="0%"
          width="50%"
          height="100%"
        />
      </clipPath>
    </defs>
    <g clipPath="url(#vert50stripe)">
      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        style={{ fill: "#f2f2f2" }}
      />
    </g>
    <path
      transform="rotate(-4) translate(130, 50) scale(0.05)"
      d="M 3199.9526,290 L 2990.3615,698.71 C 2966.579,743.13 2923.9678,739.01 2881.3566,714.2 L 2729.6183,632.05 L 2842.7112,1259.82 C 2866.4938,1374.51 2790.1887,1374.51 2752.5317,1324.92 L 2487.7189,1014.97 L 2444.727,1172.37 C 2439.7693,1193.04 2417.971,1214.75 2385.2685,1209.58 L 2050.4097,1135.97 L 2138.3625,1470.29 C 2157.1909,1544.68 2171.8774,1575.48 2119.3545,1595.1 L 2000,1653.75 L 2576.4379,2143.29 C 2599.2536,2161.8 2610.7811,2195.11 2602.6585,2225.27 L 2552.2079,2398.37 C 2750.684,2374.45 2928.6267,2353.04 3127.0983,2329.15 C 3144.7336,2328.92 3173.9762,2344.59 3173.8558,2365.83 L 3147.5581,3000 L 3244.0581,3000 L 3228.8679,2367.19 C 3228.7474,2345.95 3255.2663,2328.92 3272.9016,2329.15 C 3471.3732,2353.04 3649.3161,2374.45 3847.7922,2398.37 L 3797.3417,2225.27 C 3789.2191,2195.11 3800.7465,2161.8 3823.5622,2143.29 L 4400,1653.75 L 4280.6456,1595.1 C 4228.1226,1575.48 4242.8092,1544.68 4261.6375,1470.29 L 4349.5905,1135.97 L 4014.7315,1209.58 C 3982.029,1214.75 3960.2307,1193.04 3955.2729,1172.37 L 3912.281,1014.97 L 3647.4683,1324.92 C 3609.8112,1374.51 3533.5061,1374.51 3557.2887,1259.82 L 3670.3814,632.05 L 3518.6434,714.2 C 3476.0311,739.01 3433.421,743.13 3409.6384,698.71"
      style={{ fill: "#ff0000" }}
    />
  </>
);

const cbr = (
  <g transform="rotate(-12 395 115)">
    <path
      d="M 418,78 C 412,50 428,30 448,34 C 436,44 436,60 428,82 Z"
      style={{ fill: "#ffffff", stroke: "#060606", strokeWidth: 2 }}
    />
    <rect x="370" y="68" width="62" height="44" rx="12" style={{ fill: "#1f4f8a" }} />
    <rect x="370" y="98" width="62" height="12" style={{ fill: "#b5b5b6" }} />
    <ellipse cx="398" cy="114" rx="62" ry="13" style={{ fill: "#152a47" }} />
  </g>
);

const cbs = (
  <g transform="rotate(-3) translate(-20, 130)">
    <path d="M 480,-120 L 350,0 L 480,120 Z" fill="#ffffff" />
  </g>
);

const cfd = (
  <>
    <defs>
      <linearGradient xlinkHref="#cfd-linearGradient4606" id="cfd-linearGradient4604" x1="107.03339" y1="75.234818" x2="112.21787" y2="44.994488" gradientUnits="userSpaceOnUse" />
      <linearGradient id="cfd-linearGradient4606" gradientUnits="userSpaceOnUse" x2="0" y1="-15" y2="15">
        <stop offset="0" style={{ stopColor: "#0078ff", stopOpacity: "1" }} />
        <stop offset="0.44999999" style={{ stopColor: "#0064ff", stopOpacity: "1" }} />
        <stop offset="0.55000001" style={{ stopColor: "#00a0ff", stopOpacity: "1" }} />
        <stop offset="1" style={{ stopColor: "#0078ff", stopOpacity: "1" }} />
      </linearGradient>
    </defs>
    <g>
      <path d="m 112.15,44.88 201.94,45.68 0.04,0 -208.35,-15.9 z" style={{ fill: "url(#cfd-linearGradient4604)", fillOpacity: "1", stroke: "none" }} />
    </g>
  </>
);

const cfu = (
  <g>
    <path d="M 421,0 l 15,250" style={{ strokeWidth: 20, stroke: "#dd0000" }} />
    <path d="M 440,0 l 15,250" style={{ strokeWidth: 20, stroke: "#ffffff" }} />
  </g>
);

const clg = (
  <g style={{ clipRule: "nonzero" }}>
    <g transform="rotate(-4) translate(400, 20)">
      <path d="M 60,0 l -170,300 " style={{ stroke: "white", strokeWidth: "25", fill: "none" }} />
      <path d="M 10,0 l -170,300 " style={{ stroke: "white", strokeWidth: "25", fill: "none" }} />
    </g>
  </g>
);

const clm = (
  <g style={{ fill: "#f56600" }}>
    <ellipse cx="350" cy="145" rx="42" ry="36" transform="rotate(-10 350 145)" />
    <ellipse cx="308" cy="88" rx="17" ry="23" transform="rotate(-25 308 88)" />
    <ellipse cx="352" cy="62" rx="17" ry="24" transform="rotate(-5 352 62)" />
    <ellipse cx="398" cy="74" rx="17" ry="24" transform="rotate(15 398 74)" />
    <ellipse cx="418" cy="125" rx="16" ry="22" transform="rotate(35 418 125)" />
  </g>
);

const cls = (
  <g transform="rotate(-4) translate(280, 20)">
    <path
      d="M 85,00 l 200,300 "
      style={{ stroke: "#E60707", strokeWidth: 120, fill: "none" }}
    />
    <path
      d="M 0,00 l 200,300 "
      style={{ stroke: "white", strokeWidth: 35, fill: "none" }}
    />
  </g>
);

const clu = (
  <g style={{ clipRule: "nonzero" }}>
    <g transform="translate(100, 0) matrix(1.09174,0,0,1,-539.413,-528.5)">
      <rect x="495" y="540" width="327" height="218" style={{ fill: "rgb(98,168,229)" }} />
    </g>
    <g transform="translate(130, 0) matrix(1,0,0,1,-374,-466.5)">
      <path d="M510,468C510,468 639.38,727.15 639,727C638.62,726.85 747,725 747,725L763,466L510,468Z" style={{ fill: "white" }} />
    </g>
  </g>
);

const cly = (
  <g style={{ clipRule: "nonzero" }}>
    <g transform="rotate(9) translate(117, 41)">
      <rect width="343.46225" height="25.243303" x="17.163273" y="34.70816" transform="matrix(0.98769, -0.15643, 0.15643, 0.98769, 0, 0)" ry="0" style={{ opacity: "1", fill: "#ffffff", fillOpacity: "1", stroke: "#ffffff", strokeWidth: "0", strokeLinejoin: "bevel", strokeMiterlimit: "4", strokeDasharray: "none", strokeOpacity: "1" }} />
      <rect width="25.410856" height="226.51923" x="240.87384" y="-46.70454" transform="matrix(0.98769, -0.15643, 0.15643, 0.98769, 0, 0)" style={{ opacity: "1", fill: "#ffffff", fillOpacity: "1", stroke: "#ffffff", strokeWidth: "0", strokeLinejoin: "bevel", strokeMiterlimit: "4", strokeDasharray: "none", strokeOpacity: "1" }} />
    </g>
  </g>
);

const cnn = (
  <g transform="rotate(-4) translate(431, 20)">
    <path
      d="M 0,0 l 0,300 "
      style={{ stroke: "#fffd38", strokeWidth: 32, fill: "none" }}
    />
  </g>
);

const cco = (
  <g transform="rotate(-4) translate(410, 85)">
    <path d="M 0,0 l 0,30 l 25,-30 l 0,-30 z" fill="white" />
    <path d="M 0,55 l 0,30 l 25,-30 l 0,-30 z" fill="white" />
    <path d="M 0,110 l 0,30 l 25,-30 l 0,-30 z" fill="white" />
  </g>
);

const clh = (
  <g transform="rotate(-4) translate(400, 20)">
    <path
      d="M 5,00 l 0,300 "
      style={{ stroke: "#d40000", strokeWidth: 20, fill: "none" }}
    />
    <path
      d="M -30,00 l 0,300 "
      style={{ stroke: "#000000", strokeWidth: 20, fill: "none" }}
    />
  </g>
);

const cns = (
  <path d="m 390.05,24.85 -50.48,173.99 -79.85,-4.86 52.4,-163.93" style={{ fill: "#029529", fillOpacity: "1", stroke: "none" }} />
);

const col = (
  <g style={{ clipRule: "nonzero" }}>
    <g transform="rotate(-4) translate(400, 20)">
      <path d="M 100,0 l -170,300 " style={{ stroke: "#9d0000", strokeWidth: "120", fill: "none" }} />
      <path d="M 10,0 l -170,300 " style={{ stroke: "white", strokeWidth: "40", fill: "none" }} />
    </g>
  </g>
);

const cor = (
  <g transform="rotate(-4) translate(400,20)">
    <path
      d="M 0,0 l 0,300 "
      style={{ stroke: "#FFFFFF", strokeWidth: 30, fill: "none" }}
    />
  </g>
);

const coo = (
  <g transform="rotate(-4) translate(400, 20)">
    <path
      d="M 5,00 l 0,300 "
      style={{ stroke: "#800020", strokeWidth: 20, fill: "none" }}
    />
    <path
      d="M -30,00 l 0,300 "
      style={{ stroke: "#800020", strokeWidth: 20, fill: "none" }}
    />
  </g>
);

const cox = (
  <g>
    <g transform="rotate(-4) translate(170)">
      <path
        d="M 95,-5 l 390,300 "
        style={{ stroke: "#CC0000", strokeWidth: 160, fill: "none" }}
      />
    </g>
    <g transform="rotate(-60) scale(1) translate(50, 100)">
      <rect x="0" y="0" width="35" height="400" style={{ fill: "#f9f9f9" }} />
    </g>
  </g>
);

const crc = (
  <g transform="rotate(-4) translate(400,20)">
    <path
      d="M -218,300 l 300,-320 "
      style={{ stroke: "rgb(76, 165, 224)", strokeWidth: 20, fill: "none" }}
    />
    <path
      d="M -245.4146402,300 l 300,-320 "
      style={{ stroke: "rgb(46, 49, 146)", strokeWidth: 20, fill: "none" }}
    />
    <path
      d="M -272.8292805,300 l 300,-320 "
      style={{ stroke: "rgb(249, 222, 6)", strokeWidth: 20, fill: "none" }}
    />
  </g>
);

const cre = (
  <g transform="matrix(0.107947,0,0,0.143713,57.5009,-49.815)">
    <g>
      <g transform="matrix(0.70377,0.71043,-0.67631,0.66997,2549.84,-1376.62)">
        <path d="M2611.5,960.8L2284,629L2284,2135.3C2284,2135.3 2496,1877.6 2598.1,1745.7C2706.4,1605.8 2933.8,1296.2 2933.8,1296.2L2611.5,960.8Z" />
      </g>
      <g transform="matrix(0.58771,0.59471,-0.9023,0.89169,2151.83,-1627.63)">
        <path d="M3285.8,382.4C3285.8,382.4 2896.4,586.9 2729.4,679.1C2579.6,761.8 2284,935.3 2284,935.3L2284,2160C2284,2160 2596,1989.7 2745.4,1893.8C2912.2,1786.7 3284.7,1517.5 3284.7,1517.5L3285.8,382.4Z" style={{ fill: "rgb(203,34,22)" }} />
      </g>
    </g>
  </g>
);

const crn = (
  <g style={{ clipRule: "nonzero" }}>
    <g transform="rotate(-3) translate(110, -80) scale(0.7)">
      <path d="M 255.94 149.75 C 255.68 153.35 255.56 156.99 255.56 160.66 C 255.56 231.87 305.26 291.54 371.84 306.84 L 371.81 307.69 C 305.37 323.1 255.84 382.73 255.84 453.84 C 255.84 461.24 256.37 468.49 257.41 475.59 L 564.62 475.59 L 564.62 149.75 L 255.94 149.75 z " style={{ opacity: "1", fill: "#ff0000", stroke: "none" }} />
    </g>
  </g>
);

const cro = (
  <g transform="rotate(-4) translate(390,52)">
    <rect style={{ fill: "red" }} x="0" y="0" width="60" height="60" />
    <rect style={{ fill: "red" }} x="0" y="120" width="60" height="60" />
    <rect style={{ fill: "red" }} x="-60" y="60" width="60" height="60" />
    <rect style={{ fill: "red" }} x="-120" y="0" width="60" height="60" />
  </g>
);

const cua = (
  <g transform="matrix(0.243246,-0,-0,0.243246,-90.5143,13.705)">
    <g>
      <path d="M959.1 390.5c22.6,31 43.6,65 62.2,99.5l561.8 -28.3 16.1 291.9c33.9,2 68.1,3.7 102.3,5.2l-15.7 -302.7 560.4 -26.1 -6.9 -105.6 -555.7 28.5 -20.1 -287.4 -104.4 6.9 19.1 287 -619 31z" style={{ fill: "white" }} />
    </g>
  </g>
);

const cza = (
  <g transform="matrix(0.107947,0,0,0.143713,57.5009,-49.815)">
    <g transform="matrix(1.0001,0,0,1.0001,-0.37966,-0.13259)">
      <g transform="matrix(0.99945,0,0,0.48572,2.06845,576.401)">
        <rect x="438.532" y="1124.01" width="3302.54" height="181.441" style={{ stroke: "black", strokeWidth: "4.85px", strokeMiterlimit: "1.5" }} />
      </g>
      <g transform="matrix(0.99876,0,0,0.47694,2.03556,500.769)">
        <rect x="438.532" y="1124.01" width="3302.54" height="181.441" style={{ fill: "rgb(203,34,22)" }} />
      </g>
    </g>
  </g>
);

const daw = (
  <g>
    <path
      d="m 337.53904,53.926029 18.1628,0.199425 -0.12489,171.551716 -18.05434,-1.84468 z"
      style={{
        fill: "#ffff00",
        stroke: "#ffff00",
        strokeWidth: 0.8894608,
      }}
      transform="matrix(0.99725744,-0.07401084,0.06574439,0.9978365,0,0)"
    />
    <path
      d="m 398.76443,48.783955 17.90459,0 -0.0784,176.637665 -17.82622,-1.24753 z"
      style={{
        fill: "#ff0000",
        stroke: "#ff0000",
        strokeWidth: 0.8975876,
      }}
      transform="matrix(0.9981883,-0.0601674,0.0627044,0.99803214,0,0)"
    />
    <path
      d="m 367.78846,48.36276 18.00852,-0.199632 -0.11215,174.167182 -17.90915,-1.34752 z"
      style={{
        fill: "#00ffff",
        stroke: "#00ffff",
        strokeWidth: 0.8922177,
      }}
      transform="matrix(0.99831419,-0.05804124,0.06411709,0.99794238,0,0)"
    />
  </g>
);

const den = (
  <g transform="rotate(-3) scale(0.71 0.81) translate(140,50)">
    <rect width="100%" height="25%" y="37.5%" style={{ fill: "#dd0000" }} />
  </g>
);

const det = (
  <g>
    <path d="m 0,55 145,144 355,6 0,-68 z" style={{ fill: "#1560bd", fillOpacity: "1" }} />
    <path d="M 0,27 0,5 500,5 500,109 z" style={{ fill: "#ffffff" }} />
  </g>
);

const dmt = (
  <g style={{ clipRule: "nonzero" }}>
    <g transform="rotate(-4) translate(430,20)">
      <path d="M 100,0 l -170,300 " style={{ stroke: "white", strokeWidth: "120", fill: "none" }} />
    </g>
  </g>
);

const dph = (
  <g transform="matrix(1,-0,-0,1,-92,11)">
    <g style={{ stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" }}>
      <g transform="translate(1, 1)" style={{ fillRule: "nonzero" }}>
        <g transform="translate(196, 3)">
          <polygon transform="translate(283.29792, 99.11083) rotate(64) translate(-283.29792, -99.11083) " points="194.79 81.86 384.47 87.6 370.45 116.36 182.12 112.4" style={{ fill: "#FFFFFF" }} />
        </g>
      </g>
    </g>
  </g>
);

const dul = (
  <g style={{ clipRule: "nonzero" }}>
    <g transform="rotate(-3)  translate(0,130) ">
      <path d="M 410,-100 L 295,0 L 400,100 L 500,100 L 510,-100 Z" style={{ fill: "white" }} />
      <path d="M 445,-100 L 330,0 L 435,100 L 500,100 L 510,-100Z" style={{ fill: "black" }} />
    </g>
  </g>
);

const dur = (
  <g transform="rotate(11) translate(440,-80)">
    <path
      d="M -60,00 l 80,300 "
      style={{ stroke: "#C8AC59", strokeWidth: 45, fill: "none" }}
    />
  </g>
);

const dus = (
  <g transform="translate(264,20) scale(0.070)">
    <path
      style={{ fill: "#15392D" }}
      d="M1224 2062c-2,0 -3,0 -4,0 0,0 0,0 -1,0 -1,0 -2,0 -3,0 0,0 -1,0 -1,0 -1,0 -2,0 -3,0 -87,0 -173,0 -260,0 154,-147 183,-421 188,-660l-41 0c-8,0 -15,-5 -15,-12l0 -34c-250,1 -493,23 -640,140 0,-67 0,-140 0,-208 0,-1 0,-2 0,-3 0,-67 0,-141 0,-208 147,117 390,140 640,141l0 -36c0,-7 7,-12 15,-12l41 0c-5,-240 -33,-516 -188,-665 87,0 173,0 260,0 1,0 2,0 3,0 0,0 1,0 1,0 1,0 2,0 3,0 1,0 1,0 1,0 1,0 2,0 4,0 86,0 172,0 259,0 -155,149 -183,425 -188,665l43 0c9,0 16,5 16,12l0 36c251,-1 498,-23 646,-141 0,67 0,141 0,208 0,1 0,2 0,3 0,68 0,141 0,208 -148,-118 -395,-139 -646,-140l0 34c0,7 -7,12 -16,12l-43 0c5,239 34,513 188,660 -87,0 -173,0 -259,0z"
    />
    <path
      style={{ fill: "#15392D" }}
      d="M2259 461l351 -193 30 388 -351 193 -30 -388z"
    />
    <path
      style={{ fill: "#15392D" }}
      d="M2319 1237l351 -193 30 388 -351 193 -30 -388z"
    />
    <path
      style={{ fill: "#15392D" }}
      d="M2379 2013l351 -193 30 388 -351 193 -30 -388z"
    />
  </g>
);

const edu = (
  <g style={{ clipRule: "nonzero" }}>
    <g transform="rotate(-3)  translate(0,130) ">
      <path d="M 465,-100 L 350,0 L 455,100 Z" style={{ fill: "black" }} />
    </g>
  </g>
);

const eex = (
  <g>
    <path d="M 365.51,-5.51 386.43,293.76" style={{ fill: "none", stroke: "#ffcc00", strokeWidth: "20" }} />
  </g>
);

const ema = (
  <g style={{ clipRule: "nonzero" }}>
    <g transform="rotate(-4)  translate(355,143) ">
      <path d="M 60,-100 L -15,0 L 60,100" style={{ stroke: "#FFD700", strokeWidth: "25", fill: "none" }} />
    </g>
  </g>
);

const emm = (
  <g transform="rotate(-4) translate(400,20)">
    <path
      d="M -50,00 l 80,300 "
      style={{ stroke: "#FF7777", strokeWidth: 20, fill: "none" }}
    />
    <path
      d="M -85,00 l 80,300 "
      style={{ stroke: "#FF7777", strokeWidth: 20, fill: "none" }}
    />
  </g>
);

const ed = (
  <g transform="rotate(-4) translate(400, 20)">
    <path
      d="M 19,00 l 0,300 "
      style={{ stroke: "white", strokeWidth: 18, fill: "none" }}
    />
    <path
      d="M -17,00 l 0,300 "
      style={{ stroke: "#0097ff", strokeWidth: 18, fill: "none" }}
    />
  </g>
);

const esp = (
  <>
    <clipPath id="vert30stripe">
      <rect
        transform="rotate(-4) scale(0.63 0.81) translate(210,60)"
        x="33.333%"
        y="0%"
        width="33.333%"
        height="100%"
      />
    </clipPath>
    <g clipRule="nonzero" clipPath="url(#vert30stripe)">
      <rect fill="#fbea0e" x="0" y="0" width="100%" height="100%" />
    </g>
  </>
);

const est = (
  <g transform="rotate(-3) scale(0.71 0.81) translate(140,50)">
    <rect style={{ fill: "black" }} width="100%" height="33.33%" y="33.33%" />
    <rect style={{ fill: "white" }} width="100%" height="33.33%" y="66.66%" />
  </g>
);

const eur = (
  <g style={{ clipRule: "nonzero" }}>
    <g transform="rotate(-3)  translate(0,130) ">
      <rect x="0" y="0" width="100%" height="100%" style={{ fill: "white" }} />
      <path d="M 465,-100 L 350,0 L 455,100 Z" style={{ fill: "red" }} />
    </g>
  </g>
);

const eve = (
  <g>
    <path transform="matrix(1,0,0,1.1692,72,-26.57941)" d="M 365.51,-5.51 386.43,293.76" style={{ fill: "none", stroke: "#ffffff", strokeWidth: "20" }} />
  </g>
);

const fal = (
  <path d="M 412,0 l 16,250" style={{ strokeWidth: 75, stroke: "#ffca18" }} />
);

const fam = (
  <g transform="matrix(0.979394,-0,-0,0.979394,-90.5144,13.7051)">
    <g>
      <g>
        <path d="M489.66 133.45c-11.98,-9.83 -22.59,-20.12 -24.63,-21.94 -0.08,-0.07 -0.24,-0.2 -0.35,-0.23 -0.19,-0.05 -0.38,-0.14 -0.38,-0.14 -0.64,-0.04 -0.67,-0.09 -0.8,-0.08 -5.07,0.32 -9.34,6.32 -9.45,11.09 -0.32,13.29 11.15,18.76 21.51,18.03 9.45,-0.67 14.09,-6.72 14.09,-6.72zm-7.37 -35.47c0.01,0.4 -0.27,0.71 -0.79,0.66 -0.72,-0.07 -0.99,-0.94 -1.24,-1.42 -2.02,-4.14 -6.12,-8.67 -11.03,-8.57 -3.7,0.08 -6.3,3.07 -6.61,6.92 -0.22,2.72 1.05,5.85 3.77,9.29 5.04,6.36 14.51,14.89 26.05,24.63 0,0 2.75,-4.17 2.99,-8.26 0.54,-9.12 -7.68,-5.32 -7.74,-7.89 -0.02,-0.89 1.19,-0.75 1.84,-0.76 3.2,-0.06 5.88,-0.1 7.08,-0.13 2.72,-0.06 1.44,-0.05 5.07,-0.14 0.72,-0.02 1.17,0.14 1.15,0.94 -0.06,2.06 -3.12,0.03 -3.39,3.31 -0.39,4.68 -1.13,9.55 -4.41,15.25 0,0 5.5,5.45 13.66,7.74 1.64,0.46 1.13,0.33 2.24,0.55 3.69,0.74 4.55,0.46 4.55,0.46 -1.84,1.85 -6.37,2.31 -9.88,1.62 -6.55,-1.29 -12.98,-6.34 -12.98,-6.34 -6.02,7.08 -13.94,9.01 -19.85,9.15 -15.5,0.37 -22.49,-10.12 -22.97,-18.86 -0.5,-9.15 5.94,-17.68 13.12,-17.57 -0.07,0 -6.66,-6.83 -3.99,-14.02 1.92,-5.16 5.51,-7.53 11.85,-7.67 5.15,-0.11 7.91,2.18 8.58,2.15 0.68,-0.03 0.79,-0.91 1.51,-0.93 1.13,-0.02 1,1.51 1.01,2.23l0.41 7.64z" style={{ fill: "white", fillRule: "nonzero" }} />
        <path d="M453.17 60.3c-5.62,0.11 -10.27,1.12 -10.14,5.35l0.3 15.33c0.08,3.5 0.03,3.64 2.67,3.58l6.27 -0.14c6.87,-0.15 4.86,-6.85 6.44,-6.89 0.53,-0.01 0.95,0.89 0.96,1.55 0.06,2.89 0.11,5.66 0.17,8.3 0.05,2.15 0.11,4.33 0.15,6.56 0.02,0.74 -0.44,1.08 -0.91,1.09 -2.05,0.04 0.03,-7.65 -5.52,-7.53l-8.92 0.2c-1.52,0.03 -1.15,1.81 -1.12,3.05l0.38 17.06c0.29,8.45 6.62,4.52 6.75,7.07 0.06,1.15 -0.84,1.05 -1.3,1.06 -0.46,0.01 -0.67,0.01 -6.82,0.15 -3.37,0.07 -6.13,0.14 -7.32,0.17 -1.62,0.04 -2.23,0.1 -2.27,-0.56l0 -0.07 0 -0.02c0.05,-3.3 6.44,0.6 5.49,-11.33l-0.78 -35.44c-0.46,-4.1 0.38,-8.12 -3.2,-8.7 -0.53,-0.15 -1.99,-0.29 -2.01,-1.28 -0.01,-0.66 0.32,-1.01 2.29,-1.04 13.11,-0.2 20.76,-0.41 25.13,-0.51 1.55,-0.04 5.82,-0.17 9.36,-0.25 0.53,-0.01 0.68,0.81 0.7,1.8 0.2,9.17 -0.36,9.81 -1.1,9.85 -1.58,0.1 -0.82,-3.96 -1.92,-5.84 -1.78,-2.77 -8.24,-2.7 -10.89,-2.65 -0.53,0.01 -1.05,0.02 -1.56,0.03l-1.3 0.03z" style={{ fill: "white", fillRule: "nonzero" }} />
        <path d="M529.25 106.62c0.45,7.56 4.82,3.78 4.88,6.67 0.02,0.83 -0.84,0.85 -1.57,0.86 -1.25,0.03 -3.53,0.07 -6.17,0.13 -2.05,0.05 -4.2,0.1 -5.85,0.13 -0.6,0.01 -0.74,-0.4 -0.74,-0.73 -0.05,-2.48 4.36,0.13 3.95,-6.86l-1.37 -32.02 -0.33 -5.81c0,0 -0.87,2.63 -1.39,3.63l-13.65 36.63c-0.31,0.75 -1.3,4.16 -1.96,4.17 -0.66,0.01 -1.16,-1.79 -1.37,-2.36l-15.01 -37.91c-0.22,-0.68 -1.6,-3.38 -1.6,-3.38l0.48 5.13 -0.15 29c0.09,12.55 6.8,7.2 6.86,10.17 0.02,0.82 -0.27,0.94 -1.22,0.96 -0.89,0.02 -4.08,-0.03 -6.06,0.02 -3.71,0.1 -4.15,0.12 -5.3,0.12 0.34,0 -2.14,0.34 -2.26,-0.7 -0.35,-2.88 4.75,0.86 5.08,-8.29 0.48,-13.48 0.41,-22.23 0.21,-30.98 -0.43,-19.4 -6.29,-14.33 -6.25,-17.46 0.01,-0.74 0.51,-0.92 1.1,-0.93 1.19,-0.03 2.3,-0.05 3.55,-0.07 1.19,-0.03 2.46,-0.03 3.65,-0.09 1.12,-0.05 0.95,1.37 1.44,2.28l16.64 41.6c0.76,1.72 1.05,2.46 1.51,2.45 0.33,-0.01 0.95,-1.76 1.95,-4.5l14.85 -39.81c0.38,-0.92 1.04,-2.8 1.57,-2.8 2.23,-0.01 2.9,-0.1 3.23,-0.11 1.34,-0.03 1.89,-0.08 3.13,-0.07 0.38,0 0.67,0.48 0.68,0.98 0.06,2.64 -4.82,-0.8 -4.34,9.02l1.83 40.93z" style={{ fill: "white", fillRule: "nonzero" }} />
        <polygon points="489.36,111.62 489.96,112.03 490.79,112.31 491.69,112.45 493.03,112.51 494.63,112.67 495.64,112.99 494.76,116.82 494.01,116.06 493.27,115.6 492.39,115.26 491.44,115.07 490.23,114.97 489.22,114.86 487.62,114.38 486.74,112.3 " style={{ fill: "white", fillRule: "nonzero" }} />
      </g>
    </g>
  </g>
);

const fra = (
  <>
    <clipPath id="vert30stripe">
      <rect
        transform="rotate(-4) scale(0.63 0.81) translate(210,60)"
        x="33.333%"
        y="0%"
        width="33.333%"
        height="100%"
      />
    </clipPath>
    <g clipPath="url(#vert30stripe)">
      <rect
        style={{ fill: "#f2f2f2" }}
        x="0"
        y="0"
        width="100%"
        height="100%"
      />
    </g>
    <rect
      transform="rotate(-4) scale(0.63 0.81) translate(210,60) "
      x="66.666%"
      y="0%"
      width="33.333%"
      height="100%"
      style={{ fill: "#ef2b2d" }}
    />
  </>
);

const frb = (
  <path d="M 432,0 l 16,250" style={{ strokeWidth: 35, stroke: "#ffff71" }} />
);

const gbr = (
  <g transform="rotate(-4) translate(435,20)">
    <path
      d="M -100,100 l 0,50"
      style={{ strokeWidth: 100, stroke: "#000050" }}
    />
    <path d="M 0,0 l 0,250" style={{ strokeWidth: 30, stroke: "#B00000" }} />
    <path
      d="M -150,100 l 100,50"
      style={{ strokeWidth: 8, stroke: "#f0f0f0" }}
    />
    <path
      d="M -150,150 l 100,-50"
      style={{ strokeWidth: 8, stroke: "#f0f0f0" }}
    />
    <path
      d="M -150,100 l 100,50"
      style={{ strokeWidth: 3, stroke: "#B00000" }}
    />
    <path
      d="M -150,150 l 100,-50"
      style={{ strokeWidth: 3, stroke: "#B00000" }}
    />
    <path
      d="M -100,100 l 00,50"
      style={{ strokeWidth: 14, stroke: "#f0f0f0" }}
    />
    <path
      d="M -150,125 l 100,00"
      style={{ strokeWidth: 14, stroke: "#f0f0f0" }}
    />
    <path
      d="M -100,100 l 00,50"
      style={{ strokeWidth: 8, stroke: "#B00000" }}
    />
    <path
      d="M -150,125 l 100,00"
      style={{ strokeWidth: 8, stroke: "#B00000" }}
    />
    <path
      d="M -100,150 l 0,10"
      style={{ strokeWidth: 120, stroke: "#f0f0f0" }}
    />
    <path
      d="M -100,90 l 00,10"
      style={{ strokeWidth: 120, stroke: "#f0f0f0" }}
    />
    <path
      d="M -155,90 l 00,70"
      style={{ strokeWidth: 10, stroke: "#f0f0f0" }}
    />
    <path d="M -45,90 l 00,70" style={{ strokeWidth: 10, stroke: "#f0f0f0" }} />
  </g>
);

const geo = (
  <g style={{ clipRule: "nonzero" }}>
    <g transform="rotate(-4)  translate(320,140) ">
      <path d="M 150,-150 L 0,0 L 150,150 Z" style={{ fill: "#003366" }} />
    </g>
  </g>
);

const gfb = (
  <g transform="matrix(0.107947,0,0,0.143713,57.5009,-49.815)">
    <g transform="matrix(0.70653,-0.70768,0.70768,0.70653,953.183,2013.68)">
      <g>
        <path d="M2410.5,389.8L1648.6,389.8L1647.5,1152L1868.4,1337.7L1869,610.5L2595.8,610.9L2410.5,389.8Z" style={{ fill: "rgb(11,115,36)" }} />
      </g>
    </g>
    <g transform="matrix(0.70653,-0.70768,0.70768,0.70653,769.183,2013.58)">
      <g>
        <path d="M2421.1,390.5L1648.6,389.8L1647.5,1161.9L1721.2,1226L1704,445.6L2473.9,445.9L2421.1,390.5Z" style={{ fill: "rgb(11,115,36)" }} />
      </g>
    </g>
    <g>
      <g transform="matrix(0.7911,-0.45728,0.45728,0.7911,785.047,1759.74)">
        <g transform="matrix(1,0,0,1.10509,0.00376,-126.912)">
          <path d="M2798.2,1021.1L2895.3,1174.9L2701.2,1174.9L2798.2,1021.1Z" style={{ fill: "rgb(203,34,22)" }} />
        </g>
        <g transform="matrix(-1,0.00002,-0.00002,-1.10509,5596.53,2356.34)">
          <path d="M2798.2,1021.1L2895.3,1174.9L2701.2,1174.9L2798.2,1021.1Z" style={{ fill: "rgb(203,34,22)" }} />
        </g>
      </g>
      <g transform="matrix(0.7911,-0.45728,0.45728,0.7911,487.187,1520.08)">
        <g transform="matrix(1,0,0,1.10509,0.00376,-126.912)">
          <path d="M2798.2,1021.1L2895.3,1174.9L2701.2,1174.9L2798.2,1021.1Z" style={{ fill: "rgb(203,34,22)" }} />
        </g>
        <g transform="matrix(-1,0.00002,-0.00002,-1.10509,5596.53,2356.34)">
          <path d="M2798.2,1021.1L2895.3,1174.9L2701.2,1174.9L2798.2,1021.1Z" style={{ fill: "rgb(203,34,22)" }} />
        </g>
      </g>
      <g transform="matrix(0.7911,-0.45728,0.45728,0.7911,786.047,1281.74)">
        <g transform="matrix(1,0,0,1.10509,0.00376,-126.912)">
          <path d="M2798.2,1021.1L2895.3,1174.9L2701.2,1174.9L2798.2,1021.1Z" style={{ fill: "rgb(203,34,22)" }} />
        </g>
        <g transform="matrix(-1,0.00002,-0.00002,-1.10509,5596.53,2356.34)">
          <path d="M2798.2,1021.1L2895.3,1174.9L2701.2,1174.9L2798.2,1021.1Z" style={{ fill: "rgb(203,34,22)" }} />
        </g>
      </g>
    </g>
  </g>
);

const gir = (
  <g>
    <path
      d="m 398.76443,48.783955 17.90459,0 -0.0797,176.659105 -17.77288,-1.07283 z"
      style={{
        fill: "#ffffff",
        stroke: "#ffffff",
        strokeWidth: 0.8975876,
      }}
      transform="matrix(0.9981883,-0.0601674,0.0627044,0.99803214,0,0)"
    />
    <path
      d="m 380.01546,49.005023 17.92068,-0.25637 -0.0121,175.582417 -17.80795,-1.53822 z"
      style={{
        fill: "#ff0000",
        stroke: "#ff0000",
        strokeWidth: 0.8975876,
      }}
      transform="matrix(0.9981883,-0.0601674,0.0627044,0.99803214,0,0)"
    />
    <path
      d="m 363.65879,27.224199 17.87215,-1.168078 10.99775,173.410529 -17.80795,-0.36422 z"
      style={{
        fill: "#ffffff",
        stroke: "#ffffff",
        strokeWidth: 0.8975876,
      }}
    />
  </g>
);

const ger = (
  <g transform="rotate(-3) scale(0.71 0.81) translate(140,50)">
    <rect style={{ fill: "#dd0000" }} width="100%" height="33.33%" y="33.33%" />
    <rect style={{ fill: "#ffce00" }} width="100%" height="33.33%" y="66.66%" />
  </g>
);

const gkp = (
  <g transform="matrix(0.107947,0,0,0.143713,57.5009,-49.815)">
    <g>
      <g transform="matrix(1,0,0,0.97042,0,41.0621)">
        <path d="M595,857.2L440,947.8L440,1304L595,1388.2L595,857.2Z" style={{ fill: "rgb(38,126,196)" }} />
      </g>
      <g transform="matrix(2.00698,0,0,1.07582,-3746.92,-90.2879)">
        <path d="M3727.8,704.9L3547.8,664.5L3548.8,1590.2L3729.4,1548.9L3727.8,704.9Z" style={{ fill: "rgb(38,126,196)" }} />
      </g>
    </g>
  </g>
);

const glo = (
  <path
    d="M 178,196 C 250,120 340,50 450,26"
    style={{ fill: "none", stroke: "#ffffff", strokeWidth: 12, strokeLinecap: "round" }}
  />
);

const gls = (
  <g style={{ clipRule: "nonzero" }}>
    <g transform="rotate(-4) translate(400, 20)">
      <path d="M 14,0 l 0,300 " style={{ stroke: "#FFFFFF", strokeWidth: "12", fill: "none" }} />
      <path d="M 0,0 l 0,300 " style={{ stroke: "#EE4B2B", strokeWidth: "18", fill: "none" }} />
    </g>
  </g>
);

const glw = (
  <g transform="rotate(-3) translate(0,130) ">
    <rect fill="#ffff33" x="0" y="0" width="100%" height="50%" />
    <path d="M 465,-100 L 350,0 L 455,100 Z" fill="#101010" />
  </g>
);

const gms = (
  <g transform="rotate(-3) translate(0,130)">
    <path d="M 465,-100 350,0 455,100 z" style={{ fill: "#9a011d" }} />
  </g>
);

const gol = (
  <g>
    <path transform="matrix(1,0,0,1.1692,72,-26.57941)" d="M 365.51,-5.51 386.43,293.76" style={{ fill: "none", stroke: "#ff0000", strokeWidth: "20", strokeOpacity: "1" }} />
  </g>
);

const gre = (
  <path
    transform="rotate(-3) translate(100,30)"
    d="M 200,0 L 200,200 M 0,100 L 400,100"
    style={{ stroke: "white", strokeWidth: 25 }}
  />
);

const grm = (
  <g transform="matrix(0.107947,0,0,0.143713,57.5009,-49.815)">
    <g>
      <g transform="matrix(9.88235,0,0,0.59029,-4905.06,322.649)">
        <path d="M875,1659L540.9,1655.7L553.8,1776L875,1776L875,1659Z" style={{ fill: "rgb(11,115,36)" }} />
      </g>
      <g transform="matrix(9.88235,0,0,0.5795,-4905.06,-65.6229)">
        <path d="M875,1659L552.1,1659L540.9,1781.5L875,1776L875,1659Z" style={{ fill: "rgb(11,115,36)" }} />
      </g>
      <g transform="matrix(1.00204,0,0,1.26272,-4.75794,-304.988)">
        <rect x="443.876" y="1002.48" width="3291.2" height="272.462" style={{ fill: "rgb(253,218,37)" }} />
      </g>
    </g>
  </g>
);

const grv = (
  <>
    <g style={{ clipRule: "nonzero" }}>
      <g transform="rotate(-4) translate(400,20)">
        <path d="M 5,0 l 0,300 " style={{ stroke: "#800020", strokeWidth: "20", fill: "none" }} />
        <path d="M -30,0 l 0,300 " style={{ stroke: "#800020", strokeWidth: "20", fill: "none" }} />
      </g>
    </g>
    <path d="M 379.62,199.55 L 374.83,199.45 L 374.82,198.4 C 374.81,197.82 372.12,159.04 368.84,112.21 C 365.55,65.39 362.89,27.05 362.92,27.02 C 363,26.94 382.46,25.68 382.55,25.76 C 382.66,25.86 394.65,197.22 394.65,198.69 L 394.65,199.79 L 389.53,199.72 C 386.71,199.68 382.25,199.6 379.62,199.55 z" style={{ fill: "#ff6600", fillOpacity: "1" }} />
    <path d="M 418.29,200.2 L 409.92,200.1 L 409.93,199.38 C 409.94,198.98 407.21,159.57 403.87,111.8 C 400.54,64.03 397.87,24.88 397.94,24.81 C 398.2,24.55 417.23,23.37 417.42,23.59 C 417.6,23.81 429.79,197.62 429.76,199.55 C 429.74,200.4 429.68,200.44 428.2,200.36 C 427.35,200.32 422.89,200.25 418.29,200.2 L 418.29,200.2 z" style={{ fill: "#ff4800", fillOpacity: "1" }} />
    <path d="M 383.52,199.55 L 374.83,199.45 L 374.83,198.08 C 374.83,197.32 372.18,158.63 368.95,112.1 C 365.72,65.58 363.16,27.42 363.27,27.31 C 363.58,27 382.06,25.89 382.29,26.17 C 382.41,26.31 385.17,64.81 388.43,111.73 C 391.69,158.64 394.44,197.65 394.54,198.41 L 394.72,199.79 L 393.47,199.71 C 392.78,199.67 388.3,199.6 383.52,199.55 L 383.52,199.55 z" style={{ fill: "#ff4800", fillOpacity: "1" }} />
  </>
);

const gry = (
  <g style={{ clipRule: "nonzero" }}>
    <g transform="rotate(11) translate(450,-80)">
      <path d="M -60,0 l 80,300 " style={{ stroke: "white", strokeWidth: "39", fill: "none" }} />
      <path d="M -60,0 l 80,300 " style={{ stroke: "black", strokeWidth: "13", fill: "none" }} />
    </g>
  </g>
);

const gsc = (
  <g style={{ clipRule: "nonzero" }}>
    <g transform="rotate(-4)  translate(270,143) ">
      <path d="M 60,-100 L 0,0 L 60,100" style={{ stroke: "#DFDFDD", strokeWidth: "30", fill: "none" }} />
    </g>
    <g transform="rotate(11) translate(495,-80)">
      <path d="M -60,0 l 80,300 " style={{ stroke: "#DFDFDD", strokeWidth: "39", fill: "none" }} />
    </g>
  </g>
);

const gtm = (
  <g>
    <path
      d="M 470,10 145,199 500,230 z"
      style={{ fill: "#00792c", stroke: "none" }}
    />
    <path
      d="m 432.14757,21.780669 12.2463,-0.840751 c 1.41425,0.238775 2.84975,0.817522 3.75407,1.651223 0.84763,1.131188 1.50412,2.26233 1.82057,3.542251 l 0.6532,9.027091 -261.11613,149.440487 -7.7643,-2.0481 -4.67062,-1.37297 -1.23447,-5.12152 -2.0185,-6.74448 -2.97685,-8.42085 z"
      style={{ fill: "#ffff00", stroke: "none" }}
    />
  </g>
);

const gua = (
  <>
    <g style={{ clipRule: "nonzero", fillRule: "evenodd", fill: "#ffffff", fillOpacity: "1" }}>
      <rect x="39.863327" y="-2.8473804" width="100%" height="100%" style={{ fill: "#ffffff", fillRule: "evenodd", fillOpacity: "1" }} />
    </g>
    <path d="m 111.34,44.97 345.25,89.48 c 0,0 -6.8,-104.89 -6.9,-106.98 -0.1,-2.14 -1.56,-6.57 -6.75,-6.1 -4.41,0.39 -329.53,22.08 -330.66,22.16 -1.13,0.08 -0.94,1.45 -0.94,1.45 z" style={{ fill: "#bc1010", fillOpacity: "1", stroke: "none", strokeWidth: "1px", strokeLinecap: "butt", strokeLinejoin: "miter", strokeOpacity: "1" }} />
    <path d="M 105.52,73.55 392.01,200.3 c 0,0 -166.26,-2.67 -215.01,-19.3 -6.46,-27.51 -34.24,-89.1 -70,-104 -2.31,-0.7 -1.48,-3.45 -1.48,-3.45 z" style={{ fill: "#bc1010", stroke: "none", strokeWidth: "1px", strokeLinecap: "butt", strokeLinejoin: "miter", strokeOpacity: "1", fillOpacity: "1" }} />
  </>
);

const gub = (
  <path d="M 345,230 280,0 l 220,0 0,230 z" style={{ fill: "#ffd000" }} />
);

const gui = (
  <g style={{ clipRule: "nonzero" }}>
    <g transform="rotate(-4) translate(410, 20)">
      <path d="M 0,0 l 0,300 " style={{ stroke: "#ece919", strokeWidth: "25", fill: "none" }} />
      <path d="M -50,0 l 0,300 " style={{ stroke: "#ece919", strokeWidth: "25", fill: "none" }} />
    </g>
  </g>
);

const gwc = (
  <g>
    <path transform="matrix(1,0,0,1.1692,72,-26.57941)" d="M 365.51,-5.51 386.43,293.76" style={{ fill: "none", stroke: "#660033", strokeWidth: "20", strokeOpacity: "1" }} />
  </g>
);

const gzb = (
  <g transform="matrix(0.107947,0,0,0.143713,57.5009,-49.815)">
    <g transform="matrix(1.15063,0,0,1.15063,-620.68,-143.191)">
      <path d="M3168,1059C3170.2,1059.7 3180.1,1042 3184,1039C3188.8,1035.3 3196,1044 3203,1029C3213.7,1006 3196.9,1001.6 3197.7,993.7C3198.4,986.3 3229.9,977.3 3210,931C3203.6,916.1 3187.6,904 3169.2,906.8C3149.8,909.7 3155.7,923.2 3149.8,923.8C3139.4,924.9 3141,917 3141,917C3141,917 3136.9,893.3 3162,888C3190.5,881.9 3211.7,890.7 3224.6,902.4C3237.4,914 3245.7,941 3246,972C3246.1,985.7 3240.9,1010.7 3234.4,1022.6C3214.9,1058.5 3172.1,1075.7 3173,1077C3174.7,1079.3 3209.8,1109.4 3234,1119C3261.3,1129.8 3310.8,1131.7 3331,1140C3342.7,1144.8 3353.7,1156.8 3356,1167C3360,1185 3346.1,1218.7 3363,1233C3381.1,1248.3 3416.7,1222.5 3424,1225C3431.1,1227.5 3442.5,1267.3 3451,1287C3454,1294 3468.4,1295.1 3472.7,1304.8C3479.5,1320.3 3475.3,1331.9 3474,1340C3473,1345.9 3466.5,1350.9 3462,1351C3454.5,1351.2 3452,1338.2 3448,1338C3445,1337.8 3444.2,1349.8 3438,1350C3433.8,1350.1 3427.3,1338.7 3423,1339C3418.7,1339.3 3418.3,1351.8 3415,1352C3411.7,1352.2 3398.4,1343.7 3400,1334C3403.6,1313 3435.7,1324.9 3431,1310C3427.4,1298.6 3416.2,1310.4 3414,1309C3411.8,1307.6 3425.6,1265.8 3410,1262C3400.2,1259.6 3392.4,1301.9 3367,1307C3348.5,1310.7 3327.8,1284.8 3322,1286C3319,1286.6 3312.5,1288.1 3308.1,1291.8C3302.5,1296.3 3299.1,1303.1 3297,1303C3294.8,1302.9 3295.4,1294 3298,1286.3C3300.4,1279.5 3304.8,1273.9 3304,1273C3303.3,1272.2 3298.8,1272.1 3295.3,1273.8C3292,1275.6 3289.7,1279.1 3289,1278C3287.5,1275.4 3288.4,1265.7 3295.6,1258.1C3307.1,1245.9 3325.5,1229.4 3317,1199C3310.8,1177 3290.4,1176.4 3271,1172C3257.9,1169 3224.6,1169.8 3202.9,1169.1C3180.8,1168.4 3164.4,1164.1 3158,1163C3154.4,1162.3 3164.8,1149.2 3166,1146C3166.3,1145.3 3165.5,1143.4 3165,1144C3161.3,1148.3 3155.6,1159.8 3144.5,1172.8C3135.4,1183.4 3119.2,1186.8 3119,1193.2C3118.7,1200.7 3129.6,1197.4 3129.9,1206.9C3130.3,1218.2 3125.3,1223.8 3122,1222C3118.7,1220.2 3114.8,1202.8 3107.1,1203C3103.1,1203.1 3103.6,1209.3 3100.5,1214C3096.1,1220.4 3088.2,1225.5 3084,1223C3080.5,1220.9 3085.7,1213.3 3089.2,1207.2C3091.9,1202.8 3093.2,1199.7 3092,1198C3090.9,1196.4 3087.6,1196.8 3081.8,1197.5C3073.7,1198.5 3065.6,1202.9 3066.2,1199.2C3066.8,1194.9 3070.9,1188.1 3079.4,1185.5C3085,1183.8 3093.1,1184.3 3094,1182.2C3096,1177.5 3094.4,1176.2 3092,1172.8C3089.5,1169.3 3082.9,1165.7 3085,1163C3086.3,1161.2 3099.3,1163.7 3102.8,1167.2C3106.8,1171.4 3103.5,1175.7 3108.1,1176.7C3115.1,1178.2 3130.9,1149.8 3135.6,1143.1C3140.1,1136.7 3147.3,1127.5 3149,1124C3149.4,1123.2 3147.6,1122.8 3147,1123.4C3145.2,1125.1 3143.8,1129.2 3140.2,1133.5C3136.2,1138.2 3126.4,1149 3123,1150C3119.3,1151.2 3113.2,1132.7 3111,1116.3C3109,1101.6 3112.5,1091.6 3113,1090C3113.4,1088.6 3108.5,1090.9 3103.7,1095.8C3099.8,1099.7 3098.8,1106.2 3098,1103C3096.4,1096.6 3095.7,1081.8 3100.1,1063.4C3104.5,1044.5 3122,1033 3122,1033C3122,1033 3116.5,1031.3 3111.2,1031.1C3105.7,1030.9 3100.7,1033.5 3102,1031C3103.3,1028.5 3107.5,1020.8 3119.3,1016.3C3134.4,1010.7 3151.2,1003.1 3158,998C3165,992.8 3170.8,979.3 3169,970C3164.8,947.7 3147.5,944.4 3148,941C3148.4,938.6 3157.5,929.8 3176,935C3188.3,938.4 3192.9,946.7 3197.4,953C3201.9,959.1 3205.5,965.3 3206,969C3206.3,971.5 3202.1,968.8 3198.5,967.7C3195,966.8 3193.5,967 3193,968C3192.4,969.2 3196.8,982.4 3194.4,999C3192.2,1014.3 3187.4,1024.6 3185,1028C3183,1030.8 3182.9,1026 3181.1,1021.2C3179.1,1016 3176.1,1013.6 3176.1,1016C3176,1018.3 3178.3,1024.2 3177.1,1035.7C3176,1046.4 3166.8,1058.6 3168,1059Z" style={{ fill: "white" }} />
      <path d="M3157,996C3154.8,998.4 3155.7,990.4 3150.4,985.2C3146.3,981.2 3135.9,979 3135,978C3133.9,976.9 3140.2,974.8 3146,974.7C3152.5,974.6 3154.4,975.9 3155,975C3156.1,973.1 3150.9,961.7 3143,959C3131,954.9 3121.3,963 3118,963C3116.3,963 3122.3,949.3 3127,946C3131.7,942.7 3140.7,941.6 3146,943C3148.9,943.8 3163.8,954.3 3166,970C3167.8,983.2 3161.7,990.8 3157,996Z" style={{ fill: "white" }} />
      <path d="M3146,969.4C3141.4,967.7 3131.6,968.5 3123,969.4C3111.6,970.6 3102.2,985.2 3092,976C3080.7,965.8 3105.7,954.3 3102,954C3098.3,953.7 3077.5,955.7 3075.9,975C3074.9,988.1 3089.3,992.5 3099,991C3107.9,989.7 3114.6,981.8 3125,977C3136.2,971.8 3148.5,972.3 3152,973C3154.6,973.5 3149.6,970.7 3146,969.4Z" style={{ fill: "white" }} />
      <path d="M3189,1073C3195.8,1062.2 3248.9,1046.2 3249.7,972.6C3250.4,915.3 3226.7,894.4 3204.2,887.4C3197.9,885.4 3192.6,884.5 3186.7,884C3176.1,883.2 3166,884.9 3161,884C3157.3,883.3 3158.7,877.5 3155.7,873C3152,867.5 3142.6,861.8 3145,859C3151.4,851.7 3170.7,870.2 3176,869C3178.7,868.4 3177.3,863.7 3174,859.5C3170.4,854.8 3165.3,849.9 3170,848C3174,846.4 3183.5,849.9 3190.8,855.8C3197.8,861.5 3202.7,869.6 3206,870C3208.7,870.3 3206.6,863.9 3204.9,860.4C3203.1,856.6 3203.7,851.3 3209,852C3211.7,852.3 3216.6,857.1 3219.5,863.4C3222.6,870.2 3225.6,880.5 3228,882C3230.4,883.5 3233.9,878.9 3232.5,874.9C3231.4,871.5 3231.9,866.4 3236,867C3241.8,867.9 3244.2,875.2 3244.4,881.9C3244.6,889.4 3242.4,896.3 3244,898C3245.6,899.7 3248.7,897.1 3249.2,893.1C3249.5,889.7 3249.4,884.7 3254,886.4C3256.5,887.3 3258.7,895 3258.4,902C3258.2,909.5 3255.6,916.4 3257,918C3258.5,919.7 3260.3,915.5 3262.1,910.1C3263.5,905.8 3264.5,899.1 3268,900C3271.8,901 3274.4,910.3 3273.8,920C3273.1,931.4 3265.1,940.4 3268,942.4C3270.2,943.9 3273.1,942.5 3276.7,938C3280.3,933.5 3283.5,928 3286,930C3288.8,932.2 3288.2,942.6 3283.6,950.3C3278.4,959.1 3266.9,969.8 3269,972.6C3270.1,974.1 3276.8,970 3283.2,964.3C3289,959.1 3293.5,949.7 3297,952C3301.8,955.1 3298.3,966.8 3291.8,977.3C3285.4,987.7 3271,993.6 3273,996.4C3275,999.3 3282.2,995.9 3289.9,990.1C3297.8,984.1 3302.1,974.9 3305,977C3309.2,980.2 3310.1,995.3 3305.4,1003.4C3299.4,1013.8 3280.2,1013.9 3281,1017C3281.3,1018.4 3291.2,1021.1 3299.8,1018.8C3309.3,1016.1 3314.2,1002.7 3318,1005C3321.1,1006.8 3325.3,1022.8 3314.3,1032.2C3303.1,1041.6 3272.5,1032.5 3273,1036C3273.7,1041 3296.5,1046.8 3312.2,1044.3C3325.9,1042 3319.9,1028.2 3330,1031C3338.5,1033.4 3339.4,1060.8 3325.9,1065.9C3310.8,1071.5 3274.4,1054 3271.7,1058C3268.6,1062.6 3298.7,1076.7 3322.4,1076.8C3335.8,1076.8 3339.3,1063.9 3346,1069C3354.6,1075.5 3346.9,1097.8 3331.5,1099.4C3319.1,1100.7 3301,1096.1 3286.5,1089.8C3271.8,1083.3 3260.8,1075.2 3259,1078C3256.1,1082.6 3282.4,1098.2 3316.1,1106.5C3328.3,1109.5 3342,1114.3 3350,1107C3358,1099.8 3354.7,1090 3359,1091C3362.1,1091.7 3369,1103.8 3365.6,1113.6C3362.1,1123.4 3351.2,1132.9 3336.8,1132.4C3305.3,1131.5 3243.4,1095 3239,1097C3235.9,1098.4 3243.6,1102.7 3251.4,1107.5C3257.7,1111.4 3266.4,1113.7 3265,1117.2C3263.4,1121.1 3239.1,1114.9 3221.5,1103C3203.6,1091 3187.5,1075.4 3189,1073Z" style={{ fill: "white" }} />
      <path d="M3339,1141C3340.3,1137.4 3349.4,1137.8 3363.7,1138.5C3375.1,1139.1 3390.9,1144.7 3408,1136C3422.3,1128.7 3435.7,1108.5 3430,1095C3425.1,1083.4 3399.7,1084.3 3399,1069C3398.6,1060.9 3408,1053.2 3418.8,1049.3C3424.4,1047.2 3432.6,1043.9 3437.7,1039.5C3443,1034.8 3447.1,1029.8 3449.5,1022.7C3453.1,1012 3450.7,1002.2 3454,1002C3456.3,1001.9 3458.8,1017.3 3456.3,1027.5C3454.1,1036.9 3446.7,1045.5 3446.7,1045.5C3447.1,1045.5 3454.7,1045.8 3460.3,1048.3C3466.5,1051.1 3470.7,1057.2 3470,1058C3469.4,1058.8 3464.3,1055 3456.3,1052.4C3449.3,1050.2 3443.9,1049.1 3440.5,1050C3433.2,1051.9 3410.6,1060.2 3411,1069C3411.4,1078.9 3435.6,1077.2 3441,1095C3445.9,1111.1 3427.7,1141.7 3409,1148C3398.3,1151.6 3381.9,1151.6 3370.4,1153.1C3358.9,1154.6 3361,1159.5 3357,1160C3354.9,1160.2 3353,1155.1 3349.1,1150.8C3342.6,1143.7 3338.3,1142.8 3339,1141Z" style={{ fill: "white" }} />
      <path d="M3275.7,1177C3273.7,1177.7 3249.2,1186.9 3229.4,1201.5C3212,1214.4 3205.4,1231.6 3191,1239C3180.2,1244.6 3162.2,1237.6 3163.3,1233C3166.2,1221.2 3183.1,1234.6 3182,1223C3181,1212.7 3146.4,1208.5 3142,1223C3133.1,1252.3 3173.2,1250.1 3174,1255C3174.6,1258.5 3168.4,1256.7 3160.1,1262C3150,1268.6 3147.5,1273.1 3149,1276C3150.4,1278.6 3158.8,1274.2 3166.9,1273.4C3172.9,1272.9 3178.2,1274.7 3179,1277C3181.4,1284.1 3162.4,1282.9 3148.5,1295C3135.1,1306.7 3131.6,1312.9 3124.3,1316.7C3109.9,1324.2 3095.2,1327.2 3092,1340C3091.3,1342.9 3094.5,1351 3100.7,1350.9C3107.3,1350.7 3110.7,1337.6 3114.1,1338C3119.2,1338.6 3117.8,1353.2 3125,1352C3130.4,1351.1 3130.2,1338.7 3133,1338C3139.8,1336.3 3142.3,1353.8 3149.5,1352C3156.4,1350.2 3152.5,1336 3153.7,1332C3157.7,1318.8 3167.7,1335.3 3172,1329C3178.3,1319.7 3167.1,1316.4 3172,1310C3178.8,1301 3189.5,1301.8 3206.9,1287.3C3218.2,1277.9 3227,1267.6 3232,1266C3240.5,1263.2 3238.8,1295.6 3245,1292C3251.2,1288.4 3250.8,1266.2 3268,1247.6C3285.8,1228.4 3315.1,1216.3 3316,1214C3316.5,1212.7 3318.9,1198.8 3307,1187C3295.5,1175.7 3277.7,1176.3 3275.7,1177Z" style={{ fill: "white" }} />
      <path d="M3110,1040C3107.7,1035.9 3097.9,1035.3 3081.9,1024C3075.2,1019.3 3060,1014.9 3060.3,1007C3060.4,1003.6 3064.5,1004.1 3066.1,1000C3068.3,994.8 3064.7,986.9 3062.7,985.3C3060.4,983.5 3058.1,988.7 3056.8,994C3055.9,997.8 3054.2,1002.2 3050,1002C3045.9,1001.8 3045.1,994.7 3039.4,992C3033.5,989.1 3021.8,990.6 3021,992C3019.7,994.5 3027.4,996.6 3031.9,1000C3036.8,1003.7 3038.6,1007.2 3037,1009C3035.5,1010.8 3032.4,1012 3027.3,1010.7C3022.1,1009.4 3010.7,1006.5 3012,1010C3013.4,1013.8 3018.7,1023.8 3027.5,1021.7C3034,1020.1 3036.4,1019.2 3038,1020C3039.6,1020.8 3041.6,1021.5 3036.3,1026.2C3031.8,1030.3 3020.9,1032.2 3024,1035C3025.5,1036.4 3038.2,1042.3 3042.1,1033.3C3044.9,1026.8 3043.2,1025.3 3046,1026C3050.6,1027.1 3063.3,1041 3069.1,1049C3077.2,1060.4 3085.9,1069.7 3090,1069C3095.6,1068.1 3087.2,1062.3 3086.8,1056.2C3086.4,1051 3087.1,1045.9 3088,1045C3090,1043 3097.6,1057 3099,1057C3100.3,1057 3101.5,1052.1 3104.2,1048C3106.7,1044.1 3110.6,1041.1 3110,1040Z" style={{ fill: "white" }} />
      <path d="M3167,948C3167.5,947.2 3171.3,947.2 3174,949C3175.4,949.9 3177.5,953.2 3177,954C3176.5,954.8 3173.5,955.1 3171,954C3168,952.8 3166.5,948.8 3167,948Z" style={{ fill: "rgb(38,126,196)" }} />
    </g>
  </g>
);

const hat = (
  <g style={{ clipRule: "nonzero" }}>
    <g transform="rotate(-4) translate(250,85) scale(0.08)">
      <path d="M1326 55c67,-3 82,100 31,158 26,65 113,142 130,136 13,-5 27,20 34,32 8,15 73,-39 59,-49 -17,-11 2,-38 30,-76 7,-9 -64,6 -89,-21 -19,-21 -5,-76 35,-62 3,1 13,1 10,4 -36,32 9,41 60,39 35,-1 55,36 61,32 19,-15 -15,-22 -18,-34 -15,-61 -14,7 -29,-6 -64,-56 -40,-59 -52,-91 -15,-40 81,-29 115,-68 8,-9 27,0 88,-2 23,-10 21,-53 38,-45 4,1 62,24 47,79 32,7 16,31 32,65 2,5 2,1 3,6l-11 46 9 16c3,4 -6,38 4,37 50,-5 54,39 -17,49 -62,9 24,68 22,125 -1,41 -79,-43 -76,-17 3,23 39,72 41,98 1,21 -63,14 -67,3 -4,-10 -23,77 -23,77 7,48 52,90 66,97 90,88 96,279 215,261 54,-120 -124,-301 -127,-343 -10,-140 128,-284 7,-294 -32,-3 32,-43 82,-33 22,5 -56,-121 47,-47 -52,-104 17,-214 27,-149 7,52 49,110 69,216 32,-31 48,-18 24,58 -3,8 8,16 11,23 51,113 20,200 -80,190 -42,-5 -61,-92 -39,-73 17,16 130,12 27,-53 -54,-33 -93,31 -93,73 0,122 -14,134 50,85 36,-28 -10,85 41,50 20,-14 17,51 21,83 1,5 43,-3 39,7 -30,60 -25,89 -29,161 -1,23 -21,57 0,78 45,45 11,169 -6,124 -32,-85 -219,-99 -215,-88 31,78 102,50 96,94 15,21 2,82 -33,78 -32,-3 13,89 -7,107 -7,7 -26,-4 -31,4 -9,15 22,21 13,44 -54,1 -27,-16 -66,-15 -9,0 -13,29 -19,32 -6,84 -100,87 -90,8 1,-8 -16,34 -23,31 -40,-15 -72,-15 -78,9 -15,-25 15,-69 85,-92 17,-5 -43,-2 -43,-16 1,-36 -42,-34 -48,-42 -11,-14 48,-29 104,-28 7,0 8,11 12,15 39,37 77,-29 59,-63 -25,-46 -100,-84 -94,-139 2,-18 -67,-24 -70,-17 -18,56 13,85 52,100 33,13 28,50 12,38 -35,-27 -90,6 -75,37 3,6 -10,15 -12,8 -15,-52 -69,-26 -82,29 -26,-60 -47,-56 -65,0 -33,3 -27,-83 -62,-28 -52,-2 -85,15 -79,43 -36,-90 47,-83 22,-102 -16,-14 40,-15 16,-21 -63,-14 -70,-14 -106,-17 -16,-96 197,8 74,-73 -18,-12 2,-75 9,-69 8,8 52,18 58,23 32,28 18,78 80,60 50,-14 24,-26 16,-40 -5,-23 -29,-50 -25,-73 11,-70 55,-59 112,-64 52,-4 8,-69 -66,-105 -17,-8 -30,-4 -35,-56 -4,-46 0,-40 -30,-2 -3,3 -9,2 -13,3 -81,28 -80,110 -99,32 -4,-18 -30,16 -38,18 -8,2 16,58 -5,67 -45,21 -46,33 -25,72 -110,-33 -13,-145 -38,-134 -63,28 -59,14 -75,9 -18,-6 -42,13 -53,17 -17,-109 119,-64 114,-90 -3,-12 -53,-15 -53,-16 14,-21 -32,-47 -50,-55 -24,-12 80,-30 110,-9 24,16 8,40 42,29 8,-3 32,-33 64,-63 148,-137 81,-56 12,-147 -27,-35 -55,-37 -100,-66 -6,-4 -10,-38 -18,-42 -85,-47 -28,-45 -41,-55 -12,-9 -25,5 -35,-1 0,-12 -22,-15 -17,-24 1,-2 -4,-5 -41,-6 -12,-53 114,-41 98,-45 -57,-18 0,-59 -57,-61 79,-74 91,35 115,29 7,-1 -20,-49 6,-57 30,-9 24,-40 12,-60z" style={{ fill: "white", stroke: "none" }} />
    </g>
  </g>
);

const hec = (
  <g transform="rotate(-4) translate(400,20)">
    <path
      d="M 5,00 l 0,300 "
      style={{ stroke: "#FFFFFF", strokeWidth: 20, fill: "none" }}
    />
    <path
      d="M -30,00 l 0,300 "
      style={{ stroke: "#FFFFFF", strokeWidth: 20, fill: "none" }}
    />
  </g>
);

const hel = (
  <path d="m 294.48,31.04 164.47,168.46 c 0,0 2.23,-2.05 2.05,-4.5 -0.18,-2.45 -10.78,-164.51 -11,-168 -0.22,-3.49 -3.36,-6.16 -6,-6 -2.64,0.16 -149.52,10.04 -149.52,10.04 z" style={{ fill: "#f7fafe", fillOpacity: "1", stroke: "none", strokeWidth: "1px", strokeLinecap: "butt", strokeLinejoin: "miter", strokeOpacity: "1" }} />
);

const hex = (
  <g style={{ clipRule: "nonzero" }}>
    <g style={{ clipRule: "nonzero" }}>
      <path d="M 440,0 l 16,250" style={{ strokeWidth: "20", stroke: "#B22325" }} />
      <path d="M 180,30 l 260,185" style={{ strokeWidth: "25", stroke: "#0000CC" }} />
      <path d="M 180,200 l 244,-187" style={{ strokeWidth: "25", stroke: "#0000CC" }} />
    </g>
  </g>
);

const hib = (
  <g style={{ clipRule: "nonzero" }}>
    <g transform="rotate(-4)  translate(290,143) ">
      <path d="M 100,-100 L 0,0 L 100,100" style={{ stroke: "#3E78BD", strokeWidth: "20", fill: "none" }} />
      <path d="M 150,-100 L 50,0 L 150,100" style={{ stroke: "#3E78BD", strokeWidth: "20", fill: "none" }} />
    </g>
  </g>
);

const hks = (
  <>
    <defs>
      <clipPath id="hks-stripes">
        <g transform="rotate(-4)  translate(120,0) scale(4.5)">
          <rect x="-5" y="0" width="10" height="300" style={{ fill: "blue" }} />
          <rect x="10" y="0" width="5" height="300" style={{ fill: "blue" }} />
          <rect x="20" y="0" width="5" height="300" style={{ fill: "blue" }} />
          <rect x="30" y="0" width="5" height="300" style={{ fill: "blue" }} />
          <rect x="40" y="0" width="5" height="300" style={{ fill: "blue" }} />
          <rect x="50" y="0" width="5" height="300" style={{ fill: "blue" }} />
          <rect x="60" y="0" width="5" height="300" style={{ fill: "blue" }} />
        </g>
      </clipPath>
    </defs>
    <g style={{ clipRule: "nonzero" }}>
      <g clipPath="url(#hks-stripes)" style={{ clipRule: "nonzero" }}>
        <rect x="0" y="0" width="100%" height="100%" style={{ fill: "#F2F2F2" }} />
      </g>
    </g>
  </>
);

const hom = (
  <path
    d="m 396.15605,25.14572 23.99452,-1.642361 14.7652,176.467821 -23.90835,-0.0963 z"
    style={{
      fill: "#010864",
      fillOpacity: 1,
      stroke: "#010864",
      strokeWidth: 1,
    }}
  />
);

const hrv = (
  <g style={{ clipRule: "nonzero" }}>
    <g transform="rotate(-4)  translate(267,138) ">
      <path d="M 0,-100 C 110,-60 110,-60 180,0  C 110,60 110,60 0,100 L 200,100 L 200,-100 Z" style={{ fill: "white" }} />
    </g>
  </g>
);

const hsb = (
  <>
    <defs>
      <clipPath id="hsb-stripes">
        <g transform="rotate(-4)  translate(120,0) scale(4.5)">
          <rect x="-5" y="0" width="6" height="300" />
          <rect x="7" y="0" width="6" height="300" />
          <rect x="19" y="0" width="6" height="300" />
          <rect x="31" y="0" width="6" height="300" />
          <rect x="43" y="0" width="6" height="300" />
          <rect x="55" y="0" width="6" height="300" />
          <rect x="67" y="0" width="6" height="300" />
        </g>
      </clipPath>
    </defs>
    <g style={{ clipRule: "nonzero" }}>
      <g clipPath="url(#hsb-stripes)" style={{ clipRule: "nonzero" }}>
        <rect x="0" y="0" width="100%" height="100%" style={{ fill: "#F2F2F2" }} />
      </g>
      <g transform="rotate(-3) scale(0.71 0.81) translate(140,50)">
        <rect width="100%" height="66.66%" y="33.33%" style={{ fill: "#2169c1" }} />
      </g>
    </g>
  </>
);

const huh = (
  <g>
    <path
      d="m 405.83742,24.395387 12.00785,-0.827315 7.38908,176.444758 -12.00785,-0.12253 z"
      style={{ fill: "#000080", stroke: "#000080", strokeWidth: 0.73573327 }}
    />
    <path
      d="m 382.99609,25.922937 12.01186,-0.799737 7.39159,174.60026 -12.01186,-0.19714 z"
      style={{ fill: "#0096ff", stroke: "#0096ff", strokeWidth: 0.73471797 }}
    />
  </g>
);

const hul = (
  <g transform="rotate(-4) translate(415,20)">
    <path d="M 5,0 l 0,300" style={{ stroke: "#fef200", strokeWidth: 20, fill: "none" }} />
    <path d="M -35,0 l 0,300" style={{ stroke: "#fef200", strokeWidth: 20, fill: "none" }} />
  </g>
);

const icm = (
  <g>
    <path d="M 417.46,-5.51 438.38,293.76" clipPath="none" style={{ fill: "none", stroke: "#ffcc00", strokeWidth: "20" }} />
    <path clipPath="none" d="M 437.16,-8.3 458.08,290.97" style={{ fill: "none", stroke: "#ff0000", strokeWidth: "20" }} />
    <path clipPath="none" d="M 397.81,-5.51 418.74,293.76" style={{ fill: "none", stroke: "#00d4aa", strokeWidth: "20" }} />
  </g>
);

const iel = (
  <g>
    <path d="M 397,0 l 16,250" style={{ strokeWidth: 35, stroke: "#a1d3b9" }} />
    <path d="M 432,0 l 16,250" style={{ strokeWidth: 35, stroke: "#020c7e" }} />
  </g>
);

const imp = (
  <g transform="rotate(-3) scale(0.71 0.81) translate(140,50)">
    <rect fill="#EBECEC" width="100%" height="33.33%" y="33.33%" />
    <rect fill="#549DC5" width="100%" height="33.33%" y="66.66%" />
  </g>
);

const isa = (
  <path d="m 371.88,26.18 13.86,173.66 c 0,0 65.06,1.08 68.73,1.13 3.67,0.05 6.55,-3.85 6.42,-6 -0.13,-2.14 -10.93,-166.04 -10.98,-167.69 -0.05,-1.66 -1.93,-6.3 -5.99,-5.99 -4.07,0.31 -72.02,4.88 -72.02,4.88 z" style={{ fill: "#ffffff", fillOpacity: "1", stroke: "none", strokeWidth: "0.9983924px", strokeLinecap: "butt", strokeLinejoin: "miter", strokeOpacity: "1" }} />
);

const ist = (
  <>
    <defs>
      <clipPath clipPathUnits="userSpaceOnUse" id="ist-clipPath3012">
        <path d="m 13.14,0 486.86,0 0,216.69 z" style={{ fill: "#0000ff", stroke: "none" }} />
      </clipPath>
    </defs>
    <g>
      <g clipPath="url(#ist-clipPath3012)">
        <rect height="230" width="500" y="0" x="0" style={{ fill: "#ffffff", fillOpacity: "1" }} />
      </g>
    </g>
  </>
);

const ita = (
  <>
    <clipPath id="vert30stripe">
      <rect
        transform="rotate(-4) scale(0.63 0.81) translate(210,60)"
        x="33.333%"
        y="0%"
        width="33.333%"
        height="100%"
      />
    </clipPath>
    <g clipPath="url(#vert30stripe)">
      <rect fill="#F2F2F2" x="0" y="0" width="100%" height="100%" />
    </g>
    <rect
      transform="rotate(-4) scale(0.63 0.81) translate(210,60)"
      x="66.666%"
      y="0%"
      width="33.333%"
      height="100%"
      fill="#ef2b2d"
    />
  </>
);

const jbc = (
  <g style={{ clipRule: "nonzero" }}>
    <g transform="rotate(-4)  translate(375,143) ">
      <path d="M 60,-100 L 0,0 L 60,100" style={{ stroke: "#FFCC33", strokeWidth: "25", fill: "none" }} />
    </g>
  </g>
);

const jec = (
  <g transform="rotate(-4) translate(400,20)">
    <path
      d="M 5,00 l 0,300 "
      style={{ stroke: "#ff0000", strokeWidth: 20, fill: "none" }}
    />
    <path
      d="M -30,00 l 0,300 "
      style={{ stroke: "#ff0000", strokeWidth: 20, fill: "none" }}
    />
  </g>
);

const jsn = (
  <g>
    <g transform="matrix(0.37752,0.06769,-0.06769,0.37752,333.62473,28.48716)" style={{ fill: "#f09800", fillOpacity: "1", strokeWidth: "0.55393934", strokeMiterlimit: "4", strokeDasharray: "none" }}>
      <g transform="matrix(0.62585,0.11808,-0.11808,0.62585,28.99365,-34.23489)" style={{ fill: "#f09800", fillOpacity: "1", strokeWidth: "0.86975485", strokeMiterlimit: "4", strokeDasharray: "none" }}>
        <path d="m 325,344.4 c 2.5,-0.9 14.1,-8.4 41.2,49.7 29.9,27.6 49.2,-36.1 50.7,-56.2 -1,-24.8 -17.3,-55 -17.3,-55 -3.6,-15.9 6.5,-28 17.5,-39.7 -10.5,4.9 -21.5,5 -31,20.7 0,0 -2.6,-11.1 -0.4,-23.1 2.2,-11.9 14.3,-19.9 14.3,-19.9 -14.2,7.1 -26.2,14.6 -27.8,23.8 -4.4,-26.9 8.2,-50.5 25.8,-73.1 -18.4,11.9 -34.6,25.4 -42.5,45.7 -10.1,-48 27.5,-70.7 68.8,-107.7 31,-27.8 6.4,-52.5 6.4,-52.5 -23.7,-6.9 -43.3,1.1 -59.6,9.9 0,0 -15.6,-16.3 -25,-0.8 -10.9,18 -19.7,27.1 -14.7,47.7 -2.6,-3.4 22,-20.5 40.9,-20.7 15.2,-0.1 4.4,-18.3 4.4,-18.3 29.9,-16 74.9,-15.5 37,25.4 -46.2,45.7 -87.7,57.6 -66,130 12.3,41.1 56.9,72.1 56.2,99 5.2,17.4 -12.2,80.5 -34,47.1 -18.9,-44.7 -32.7,-48.7 -49,-47.3 l 4.2,15.3 z" style={{ fill: "#f09800", fillOpacity: "1", fillRule: "evenodd", strokeWidth: "0.86975485", strokeMiterlimit: "4", strokeDasharray: "none", display: "inline" }} />
      </g>
      <path d="M 15.4,55.1 C 10.8,56.2 3.9,58.7 1.2,63.8 7.2,62.2 11.9,60.9 16.2,60.2 l -0.8,-5.1 z" style={{ fill: "#f09800", fillOpacity: "1", fillRule: "evenodd", strokeWidth: "0.55393934", strokeMiterlimit: "4", strokeDasharray: "none" }} />
      <path d="M 16.8,44.3 C 12.2,45.1 9,44.6 1.9,49.3 8,48.8 14.5,48.9 18.5,50.4 l -1.7,-6.1 z" style={{ fill: "#f09800", fillOpacity: "1", fillRule: "evenodd", strokeWidth: "0.55393934", strokeMiterlimit: "4", strokeDasharray: "none" }} />
      <path d="m 29.8,38.5 c -4.2,-2.1 -9.1,-1.4 -13.8,-1.2 6.3,1.6 8,2.8 11.4,5.2 l 2.4,-4 z" style={{ fill: "#f09800", fillOpacity: "1", fillRule: "evenodd", strokeWidth: "0.55393934", strokeMiterlimit: "4", strokeDasharray: "none" }} />
      <path d="m 19.3,67.5 c -6,1.8 -5.2,3.2 -6.7,7.7 5.8,-3.9 9.3,-4 11.8,-6.4 l -5,-1.3 z" style={{ fill: "#f09800", fillOpacity: "1", fillRule: "evenodd", strokeWidth: "0.55393934", strokeMiterlimit: "4", strokeDasharray: "none" }} />
      <path d="m 47.8,51.2 c 7,12.9 13.8,11.1 22.1,18 10.9,9 15.5,20 44.3,20 L 106.3,132.5 83.5,119.6 C 78.9,116.1 66.5,112.5 59.9,99.9 54.3,100.7 53,105.6 52.4,111.3 49.7,104.7 45.8,98 49.4,91.5 L 41,81.8 C 35.8,88.5 27.7,86.3 20.8,87.5 29.7,84.1 36.8,78.5 38,72.3 L 34.6,67.1 c -8.7,0 -5.5,3 -13.1,3.6 l -5.9,-2.8 c 5.4,-5.5 10.1,-3.6 15.3,-6.1 -8.3,-3.5 -11.3,1.6 -17.9,-0.4 -1.5,-2.6 -1.5,-4.5 0.2,-6.4 4.6,-1.1 10.1,-1.6 15.2,-1.1 -7.3,-5.2 -7.4,-2.8 -13.4,-3.7 -1.9,-3.1 -3,-5 1,-6.7 4,0.8 11.9,0.6 16.7,4.3 -0.6,-3.6 -2.7,-4.8 -7.5,-6.1 0.9,-4 -1.2,-2.5 3.6,-4.6 9.7,3.1 17.2,6.6 18.8,14.1 z" style={{ fill: "#f09800", fillOpacity: "1", fillRule: "evenodd", strokeWidth: "0.55393934", strokeMiterlimit: "4", strokeDasharray: "none" }} />
      <path d="m 34.8,329.7 c -2.1,3.3 -6.6,6.1 -9.9,7.9 6.3,-0.2 11.9,-3.3 15.8,-5.6 l -5.9,-2.3 z" style={{ fill: "#f09800", fillOpacity: "1", fillRule: "evenodd", strokeWidth: "0.55393934", strokeMiterlimit: "4", strokeDasharray: "none" }} />
      <path d="m 20.4,321.8 c -4.6,2.8 -5.6,7.4 -7.1,10.4 3.9,-2.9 7.1,-3.8 11,-6.2 l -3.9,-4.2 z" style={{ fill: "#f09800", fillOpacity: "1", fillRule: "evenodd", strokeWidth: "0.55393934", strokeMiterlimit: "4", strokeDasharray: "none" }} />
      <path d="m 23.3,307.7 c -7.2,0.6 -12.3,5.1 -16.2,9.3 5.9,-2.1 11.1,-3.7 16.7,-4 3.8,-1.8 -0.7,-4.7 -0.5,-5.2 z" style={{ fill: "#f09800", fillOpacity: "1", fillRule: "evenodd", strokeWidth: "0.55393934", strokeMiterlimit: "4", strokeDasharray: "none" }} />
      <path d="m 36.9,300 c -6.4,-2.3 -12.7,-0.8 -19.4,-0.7 7.1,1.3 12.8,3.7 18,6.3 l 1.4,-5.6 z" style={{ fill: "#f09800", fillOpacity: "1", fillRule: "evenodd", strokeWidth: "0.55393934", strokeMiterlimit: "4", strokeDasharray: "none" }} />
      <path d="m 159.5,211.4 c -27.2,4.2 -65.9,-0.6 -84.2,19.5 -11.9,8.1 -52.2,20.3 -37.1,0.7 -24.7,12.8 16.4,22.4 42.7,1.9 -32.6,23.8 4.2,27.1 8.3,50.1 -7,13.1 -15.1,7.8 -25.8,19.9 -5,2.6 -10.4,1.7 -19,0.4 -1.4,-3.6 -4.6,-5.2 -7.9,-5.8 -3.5,1.1 -7.4,3.7 -6.9,6.5 5.2,1 5.2,3.7 9.4,6.3 -7.6,-2.3 -7.7,-6.1 -16.5,-3.8 -3.5,2.5 -3.2,5.9 -2.6,7.5 7.6,0.7 10.1,0.6 16.3,2.5 -7,0.1 -7.9,-1.5 -17.3,4.6 0.8,3.1 2.5,4.3 5.3,6.2 5.7,-1.2 7.9,-6 14.9,-3.5 -6.6,4 -6.4,5.1 -7.1,6.5 1.3,1.6 3.4,2.8 6.8,3.4 6.2,-0.7 8.6,-3.6 10.8,-6.6 32.2,1.9 22.3,-6.9 30.7,-9 11.2,5.1 11.3,-0.7 14.9,-5.6 11.8,7.4 9.5,-0.2 11.6,-2.5 -2.9,-10.8 8.5,-12.5 12.3,-21.7 5.1,-4.1 12.7,-7.4 -6.5,-18.9 -6,-10.8 -3.5,-19.3 7.8,-25.2 18.8,5.2 33.7,0.9 50.6,1.3 l -11.5,-34.5 z" style={{ fill: "#f09800", fillOpacity: "1", fillRule: "evenodd", strokeWidth: "0.55393934", strokeMiterlimit: "4", strokeDasharray: "none" }} />
      <path d="m 142.4,209.2 c 6,6 12.6,11.9 10.3,18.8 -6.3,4.5 -9.7,8.7 6.3,11.1 l 6.1,-15.7 -12.5,-14.3 c -7.3,-1.8 -10,-1.4 -10.2,0.2 z" style={{ fill: "#f09800", fillOpacity: "1", fillRule: "evenodd", strokeWidth: "0.55393934", strokeMiterlimit: "4", strokeDasharray: "none" }} />
      <path d="m 137,345.9 c -6.8,-0.4 -11.4,1.6 -16.5,5.5 7.9,-1.1 11,-2.2 16.3,-1.8 l 0.2,-3.6 z" style={{ fill: "#f09800", fillOpacity: "1", fillRule: "evenodd", strokeWidth: "0.55393934", strokeMiterlimit: "4", strokeDasharray: "none" }} />
      <path d="m 129.6,358.8 c -4.5,2.6 -9.7,6.9 -11.4,12.1 4.6,-3.4 9.4,-5.5 13.7,-7.5 l -2.2,-4.6 z" style={{ fill: "#f09800", fillOpacity: "1", fillRule: "evenodd", strokeWidth: "0.55393934", strokeMiterlimit: "4", strokeDasharray: "none" }} />
      <path d="m 136.8,369.8 c -4.4,3.7 -7.7,8.5 -9,13.6 4.6,-4.2 8.7,-6.6 13.8,-8.7 l -4.9,-4.9 z" style={{ fill: "#f09800", fillOpacity: "1", fillRule: "evenodd", strokeWidth: "0.55393934", strokeMiterlimit: "4", strokeDasharray: "none" }} />
      <path d="m 161.2,371.2 c 0.5,2.8 2.6,6.9 4.6,9.6 l 1.7,-10.2 -6.3,0.6 z" style={{ fill: "#f09800", fillOpacity: "1", fillRule: "evenodd", strokeWidth: "0.55393934", strokeMiterlimit: "4", strokeDasharray: "none" }} />
      <path d="m 100.9,130.4 c 9,36.8 36.6,49.1 48.1,71.1 13.1,25.1 8.5,27.5 8.5,27.5 -5.5,14.8 -19.2,27.4 -15.1,36.8 17.8,41.2 -23.7,24.8 -3.1,49.1 -11.2,-12.5 8.1,-15.9 15.7,-22.8 4.5,6.4 9.4,12.3 19.1,13.7 -2.8,9.2 -10,18.6 -5.1,27.6 -5.8,5.7 -8.7,14.3 -18.9,15.8 -4,-2.4 -4.4,-4.5 -12.1,-3.8 -4.2,1.8 -2.6,4.2 -2.9,5.8 10,1.5 2,0.4 10.1,3.5 -10.5,1.4 -7,-2.8 -16.3,3.6 -0.6,2.6 2.9,4.8 3.3,6.7 9.5,-2 5.4,-4 15,-2.1 -5.2,2.5 -6.5,2.4 -10.6,6.3 -1,3.6 4.4,4.6 4.6,6.7 9.7,-2.9 6.7,-6.7 17.8,-9.6 -0.1,2 -0.3,4.1 1.4,5.7 2.9,0.6 5.7,0.9 8.5,-1 0.8,-2.6 2.2,-5.3 -0.3,-7.8 8.9,-7.2 23.4,-10.4 21.3,-25.6 2.7,3.3 5.8,6.2 11.4,6.4 -3.6,-8.7 9.9,-10.9 -1.6,-21.2 3.1,-3.6 5.1,-8.6 11.3,-8.3 l 0.2,-15.7 c -31.6,-25.9 2.9,-61.9 -23.3,-93.9 0.9,-55.4 -3.2,-84.2 -12.3,-108 l -74.7,33.5 z" style={{ fill: "#f09800", fillOpacity: "1", fillRule: "evenodd", strokeWidth: "0.55393934", strokeMiterlimit: "4", strokeDasharray: "none" }} />
      <path d="m 51.1,146 c -2.6,-3.9 -5.7,-3.1 -8.6,-3.8 l 5.6,7.3 3,-3.5 z" style={{ fill: "#f09800", fillOpacity: "1", fillRule: "evenodd", strokeWidth: "0.55393934", strokeMiterlimit: "4", strokeDasharray: "none" }} />
      <path d="m 38.7,152.8 c -4,-2 -6.2,-5 -14.5,-1.7 6.3,1.6 8.1,3.4 10.6,6.1 l 4,-4.4 z" style={{ fill: "#f09800", fillOpacity: "1", fillRule: "evenodd", strokeWidth: "0.55393934", strokeMiterlimit: "4", strokeDasharray: "none" }} />
      <path d="m 32,166.3 c -4.7,-0.6 -9.9,0 -12.9,3.9 3.4,-0.8 6.8,-1 10.3,-0.1 l 2.5,-3.9 z" style={{ fill: "#f09800", fillOpacity: "1", fillRule: "evenodd", strokeWidth: "0.55393934", strokeMiterlimit: "4", strokeDasharray: "none" }} />
      <path d="m 41,181.7 c -3.1,1.7 -6.2,3.4 -6.6,6.6 3.7,-2.3 7.8,-3.7 12,-4.7 l -5.4,-1.9 z" style={{ fill: "#f09800", fillOpacity: "1", fillRule: "evenodd", strokeWidth: "0.55393934", strokeMiterlimit: "4", strokeDasharray: "none" }} />
      <path d="m 52.7,144.8 c -4.3,0.7 -4.5,2.8 -5.6,4.6 1.1,3.5 5.5,6.5 9.9,9.4 -5.7,-1.7 -11.4,-2.3 -17.2,-7.2 l -4.9,0.2 c -2.8,1.9 -2.6,3.7 -2.1,5.5 6.1,6 11.2,6 16.6,8 -6.2,0.1 -11.8,2.3 -18.6,-0.3 -4.8,2.6 -2.1,4.3 -1.8,6.3 6.4,2.3 13.5,0.9 20.3,1.2 -0.7,2.8 -4.1,5.4 -9.2,7.9 -1.4,3.4 2.3,4.2 5.6,5.3 4.4,-0.9 8.1,-2.6 9.6,-7.2 7,-0.2 14.3,-0.1 20.2,-1.1 4.2,2.8 -2.2,6 -5,9 17.1,-0.2 16.8,-8.8 30.4,-14.2 -2.6,5 -0.2,9 2.5,13 1.4,-8.1 9.4,-10 16.4,-13.4 l 4.8,-4.8 c 4.5,2 9.9,1.7 15.3,1.1 -2.8,-3.1 -0.3,-6.3 4.6,-9.6 7.3,4.3 11.6,3.6 15.4,2 -15.8,-5.1 -4.5,-20.8 -4.9,-31.8 L 131.1,110 87.9,147.9 c -4.2,3.3 -10.1,6.5 -18.7,7.4 -8.4,-1.6 -12.9,-5.7 -16.5,-10.5 z" style={{ fill: "#f09800", fillOpacity: "1", fillRule: "evenodd", strokeWidth: "0.55393934", strokeMiterlimit: "4", strokeDasharray: "none" }} />
      <g transform="matrix(0.98443,-0.17577,0.17577,0.98443,-23.51678,33.08762)" style={{ fill: "#f09800", fillOpacity: "1", strokeWidth: "0.55393934", strokeMiterlimit: "4", strokeDasharray: "none" }}>
        <path d="m 130,65.1 c 0.5,-2.8 0,-4.8 1.4,-8.4 1.8,3.8 5.2,5.5 7.9,8" style={{ fill: "#f09800", fillOpacity: "1", fillRule: "evenodd", strokeWidth: "0.55393934", strokeMiterlimit: "4", strokeDasharray: "none" }} />
        <path d="m 160.4,42.6 c -23.5,-0.2 -42,21.7 -62.7,2.5 11.4,27.9 36.8,3.2 63.6,6.6 l -1,-9.1 z" style={{ fill: "#f09800", fillOpacity: "1", fillRule: "evenodd", strokeWidth: "0.55393934", strokeMiterlimit: "4", strokeDasharray: "none" }} />
        <path d="m 123.8,39.9 c 0.2,3.5 2,6.2 5.3,8.4 -1.4,-4.5 2.3,-6.8 4.6,-9.6" style={{ fill: "#f09800", fillOpacity: "1", fillRule: "evenodd", strokeWidth: "0.55393934", strokeMiterlimit: "4", strokeDasharray: "none" }} />
        <path d="m 134.1,127.1 -3.1,9.8 8.6,-4.5 c -14.4,21.5 0.2,26.2 15.7,30.4 -3.7,-13.1 11.5,-20.5 17.4,-33.5 -6,12.8 -3.9,20.9 18.2,17.3 -20.6,-8.5 3.7,-16.7 -2.4,-33.2 3.1,9.2 10.9,5.7 17.2,6.3 -18.8,-9.3 -6.1,-20.6 -3.5,-31.3 l -6,-20.1 c 2.4,12.8 10.7,9.3 17.9,9 -13.5,-5.3 -0.8,-22.3 -16.4,-33.6 5.8,3.6 11.4,8.2 17.7,5.8 -13.2,-4.1 -6.6,-17.1 -18.4,-22.4 6.9,1.6 11.5,-0.1 16.9,-0.6 -5.7,-2 -11.3,-1.4 -17.2,-6.8 L 188.1,8.6 162.8,3.8 c -6.6,0.7 -13,2.1 -18.8,5.8 -5,1.7 -11.2,2.6 -11.7,7.6 -10.1,0.2 -30.4,7.8 -16,9.1 -1.2,10.3 0.9,13.5 6.4,14.3 11.9,4.2 16.1,-4.2 25.5,-5.1 19.3,8.9 8.9,20.7 2.1,25.1 -7.4,4.8 -18.7,0 -18.7,0 -4.7,4.9 -4.8,8.2 -0.2,9.7 4.9,5.7 7.3,1.6 10.5,0.5 20.1,3.1 18.9,-7.5 27,-12.1 -6.8,7.5 -0.7,19.6 -23.2,21.2 -11.6,0.8 -9.8,-3.2 -20.8,-2 -11.1,1.2 -14.9,7.7 -23.4,6.9 -7.6,-0.8 -18,-1.8 -8.2,-16.8 -17.6,12.8 -3.8,28.6 17.3,25.2 -19,3.3 -31.6,9.6 -45.6,-2.5 17.3,30 30.7,13.2 54.9,14.8 -24.2,-0.1 -24.3,19.6 -49.7,14.1 5.7,10.6 13.9,10.1 24.9,8.8 -4.5,3.1 -9,11.1 -17.2,9.4 3.5,7.7 16.6,6.5 27.9,5.4 12.9,-1.2 20.4,-9.2 28.3,-16.3 z" style={{ fill: "#f09800", fillOpacity: "1", fillRule: "evenodd", strokeWidth: "0.55393934", strokeMiterlimit: "4", strokeDasharray: "none" }} />
        <path d="M 171.6,13.8 C 170.9,4 180,3.5 186.9,1 185.6,7.2 185.7,15.4 181.4,17.2" style={{ fill: "#f09800", fillOpacity: "1", fillRule: "evenodd", strokeWidth: "0.55393934", strokeMiterlimit: "4", strokeDasharray: "none" }} />
        <path d="m 133.5,18.1 c 2.8,4.2 5.3,1.5 7.9,0.4 6.8,-6.6 10.8,-1.2 15.3,1.7" style={{ fill: "#f09800", fillOpacity: "1", fillRule: "evenodd", strokeWidth: "0.55393934", strokeMiterlimit: "4", strokeDasharray: "none" }} />
        <path d="m 137.5,21.1 c 2.8,1.9 4.4,2.7 7.1,2 4.3,-1 5.8,-3.3 7.7,-3.1 -0.1,-1.7 -0.3,-3.4 -3,-4.1 -6.6,1 -6.4,3.2 -11.8,5.2 z" style={{ fill: "#f09800", fillOpacity: "1", fillRule: "evenodd", strokeWidth: "0.55393934", strokeMiterlimit: "4", strokeDasharray: "none" }} />
      </g>
      <path d="m 154.9,292.1 c 3.7,-8.1 -0.2,-15.9 -1.5,-23.7" style={{ fill: "#f09800", fillOpacity: "1", fillRule: "evenodd", strokeWidth: "0.55393934", strokeMiterlimit: "4", strokeDasharray: "none" }} />
      <path d="m 32.2,46.5 c 5.2,6.3 2.3,9.6 10,12.6" style={{ fill: "#f09800", fillOpacity: "1", fillRule: "evenodd", strokeWidth: "0.55393934", strokeMiterlimit: "4", strokeDasharray: "none" }} />
    </g>
  </g>
);

const juv = (
  <g transform="matrix(0.107947,0,0,0.143713,57.5009,-49.815)">
    <g>
      <g transform="matrix(0.99955,0,0,1.01504,1.689,-18.5594)">
        <path d="M3741.1,1124L438.5,1124L438.5,1305.5C438.5,1305.5 1029.2,1694.2 2089.8,1687C2971.2,1681 3741.1,1571 3741.1,1571L3741.1,1124Z" style={{ fill: "rgb(203,34,22)" }} />
      </g>
      <g transform="matrix(0.99876,0,0,0.89577,2.03556,-45.9889)">
        <path d="M3741.1,797.1C3741.1,797.1 2742.7,639.7 1976.9,670.6C987.3,710.4 438.5,1124 438.5,1124L438.5,1305.5L3741.1,1305.5L3741.1,797.1Z" style={{ fill: "rgb(253,218,37)" }} />
      </g>
    </g>
  </g>
);

const jwu = (
  <circle cx="390" cy="110" r="46" style={{ fill: "#f0b310", stroke: "#00529b", strokeWidth: 10 }} />
);

const kal = (
  <g transform="matrix(0.107947,0,0,0.143713,57.5009,-49.815)">
    <g transform="matrix(0.70652,-0.7077,0.59724,0.59624,1336.9,2292.22)">
      <g>
        <path d="M2666.5,381L2104.6,512.7L1973,1201.5L2066.1,1284.8L2190,614.1L2741.2,491.5L2666.5,381Z" style={{ fill: "rgb(63,72,204)" }} />
      </g>
    </g>
  </g>
);

const kcs = (
  <g style={{ clipRule: "nonzero" }}>
    <path d="M 432,0 l 16,250" style={{ strokeWidth: "35", stroke: "#cc0000" }} />
  </g>
);

const keb = (
  <g transform="rotate(-4) translate(355,143) ">
    <path
      d="M 60,-100 L -15,0 L 60,100"
      style={{ stroke: "#FF191C", strokeWidth: 25, fill: "none" }}
    />
  </g>
);

const keo = (
  <g style={{ clipRule: "nonzero", display: "inline" }}>
    <g style={{ display: "inline" }}>
      <rect x="210.31847" y="64.659302" width="24.133568%" height="150.80006%" transform="matrix(0.95132,-0.30822,0.26529,0.96417,0,0)" style={{ display: "inline", fill: "#c63527", fillOpacity: "1", strokeWidth: "0.60327" }} />
    </g>
  </g>
);

const kgs = (
  <g style={{ clipRule: "nonzero" }}>
    <g transform="rotate(-4) scale(0.63 0.81) translate(150,60)">
      <rect x="67%" y="0%" width="110" height="100%" style={{ fill: "#FFFFFF" }} />
    </g>
  </g>
);

const kgu = (
  <g transform="rotate(-3) translate(0,130)">
    <path d="M 465,-100 350,0 455,100 z" style={{ fill: "#000000" }} />
  </g>
);

const kgv = (
  <g style={{ clipRule: "nonzero" }}>
    <rect x="335" y="0" height="230" width="110" transform="matrix(0.63,-0.04,0.06,0.8,97.65,41.89)" style={{ stroke: "none", fill: "#ffffff" }} />
    <path d="m 310,105 42,40, 32,-48 -0.6,-21 -33,48 -43,-40 z" style={{ fill: "#D43232", fillOpacity: "1", stroke: "none" }} />
  </g>
);

const kkw = (
  <g transform="matrix(0.107947,0,0,0.143713,57.5009,-49.815)">
    <g>
      <g transform="matrix(1,0,0,1,-122.689,-9.97434)">
        <path d="M3504,1636.9L3214.6,612.1L3154.7,602.2L3448.4,1643.1L3504,1636.9Z" style={{ fill: "rgb(63,72,204)" }} />
      </g>
      <g transform="matrix(1,0,0,1,-659.689,-51.1601)">
        <path d="M3525.8,1713.8L3214.6,612.1L3154.7,602.2L3469.6,1717.7L3525.8,1713.8Z" style={{ fill: "rgb(63,72,204)" }} />
      </g>
      <g transform="matrix(1,0,0,1,-280,0)">
        <path d="M3550.6,1631.5L3255.7,586.7L2889.8,562.6L3199.8,1662.7L3550.6,1631.5Z" style={{ fill: "rgb(203,34,22)" }} />
      </g>
    </g>
  </g>
);

const kon = (
  <g transform="matrix(0.107947,0,0,0.143713,57.5009,-49.815)">
    <g>
      <g transform="matrix(1.08228,0.40751,-0.35237,0.93586,84.9595,-436.593)">
        <path d="M3537,496.8L1418.5,496.8C1418.5,496.8 1281.7,592.5 1217,645.2C1147.6,701.7 1002,836 1002,836C1724.2,835.8 3168.3,835.7 3168.3,835.7L3569.4,596.3L3537,496.8Z" style={{ fill: "rgb(203,34,22)" }} />
      </g>
      <g transform="matrix(1.08228,0.40751,-0.12359,0.32824,-70.7409,-34.5334)">
        <path d="M3558.6,496.8L1271.8,496.8L1126,836L3363.2,836L3558.6,496.8Z" style={{ fill: "rgb(253,218,37)" }} />
      </g>
    </g>
  </g>
);

const krs = (
  <>
    <defs>
      <clipPath id="krs-SVGID_00000018199303955706728830000000381458251189156005_">
        <use xlinkHref="#krs-SVGID_00000009575637691732745020000007731176983159991969_" />
      </clipPath>
      <rect id="krs-SVGID_00000009575637691732745020000007731176983159991969_" x="245.4" y="28" transform="matrix(0.9976 -0.06976 0.06976 0.9976 -7.7254 21.1511)" width="107.1" height="186.3" />
    </defs>
    <g>
      <g>
        <g>
          <g clipPath="url(#krs-SVGID_00000018199303955706728830000000381458251189156005_)">
            <rect x="0" y="0" width="500" height="230" style={{ fill: "#F2F2F2" }} />
          </g>
        </g>
      </g>
    </g>
  </>
);

const kuj = (
  <g transform="matrix(0.107947,0,0,0.143713,57.5009,-49.815)">
    <g transform="matrix(1,0,0,1,120.685,42.3596)">
      <g transform="matrix(0.65151,-0.37573,0.49958,0.86627,219.138,1319.02)">
        <path d="M3152,445.4L2615,198.7L2615,1492.7L3152,1683.2L3152,445.4Z" style={{ fill: "rgb(2,20,97)" }} />
      </g>
      <g transform="matrix(0.65151,-0.37573,0.49958,0.86627,586.515,1151.02)">
        <path d="M3152,673.3L2617.2,407.4L2615,1644.4L3152,1819.6L3152,673.3Z" style={{ fill: "rgb(203,34,22)" }} />
      </g>
    </g>
  </g>
);

const kwl = (
  <g style={{ clipRule: "nonzero" }}>
    <g transform="rotate(-3) scale(0.71 0.81) translate(140,50)">
      <rect width="100%" height="33.33%" y="33.33%" style={{ fill: "#f6b332" }} />
      <rect width="100%" height="33.33%" y="66.66%" style={{ fill: "#009A3E" }} />
    </g>
  </g>
);

const lan = (
  <g transform="matrix(1,-0,-0,1,-4,0)">
    <g>
      <g transform="matrix(0.99756,-0.06976,0.06976,0.99756,4,0)">
        <path d="M 280,30 450,240" style={{ fill: "none", stroke: "#ff1111", strokeWidth: "60" }} />
      </g>
    </g>
  </g>
);

const lcc = (
  <g transform="rotate(-3)  translate(0,130)">
    <path d="M 465,-100 350,0 455,100 z" style={{ fill: "#000000" }} />
  </g>
);

const lcl = (
  <g style={{ clipRule: "nonzero" }}>
    <g transform="rotate(-3)  translate(0,130) ">
      <rect x="0" y="0" width="100%" height="50%" style={{ fill: "#000000" }} />
      <path d="M 465,-100 L 350,0 L 455,100 Z" style={{ fill: "orange" }} />
    </g>
  </g>
);

const ldu = (
  <g transform="rotate(-4) translate(355,143) ">
    <path
      d="M 60,-100 L 0,0 L 60,100"
      stroke="#881825"
      strokeWidth="15"
      fill="none"
    />
    <path
      d="M 90,-100 L 30,0 L 90,100"
      stroke="#004C3E"
      strokeWidth="15"
      fill="none"
    />
  </g>
);

const lee = (
  <g style={{ clipRule: "nonzero" }}>
    <g transform="rotate(-4) translate(400, 20)">
      <path d="M 20,0 l 0,300 " style={{ stroke: "#007bff", strokeWidth: "60", fill: "none" }} />
    </g>
  </g>
);

const leh = (
  <g style={{ clipRule: "nonzero" }}>
    <g transform="rotate(-3) translate(0, 130)">
      <rect x="0" y="0" width="100%" height="50%" style={{ fill: "#ffffff" }} />
    </g>
    <g transform="rotate(-3) translate(2, 132)">
      <path d="M 480,-120 L 350,0 L 480,120 Z" style={{ fill: "#ff0004" }} />
    </g>
  </g>
);

const lei = (
  <g style={{ clipRule: "nonzero" }}>
    <g transform="rotate(-3) scale(0.71 0.81) translate(140,50)">
      <rect width="100%" height="33.33%" y="33.33%" style={{ fill: "#F0F0F0" }} />
      <rect width="100%" height="33.33%" y="66.66%" style={{ fill: "#004F00" }} />
    </g>
  </g>
);

const lgt = (
  <g style={{ clipRule: "nonzero", opacity: "0.9" }}>
    <path d="M 470,10 L 145,199 L 500,230 Z" style={{ fill: "#000080", stroke: "#0000c0 stroke-width:1" }} />
  </g>
);

const lic = (
  <g>
    <path
      d="m 112.15417,44.883847 201.94289,45.675172 0.0377,-0.0011 -208.35394,-15.89754 z"
      style={{ fill: "#7ca5cd" }}
    />
    <path d="M 432,0 l 16,250" style={{ strokeWidth: 35, stroke: "#7ca5cd" }} />
  </g>
);

const lin = (
  <g>
    <path d="M 180,200 424,13" style={{ stroke: "#000000", strokeWidth: 20 }} />
    <path d="M 180,30 440,215" style={{ stroke: "#000000", strokeWidth: 20 }} />
  </g>
);

const liv = (
  <g style={{ clipRule: "nonzero", opacity: "0.9" }}>
    <path d="M 360,0 l 15,250" style={{ strokeWidth: "35", stroke: "#B2C2D8" }} />
    <path d="M 395,0 l 15,250" style={{ strokeWidth: "35", stroke: "#355E9A" }} />
  </g>
);

const lmh = (
  <path
    d="m 112.15417,44.883847 201.94289,45.675172 0.0377,-0.0011 -208.35394,-15.89754 z"
    style={{ fill: "#ffe600" }}
  />
);

const lnc = (
  <g style={{ clipRule: "nonzero" }}>
    <g transform="rotate(-4) translate(400,20)">
      <path d="M 15,0 l 0,300 " style={{ stroke: "#D71A1A", strokeWidth: "20", fill: "none" }} />
      <path d="M -35,0 l 0,300 " style={{ stroke: "#D71A1A", strokeWidth: "20", fill: "none" }} />
    </g>
  </g>
);

const lon = (
  <g style={{ clipRule: "nonzero" }}>
    <g transform="rotate(-4) translate(397,25)">
      <path d="M 0,0 l 0,47 l 27,0 l 0,-47 z" style={{ fill: "#000066" }} />
      <path d="M 0,60 l 0,47 l 27,0 l 0,-47 z" style={{ fill: "#000066" }} />
      <path d="M 0,120 l 0,47 l 27,0 l 0,-47 z" style={{ fill: "#000066" }} />
      <path d="M 0,180 l 0,47 l 27,0 l 0,-47 z" style={{ fill: "#000066" }} />
      <path d="M -54,0 l 0,47 l 27,0 l 0,-47 z" style={{ fill: "#000066" }} />
      <path d="M -54,60 l 0,47 l 27,0 l 0,-47 z" style={{ fill: "#000066" }} />
      <path d="M -54,120 l 0,47 l 27,0 l 0,-47 z" style={{ fill: "#000066" }} />
      <path d="M -54,180 l 0,47 l 27,0 l 0,-47 z" style={{ fill: "#000066" }} />
    </g>
  </g>
);

const lse = (
  <g>
    <path d="M 417.46,-5.51 438.38,293.76" style={{ fill: "none", stroke: "#800080", strokeWidth: "20" }} />
    <path d="M 437.16,-8.3 458.08,290.97" style={{ fill: "none", stroke: "#ffcc00", strokeWidth: "20", strokeOpacity: "1" }} />
  </g>
);

const ltw = (
  <g transform="matrix(0.107947,0,0,0.143713,57.5009,-49.815)">
    <g>
      <g transform="matrix(0.99876,0,0,0.89577,2.03556,-45.9889)">
        <path d="M3741.1,797.1C3741.1,797.1 2742.7,639.7 1976.9,670.6C987.3,710.4 438.5,1124 438.5,1124L438.5,1305.5L3741.1,1305.5L3741.1,797.1Z" style={{ fill: "rgb(38,126,196)" }} />
      </g>
      <g transform="matrix(1.00204,0,0,1.26272,-4.75794,-304.988)">
        <rect x="443.876" y="1002.48" width="3291.2" height="272.462" style={{ fill: "rgb(234,171,22)" }} />
      </g>
    </g>
  </g>
);

const mag = (
  <g transform="rotate(-2)  translate(275,17)  scale(2.7)">
    <g transform="matrix(0.4701374,0.8825933,-0.8825933,0.4701374,57.211567,-103.7955)">
      <path
        transform="matrix(0.9645439,-0.7042761,0.651746,1.0422852,-34.86803,73.954067)"
        d="M 112.00066,59.382229 A 2.0834396,1.5152289 0 1 1 107.83378,59.382229 A 2.0834396,1.5152289 0 1 1 112.00066,59.382229 z"
        style={{ fill: "#fede20", fillOpacity: 1 }}
      />
      <path
        d="M 110.09967,58.943823 L 114.65928,64.818775"
        style={{
          opacity: 1,
          fill: "none",
          fillRule: "evenodd",
          stroke: "#fede20",
          strokeWidth: 2,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
      />
    </g>
    <g transform="translate(-86.707773,-38.73351)">
      <path
        transform="matrix(0.9645439,-0.7042761,0.651746,1.0422852,-34.86803,73.954067)"
        d="M 112.00066,59.382229 A 2.0834396,1.5152289 0 1 1 107.83378,59.382229 A 2.0834396,1.5152289 0 1 1 112.00066,59.382229 z"
        style={{ fill: "#fede20", fillOpacity: 1 }}
      />
      <path
        d="M 110.09967,58.943823 L 114.65928,64.818775"
        style={{
          opacity: 1,
          fill: "none",
          fillRule: "evenodd",
          stroke: "#fede20",
          strokeWidth: 2,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
      />
    </g>
    <g transform="matrix(0.8948254,0.4464163,-0.4464163,0.8948254,-38.257953,-84.447648)">
      <path
        transform="matrix(0.9645439,-0.7042761,0.651746,1.0422852,-34.86803,73.954067)"
        d="M 112.00066,59.382229 A 2.0834396,1.5152289 0 1 1 107.83378,59.382229 A 2.0834396,1.5152289 0 1 1 112.00066,59.382229 z"
        style={{ fill: "#fede20", fillOpacity: 1 }}
      />
      <path
        d="M 110.09967,58.943823 L 114.65928,64.818775"
        style={{
          opacity: 1,
          fill: "none",
          fillRule: "evenodd",
          stroke: "#fede20",
          strokeWidth: 2,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
      />
    </g>
    <path
      style={{
        fill: "#ffffff",
        fillRule: "evenodd",
        stroke: "#000000",
        strokeWidth: 1,
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeOpacity: 1,
      }}
      d="M 28.133947,27.625083 C 26.252087,27.610473 26.974757,23.176173 28.449617,19.133493 C 30.843507,19.143933 34.932237,21.383663 35.362847,25.320673 L 35.520687,26.962173 L 33.752917,35.674743 L 29.964847,31.507863 L 28.133947,27.625083 z"
    />
    <g transform="matrix(0.6509648,0.759108,-0.759108,0.6509648,20.495457,-104.93273)">
      <path
        transform="matrix(0.9645439,-0.7042761,0.651746,1.0422852,-34.86803,73.954067)"
        d="M 112.00066,59.382229 A 2.0834396,1.5152289 0 1 1 107.83378,59.382229 A 2.0834396,1.5152289 0 1 1 112.00066,59.382229 z"
        style={{ fill: "#fede20", fillOpacity: 1 }}
      />
      <path
        d="M 110.09967,58.943823 L 114.65928,64.818775"
        style={{
          opacity: 1,
          fill: "none",
          fillRule: "evenodd",
          stroke: "#fede20",
          strokeWidth: 2,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
      />
    </g>
    <path
      style={{
        fill: "#ffffff",
        fillRule: "evenodd",
        stroke: "#000000",
        strokeWidth: 1,
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeOpacity: 1,
      }}
      d="M 52.188207,20.648723 C 48.984937,21.353103 45.746617,21.969873 43.854447,25.952023 L 45.369677,40.094153 L 53.198357,31.760393 C 53.842367,27.566143 54.198417,23.515863 52.188207,20.648723 z"
    />
    <path
      style={{
        fill: "#ffffff",
        fillRule: "evenodd",
        stroke: "#000000",
        strokeWidth: 1,
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeOpacity: 1,
      }}
      d="M 19.358247,36.306083 C 33.719007,34.386583 25.890907,59.188293 40.121577,59.188293 C 54.604787,59.188293 47.083157,33.292843 61.279577,36.306083 C 61.204607,15.923273 44.378697,28.839913 43.349367,49.690603 C 44.190717,39.213433 53.282727,28.592703 40.571447,16.608113 C 28.554297,27.879993 36.141967,42.054093 36.783377,49.943143 C 30.961667,11.078523 15.395387,27.543193 19.358247,36.306083 z"
    />
    <path
      style={{
        fill: "#ffffff",
        fillRule: "evenodd",
        stroke: "#000000",
        strokeWidth: 1,
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeOpacity: 1,
      }}
      d="M 28.955517,19.376023 L 31.623077,27.335683"
    />
    <path
      style={{
        fill: "none",
        fillRule: "evenodd",
        stroke: "#000000",
        strokeWidth: 1,
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeOpacity: 1,
      }}
      d="M 51.935667,21.027523 L 48.905207,27.846053"
    />
    <path
      style={{
        fill: "#008000",
        fillRule: "evenodd",
        stroke: "#000000",
        strokeWidth: 1,
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeOpacity: 1,
      }}
      d="M 29.537967,67.274035 C 27.729217,67.240585 28.877857,63.677445 31.336957,63.677445 C 34.252227,63.677445 37.743407,64.144715 37.825767,62.602075 L 37.952037,58.687735 C 39.130547,57.340865 40.477417,57.340865 41.992647,58.687735 C 42.012967,67.259665 41.847697,67.274035 29.537967,67.274035 z"
    />
  </g>
);

const man = (
  <g
    style={{ fill: "#ffff00" }}
    transform="matrix(0.26159327,-0.01731013,0.01858136,0.28080429,341.4759,-142.53978)"
  >
    <path
      style={{ fill: "#ffff00", stroke: "#000000", strokeWidth: 3 }}
      d="m 92.4091,758.86218 0,32.45455 41.443,0 0,94.81817 -94.8976,0 0,-41.44318 -32.4545,0 0,115.26137 32.4545,0 0,-41.44319 94.8976,0 0,94.8977 -41.443,0 0,32.4546 115.2612,0 0,-32.4546 -41.443,0 0,-94.8977 94.8181,0 0,41.44319 32.4546,0 0,-115.26137 -32.4546,0 0,41.44318 -94.8181,0 0,-94.81817 41.443,0 0,-32.45455 -115.2612,0 z"
    />
  </g>
);

const mau = <path d="M 345,230 L 280,0 L 500,0 L 500,230 Z" fill="#FACA30" />;

const mar = (
  <g transform="matrix(0.982733,-0,-0,0.982733,-90.5148,13.705)">
    <g>
      <path d="M198.95 62.37c0,1.02 1.02,2.04 2.03,2.04 32.55,12.21 64.08,73.24 71.21,105.79 54.93,18.31 215.65,20.34 282.79,20.34 3.05,0 6.1,-3.05 6.1,-6.1l-11.19 -170.89c0,-3.05 -3.05,-6.1 -6.1,-6.1l-336.7 22.38c-1.02,0 -2.03,1.02 -2.03,2.03l-6.1 30.52z" style={{ fill: "#002469" }} />
      <path d="M198.95 62.37c0,1.02 1.02,2.04 2.03,2.04 14.96,5.61 29.71,21.54 41.97,40.28l151.17 -4.25 -4.35 -82.75 -182.69 12.14c-1.02,0 -2.03,1.02 -2.03,2.03l-6.1 30.52z" style={{ fill: "white" }} />
      <path d="M398.65 186.69c58.59,3.28 120.66,3.86 156.33,3.86 3.05,0 6.1,-3.05 6.1,-6.1l-5.8 -88.54 -161.16 4.54 4.53 86.25z" style={{ fill: "white" }} />
    </g>
  </g>
);

const mcg = (
  <g style={{ clipRule: "nonzero" }}>
    <path d="M 454.44,109.33 C 371.05,80.1 371.05,80.1 371.05,80.1 C 449.9,25.93 449.9,25.93 449.9,25.93" style={{ fill: "#ffffff", fillOpacity: "1", fillRule: "evenodd", stroke: "#ffffff", strokeWidth: "1.06408632px", strokeLinecap: "butt", strokeLinejoin: "miter", strokeOpacity: "1" }} />
    <path d="M 459.76,193.17 C 376.36,164.2 376.36,164.2 376.36,164.2 C 455.21,110.53 455.21,110.53 455.21,110.53" style={{ fill: "#ffffff", fillOpacity: "1", fillRule: "evenodd", stroke: "#ffffff", strokeWidth: "1.05929589px", strokeLinecap: "butt", strokeLinejoin: "miter", strokeOpacity: "1" }} />
  </g>
);

const mcs = (
  <g transform="translate(395,112)" style={{ fill: "#ffffff" }}>
    <path d="M 0,-55 C 18,-35 18,-10 6,12 L -6,12 C -18,-10 -18,-35 0,-55 Z" />
    <path d="M -6,8 C -20,-12 -46,-12 -44,10 C -42,26 -26,26 -22,16 C -30,16 -32,4 -22,4 C -14,4 -10,12 -6,20 Z" />
    <path d="M 6,8 C 20,-12 46,-12 44,10 C 42,26 26,26 22,16 C 30,16 32,4 22,4 C 14,4 10,12 6,20 Z" />
    <rect x="-20" y="18" width="40" height="9" rx="3" />
    <path d="M -5,27 L 5,27 L 8,52 L -8,52 Z" />
  </g>
);

const mdl = (
  <>
    <defs>
      <clipPath clipPathUnits="userSpaceOnUse" id="mdl-clipPath3012">
        <path d="m 13.14,0 486.86,0 0,216.69 z" style={{ fill: "#0000ff", stroke: "none" }} />
      </clipPath>
    </defs>
    <g>
      <g clipPath="url(#mdl-clipPath3012)">
        <rect height="230" width="500" y="0" x="0" style={{ fill: "#fff200", fillOpacity: "1" }} />
      </g>
    </g>
  </>
);

const mer = (
  <g
    transform="matrix(0.28883635,-0.01855137,0.01855137,0.28883635,344.39461,109.9603)"
    style={{ fill: "#440055" }}
  >
    <g transform="translate(-630.86889,642.81708)" style={{ fill: "#440055" }}>
      <path
        d="m 701.93802,-785.42365 0,107.625 -107.625,0 0,71.75 107.625,0 0,107.625 71.75,0 0,-107.625 107.625,0 0,-71.75 -107.625,0 0,-107.625 -71.75,0 z"
        style={{
          fill: "#440055",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000000",
          strokeWidth: 3,
        }}
      />
    </g>
  </g>
);

const mgd = (
  <g transform="rotate(-4) translate(431, 20)">
    <path
      d="M 6,0 l 0,300"
      style={{ stroke: "#030045", strokeWidth: 20, fill: "none" }}
    />
  </g>
);

const mio = (
  <path d="M 244.88,34.36 254.92,193.82 c 0,0 25.59,2.11 54.19,3.67 25.46,1.38 49.45,2.09 49.45,2.09 L 346.12,27.57 Z" style={{ fill: "#099ddd", fillOpacity: "1", stroke: "none", strokeWidth: "1px", strokeLinecap: "butt", strokeLinejoin: "miter", strokeOpacity: "1" }} />
);

const mit = (
  <>
    <g>
      <path d="M432.27,165.48l-48,3.36l-2.13-30.49l13.77-0.96l-0.45-6.49l-62.55,4.38l0.66,9.44   l-34.42,2.41l-4.02-57.44l34.42-2.41l0.66,9.44l62.55-4.38l-0.4-5.7l-13.77,0.96l-2.17-31.08l47.99-3.36   L432.27,165.48z" style={{ fill: "#8B0025" }} />
    </g>
    <path d="M444,21l11,180l0,0c0,0,4.49,0.29,6-6s-2.06-31.5-2.06-31.5L450,27C450,27,450.73,20.55,444,21  S444,21,444,21z" style={{ stroke: "#231F20" }} />
  </>
);

const mtw = (
  <g transform="matrix(0.107947,0,0,0.143713,57.5009,-49.815)">
    <g>
      <g transform="matrix(0.75586,0.54876,-0.46633,0.64232,1380.64,-624.702)">
        <path d="M1771,332.1C1771,332.1 1600.5,465.4 1523.4,528.9C1450.9,588.5 1308,712.9 1308,712.9L1308,2363C1308,2363 1457.3,2279.3 1529,2234.4C1606.2,2186.1 1771,2073.1 1771,2073.1L1771,332.1Z" style={{ fill: "rgb(0,0,158)" }} />
      </g>
      <g transform="matrix(0.75586,0.54876,-0.46633,0.64232,2458.05,-497.664)">
        <path d="M1771,286.5C1614,386.8 1459.3,489.8 1308,596.8L1308,2294.2C1463,2153.8 1617.3,2005.7 1771,1848.5L1771,286.5Z" style={{ fill: "rgb(0,0,158)" }} />
      </g>
    </g>
    <g transform="matrix(1.67736,0,0,1.67736,-2218.84,-747.461)">
      <g transform="matrix(1,0,0,1.10509,0.00376,-126.912)">
        <path d="M2798.2,1021.1L2895.3,1174.9L2701.2,1174.9L2798.2,1021.1Z" style={{ fill: "rgb(203,34,22)" }} />
      </g>
      <g transform="matrix(-1,0.00002,-0.00002,-1.10509,5596.53,2356.34)">
        <path d="M2798.2,1021.1L2895.3,1174.9L2701.2,1174.9L2798.2,1021.1Z" style={{ fill: "rgb(203,34,22)" }} />
      </g>
    </g>
  </g>
);

const ncl = (
  <g style={{ clipRule: "nonzero" }}>
    <g transform="rotate(0)  translate(310,40) scale(0.08)">
      <path d="M686 0l215 663 698 0 -564 410 215 663 -564 -410 -564 410 215 -663 -564 -410 697 0 216 -663zm108 331m456 332m67 205m-175 537m-174 126m-564 0m-174 -126m-175 -537m67 -205m456 -332" style={{ fill: "#005DA2" }} />
    </g>
  </g>
);

const nec = (
  <g>
    <path
      d="m 396.15605,25.301409 23.99452,-1.642361 14.7652,176.234292 -23.90835,-0.2131 z"
      style={{ fill: "#fdd017", stroke: "#fdd017", strokeWidth: 1 }}
    />
    <path
      d="m 357.75677,27.187088 23.99452,-1.642361 14.7652,174.434323 -23.90835,-0.55595 z"
      style={{ fill: "#fdd017", stroke: "none" }}
    />
  </g>
);

const ned = (
  <g transform="rotate(-3) scale(0.71 0.81) translate(140,50)">
    <rect width="100%" height="33.33%" y="33.33%" style={{ fill: "#ffffff" }} />
    <rect width="100%" height="33.33%" y="66.66%" style={{ fill: "#21468b" }} />
  </g>
);

const nhr = (
  <g>
    <path d="M 370.75,3.97 438.29,220.35" style={{ fill: "none", stroke: "#005600", strokeWidth: "25", strokeLinecap: "butt", strokeLinejoin: "miter", strokeOpacity: "1", strokeMiterlimit: "4", strokeDasharray: "none" }} />
    <path d="M 320.45,8.79 387.98,225.18" style={{ fill: "#0000ff", stroke: "#0000ff", strokeWidth: "25", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "4", strokeOpacity: "1", strokeDasharray: "none" }} />
  </g>
);

const nmb = (
  <g style={{ clipRule: "nonzero" }}>
    <rect width="55%" height="50%" y="50%" transform="rotate(-3) scale(0.71, 0.81) translate(140, 45)" style={{ fill: "#fafafa" }} />
    <rect width="55%" height="50%" y="50%" transform="rotate(-3) scale(0.71, 0.81) translate(415, -70)" style={{ fill: "#fafafa" }} />
  </g>
);

const nnm = (
  <g transform="rotate(-4) translate(400,20)">
    <path
      d="M -60,00 l 80,300 "
      style={{ stroke: "gold", strokeWidth: 60, fill: "none" }}
    />
    <path
      d="M -60,00 l 80,300 "
      style={{ stroke: "silver", strokeWidth: 20, fill: "none" }}
    />
  </g>
);

const nor = (
  <>
    <clipPath id="centerStripe">
      <rect
        x="-50"
        y="-15"
        height="30"
        width="500"
        transform="rotate(6) translate(117, 50)"
      />
    </clipPath>
    <rect
      transform="rotate(6) translate(117, 50)"
      fill="white"
      x="-50"
      y="-30"
      width="500"
      height="60"
    />
    <g clipPath="url(#centerStripe)">
      <rect fill="#002868" x="0" y="0" width="100%" height="100%" />
    </g>
  </>
);

const npk = (
  <g transform="matrix(0.982733,-0,-0,0.982733,-90.5148,13.705)">
    <g>
      <path d="M198.95 62.37c0,1.02 1.02,2.04 2.03,2.04 32.55,12.21 64.08,73.24 71.21,105.79 54.93,18.31 215.65,20.34 282.79,20.34 3.05,0 6.1,-3.05 6.1,-6.1l-11.19 -170.89c0,-3.05 -3.05,-6.1 -6.1,-6.1l-336.7 22.38c-1.02,0 -2.03,1.02 -2.03,2.03l-6.1 30.52z" style={{ fill: "#002D62" }} />
      <path d="M238.11 97.62c5.39,7.5 10.4,15.66 14.85,23.93l220.54 -11.56 4.18 79.68c8.8,0.2 17.36,0.36 25.54,0.48l-4.28 -81.5 56.98 -2.99 -1.61 -24.63 -56.66 2.97 -3.85 -73.25 -25.42 1.69 3.83 72.89 -234.1 12.27z" style={{ fill: "#FBD329" }} />
    </g>
  </g>
);

const nws = (
  <>
    <g>
      <g>
        <path d="M432,0l16,250" style={{ stroke: "#FFFFFF", strokeWidth: "35" }} />
      </g>
    </g>
    <rect x="420.32" y="22.226" transform="matrix(0.9987 -0.0516 0.0516 0.9987 -5.1911 22.1944)" width="13.2" height="178.662" style={{ fill: "#FDC010", stroke: "#000000" }} />
    <rect x="431.525" y="21.669" transform="matrix(0.9987 -0.0516 0.0516 0.9987 -5.1474 22.7722)" width="13.2" height="178.662" style={{ fill: "#2E2C73", stroke: "#000000" }} />
    <rect x="442.726" y="20.771" transform="matrix(0.9987 -0.0516 0.0516 0.9987 -5.129 23.3506)" width="13.2" height="180.326" style={{ fill: "#DD3626", stroke: "#000000" }} />
  </>
);

const nzl = (
  <g fill="#fff">
    <path d="M368.6 118.2l3-4.8 2.8-4.9-1-2.2a41.4 41.4 0 01-3.5-11.4c-.7-4.6-.6-5.8.4-8.2l.8-2 .7 1.6c3.9 10 5.3 15 4.9 17.7-.2 1 .3.6 1.6-1.2l1.2-1.6-.9-1.7A40.4 40.4 0 01376 88c-.1-2.8.3-4.4 1.3-6l.7-1 .6 2.4 2.1 6.8c1.4 4 1.4 4.4 1.2 6.2v2a7 7 0 001-1l1-1-1-4.3c-1.6-6.1-1.5-11 0-13.3.4-.6.8-1 .9-1a98.8 98.8 0 012.6 14.5c-.5 1.5-.1 1.6 1.3.2l1.2-1.1-.8-2.4c-1.6-4.4-1.7-10.4-.2-12.8l.8-1.2 1.4 6c1 4.8 1.3 6 1 7-.4 1.5-.3 1.5 1.2.2l1.1-1-.7-3.6c-.9-4.4-.8-8 .3-9.9.4-.7.8-1.3 1-1.2 0 0 .6 2.4 1 5.2.7 3.8.9 5.4.7 6.5-.4 1.6-.2 1.7 1.2.5l1-.8-.7-3.7c-.9-4.3-.8-7 .4-9l.9-1.5v1c0 .6.5 3 .9 5.1.5 2.8.6 4.4.4 5.4-.3 1.4 0 1.5 1.4.5.6-.6.6-.8 0-3.9-.7-4.2-.6-6.7.5-8.7l.9-1.5v1.1l.8 4.8a23.6 23.6 0 01.5 6.3l1-.5c1-.7 1-.7.4-3.8-.3-1.7-.5-4-.4-5 .2-1.9.9-3.9 1.4-4 .5-.1 1.8 7.8 1.5 9.4-.3 1.5-.1 1.6 1 .7.7-.6.7-1 .3-3.2-.6-3.5-.4-6.6.3-8 .6-.9.7-1 1-.6.4 1 1.3 7.9 1 8.5-.5 1 .2 1.2 1 .3.7-.7.9-1.1.6-1.6-.4-.8-.8-5.3-.5-6.8 0-.7.4-1.6.7-2l.6-.9.5 3.3c.4 1.8.6 3.7.5 4.2-.1 1.3.2 1.5 1 .8.4-.4.4-1 0-3.3-.6-3-.4-5 .4-6.2.4-.7.5-.6 1 2 .3 1.6.5 3.4.4 4-.2 1.4-.1 1.4.7.7.5-.4.5-.9.2-2.2-.6-2.2-.5-5.3.2-6.3.5-.8.5-.7.9 1.4.4 2.8.5 3.8.4 4.7 0 .6 0 .6.7-.2.6-.7.6-1 .3-2.4-.6-2.2-.5-4.6 0-5.5.5-.7.5-.6 1 1.8.2 1.4.3 2.8.2 3.2 0 .3 0 .6.2.6.5-.2.8-1.1.6-2-.4-1.7-.4-4.5.1-5.5l.5-.9.2 1.7.4 3c0 1 .1 1 .4.6.3-.2.3-1.4.1-2.5-.3-2.1 0-4 .4-4 .4-.2.6 1 .7 2.9 0 1 .2 1.4.4 1.3.2-.1.3-1.4.1-2.8 0-1.4 0-2.8.2-3.2.4-.6.4-.5.6.7l.2 2c0 .4.1.6.4.4.2 0 .2-1 0-2.2V50c.3-.4.5-.2.6 1 0 .9.4 1.8.6 1.4l-.1-1.5v-2.2c.3-.3.4-.2.4.7 0 1.5.7 1 .6-.4 0-1 .6-2.2 1-2.3l.1.2c.1.3 0 1.2-.4 2-.6 1.7-.6 2.1 0 1.2 1-1.2 1.4-1.4.8-.3-.3.6-.8 1-1 1.2l-.7.8c-.2.4-.4 1-.2.9l1.3-1c.7-.5 1.3-.8 1.5-.8.3.2-1.3 1.8-2.6 2.6-.8.4-1.3 1-1.3 1.3 0 .5.2.5.6.2.8-.8 3.4-1.7 3.2-1.3-.2.6-2 2-3.4 2.4a3 3 0 00-1.5 1.1c-.4.8-.4.8.1.4a8 8 0 012.6-.6l1.9-.2-1 .7c-.4.4-1.7.9-2.8 1.1-1.4.3-2 .6-2.4 1.1-.3.7-.3.7.6.5.6-.1 2-.3 3.2-.3h2l-1.1.7c-1 .5-2 .7-3.7.9-1.8.2-2.5.3-2.8.7-.4.7 0 1.1.9.9 1.3-.3 5.7.1 5.3.5-.6.7-2.8 1-5.2.8l-2.4-.1-.6.9c-.5.8-.5.9.1.7.4 0 2.1 0 3.8.4 2.7.5 3 .6 2.4 1-1 .7-3.8.7-6 .1-1.7-.4-1.8-.4-2.5.4-.9.8-.6 1.3.5 1l4 .7c3 .7 3.1.8 2.3 1.2-1.2.7-4 .6-6.5-.2-2-.6-2.1-.5-2.8.1-1 .8-.7 1.3.5 1 .4 0 2.3.4 4.2 1.1l3.6 1.3-1.7.4c-1.8.5-4.8 0-7.1-1-1.5-.6-1.7-.5-2.7.3-1 .8-.9 1.2.2 1 .6-.2 2.3.3 4.7 1.3 3.4 1.4 3.7 1.6 3 2-1.5.7-5.6 0-9.9-1.9-.5-.2-2.4 1-2.3 1.4 0 .2.6.3 1.3.3.6 0 2.8.9 4.9 1.8l3.7 1.7-1.2.4c-1.5.6-5.8-.3-8.5-1.6-2-1.1-2.2-1.1-3.4-.3l-.9.6 1.4.3c.8.1 3 1.2 5.2 2.4 3.7 2.2 3.7 2.2 2.6 2.5-1.7.4-5.6-.6-8.5-2.4-2.7-1.5-2.7-1.5-3.8-.9-1.3.8-1.3 1.2 0 1.1.7 0 2.7 1 5.5 2.7l4.4 2.7-1.6.2c-2 .3-5.5-.8-8.7-3l-2.5-1.5-1.2.8-1.1 1.1 1.4.3c.8 0 2.4.6 3.7 1.3l4.8 2.4 2.6 1.3-1.6.5c-2 .6-6-.4-10-2.6l-3-1.7-1 1c-.6.4-1 .9-1 1 0 .1.7.2 1.5.2 1 0 2.7.6 4.5 1.5l5.5 2.4 2.7 1.1-1.1.6c-2.3 1.2-8.4 0-13-2.5l-2.3-1.3-1.4 1.3a6 6 0 00-1.3 1.5c0 .1.8.2 1.6 0a8 8 0 014 .8l6.8 2.5 4.2 1.7-1.5.6c-1.7.8-4 .8-7.8 0-2.6-.6-6.6-2-7.9-3l-1.3-.4c-.5.2-2.6 2.5-2.5 3l1.4-.2c1.9-.4 3-.2 9.9 2.3l6.6 2.3c1 0 .2.6-1.8 1.3a10 10 0 01-4.8.5c-3.5-.3-8.1-1.6-11.1-3l-2.2-1.1-1.4 1.8c-.7 1-1.3 1.9-1.2 2l1.8-.2c2-.5 1.8-.5 12.3 2.2 6.6 1.6 6.8 1.7 6 2.3-3.2 2.6-11.9 2.4-19.3-.3l-2.9-1c-.2.2-7.1 14.6-7 14.9z" />
    <text fontSize="150" transform="rotate(-4 1113.6 -5056.3) scale(.2)">
      N
    </text>
    <text
      x="300"
      y="300"
      fontSize="150"
      transform="rotate(-4 1113.6 -5056.3) scale(.2)"
    >
      Z
    </text>
  </g>
);

const oli = (
  <g transform="matrix(0.107947,0,0,0.143713,57.5009,-49.815)">
    <g>
      <path d="M3733.5,1131L442.9,1131L442.9,1310.4C442.9,1310.4 974.1,1658.1 1964.8,1692.2C2820.7,1721.7 3735.8,1573.9 3735.8,1573.9L3733.5,1131Z" style={{ fill: "rgb(11,115,36)" }} />
    </g>
  </g>
);

const oro = (
  <g transform="rotate(-4) translate(400,20)">
    <path d="M 5,00 l 0,300" style={{ stroke: "#FFFFFF", strokeWidth: 20 }} />
    <path d="M -35,00 l 0,300" style={{ stroke: "#FFFFFF", strokeWidth: 20 }} />
  </g>
);

const oxb = (
  <>
    <clipPath id="vert30stripe">
      <rect
        transform="rotate(-4) scale(0.63 0.81) translate(210,60)"
        x="33.333%"
        y="0%"
        width="33.333%"
        height="100%"
      />
    </clipPath>
    <g>
      <g clipPath="url(#vert30stripe)">
        <rect fill="#F2F2F2" x="0" y="0" width="100%" height="100%" />
      </g>
      <rect
        transform="rotate(-4) scale(0.63 0.81) translate(210,60)"
        x="66.666%"
        y="0%"
        width="33.333%"
        height="100%"
        fill="#A02C2C"
      />
    </g>
  </>
);

const pai = (
  <g style={{ clipRule: "nonzero" }}>
    <path d="M 460, 130 L 320, 210 L 470 210" style={{ fill: "#3334CD" }} />
  </g>
);

const pbc = (
  <g transform="rotate(-4) translate(400, 20)">
    <path
      d="M 19,00 l 0,300 "
      style={{ stroke: "white", strokeWidth: 18, fill: "none" }}
    />
    <path
      d="M -17,00 l 0,300 "
      style={{ stroke: "white", strokeWidth: 18, fill: "none" }}
    />
  </g>
);

const pcb = (
  <g style={{ clipRule: "nonzero" }}>
    <path d="M461.53,10l-67.32,11.11l-68.21,94.89l78.16,92.83l67.84,3.17l-10.47,-202Z" style={{ fill: "#990000" }} />
  </g>
);

const pem = (
  <g transform="rotate(-4) translate(410,85)">
    <path d="M -60,-33 l 00,00 l 60,00 l 00,40 z" fill="#000066" />
    <path d="M -60,14 l 00,40 l 60,43 l 00,-40 z" fill="#000066" />
    <path d="M -60,100 l 00,40 l 60,6 l 0,00 z" fill="#000066" />
  </g>
);

const pet = (
  <g transform="rotate(-3)  translate(0,130)">
    <path d="M 465,-100 350,0 455,100 z" style={{ fill: "#ffff00" }} />
  </g>
);

const pgb = (
  <g transform="rotate(-4) translate(352,30)">
    <rect x="0" y="0" width="48" height="90" style={{ fill: "#00007f" }} />
    <rect x="48" y="0" width="48" height="90" style={{ fill: "#ff0000" }} />
    <rect x="0" y="90" width="48" height="90" style={{ fill: "#ff0000" }} />
    <rect x="48" y="90" width="48" height="90" style={{ fill: "#00007f" }} />
    <rect x="18" y="22" width="60" height="136" style={{ fill: "#ffffff" }} />
  </g>
);

const pkw = (
  <g transform="matrix(0.107947,0,0,0.143713,57.5009,-49.815)">
    <g>
      <g transform="matrix(0.00013,-0.74745,0.82343,0.00015,1729.93,3061.92)">
        <path d="M2594.7,693.2L3269.3,1920L1920,1920L2594.7,693.2Z" style={{ fill: "white" }} />
      </g>
      <g transform="matrix(-0.00071,-0.98335,1.27041,-0.00092,568.457,3490.21)">
        <path d="M2149.4,1762.7L2406.3,2160L1892.6,2160L2149.4,1762.7Z" style={{ fill: "rgb(38,126,196)" }} />
      </g>
      <g transform="matrix(-0.00071,-0.98104,1.26992,-0.00092,569.7,2980.72)">
        <path d="M2149.4,1762.7L2406.3,2160L1892.6,2160L2149.4,1762.7Z" style={{ fill: "rgb(38,126,196)" }} />
      </g>
      <g transform="matrix(0.88727,0,0,0.88727,328.685,137.945)">
        <g transform="matrix(1,0,0,1.10509,0.00376,-126.912)">
          <path d="M2798.2,1021.1L2895.3,1174.9L2701.2,1174.9L2798.2,1021.1Z" style={{ fill: "rgb(38,126,196)" }} />
        </g>
        <g transform="matrix(-1,0.00002,-0.00002,-1.10509,5596.53,2356.34)">
          <path d="M2798.2,1021.1L2895.3,1174.9L2701.2,1174.9L2798.2,1021.1Z" style={{ fill: "rgb(38,126,196)" }} />
        </g>
      </g>
      <g transform="matrix(0.49946,0,0,0.49946,1174.48,563.982)">
        <g transform="matrix(1,0,0,1.10509,0.00376,-126.912)">
          <path d="M2798.2,1021.1L2895.3,1174.9L2701.2,1174.9L2798.2,1021.1Z" style={{ fill: "rgb(38,126,196)" }} />
        </g>
        <g transform="matrix(-1,0.00002,-0.00002,-1.10509,5596.53,2356.34)">
          <path d="M2798.2,1021.1L2895.3,1174.9L2701.2,1174.9L2798.2,1021.1Z" style={{ fill: "rgb(38,126,196)" }} />
        </g>
      </g>
      <g transform="matrix(0.49946,0,0,0.49946,1653.48,563.982)">
        <g transform="matrix(1,0,0,1.10509,0.00376,-126.912)">
          <path d="M2798.2,1021.1L2895.3,1174.9L2701.2,1174.9L2798.2,1021.1Z" style={{ fill: "rgb(38,126,196)" }} />
        </g>
        <g transform="matrix(-1,0.00002,-0.00002,-1.10509,5596.53,2356.34)">
          <path d="M2798.2,1021.1L2895.3,1174.9L2701.2,1174.9L2798.2,1021.1Z" style={{ fill: "rgb(38,126,196)" }} />
        </g>
      </g>
    </g>
  </g>
);

const plu = (
  <g style={{ clipRule: "nonzero" }}>
    <g transform="rotate(-3)  translate(0,130) ">
      <rect x="0" y="0" width="100%" height="50%" style={{ fill: "#ffffff" }} />
      <path d="M 465,-100 L 350,0 L 455,100 Z" style={{ fill: "black" }} />
    </g>
  </g>
);

const pmb = (
  <g>
    <path d="M 432,0 l 16,250" style={{ strokeWidth: 35, stroke: "#ff7777" }} />
  </g>
);

const pol = (
  <rect
    style={{ fill: "#dd0c39", fillOpacity: 1 }}
    x="0"
    id="rect41"
    transform="matrix(0.70902697,-0.03715853,0.04239212,0.80888992,101.25621,32.815632)"
    y="50%"
    height="50%"
    width="500"
    fill="#ff0000"
  />
);

const prd = (
  <g transform="matrix(0.107947,0,0,0.143713,57.5009,-49.815)">
    <g>
      <g transform="matrix(1.00304,0,0,0.89831,-11.3605,114.153)">
        <path d="M2020.9,1755.4C2612.3,1791.1 3739,1628.5 3739,1628.5L3741,1122.5L448,1122.5L448,1329C448,1329 998.1,1722 2020.9,1755.4" style={{ fill: "rgb(2,20,97)" }} />
      </g>
      <g transform="matrix(0.55932,0,0,1,1646.81,0)">
        <path d="M3744.2,668L3383,641L3383,1604L3740.6,1577L3744.2,668Z" style={{ fill: "rgb(2,20,97)" }} />
      </g>
      <g transform="matrix(1.58219,0,0,1,0,0)">
        <path d="M438,827C438,827 379.2,869.5 352.4,893.2C326.4,916.1 276.8,969 276.8,969L0,969L0,1308L276.8,1308C276.8,1308 330.6,1355.2 357.4,1375.9C383.4,1395.9 438,1432.2 438,1432.2L438,827Z" style={{ fill: "rgb(2,20,97)" }} />
      </g>
    </g>
  </g>
);

const pri = (
  <g style={{ clipRule: "nonzero" }}>
    <path d="M 470,10 L 145,199 L 500,230 Z" style={{ fill: "#EE7F2D" }} />
  </g>
);

const ptr = (
  <g transform="rotate(-4) translate(400,20)">
    <path
      d="M 0,0 l 0,300 "
      style={{ stroke: "#ffffff", strokeWidth: 30, fill: "none" }}
    />
  </g>
);

const put = (
  <g style={{ clipRule: "nonzero" }}>
    <g transform="rotate(-4) translate(400,20)">
      <path d="M 0,0 l 0,300 " style={{ stroke: "#ffffff", strokeWidth: "30", fill: "none" }} />
    </g>
  </g>
);

const qcc = (
  <g transform="rotate(-4) translate(400,20)">
    <path
      d="M 0,0 l 0,300 "
      style={{ stroke: "white", strokeWidth: 30, fill: "none" }}
    />
  </g>
);

const qco = (
  <g transform="rotate(-3) scale(0.71 0.81) translate(140,50)">
    <rect fill="#FFFFFF" width="100%" height="33.33%" y="33.33%" />
    <rect fill="#000066" width="100%" height="33.33%" y="66.66%" />
  </g>
);

const qmu = (
  <g>
    <path d="M 405.41,-8.3 426.34,290.97" style={{ fill: "none", stroke: "#ffcc00", strokeWidth: "20" }} />
    <path d="M 365.51,-5.51 386.43,293.76" style={{ fill: "none", stroke: "#ffcc00", strokeWidth: "20" }} />
  </g>
);

const rcl = (
  <>
    <path d="m 144.13,110.17 c -4.97,-7.02 -9.86,-12.88 -15.31,-18.35 -4.62,-4.64 -7.48,-7.06 -12.07,-10.21 -3.07,-2.1 -8.58,-5.02 -10.04,-5.31 -0.47,-0.09 -1.07,-0.41 -1.34,-0.71 -0.46,-0.51 -0.45,-0.68 0.13,-3.05 0.34,-1.38 0.81,-3.67 1.05,-5.09 0.24,-1.42 1.35,-7.23 2.47,-12.9 1.43,-7.24 2.18,-10.48 2.53,-10.85 0.45,-0.49 7.54,-1 86.14,-6.24 47.11,-3.14 85.69,-5.67 85.75,-5.61 0.25,0.25 2.33,37.46 3.98,71.05 l 0.19,3.9 -4.96,0.19 c -9,0.35 -20.4,0.74 -42.25,1.47 -11.86,0.39 -27.23,0.91 -34.14,1.14 -6.91,0.24 -22.54,0.75 -34.71,1.15 -12.18,0.4 -23.1,0.75 -24.27,0.79 l -2.12,0.07 -1.02,-1.43 z" style={{ fill: "#e42222", fillOpacity: "1", stroke: "none" }} />
    <path d="m 143.35,109.98 9.94,15.03 135.68,-4.2 4.2,75.98 15.27,0.83 -4.27,-77.24 151.86,-4.76 -1.02,-15.4 -151.49,4.6 -4.4,-74.42 -15.35,0.93 4.13,73.97 z" style={{ fill: "#ffffff", fillRule: "evenodd", stroke: "none", strokeWidth: "1px", strokeLinecap: "butt", strokeLinejoin: "miter", strokeOpacity: "1", fillOpacity: "1" }} />
    <path d="m 405.23,200.56 c -31.77,-0.43 -97.49,-2.61 -98.12,-3.25 -0.14,-0.14 -4.51,-77.5 -4.39,-77.64 0.06,-0.07 149.85,-4.73 151.5,-4.72 l 1.45,0.01 2.63,40.68 c 2.61,40.3 2.63,40.69 1.86,42.12 -0.42,0.79 -1.36,1.81 -2.08,2.25 -1.27,0.79 -2.03,0.81 -23.6,0.72 -12.26,-0.05 -25.43,-0.14 -29.26,-0.19 z" style={{ fill: "#e42222", fillOpacity: "1" }} />
    <path d="m 299.63,68.56 c -1.2,-20.54 -2.12,-37.4 -2.05,-37.46 0.2,-0.16 144.52,-9.79 146.55,-9.77 1.41,0.01 2.05,0.29 3.37,1.5 1.01,0.92 1.72,1.99 1.86,2.8 0.24,1.35 5.1,75.44 4.96,75.6 -0.07,0.08 -18.33,0.66 -113.98,3.64 -18.26,0.57 -34.4,1.03 -35.86,1.03 l -2.67,0 -2.18,-37.35 z" style={{ fill: "#0330af", fillOpacity: "1" }} />
    <path d="m 279.81,195.73 c -46.89,-3.58 -77.74,-7.76 -97.21,-13.17 -6.83,-1.9 -6.13,-1.37 -7.14,-5.42 -3.41,-13.67 -11.96,-34.09 -20.59,-49.16 -0.88,-1.54 -1.5,-2.91 -1.38,-3.04 0.19,-0.2 89.79,-3.12 124.54,-4.06 l 10.71,-0.29 0.24,2.22 c 0.26,2.42 3.94,70.06 3.93,72.23 l -0.01,1.34 -2.97,-0.05 c -1.63,-0.03 -6.19,-0.3 -10.13,-0.6 z" style={{ fill: "#0330af", fillOpacity: "1" }} />
  </>
);

const rcm = (
  <>
    <path d="M 105.94,71.34 456.14,124.69 454.24,97.31 110.77,47.39 Z" style={{ fill: "#fbfcff", fillOpacity: "1", stroke: "none", strokeWidth: "1px", strokeLinecap: "butt", strokeLinejoin: "miter", strokeOpacity: "1" }} />
    <path d="M 349.61,198.92 361.46,26.78 336.16,28.42 322.02,197.98 Z" style={{ fill: "#fbfcff", fillOpacity: "1", stroke: "none", strokeWidth: "1px", strokeLinecap: "butt", strokeLinejoin: "miter", strokeOpacity: "1" }} />
  </>
);

const rej = (
  <g transform="matrix(0.107947,0,0,0.143713,57.5009,-49.815)">
    <g>
      <g transform="matrix(0.99876,0,0,0.89577,2.03556,-45.9889)">
        <path d="M3741.1,797.1C3741.1,797.1 2742.7,639.7 1976.9,670.6C987.3,710.4 438.5,1124 438.5,1124L438.5,1305.5L3741.1,1305.5L3741.1,797.1Z" style={{ fill: "rgb(11,115,36)" }} />
      </g>
      <g transform="matrix(1.00204,0,0,0.8333,-4.75794,178.634)">
        <rect x="443.876" y="1002.48" width="3291.2" height="272.462" />
      </g>
    </g>
  </g>
);

const reu = (
  <g>
    <path
      d="m 413.23894,23.305081 24.02873,-0.94693 9.57955,178.581489 -23.8916,-0.80568 z"
      style={{ fill: "#000050" }}
    />
    <path
      d="m 371.40521,24.626146 24.02873,-0.94693 9.57955,178.581494 -23.8916,-0.80568 z"
      style={{ fill: "#078930" }}
    />
  </g>
);

const rnt = (
  <>
    <path d="M 105.94,71.34 456.14,124.69 454.24,97.31 110.77,47.39 Z" style={{ fill: "#0f3193", fillOpacity: "1", stroke: "none", strokeWidth: "1px", strokeLinecap: "butt", strokeLinejoin: "miter", strokeOpacity: "1" }} />
    <path d="M 349.61,198.92 361.46,26.78 336.16,28.42 322.02,197.98 Z" style={{ fill: "#0f3193", fillOpacity: "1", stroke: "none", strokeWidth: "1px", strokeLinecap: "butt", strokeLinejoin: "miter", strokeOpacity: "1" }} />
  </>
);

const rob = (
  <g>
    <path
      d="M 455,10 350,199 500,230 z"
      style={{ fill: "#ffffff", stroke: "none" }}
    />
  </g>
);

const rdu = (
  <path d="M 432,0 l 16,250" style={{ strokeWidth: 35, stroke: "#993399" }} />
);

const rho = (
  <>
    <rect
      style={{ fill: "#f2f2f2" }}
      width="104.99896"
      height="186.3"
      x="237.29897"
      y="48.599998"
      transform="matrix(0.99756405,-0.06975647,0.06975647,0.99756405,0,0)"
    />
    <path
      d="M 491.0625,8.5 344.4375,18.75 362.625,278.90625 509.25,268.65625 491.0625,8.5 z"
      style={{ fill: "#660080", fillOpacity: 1 }}
    />
  </>
);

const roc = (
  <g transform="rotate(-4) translate(400,20)">
    <path
      d="M 5,00 l 0,300 "
      style={{ stroke: "gold", strokeWidth: 20, fill: "none" }}
    />
    <path
      d="M -30,00 l 0,300 "
      style={{ stroke: "gold", strokeWidth: 20, fill: "none" }}
    />
  </g>
);

const rou = (
  <>
    <clipPath id="vert30stripe">
      <rect
        transform="rotate(-4) scale(0.63, 0.81) translate(210, 60)"
        x="33%"
        y="0%"
        width="34%"
        height="100%"
        style={{ fill: "#003399" }}
      />
    </clipPath>
    <g clipRule="nonzero" clipPath="url(#vert30stripe)">
      <rect fill="#ffe60d" x="0" y="0" width="100%" height="100%" />
    </g>
    <rect
      transform="rotate(-4) scale(0.63 0.81) translate(210,60) "
      x="66.666%"
      y="0%"
      width="33.333%"
      height="100%"
      fill="#f21830"
    />
  </>
);

const rpc = (
  <path
    transform="rotate(-3) translate(100,30)"
    d="M 280,0 L 280,200 M 0,100 L 400,100"
    fill="none"
    stroke="white"
    strokeWidth="25"
  />
);

const rsa = (
  <>
    <clipPath id="t">
      <path d="M0,0 L22.5,15 L0,30" />
    </clipPath>
    <g transform=" translate(0,-60)">
      <g transform="translate(460,260) rotate(178) scale(6)">
        <rect width="60" style={{ fill: "#ffffff" }} height="10" y="10" />
        <rect width="60" height="10" style={{ fill: "#0c1c8c" }} />
        <path
          d="M0,0 L22.5,15 L0,30"
          style={{ fill: "none", stroke: "#ffffff", strokeWidth: 10 }}
        />
        <path
          d="M0,0 L22.5,15 L0,30"
          clipPath="url(#t)"
          style={{ fill: "#000000", stroke: "#fcb514", strokeWidth: 10 }}
        />
        <path
          d="M0,0 L22.5,15 L0,30"
          style={{ stroke: "#007c59", strokeWidth: 6, fill: "none" }}
        />
        <rect
          width="60"
          height="6"
          x="22.5"
          y="12"
          style={{ fill: "#007c59" }}
        />
      </g>
    </g>
  </>
);

const rus = (
  <g transform="rotate(-3) scale(0.71 0.81) translate(140,50)">
    <rect width="100%" height="33.33%" y="33.33%" style={{ fill: "#0000ff" }} />
    <rect width="100%" height="33.33%" y="66.66%" style={{ fill: "#ff0000" }} />
  </g>
);

const sac = (
  <path d="M 432,0 l 16,250" style={{ strokeWidth: 35, stroke: "#CBCBCB" }} />
);

// TODO: Confirm design is accurate
const sai = (
  <g style={{ clipRule: "nonzero" }}>
    <g transform="rotate(-4)  translate(320,143) ">
      <path d="M 130,-130 L 0,0 L 130,130" style={{ stroke: "white", strokeWidth: "35", fill: "none" }} />
      <path d="M 130,-130 L 0,0 L 130,130" style={{ stroke: "#DA251D", strokeWidth: "10", fill: "none" }} />
    </g>
  </g>
);

const say = (
  <g transform="rotate(-4) translate(400,20)">
    <path
      d="M -10,0 l 0,300 "
      style={{ stroke: "#ffcc00", strokeWidth: 120, fill: "none" }}
    />
    <path
      d="M -80,0 l 0,300 "
      style={{ stroke: "#000000", strokeWidth: 40, fill: "none" }}
    />
  </g>
);

const sbh = (
  <path
    d="m 396.15605,25.14572 23.99452,-1.642361 14.7652,176.467821 -23.90835,-0.0963 z"
    style={{ fill: "#000050", stroke: "#000050", strokeWidth: 1 }}
  />
);

const scc = (
  <g
    transform="matrix(0.65386408,0,0,0.65386408,32.566722,-135.8729)"
    style={{ fill: "#ffffff", stroke: "#ffffff" }}
  >
    <path
      d="m 538.74596,418.05956 c 1.35639,-0.1009 2.58832,-0.72665 3.45468,-1.5978 1.77142,-1.78123 2.1111,-2.23858 2.1111,-5.11287 l -0.0956,-50.04276 0.0292,0 0.15973,-50.52208 c 0.69082,-3.63935 -0.11358,-3.22553 2.27114,-5.65618 -0.99651,-0.64547 -1.98875,-0.92317 -2.9428,-0.95865 -0.19873,-0.005 -0.3821,-0.0149 -0.57568,0 -1.35636,0.1009 -2.58831,0.72664 -3.45457,1.5978 -1.77152,1.78122 -2.11115,2.23862 -2.11115,5.11291 l 0.0956,50.04275 -0.0291,0 -0.15973,50.52204 c -0.69081,3.63938 0.11359,3.22553 -2.27112,5.65618 0.99658,0.64548 1.98874,0.9232 2.94287,0.95866 0.19874,0.005 0.3821,0.0149 0.57566,0 z"
      style={{
        fill: "#ffffff",
        stroke: "#ffffff",
        strokeWidth: 0,
      }}
    />
    <path
      style={{
        fill: "#ffffff",
        stroke: "#ffffff",
        strokeWidth: 0,
      }}
      d="m 579.65873,402.94141 c 0.88809,-1.03019 1.31645,-2.34403 1.31299,-3.57259 -0.005,-2.51214 -0.0901,-3.07571 -2.12252,-5.10822 l -35.45341,-35.31769 0.0203,-0.0204 -35.61145,-35.8376 c -2.08473,-3.06211 -2.36128,-2.20031 -2.39361,-5.60545 -1.16106,0.24826 -2.05897,0.7535 -2.75869,1.40302 -0.14534,0.13525 -0.28002,0.25962 -0.4073,0.40726 -0.88808,1.03019 -1.31644,2.34404 -1.31296,3.5726 0.005,2.51218 0.0901,3.07578 2.1225,5.1082 l 35.45341,35.31778 -0.0203,0.0203 35.61143,35.83762 c 2.08474,3.06201 2.36129,2.20022 2.39361,5.60536 1.16108,-0.24827 2.05897,-0.75348 2.7587,-1.40302 0.14535,-0.13526 0.28003,-0.2599 0.40728,-0.40726 z"
    />
    <path
      d="m 597.89831,363.32152 c -0.1009,-1.35639 -0.72665,-2.58833 -1.5978,-3.45459 -1.78142,-1.77129 -2.23866,-2.11115 -5.11293,-2.11115 l -50.04276,0.0956 0,-0.0291 -50.52208,-0.15973 c -3.63937,-0.69083 -3.22552,0.11358 -5.6561,-2.27111 -0.64549,0.99651 -0.92319,1.98875 -0.95874,2.94279 -0.005,0.19872 -0.0149,0.3821 0,0.57567 0.1009,1.35639 0.72665,2.58832 1.59781,3.45456 1.78143,1.7713 2.23868,2.11118 5.11297,2.11118 l 50.04275,-0.0959 0,0.0292 50.52208,0.15974 c 3.63934,0.69081 3.22551,-0.11359 5.65614,2.27112 0.64552,-0.99659 0.92311,-1.98877 0.95866,-2.94287 0.005,-0.19872 0.0149,-0.3821 0,-0.57569 z"
      style={{
        fill: "#ffffff",
        stroke: "#ffffff",
        strokeWidth: 0,
      }}
    />
    <path
      style={{
        fill: "#ffffff",
        stroke: "#ffffff",
        strokeWidth: 0,
      }}
      d="m 582.78007,322.40879 c -1.03015,-0.88805 -2.34409,-1.31641 -3.57255,-1.31297 -2.5122,0.005 -3.0758,0.0901 -5.10823,2.1226 l -35.31779,35.45336 -0.0204,-0.0204 -35.83763,35.61142 c -3.06211,2.08477 -2.20022,2.36132 -5.60536,2.3936 0.24825,1.16109 0.75348,2.05907 1.40298,2.75882 0.13525,0.14534 0.25992,0.28002 0.40731,0.40729 1.03018,0.88806 2.34401,1.31641 3.57257,1.31298 2.51211,-0.005 3.07571,-0.0901 5.10822,-2.12253 l 35.3177,-35.45342 0.0204,0.0204 35.8376,-35.61137 c 3.06211,-2.08481 2.20032,-2.36135 5.60544,-2.39365 -0.24825,-1.16107 -0.75348,-2.059 -1.403,-2.75873 -0.13526,-0.14534 -0.25991,-0.28002 -0.4073,-0.40729 z"
    />
    <path
      transform="matrix(0.99504378,0,0,0.99504378,184.15885,70.201165)"
      d="m 370.35716,292.36218 c 0,6.50907 -5.27665,11.78572 -11.78572,11.78572 -6.50907,0 -11.78571,-5.27665 -11.78571,-11.78572 0,-6.50907 5.27664,-11.78571 11.78571,-11.78571 6.50907,0 11.78572,5.27664 11.78572,11.78571 z"
      style={{
        fill: "#ffffff",
        fillOpacity: 1,
        stroke: "#ffffff",
        strokeWidth: 0,
      }}
    />
    <path
      transform="matrix(3.6544449,0,0,3.6544449,-769.42641,-707.30716)"
      d="m 370.35716,292.36218 c 0,6.50907 -5.27665,11.78572 -11.78572,11.78572 -6.50907,0 -11.78571,-5.27665 -11.78571,-11.78572 0,-6.50907 5.27664,-11.78571 11.78571,-11.78571 6.50907,0 11.78572,5.27664 11.78572,11.78571 z"
      style={{
        fill: "none",
        stroke: "#ffffff",
        strokeWidth: 3.86204243,
      }}
    />
  </g>
);

const sch = (
  <g style={{ clipRule: "nonzero" }}>
    <g transform="rotate(-2)  translate(260,35)  scale(0.078)">
      <path d="M1237 921l186 0 0 -174 -186 0 0 -193 560 0 0 193 -185 0 0 174 185 0 0 185 174 0 0 -185 193 0 0 560 -193 0 0 -185 -174 0 0 185 -185 0 0 174 185 0 0 193 -560 0 0 -193 186 0 0 -174 -186 0 0 -185 -174 0 0 185 -193 0 0 -560 193 0 0 185 174 0 0 -185z" style={{ fill: "#FFFFFF" }} />
    </g>
  </g>
);

const sco = (
  <g>
    <circle
      cx="375"
      cy="115"
      r="50"
      stroke="#900"
      strokeWidth="17"
      fill="#8cf"
    />
    <circle cx="375" cy="115" r="6" strokeWidth="0" fill="#900" />
    <g transform="translate(367.625,55.59467)" id="WheelSpike">
      <path
        fill="#900"
        strokeWidth="0"
        d="M 0.125,-0.125 C 2.8241831,-14.718465 0.37994487,-16.164559 0.125,-20.125 C 10.772964,-14.747921 12.635905,-11.317461 15.125,-0.125 C 11.115395,-0.70054519 4.4572137,-1.0540513 0.125,-0.125 z"
      />
    </g>
    <use
      x="0"
      y="0"
      xlinkHref="#WheelSpike"
      transform="matrix(0.5,0.8660254,-0.8660254,0.5,287.25289,-266.9912)"
      width="200"
      height="230"
    />
    <use
      x="0"
      y="0"
      xlinkHref="#WheelSpike"
      transform="matrix(-0.5,0.8660254,-0.8660254,-0.5,661.75289,-152.02153)"
      width="200"
      height="230"
    />
    <use
      x="0"
      y="0"
      xlinkHref="#WheelSpike"
      transform="matrix(0.5,-0.8660254,0.8660254,0.5,88.037439,382.42762)"
      width="200"
      height="230"
    />
    <use
      x="0"
      y="0"
      xlinkHref="#WheelSpike"
      transform="matrix(-0.5,-0.8660254,0.8660254,-0.5,463.2949,497.73017)"
      width="200"
      height="230"
    />
    <use
      x="0"
      y="0"
      xlinkHref="#WheelSpike"
      transform="matrix(-1,0,0,-1,749.3511,229.95588)"
      width="200"
      height="230"
    />
    <g id="WheelHub" transform="matrix(1,0,0,0.9808198,0,1.7377014)">
      <g id="HalfHub" transform="matrix(1,0,0,0.9891943,356.81499,75.281599)">
        <path
          style={{ fill: "#990000", strokeWidth: 0 }}
          d="M 18.26601,-0.98669238 C 21.039196,-0.98669238 23.811427,-0.61381072 26.452556,0.13195261 L 24.665586,4.2676717 C 21.291046,3.4501274 22.541945,3.8738881 22.22675,4.109357 C 23.011456,3.4890423 20.597372,4.3396074 21.543884,8.0913483 C 22.213371,10.745028 24.429719,17.210682 24.487937,21.197108 C 24.506445,22.464427 23.840115,26.616021 20.682395,29.594385 C 20.882093,29.729244 21.237732,29.686993 22.22675,30.45966 L 21.302881,34.118596 C 20.159131,33.536018 19.533178,33.443887 18.26601,33.368426 C 18.241806,31.99473 18.258325,-0.16313877 18.26601,-0.98669238 z"
        />
      </g>
      <use
        height="230"
        width="500"
        transform="matrix(-1,0,0,1,750.17692,0)"
        xlinkHref="#HalfHub"
        y="0"
        x="0"
      />
    </g>
    <use
      x="0"
      y="0"
      xlinkHref="#WheelHub"
      transform="matrix(-0.5,0.8660254,-0.8660254,-0.5,661.84266,-152.5083)"
      width="200"
      height="230"
    />
    <use
      x="0"
      y="0"
      xlinkHref="#WheelHub"
      transform="matrix(0.5,0.8660254,-0.8660254,0.5,286.7542,-267.59977)"
      width="200"
      height="230"
    />
    <use
      x="0"
      y="0"
      xlinkHref="#WheelHub"
      transform="matrix(-1,0,0,-1,750.17692,229.74097)"
      width="200"
      height="230"
    />
    <use
      x="0"
      y="0"
      xlinkHref="#WheelHub"
      transform="matrix(-0.5,-0.8660254,0.8660254,-0.5,463.06917,497.34074)"
      width="200"
      height="230"
    />
    <use
      x="0"
      y="0"
      xlinkHref="#WheelHub"
      transform="matrix(0.5,-0.8660254,0.8660254,0.5,87.98071,382.42606)"
      width="200"
      height="230"
    />
  </g>
);

const scu = (
  <g style={{ clipRule: "nonzero" }}>
    <g transform="rotate(-4)  translate(375,143) ">
      <path d="M 60,-100 L 0,0 L 60,100" style={{ stroke: "white", strokeWidth: "25", fill: "none" }} />
    </g>
  </g>
);

const seh = (
  <path
    transform="matrix(1,1.38304e-09,6.16746e-10,1,1.06479e-05,-1.20604e-06)"
    d="m 383.44274,59.272748 c -3.47822,3.653922 -6.68485,7.422633 -5.66475,12.438054 -3.18353,-6.281292 -10.93493,-5.358408 -12.77808,2.266604 7.07443,-1.339572 13.70984,6.31877 14.14458,11.326052 l 1.84723,21.276752 -21.27676,1.84724 c -5.00727,0.43472 -13.69456,-4.78157 -13.59425,-11.981016 -7.19327,3.129678 -6.76647,10.924156 -0.0305,12.977536 -5.1162,-0.14046 -8.27588,3.66765 -11.27569,7.72355 3.65392,3.47821 7.42264,6.68485 12.43807,5.66474 -6.28131,3.18354 -5.35741,10.94653 2.2676,12.78969 -1.33957,-7.07443 6.31776,-13.72145 11.32504,-14.15618 l 21.27675,-1.84723 1.84724,21.27675 c 0.43472,5.00728 -4.78156,13.69458 -11.98101,13.59425 3.12967,7.19329 10.92414,6.76648 12.97752,0.0305 -0.14046,5.11618 3.66767,8.27586 7.72356,11.27568 3.47822,-3.65393 6.68484,-7.42263 5.66474,-12.43806 3.18353,6.28132 10.93494,5.35844 12.7781,-2.26659 -7.07445,1.33957 -13.70986,-6.31877 -14.14459,-11.32605 l -1.84723,-21.27675 21.27675,-1.84724 c 5.00729,-0.43472 13.69558,4.79316 13.59527,11.99261 7.19328,-3.12968 6.76546,-10.93575 0.0295,-12.98913 5.11618,0.14046 8.27586,-3.66766 11.27569,-7.72356 -3.65394,-3.47821 -7.42264,-6.68484 -12.43807,-5.66473 6.28131,-3.183537 5.35843,-10.934939 -2.26659,-12.778099 1.33956,7.074439 -6.31877,13.709859 -11.32606,14.144589 l -21.27672,1.84721 -1.84724,-21.27675 c -0.43473,-5.007281 4.78157,-13.694582 11.98102,-13.594264 -3.12969,-7.193272 -10.92416,-6.766472 -12.97754,-0.03052 0.14046,-5.116184 -3.66766,-8.275876 -7.72355,-11.275689 z"
    style={{ fill: "#801213", stroke: "#801213", strokeWidth: 1.11746 }}
  />
);

const sel = (
  <g transform="rotate(-4) translate(400,20)">
    <path
      d="M 5,00 l 0,300 "
      style={{ stroke: "gold", strokeWidth: 20, fill: "none" }}
    />
    <path
      d="M -30,00 l 0,300 "
      style={{ stroke: "maroon", strokeWidth: 20, fill: "none" }}
    />
  </g>
);

const ser = (
  <>
    <defs>
      <mask id="ser-mask-3" style={{ fill: "white" }}>
        <use xlinkHref="#ser-path-2" />
      </mask>
      <path d="M0,54 C0,55 1,56 2,56 C34,68 65,128 72,160 C126,178 284,180 350,180 C353,180 356,177 356,174 L345,6 C345,3 342,0 339,0 L8,22 C7,22 6,23 6,24 L0,54 Z" id="ser-path-2" />
    </defs>
    <g transform="matrix(1,-0,-0,1,-91,13)">
      <g style={{ stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" }}>
        <g>
          <g transform="translate(196, 8)">
            <g mask="url(#ser-mask-3)">
              <g transform="translate(-119, -179)">
                <rect x="14" y="158" width="500" height="230" style={{ fill: "#FA0505", fillRule: "nonzero" }} />
                <polygon transform="translate(272.25375, 179.84857) rotate(16) translate(-272.25375, -179.84857) " points="22.25 64.85 522.25 64.85 522.25 294.85 29.01 268.48" style={{ fill: "#FFFFFF", fillRule: "nonzero" }} />
              </g>
            </g>
          </g>
        </g>
      </g>
    </g>
  </>
);

const sgh = (
  <g>
    <g>
      <g>
        <path d="M344.99,-33L386.99,-33L387.01,303L345.01,303L344.99,-33Z" style={{ fill: "rgb(169,0,0)" }} />
        <path d="M344.99,-33L386.99,-33L387.01,303L345.01,303L344.99,-33Z" style={{ fill: "rgb(255,0,0)" }} />
        <path d="M344.99,-33L386.99,-33L387.01,303L345.01,303L344.99,-33Z" style={{ fill: "none" }} />
        <g transform="matrix(1.70388,0,0,1.02439,-168.17961,8.02439)">
          <rect x="175" y="81" width="206" height="41" style={{ fill: "rgb(255,0,0)" }} />
        </g>
      </g>
    </g>
  </g>
);

const shi = (
  <path
    d="m 282.83473,22.488545 -181.38882,16.46439 7.51845,156.678165 362.67705,15.01403 z"
    style={{ fill: "#000032" }}
  />
);

const shg = (
  <g transform="rotate(-3)  translate(0,130) ">
    <rect fill="#010066" x="0" y="0" width="100%" height="50%" />
    <path d="M 465,-100 L 350,0 L 455,100 Z" fill="#FFFFFF" />
    <path d="M 453,-100 L 410,0 L 450,100 Z" fill="#FFFF00" />
  </g>
);

const shr = (
  <g>
    <g transform=" translate(340,60) scale(0.22)">
      <path d="M 85.3,75.2 C 144.4,98.7 188.7,151.3 200.5,215.3 C 136.7,203.5 84.2,159.4 60.7,100.6 L 60.7,398.6 C 84.1,339.6 136.6,295.3 200.4,283.5 C 188.5,347.8 143.6,400.7 84,423.8 L 385.5,423.8 C 325.7,400.8 280.6,347.9 268.7,283.4 C 333.1,295.3 386.1,340.2 409.3,399.9 L 409.3,98.4 C 386.2,158.3 333.2,203.4 268.6,215.3 C 280.2,151.4 324.4,98.8 383.3,75.2 L 85.3,75.2 z " style={{ opacity: "1", fill: "#FFFFFF", stroke: "none" }} />
    </g>
  </g>
);

const shs = (
  <text
    x="405"
    y="160"
    style={{ fill: "#188338", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold", fontSize: 140, textAnchor: "middle" }}
  >
    S
  </text>
);

const sid = (
  <g transform="rotate(-4) translate(410,80)">
    <path d="M 0,0 l 0,15 l 15,-15 l 0,-15 z" fill="red" />
    <path d="M 0,40 l 0,15 l 15,-15 l 0,-15 z" fill="red" />
    <path d="M 0,80 l 0,15 l 15,-15 l 0,-15 z" fill="red" />
    <path d="M 0,120 l 0,15 l 15,-15 l 0,-15 z" fill="red" />
  </g>
);

const sjo = (
  <g transform="matrix(0.12804885,-0.00779433,0.00779433,0.12804885,359.39019,74.586796)">
    <path
      d="M 300.00001,658.5 C 300.00001,658.5 1.5,546.06392 1.5,260.31818 V 1.5 h 597.00001 v 258.81818 c 0,285.74574 -298.5,398.18182 -298.5,398.18182 z"
      style={{ fill: "#ffffff" }}
    />
    <path
      d="m 224,1.5 v 210 H 1.5 v 48.77734 C 1.5,297.59855 6.6004286,331.957 15.457031,363.5 H 224 v 256.01758 c 43.5224,26.64113 76,38.8789 76,38.8789 0,0 32.4776,-12.23777 76,-38.8789 V 363.5 H 584.54297 C 593.39957,331.957 598.5,297.59855 598.5,260.27734 V 211.5 H 376 V 1.5 Z"
      style={{ fill: "#002163", stroke: "#000000", strokeWidth: 3 }}
    />
    <path
      d="M 299.99999,658.39715 C 299.99999,658.39715 1.5,545.97874 1.5,260.2779 V 1.5003973 H 598.49999 V 260.2779 c 0,285.70084 -298.5,398.11925 -298.5,398.11925 z"
      style={{ fill: "none", stroke: "#ffffff", strokeWidth: 3 }}
    />
  </g>
);

const skr = (
  <g transform="matrix(0.107947,0,0,0.143713,57.5009,-49.815)">
    <g>
      <g transform="matrix(1.02034,0,0,1.07582,-67.3323,-90.2879)">
        <path d="M3727.8,704.9L3546.8,682.9L3546.8,1571.4L3729.4,1548.9L3727.8,704.9Z" style={{ fill: "rgb(203,34,22)" }} />
      </g>
      <g transform="matrix(1.02034,0,0,1.23426,-399,-268.881)">
        <path d="M3729.4,726.4L3546.8,710.7L3546.8,1543.8L3729.4,1528L3729.4,726.4Z" style={{ fill: "rgb(203,34,22)" }} />
      </g>
    </g>
  </g>
);

const sls = (
  <g>
    <path d="M 392.05,15.69 299.27,122.42 406,215.2" style={{ fill: "none", stroke: "#00aa00", strokeWidth: "20" }} />
    <path d="M 441.93,12.2 349.15,118.93 455.88,211.72" style={{ fill: "none", stroke: "#00aa00", strokeWidth: "20" }} />
  </g>
);

const smm = (
  <g transform="matrix(0.982733,-0,-0,0.982733,-90.5148,13.705)">
    <g>
      <path d="M397.82 186.64c58.84,3.32 121.33,3.91 157.16,3.91 3.05,0 6.1,-3.05 6.1,-6.1l-11.19 -170.89c0,-3.05 -3.05,-6.1 -6.1,-6.1l-151.77 10.09c1.49,35.34 8.35,74.38 30.97,79.41 8.21,3.23 51.24,-11.58 11.78,-31.81 39.54,-9.8 68.52,40.38 0,77.17 -21.97,9.33 -32.29,26.37 -36.95,44.34z" style={{ fill: "#E3BA12" }} />
      <path d="M198.95 62.37c0,1.02 1.02,2.04 2.03,2.04 32.55,12.21 64.08,73.24 71.21,105.79 18.27,6.09 48.24,10.38 82.57,13.39 6.69,-25.21 15.72,-52.51 25.81,-64.85 -13.79,-9.73 -23.39,-50.16 -27.45,-98.62l-146.03 9.71c-1.02,0 -2.03,1.02 -2.03,2.03l-6.1 30.52z" style={{ fill: "#002469" }} />
      <path d="M354.76 183.59c13.81,1.21 28.31,2.22 43.05,3.05 4.67,-17.97 14.99,-35.01 36.95,-44.34 68.52,-36.79 39.54,-86.97 0,-77.17 39.46,20.23 -3.57,35.04 -11.78,31.81 -22.62,-5.03 -29.49,-44.07 -30.97,-79.41l-38.89 2.59c4.07,48.46 13.67,88.89 27.45,98.62 -10.1,12.34 -19.12,39.64 -25.81,64.85z" style={{ fill: "white" }} />
    </g>
  </g>
);

const sne = (
  <g transform="matrix(0.99756405,-0.06975647,0.06975647,0.99756405,397.77684,-2.7542188)">
    <path
      d="m -30.534,26.522 -0.521,174.724 58.477,4.757 0.136,-178.76 -58.092,-0.721 z"
      style={{ fill: "#2e3192" }}
    />
  </g>
);

const som = (
  <g transform="rotate(-4) translate(400,20)">
    <path
      d="M 5,00 l 0,300 "
      style={{ stroke: "#000000", strokeWidth: 20, fill: "none" }}
    />
    <path
      d="M -30,00 l 0,300 "
      style={{ stroke: "#000000", strokeWidth: 20, fill: "none" }}
    />
  </g>
);

const sou = (
  <g>
    <path transform="matrix(0.98585,0,0,1,-7.76438,0)" d="M 392.05,15.69 299.27,122.42 406,215.2" style={{ fill: "none", stroke: "#800000", strokeWidth: "16.44628525", strokeMiterlimit: "4", strokeDasharray: "none" }} />
    <path d="M 392.05,15.69 299.27,122.42 406,215.2" transform="matrix(0.98585,0,0,1,29.23613,0)" style={{ fill: "none", stroke: "#800000", strokeWidth: "16.44628525", strokeMiterlimit: "4", strokeDasharray: "none" }} />
    <path transform="matrix(0.98585,0,0,1,69.32001,0)" d="M 392.05,15.69 299.27,122.42 406,215.2" style={{ fill: "none", stroke: "#800000", strokeWidth: "16.44628525", strokeMiterlimit: "4", strokeDasharray: "none" }} />
  </g>
);

const spc = (
  <g transform="rotate(-4) translate(400,20)">
    <path
      d="M -170,10 l 320,300 "
      style={{ stroke: "#006600", strokeWidth: 60, fill: "none" }}
    />
    <path
      d="M -170,10 l 320,300 "
      style={{ stroke: "#FFCC00", strokeWidth: 20, fill: "none" }}
    />
  </g>
);

const son = (
  <g transform="rotate(-4) translate(380,20)">
    <path
      d="M 0,0 l 0,100 l 40,40 l 0,100 M 40,0 l 0,100 l -40,40 l 0,100"
      style={{ stroke: "blue", strokeWidth: 15, fill: "none" }}
    />
  </g>
);

const sps = (
  <g style={{ clipRule: "nonzero" }}>
    <g transform="rotate(-4) translate(400,20)">
      <path d="M 0,0 l 0,300 " style={{ stroke: "#432323", strokeWidth: "30", fill: "none" }} />
    </g>
  </g>
);

const srg = (
  <g>
    <linearGradient id="gradient_to_transparent" x1="0%" x2="100%">
      <stop offset="0" stopColor="#ffcc00" stopOpacity="0" />
      <stop offset="0.5" stopColor="#ffcc00" stopOpacity="1" />
      <stop offset="1" stopColor="#ffcc00" stopOpacity="1" />
    </linearGradient>
    <g transform="rotate(-3) scale(0.71 0.81) translate(140,50)">
      <rect
        fill="url(#gradient_to_transparent)"
        width="50%"
        height="100%"
        x="50%"
      />
    </g>
  </g>
);

const stc = (
  <g transform="matrix(0.107947,0,0,0.143713,57.5009,-49.815)">
    <g>
      <g transform="matrix(1,0,0,1,47.7287,42.3595)">
        <g transform="matrix(1.01658,0,0,1,-45.9611,-24.492)">
          <path d="M2758.1,1019.4C2804.4,1019.4 2842.1,1057.5 2842.1,1104.5C2842.1,1151.4 2804.4,1189.6 2758.1,1189.6C2711.8,1189.6 2674.1,1151.4 2674.1,1104.5C2674.1,1057.5 2711.8,1019.4 2758.1,1019.4ZM2758.1,1074C2774.8,1074 2788.3,1087.6 2788.3,1104.5C2788.3,1121.3 2774.8,1135 2758.1,1135C2741.5,1135 2728,1121.3 2728,1104.5C2728,1087.6 2741.5,1074 2758.1,1074Z" style={{ fill: "rgb(38,126,196)" }} />
        </g>
        <g transform="matrix(-1,0.00054,-0.00054,-1,6372.85,2198.65)">
          <path d="M3149.5,786.1C3150.8,785 3151.2,783.2 3150.6,781.6C3150,780 3148.4,779 3146.7,779.1C3007.3,787 2896.1,936.9 2896.1,1120.3C2896.1,1303.8 3007.3,1453.7 3146.7,1461.6C3148.4,1461.7 3149.9,1460.7 3150.6,1459.1C3151.2,1457.5 3150.8,1455.7 3149.5,1454.6C3081.2,1394.1 3027.2,1265.4 3027.2,1120.3C3027.2,975.3 3081.2,846.6 3149.5,786.1Z" style={{ fill: "rgb(38,126,196)" }} />
        </g>
        <g transform="matrix(1,0,0,1.3537,8.4068,-396.977)">
          <rect x="2803.98" y="1060.75" width="545.532" height="61.612" style={{ fill: "rgb(38,126,196)" }} />
        </g>
        <g transform="matrix(1.01123,0,0,0.99915,-41.5397,10.035)">
          <path d="M2904.7,980.4C2904.7,978.2 2902.9,976.4 2900.7,976.4C2888.8,976.4 2853.2,976.4 2841.7,976.4C2840.7,976.4 2839.7,976.8 2839,977.5C2838.3,978.2 2837.9,979.2 2837.9,980.1C2837.9,1004.2 2837.9,1136.3 2837.9,1161.1C2837.9,1163.3 2839.7,1165.1 2841.9,1165.1C2853.7,1165.1 2888.8,1165.1 2900.7,1165.1C2902.9,1165.1 2904.7,1163.3 2904.7,1161.1L2904.7,980.4Z" style={{ fill: "rgb(38,126,196)" }} />
        </g>
        <g transform="matrix(0.00006,1.0863,-1,0.00005,4601.94,-2757.82)">
          <path d="M3534.7,1054C3535.4,1052.9 3536.5,1052.3 3537.7,1052.3C3539,1052.4 3540.1,1053.1 3540.8,1054.2C3553.8,1076.6 3605.3,1167.8 3595.4,1187.8C3584,1210.6 3480.3,1205.2 3469.8,1185.9C3460.6,1168.9 3520.1,1076.3 3534.7,1054Z" style={{ fill: "rgb(38,126,196)" }} />
        </g>
      </g>
      <g transform="matrix(1,0,0,0.97042,0,41.0621)">
        <path d="M595,857.2L440,947.8L440,1304L595,1388.2L595,857.2Z" style={{ fill: "rgb(38,126,196)" }} />
      </g>
      <g transform="matrix(0.5794,-0.58782,0.85083,0.83865,157.305,1073.53)">
        <path d="M1920,730.7L1508.7,498.4L1508.7,1786.5L1920,2040.1L1920,730.7Z" style={{ fill: "rgb(38,126,196)" }} />
      </g>
    </g>
  </g>
);

const stp = (
  <path d="M 438,0 l 16,250" style={{ strokeWidth: 24, stroke: "#000080" }} />
);

const sud = (
  <>
    <defs>
      <clipPath id="sud-e">
        <path d="M443.25 14h13.88L471 205h-17.08L357 111Z" />
      </clipPath>
    </defs>
    <g>
      <path d="M0 0h500v230H0Z" style={{ fill: "#002147" }} />
      <g clipPath="url(#sud-e)">
        <path d="M0 0h500v230H0Z" style={{ fill: "#f2f2f2" }} />
      </g>
    </g>
  </>
);

const sui = (
  <g transform="scale(0.6) rotate(-4) translate(440,80)">
    <rect fill="#fff" height="60" width="200" x="50" y="120" />
    <rect fill="#fff" height="200" width="60" x="120" y="50" />
  </g>
);

const swa = (
  <g>
    <rect transform="matrix(0.99257,-0.12166,0.06455,0.99791,0,0)" y="67.577469" x="418.81668" height="197.52837" width="32.114147" style={{ fill: "#008000", fillOpacity: "1", stroke: "none" }} />
    <path transform="matrix(0.98585,0,0,1,1.48575,0)" d="M 392.05,15.69 299.27,122.42 406,215.2" style={{ fill: "none", stroke: "#008000", strokeWidth: "30", strokeMiterlimit: "4", strokeDasharray: "none" }} />
  </g>
);

const swp = (
  <g transform="rotate(-4) translate(415,20)">
    <path d="M 5,0 l 0,300" style={{ stroke: "#f2ba00", strokeWidth: 18, fill: "none" }} />
    <path d="M -35,0 l 0,300" style={{ stroke: "#f2ba00", strokeWidth: 18, fill: "none" }} />
  </g>
);

const syd = (
  <>
    <defs>
      <path id="syd-spoonBackPath" d="M47.8 281c0 0-3.7-33.9 0.3-35.8 3.9-2 5.3-26.9 5.3-26.9C188.5 188.2 322.8 173.5 460.5 162.2l178.3-11.8c0 0 9.2-0.7 12.5 1.3 3.3 2 6.6 7.2 7.2 10.5 0.7 3.3 44.2 282.2 44.2 282.2 0 0 0.5 5.1-2.7 9.3-3.7 4.8-4.6 3.9-4.6 3.9L173.3 445.6c-3.1 0.6-10.6-4.4-13.2-9.9C135.7 361.8 69.2 294.2 47.9 280.9" />
    </defs>
    <g transform="rotate(5 50 250)">
      <use xlinkHref="#syd-spoonBackPath" style={{ stroke: "lightgray", fill: "none" }} />
    </g>
  </>
);

const syr = (
  <g transform="matrix(0.107947,0,0,0.143713,57.5009,-49.815)">
    <g transform="matrix(1.05743,0,0,1.05743,-52.2638,-64.4561)">
      <g transform="matrix(0.97177,0,0,0.95651,213.576,35.4603)">
        <path d="M2517.5,642L3279.1,1136.3L2517.5,1630.6L1756,1136.3L2517.5,642Z" style={{ fill: "rgb(38,126,196)" }} />
      </g>
      <g transform="matrix(0.74082,0,0,0.72885,795.01,294.155)">
        <path d="M2517.5,642L3279.1,1136.3L2517.5,1630.6L1756,1136.3L2517.5,642Z" style={{ fill: "white" }} />
      </g>
    </g>
  </g>
);

const syu = (
  <g style={{ clipRule: "nonzero" }}>
    <g transform="rotate(-4)  translate(320,140) ">
      <path d="M 150,-150 L 0,0 L 150,150 Z" style={{ fill: "#000D1E" }} />
    </g>
  </g>
);

const tal = (
  <g style={{ clipRule: "nonzero" }}>
    <rect width="100%" height="50%" y="50%" transform="rotate(-3) scale(0.71 0.81) translate(140,47)" style={{ fill: "#FF9900" }} />
  </g>
);

const tcd = (
  <g style={{ clipRule: "nonzero" }}>
    <g transform="rotate(-1)  translate(280,120) ">
      <path d="M 100,-100 L 0,0 L 100,100" style={{ stroke: "black", strokeWidth: "17", fill: "none" }} />
      <path d="M 140,-100 L 40,0 L 140,100" style={{ stroke: "black", strokeWidth: "17", fill: "none" }} />
      <path d="M 180,-100 L 80,0 L 180,100" style={{ stroke: "black", strokeWidth: "17", fill: "none" }} />
    </g>
  </g>
);

const tee = (
  <g style={{ clipRule: "nonzero" }}>
    <g style={{ clipRule: "nonzero" }}>
      <path d="M 395,0 l 80,250" style={{ strokeWidth: "100", stroke: "#990033" }} />
    </g>
  </g>
);

const tfd = (
  <path d="M 390,0 l 16,250" style={{ strokeWidth: 36, stroke: "#0ed145" }} />
);

const tif = (
  <g style={{ clipRule: "nonzero" }}>
    <g transform="rotate(-4) translate(400,20)">
      <path d="M 5,0 l 0,300 " style={{ stroke: "#B40309", strokeWidth: "20", fill: "none" }} />
      <path d="M -30,0 l 0,300 " style={{ stroke: "#B40309", strokeWidth: "20", fill: "none" }} />
    </g>
  </g>
);

const tle = (
  <g transform="rotate(-7.83842,-1549.1137,-1033.9511)" style={{ fill: "#ffffff", fillOpacity: "1" }}>
    <path d="m 91.77,359.84 c -1.63,-2.11 -1.57,-4.29 -2.2,-6.38 -0.35,-0.76 -1.2,-0.83 -3.09,-0.25 -3.91,1.21 -7.59,1.78 -11.46,2.14 -4.48,0.42 -9.13,1.13 -13.49,0.02 -3.13,-0.8 -6.32,-2.26 -8.49,-4.64 -1.09,-1.19 -1.95,-2.82 -1.93,-4.44 0.02,-1.61 0.49,-1.63 3.43,-3.4 3.24,-1.94 3.27,-1.98 3.33,-4.24 0.02,-0.93 -0.05,-1.94 0.51,-2.64 1.79,-2.21 5.02,-3.13 7.86,-3.35 1.53,-0.11 4.99,3.17 4.82,4.18 -0.16,1 -4.91,2.53 -6.99,3.57 -0.86,0.45 -1.27,0.95 -1.27,1.55 1,1.32 2.33,2.68 2.78,4.03 -1.81,0.37 -3.43,0.56 -5.33,1.1 -3.4,2.33 0.96,2.67 2.84,3.01 1.1,0.11 2.39,-0.21 3.43,-0.28 1.88,-0.13 4.54,-0.56 7.15,-1.17 2.37,-0.61 4.23,-1.74 5.96,-3.06 0.78,-0.6 2.37,-2.15 3.52,-3.46 1.15,-1.31 2.54,-2.85 3.08,-3.42 0.54,-0.57 1.13,-1.26 1.31,-1.54 0.18,-0.27 0.81,-1.17 1.41,-1.98 2.3,-3.17 3.53,-6.35 3.89,-10.06 0.18,-1.88 0.3,-2.39 0.55,-2.45 0.37,-0.09 2.43,0.89 3.44,1.64 1.06,0.78 2.37,1.99 3.46,3.19 0.92,1.01 0.97,1.14 0.97,2.19 0,1.88 -0.54,2.77 -3.84,6.32 -3.2,3.45 -4.08,5.31 -4.01,8.53 0.02,0.91 -0.03,4.14 -0.1,7.18 -0.08,3.17 -0.06,6.18 0.05,7.05 0.1,0.83 0.15,1.62 0.1,1.76 -0.18,0.49 -0.78,0.24 -1.7,-0.7 z" style={{ fill: "#ffffff", fillOpacity: "1", stroke: "none", strokeWidth: "0.2013402", strokeOpacity: "1" }} />
    <path d="m 148.64,395.71 c -0.68,-0.3 -1.28,-2.73 -1.85,-7.43 -0.23,-1.88 -0.5,-4.15 -0.61,-5.03 -0.11,-0.89 -0.66,-3.06 -1.22,-4.83 -2.09,-6.58 -2.11,-7.94 -0.23,-14.67 0.73,-2.41 1.56,-5.46 1.18,-5.92 -0.55,-0.67 -1.49,-0.25 -3.08,0.49 -3.54,1.64 -3.38,1.6 -9.93,2.69 -2.05,0.34 -5.36,0.9 -7.35,1.23 -4.56,0.77 -6.2,0.49 -8.96,-0.67 -3.33,-1.4 -7.7,-3.02 -8.13,-7.14 -0.27,-3.05 1.55,-5.59 5.43,-7.58 1.79,-1.08 4.15,-1.67 5.77,-2.79 0.47,-0.38 0.59,-0.68 0.75,-1.96 0.11,-1.49 0.22,-2.98 0.62,-4.41 1.18,-4.24 8.26,-5.89 12.45,-6.06 0.96,0 2.19,0.83 2.56,1.74 0.28,0.66 0.26,0.73 -0.31,1.54 -0.33,0.47 -1.71,1.94 -3.08,3.27 -2.51,2.45 -3.58,3.96 -3.86,5.46 -0.17,0.92 0.47,1.75 2.49,3.23 2.45,1.8 2.92,2.24 2.66,2.5 -0.12,0.12 -1.58,0.38 -3.24,0.58 -3.41,0.42 -6.86,1.27 -9.42,2.34 -1.64,0.69 -1.78,0.8 -2.82,2.2 -1.14,1.55 -1.64,3.03 -1.26,3.74 0.42,0.78 2.76,0.98 5.37,0.46 1.09,-0.22 2.33,-0.7 4.17,-1.62 2.14,-1.07 3.15,-1.44 5.54,-2.02 3.5,-0.78 6.46,-1.66 9.81,-2.71 2.65,-0.83 4.38,-0.65 7.2,0.77 1.81,0.91 4.17,3.24 5.14,5.09 0.6,1.15 0.7,1.53 0.77,3.12 0.09,2.08 -0.27,3.93 -1.08,5.58 -0.5,1.01 -2.06,8.18 -2.41,11.03 l -0.13,1.11 1.46,2 c 2.07,2.84 2.61,4.14 2.82,6.72 0.16,1.99 0.14,2.15 -0.42,3.82 -0.7,2.07 -1.39,3 -2.69,3.65 -0.95,0.48 -3.47,0.78 -4.1,0.5 z" style={{ fill: "#ffffff", fillOpacity: "1", stroke: "none", strokeWidth: "0.2013402", strokeOpacity: "1" }} />
    <path d="m 153.34,342 c -0.79,-0.74 -0.69,-1.51 -0.42,-2.21 0.82,-2.07 1.83,-3.91 2.83,-5.77 0.44,0 1.99,1.06 2.91,1.99 1.02,1.03 1.15,1.28 1.56,2.87 0.74,2.86 0.52,6.24 -0.41,6.2 -2.26,-0.63 -4.63,-1.84 -6.47,-3.08 z" style={{ fill: "#ffffff", fillOpacity: "1", stroke: "none", strokeWidth: "0.2013402", strokeOpacity: "1" }} />
    <path d="m 174.06,347.63 c -0.34,-0.15 -1.7,-0.95 -3.03,-1.78 -1.33,-0.83 -2.89,-1.75 -3.47,-2.04 -1.03,-0.52 -1.2,-0.77 -0.87,-1.29 0.29,-0.46 4.55,1.89 7.53,4.14 1.44,1.09 1.35,1.63 -0.16,0.97 z" style={{ fill: "#ffffff", fillOpacity: "1", stroke: "none", strokeWidth: "0.2013402", strokeOpacity: "1" }} />
    <path d="m 167.68,369.06 c -2.28,-0.48 -3.73,-1.16 -4.98,-2.33 -1.87,-1.75 -2.68,-4.48 -1.91,-6.48 0.37,-0.98 1.78,-3.16 2.65,-4.1 0.45,-0.48 0.56,-0.51 1.33,-0.35 1.15,0.25 2.68,0.75 3.69,1.2 0.84,0.38 2.08,1.71 2.08,2.24 0,0.16 -0.21,1.01 -0.48,1.88 -0.26,0.88 -0.54,2.08 -0.63,2.68 -0.08,0.59 -0.37,1.4 -0.63,1.79 -0.31,0.45 -0.48,1 -0.48,1.51 0,0.68 0.12,0.91 0.86,1.58 0.97,0.88 0.92,0.89 -1.5,0.38 z" style={{ fill: "#ffffff", fillOpacity: "1", stroke: "none", strokeWidth: "0.2013402", strokeOpacity: "1" }} />
    <path d="m 211.36,372.2 c -0.97,-0.23 -1.55,-0.36 -2.3,-0.59 -1.77,-0.54 -3.4,-1.26 -5.24,-1.88 -4.47,-1.5 -5.21,-1.53 -8.01,-0.29 -2.54,1.12 -3.92,1.25 -6.85,0.64 -3.96,-0.82 -8.96,-2.67 -11.28,-4.18 -2.04,-1.32 -2.4,-2.08 -2.32,-3.47 0.09,-1.46 0.49,-2.18 2.89,-3.32 2.02,-0.98 4.77,-3.6 6.66,-3.03 1.8,0.61 4.12,-0.33 4.93,-2 1.14,-2.36 1.3,-5.31 0.43,-7.97 -0.67,-2.05 -2.05,-9.44 -2.17,-11.6 -0.05,-0.85 0.03,-1.73 0.2,-2.21 0.24,-0.72 0.44,-0.89 1.81,-1.58 l 1.54,-0.78 1.48,1.02 c 1.79,1.24 2.8,2.25 3.42,3.46 0.38,0.73 0.48,1.26 0.5,2.72 0.06,3.19 0.47,5.53 1.4,8 0.78,2.07 0.79,2.52 0.18,5.51 -0.44,2.17 -0.58,3.37 -0.59,5.34 -0.01,2.53 -0.01,2.55 0.61,3.42 0.89,1.25 1.39,1.18 3.87,-0.6 2.95,-2.11 4.14,-2.68 5.6,-2.68 2.17,-0.01 3.35,0.38 6.31,2.08 1.57,0.76 3.01,1.06 4.64,1.24 1.67,0.16 3.75,0.71 4.97,1.24 1.51,0.65 1.95,1.52 1.59,3.12 -1.33,3.56 -1.55,3.67 -3.33,5.57 -1.75,1.11 -3.86,2.69 -6.1,3.16 -1.68,0.14 -3.3,-0.03 -4.83,-0.35 z m 3.05,-3.85 c 1.19,-0.48 2.41,-1.13 3.2,-2.15 0.71,-0.92 1.65,-2.49 1.13,-3.29 -0.18,-0.28 -0.6,-0.7 -0.93,-0.93 -0.74,-0.52 -1.49,-0.45 -4.19,0.43 -3.32,1.08 -4.78,2.3 -4.98,4.12 -0.07,0.68 0.01,0.93 0.54,1.56 0.43,0.52 0.78,0.71 1.27,0.81 1.3,0.28 2.9,-0.15 3.95,-0.55 z m -27.01,-1.83 c 0.77,-0.28 0.64,-1.64 0.58,-2.37 -0.07,-0.79 -0.12,-2.01 -0.11,-2.71 0.03,-2.5 -0.91,-2.88 -3,-1.21 -1.46,1.16 -1.93,2.02 -1.72,3.16 0.94,1.91 2.6,3.75 4.26,3.14 z" style={{ fill: "#ffffff", fillOpacity: "1", stroke: "none", strokeWidth: "0.2013402", strokeOpacity: "1" }} />
  </g>
);

const tor = (
  <path d="m 105,75 c 0,0 264.16,32.91 272.21,33.98 1.45,0.19 2.1,0.97 3,1.92 0.9,0.95 79.04,88.1 79.04,88.1 L 461,195 c 0,0 -10.81,-163.21 -11,-168 -0.19,-4.79 -3.2,-6.22 -6,-6 -2.8,0.22 -329.12,21.86 -331,22 -1.88,0.14 -1.76,1.23 -2,2 -0.24,0.77 -6,30 -6,30 z" style={{ fill: "#d61a1a", fillOpacity: "1", stroke: "none", strokeWidth: "1px", strokeLinecap: "butt", strokeLinejoin: "miter", strokeOpacity: "1" }} />
);

const trc = (
  <g transform="rotate(-4) translate(360,50)">
    <path d="M 0,0 l 0,24 l 40,0 l 0,-24 z" fill="#E70401" />
    <path d="M 0,24 l 0,12 l 40,0 l 0,-12 z" fill="white" />
    <path d="M 0,56 l 0,24 l 40,0 l 0,-24 z" fill="#E70401" />
    <path d="M 0,80 l 0,12 l 40,0 l 0,-12 z" fill="white" />
    <path d="M 0,116 l 0,24 l 40,0 l 0,-24 z" fill="#E70401" />
    <path d="M 0,140 l 0,12 l 40,0 l 0,-12 z" fill="white" />
  </g>
);

const tre = (
  <g style={{ clipRule: "nonzero" }}>
    <g transform="rotate(-3) translate(0, 130)">
      <rect x="0" y="0" width="100%" height="50%" style={{ fill: "#0066cc" }} />
    </g>
    <g transform="rotate(-3) translate(2, 132)">
      <path d="M 480,-120 L 350,0 L 480,120 Z" style={{ fill: "#ffffff" }} />
    </g>
  </g>
);

const tro = (
  <g transform="rotate(-4) translate(400,20)">
    <path
      d="M 0,0 l 0,300 "
      style={{ stroke: "#FFFFFF", strokeWidth: 30, fill: "none" }}
    />
  </g>
);

const tss = <path d="M 345,230 L 280,0 L 500,0 L 500,230 Z" fill="#F5D60C" />;

const ttw = (
  <g transform="matrix(0.107947,0,0,0.143713,57.5009,-49.815)">
    <g transform="matrix(1.14591,0,0,1,-548.556,0)">
      <g transform="matrix(0.34213,-0.93965,0.93965,0.34213,514.408,1643.78)">
        <path d="M1233.5,558.8L1055.9,348.8L1056.4,2792.3L1165.8,3004.5L1233.5,2981.4L1233.5,558.8Z" style={{ fill: "white" }} />
      </g>
      <g transform="matrix(-0.34198,-0.93971,0.93971,-0.34198,1297.58,2752.43)">
        <path d="M1233.5,335.3L1056.3,544.1L1056.4,2979.8L1124.8,3004.5L1233.5,2792.7L1233.5,335.3Z" style={{ fill: "white" }} />
      </g>
    </g>
  </g>
);

const tvc = (
  <g style={{ clipRule: "nonzero" }}>
    <g transform="rotate(-4) translate(245,35) scale(0.08)">
      <path d="M1893 1517l239 -286 199 159 -20 52 73 -7 -228 -265 -274 189 -41 -15 181 -379 317 -271 -29 -16 -323 226c-57,108 -115,216 -172,323 0,-94 -74,-187 -239,-298 -66,-131 262,-113 291,-142 28,-46 -211,-115 -369,-177l38 -68 -104 -5c-57,45 -114,90 -170,135 -56,225 -12,384 88,506l-81 335 -72 -335 -183 -200 70 216 -13 66 50 54 -38 68 115 222 82 125 -4 29 -284 -109 -19 50 298 115 7 2 7 -1 426 -80 336 118 9 3 9 -3 311 -104 -17 -51 -303 101 -334 -117 -1 0 65 -194 107 29zm-899 310l291 112 425 -80 8 -1 6 2 335 117 303 -101 17 50 -312 105 -9 3 -8 -3 -337 -118 -425 80 -8 1 -7 -3 -298 -114 19 -50z" />
    </g>
  </g>
);

const twk = (
  <>
    <clipPath id="vert30stripe">
      <rect
        transform="rotate(-4) scale(0.63, 0.81) translate(210, 60)"
        x="33%"
        y="0%"
        width="34%"
        height="100%"
        style={{ fill: "#003399" }}
      />
    </clipPath>
    <g clipRule="nonzero" clipPath="url(#vert30stripe)">
      <rect fill="#E50087" x="0" y="0" width="100%" height="100%" />
    </g>
  </>
);

const tym = (
  <g transform="rotate(-4) translate(415,20)">
    <path d="M 5,0 l 0,300" style={{ stroke: "#1a0076", strokeWidth: 18, fill: "none" }} />
    <path d="M -35,0 l 0,300" style={{ stroke: "#1a0076", strokeWidth: 18, fill: "none" }} />
  </g>
);

const tyn = (
  <g style={{ clipRule: "nonzero" }}>
    <g transform="rotate(-4) translate(400,20)">
      <path d="M 5,0 l 0,300 " style={{ stroke: "#FFFFFF", strokeWidth: "20", fill: "none" }} />
      <path d="M -30,0 l 0,300 " style={{ stroke: "#FFFFFF", strokeWidth: "20", fill: "none" }} />
    </g>
  </g>
);

const ubc = (
  <>
    <defs>
      <clipPath id="ubc-vert30stripe">
        <g transform="rotate(-4) scale(0.63 0.81) translate(210,60)">
          <rect x="33%" y="0%" width="34%" height="100%" style={{ fill: "#003399" }} />
        </g>
      </clipPath>
    </defs>
    <g clipPath="url(#ubc-vert30stripe)" style={{ clipRule: "nonzero" }}>
      <use xlinkHref="#spoonPath" style={{ stroke: "Black", strokeWidth: "1", fill: "#f0f0f0" }} />
    </g>
  </>
);

const ucd = (
  <g style={{ clipRule: "nonzero" }}>
    <g transform="rotate(-4)  translate(375,143) ">
      <path d="M 60,-100 L 0,0 L 60,100" style={{ stroke: "white", strokeWidth: "25", fill: "none" }} />
    </g>
  </g>
);

const ucl = (
  <path
    d="m 292.04225,16.864336 175.5706,-4.091606 0,199.14883 -153.96948,0 z"
    style={{ fill: "#aaeeff", fillOpacity: 1, stroke: "none" }}
  />
);

const ucs = (
  <g transform="matrix(0.982733,-0,-0,0.982733,-90.5148,13.705)">
    <g>
      <path d="M198.95 62.37c0,1.02 1.02,2.04 2.03,2.04 32.55,12.21 64.08,73.24 71.21,105.79 54.93,18.31 215.65,20.34 282.79,20.34 3.05,0 6.1,-3.05 6.1,-6.1l-11.19 -170.89c0,-3.05 -3.05,-6.1 -6.1,-6.1l-336.7 22.38c-1.02,0 -2.03,1.02 -2.03,2.03l-6.1 30.52z" style={{ fill: "#F4B200" }} />
      <path d="M560.21 187.33c0.55,-0.89 0.88,-1.89 0.88,-2.89l-11.19 -170.89c0,-1.5 -0.74,-3 -1.85,-4.13l-90.49 89.52 102.65 88.4z" style={{ fill: "#023151" }} />
    </g>
  </g>
);

const ukz = (
  <g style={{ clipRule: "nonzero" }}>
    <g transform="rotate(-3)  translate(0,130) ">
      <rect x="0" y="0" width="100%" height="50%" style={{ fill: "#0E4D42" }} />
      <path d="M 465,-100 L 350,0 L 455,100 Z" style={{ fill: "#245689" }} />
    </g>
  </g>
);

const umi = (
  <g style={{ clipRule: "nonzero" }}>
    <path d="M 370.26,199.65 L 418.82,108.6 L 359.64,22.87 L 462.06,13 L 471.17,210.27 L 370.26,199.65 z " style={{ fill: "#f0f000", fillRule: "evenodd", stroke: "#f0f000", strokeWidth: "1px", strokeLinecap: "butt", strokeLinejoin: "miter", strokeOpacity: "0", fillOpacity: "1" }} />
  </g>
);

const una = (
  <g style={{ clipRule: "nonzero" }}>
    <path d="M111.34,43.16l349.66,130.69l-7.39,-158.32l-342.28,27.63Z" style={{ fill: "#f5d610" }} />
  </g>
);

const upn = (
  <>
    <defs>
      <linearGradient id="upn-_lgradient_1" x1="-2.220446049250313e-14%" y1="-2.220446049250313e-14%" x2="6.1232339957367724e-15%" y2="100%">
        <stop offset="10%" style={{ stopOpacity: "1", stopColor: "rgb(0,0,179)" }} />
        <stop offset="51.36363636363637%" style={{ stopOpacity: "1", stopColor: "rgb(84,84,242)" }} />
        <stop offset="57.27272727272727%" style={{ stopOpacity: "1", stopColor: "rgb(2,2,126)" }} />
        <stop offset="75.45454545454545%" style={{ stopOpacity: "1", stopColor: "rgb(1,1,120)" }} />
        <stop offset="100%" style={{ stopOpacity: "1", stopColor: "rgb(0,0,179)" }} />
      </linearGradient>
      <radialGradient id="upn-_rgradient_0" fx="14.021673340899088%" fy="49.55863279797858%" cx="50%" cy="50%" r="50%" gradientTransform="matrix(1.38983 -0.04255 -0.00842 3.46872 -0.1907 -1.21308)">
        <stop offset="40.909090909090914%" style={{ stopColor: "rgb(0,0,179)" }} />
        <stop offset="84.0909090909091%" style={{ stopColor: "rgb(0,0,179)" }} />
      </radialGradient>
    </defs>
    <path d=" M 100.81 79.86 C 101.2 80.39 101.83 80.79 102.46 80.79 C 123.7 88.76 144.51 117.74 158.28 145.83 C 165.42 160.4 170.69 174.75 173.14 185.83 C 227.67 203.98 386.91 206 453.44 206 C 456.47 206 459.49 202.97 459.49 199.94 L 448.4 30.3 C 448.4 29.45 448.16 28.6 447.74 27.82 C 446.64 25.95 444.56 24.53 442.49 24.53 L 108.65 46.74 C 107.64 46.74 106.63 47.75 106.63 48.76 L 100.58 79.06 C 100.58 79.33 100.66 79.61 100.81 79.86 Z " style={{ fill: "rgb(0,0,179)", strokeWidth: "1", stroke: "rgba(0,0,0,0)", strokeLinejoin: "miter", strokeLinecap: "butt" }} />
    <path d=" M 420.72 204.33 C 433.29 204.45 444.56 204.49 453.97 204.49 C 456.98 204.49 460 201.5 460 198.51 L 448.95 31.01 C 448.95 28.02 445.93 25.03 442.92 25.03 L 411.79 27.08 L 326.92 119.34 L 420.72 204.33 Z " style={{ fill: "rgb(255,0,0)", strokeWidth: "1", stroke: "rgba(0,0,0,0)", strokeLinejoin: "miter", strokeLinecap: "butt" }} />
    <rect x="103.45054220818567" y="61.1104729015207" width="171.17212157026358" height="27.108234739503537" transform="matrix(0.98551,0.1696,-0.14838,0.98917,13.81708,-31.25186)" style={{ fill: "url(#upn-_lgradient_1)", strokeWidth: "1.010825711639524", stroke: "rgb(0,0,0)", strokeOpacity: "0", strokeLinejoin: "miter", strokeLinecap: "butt" }} />
    <rect x="101.33585067832522" y="63.63725790112621" width="173.30224286009306" height="27.108234739503537" transform="matrix(0.98551,0.1696,-0.14838,0.98917,14.17679,-31.04647)" style={{ fill: "url(#upn-_rgradient_0)", strokeWidth: "1.010825711639524", stroke: "rgb(0,0,0)", strokeOpacity: "0", strokeLinejoin: "miter", strokeLinecap: "butt" }} />
    <path d=" M 420.72 204.33 C 433.29 204.45 444.56 204.49 453.97 204.49 C 456.98 204.49 460 201.5 460 198.51 L 448.95 31.01 C 448.95 28.02 445.93 25.03 442.92 25.03 L 411.79 27.08 L 326.92 119.34 L 420.72 204.33 Z " style={{ fill: "rgba(0,0,0,0)", strokeWidth: "0.7257970605987669", stroke: "rgb(0,0,0)", strokeLinejoin: "miter", strokeLinecap: "butt" }} />
  </>
);

const usa = (
  <g transform="rotate(-3) translate(0,130) ">
    <rect style={{ fill: "#002868" }} x="0" y="0" width="100%" height="50%" />
    <path d="M 465,-100 L 350,0 L 455,100 Z" style={{ fill: "white" }} />
  </g>
);

const usc = (
  <g style={{ clipRule: "nonzero" }}>
    <g transform="rotate(-4)  translate(290,143) ">
      <path d="M 100,-100 L 0,0 L 100,100" style={{ stroke: "#B20000", strokeWidth: "20", fill: "none" }} />
      <path d="M 150,-100 L 50,0 L 150,100" style={{ stroke: "#B20000", strokeWidth: "20", fill: "none" }} />
    </g>
  </g>
);

const ust = (
  <g style={{ clipRule: "nonzero" }}>
    <g transform="rotate(-4)  translate(387,76)">
      <path d="M 60,-23 L 0,0 L 60,23" style={{ stroke: "black", strokeWidth: "0", fill: "black" }} />
      <path d="M 60,-23 L 0,0 L 60,23" transform=" translate(0,44)" style={{ strokeWidth: "0", fill: "black" }} />
      <path d="M 60,-23 L 0,0 L 60,23" transform=" translate(0,88)" style={{ strokeWidth: "0", fill: "black" }} />
      <path d="M 60,-23 L 0,0 L 60,23" transform=" translate(0,132)" style={{ strokeWidth: "0", fill: "black" }} />
    </g>
  </g>
);

const uva = (
  <g transform="matrix(0.982733,-0,-0,0.982733,-90.5148,13.705)">
    <g>
      <path d="M198.95 62.37c0,1.02 1.02,2.04 2.03,2.04 32.55,12.21 64.08,73.24 71.21,105.79 54.93,18.31 215.65,20.34 282.79,20.34 3.05,0 6.1,-3.05 6.1,-6.1l-11.19 -170.89c0,-3.05 -3.05,-6.1 -6.1,-6.1l-336.7 22.38c-1.02,0 -2.03,1.02 -2.03,2.03l-6.1 30.52z" style={{ fill: "#E67141" }} />
    </g>
  </g>
);

const uwe = (
  <g style={{ clipRule: "nonzero" }}>
    <g transform="rotate(-3) scale(0.71 0.81) translate(140,50)">
      <rect width="100%" height="33.33%" y="33.33%" style={{ fill: "white" }} />
      <rect width="100%" height="33.33%" y="66.66%" style={{ fill: "black" }} />
    </g>
  </g>
);

const uxo = (
  <path
    d="m 424.42026,89.075166 c -4.09987,10.072123 -9.43267,12.970924 -12.56042,13.259354 -3.12776,0.28843 -9.59816,0.8851 -9.61019,0.96737 -0.012,0.0823 -0.58156,-6.457871 -0.86999,-9.585619 -0.28842,-3.127751 1.61684,-8.926434 10.73873,-14.773437 -4.08387,-3.166333 -7.74153,-2.783318 -10.48148,-1.387772 -2.59335,-4.880959 -4.97276,-7.084454 -9.61588,-8.685959 -4.27528,2.387515 -6.21159,4.988979 -7.8686,10.261889 -2.94896,-0.870939 -6.61498,-0.578587 -10.05093,3.281195 10.03734,4.080218 12.97092,9.432671 13.25934,12.560431 0.28844,3.127751 0.87896,9.531472 0.95884,9.528382 0.0798,-0.004 -6.58227,0.61058 -9.71003,0.89902 -3.12775,0.28842 -8.92642,-1.61684 -14.76059,-10.723428 -3.17917,4.068567 -2.79616,7.726228 -1.40061,10.466178 -0.78165,0.41766 -5.96508,2.37725 -8.64986,9.61255 2.42363,4.27195 5.02509,6.20827 10.298,7.86526 -0.87094,2.94897 -0.5786,6.61498 3.28119,10.05095 4.08022,-10.03735 9.43267,-12.97094 12.56042,-13.25937 3.12776,-0.28843 9.7315,-0.8974 9.65584,-0.97022 -0.0756,-0.0729 0.53028,6.4976 0.81871,9.62536 0.28843,3.12775 -1.61684,8.92642 -10.73873,14.77342 0.1424,0.10996 4.02461,4.08003 10.48148,1.38778 0.41766,0.78165 2.37725,5.96508 9.61257,8.64985 4.27193,-2.42361 6.20825,-5.02508 7.86524,-10.29799 2.94896,0.87094 6.61498,0.57859 10.05093,-3.28119 -10.03733,-4.08022 -12.97091,-9.43267 -13.25934,-12.56044 -0.28843,-3.12775 -0.89125,-9.66482 -0.96573,-9.57677 -0.0745,0.088 6.52924,-0.52095 9.65699,-0.80938 3.12776,-0.28843 8.92643,1.61685 14.77343,10.73874 0.11405,-0.14772 4.0543,-3.99452 1.38778,-10.48148 0.78115,-0.4174 5.99207,-2.39945 8.68596,-9.6159 -2.38752,-4.27526 -4.98898,-6.21158 -10.2619,-7.868581 0.87095,-2.948962 0.59824,-6.64976 -3.28119,-10.050929 z"
    style={{
      fill: "#fdd400",
      fillOpacity: 1,
      fillRule: "evenodd",
      stroke: "#000000",
      strokeWidth: 0,
      strokeLinecap: "butt",
      strokeLinejoin: "miter",
    }}
  />
);

const uyo = (
  <>
    <g
      transform="matrix(0.6894712,0,0,-0.7198232,391.91121,113.98719)"
      style={{ fill: "#fbffff", fillOpacity: 1 }}
    >
      <path
        d="m 0,0 c 0.148,4.621 -0.519,9.009 -1.96,13.143 -1.544,4.097 -3.844,7.893 -6.919,11.346 -1.615,1.814 -3.756,2.384 -6.055,0.991 -1.771,-1.073 -7.01,-2.942 -13.44,-14.151 -0.315,-0.549 -0.275,-1.551 -0.037,-2.216 0.596,-1.666 1.182,-3.281 1.776,-4.916 0.591,-1.636 1.178,-3.251 1.787,-4.912 0.244,-0.663 0.855,-1.458 1.449,-1.678 C -11.28,-6.876 -6.06,-4.953 -4.013,-4.642 -1.355,-4.237 -0.078,-2.428 0,0"
        style={{
          fill: "#fbffff",
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
        }}
      />
    </g>
    <g
      transform="matrix(0.6894712,0,0,-0.7198232,374.43623,87.413834)"
      style={{ fill: "#fbffff", fillOpacity: 1 }}
    >
      <path
        d="m 0,0 c -4.342,1.59 -8.717,2.332 -13.095,2.26 -4.375,-0.18 -8.7,-1.174 -12.943,-3.011 -2.229,-0.965 -3.442,-2.819 -2.84,-5.439 0.464,-2.018 0.595,-7.579 9.222,-17.2 0.423,-0.471 1.387,-0.748 2.093,-0.73 1.768,0.044 3.486,0.093 5.225,0.144 1.739,0.049 3.457,0.1 5.225,0.157 0.706,0.023 1.652,0.355 2.047,0.85 8.058,10.102 7.869,15.661 8.215,17.703 C 3.599,-2.616 2.281,-0.835 0,0"
        style={{
          fill: "#fbffff",
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
        }}
      />
    </g>
    <g
      transform="matrix(0.6894712,0,0,-0.7198232,343.82481,128.09709)"
      style={{ fill: "#fbffff", fillOpacity: 1 }}
    >
      <path
        d="m 0,0 c 2.375,-3.967 5.308,-7.297 8.756,-9.996 3.514,-2.612 7.501,-4.561 11.955,-5.802 2.34,-0.653 4.449,0.025 5.63,2.44 0.909,1.86 4.305,6.266 3.653,19.171 -0.032,0.632 -0.607,1.454 -1.167,1.884 -1.403,1.079 -2.768,2.121 -4.152,3.176 -1.383,1.055 -2.749,2.097 -4.16,3.165 -0.563,0.426 -1.508,0.764 -2.126,0.628 C 5.77,11.883 2.419,7.443 0.866,6.075 -1.152,4.297 -1.247,2.084 0,0"
        style={{
          fill: "#fbffff",
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
        }}
      />
    </g>
    <g
      transform="matrix(0.6894712,0,0,-0.7198232,344.92907,96.215834)"
      style={{ fill: "#fbffff", fillOpacity: 1 }}
    >
      <path
        d="m 0,0 c -2.902,-3.599 -5.014,-7.503 -6.355,-11.671 -1.237,-4.2 -1.688,-8.615 -1.314,-13.223 0.196,-2.421 1.56,-4.166 4.235,-4.44 2.06,-0.21 7.367,-1.876 19.253,3.196 0.582,0.248 1.154,1.072 1.365,1.746 0.527,1.689 1.033,3.331 1.545,4.994 0.513,1.662 1.018,3.304 1.533,4.997 0.205,0.676 0.196,1.679 -0.146,2.211 C 13.145,-1.309 7.821,0.301 6,1.286 3.635,2.565 1.525,1.891 0,0"
        style={{
          fill: "#fbffff",
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
        }}
      />
    </g>
    <g
      transform="matrix(0.6894712,0,0,-0.7198232,373.47869,139.9181)"
      style={{ fill: "#fbffff", fillOpacity: 1 }}
    >
      <path
        d="m 0,0 c 4.441,1.288 8.407,3.279 11.893,5.927 3.42,2.735 6.318,6.096 8.651,10.088 1.226,2.097 1.106,4.309 -0.929,6.065 -1.568,1.352 -4.965,5.757 -17.613,8.407 -0.619,0.13 -1.56,-0.218 -2.119,-0.65 C -1.516,28.754 -2.872,27.698 -4.243,26.628 -5.616,25.559 -6.971,24.503 -8.362,23.409 -8.917,22.973 -9.484,22.145 -9.509,21.513 -10.026,8.601 -6.584,4.232 -5.655,2.382 -4.449,-0.021 -2.333,-0.677 0,0"
        style={{
          fill: "#fbffff",
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
        }}
      />
    </g>
    <g
      transform="matrix(0.6894712,0,0,-0.7198232,383.2447,80.529154)"
      style={{ fill: "#fbffff", fillOpacity: 1 }}
    >
      <path
        d="m 0,0 c 3.444,-2.371 6.567,-3.639 10.002,-5.126 6.043,-2.615 8.545,-7.741 9.934,-13.836 -0.558,0.653 -1.166,1.27 -1.667,1.964 -2.369,3.284 -5.502,5.447 -9.303,6.838 -5.755,2.106 -11.069,5.004 -15.271,9.601 -2.382,2.605 -4.161,5.534 -4.546,8.789 C -7.425,5.358 -3.763,2.591 0,0 m -20.929,9.866 c -2.801,-4.946 -2.773,-10.152 -1.646,-15.458 11.442,-2.109 11.442,-2.109 15.209,-7.505 2.353,1.023 4.736,2.059 7.435,3.232 -0.414,-2.886 -0.78,-5.444 -1.148,-8.014 9.099,-0.295 10.466,-8.06 13.869,-13.794 4.947,0.914 9.749,1.956 13.469,5.684 3.741,3.748 4.362,7.603 1.566,12.086 -1.259,2.019 -2.748,3.931 -4.353,5.691 C 17.018,-1.137 9.6,4.789 1.16,9.29 c -3.904,2.083 -8.065,3.846 -12.306,5.085 -4.298,1.256 -7.58,-0.619 -9.783,-4.509"
        style={{
          fill: "#fbffff",
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
        }}
      />
    </g>
    <g
      transform="matrix(0.6894712,0,0,-0.7198232,341.28776,85.512854)"
      style={{ fill: "#fbffff", fillOpacity: 1 }}
    >
      <path
        d="m 0,0 c 3.332,2.527 5.515,5.094 8.004,7.89 4.379,4.918 10.031,5.686 16.253,5.094 C 23.462,12.658 22.686,12.275 21.87,12.017 18.009,10.797 14.972,8.5 12.46,5.328 8.655,0.523 4.237,-3.614 -1.446,-6.163 -4.667,-7.607 -8.006,-8.377 -11.218,-7.722 -7.416,-5.37 -3.64,-2.761 0,0 m -15.931,-16.779 c 3.817,-4.211 8.769,-5.817 14.161,-6.411 5.591,10.204 5.591,10.204 11.896,12.088 -0.233,2.556 -0.469,5.143 -0.737,8.074 2.61,-1.298 4.925,-2.448 7.249,-3.604 3.134,8.549 10.936,7.411 17.449,8.844 0.682,4.984 1.199,9.871 -1.174,14.572 -2.385,4.727 -5.852,6.527 -10.985,5.277 C 19.616,21.499 17.333,20.685 15.159,19.712 6.417,15.803 -1.536,10.618 -8.458,4.015 c -3.201,-3.054 -6.181,-6.452 -8.687,-10.09 -2.54,-3.688 -1.789,-7.393 1.214,-10.704"
        style={{
          fill: "#fbffff",
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
        }}
      />
    </g>
    <g
      transform="matrix(0.6894712,0,0,-0.7198232,332.53568,128.37004)"
      style={{ fill: "#fbffff", fillOpacity: 1 }}
    >
      <path
        d="m 0,0 c -1.32,3.968 -3.048,6.861 -4.894,10.117 -3.247,5.729 -2.154,11.327 0.409,17.028 0.052,-0.857 0.165,-1.716 0.147,-2.571 -0.088,-4.049 1.109,-7.663 3.304,-11.063 C 2.291,8.363 4.786,2.848 5.369,-3.353 5.7,-6.867 5.355,-10.276 3.701,-13.107 2.697,-8.75 1.442,-4.335 0,0 m 10.759,-20.484 c 5.215,2.259 8.329,6.43 10.627,11.345 -7.861,8.577 -7.861,8.577 -7.615,15.153 -2.495,0.602 -5.021,1.211 -7.882,1.9 2.069,2.054 3.903,3.875 5.745,5.704 -7.085,5.719 -3.496,12.739 -2.757,19.367 -4.499,2.25 -8.959,4.313 -14.174,3.579 -5.244,-0.737 -8.063,-3.44 -8.532,-8.702 -0.212,-2.37 -0.176,-4.794 0.045,-7.165 0.887,-9.535 3.237,-18.734 7.26,-27.413 1.861,-4.013 4.12,-7.929 6.758,-11.472 2.673,-3.592 6.422,-4.074 10.525,-2.296"
        style={{
          fill: "#fbffff",
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
        }}
      />
    </g>
    <g
      transform="matrix(0.6894712,0,0,-0.7198232,373.80818,150.1077)"
      style={{ fill: "#fbffff", fillOpacity: 1 }}
    >
      <path
        d="m 0,0 c -6.024,-0.49 -12.033,-1.289 -18.008,-2.22 -6.13,-0.956 -10.974,1.473 -15.365,5.525 0.755,-0.187 1.527,-0.322 2.26,-0.571 3.834,-1.307 7.627,-1.236 11.525,-0.113 6.122,1.764 12.365,2.545 18.695,1.203 C 2.324,3.142 5.282,1.877 7.879,-0.961 4.961,-0.573 2.441,0.199 0,0 M 15.603,2.692 C 15.293,8.42 12.132,12.598 8.53,16.182 5.528,14.98 2.854,13.745 0.073,12.839 c -2.954,-0.963 -5.789,-0.396 -8.283,1.748 -1.482,-2.441 -2.829,-4.661 -4.341,-7.154 -1.292,2.564 -2.426,4.816 -3.66,7.265 -3.061,-2.927 -6.426,-2.741 -9.748,-1.354 -3.205,1.339 -6.263,3.026 -9.666,4.697 -1.654,-1.905 -3.649,-3.882 -5.273,-6.128 -5.933,-8.205 -3.51,-15.557 6.018,-18.593 0.608,-0.194 1.222,-0.371 1.84,-0.528 9.779,-2.474 19.725,-3.073 29.715,-2.089 4.404,0.434 8.841,1.35 13.051,2.706 4.506,1.45 6.132,4.559 5.877,9.283"
        style={{
          fill: "#fbffff",
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
        }}
      />
    </g>
    <g
      transform="matrix(0.6894712,0,0,-0.7198232,332.96267,157.69528)"
      style={{ fill: "#fbffff", fillOpacity: 1 }}
    >
      <path
        d="M 0,0 C 4.872,1.979 9.484,3.854 13.856,5.629 12.951,9.584 12.015,13.623 11.496,15.896 9.174,15.678 5.046,15.301 1.006,14.922 0.689,10.214 0.353,5.247 0,0"
        style={{
          fill: "#fbffff",
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
        }}
      />
    </g>
    <g
      transform="matrix(0.6894712,0,0,-0.7198232,315.56807,94.698874)"
      style={{ fill: "#fbffff", fillOpacity: 1 }}
    >
      <path
        d="m 0,0 c 3.266,-4.121 6.359,-8.023 9.29,-11.72 3.542,1.977 7.157,4.008 9.192,5.144 -0.86,2.167 -2.38,6.024 -3.877,9.795 C 9.998,2.203 5.135,1.132 0,0"
        style={{
          fill: "#fbffff",
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
        }}
      />
    </g>
    <g
      transform="matrix(0.6894712,0,0,-0.7198232,365.56804,57.864374)"
      style={{ fill: "#fbffff", fillOpacity: 1 }}
    >
      <path
        d="M 0,0 C 2.788,-4.459 5.427,-8.681 7.929,-12.681 4.878,-15.356 1.753,-18.08 0,-19.617 c -1.753,1.537 -4.878,4.261 -7.929,6.936 2.502,4 5.141,8.222 7.929,12.681"
        style={{
          fill: "#fbffff",
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
        }}
      />
    </g>
    <g
      transform="matrix(0.6894712,0,0,-0.7198232,395.31169,157.86437)"
      style={{ fill: "#fbffff", fillOpacity: 1 }}
    >
      <path
        d="m 0,0 c -4.872,1.979 -9.484,3.854 -13.856,5.629 0.905,3.955 1.841,7.994 2.36,10.267 2.322,-0.218 6.45,-0.595 10.49,-0.974 C -0.689,10.214 -0.353,5.247 0,0"
        style={{
          fill: "#fbffff",
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
        }}
      />
    </g>
    <g
      transform="matrix(0.6894712,0,0,-0.7198232,415.56807,96.495624)"
      style={{ fill: "#fbffff", fillOpacity: 1 }}
    >
      <path
        d="m 0,0 c -3.266,-4.121 -6.359,-8.023 -9.29,-11.72 -3.542,1.977 -7.157,4.008 -9.192,5.145 0.86,2.166 2.38,6.023 3.877,9.794 C -9.998,2.203 -5.135,1.132 0,0"
        style={{
          fill: "#fbffff",
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
        }}
      />
    </g>
    <g
      transform="matrix(0.6894712,0,0,-0.7198232,364.25095,120.70904)"
      style={{ fill: "#fbffff", fillOpacity: 1 }}
    >
      <path
        d="M 0,0 -7.422,5.393 C -8.561,6.22 -9.038,7.687 -8.603,9.026 l 2.835,8.726 c 0.435,1.339 1.683,2.245 3.091,2.245 h 9.175 c 1.408,0 2.655,-0.906 3.091,-2.245 L 12.424,9.026 C 12.859,7.687 12.382,6.22 11.243,5.393 L 3.821,0 C 2.682,-0.828 1.139,-0.828 0,0"
        style={{
          fill: "#fbffff",
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
        }}
      />
    </g>
    <g
      transform="matrix(0.6894712,0,0,-0.7198232,403.88823,110.91837)"
      style={{ fill: "#fbffff", fillOpacity: 1 }}
    >
      <path
        d="m 0,0 c -1.165,-1.787 -2.103,-3.637 -2.868,-5.536 -1.721,-4.271 -2.562,-8.787 -3.123,-13.371 -0.187,-1.527 -0.343,-3.063 -0.49,-4.599 -0.04,-0.412 -0.092,-0.814 -0.157,-1.207 -0.129,-0.787 -0.307,-1.537 -0.531,-2.254 -0.559,-1.793 -1.4,-3.381 -2.462,-4.822 -0.425,-0.577 -0.885,-1.13 -1.377,-1.663 -0.983,-1.067 -2.091,-2.054 -3.293,-2.992 -0.601,-0.469 -1.225,-0.925 -1.869,-1.373 0.188,0.443 0.38,0.881 0.572,1.314 0.769,1.731 1.558,3.39 2.253,5.046 0.347,0.829 0.672,1.656 0.958,2.493 0.144,0.418 0.278,0.838 0.401,1.262 0.225,0.773 0.352,1.573 0.429,2.388 0.046,0.489 0.074,0.983 0.095,1.48 0.021,0.497 0.033,0.996 0.049,1.495 0.01,0.332 0.022,0.665 0.037,0.996 0.024,0.498 0.057,0.993 0.109,1.484 0.134,1.241 0.313,2.47 0.549,3.682 0.117,0.605 0.249,1.207 0.396,1.804 0.146,0.597 0.308,1.189 0.487,1.776 0.178,0.587 0.373,1.169 0.585,1.745 0.636,1.729 1.431,3.407 2.417,5.02 0.411,0.672 0.849,1.317 1.321,1.929 0.472,0.611 0.979,1.188 1.526,1.724 0.547,0.537 1.134,1.031 1.77,1.477 0.635,0.446 1.318,0.843 2.054,1.184 C -0.102,0.314 -0.015,0.168 0.006,0.074 0.012,0.043 0.012,0.018 0,0 m 5.485,-0.201 c -0.137,5.664 -3.148,8.877 -8.717,9.554 -4.815,0.586 -9.095,-0.918 -12.986,-3.01 0.272,-3.248 0.646,-6.253 0.741,-9.267 0.101,-3.209 -1.289,-5.819 -4.033,-7.678 1.767,-2.082 3.393,-3.999 5.235,-6.169 -2.9,-0.456 -5.387,-0.847 -7.842,-1.233 2.673,-8.327 -3.846,-11.925 -8.361,-16.798 1.311,-2.077 2.375,-4.5 4.076,-6.332 7.382,-7.947 13.628,-7.436 18.836,0.388 4.417,6.636 7.522,13.886 9.785,21.5 1.847,6.212 3.424,12.493 3.266,19.045"
        style={{
          fill: "#fbffff",
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
        }}
      />
    </g>
    <g
      transform="matrix(0.6894712,0,0,-0.7198232,365.56804,57.864374)"
      style={{ fill: "#fbffff", fillOpacity: 1 }}
    >
      <path
        d="m 0,0 c -2.788,-4.459 -5.427,-8.681 -7.929,-12.681 3.051,-2.675 6.176,-5.399 7.929,-6.936 1.753,1.537 4.878,4.261 7.929,6.936 C 5.427,-8.681 2.788,-4.459 0,0"
        style={{
          fill: "#fbffff",
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
        }}
      />
    </g>
  </>
);

const ves = (
  <g style={{ clipRule: "nonzero" }}>
    <path d="M 470,10 L 145,199 L 500,230 Z" style={{ fill: "black" }} />
  </g>
);

const wac = (
  <g transform="matrix(0.982733,-0,-0,0.982733,-90.5148,13.705)">
    <g>
      <path d="M457.91 189.16c7.94,0.23 15.76,0.43 23.37,0.6l-11.75 -177.38 -23.23 1.54 11.61 175.24z" style={{ fill: "#87212E" }} />
      <path d="M504.58 190.18c8.21,0.12 16.03,0.2 23.35,0.26l-12 -181.14 -23.23 1.54 11.88 179.34z" style={{ fill: "#87212E" }} />
    </g>
  </g>
);

const wad = (
  <g
    transform="matrix(0.28266997,-0.02406952,0.02406952,0.28266997,323.94612,-142.59428)"
    style={{ fill: "#ffffff", stroke: "none" }}
  >
    <path
      d="m 75.70255,758.86218 c 30.0825,37.7971 39.7439,76.0451 37.9979,106.9883 -30.9796,1.8011 -69.319,-7.8481 -107.2006,-37.9978 2.9542,24.4032 16.7929,44.5271 16.7929,74.2974 0,29.7703 -13.8387,50.1066 -16.7929,74.5097 37.8816,-30.1496 76.221,-40.0111 107.2006,-38.2101 l 0,0.212 c 1.801,30.9796 -7.8481,69.31902 -37.9979,107.20052 24.4032,-2.9542 44.5272,-16.7929 74.2975,-16.7929 29.7703,0 50.1065,13.8387 74.5097,16.7929 -30.1497,-37.8815 -40.0112,-76.22092 -38.2101,-107.20052 l 0,-0.212 c 30.9796,-1.801 69.319,8.0605 107.2005,38.2101 -2.9542,-24.4031 -16.7929,-44.7394 -16.7929,-74.5097 0,-29.7703 13.8387,-49.8942 16.7929,-74.2974 -37.8815,30.1497 -76.2209,39.7989 -107.2005,37.9978 -1.7451,-30.9432 8.1276,-69.1912 38.2101,-106.9883 -24.4032,2.9543 -44.7394,16.7929 -74.5097,16.7929 -29.7703,0 -49.8943,-13.8386 -74.2975,-16.7929 z"
      style={{ fill: "#ffffff", stroke: "none" }}
    />
  </g>
);

const wag = (
  <g transform="matrix(0.107947,0,0,0.143713,57.5009,-49.815)">
    <g>
      <path d="M3737.9,665.9L3269.3,609.4L3269.3,1631.6L3737.9,1577L3737.9,665.9Z" style={{ fill: "rgb(11,115,36)" }} />
    </g>
  </g>
);

const wan = (
  <g transform="matrix(0.107947,0,0,0.143713,57.5009,-49.815)">
    <g>
      <g transform="matrix(1.02034,0,0,1.07582,-67.3323,-90.2879)">
        <path d="M3727.8,704.9L3546.8,682.9L3546.8,1571.4L3729.4,1548.9L3727.8,704.9Z" style={{ fill: "rgb(2,20,97)" }} />
      </g>
      <g transform="matrix(1,0,0,0.97042,0,41.0621)">
        <path d="M595,857.2L440,947.8L440,1304L595,1388.2L595,857.2Z" style={{ fill: "rgb(2,20,97)" }} />
      </g>
      <g transform="matrix(0.58896,0.58824,-0.5895,0.59023,1822.95,-212.356)">
        <rect x="1134.21" y="221.033" width="913.446" height="909.529" style={{ fill: "rgb(203,34,22)" }} />
      </g>
    </g>
  </g>
);

const war = (
  <>
    <defs>
      <clipPath id="war-vert30stripe">
        <rect transform="rotate(-4) scale(0.63 0.81) translate(210,60)" x="33.333%" y="0%" width="33.333%" height="100%" />
      </clipPath>
    </defs>
    <g style={{ clipRule: "nonzero" }}>
      <g clipPath="url(#war-vert30stripe)" style={{ clipRule: "nonzero" }}>
        <rect x="0" y="0" width="100%" height="100%" style={{ fill: "#F2F2F2" }} />
      </g>
      <rect transform="rotate(-4) scale(0.63 0.81) translate(210,60) " x="66.666%" y="0%" width="33.333%" height="100%" style={{ fill: "#000000" }} />
    </g>
  </>
);

const wbk = (
  <>
    <defs>
      <clipPath id="wbk-vert30stripe">
        <g transform="rotate(40) scale(1) translate(277,-270)">
          <rect x="0" y="0" width="80" height="300" style={{ fill: "#003399" }} />
        </g>
      </clipPath>
    </defs>
    <g style={{ clipRule: "nonzero" }}>
      <g clipPath="url(#wbk-vert30stripe)" style={{ clipRule: "nonzero" }}>
        <rect x="0" y="0" width="100%" height="100%" style={{ fill: "#EEE300" }} />
      </g>
      <g transform="rotate(40) scale(1) translate(357,-270)">
        <rect x="0" y="0" width="200" height="300" style={{ fill: "#008A2A" }} />
      </g>
    </g>
  </>
);

const wcc = (
  <>
    <defs>
      <clipPath id="wcc-ArtboardFrame">
        <rect height="244.664" width="512.137" x="0" y="0" />
      </clipPath>
    </defs>
    <g clipPath="url(#wcc-ArtboardFrame)">
      <g style={{ opacity: "1" }}>
        <g>
          <path d="M6.07 13.68L467.65 13.68L467.65 13.68L467.65 237.33L467.65 237.33L6.07 237.33L6.07 237.33L6.07 13.68L6.07 13.68Z" style={{ fill: "#493491", fillRule: "nonzero", opacity: "1", stroke: "#000000", strokeLinecap: "butt", strokeLinejoin: "miter", strokeWidth: "0.01" }} />
          <path d="M438.73-10.37L482.44 38.3L257.29 240.47L213.58 191.8L438.73-10.37Z" style={{ fill: "#ffffff", fillRule: "nonzero", opacity: "1", stroke: "#000000", strokeLinecap: "butt", strokeLinejoin: "miter", strokeWidth: "0.01" }} />
          <path d="M431.89 8.62L437.02 14.33L222.41 207.18L217.28 201.47L431.89 8.62Z" style={{ fill: "#fad014", fillRule: "nonzero", opacity: "1", stroke: "none" }} />
          <path d="M484.26 14.42L489.4 20.14L274.78 212.99L269.65 207.27L484.26 14.42Z" style={{ fill: "#fad014", fillRule: "nonzero", opacity: "1", stroke: "none" }} />
        </g>
      </g>
    </g>
  </>
);

const wey = (
  <g style={{ fill: "none", stroke: "#02306f", strokeWidth: 10 }}>
    <path d="M 398,20 L 438,112 L 390,206" />
    <path d="M 426,20 L 466,112 L 418,206" />
  </g>
);

const wgs = (
  <path d="M 270,0 L 500,0 L 500,230 L 272,230 Z" style={{ fill: "#ffcc00" }} />
);

const whs = (
  <text
    x="385"
    y="165"
    style={{ fill: "#2aa02a", fontFamily: "Georgia, serif", fontSize: 130, textAnchor: "middle" }}
  >
    W
  </text>
);

const wil = (
  <g style={{ clipRule: "nonzero" }}>
    <path transform="rotate(0) translate(315, 115)" d="M -80, 0 L 0, 57 L 80, 0 L  0, -57 Z" style={{ fill: "white" }} />
  </g>
);

const win = (
  <g style={{ clipRule: "nonzero" }}>
    <g transform="rotate(-4)  translate(380,143) ">
      <path d="M 25,-100 L -10 ,0 L 25,100" style={{ stroke: "#A00003", strokeWidth: "30", fill: "none" }} />
    </g>
  </g>
);

const wkw = (
  <g transform="matrix(0.107947,0,0,0.143713,57.5009,-49.815)">
    <g transform="matrix(0.5619,0.82721,-0.98913,0.67188,2999.18,-1218.48)">
      <g>
        <path d="M2726.4,803.5L1972.4,377.7L1753,588.2L1753,2161.1C1753,2161.1 1993.6,1908.5 2298.4,1468.5C2482.9,1202.2 2726.4,803.5 2726.4,803.5Z" style={{ fill: "rgb(0,0,158)" }} />
      </g>
    </g>
  </g>
);

const wlt = (
  <>
    <defs>
      <clipPath id="wlt-vert30stripe">
        <g transform="rotate(-4) scale(0.63 0.81) translate(210,60)">
          <rect x="33%" y="0%" width="34%" height="100%" style={{ fill: "#003399" }} />
        </g>
      </clipPath>
    </defs>
    <g style={{ clipRule: "nonzero" }}>
      <g clipPath="url(#wlt-vert30stripe)" style={{ clipRule: "nonzero" }}>
        <rect x="0" y="0" width="100%" height="100%" style={{ fill: "#C1E3FE" }} />
      </g>
      <g transform="rotate(-4) scale(0.63 0.81) translate(210,60)">
        <rect x="67%" y="0%" width="34%" height="100%" style={{ fill: "#660000" }} />
      </g>
    </g>
  </>
);

const wlu = (
  <g>
    <g style={{ opacity: "0.9", clipRule: "nonzero" }}>
      <g transform="rotate(-4) translate(435,20)">
        <path d="M 0,0 l 0,250" style={{ strokeWidth: "30", stroke: "#FFCC00" }} />
      </g>
    </g>
  </g>
);

const wmr = (
  <g>
    <rect y="17.564896" x="105.57769" height="199.6378" width="325.0513" style={{ opacity: "1", fill: "#c33832", fillOpacity: "1", stroke: "#ffffff", strokeWidth: "1", strokeMiterlimit: "4", strokeOpacity: "0.40000000000000002", strokeDasharray: "none" }} />
    <path d="m 396.16,24.69 52.45,-4.01 12.03,179.34 -49.63,-0.14 z" style={{ fill: "#ffffff", fillOpacity: "1", stroke: "#ffffff", strokeWidth: "1", strokeMiterlimit: "4", strokeOpacity: "1", strokeDasharray: "none" }} />
  </g>
);

const woc = (
  <path
    d="m 398.56359,25.01348 21.01371,-1.395417 12.93093,176.316257 -20.93824,-0.17775 z"
    style={{ fill: "#ffff00", stroke: "#ffff00", strokeWidth: 0.97328287 }}
  />
);

const woo = (
  <g transform="rotate(-4) translate(400,20)">
    <path
      d="M 0,0 l 0,300 "
      style={{ stroke: "#8B0000", strokeWidth: 30, fill: "none" }}
    />
  </g>
);

const wpg = (
  <g style={{ clipRule: "nonzero" }}>
    <g>
      <rect transform="matrix(0.70711,-0.70711,0.70711,0.70711,0,0)" y="265.97217" x="229.29297" height="313.90253" width="28" style={{ fill: "#0055d4" }} />
      <rect transform="matrix(0.70711,-0.70711,0.70711,0.70711,0,0)" y="211.74828" x="168.11508" height="324.91666" width="28" style={{ fill: "#d40000" }} />
    </g>
  </g>
);

const wrc = (
  <path
    d="M 109.76752,42.435275 76.110919,192.11109 470.50332,203.51473 z"
    style={{ fill: "#00ffff", stroke: "none" }}
  />
);

const worcesterCross = (fill: string) => (
  <path
    d="m 367.59976,72.007392 c 9.06596,3.998843 13.42347,13.661679 14.2677,24.428073 l 0.7861,10.025045 -10.02504,0.78609 c -10.76639,0.84425 -20.99032,-1.95386 -26.3534,-10.285718 l 1.41695,18.069968 1.41692,18.06996 c 3.99885,-9.06596 13.66258,-13.41215 24.42898,-14.25639 l 10.02502,-0.7861 0.78522,10.01374 c 0.84424,10.76638 -1.95387,20.99031 -10.28573,26.35339 l 18.06998,-1.41695 18.06996,-1.41692 c -9.06596,-3.99885 -13.41215,-13.66258 -14.25639,-24.42897 l -0.78522,-10.01372 10.01374,-0.78523 c 10.76639,-0.84422 20.98943,1.94257 26.35251,10.27443 l -1.41695,-18.06998 -1.41692,-18.069954 c -3.99885,9.065959 -13.66169,13.423464 -24.42807,14.267704 l -10.01374,0.78522 -0.78611,-10.025045 C 392.62105,84.75964 395.40784,74.536591 403.7397,69.173516 l -18.06998,1.416938 -18.06996,1.416938 z"
    style={{ fill, stroke: "none" }}
  />
);

const wro = worcesterCross("#000000");

const wroMen = worcesterCross("#ff6ec7");

const wrr = (
  <g style={{ clipRule: "nonzero" }}>
    <g transform="rotate(-4) translate(400, 20)">
      <path d="M 10,0 l 0,300 " style={{ stroke: "#000000", strokeWidth: "20", fill: "none" }} />
      <path d="M -10,0 l 0,300 " style={{ stroke: "#ef402d", strokeWidth: "20", fill: "none" }} />
      <path d="M -30,0 l 0,300 " style={{ stroke: "#000000", strokeWidth: "20", fill: "none" }} />
    </g>
  </g>
);

const wsg = (
  <g transform="matrix(0.107947,0,0,0.143713,57.5009,-49.815)">
    <g>
      <g transform="matrix(0.99955,0,0,1.01504,1.689,-18.5594)">
        <path d="M3741.1,1124L438.5,1124L438.5,1305.5C438.5,1305.5 1029.2,1694.2 2089.8,1687C2971.2,1681 3741.1,1571 3741.1,1571L3741.1,1124Z" style={{ fill: "rgb(203,34,22)" }} />
      </g>
      <g transform="matrix(0.99876,0,0,0.89577,2.03556,-45.9889)">
        <path d="M3741.1,797.1C3741.1,797.1 2742.7,639.7 1976.9,670.6C987.3,710.4 438.5,1124 438.5,1124L438.5,1305.5L3741.1,1305.5L3741.1,797.1Z" style={{ fill: "rgb(2,20,97)" }} />
      </g>
    </g>
  </g>
);

const wsw = (
  <g transform="matrix(0.107947,0,0,0.143713,57.5009,-49.815)">
    <g transform="matrix(0.5619,0.82721,-0.98913,0.67188,2999.18,-1218.48)">
      <g>
        <path d="M2726.4,803.5L1972.4,377.7L1753,588.2L1753,2161.1C1753,2161.1 1993.6,1908.5 2298.4,1468.5C2482.9,1202.2 2726.4,803.5 2726.4,803.5Z" style={{ fill: "rgb(203,34,22)" }} />
      </g>
    </g>
  </g>
);

const wtn = (
  <g>
    <path d="M 240,0 L 345,0 L 357,230 L 250,230 Z" style={{ fill: "#ffcc00" }} />
    <path d="M 345,0 L 500,0 L 500,230 L 357,230 Z" style={{ fill: "#1f28f8" }} />
  </g>
);

const yal = (
  <g style={{ clipRule: "nonzero" }}>
    <g transform="rotate(-3) translate(0,130)">
      <rect x="0" y="0" width="100%" height="50%" style={{ fill: "#002a5c" }} />
    </g>
  </g>
);

const yrk = (
  <g transform="rotate(60) translate(350,-390)">
    <path
      d="M -63,00 l 0,350 "
      style={{ stroke: "#FFCC33", strokeWidth: 25, fill: "none" }}
    />
    <path
      d="M -95,00 l 0,350 "
      style={{ stroke: "#000000", strokeWidth: 25, fill: "none" }}
    />
    <path
      d="M -127,00 l 0,350 "
      style={{ stroke: "#840073", strokeWidth: 25, fill: "none" }}
    />
  </g>
);

const zar = (
  <g transform="matrix(0.107947,0,0,0.143713,57.5009,-49.815)">
    <g>
      <g transform="matrix(0.99818,0,0,1,0.81165,0)">
        <path d="M1545,588C1545,588 1200,642.9 914.2,736.9C717.7,801.5 446,956 446,956L443,1309C443,1309 640.9,1416.7 868.1,1500.8C1069.3,1575.4 1545,1659 1545,1659L1545,588Z" style={{ fill: "rgb(203,34,22)" }} />
      </g>
      <g transform="matrix(0.80437,0,0,3.48589,2494.25,-2766.51)">
        <path d="M1543,985.3C1543,985.3 1124.7,973.2 941.9,968.3C776.5,963.9 446,959.2 446,959.2L446,1271.8C446,1271.8 813.7,1265.7 991.2,1261C1174.4,1256 1545,1245.5 1545,1245.5L1543,985.3Z" style={{ fill: "rgb(11,115,36)" }} />
      </g>
      <g transform="matrix(1.19199,0,0,3.35737,1011.37,-2621.64)">
        <path d="M1545,952.7C1545,952.7 1123.7,943.9 940.6,945C776.4,946 446,956 446,956L446,1275C446,1275 783.3,1284.8 950,1285.8C1133.1,1286.8 1545,1277.4 1545,1277.4L1545,952.7Z" style={{ fill: "rgb(253,218,37)" }} />
      </g>
    </g>
  </g>
);
