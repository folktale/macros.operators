macro (::) {
  rule infix { $obj:expr | $name:ident } => {
    $obj.prototype.$name
  }
}


teste::beleza;