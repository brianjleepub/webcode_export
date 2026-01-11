# CLAUDE.md - AI Assistant Guide

This document provides comprehensive guidance for AI assistants working on this codebase.

## Repository Overview

**Repository**: `brianjleepub/webcode_export`
**Status**: Fresh repository - Initial setup phase
**Primary Branch**: TBD (to be determined with first commit)
**Development Branch Pattern**: `claude/claude-md-<session-id>`

## Codebase Structure

### Current State
This repository is currently empty and awaiting initial setup.

### Recommended Structure
Once development begins, consider organizing the codebase as follows:

```
/
├── src/              # Source code
├── tests/            # Test files
├── docs/             # Documentation
├── config/           # Configuration files
├── scripts/          # Build and utility scripts
└── .github/          # GitHub workflows and templates
```

## Development Workflows

### Git Workflow

#### Branch Naming Convention
- Feature branches: `claude/claude-md-<session-id>-<short-description>`
- Current development branch: `claude/claude-md-mkaa0hox3wbmjhzy-So1Xz`
- All development MUST happen on designated Claude branches
- Branch names MUST start with `claude/` and end with the session ID to avoid 403 errors

#### Commit Guidelines
- Write clear, descriptive commit messages
- Use imperative mood ("Add feature" not "Added feature")
- Focus on the "why" rather than the "what"
- Structure: `<type>: <subject>` (e.g., "feat: Add user authentication")
  - `feat`: New feature
  - `fix`: Bug fix
  - `refactor`: Code refactoring
  - `docs`: Documentation changes
  - `test`: Test additions/updates
  - `chore`: Maintenance tasks

#### Push Protocol
- Always use: `git push -u origin <branch-name>`
- CRITICAL: Branch must start with `claude/` and end with matching session ID
- Retry on network failures: up to 4 times with exponential backoff (2s, 4s, 8s, 16s)
- Never force push to main/master without explicit permission

#### Pull Request Process
1. Ensure all tests pass
2. Review your own changes first
3. Write comprehensive PR description including:
   - Summary of changes (bullet points)
   - Test plan (checklist)
   - Any breaking changes
4. Use `gh pr create` with proper formatting

### Development Best Practices

#### Code Quality
- Never propose changes to code you haven't read
- Always read files before modifying them
- Avoid over-engineering - keep solutions simple and focused
- Don't add features beyond what was requested
- Only add error handling for scenarios that can actually happen
- Delete unused code completely - no backwards-compatibility hacks

#### Security
- Watch for OWASP Top 10 vulnerabilities:
  - Command injection
  - XSS (Cross-Site Scripting)
  - SQL injection
  - Insecure deserialization
  - Authentication/authorization flaws
- Validate input at system boundaries only
- Trust internal code and framework guarantees
- Fix security issues immediately upon discovery

#### Performance
- Avoid premature optimization
- Don't create abstractions for one-time operations
- Three similar lines of code is better than a premature abstraction
- Profile before optimizing

## Code Conventions

### General Principles
- Write self-documenting code
- Only add comments where logic isn't self-evident
- Use descriptive variable and function names
- Keep functions focused on single responsibilities
- Prefer composition over inheritance

### File Organization
- Group related functionality together
- Keep file sizes manageable (typically under 300-400 lines)
- Use index files for clean exports when appropriate
- Co-locate tests with source files when it makes sense

### Error Handling
- Fail fast and fail loudly in development
- Provide helpful error messages
- Only catch errors you can actually handle
- Don't swallow errors silently

## Testing Practices

### Testing Strategy
- Write tests for business logic
- Test edge cases and error conditions
- Keep tests simple and readable
- Use descriptive test names that explain the scenario

### Test Organization
- Mirror source code structure in test directories
- Group related tests together
- Use setup/teardown appropriately
- Mock external dependencies

### Coverage Goals
- Aim for high coverage of critical paths
- Don't chase 100% coverage blindly
- Focus on testing behavior, not implementation details

## Documentation Standards

### Code Documentation
- Document public APIs
- Explain complex algorithms or business logic
- Keep documentation close to the code it describes
- Update docs when code changes

### README Files
- Project overview and purpose
- Quick start guide
- Installation instructions
- Basic usage examples
- Link to more detailed documentation

### CHANGELOG
- Track notable changes between versions
- Group changes by type (Added, Changed, Deprecated, Removed, Fixed, Security)
- Include version numbers and dates
- Link to relevant issues/PRs

## AI Assistant Guidelines

### Task Management
- Use TodoWrite tool for complex multi-step tasks (3+ steps)
- Update task status in real-time
- Mark tasks complete immediately after finishing
- Only one task should be in_progress at a time
- Remove tasks that are no longer relevant

### Tool Usage
- Use specialized tools over bash commands when possible:
  - Read for reading files (not cat/head/tail)
  - Edit for editing files (not sed/awk)
  - Write for creating files (not echo/heredoc)
  - Grep for searching content
  - Glob for finding files
- Use Task tool with Explore agent for codebase exploration
- Make parallel tool calls when there are no dependencies
- Never use placeholders or guess missing parameters

### Communication
- Keep responses short and concise (CLI context)
- Use GitHub-flavored markdown
- Output text directly - don't use bash echo to communicate
- Only use emojis if explicitly requested
- Don't use superlatives or excessive praise
- Focus on technical accuracy over validation

### Code References
- Use `file_path:line_number` pattern when referencing code
- Example: `src/services/process.ts:712`
- Makes it easy for users to navigate to specific locations

### Planning
- Provide concrete implementation steps without time estimates
- Never suggest timelines like "this will take 2-3 weeks"
- Focus on what needs to be done, not when
- Break work into actionable steps
- Let users decide scheduling

### When Working on Tasks
1. Read relevant files first - never propose changes to unread code
2. Use TodoWrite to plan if task has multiple steps
3. Make changes incrementally
4. Test as you go
5. Commit with clear messages
6. Push to designated branch
7. Create PR when ready

## Project-Specific Conventions

### Technology Stack
To be determined as project development begins.

### Architecture Patterns
To be documented once architectural decisions are made.

### Third-Party Dependencies
To be listed and justified as they are added.

### Environment Setup
To be documented once development environment is established.

### Build Process
To be documented once build tools are configured.

### Deployment Process
To be documented once deployment pipeline is established.

## Resources

### Internal Documentation
- This file (CLAUDE.md) - AI assistant guide
- README.md - Project overview (to be created)
- CONTRIBUTING.md - Contribution guidelines (if created)

### External Resources
- Git documentation: https://git-scm.com/doc
- GitHub CLI: https://cli.github.com/manual/

## Changelog

### 2026-01-11
- Initial CLAUDE.md creation
- Established git workflow conventions
- Documented AI assistant guidelines
- Set up structure for future documentation

---

**Note**: This document is a living guide and should be updated as the project evolves. When significant changes are made to workflows, conventions, or architecture, update this file to reflect the current state of the project.
