function natives2(id, m, n){
    div = document.getElementById(id);
    
    do {
        document.write(m+ "<br>");
        m+=0.1;
    } while (m < n && m % 1==0);
}