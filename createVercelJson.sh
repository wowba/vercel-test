echo \{ \"rewrites\": \[ \{ \"source\": \"/api/:path*\", \"destination\": \"$1\" \} \] \} > vercel.json