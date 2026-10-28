/* Coordinates use the original screenshot pixel grids, never slide percentages. */
window.INTERFACE_SHOTS = {
  code: {file:'code-switch.png', width:2788, height:1660, crop:[0,0,2788,1660], focus:[410,6,70,56], zoom:[324,0,174,85], caption:'Select Code at the top left'},
  codeZoom: {file:'code-switch-closeup.png', width:1622, height:970, crop:[285,265,1050,445], focus:[812,291,492,391], caption:'Code switch detail · illustrated enlargement'},
  environment: {file:'environment.png', width:1616, height:1120, crop:[0,620,1616,500], zoom:[478,115,645,167], marks:[[50,1066,244,49],[497,211,315,58]], caption:'Choose This computer from the environment menu'},
  permissions: {file:'permissions.png', width:1602, height:654, crop:[0,0,1602,654], marks:[[520,604,113,49],[546,182,587,83]], caption:'Open permissions then select Manual'},
  folder: {file:'folder-menu.png', width:1847, height:851, crop:[0,0,1847,851], marks:[[356,790,206,56],[369,697,519,66]], caption:'Choose… → Open folder… → select Web-Builder'},
  model: {file:'model-effort.png', width:1620, height:636, crop:[0,0,1620,636], marks:[[1231,579,276,51],[1156,240,329,53],[511,194,607,49]], caption:'Select Sonnet and start with Medium effort'},
  usage: {file:'usage.png', width:1616, height:362, crop:[0,0,1616,362], focus:[1513,301,50,50], caption:'Click the bottom-right circle to check usage limits'},
  context: {file:'context.png', width:2274, height:1664, crop:[0,0,2274,1664], marks:[[1895,6,59,59],[1722,431,539,135]], zoom:[1700,419,574,630], caption:'Open the top-right session panel then check Context'}
};
let annotationId=0;
window.annotatedShot = function(key, options={}) {
  const s=window.INTERFACE_SHOTS[options.zoom&&key==='code'?'codeZoom':key], crop=options.zoom?(s.zoom||s.crop):(options.crop||s.crop);
  const rectangles=s.marks||[s.focus];
  const clip=`annotation-crop-${++annotationId}`;
  return `<svg class="annotated-shot" viewBox="${crop.join(' ')}" role="img" aria-label="${s.caption}" data-shot="${key}" xmlns="http://www.w3.org/2000/svg"><defs><clipPath id="${clip}"><rect x="${crop[0]}" y="${crop[1]}" width="${crop[2]}" height="${crop[3]}"/></clipPath></defs><g clip-path="url(#${clip})"><image href="shared/assets/lab1-interface/${s.file}" x="0" y="0" width="${s.width}" height="${s.height}"/>${rectangles.map(([x,y,w,h])=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${key==='usage'?w/2:8}" fill="none" stroke="#F0A536" stroke-width="4" vector-effect="non-scaling-stroke"/>`).join('')}</g></svg>`;
};
