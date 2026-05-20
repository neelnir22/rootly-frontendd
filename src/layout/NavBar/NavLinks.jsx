function NavLinks() {
  return (
    <div className="flex items-center">
      <ul className="flex items-center gap-8">
        <li>
          <a
            href="#features"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Features
          </a>
        </li>
        <li>
          <a
            href="#pricing"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Pricing
          </a>
        </li>
        <li>
          <a
            href="#use-cases"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Use Cases
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavLinks;
