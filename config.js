/* Panel de BINs SisVentas — configuración de Supabase (versión externa)
   ------------------------------------------------------------
   1. Crea tu proyecto gratis en https://supabase.com
   2. En Supabase, ejecuta supabase.sql en el SQL Editor.
   3. Copia tu Project URL y tu anon public key desde
      Settings > API (en el panel de Supabase).
   4. Pega esos DOS valores aquí, entre las comillas, y guarda.
   5. Sube index.html + config.js juntos al mismo hosting
      (GitHub Pages, Netlify Drop o Hostinger).

   NO inventes valores: si dejas los marcadores tal como están,
   el panel funciona en modo local y avisa en la parte superior
   que falta configurar Supabase. La clave "anon" es pública por
   diseño (va en el navegador): cualquiera que abra tu página
   podría ver y cambiar los BINs, por eso esta versión es para
   uso personal. No compartas el enlace públicamente. */

window.SUPABASE_CONFIG = {
  url: "https://vdcedlmsdlvmxcbrpwua.supabase.co",
  anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkY2VkbG1zZGx2bXhjYnJwd3VhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTM5MzQ1MDgsImV4cCI6MjEwOTUxMDUwOH0.UkApK3txa4gLSs5hTxbCbZ5kY0WZ9XcDcsxsOlzhZEg"
};
